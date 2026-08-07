import React from "react";
import './BudgetCategory.css'

function BudgetCategory(props){
    return (
        <div className="budget-category">
            <h3>{props.name}</h3>

            <p>
                ${props.spent} / ${props.total}
            </p>
        </div>
    );
}

export default BudgetCategory;