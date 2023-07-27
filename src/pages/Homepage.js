import React from 'react';
import brainImage from '../images/brain.jpeg';
import therapy from '../images/therapy.svg'
import { RiFlashlightLine } from 'react-icons/ri';
import { FaAsterisk } from 'react-icons/fa'

const Homepage = () => (
  <>
  <section className="body-bg pt-5">
    <div className="bg-div text-center my-3">
    <div className="logo-image d-flex justify-content-center">
          <img src={brainImage} alt="" />
      </div>
      <h1 className='main_h1 fs-1'>Serenity</h1> 
      <div className='button-div'>
      <button className='button'>Get started</button>
      <button className='button2'>Learn more</button>
    </div>
    <p className="my-3">HopeWave: You've Got Questions, We've Got Answers</p>
    </div>
  </section>
 <section className='second_section'>
  <div className=" secondsect_div text-center my-3">
  <h1 className='second-h1'>Talk Your Way to Healing</h1>
  <p className="p-4">Experience the power of communication with our advanced AI, designed to help people struggling with depression. Dive into the world of AI assistance to unlock your inner strength and hope!</p>
  </div>
  </section>
  <section className='second_section'>
  <div className='flex-class d-flex'>
  <div className="flash text-center">
    <RiFlashlightLine/>
    <h2 className='one_thousand'>1000+</h2>
    <p className='user'>Happy Users</p>
  </div>
 
  <div className="flash text-center">
    <RiFlashlightLine/>
    <h2 className='one_thousand'>24/7</h2>
    <p className='user'>Instant Report</p>
  </div>
  <div className="flash text-center">
    <RiFlashlightLine/>
    <h2 className='one_thousand'>99%</h2>
    <p className='user'>Positive Feedback</p>
  </div>
  </div>
 </section>
 <section>
 <div className='asterisk d-flex text-center'>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
    <div className='asterisk_icon'>
      <FaAsterisk/>
    </div>
  </div>
  </section>
  <section>
    <div className='therapy d-flex text-center'>
    <div className="therapy_img">
          <img src={therapy} alt="" />
          <p className='therapy_text'>Real-time Assistance</p>
          <p className='therapy_text'>Engage in real-time conversations with our AI therapist to feel understood and supported.</p>
      </div>
      <div className="therapy_img">
          <img src={therapy} alt="" />
          <p className='therapy_text'>Voice Recognition</p>
          <p className='therapy_text'>Our cutting-edge voice recognition technology ensures smooth exchanges between you and the AI therapist.</p>
      </div>
    </div>
    
  </section>
  <section>
    <div className='hope_div text-center'>
    <h2 className='one_thousand'>1000+</h2>
      <h1 className='wave_hope'>Ready To Embrace The wave Hope?</h1>
      <p className='hope_text'>Don’t let depression keep you down. Let HopeWave’s Speak Hope AI help you navigate the storm with <br></br> powerful AI-assisted conversations. Let’s ride the wave of hope together!</p>
      <button className='hope_btn'>Get started Now</button>
    </div>
  </section>
 
 </>
 
);

export default Homepage;
