import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { applyForLoan } from "../services/loanService";

const ApplyLoan: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  
  const handleApply = async () => {
    const response = await applyForLoan({ amount, term });
    alert(response.message);
  };

  return (
    <div className="container">
      <h2>Apply for a Loan</h2>
      <Input label="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Input label="Term (months)" type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
      <Button label="Apply" onClick={handleApply} />
    </div>
  );
};

export default ApplyLoan;
