import { Viajes } from "../models/Viaje.js"

const paginaInicio = (req,res) => {
    res.render("inicio",{
        pagina: "inicio"
    })
}

const paginaNosotros = (req,res) => {
    res.render('nosotros',{
        pagina: "nosotros"
    })
}

const paginaViajes = async (req,res) => {
    const viajes = await Viajes.findAll()

    res.render("viajes", {
        pagina: "viajes",
        viajes
    })
}

const paginaTestimonios = (req,res) => {
    res.render("testimonios", {
        pagina: "testimonios"
    })
}

const paginaMostrarViaje = (req,res) =>{
    const slug = req.params.viaje
    console.log(slug)

    try{
        res.render("mostrarViaje",{
            pagina: "Información del viaje",
            slug
        })
    }catch(e){
        console.log(e)
    }
}

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaMostrarViaje
}