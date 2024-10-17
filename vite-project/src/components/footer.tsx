import DownloadButton from "./downloadbutton.tsx";

const Footer = () => {
    return (
        <div className="h-[12.5vh] w-full bg-theme-green rounded-t-2xl p-8 items-center relative">
            <p className="font-playfair-display text-lg text-theme-white">Built By Jorrel Rajan</p>
            <p className="font-playfair-display text-lg text-theme-white">using React.js and TailwindCSS.</p>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[48%] top-[63%] text-center">
                <div className="font-playfair-display text-lg text-theme-white flex space-x-20">
                    <a href="mailto:jorrel@princeton.edu" className="underline">jorrel@princeton.edu</a>
                    <a href="https://github.com/jorrel1230" className="underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/jorrel-rajan" className="underline">LinkedIn</a>
                </div>
            </div>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 -right-[5%] top-[55%]">
                <DownloadButton/>
            </div>

        </div>
    )
}

export default Footer;