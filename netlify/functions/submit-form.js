exports.handler = async (event) => {
  console.log("🔔 Function triggered");

  let data = {};
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    console.log("❌ No JSON body received");
  }

  console.log("📩 Form Data:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Form received successfully",
      received: data,
    }),
  };
};
