import Footer from "./footer.tsx";
import LandingCard from "../sub-components/landingcard.tsx";
import AboutCard from "../sub-components/aboutcard.tsx";
import ExperienceCard from "../sub-components/experiencecard.tsx";
import ProjectsCard from "../sub-components/projectcard.tsx";
import ContactCard from "../sub-components/contactcard.tsx";

const Body = () => {
    return (
        <div className="bg-theme-white w-full h-full pl-[8vw] pr-[8vw] pt-[8vw]">
            <LandingCard />

            <AboutCard />

            <ExperienceCard />

            <ProjectsCard />

            <ContactCard />

            <Footer/>
        </div>
    )
}

export default Body;