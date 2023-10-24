import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Edit from '../pages/Edit'
import UserReviewsLogin from '../pages/UserReviewsLogin'

const URL = 'https://foodiefusion-69e8424eead0.herokuapp.com/api' //backend URL


const Main = (props) => {
    //Sate variables to hold menu items
    const[menuItems, setMenuItems] = useState(null)
    const[reviews, setReviews] = useState(null)
    

    //function that fetches menu items
    const getMenuItems = async () => {
        const response = await fetch(URL + '/menu-items')
        const data = await response.json()
        // console.log(data)
        setMenuItems(data)
    }

    //function that fetches reviews
    const getReviews = async () => {
        const response = await fetch(URL + '/reviews')
        const data = await response.json()
        // console.log(data)
        setReviews(data)
    }

    //function that creates new review
    const addReview = async (review) => {
        const response = await fetch(URL + '/reviews', {
            method:'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        const newReview = await response.json()
        setReviews(prev => [...prev, newReview])

    }

    //function that updates review
    const editReview = async (review, id) =>{
        await fetch(URL + '/reviews/' + id , {
            method:'put',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
    }
    
    //function that deletes review by id
    const deleteReview = async (id) => {
        await fetch(URL +'/reviews/'+ id, {
            method:'delete'
        })
        getReviews()
    }

    //function that deletes all reviews
    // const deleteAll = async () => {
    //     await fetch(URL + '/reviews', {
    //         method:'delete'
    //     })
    //     getReviews()
    // }




    useEffect(() => {getMenuItems()}, [])
    useEffect(() => {getReviews()}, [])
    



    const Loaded = () => {
    return(

        <Routes>

            {/* Route to index page  */}
            <Route path='/' element={<Index  menuitems={menuItems} />}/>

            {/* Route to show page to view all reviews
            <Route path='/reviews' element={<Show items={menuItems} reviews={reviews}  addReview={addReview} />}/> */}

            {/* Route to show page */}
            <Route path='/:id' element={<Show items={menuItems} reviews={reviews} getReviews={getReviews}  addReview={addReview} deleteReview={deleteReview} editReviews={editReview}/>}/>

            {/* {Route to show edit page} */}
            <Route path='/edit/:id' element={<Edit editReview={editReview} reviews={reviews} menuItems={menuItems}/>}/>
            {/* Route to view individual reviews
            <Route path='/:id' element={<SingleReviewShow reviews={reviews} deleteReview={deleteReview}/>}/> */}

            {/* Route to user profile page with just their reviews */}
            <Route path='/profile' element={<UserReviewsLogin reviews={reviews}  addReview={addReview} deleteReview={deleteReview} editReviews={editReview}/>}/>
        </Routes>
    )
     }

    return reviews && menuItems ? Loaded() : <h1>Still loading</h1>
}

export default Main