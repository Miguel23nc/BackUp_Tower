
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Logout = () => {

    const navigate = useNavigate()
    const { logout } = useAuth()


    const enviar = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <button className="m-2"
        onClick={() => enviar()}>
            Salir
        </button>

    )
}

export default Logout