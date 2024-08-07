export interface LoginResponse {
  token: string;
}

export interface AuthPayload {
  username: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
