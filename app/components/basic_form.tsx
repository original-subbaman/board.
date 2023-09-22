
interface BasicDetailFormProps{
    setName: (name: string) => void, 
    setEmail: (email: string) => void, 
    setPhone: (phone: string) => void, 
}


export const BasicDetailForm = ({setName, setEmail, setPhone}: BasicDetailFormProps) => {
    const onNameInputChange = (name: string) => {
        setName(name)
    }
    const onEmailInputChange = (email: string) => {
        setEmail(email)
    }
    const onPhoneInputChange = (phone: string) => {
        setPhone(phone)
    }
    return  <div className="grid grid-cols-1 gap-8 text-black">
                <div className="flex flex-col">
                    <label>Enter Name*</label>
                    <input onChange={(e) => onNameInputChange(e.target.value)} className="border-2 rounded p-2" type="text" placeholder="Eg. John Doe"/>
                </div>
                <div className="flex flex-col">
                    <label>Enter Email*</label>
                    <input onChange={(e) => onEmailInputChange(e.target.value)}className="border-2 rounded p-2" type="text" placeholder="Eg. John@xyz.com"/>
                </div>
                <div className="flex flex-col">
                    <label>Enter Phone*</label>
                    <input onChange={(e) => onPhoneInputChange(e.target.value)} className="border-2 rounded p-2" type="text" placeholder="Eg. 9123456789"/>
                </div>
            </div>
}

