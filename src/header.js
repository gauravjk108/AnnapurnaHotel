import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './placeholder.png'
function Header() {
    return (
        <nav class="head">
            <ul>
                <div class = "nav1" id = "logo"><span><Link to = "/"><img class = "logo" src = {Logo}/></Link></span></div>
                <div class = "nav2"><span><Link to = "/services">Our Services</Link></span></div>
                <div class = "nav2"><span><Link to = "/book">Book a room</Link></span></div>
                <div class = "nav2"><span><Link to = "/gallery">Event Gallery</Link></span></div>
            </ul>
        </nav>
    );
}
export default Header