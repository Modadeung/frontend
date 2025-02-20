import {
    CreateStore,
    CreateUserReservation,
    GetStoreDetail,
    GetStoreDetailResponse,
    GetStoreList,
    GetStoreListResponse,
} from "@/types/Store.types";
import { axiosInstance } from "../axiosInstance";

/**
 * @description 상점 리스트 조회
 * @param params 검색 키워드 리스트
 * @returns 상점 목록 데이터
 */
export const getStoreList = async (
    params: GetStoreList
): Promise<GetStoreListResponse[]> => {
    const response = await axiosInstance.get("/store/list", {
        params,
        paramsSerializer: { indexes: null },
    });
    return response.data;
};

/**
 * @description 특정 상점 상세 조회
 * @param params 상점 ID
 * @returns 상점 상세 정보
 */
export const getStoreDetail = async (
    params: GetStoreDetail
): Promise<GetStoreDetailResponse> => {
    const response = await axiosInstance.get("/store/detail", { params });
    return response.data;
};

/**
 * @description 상점 생성
 * @param data 상점 생성 정보
 * @returns 성공 여부
 */
export const createStore = async (data: CreateStore) => {
    const response = await axiosInstance.post("/store", data);
    return response;
};

/**
 * @description 상점 예약 (달력)
 * @param data 예약 정보
 * @returns 성공 여부
 */
export const createUserReservation = async (data: CreateUserReservation) => {
    const response = await axiosInstance.post("/store/reservation", data);
    return response;
};
