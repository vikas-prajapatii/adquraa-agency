const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/api";

async function request(
  path: string,
  options: RequestInit = {}
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "API Error");
  }

  return data;
}

export const api = {
  auth: {
    signup: (data: any) =>
      request("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    login: (data: any) =>
      request("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    verify: (data: any) =>
      request("/auth/verify", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  dashboard: {
    getStats: (role: "creator" | "brand") =>
      request(`/dashboard/${role}`),
  },
};
