const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
const API_URL = `${API_BASE_URL}/api`;

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

class ApiError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    throw new ApiError(response.status, data.message || "API Request Failed");
  }

  return data as T;
}

export const api = {
  auth: {
    signup: (data: any) =>
      request<{ message: string; otpRequired?: boolean; token?: string }>("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    login: (data: any) =>
      request<{ token: string; message: string; otpRequired?: boolean }>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      }),

    verify: (data: any) =>
      request<{ token: string; message: string }>("/auth/verify", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },

  dashboard: {
    getCreatorStats: () => request<any>("/dashboard/creator"),
    getBrandStats: () => request<any>("/dashboard/brand"),
  },
};
