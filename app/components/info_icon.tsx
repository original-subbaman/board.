
interface InfoIconProps{
    info: string,
    icon: string,
}

export const InfoIcon = ({info, icon}: InfoIconProps) => {
    return <div className="flex space-x-2">
                            <div className="rounded-full">
                                <img src={icon}></img>
                            </div>
                            <p className="underline">{info}</p>
                        </div>
}