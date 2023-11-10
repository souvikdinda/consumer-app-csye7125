import { DataTypes } from 'sequelize';
import sequelize from '../model/index.js';

const uptime = sequelize.define('uptime', {
  content: {
    type: DataTypes.STRING,
  },
  uri: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'check_created',
  updatedAt: 'check_updated',
  freezeTableName: true
});
export default uptime;
