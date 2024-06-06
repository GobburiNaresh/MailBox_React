import { MdDelete } from "react-icons/md";

const DeleteMail = ({ onClick }) => {
    console.log(onClick)
    return(
        <div onClick={onClick}>
            <MdDelete style={{margin: '20px'}}/>
        </div>
    )
}
export default DeleteMail;
