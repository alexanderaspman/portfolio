import React from 'react';
import react from '../images/react.svg';
import jst from '../images/js.svg';
import net from '../images/net.svg';
import Html from '../images/Html.svg';
import ts from  '../images/ts.png';

import {Component} from 'react';


class Skillz extends Component  {
    constructor(props) {
        super(props)
        
        this.state = {
            visible:false
         }}
     
    render() { 
     
        const classes = this.state.open ? 'basket' : 'basket hide';
        return(
            <section className="page-section" id="services">
            <div className={this.state.visible?'fadeIn':'fadeOut'} >
    <p>adssadsadsadsadsadsadsadsadsadasdsadsa</p>


            </div>

            <div className="container">
          <h2 className="text-center mt-0">Skillz</h2>
          <hr className="divider my-4" />
          <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                            <div className="skillCard" > <img src={react} /> </div>     
                                      <h3 className="h4 mb-2">React</h3>
                      <p className="text-muted mb-0">I have a good understanding of react but I am learning react-typescript there my knowleadg is a litle better then top of basic</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >  <img src={Html} className="skillCard" /></div>
  
        <h3 className="h4 mb-2">Html/CSS</h3>
                      <p className="text-muted mb-0">Very good understanding but loeth. I want a challange</p>
                
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >   <img src={jst} className="skillCard" /></div>
  
  
  <h3 className="h4 mb-2">Javascript/jquery</h3>
                      <p className="text-muted mb-0">I really like jquery and i would easely say thats where my greatest Skillz catagory lies under. Atleast a month a go I would, but I realy like React and will probably say that is it soon. </p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                  <div className="skillCard" >    <img src={ts} className="skillCard" /></div>
                      <h3 className="h4 mb-2">Typescript</h3>
                      <p className="text-muted mb-0">I been learning ts for 10weeks during my internship, give me a payed month where there is the only thing I may focus on and I will be able to code usefull stuff</p>
                  </div>
              </div>
          </div>
      </div>
  </section>  );
    }
}
 
export default Skillz