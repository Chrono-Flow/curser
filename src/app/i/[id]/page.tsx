import { exec } from "child_process";
import { APP_NAME } from "../../../../constants";

export default function Page({ params }: { params: { id: string } }) {


    return (
        <div className="flex flex-col h-screen w-full">
            <div className="absolute md:hidden z-100 bg-white text-red-500 font-extrabold h-screen w-screen flex flex-col items-center justify-center text-2xl">
                Only supported on pcs for now <br />
                <p className="font-normal">Soon bringing on phones</p>
            </div>
            <div className="h-20 w-full bg-zinc-400 ">
                {APP_NAME}
            </div>
            <div className="w-screen h-full justify-center items-center flex space-x-4 p-4">
                <div className="flex flex-col space-y-4 w-1/3 h-full">
                    <div className="bg-zinc-100 w-full h-2/3 rounded-xl"></div>

                    {/* textbox */}
                    <div className=" w-full h-1/3 rounded-xl py-2">
                        <textarea cols={20} placeholder="Enter your prompt" className="resize-none text-md w-full h-full p-2 
                        border border-blue-200 border-6 text-zinc-500 rounded-xl bg-zinc-100 outline-none focus:outline-none" />
                    </div>
                </div>
                <div className=" w-full h-full ring ring-blue-200 rounded-xl">
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}