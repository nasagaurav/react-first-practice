import React from 'react';
import './style.css';
function Header() {
  return (
    <header>
      <div>LOGONAME</div>
      <div>
        <a href="">home</a>
        <a href="">about us</a>
        <a href="">contact</a>
        <a href="">services</a>
      </div>
    </header>
  );
}

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p> we are like called as about us in our family</p>
      <button>read more</button>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact us</h2>
      <p> contact us anytime 24X7</p>
      <input placeholder="name" />
      <input placeholder="phione no" />
      <input placeholder="emailid" />
      <input placeholder="adress" />
      <button>send message</button>
    </div>
  );
}
function Services() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const item = (
    <div className="item">
      <i>i className="fa fa-home fa-5x" </i>
    </div>
  );

  return (
    <div className="services">
      <h2>services</h2>
      <p>yes yes yes my services, your services, all services </p>
      <div className="flex">{(a.map = (x) => item)}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Services />
    </div>
  );
}
