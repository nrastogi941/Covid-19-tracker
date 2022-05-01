import React from 'react'
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carosel() {
    return (
        <div>
             <Carousel>
              <Carousel.Item>
                 <img
                 className="d-block w-100 images"
                 src="https://images.unsplash.com/photo-1587814969489-e5df12e17391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80"
                 alt="First slide"
                />
               <Carousel.Caption>
              <h3 className="car_h3">Take Care</h3>
              <p className="car_p">Stay Home, Stay Safe</p>
               </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
               <img
              className="d-block w-100 images"
              src="https://images.unsplash.com/photo-1621294710656-78af659694ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Second slide"
              />

             <Carousel.Caption>
                 <h3 className="car_h3" >Social Distancing</h3>
                <p className="car_p" >Distance Is Temporary But Love Is Forever.</p>
              </Carousel.Caption>
            
             </Carousel.Item>
         <Carousel.Item>
              <img
            className="d-block w-100 images"
            src="https://images.unsplash.com/photo-1603248322878-f0e0ac378588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
              />

         <Carousel.Caption>
             <h3 className="car_h3">Hand Sanitisation</h3>
                <p className="car_p">Good Health Is In Your Hands.</p>
           </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                 <img
                 className="d-block w-100 images"
                 src="https://images.unsplash.com/photo-1584541830934-d3d0d89e2d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZhY2UlMjBtYXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                 alt="Fourth slide"
                />
               <Carousel.Caption>
              <h3 className="car_h3">Wear Mask</h3>
              <p className="car_p">I Wear a Mask Because I Want To Protect My Community And Family.</p>
               </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100 images"
                 src="https://images.unsplash.com/photo-1609129513482-c29381991fcb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvdmlkJTIwMTklMjB0b2dldGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 alt="First slide"
                />
               <Carousel.Caption>
              <h3 className="car_h3">Always Together</h3>
              <p className="car_p">And The World Came Together As The People Stayed Apart.</p>
               </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
                 <img
                 className="d-block w-100 images"
                 src="https://images.unsplash.com/photo-1611694554696-e5a46f5015bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                 alt="First slide"
                />
               <Carousel.Caption>
              <h3 className="car_h3">Vaccination</h3>
              <p className="car_p">Vaccinate Yourself, Protect Others.</p>
               </Carousel.Caption>
             </Carousel.Item>
     </Carousel>
        </div>
    )
}

export default Carosel
