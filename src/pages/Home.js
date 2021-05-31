import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home"
        style={{ backgroundImage: `url(${BannerImage})` }}
        >
           <div 
            className="headerContainer" 
            >
                <h1> UBT Project</h1>
                <p> Restaurant WebApp</p>
                <Link to="/order">
                    <button> ORDER NOW </button>
                </Link>


                <Link to="/aplikimet">
                    <button> APPLY FOR JOB </button>
                </Link>
           </div>
        </div>
    )
}

export default Home
