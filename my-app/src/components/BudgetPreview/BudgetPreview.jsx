import React from "react";
import "./BudgetPreview.css";

function BudgetPreview() {

    const budgetCategories = [
        {
            id: 1,
            name: "Necessities",
            spent: 400,
            total: 1000
        },
        {
            id: 2,
            name: "Wants",
            spent: 200,
            total: 500
        },
        {
            id: 3,
            name: "Savings",
            spent: 350,
            total: 800
        }
    ]

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