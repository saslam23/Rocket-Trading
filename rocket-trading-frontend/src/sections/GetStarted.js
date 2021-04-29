import React from 'react'

export default function GetStarted() {
    return (
        <>
        <div  id="get-started">
        <div className="get-started-container">
            <div className="get-started-flex">
        <div data-aos="fade-up" data-aos-duration="1500"  className="get-started-info">
            <h3>Join Now!</h3>
        <p>If you are looking for a place to expand your knowledge or share your experience, you have found the right place!</p>
        </div>
        <div style={{paddingRight:'5rem'}}>
        <a style={{textDecoration:'none'}} href="https://discord.gg/hZ2M9ZnQAB">
            <button data-aos="zoom-in" data-aos-duration="500" className="get-started-button">Get started</button>
        </a>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
