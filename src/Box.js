import React from 'react';
import './style.css'
import logo from './logo.svg';
import d from 'd:/react-portfolio/src/images/person.png'



const Box=()=>{

    return (
    
        <div className='parent'>
        <div className='child1'>
           <img src={d} alt="logo pic" />

        </div>
        <div className='child2'>
            <p className='title'> About us</p>
            <hr className='division' />
            <p className='content'>I am a Web Designer & Front-end developer with some good Handson Project experience.I'm interested in all kinds of visual communication,but my major focus is on designing web,mobile & tablets interface.I also have skills in other fields like branding,icon design or web devlopment

I enjoy turning complex problems into simple,beautiful and intuitive design.When I'm not pushing pixels,you'ill find the cooking,gardening or working out in the park</p>

        </div>
       

        </div>
        
        
        
    )
}

export default Box;