
interface LegendDoughnutProps{
    color: string,
    title: string, 
    value: string,
}
export const LegendDoughnut = ({color, title, value}: LegendDoughnutProps) => {
    return <div className="flex justify-start items-center">
        <div className={`rounded-full w-2.5 h-2.5 ${color} mr-2`}></div>
        <div className="flex flex-col">
            <p className="text-black text-md font-bold">{title}</p>
            <p className="text-sm text-gray-500">{value}</p>
        </div>
    </div>
}

