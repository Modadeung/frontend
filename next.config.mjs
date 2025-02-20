/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["i.ibb.co"], // 외부 이미지 도메인 허용
    },
};

export default nextConfig;
