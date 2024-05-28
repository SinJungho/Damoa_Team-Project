import axios from 'axios';

const API_KEY = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const createGuestSession = async (user_id: string, user_pw: string) => {
    try {
        const authResponse = await axios.post('http://localhost:5100/api/check', {
            user_id,
            user_pw,
        });

        if (!authResponse.data.valid) {
            throw new Error('Invalid credentials');
        }

        const guestSessionResponse = await fetch(`${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!guestSessionResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const guestSessionData = await guestSessionResponse.json();
        return { ...guestSessionData, userValid: true };
    } catch (error: unknown) {
        if (error instanceof Error) throw error;
        else throw new Error('An unknown error occurred');
    }
};

export const registerUser = async (user_id: string, user_pw: string, money: number) => {
    try {
        const response = await axios.post('http://localhost:5100/api/register', {
            user_id,
            user_pw,
            money,
        });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) throw error;
        else throw new Error('An unknown error occurred');
    }
};
