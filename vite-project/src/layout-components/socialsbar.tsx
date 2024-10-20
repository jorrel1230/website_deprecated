import githubSVG from "../assets/github.svg";
import instaSVG from "../assets/insta.svg";
import linkedinSVG from "../assets/linkedin.svg";
import emailPNG from "../assets/email.png";
import { useEffect, useState } from "react";

const SocialsSVGSupported = () => {
    return (
        <div className="fixed bottom-0">
            <div className="h-[87.5vh] w-[5vw] relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="54.5 -3 91 626"
                     className="absolute bottom-0">
                    {/*Main vertical line with alternating left and right routing*/}
                    <path d="M100 0 L100 20 L60 60 L60 100 L100 140 L100 180 L140 220 L140 260 L100 300
             L100 340 L60 380 L60 420 L100 460 L100 500 L140 540 L140 580 L100 620"
                          stroke="#3d3f33" strokeWidth="4" fill="none"/>

                    {/*Connections to boxes*/}
                    <path d="M60 80 L80 80" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M140 240 L120 240" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M60 400 L80 400" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M140 560 L120 560" stroke="#3d3f33" strokeWidth="4" fill="none"/>

                    {/*Connections to leaves*/}
                    <path d="M100 140 L136.5 176.5" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M100 300 L60 260 L60 225" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M100 460 L136.5 423.5" stroke="#3d3f33" strokeWidth="4" fill="none"/>
                    <path d="M100 620 L63.5 583.5" stroke="#3d3f33" strokeWidth="4" fill="none"/>

                    {/*Leaves*/}
                    <circle cx="140" cy="180" r="5" stroke="#3d3f33" fill="none"/>
                    <circle cx="60" cy="220" r="5" stroke="#3d3f33" fill="none"/>
                    <circle cx="140" cy="420" r="5" stroke="#3d3f33" fill="none"/>
                    <circle cx="60" cy="580" r="5" stroke="#3d3f33" fill="none"/>

                    {/*Square boxes*/}
                    <rect x="80" y="60" width="40" height="40" fill="none" stroke="#3d3f33" strokeWidth="2"/>
                    <rect x="80" y="220" width="40" height="40" fill="none" stroke="#3d3f33" strokeWidth="2"/>
                    <rect x="80" y="380" width="40" height="40" fill="none" stroke="#3d3f33" strokeWidth="2"/>
                    <rect x="80" y="540" width="40" height="40" fill="none" stroke="#3d3f33" strokeWidth="2"/>

                    {/*Dots*/}
                    <circle cx="100" cy="0" r="3" fill="#3d3f33"/>
                    <circle cx="100" cy="620" r="3" fill="#3d3f33"/>
                    <circle cx="60" cy="80" r="3" fill="#3d3f33"/>
                    <circle cx="140" cy="240" r="3" fill="#3d3f33"/>
                    <circle cx="60" cy="400" r="3" fill="#3d3f33"/>
                    <circle cx="140" cy="560" r="3" fill="#3d3f33"/>

                    {/*Buttons*/}
                    <foreignObject x="80" y="60" width="40" height="40">
                        <a href="https://github.com/jorrel1230" className="group absolute">
                            <div className="bg-theme-darkgreen transition-all duration-300 ease-in-out
                                        group-hover:scale-110 group-hover:bg-theme-green">
                                <img src={githubSVG} className="invert" alt="github link"/>
                            </div>
                        </a>
                    </foreignObject>

                    <foreignObject x="80" y="220" width="40" height="40">
                        <a href="https://www.linkedin.com/in/jorrel-rajan" className="group absolute">
                            <div className="bg-theme-darkgreen transition-all duration-300 ease-in-out
                                        group-hover:scale-110 group-hover:bg-theme-green">
                                <img src={linkedinSVG} className="invert" alt="linkedin link"/>
                            </div>
                        </a>
                    </foreignObject>

                    <foreignObject x="80" y="380" width="40" height="40">
                        <a href="mailto:jorrel@princeton.edu" className="group absolute">
                            <div className="bg-theme-darkgreen transition-all duration-300 ease-in-out
                                        group-hover:scale-110 group-hover:bg-theme-green">
                                <img src={emailPNG} className="invert scale-75" alt="email link"/>
                            </div>
                        </a>
                    </foreignObject>

                    <foreignObject x="80" y="540" width="40" height="40">
                        <a href="https://www.instagram.com/_jorrel/" className="group absolute">
                            <div className="bg-theme-darkgreen transition-all duration-300 ease-in-out
                                        group-hover:scale-110 group-hover:bg-theme-green">
                                <img src={instaSVG} className="invert" alt="insta link"/>
                            </div>
                        </a>
                    </foreignObject>
                </svg>

            </div>
        </div>
    )
}

const SocialsSVGUnsupported = () => {
    return (
        <div className="fixed bottom-0 h-[87.5vh] w-[5vw]">
            <div className="relative h-full w-full">
                <div className="absolute bottom-0">

                    <a href="https://github.com/jorrel1230" className="group">
                        <div className="bg-theme-darkgreen w-fit m-3 rounded-lg
                                transition-all duration-300 ease-in-out
                                group-hover:scale-110 group-hover:bg-theme-green">
                            <img src={githubSVG} className="invert" alt="github link"/>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/jorrel-rajan" className="group">
                        <div className="bg-theme-darkgreen w-fit m-3 rounded-lg
                                transition-all duration-300 ease-in-out
                                group-hover:scale-110 group-hover:bg-theme-green">
                            <img src={linkedinSVG} className="invert" alt="linkedin link"/>
                        </div>
                    </a>

                    <a href="mailto:jorrel@princeton.edu" className="group">
                        <div className="bg-theme-darkgreen w-fit m-3 rounded-lg
                                transition-all duration-300 ease-in-out
                                group-hover:scale-110 group-hover:bg-theme-green">
                            <img src={emailPNG} className="invert scale-75" alt="email link"/>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/_jorrel/" className="group">
                        <div className="bg-theme-darkgreen w-fit m-3 rounded-lg
                                transition-all duration-300 ease-in-out
                                group-hover:scale-110 group-hover:bg-theme-green">
                            <img src={instaSVG} className="invert" alt="insta link"/>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

const SocialsBar = () => {

    const [shouldRenderSVG, setShouldRenderSVG] = useState(true);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();

        // Check if the browser is Safari
        const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');

        // Check if the device is an iPhone or iPad
        const isiOS = /iphone|ipad|ipod/.test(userAgent);

        // If both Safari or iOS, prevent SVG from rendering
        if (isSafari || isiOS) {
            setShouldRenderSVG(false);
        }
    }, []);


    return (
        shouldRenderSVG ? SocialsSVGSupported() : SocialsSVGUnsupported()
    )
}

export default SocialsBar;