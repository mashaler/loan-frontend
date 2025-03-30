import axios from "axios";

const API_URL = "/api/loan"; // Since we set up a proxy, no need for full URL

export const applyForLoan = async (loanData: any) => {
    const response = await axios.post(API_URL, loanData);
    return response.data;
};

export const getLoans = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateLoanStatus = async (id: number, status: string) => {
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
};
