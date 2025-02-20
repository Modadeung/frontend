/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
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
