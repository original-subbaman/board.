interface BackButtonProp{
    onBackClick: () => void,  
}

export const BackButton = ({onBackClick}: BackButtonProp) => {
    return <button onClick={onBackClick} className="text-black p-2 border-2 bg-white rounded-lg">Back</button>
}