import {useState} from 'react'
const NewReviewForm = (props) => {
    //state variable to hold form values
    const [newForm, setNewForm] = useState({
        text:'',
        rating:''
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
            <form onSubmit={handleSubmit} className='newReviewFrom'> 
                <label>Restaurant Name:</label><br/>
                {/* <input type='hidden' name="author" value={loggedinUser} onChange={handleChange}/> */}

                <input type='text' name="restaurantName" onChange={handleChange} className="newReviewTitle"/><br/>

                <label>What's the name of the dish you ate?</label><br/>
                <input type="text" name="menuItemName" onChange={handleChange} className="newReviewTitle"/><br/>

                <label>What are your thoughts? </label> <br/>
                <input type='text' name='text' onChange={handleChange} className='newReviewTextbox' maxLength="420"/> <br/>

                <label>Rating: </label>
                <input type='number' min='0' max='5' name='rating' onChange={handleChange} /> <br/>

                <input type='submit' />
            </form>
        </div>

    )
}

export default NewReviewForm