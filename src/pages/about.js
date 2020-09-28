import React from "react"
import Layout from "..//components/layout"
import CaliTrees from "./images2/caliTree.jpeg"
import Hollywood from "./images2/hollywood.jpeg"
import goldenBridge from "./images2/goldenGateB.jpeg"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function About() {
  return (
    <Layout>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={goldenBridge} alt="Golden Gate Bridge"></img>
          </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={Hollywood} alt="Hollywood Sign"></img>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={CaliTrees} alt="Palm Trees"></img>
        </div>
      </div>
  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
    <span class="carousel-control-next-icon" ></span>
  </a>
</div>
        <p id="aboutText">Golden State Bites started as a small family run restaurant back in 1998. It has now grown to over 35 locations all across the beautiful state of california. Not only have we rapidly grown these past 22 years, but our family still proudly serves at every location! We've received "Best Restaurant Award - California" 1999,2000,2001,2005,2006,2010,2012,2015, and 2019. We look forward to serving California with the best meals for generations to come. </p>
    </Layout>
  ) 
}
