

const SubmitButton = (props: {text: string, callback: any}) => {
    return <button className="p4 rounded text-fuchsia-400 text-2xl" onClick={props.callback}>{props.text}</button>
}

export default SubmitButton;