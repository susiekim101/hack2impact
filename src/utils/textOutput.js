const textOutput = async (quizResult) => {
  const prompt = `You are an interior design specialist focused on creating trauma-informed spaces. A client has completed a personal assessment describing their preferences, sensory triggers, and lifestyle needs. The assessment is provided below in JSON format.

Please:
1. Analyze the client’s preferences and needs.
2. Identify design elements that support comfort, safety, and emotional well-being.
3. Provide a friendly, empathetic, and insightful summary of recommended interior design strategies tailored to the client.

Here is the client’s assessment:
${JSON.stringify(quizResult, null, 2)}
`;

  const res = await fetch("http://localhost:3001/api/generate-text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  console.log(data.text);

  return data.text;
};

export default textOutput;
