import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonios = db.define('testimonios',{
    id: {
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});