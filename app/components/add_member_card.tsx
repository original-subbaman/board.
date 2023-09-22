
interface AddMemberCardProps{
    setShowAddMemberModal: () => void
}

export const AddMemberCard = ({setShowAddMemberModal}: AddMemberCardProps) =>{
    return <div className="flex items-center justify-center bg-white my-4 p-8 rounded-3xl drop-shadow-md grow">
                    <button onClick={setShowAddMemberModal}>
                        <img src="./add_profile.png"></img>
                    </button>
            </div>
}