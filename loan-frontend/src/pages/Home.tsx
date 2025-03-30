import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to the Loan App</h1>
      <Link to="/apply" className="button">Apply for a Loan</Link>
    </div>
  );
};

export default Home;
