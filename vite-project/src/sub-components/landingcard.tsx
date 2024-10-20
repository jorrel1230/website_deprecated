import profilePhotoURL from "../assets/profile_photo.svg";
import SectionCard from "./sectioncard.tsx";

const LandingCard = () => {
    return (
        <SectionCard id="landing_card" title="">
            <div className="relative h-[70vh] flex items-center justify-center space-x-20">
                <div className="">
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
                <div className="">
                    <img src={profilePhotoURL} alt="Profile Photo"
                         className="rounded-full"/>
                </div>
            </div>
        </SectionCard>
    )
}

export default LandingCard;