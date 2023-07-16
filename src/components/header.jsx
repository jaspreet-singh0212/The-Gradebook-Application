import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/logo.png';
import Clock from './Clock';

function Header() {
  const professorName = 'Sandeep Kaur';
  const college = 'Lovely University';
  const department = 'Computer Science';
  const semester = '8th Sem';
  const section='ABC123';
  const passout='2023';

  return (
    <header>
      <div className="Head-inner1">
        <div className='title'>
        <img src={logo} alt='LOGO' width={100} height={100}></img>
        <h1>Grade Book</h1>
        </div>
        <div className='Head-right'>
        <Clock />
        </div>
      </div>
      <div className="Head-inner2">
        <div>
        <p><FontAwesomeIcon icon="fa-solid fa-user-tie" size="xl" /> Professor: {professorName}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-building-columns" size="xl" /> College: {college}</p></div>
        <div><p><FontAwesomeIcon icon="fa-solid fa-building-user" size="xl" /> Department: {department}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-clapperboard" size='xl' /> Section: {section}</p></div>
        <div><p><FontAwesomeIcon icon="fa-solid fa-star" size="xl" /> Semester: {semester}</p>
        <p><FontAwesomeIcon icon="fa-solid fa-paper-plane" size='xl'/> Passout-year: {passout}</p></div>
      </div>
    </header>
  );
}

export default Header;
