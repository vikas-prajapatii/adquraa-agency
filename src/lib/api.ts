const API_URL = 'http://localhost:8080/api';

export const api = {
    auth: {
        signup: async (data: any) => {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return response.json();
        },
        login: async (data: any) => {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return response.json();
        },
        verify: async (data: any) => {
            const response = await fetch(`${API_URL}/auth/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return response.json();
        }
    },
    dashboard: {
        getStats: async (role: 'creator' | 'brand', token: string) => {
            const response = await fetch(`${API_URL}/dashboard/${role}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.json();
        }
    }
};
