import {useState, useEffect} from 'react'
import axios from 'axios'

const UserReviewsLogin = () => {
    // create state variables
    const [toggleLogin, setToggleLogin] = useState(true)
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [toggleLogout, setToggleLogout] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // function for the toggleError state variable
    // if toggleLogin is true aka user is logged in, the login form will not show
    // else, the login form will show to allow user to log in
    // div name is formContainer
    const handleToggleForm = () => {
        setToggleError(false)
        if (toggleLogin === true) {
            setToggleLogin(false)
        } else {
            setToggleLogin(true)
        }
    }

    //this function is used w the event handler on the logout button
    //if user is logged in, toggleLogout = true
    //if user is logged out, toggleLogout = false
    const handleLogout = () => {
        setCurrentUser({})
        handleToggleLogout()
    }
    //once user presses log out, handleToggleLogout() sets toggleLgout to false
    const handleToggleLogout = () => {
        if (toggleLogout) {
            setToggleLogout(false)
        } else {
            setToggleLogout(true)
        }
    }

    const handleCreateUser = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
          username: username,
          password: password
        }
        setUsername('')
        setPassword('')
        axios.post('http://localhost:4000/api/userreviews/createaccount', userObj).then((response) => {
          if(response.data.username){
            console.log(response);
            setToggleError(false)
            setErrorMessage('')
            setCurrentUser(response.data)
            handleToggleLogout()
          } else {
            setErrorMessage(response.data)
            setToggleError(true)
          }
        })
      }
      
    //this functions takes the onClick event listener. It sets the currentUser state variable to ...
    const handleLogin = (event) => {
        event.preventDefault()
        event.currentTarget.reset()
        let userObj = {
            username: username,
            password: password
        }
        setUsername('')
        setPassword('')
        axios.put('http://localhost:4000/api/userreviews/login', userObj).then((response) => {
            if (response.data.username) {
                console.log(response);
                setToggleError(false)
                setErrorMessage('')
                setCurrentUser(response.data)
                handleToggleLogout()
            } else {
                console.log(response);
                setToggleError(true)
                setErrorMessage(response.data)
            }
        })
    }

    return (
        <div className="userReviewDiv">

            {/* if user is logged in, show the logout button */}
            {toggleLogout ?
                <button onClick={handleLogout} className='logoutBtn'>Logout</button> :

                //else, if user is logged out, show this div with login form or registration form
                <div className='appFormDiv'>

                    {/* if toggleLogin is true, aka user is not logged in, show the login form div */}
                    {toggleLogin ?
                        <div className="formContainer">
                            <h1 className='formTitle'>Login</h1>
                            {/* when user presses login, it invokes handleLogin() */}
                            <form onSubmit={handleLogin} className='inputForm'>
                                <input type='text' placeholder='username' className='textInput' onChange={(event) => { setUsername(event.target.value) }} />
                                <input type='password' placeholder='password' className='textInput' onChange={(event) => { setPassword(event.target.value) }} />
                                {toggleError ?
                                    <h5 className='errorMsg'>{errorMessage}</h5>
                                    :
                                    null
                                }
                                <input type='submit' value='Login' className='submitBtn' />
                            </form>
                        </div>
                        :
                        // new user registration form
                        // the button below "need an account" will show with the login form. It invokes handleToggleForm() which changes toggleLogin to false
                        <div className="App" id='formContainer'>
                            <h1 className='formTitle'>Create an Account</h1>
                            <form onSubmit={handleCreateUser} className='inputForm'>
                                <input type='text' placeholder='username' className='textInput' onChange={(event) => { setUsername(event.target.value) }} />
                                <input type='password' placeholder='password' className='textInput' onChange={(event) => { setPassword(event.target.value) }} />
                                {toggleError ?
                                    <h5 className='errorMsg'>{errorMessage}</h5>
                                    :
                                    null
                                }
                                <input type='submit' value='Register' className='submitBtn' />
                            </form>
                        </div>
                    }
                    <button onClick={handleToggleForm} className='accountBtn'>{toggleLogin ? 'Need an account?' : 'Already have an account?'}</button>
                </div>
            }


            {/* div with user profile info and reviews shown only if user is logged in */}
            {currentUser.username ?
                <div className="loggedinDiv">
                    <h2>User Reviews Shown Once Logged In</h2>
                    <h4>Profile Info</h4>
                </div>
                : null
            }

        </div>
    )
}

export default UserReviewsLogin