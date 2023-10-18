import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'

const URL = 'https://foodiefusion-69e8424eead0.herokuapp.com/api' //backend URL


const Main = (props) => {
    //Sate variables to hold menu items
    const[menuItems, setMenuItems] = useState(null)
    const[reviews, setReviews] = useState(null)

    //function that fetches menu items
    const getMenuItems = async () => {
        const response = await fetch(URL + '/menu-items')
        const data = await response.json()
        console.log(data)
        setMenuItems(data)
    }

    //function that fetches reviews
    const getReviews = async () => {
        const response = await fetch(URL + '/reviews')
        const data = await response.json()
        console.log(data)
        setReviews(data)
    }

    
    




    useEffect(() => {getMenuItems()}, [])
    useEffect(() => {getReviews()}, [])
    




    return(

        <Routes>

            {/* Route to index page  */}
            <Route path='/' element={<Index  menuitems={menuItems} />}/>

            {/* Route to show page */}
            <Route path='/:id' element={<Show items={menuItems} reviews={reviews}/>}/>

        </Routes>
    )
}

export default Main