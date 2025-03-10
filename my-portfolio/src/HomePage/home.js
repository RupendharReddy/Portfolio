import react from 'react';
import './home.css';
const HomePage = () => {
  return (
    <div className="home">
      <div className='dp'>
        <img src="./Images/dp.png" alt="dp" className='dpimg'/>
        <br/>
        <div>
            <h1>Varugu Rupendhar Reddy </h1>
            <h4>A Passionate Programmer and a Web Developer</h4>
        </div>
      </div>
      <div className='content'>
        <center>
            <h1 className='heading'>"Full Stack Developer" Crafting Scalable<br/>& Secure Web Solutions</h1>
            <h5>Hey there, I’m Varugu Rupendhar Reddy a passionate Full Stack Developer dedicated to building </h5>
            <h5>high-performance, scalable, and secure web applications. With expertise in both front-end and</h5>
            <h5> back-end technologies, I create seamless digital experiences that drive impact.</h5>
        </center>
      </div>
    </div>
  );
};
export default HomePage;
