import Navbar from "./navbar";
import React from "react";

function About() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>About Motorcycle</h1>
        <p>
          The motorcycle is a versatile mode of transportation that offers various qualities and features for riders. Some key qualities of motorcycles include:
        </p>
        <ul>
          <li>Speed and Agility: Motorcycles are known for their ability to accelerate quickly and maneuver through traffic with ease. They provide a thrilling and dynamic riding experience.</li>
          <li>Fuel Efficiency: Compared to cars, motorcycles generally have better fuel efficiency, which can result in cost savings and reduced environmental impact.</li>
          <li>Compact and Versatile: Motorcycles are compact vehicles that can easily navigate crowded urban areas and find parking spaces. They are also suitable for exploring scenic routes and off-road adventures.</li>
          <li>Community and Camaraderie: Riding motorcycles often fosters a sense of community among riders. Group rides and motorcycle events provide opportunities to connect with fellow enthusiasts.</li>
          <li>Customization Options: Motorcycles offer a wide range of customization possibilities, allowing riders to personalize their bikes according to their preferences and style.</li>
          <li>Low Maintenance: Motorcycles typically have fewer components compared to cars, resulting in simplified maintenance and lower maintenance costs.</li>
        </ul>
        <p>
          These qualities contribute to the enduring popularity of motorcycles as a mode of transportation and a symbol of freedom and adventure.
        </p>
      </div>
    </div>
  );
}

export default About;
