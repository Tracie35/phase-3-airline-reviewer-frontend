import React from 'react'

function Airline({airline}) {
    return (<div className="course">
    {Airline.map((airline)=>(
        <div className="card col-md-6" style={{ width:"540px", marginBottom:"20px"}}>
            <div className="card-body" >
            <div className="details" >
        <img src={airline.image_url} alt={airline.name}/>
    <div>Title: {airline.name}</div>
    <div>Category: {airline.topic.name}</div>
    <div>Author: {airline.author.name}</div>
    <div>Course link: <a href={airline.link} rel="noopener">Tap to view course</a></div>

    
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
        </div>
        </div>
</div>

    ))}



</div>
)
  }
  fetch("https://phase-3-airline-reviewer.herokuapp.com/airlines")
  .then((r) => r.json())
  .then((data) => console.log(data));
  
  export default Airline