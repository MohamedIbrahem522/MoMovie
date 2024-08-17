/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    trailingSlash: true, // إضافة شريط مائل في نهاية كل URL
    images: {
      unoptimized: true, // تعطيل تحسين الصور
    },
  };
  
  export default nextConfig;
  