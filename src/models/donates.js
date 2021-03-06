const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Dream = require('./dream');

class Donates extends Model { }

Donates.init({
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'PENDING'
    },

    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0.0
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },

    dreamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Dream,
            key: 'id'
        }
    }

}, {
    sequelize,
    timestamps: true,
    modelName: 'Donates'
});




module.exports = Donates;