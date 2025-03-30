import React, { useState } from "react";
import { applyForLoan } from "../services/loanService";

const LoanForm: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loanData = { amount: parseFloat(loanAmount), purpose: loanPurpose, status: "Pending" };
        
        try {
            const response = await applyForLoan(loanData);
            alert("Loan application submitted successfully!");
            console.log(response);
        } catch (error) {
            console.error("Error applying for loan:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Apply for a Loan</h2>
            <input
                type="number"
                placeholder="Loan Amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Purpose of Loan"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                required
            />
            <button type="submit">Apply</button>
        </form>
    );
};

export default LoanForm;
