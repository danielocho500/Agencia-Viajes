import express from "express";

import { paginaInicio, 
         paginaNosotros, 
         paginaTestimonios, 
         paginaViajes,
         paginaMostrarViaje } from "../controllers/paginasController.js";

import { guardarTestomnial } from "../controllers/guardarTestimonial.js";

const router = express.Router();

router.get("/",paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get("/viajes",paginaViajes)

router.get("/testimonios",paginaTestimonios)
router.post("/testimoniales",guardarTestomnial)

router.get("/viajes/:viaje",paginaMostrarViaje)

export default router;