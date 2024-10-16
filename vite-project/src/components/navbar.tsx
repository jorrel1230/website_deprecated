import DownloadButton from "./downloadbutton.tsx";

const Navbar = () => {
    return (
        <div className="h-[12.5vh] bg-theme-green p-5 flex items-center">
            <div className="group relative">
                <a href="/">
                    <h1 className="font-playfair-display text-3xl text-theme-white pb-1">Jorrel Rajan</h1>
                </a>
                <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full"></span>
            </div>


            <div className="flex ml-auto items-center">
                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative"
                   href="/#about">
                    <p>About Me</p>
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full">
                    </span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative"
                   href="/#experience">
                    <p>Experience</p>
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full">
                    </span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative"
                   href="/#projects">
                    <p>Projects</p>
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full">
                    </span>
                </a>

                <a className="ml-5 font-playfair-display text-xl text-theme-white group relative"
                   href="/#contact">
                    <p>Contact Me</p>
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-theme-white transition-all duration-300 group-hover:w-full">
                    </span>
                </a>

                <div className="ml-7">
                    <DownloadButton/>
                </div>


            </div>

        </div>
    )
}

export default Navbar;