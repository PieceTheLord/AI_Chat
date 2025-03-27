export const sendQuery = async (question: string): Promise<string> => {
  const response = await fetch(`http://127.0.0.1:8000/query`, {
    method: "POST",
    body: JSON.stringify({
      query: question,
    }),
  });
  
  const data = await response.json();

  return data.text; 
};