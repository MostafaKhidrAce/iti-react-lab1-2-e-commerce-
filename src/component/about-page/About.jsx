import './about.css';
import { useSelector } from 'react-redux';

const About = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
<div className="about-container">
 <div className="about-content">
  <div className="about-img">
  <img src="https://st5.depositphotos.com/28687978/65044/v/450/depositphotos_650447292-stock-illustration-ace-letter-logo-design-polygon.jpg" alt="About Us" />
  </div>
  <div className="about-description">
    <h2>About Me</h2>
    <p>
    I am a qualified and professional web developer. 
    </p>
    <p>
    Strong creative and analytical skills. 
    </p>
    <p>
    Team player with an eye for detail.. 
    </p>
  </div>
 </div>
</div>
<div className="counter-about container">
<h1>the counter is : {count}</h1>
 </div>
</>
  );
};

export default About;

