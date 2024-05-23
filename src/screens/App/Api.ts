import axios from "axios";

const API_KEY = "0645d9c6c82d9a5b799a9a0a0ff91f6c";
const BASE_URL = "https://api.themoviedb.org/3";

export const createGuestSession = async (user_id: string, user_pw: string) => {
  try {
    // 로컬 서버에서 사용자 인증
    const authResponse = await axios.post("http://localhost:5100/api/check", {
      user_id,
      user_pw,
    });

    if (!authResponse.data.valid) {
      throw new Error("Invalid credentials");
    }

    // 외부 API에서 게스트 세션 생성
    const guestSessionResponse = await fetch(
      `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!guestSessionResponse.ok) {
      throw new Error("Network response was not ok");
    }

    const guestSessionData = await guestSessionResponse.json();
    return { ...guestSessionData, userValid: true };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.error || error.message);
    } else {
      throw new Error(error as string);
    }
  }
};
