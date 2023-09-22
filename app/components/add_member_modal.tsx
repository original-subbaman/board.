import { useState } from "react";
import { BasicDetailForm } from "./basic_form";
import { ContactForm } from "./contact_form";
import { NextButton } from "./next_button";
import { BackButton } from "./back_button";
import { User } from "../model/user";

interface AddMemberModalProps{
    visible: boolean,
    onClose: () => void, 
    setUser: (user: User) => void,
}

export const AddMemberModal = ({visible, onClose, setUser}: AddMemberModalProps) => {
    const [basicContactState, setBasicContactState] = useState(1)
    const [name, setName] = useState("")
    const [email, setEmail]  = useState("")
    const [phone, setPhone] = useState("")
    const [instaLink, setInstaLink] = useState("")
    const [ytLink, setYtLink] = useState("")
    if(!visible) return null;

    const onClickNext = () => {
        console.log(name + " " + email + " " + phone);
        setBasicContactState(2);
    };
    const onClickBack = () => setBasicContactState(1);
    const onDoneBtnClick = () => {
        let newUser = new User(name, email, phone, instaLink, ytLink);
        setUser(newUser);
        onClose();
    }

    return <div className="fixed inset-0 bg-black bg-opacity-30
    flex justify-center items-center">
        <div className="bg-white rounded-[20px] w-[500px] p-8">
            <div className="flex">
                <h1 className="text-black grow text-xl font-medium">Add New Profile</h1>
                <button onClick={onClose} className="bg-transparent text-gray-500">
                    <img src="./ic_close.png" />
                </button>
            </div>
            <hr className="my-4"></hr>
            <div className="flex my-4">
                <button className={`grow mr-4 text-center text-black text-md border-b-4 ${basicContactState == 1? 'border-blue-400' : 'border-gray-400'}`}>
                    Basic
                </button>
                <button className={`grow text-black text-md border-b-4 ${basicContactState == 2? 'border-blue-400' : 'border-gray-400'}`}>
                    Contact
                </button>
            </div>
            {
                basicContactState == 1? <BasicDetailForm setName={setName} setEmail={setEmail} setPhone={setPhone}/> : <ContactForm setInstaLink={setInstaLink} setYtLink={setYtLink}/>
            }
            <div className="flex mt-8 justify-end">
                {
                    basicContactState == 1? <NextButton onNextClick={() => onClickNext()}title="Next"/> : 
                    <div className="flex space-x-2"><BackButton onBackClick={() => onClickBack()}/> <NextButton onNextClick={() => onDoneBtnClick()} title="Done"/></div>
                }
            </div>
        </div>
    </div>
}