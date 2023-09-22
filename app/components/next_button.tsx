interface NextButtonProp{
    title: string,
    onNextClick: () => void,  
}
export const NextButton = ({title, onNextClick}: NextButtonProp) => {
    return <button onClick={onNextClick} className="text-white bg-blue-500 rounded-lg p-2">{title}</button>
}