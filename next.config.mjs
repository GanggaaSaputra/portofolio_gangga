/** @type {import('next').NextConfig} */
const nextConfig = {
  // Letakkan langsung di root objek, bukan di dalam experimental
  allowedDevOrigins: ['192.168.1.8', 'localhost:3000'],
};

export default nextConfig;