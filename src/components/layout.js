import React from "react"
import { Link } from "@reach/router"
import "./layout.scss"
import { StaticQuery, graphql } from "gatsby"
import Bear from "./images/caliBear.png"


export default function Layout({children}) {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div>
          <img id="imgBear" src={Bear} alt="Bear Logo"></img>
          <span id="navBrand">Golden State Bites</span>
          </div>
          <div></div> <div></div> <div></div> 
              <ul class="nav navbar-nav">
                <li><Link to="/">Home</Link></li>    
              </ul> 
              <ul class="nav navbar-nav">    
                <li><Link to="about">About Us</Link></li>
              </ul>
          <div></div> 
        </nav>
         
          <br></br>
        <div style={{ maxWidth: '2000px', margin: '0 auto', padding: '50px',}}>
           
            {children}
        </div>
       
      </div>
    )
}
