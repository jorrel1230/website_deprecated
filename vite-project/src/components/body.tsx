import SectionCard from "./sectioncard.tsx";
import profilePhotoURL from "../assets/profile_photo.svg"
import Footer from "./footer.tsx";

const Body = () => {
    return (
        <div className="bg-theme-white w-full h-full pl-[8vw] pr-[8vw] pt-[8vw]">

                <SectionCard id="landing_card" title="">
                        <div className="relative h-[70vh]">
                                <div
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/3">
                                        <p className="font-playfair-display text-xl text-theme-green">
                                                Hi, I'm
                                        </p>
                                        <h1 className="font-playfair-display text-8xl text-theme-darkgreen">
                                                Jorrel Rajan.
                                        </h1>
                                        <p className="font-playfair-display text-3xl text-theme-green mt-10">
                                                Full Stack Developer. <br/> Software Engineer.
                                        </p>
                                        <p className="font-playfair-display text-2xl text-theme-darkgreen mt-10">
                                                Scroll to learn more about me!
                                        </p>
                                </div>
                                <img src={profilePhotoURL} alt="Profile Photo"
                                     className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[76%] rounded-full"/>
                        </div>
                </SectionCard>

                <SectionCard id="about" title="About Me">
                        .
                </SectionCard>

                <SectionCard id="experience" title="My Experience">
                        .
                </SectionCard>

                <SectionCard id="projects" title="Projects">
                        .
                </SectionCard>

                <SectionCard id="contact" title="Contact Me">
                        .
                </SectionCard>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Footer />
        </div>
    )
}

export default Body;