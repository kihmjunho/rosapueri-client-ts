export interface UserData {
  username: string;
  password: string;
}

export interface UserState {
  userId: string;
}

export interface LoginType {
  accessToken: string;
  userId: string;
}

export interface UserGetters {
  isLogin(state: UserState): boolean;
}

export interface UserActions {
  setUser(data: UserState): void;
  getCookies(data: string): void;
}
