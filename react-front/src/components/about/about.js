import React from "react";
import { Container } from 'react-bootstrap';
import './about.css';

function About() {
    return (
        <div className="about">
            <header className="about-header">
                <Container className="presentation">
                    <h1>Acerca de Health Control</h1>
                    <p>Health control es una aplicación desarrollada por estudiantes del ciclo 4 del programa Misión TIC 2021, utiliando el 
                        stack MERN y la metodología agile Scrum y el trabajo colaborativo en DevOps. 
                    </p>
                </Container>
            </header>
        </div>
    );
};

export default About;