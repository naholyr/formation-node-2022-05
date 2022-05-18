export const get = async (
  path: string,
  token: string | undefined | null = globalToken
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    // include cookies
    credentials: "include",
    mode: "cors",
    headers: {
      ...authorizationHeader(token),
    },
  });
  return response.json();
};

export const post = async (
  path: string,
  body: any,
  token: string | undefined | null = globalToken
) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authorizationHeader(token),
    },
    body: JSON.stringify(body),
    credentials: "include",
    mode: "cors",
  });
  return response.json();
};

const authorizationHeader = (
  token?: string | null
): { Authorization: string } | {} => {
  return token ? { Authorization: `Bearer ${token}` } : {};
};

let globalToken: string | undefined | null = localStorage.getItem("jwt");

export const setGlobalToken = (token: string | undefined) => {
  console.log("stored token", token);
  globalToken = token;
  if (token) {
    localStorage.setItem("jwt", token);
  } else {
    localStorage.removeItem("jwt");
  }
};
