import { Testimonios } from "../models/Testimonios.js";

const guardarTestomnial = async (req,res) =>{
    const {nombre, correo, mensaje} = req.body
    
    const errores = []
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(nombre.trim() == "")
        errores.push("Campo nombre Vacio")
    if(correo.trim() == "")
        errores.push("Campo correo Vacio")
    else if(!re.test(correo.toLowerCase()))
        errores.push("Correo inválido")
    if(mensaje.trim() == "")
        errores.push("Campo mensaje vacio")
    if(errores.length > 0){
        try{
            const testimonios = await Testimonios.findAll()

            res.render("testimonios", {
                pagina: "testimonios",
                errores,
                nombre,
                correo,
                mensaje,
                testimonios
            })
        }catch(error){
            console.log(error)
        }
    }else{ 
        try{
            await Testimonios.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect("/testimonios")
        }catch(e){
            console.log(e)
        }
    }
}

export {
    guardarTestomnial
}