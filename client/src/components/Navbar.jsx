import React, { useContext } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {
    const { state, dispath } = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>,
                <button className='btn #c62828 red darken-3'
                    onClick={() => {
                        localStorage.clear()
                        dispath({ type: 'CLEAR' })
                        history.push('/signin')
                    }} >
                    Logout
                 </button >
            ]
        } else {
            return [
                <li><Link to="/signin">Signin</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper teal lighten-1">
                <Link to={state ? '/' : '/signin'} className="brand-logo left">myphoto</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar