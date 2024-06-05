import { DataTypes } from 'sequelize';
import sequelize from '../util/database.js';
import User from './user.js';

const Email = sequelize.define('Email', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  recipientEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  
});

User.hasMany(Email, { foreignKey: 'userId' });
Email.belongsTo(User, { foreignKey: 'userId' });

export default Email;
