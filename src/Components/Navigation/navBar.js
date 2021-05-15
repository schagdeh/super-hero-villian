import React, { Component } from 'react'
import './navBar.css'
//import superHeroesLogo from '../../Images/images.jpg'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navBar">
                    {/* <a href="/">
                        <img src={superHeroesLogo} alt="superHeroesLogo" style={{width: 150, height: 150, borderRadius: '50%'}}/>
                    </a> */}
                    <ul className="navBarUl">
                        <li><h1>Home</h1></li>
                        <li><h1>Favourite</h1></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
