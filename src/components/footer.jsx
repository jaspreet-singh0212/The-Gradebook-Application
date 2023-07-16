import {React ,useState} from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const today = new Date().toLocaleDateString();
  const [submitt, setsubmitt]= useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
  setsubmitt(' ') }


  return (
    <div className='footer'>
    <footer onSubmit={handleSubmit}>
      <div className="col-1">
        <h3>Useful Links</h3>
        <a href='#home'>Home</a>
        <a href='#service'>Services</a>
        <a href='#about'>About</a>
      </div>
      <div className="col-2">
        <h3>News Letter
        </h3>
        <form> 
          <input type='email' placeholder='Your Email Adress' value={submitt} onChange={(e) => setsubmitt(e.target.value)} /><br/>
          <button type='submit' className='Sub'> Subscribe Now</button>
        </form>
      </div>
      <div className="col3">
        <h3>Contact</h3>
        <p>Lovely Profeesional University<br/> Phagwara, Punjab, IN</p>
        <div className="social-icons">
        <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="xl" /> &nbsp;
      <FontAwesomeIcon icon="fa-brands fa-square-facebook" size="xl" /> &nbsp;
      <FontAwesomeIcon icon="fa-brands fa-square-twitter" size="xl" /></div></div>
    </footer>
    <div className='footer2'>
     <span className='span1'><FontAwesomeIcon icon="fa-solid fa-clock" size='xl'/> &nbsp; {today}</span> <span className='span2'>&copy; 2023 Copyright: Jaspreet Singh</span></div>
    </div>
  );
}

export default Footer;
