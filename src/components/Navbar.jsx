import React, { Component } from 'react'
import LogoNav from '../images/logo.png'
import profileImg from '../images/profile.png'
import './Navbar.css'




export class Navbar extends Component {

    render() {
        const click = () => {
            document.querySelector(".fa-bars-staggered").addEventListener("click",()=>{
                document.querySelector(".links").classList.toggle('responsive') ;
                document.querySelector(".fa-bars-staggered").classList.toggle("fa-xmark");
            })
        }

        return (
            <nav>
                <div className="logo">
                    <img src={LogoNav} alt="LOgo website" />
                </div>
                <ul className="links">
                    <li><a href="./Home.jsx">home</a></li>
                    <li><a href="">hotels</a></li>
                    <li><a href="">restaurants</a></li>
                    <li><a href="">tours</a></li>
                    <li><a href="">destinations</a></li>
                    <li><a href="">activities</a></li>
                    <li><a href="">contact</a></li>
                    <li><img src={profileImg} alt="" /></li>
                </ul>
                <i className="fa-solid fa-bars-staggered" onClick={click}></i>
            </nav>
        )
    }
}

export default Navbar;