import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar.jsx';

function Land(){


    const [location,setLocation]=useState("");
    const Navigate = useNavigate;

    const handleUpload = () =>{
        const userLocation = prompt("Confirm your location!");
        if(userLocation){
            setLocation(userLocation);
            Navigate("/home", {state: {location:userLocation}});
        }
    }


    return(
        <div>
            <NavBar/>

            <div className="land-body">
                <h1>Upload your Location</h1><br/>
                <div className="upload-row">
                    <select className="select-locations">
                        <option value="location">Location 1</option>
                        <option value="location">Location 2</option>
                        <option value="location">Location 3</option>
                    </select>
                    <button className="upload-button" onClick={handleUpload}>Upload Now</button>
                </div>
            </div>
        </div>
    );
}

export default Land;