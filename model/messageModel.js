import { DataTypes } from 'sequelize';
import sequelize from '../model/index.js';

const message = sequelize.define('message', {
  content: {
    type: DataTypes.STRING,
  },
  uri: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('success', 'fail'),
    defaultValue: 'fail',
  }
}, {
  timestamps: true,
  createdAt: 'check_created',
  updatedAt: 'check_updated',
});
export default message;
