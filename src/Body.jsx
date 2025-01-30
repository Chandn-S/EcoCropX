import React from 'react';
function Body({topic}){
    return(
        <div className='main-container'>
            <h2>{topic}</h2>
            <div className='Container'>
            <div className='innerBox'></div>
            <div className='innerBox'></div>
            <div className='innerBox'></div>
            <div className='innerBox'></div>
            <div className='innerBox'></div>
            <div className='innerBox'></div>
        </div>
        </div>
    );
}

export default Body;