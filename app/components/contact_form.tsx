
interface ContactFormProps{
    setYtLink: (link: string) => void, 
    setInstaLink: (link: string) => void, 
}

export const ContactForm = ({setYtLink, setInstaLink}: ContactFormProps) => {
    const onInstaInputChange = (link: string) => {
        setInstaLink(link)
    }
    const onYtInputChange = (link: string) => {
        setYtLink(link)
    }
    return  <div className="grid grid-cols-1 gap-8 text-black">
                <div className="flex flex-col">
                    <label>Instagram Link <span className="text-gray-400">(Optional)</span></label>
                    <input onChange={(e) => onInstaInputChange(e.target.value)} className="border-2 rounded p-2" type="text" placeholder="Eg. ..instagram/username"/>
                </div>
                <div className="flex flex-col">
                    <label>Youtube Link <span className="text-gray-400">(Optional)</span></label>
                    <input onChange={(e) => onYtInputChange(e.target.value)} className="border-2 rounded p-2" type="text" placeholder="Eg. ..youtube/username"/>
                </div>
            </div>
}