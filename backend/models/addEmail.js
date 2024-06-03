import { DataTypes } from 'sequelize';
import sequelize from '../util/database.js';

const addEmail = sequelize.define('Email', {
    recipientEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false,
});

export default addEmail;
