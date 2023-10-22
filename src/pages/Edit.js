import{useNavigate, useParams} from 'react-router-dom'
import {useState} from 'react'


const Edit = (props) => {
    const navigate = useNavigate()
    const params = useParams()


    const reviewToEdit = props.reviews.find(item => item._id === params.id)
    const menuItem = props.menuItems.find((item)=>item.name === reviewToEdit.menuItemName)



   
    console.log(reviewToEdit)

    const [updatedForm, setUpdatedForm] = useState({
        text: reviewToEdit.text
    })

    const handleChange = (event) => {
        setUpdatedForm(prev => ({...prev, [event.target.name]:event.target.value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.editReview(updatedForm, params.id)
        navigate(`/${menuItem._id}`)
    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return(
        <div className="edit-form">
            <h1>Edit Review</h1>
            <form onSubmit={handleSubmit}>
                    <label>Comments: </label>
                    <input type='text' name='text'  onChange={handleChange}/>

                    <label>Rating: </label>
                    <input type='number' name='rating'  onChange={handleChange} min='0' max='5'/>

                    <input type='submit' />
            </form>
            <button onClick={handleBackButton}>return</button>
        </div>
    )
}

export default Edit