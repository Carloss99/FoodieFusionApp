import{useNavigate} from 'react-router-dom'


const Edit = (props) => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    return(
        <div className="edit-form">
            <h1>Edit Review</h1>
            <form>
                    <label></label>
            </form>
            <button onClick={handleBackButton}>return</button>
        </div>
    )
}

export default Edit