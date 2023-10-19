import {useState} from 'react'
const NewReviewForm = (props) => {
    //state variable to hold form values
    const [newForm, setNewForm] = useState({
        text:'',
        rating:'',
    })

    //function to handle change 
    const handleChange =  (event) => {
        setNewForm(prev => ({...prev, [event.target.name]: event.target.value}))
    }


//function that handles submit button
const handleSubmit = (e) => {
    e.preventDefault()
    props.addReview(newForm)
}

    return(
        <div className='new-item-form'>
            <h3>Add New Review</h3>

            {/* form to create new review */}
            <form onSubmit={handleSubmit}> 

                <label>What are your thoughts? </label>
                <input type='text' name='text' onChange={handleChange} />

                <label>Rating: </label>
                <input type='number' min='0' max='5' name='rating' onChange={handleChange} />

                <input type='submit' />
            </form>
        </div>

    )
}

export default NewReviewForm