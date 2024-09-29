import flowchart from "../../../public/flowchart.png"
export default function FlowChart(){
    return(
        <div className="w-full mb-4 mt-8">
            <img className="object-cover" src={flowchart} alt="flowchart"/>
        </div>
    )
}