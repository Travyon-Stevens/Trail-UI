import React from "react";
import "./BudgetPreview.css";


function BudgetPreview() {

    return (
        <article className="budget-preview">

            <h2>Amount:</h2>

            <p>$400 / $1,000</p>

            <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>Details</button>
            </div>

        </article>
    )
}

export default BudgetPreview;