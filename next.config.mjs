/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["i.ibb.co"], // 외부 이미지 도메인 허용
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.mp4$/,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: "/_next/static/videos/",
                    outputPath: "static/videos/",
                    name: "[name].[hash].[ext]",
                },
            },
        });

        return config;
    },
};

export default nextConfig;
