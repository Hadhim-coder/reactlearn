import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import Counter from './Counter'
function Nav() {
    return (
        <div id='nav'>

            <Link to="/">
                <div>Home</div>
            </Link>

            <Link to="/counter" >
                <div>Counter</div>
            </Link>

            <Link to="/addpost">
                <div>Add Post</div>
            </Link>
            
            <div>Contact</div>
            <div>Login</div>
        </div>
    )
}

export default Nav