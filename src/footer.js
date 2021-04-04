import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './placeholder.png'
function Footer() {
    return (
        <nav class="foot">
            <ul>
                <div class = "nav1"><span><Link to = "/about">About Us</Link></span></div>
                <div class = "nav1"><span><Link to = "/contact">Contact Us</Link></span></div>
                <div class = "nav1"><span><Link to = "/feedback">Offer Feedback</Link></span></div>
                <div class = "nav2" id = "logo"><span>Copyright text</span></div>
            </ul>
        </nav>
    );
}
export default Footer