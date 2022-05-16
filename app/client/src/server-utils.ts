export const get = async (path: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    // include cookies
    credentials: "include",
  });
  return response.json();
};

export const post = async (path: string, body: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });
  return response.json();
};
