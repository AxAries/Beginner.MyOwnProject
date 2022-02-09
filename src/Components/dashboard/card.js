import React from "react";
import "./dashboard.css";

const Card = (props) => {
  return (
    <>
      <div className=" col-md-12 col-sm-6 col-12 mx-auto">
        <div className="card">
          
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
                {props.title}
                <span class="Salary" > 
                    Wynagrodzenie: {props.salaryFrom} - {props.salaryTo}
                </span>
                
                
                </h5>
            <p className="card-text"> {props.city}</p>
            <a href="" className="btn btn-primary">
              Sprawdź ofertę
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
