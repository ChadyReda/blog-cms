import Link from "next/link";

const SideBar = () => {
    return (
        <nav className="w-[60px] sm:w-[200px] h-full rounded-md border border-neutral-600 flex flex-col justify-between">
            <div>
                <header className="border-b border-neutral-600 pb-6 m-4">
                    <Link href="" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                        <h1 className="font-bold text-2xl text-center px-4 mt-1 hidden sm:block">Mod CMS</h1>
                    </Link>
                </header>
                <ul className="h-[160px] grid gap-y-2 grid-rows-3 w-full sm:p-4">
                    <li className="active rounded-md flex items-center m-2 sm:m-0 justify-center sm:justify-normal sm:px-4 border border-neutral-800">
                        <Link href="" className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg>
                            <span className="ml-2 hidden md:block">Preview</span>
                        </Link> 
                    </li>
                    <li className="rounded-md flex items-center m-2 sm:m-0 justify-center sm:px-4 sm:justify-normal border border-neutral-800">
                        <Link href="" className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                            <span className="ml-2 hidden md:block">Profile</span>
                        </Link> 
                    </li>
                    <li className="rounded-md flex items-center m-2 sm:m-0 justify-center sm:px-4 sm:justify-normal border border-neutral-800">
                        <Link href="" className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>
                            <span className="ml-2 hidden md:block" >Edit</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <footer className="my-4">
                <p className="text-neutral-400 hidden sm:block text-sm p-4 text-center">
                    this cms is made by chady and its an open source in github
                </p>
                <p className="text-center text-sm hidden sm:block ">
                    <a href="" className="text-purple-400">github source folder</a>
                </p>
            </footer>
        </nav>
    )
}

export default SideBar;