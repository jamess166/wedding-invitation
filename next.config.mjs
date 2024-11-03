// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wedding-invitation-production-f238.up.railway.app',
      },
      // Si usas imágenes de otros dominios, agrégalos aquí
    ],
  }
}

export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'standalone',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: {
//     unoptimized: true,
//   }
// }

// export default nextConfig

// next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Configuración para Railway
//   output: 'standalone',
  
//   // Ignorar errores de ESLint durante el build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
  
//   // Configuración de imágenes
//   images: {
//     domains: ['wedding-invitation-production-f238.up.railway.app'],
//     unoptimized: true,
//   },
  
//   // Configuración adicional para optimizar el despliegue
//   experimental: {
//     serverActions: true,
//   },
  
//   // Optimizaciones para producción
//   swcMinify: true,
  
//   // Configuración de headers para Railway
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'Permissions-Policy',
//             value: 'camera=(), microphone=(), geolocation=()',
//           },
//         ],
//       },
//     ];
//   },
// }

// export default nextConfig;