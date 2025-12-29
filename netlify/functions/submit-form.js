exports.handler = async (event) => {
  // Parse the data sent from the form
  const data = JSON.parse(event.body || "{}");

  // Log data to Netlify logs (for verification)
  console.log("Form submission received:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Form submitted successfully",
    }),
  };
};
