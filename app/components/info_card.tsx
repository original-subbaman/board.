
interface InfoCardProps{
    title: string, 
    value: string,
    valuePercentage: string,
    img: string,
    imgBgColor: string, 
}

const InfoCard = ({title, value, valuePercentage, img, imgBgColor} : InfoCardProps) => {
    return <div className="bg-white p-4 rounded-3xl drop-shadow-md border-2  flex flex-col">
                    <div className={`w-12 h-12 rounded-full ${imgBgColor} flex items-center justify-center`}>
                        <img src={img}/>
                    </div>
                    <p className="text-sm text-black  mt-2">{title}</p>
                    <div className="flex space-between items-center">
                        <p className="text-black text-xl font-bold grow font-sans">{value}</p>
                        <div className="rounded-full bg-green-100 text-center max-w-fit p-2">
                            <p className="text-green-500 font-sm">{valuePercentage}</p>
                        </div>
                    </div>
                </div>;
}

export default InfoCard; 