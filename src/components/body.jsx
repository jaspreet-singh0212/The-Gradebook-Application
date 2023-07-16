import React, { useState,useRef } from 'react';
import students from '../studentgrade';
import Popup from './popup';
import ToggleButton from './toggle';
import './body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from './header';
import Footer from './footer';
import Stats from './Stat';

function Body() {
  const [sortedStudents, setSortedStudents] = useState(students);
  const [sortType, setSortType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [popupData, setPopupData] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const divRef = useRef(null);

 

const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.Major');
    console.log(capture);
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('Student-Data.pdf');
    })}
 
  
    
 const sortStudents = (type) => {
    let sortedData = [...sortedStudents];
    if (type === "marks") {
      sortedData.sort((a, b) => a.overallGrade - b.overallGrade);
    } else if (type === "name") {
      sortedData.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (nameA > nameB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    } 
    if (type === "marks" && sortOrder === "asc") {
      sortedData.reverse();
      setSortOrder("desc");
    } else {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    setSortedStudents(sortedData);
    setSortType(type);
  };
  

  const searchStudents = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    if (value !== "") {
      const results = students.filter((student) =>
        student.name.toLowerCase().includes(value)
      );
      setSortedStudents(results);
      setNoResultsFound(results.length===0);
    } else {
      setSortedStudents(students);
      setNoResultsFound(false);
    }
  };
  const failStudents = () => {
    const value = "fail";
    setSearchTerm(value);
    
    if (value !== "") {
      const results = students.filter((student) =>
        student.status.toLowerCase().includes(value)
      );
      setSortedStudents(results);
      setNoResultsFound(results.length===0);
    } else {
      setSortedStudents(students);
      setNoResultsFound(false);
    }

  };
  const passStudents = () => {
    const value = "pass";
    setSearchTerm(value);
    
    if (value !== "") {
      const results = students.filter((student) =>
        student.status.toLowerCase().includes(value)
      );
      setSortedStudents(results);
      setNoResultsFound(results.length===0);
    } else {
      setSortedStudents(students);
      setNoResultsFound(false);
    }
  };

  const allStudents = () => {
    const value = "";
    setSearchTerm(value);
    
    if (value !== "") {
      const results = students.filter((student) =>
        student.status.toLowerCase().includes(value)
      );
      setSortedStudents(results);
      setNoResultsFound(results.length===0);
    } else {
      setSortedStudents(students);
      setNoResultsFound(false);
    }
  };

  const selectStudent = (name) => {
    if (selectedStudent.includes(name)) {
      setSelectedStudent(selectedStudent.filter((rowid)=>rowid!==name));
    } else {
      setSelectedStudent([...selectedStudent,name]);
    }
  }
  const handleMoreClick = (student) => {
    setPopupData(student);
  };

  const handlePopupClose = () => {
    setPopupData(null);
  };

return (
    <div className='Major'>
      <Header />
    <div ref={divRef} className='styl'>
      <div className='download'>
       <div className='search'>
        &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size='xl' />
        &nbsp;<input type="text" placeholder="Enter the Name" value={searchTerm} onChange={searchStudents}/>
        {noResultsFound && alert("No Record Found!!")}</div>
        <button className="btndownload" onClick={downloadPDF} disabled={!(loader===false)} ><FontAwesomeIcon icon="fa-solid fa-download" size='2xl'/>
        &nbsp;&nbsp;{loader?(<span>Downloading</span> ):( <span>Download</span> )} </button></div>
      <div id='lst'>
      &nbsp;&nbsp;<button className='Sortt' onClick={() => sortStudents("marks")}><FontAwesomeIcon icon="fa-solid fa-filter" size="lg" /> Sort by Grade {sortType === "marks" && (sortOrder === "asc" ? "▲" : "▼")}</button>
      &nbsp;&nbsp;&nbsp;&nbsp;<button className='Sortt' onClick={() => sortStudents("name")}><FontAwesomeIcon icon="fa-solid fa-filter" size="lg" /> Sort A-Z {sortType === "name" && (sortOrder === "asc" ? "▲" : "▼")}</button>
      &nbsp;&nbsp;&nbsp;&nbsp;<button className='Sortt' onClick={failStudents}>Show Failed</button>
        &nbsp;&nbsp;&nbsp;&nbsp;<button className='Sortt' onClick={passStudents}>Show Passed</button>
        &nbsp;&nbsp;&nbsp;&nbsp;<button className='Sortt' onClick={allStudents}>Show All</button></div>
        &nbsp;&nbsp;&nbsp;&nbsp;  
      <div className='tablee'>
      <table>
        <thead>
          <tr>
            <th className='th'><FontAwesomeIcon icon="fa-solid fa-hashtag" size="sm" />ID</th>
            <th className='th'>Name</th>
            <th className='th'>Ticket</th>
            <th className='th'>Topic</th>
            <th className='th'>Rating Grade</th>
            <th className='th'>Exam Grade</th>
            <th className='th'>Overall Grade</th>
            <th className='th'>Status</th>
            <th className='th'> <FontAwesomeIcon icon="fa-solid fa-circle-info" size="sm" /> Details</th>
          </tr>
        </thead>
        <tbody>
        {sortedStudents.map((student, index) => (
          <tr
  key={index}
  onClick={(event) => {
    if (event.target.tagName !== "BUTTON") {
      selectStudent(student.name);
    }
  }}
  className={selectedStudent.includes(student.name) ? "selected-row" : ""}
>
  <td className='odd'>{student.id}</td>
  <td>{student.name}</td>
  <td className='odd'>{student.ticket}</td>
  <td>{student.field}</td>
  <td className='odd'>{student.rating}</td>
  <td>{student.exam}</td>
  <td className='odd'>{student.overallGrade}</td>
  <td>{student.status}</td>
  <td className='odd'>
    <button className='details' onClick={() => handleMoreClick(student)}>More Details</button>
  </td>
</tr>
 ))}
        </tbody>
      </table>
      </div>
      <button className='Squote'><Link to="quote"><div></div></Link></button>
      {popupData && <Popup data={popupData} onClose={handlePopupClose} />}
      <ToggleButton showStatistics={showStatistics} setShowStatistics={setShowStatistics} />
      {showStatistics &&(
        <div id='stat'>
          <Stats />
</div>
      )}
      
    </div>
    <Footer />
    </div>
  );
}

export default Body;
