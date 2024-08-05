import { useParams } from "react-router"

const Title = ( ) =>{
    const { title } = useParams()
    return (
        <div>holaaaaaaaaaaaaaaaaa {title}</div>
    )
}

export default Title