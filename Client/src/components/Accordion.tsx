import React, {useState} from "react";
type PropsAccordion = {
    datas : {question: string, answer: string }

}
const Accordion = (props: PropsAccordion) => {
    const [data ] = useState(props.datas);
    const [active, setActive] = useState(0)
    const handleToggleActive = () => {
        let activeNew = active === 1 ? 0 : 1;
        setActive(activeNew);
    }

    return (
        <div className={`max-w-7xl mx-auto p-3 shadow-lg border border-[#c9c6c655] rounded-md mb-3 duration-500 group ${active === 1 ? 'is-active bg-white' : ''}`}
        >
            <div className="flex ">
                <i className="fa-solid fa-messages"/>
                
                
                <div className="w-full flex text-sm sm:text-lg group-[.is-active]:font-bold">
                    
                    
                    {data.question}
                </div>
                <div className="text-sm sm:text-xl rotate-40 cursor-pointer duration-500 group-[.is-active]:rotate-[180deg]" onClick={handleToggleActive}>
                    <i className="fa-solid fa-chevron-up fa-rotate-180" />
                
                </div>
            </div>
            <div className="overflow-hidden sm:text-xl text-xs duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
                {data.answer}
            </div>
        </div>
    );
}
export default Accordion;