import './hero.css';
import React from "react";
import { Button } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import photo1 from './../../assets/imges/profileShape1_1.webp'
import photo2 from './../../assets/imges/heroThumb1_1.webp'
import photo3 from './../../assets/imges/heroShape1_3.webp'

export function Hero(){
    return(
        <section className='mx-5 hero text-light  '>
          <div className='sec-1 '>
            <div  >
              <div  className='div1-hero '>
         
            <div className='text-hero mt-5 '>
             <p className='m-auto' >Everything you Need To Create A Website</p>
            </div>
            <h2 className='my-3'>Business Innovation With It Services Expertise</h2>
            <div className='my-ul'>
                <ul className='my-3 my-ul1'>
                    <li ><GiCheckMark className='mx-2'/>Deployment and Support</li>
                    <li><GiCheckMark className='mx-2'/>Discovery and Analysis</li>
                </ul>
                <ul className='my-3 my-ul2'>
                    <li><GiCheckMark className='mx-2'/>Flexibility and Adaptability</li>
                    <li><GiCheckMark className='mx-2'/>Competitive Advantage</li>
                </ul>
                
            </div>
            <Button  size="lg" active className='rounded-pill mx-3 my-btn-hero my-3'>
        GET STARTED<FaArrowRightLong className='mx-2 '/>
      </Button>
         </div>
         <div className='d-flex my-crad-hreo'>
        <div>
        <div className='d-flex align-items-center '>
          <FaStar />
          <h4>Trustipilot</h4>
        </div>
        <div className='d-flex'>
        <img className='photo1 me-3' src={photo1}></img>
        <div >
        <FaStar className=''/>
        <FaStar className=''/>
        <FaStar className=''/>
        <p>450+reviews</p>

        </div>   
        </div>
        </div>
        <div className='my-font mx-4'></div>

        <div>
          <h4>Google</h4>
        
        <div className='d-flex'>
        <img className='photo1 me-3' src={photo1}></img>
        <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <p>450+reviews</p>
        </div>
        </div>   
        </div>
       

         </div>
         <div> 
        <img className='photo2' src={photo2}></img>
         </div>
      
            </div>
    
             <div className='div-photo3'>
      <img className='photo3' src={photo3}></img>
             </div>
          </div>
         
         
             
      
        </section>
    )
}