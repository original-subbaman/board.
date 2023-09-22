import { InfoIcon } from "../components/info_icon";

interface NewUserCardProps {
    name: string,
    phone: string,
    email: string,
    ytLink: string,
    instaLink: string, 
}
export const NewUserCard = ({name, phone, email, ytLink, instaLink}: NewUserCardProps) => {
    return  <div className="flex flex-col items-start justify-start bg-white my-2 p-8 rounded-3xl drop-shadow-md border-2 grow text-black">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <div className="grid grid-cols-4 w-full justify-center mt-2">
                        <div className="col-span-2 justify-self-start my-4">
                            <InfoIcon icon="./ic_whatsapp_btn.png" info={phone}/>
                        </div>
                        <div className="col-span-2 justify-self-start my-4"><InfoIcon icon="./ic_insta.png" info={instaLink}/></div>
                        <div className="col-span-2 justify-self-start my-4"><InfoIcon icon="./ic_mail.png" info={email}/></div>
                        <div className="col-span-2 justify-self-start my-4"><InfoIcon icon="./ic_yt.png" info={ytLink}/></div>                    
                    </div>
                </div>
}