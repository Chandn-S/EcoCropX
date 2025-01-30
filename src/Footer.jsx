import React, {useState} from 'react';

function Footer(){
    return(
        <div className="footer">
            <p>Looking for something else?</p>
            <input type="text" name="needs" placeholder="What's on your mind"></input>
        </div>
    );
}

export default Footer;