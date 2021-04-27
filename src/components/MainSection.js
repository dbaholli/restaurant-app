import React from 'react'
import '../App.css';
import { Button } from './Button'
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Blue Heaven</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>Make reservation</Button>
                <Button className='btns'buttonStyle='btn--primary'
                buttonSize='btn--large'>Orders <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default MainSection
