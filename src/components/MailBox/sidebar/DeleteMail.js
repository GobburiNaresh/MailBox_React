import { MdDelete } from "react-icons/md";
import axios from 'axios';

const DeleteMail = ({ mailId, onDelete }) => {
    const deleteEmailHandler = async (deleteId) => {
        try {
            const response = await axios.delete(`http://localhost:4000/mail/deleteEmail/${deleteId}`);
            if (response.status === 200) {
                onDelete(deleteId);
            } else {
                console.error('Failed to delete email:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting email:', error);
        }
    };

    return (
        <div className="deleteEmail">
            <MdDelete
                onClick={(e) => {
                    e.stopPropagation();
                    deleteEmailHandler(mailId);
                }}
            />
        </div>
    );
};

export default DeleteMail;
