import React from 'react';
import {budgets, perks} from '../../Constatns/constants'
function Budgets(){
    return(
        <div className="container-largest budgets-section container">
            <h2 className="section-title text-center">Personal Curiosity Budget After 1 Year</h2>
            <div className="row">
                {budgets.map((el, i) => {
                    return (
                        <div className="col-md-3" key={i}>
                            <div className="perks-item text-center">
                                <img src={el.icon} alt=""/>
                                <h3 className="section-subtitle">{el.name}</h3>
                                <span className="perks-txt">{el.txt}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Budgets;
