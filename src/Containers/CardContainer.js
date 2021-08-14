import "./CardContainer.css"
export default function CardContainer(props){
    return(
        <div className={`${props.className} card-container`}>
            {props.children}
        </div>
    )
}