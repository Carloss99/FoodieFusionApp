import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'

const URL = 'https://foodiefusion-69e8424eead0.herokuapp.com/api/menu-items' //backend URL


const Main = (props) => {
    //Sate variables to hold menu items
    const[menuItems, setMenuItems] = useState(null)

    //function that fetches menu items
    const getMenuItems = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setMenuItems(data)
    }
    useEffect(() => {getMenuItems()}, [])
    




    return(

        <Routes>

            {/* Route to index page  */}
            <Route path='/' element={<Index  items={menuItems}/>}/>

            {/* Route to show page */}
            <Route path='id' element={<Show/>}/>

        </Routes>
    )
}

export default Main