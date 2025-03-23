"use client"

import { Import } from "lucide-react"
import { useState } from "react";
import { APP_NAME } from "../../../constants";

export default function Page() {

    const [link, setLink] = useState('');
    const [isValid, setIsValid] = useState<boolean>(false);

    // @ts-ignore
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setLink(inputValue);

        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+(\/.*)?$/;

        if (githubRegex.test(inputValue)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
        console.log({ inputValue })

        if (e.key == "Enter" && isValid == true) {
            window.alert("Valid link")
            console.log("Valid link")
        }
    };

    const inputClasses = `mt-1 p-2 w-full border rounded-md outline-none transition-all duration-300 ${isValid === true
        ? 'border-green-600 text-green-700'
        : 'border-gray-300 text-gray-900'
        }`;


    return (
        <>
            <div className="fixed top-0 h-12 bg-zinc-200 w-full">
                <p className="ml-4 mt-2 text-2xl font-sans">{APP_NAME}</p>
            </div>
            <div className=" w-screen h-screen flex items-center justify-center">
                <div className="shadow-xl p-4 flex flex-row space-x-4 border rounded-xl border-zinc-100">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={(e) => { }}
                            className="rounded-lg border-2 border-zinc-300 h-10 w-auto flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 hover:border-zinc-400 duration-300 transition-all text-zinc-600 px-6">
                            Import project <Import className="ml-2 text-zinc-600" /></button>

                        <div className="h-[1px] w-full bg-gray-300" />
                        <form action={"#"} method="post">
                            <input
                                type="text"
                                name="githubLink"
                                id="githubLink"
                                className={inputClasses}
                                placeholder="Enter your github link here    "
                                value={link}
                                onChange={handleInputChange}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (isValid) {
                                        window.alert("Valid")
                                    }
                                }}
                            /></form>

                    </div>
                    <div className="">
                        <textarea rows={6} cols={60} className="resize-none bg-zinc-100 p-2 border border-zinc-300 rounded-xl" placeholder="Or enter a prompt maybe , press Enter when done" onKeyDown={(e) => {
                            if (e.key == "Enter") {
                                window.alert("You pressed enter")
                            }
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}