import SectionCard from "./sectioncard.tsx";
import placeholderURL from "../assets/profile_photo.svg"

const AboutCard = () => {
    return (
        <SectionCard id="about" title="About Me">
            <div className="relative h-[70vh] flex">

                <p>My name is Jorrel Rajan.</p>

                <img alt="picture of me" src={placeholderURL}
                     className="rounded-2xl w-2/12 "/>

            </div>
        </SectionCard>
    )
}

export default AboutCard;