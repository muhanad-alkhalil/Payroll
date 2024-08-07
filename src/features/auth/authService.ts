import axios from '../../lib/api-client';
import { AuthPayload, LoginResponse } from '../../types/auth';

const register = async (data: AuthPayload): Promise<string> => {
  const res = await axios.post<string>('/auth/register', data);
  return res.data;
};

const login = async (data: AuthPayload): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/auth/login', data);
  
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

const logout = (): void => {
  // await axios.post('/auth/logout');
  localStorage.removeItem('token');
};

const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  return true
};

export default {
  register,
  login,
  logout,
  isLoggedIn
};
