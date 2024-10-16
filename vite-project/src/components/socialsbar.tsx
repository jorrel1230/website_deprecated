import linkTreeSVG from "../assets/linktree.svg";
import githubSVG from "../assets/github.svg";
import instaSVG from "../assets/insta.svg";
import linkedinSVG from "../assets/linkedin.svg";
import emailPNG from "../assets/email.png";

const SocialsBar = () => {
    return (
        <div className="h-[87.5vh] w-[6.2vw] relative">
            <img src={linkTreeSVG} className="absolute h-[100%] w-[100%]" alt="linktree"/>

            <a href="https://github.com/jorrel1230" className="group">
                <div className="top-[13.25%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2
                                bg-theme-green h-13 w-13 rounded-none
                                transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:rounded-lg">
                    <img src={githubSVG} className="h-[100%] w-[100%] invert" alt="github link"/>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/jorrel-rajan" className="group">
                <div className="top-[38.75%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2
                                bg-theme-green h-13 w-13 rounded-none
                                transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:rounded-lg">
                    <img src={linkedinSVG} className="h-[100%] w-[100%] invert" alt="linkedin link"/>
                </div>
            </a>

            <a href="mailto:jorrel@princeton.edu" className="group">
                <div className="top-[64.5%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2
                                bg-theme-green h-13 w-13 rounded-none
                                transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:rounded-lg">
                    <img src={emailPNG} className="h-[100%] w-[100%] invert scale-75" alt="email link"/>
                </div>
            </a>

            <a href="https://www.instagram.com/_jorrel/" className="group">
                <div className="top-[89.875%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2
                                bg-theme-green h-13 w-13 rounded-none
                                transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:rounded-lg">
                    <img src={instaSVG} className="h-[100%] w-[100%] invert" alt="insta link"/>
                </div>
            </a>
        </div>

    )
}

export default SocialsBar;