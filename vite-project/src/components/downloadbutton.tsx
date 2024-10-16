import downloadSvgUrl from "../assets/download.svg";
import resumePdfUrl from "../assets/Rajan,Jorrel.pdf";

const DownloadButton = () => {
    return (
        <a href={resumePdfUrl}>
            <div className="bg-theme-white p-3 rounded-2xl flex transition-all duration-300 hover:rounded-3xl hover:shadow-2xl">
                <img src={downloadSvgUrl} alt="Download" className="h-[28px] object-contain mr-1" />
                <p className="font-playfair-display text-xl text-theme-darkgreen">Download Resume</p>
            </div>
        </a>
    )
}

export default DownloadButton;