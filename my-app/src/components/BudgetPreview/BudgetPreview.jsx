import React from "react";
import "./BudgetPreview.css";

function BudgetPreview() {
    return (
        <article className="budget-preview">
            <h3>Amount:</h3>
            <p>$400 / $1,000</p>

            <h3>Remaining:</h3>
            <p>$600.00</p>

            <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>Details</button>
            </div>
        </article>
    )
}

export default BudgetPreview;