export const applyForLoan = async (data: { amount: string; term: string }) => {
  try {
    const response = await fetch("http://localhost:5020/api/loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe", // Replace with actual user input if needed
        amount: parseInt(data.amount, 10), // Ensure number type
        duration: parseInt(data.term, 10), // Change "term" to "duration"
        loan: "personal",  // Default value or replace with user input
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to apply for loan.");
    }

    return await response.json();
  } catch (error: any) {
    return { message: error.message || "Error applying for loan." };
  }
};
