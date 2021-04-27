import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Life’s too short for boring food .Join the Blue Heaven for an amazing dinner
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>

  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Opening Hours</h2>
            <Link to='/'><div>Lunch.<br /></div></Link>
            <Link to='/'><div>Friday:12:00-15:30<br /></div></Link>
            <Link to='/'><div> Saturday:12:00-15:30.<br /></div></Link>
            <Link to='/'><div><br /></div></Link>
            <Link to='/'>Dinner</Link>
            <Link to='/'><div>Wednesday-Saturday<br />18:00 - 22:00</div></Link>
          </div>
         
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <div><br /></div>
            <Link to='/'><div>info@blueheaven.com <br /></div></Link>
            <Link to='/'><div>07960002150<br /></div></Link>
            <div><br /></div>
            <Link to='/'><div><br /></div></Link>
            <Link to='/'><div>For any press enquiries:<br />blueheaven@gmail.com</div></Link>
          </div>
       

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <div><br /></div>
            <Link to='/'>Instagram</Link>
            <div><br /></div>
            <Link to='/'>Facebook</Link>
            <div><br /></div>
            <Link to='/'>Youtube</Link>
            <div><br /></div>
            <Link to='/'>Twitter</Link>
          </div>
          
        </div>
        
      </div>
      <section class='social-media'>
  
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Blue Heaven
          <i class="fas fa-utensils"></i>
            </Link>
          </div>
          
          <small class='website-rights'>Blue Heaven © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
