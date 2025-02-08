export interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null
};
