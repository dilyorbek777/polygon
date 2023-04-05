import React, { Component } from 'react';
import './Header.css';

import calendar from '../images/icons/calendar.png';
import users from '../images/icons/users.png';
import cycle from '../images/icons/cycle.png';
import ImgBg from '../images/bg.png';

export class Header extends Component {
    render() {
        return (
            <header>
                <img src={ImgBg} className='img-bg' alt="" />
                <h1>
                    Discover the most engaging places
                </h1>
                <button><i className="fas fa-globe">
                </i> Discover on 3D Globe</button>
                <div className="hand">
                    <div className="hand-item">
                        <i className="fas fa-location-dot"></i>
                        <div className="infoHandItem">
                            <p>Location</p>
                            <h4>
                                Explore nearby destinations
                            </h4>
                        </div>
                    </div>
                    <div className="hand-item">
                        <img src={cycle} alt="" />
                        <div className="infoHandItem">
                            <p>Activity</p>
                            <h4>
                            All Activities
                            </h4>
                        </div>
                    </div>
                    <div className="hand-item">
                        <img src={calendar} alt="" />
                        <div className="infoHandItem">
                            <p>When</p>
                            <h4>
                            Choose a Date
                            </h4>
                        </div>
                    </div>
                    <div className="hand-item">
                        <img src={users} alt="" />
                        <div className="infoHandItem">
                            <p>Guests</p>
                            <h4>
                            1 guest
                            </h4>
                        </div>
                    </div>
                    <div className="hand-item">
                        <button>
                            <i className="fa fa-search">

                            </i>
                        </button>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header