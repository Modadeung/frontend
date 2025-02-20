import {
  CreateUser,
  CreateUserKeywords,
  CreateUserResponse,
  GetUserKeywords,
  GetUserKeywordsResponse,
  UpdateUserKeywords,
  UpdateUserKeywordsResponse,
} from "@/types/User.types";
import { axiosInstance } from "../axiosInstance";

/**
 * @description 유저 생성
 * @param data 유저 생성 정보
 * @returns 성공 여부
 */
export const createUser = async (
  data: CreateUser
): Promise<CreateUserResponse> => {
  const response = await axiosInstance.post("/user", data);
  return response.data;
};

/**
 * @description 유저 키워드 조회
 * @param params 유저 ID
 * @returns 키워드 리스트
 */
export const getUserKeywords = async (
  params: GetUserKeywords
): Promise<GetUserKeywordsResponse> => {
  const response = await axiosInstance.get("/user/key-word", { params });
  return response.data;
};

/**
 * @description 유저 ID와 키워드 리스트를 전달하여 새로운 키워드를 생성합니다.
 * @param {CreateUserKeywords} data - 유저 키워드 생성 요청 데이터
 * @param {string} data.userId - 유저 ID (UUID)
 * @param {string[]} data.keyWordList - 생성할 키워드 리스트
 * @returns {Promise<void>} 성공 시 아무런 값도 반환되지 않음
 */
export const createUserKeywords = async (
  data: CreateUserKeywords
): Promise<void> => {
  await axiosInstance.post("/user/key-word", data);
};

/**
 * @description 유저 ID와 키워드 리스트를 전달하여 기존 키워드를 수정합니다.
 * @param {UpdateUserKeywords} data - 유저 키워드 수정 요청 데이터
 * @param {string} data.userId - 유저 ID (UUID)
 * @param {string[]} data.keyWordList - 수정할 키워드 리스트
 * @returns {Promise<UpdateUserKeywordsResponse>} 수정된 키워드 리스트 반환
 * @throws {Error} 요청 실패 시 에러 발생
 */
export const updateUserKeywords = async (
  data: UpdateUserKeywords
): Promise<UpdateUserKeywordsResponse> => {
  const response = await axiosInstance.patch("/user/key-word", data);
  return response.data;
};
