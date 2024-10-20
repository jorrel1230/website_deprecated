import {ReactNode} from "react";

const SectionCard = (props: { id: string; title: string; children: ReactNode;}) => {
    return (
        <div className="m-5 w-full h-full bg-gray-400 bg-opacity-5 rounded-2xl
                        relative shadow-lg shadow-theme-green
                        border-theme-darkgreen border-2" >
            <div id={props.id} className="absolute -translate-y-[13vh] top-0 left-0"/>
            {
                props.title ?
                (<h1 className="font-playfair-display text-5xl p-10">{props.title}</h1>) : null
            }

            {props.children}

        </div>
    )
}

export default SectionCard;