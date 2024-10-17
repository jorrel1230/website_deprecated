import {ReactNode} from "react";

const SectionCard = (props: { id: string; title: string; children: ReactNode;}) => {
    return (
        <div className="m-5 p-5 w-full h-full shadow-2xl bg-gray-500 bg-opacity-5 rounded-2xl relative" >
            <div id={props.id} className="absolute -translate-y-[12.5vh] top-0 left-0"/>
            <h1 className="font-playfair-display text-5xl">{props.title}</h1>
            {props.children}
        </div>
    )
}

export default SectionCard;