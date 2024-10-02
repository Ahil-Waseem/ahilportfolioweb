
// App.js
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
// import Navbar2 from './Components/Navbar2';
import './App.css';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef} />
      
      <section ref={homeRef} className="home-section">
      {/* <div className='top-heading'>
      <h1>This is the home section where you can find the latest updates.</h1></div> */}
     
        <div className='home-content'>
       
        <div className="home-text">
        

        <h2>Introduction</h2>
        <h2>Hi, I'm <span>AHIL WASEEM</span>, a passionate Full-Stack Java Developer...</h2>
        </div>
        <div className='home-image'>
            <img src={require ('./images/devloperimg.png.png')} alt='Profile'></img>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="about-section">
        <h2>About Us</h2>
        
        <div className='about-content'>
        <div className='para1'>
        <p>
        My self Ahil Waseem. I am from Mumbai Mankhurd.I am a graduate from Jananayak Chandra Shekhar University.
          I am also a Diploma holder as a FULL STACK JAVA DEVELOPER from IIHT VASHI-NAVI MUMBAI|AIIITS - MUMBAI.
          My Father is a Business Man and My Mother is house wife.
        </p>
        </div>
        <div className='para2'>
        <p>I am a dedicated and innovative Entry Level Full Stack Java Developer with a passion
          for building robust and user-friendly web applications. Skilled in Java, Spring, J2EE, and Frontend
          technologies such as HTML5, CSS, JavaScript, Angular.js and React.js. I have also an experience in Bootstrap framework.
          Strong foundation in RESTfull APIs, Microservises and Database management using MySQL.
          Familiar with Agile development environments and knowledge of Git for version controll.
          Eager to contribute to dynamic teams with a focus on delevering quality softwere solution
          and enhancing customer experiences.
        </p>
        </div>
        </div>
        </section>

        <section ref={skillsRef} className="skills-section">
          <h1>My Skills And Technologies</h1>
          <div className='skills-content'>
         <div className='languages'>
        <ol>
          <h1>Languages</h1>
          <h2><li>HTML/HTML5</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>CORE JAVA</li></h2>
        </ol>
        </div>
        <div className='frameworks'>
          <ol>
            <h1>Frameworks</h1>
           <h2> <li>SERVLET</li>
            <li>JSP</li>
            <li>HIBERNET</li>
            <li>SPRING</li>
            <li>BOOTSTRAP</li>
            <li>REACT.JS</li>
            <li>ANGULAR.JS</li></h2>
          </ol>
        </div>
        <div className='tools'>
          <ol>
            <h1>Web Development Tools...</h1>
           <h2> <li>VISUAL STUIDO CODE</li>
            <li>ECLIPSE</li>
            <li>NETBEANS</li>
            <li>GITHUB</li>
            <li>WORDPRESS</li></h2>
          </ol>
        </div> 
        </div>
        </section>

      <section ref={contactRef} className="contact-section">
       <h1>Contact Us</h1>
        <h2>If you would like to reach out, please contact us hear</h2>
        
        <div className="contact-form-container">
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" required />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      
      <label htmlFor="message">Message (min 500 words):</label>
      <textarea id="message" name="message" rows="10" required></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
      </section>
    </div>
  );
}

export default App;
