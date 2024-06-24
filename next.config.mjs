/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
    },
    async rewrites() {
        return [{
            source: '/structure/:path*',
            destination: '/studio/admin-portal',
        }];
    },
};

export default nextConfig;
