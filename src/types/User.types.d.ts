export interface CreateUser {
  /** 사용자 역할 */
  role: string;
}

export interface CreateUserResponse {
  /** 사용자 ID */
  id: string;
  /** 사용자 역할 */
  role: string;
}

export interface GetUserKeywords {
  /** 사용자 ID */
  userId: string;
}

export interface GetUserKeywordsResponse {
  /** 키워드 리스트 */
  keyWordList: string[];
}

export interface CreateUserKeywords {
  /** 사용자 ID */
  userId: string;
  /** 키워드 리스트 */
  keyWordList: string[];
}

export type UpdateUserKeywords = CreateUserKeywords;

export interface UpdateUserKeywordsResponse {
  /** 키워드 리스트 */
  keyWordList: string[];
}
