const API_KEY = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const createGuestSession = async () => {
    const response = await fetch(`${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
};
