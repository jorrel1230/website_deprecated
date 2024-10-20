import SectionCard from "./sectioncard.tsx";

const AboutCard = () => {
    return (
        <SectionCard id="about" title="About Me">
            <div className="relative h-[70vh] p-48 flex justify-center items-center">
                <div>
                    <p className="font-serif text-xl font-extralight">
                        My name is Jorrel Rajan. My interest in computer science first began
                        in middle school, with game development. I explored and used tools such
                        as <a href="https://unity.com/" className="text-theme-green underline">Unity</a>,
                        creating basic games.
                    </p>

                    <p className="font-serif text-xl font-extralight">

                    </p>

                    <p className="font-serif text-xl font-extralight">
                        I'm currently an undergraduate student working towards my
                        Bachelors of Science and Engineering at Princeton University.
                    </p>
                </div>
            </div>
        </SectionCard>
    )
}

export default AboutCard;