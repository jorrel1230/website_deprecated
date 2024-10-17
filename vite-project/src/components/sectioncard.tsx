const SectionCard = (props: { id: string; title: string;}) => {
    return (
        <div className="m-5 p-5 w-full h-full bg-black bg-opacity-5 rounded-2xl" >
            <div id={props.id} className="absolute -translate-y-[12.5vh]"/>
            <h1 id="about" className="font-playfair-display text-5xl">{props.title}</h1>
        </div>
    )
}

export default SectionCard;