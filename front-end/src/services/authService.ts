// src/services/authService.ts

export default {
    login: async (email: string, password: string) => {
      // 這裡應該有你的 API 請求邏輯，例如使用 fetch 或 axios
      if (email === 'test@example.com' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ email }));
        return Promise.resolve();
      } else {
        return Promise.reject(new Error('Invalid credentials'));
      }
    },
  };
  