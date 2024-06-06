import Email from '../models/addEmail.js';

export const deleteEmail = async (req, res) => {
    const id = req.params.deleteId;
    console.log('deleteId--------------', id);

    try {
        const deletemail = await Email.findByPk(id);
        console.log("deleteEmail---------", deletemail);

        if (!deletemail) {
            return res.status(404).json({ message: "Email not found" });
        }

        await deletemail.destroy();
        console.log("Email deleted successfully");

        res.status(200).json({ message: "Email deleted successfully" });
    } catch (error) {
        console.error("Error deleting email:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
