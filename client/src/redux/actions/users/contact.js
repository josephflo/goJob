import axios from "axios"




export let contactarProff = (id)=>async(dispatch)=>{
    try {
        let result = await axios.post(`/user/contact/${id}`)

        alert("Notificacion enviada correctamente")
    } catch (error) {
        alert("Ups, no se pudo enviar los datos")
    }
}