import React from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sharujacroos/omnibiz-frontend" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/OmniBiz-Backend" target="_blank" rel="noreferrer"><h2> OmniBiz</h2></a>
                <p>Multiple Business Management System using NextJs,Django,Mysql.</p>
            </div>
            <div className="project">
                <a href="https://github.com/sharujacroos/vehicleVista" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/vehicleVista" target="_blank" rel="noreferrer"><h2>VehicleVista</h2></a>
                <p> Platform Which Connects people & Vehicle Service Station using React,PHP,Mysql</p>
            </div>
            <div className="project">
                <a href="https://github.com/sharujacroos/bookVault" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/bookVault
                " target="_blank" rel="noreferrer"><h2>BookVault</h2></a>
                <p>Online library management system using Next.js, MongoDB, Node.js, and Express</p>
            </div>
            <div className="project">
                <a href="https://github.com/sharujacroos/TimeMaster" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/TimeMasterBackend" target="_blank" rel="noreferrer"><h2>Time Master</h2></a>
                <p> Task Management System using ReactJs , Django , Mysql</p>
            </div>
            <div className="project">
                <a href="https://github.com/sharujacroos/parkingScout" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/parkingScout" target="_blank" rel="noreferrer"><h2>Parking Scout</h2></a>
                <p>Parking Management System using HTML,CSS, PHP , Mysql.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2> Emart</h2></a>
                <p> E-Commerce Website using JSP , JavaServlet ,Mysql</p>
            </div>
            <div className="project">
                <a href="https://github.com/sharujacroos/TodoPro" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/sharujacroos/TodoPro" target="_blank" rel="noreferrer"><h2>TODO Pro</h2></a>
                <p>Task Management mobile application in android using Java</p>
            </div>

        </div>
    </div>
    );
}

export default Project;