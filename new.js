async function* getRepoContentsChunked(repoUrl) {
    try {
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) {
            throw new Error("Invalid GitHub repository URL.");
        }
        const owner = match[1];
        const repo = match[2];

        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch repository contents: ${response.statusText}`);
        }

        const data = await response.json();
        yield* processContentsChunked(data, owner, repo);

    } catch (error) {
        yield { error: error.message };
    }
}

async function* processContentsChunked(contents, owner, repo, path = '') {
    for (const item of contents) {
        if (item.type === 'file') {
            yield {
                type: 'file',
                name: item.name,
                path: `${path}${item.name}`,
                download_url: item.download_url,
                content: await fetchRawContent(owner, repo, `${path}${item.name}`)
            };
        } else if (item.type === 'dir') {
            const dirContents = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}${item.name}`);
            if (!dirContents.ok) {
                yield { error: `Failed to fetch directory contents: ${dirContents.statusText}` };
                continue;
            }

            const dirData = await dirContents.json();
            yield {
                type: 'directory',
                name: item.name,
                path: `${path}${item.name}`,
                contents: await processContentsChunked(dirData, owner, repo, `${path}${item.name}/`).next().value
            };
            yield* processContentsChunked(dirData, owner, repo, `${path}${item.name}/`);
        }
    }
}

async function fetchRawContent(owner, repo, filePath) {
    try {
        const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/master/${filePath}`;
        const rawResponse = await fetch(rawUrl);

        if (!rawResponse.ok) {
            if (rawResponse.status === 404) {
                const rawUrlMain = `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`;
                const rawResponseMain = await fetch(rawUrlMain);
                if (rawResponseMain.ok) {
                    return await rawResponseMain.text();
                }
                else {
                    return `File not found in either master or main branch: ${filePath}`;
                }
            }
            return `Failed to fetch raw content: ${rawResponse.statusText}`;
        }

        return await rawResponse.text();
    } catch (error) {
        return `Error fetching raw content: ${error.message}`;
    }
}

async function main() {
    const repoUrl = "https://github.com/ashishk15678/main";
    const data = []; // Array to store all chunks
    let errorOccurred = false;

    for await (const chunk of getRepoContentsChunked(repoUrl)) {
        if (chunk.error) {
            console.error("Error:", chunk.error);
            errorOccurred = true;
            data.push(chunk); //push error into data array as well.
        } else {
            data.push(chunk);
        }
    }

    if (!errorOccurred) {
        console.log("All chunks received:", data);
        // Process the complete 'data' array
    } else {
        console.log("Chunks received with errors:", data);
    }
    return data; // Return the data array.
}

main();