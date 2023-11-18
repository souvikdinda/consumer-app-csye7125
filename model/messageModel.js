import { DataTypes } from 'sequelize';
import sequelize from '../model/index.js';

const uptime = sequelize.define('uptime', {
 
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  processTime: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true,
  createdAt: 'check_created',
  updatedAt: false,
  freezeTableName: true
});
export default uptime;
