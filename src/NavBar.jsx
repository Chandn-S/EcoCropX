import React, {useState} from 'react';
import hamburgerIcon from './assets/hamburger-thin.png';
import userPic from './assets/user.png';


function NavBar() {


    const[sideBar, setSideBar]=useState(false);

    const toggleKey = () =>{
        setSideBar(!sideBar);
    };
    return (
        <div>
            <div className="headerFile">
                <div className="hamb" onClick={toggleKey}>
                    <img className="hamburger-img" src={hamburgerIcon} alt='Hamburger icon'/>
                </div>
                <div className="company">Place for logo</div>
                <div className="home">Home</div>
                <div className="upload">Upload</div>
                <div className="discounts">Problems</div>
                <div className="profile">
                    <img src={userPic}></img>
                </div>
            </div>

            <div className={`sidebar ${sideBar?'open':''}`}>
                <button className="closeButton" onClick={toggleKey}>X</button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Help</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>

    );
}

export default NavBar;
