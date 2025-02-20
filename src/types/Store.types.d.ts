export interface CreateStore {
  /** 상점 이름 */
  name: string;
  /** 상점 설명 */
  description: string;
  /** 상점 이미지 URL 리스트 */
  imageUrl: string[];
  /** 별점 */
  scope: number;
  /** 리뷰 */
  review: string;
  /** 최소 주문 가격 */
  minPrice: number;
  /** 최대 주문 가격 */
  maxPrice: number;
  /** 키워드 리스트 */
  keywordList: string[];
}

export interface GetStoreList {
  /** 검색 키워드 리스트 */
  keywordList: string[];
}

export interface GetStoreListResponse {
  /** 상점 ID */
  store_id: string;
  /** 상점 이름 */
  store_name: string;
  /** 상점 설명 */
  store_description: string;
  /** 최소 가격 */
  store_min_price: number;
  /** 최대 가격 */
  store_max_price: number;
  /** 상점 별점 */
  store_scope: number;
  /** 상점 리뷰 */
  store_review: string;
  /** 상점 이미지 리스트 */
  imageUrlList: string[];
  /** 키워드 리스트 */
  keywordList: string[];
}

export interface GetStoreDetail {
  /** 상점 ID */
  storeId: string;
}

export interface GetStoreDetailResponse {
  /** 상점 ID */
  id: string;
  /** 상점 이름 */
  name: string;
  /** 상점 설명 */
  description: string;
  /** 최소 가격 */
  minPrice: number;
  /** 최대 가격 */
  maxPrice: number;
  /** 상점 별점 */
  scope: number;
  /** 상점 리뷰 */
  review: string;
  /** 키워드 리스트 */
  keywordList: string[];
  /** 상점 이미지 리스트 */
  storeImageList: string[];
}

export interface CreateUserReservation {
  /** 유저 ID */
  userId: string;
  /** 상점 ID */
  storeId: string;
  /** 시작 날짜 */
  startDate: string;
  /** 종료 날짜 */
  endDate: string;
}
