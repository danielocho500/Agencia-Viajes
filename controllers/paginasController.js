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

const paginaMostrarViaje = async (req,res) =>{
    const {viaje} = req.params

    

    try{
        const viajeMostrar = await Viajes.findOne({
            where: {
                slug: viaje
            }
        })

        res.render("mostrarViaje",{
            pagina: "Información del viaje",
            viajeMostrar
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