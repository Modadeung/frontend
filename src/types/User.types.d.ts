export interface CreateUser {
  role: string;
}

export interface CreateUserResponse {
  id: string;
  role: string;
}

export interface CreateUserKeyWord {
  userId: string;
  keyWordList: string[];
}

export interface CreateUserKeyWordResponse {
  keyWordList: string[];
}

export interface UpdateUserKeyWordResponse {
  keyWordList: string[];
}