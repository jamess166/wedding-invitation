import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";


import { Allura, Roboto, Roboto_Mono, Cookie, Open_Sans, Dancing_Script } from 'next/font/google';

const allura = Allura({
  subsets: ['latin'],
  variable: '--font-allura',
  display: 'swap',
  weight: "400"
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',  // Añade esta línea
  weight: ['400', '700'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',  // Añade esta línea
  display: 'swap',
});

const cookie = Cookie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cookie',  // Añade esta línea
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',  // Añade esta línea
  display: 'swap',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',  // Añade esta línea
  display: 'swap',
});
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export const metadata: Metadata = {
  title: "Sheyla y James",
  description: "Invitación de nuestra Boda",
  icons:{
    icon:"/images/logo.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${allura.variable} ${robotoMono.variable} ${cookie.variable} ${openSans.variable} ${dancing.variable}`}
        style={{
          position: 'relative', // Necesario para posicionar el contenido de la página
          minHeight: '100vh', // Asegura que el fondo cubra toda la pantalla
        }}
      >
        {/* Capa de fondo fija */}
        <div
          style={{
            position: 'fixed', // Fondo fijo en la pantalla
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url("/images/texture.jpg")',
            backgroundSize: 'cover', // Ajusta la imagen para cubrir todo el fondo
            backgroundRepeat: 'no-repeat', // Evita repetir la textura
            zIndex: -1, // Pone el fondo detrás del contenido
            opacity: 0.3, // Ajusta la opacidad de la textura de fondo
          }}
        ></div>

        {/* El contenido de la página */}
        {children}
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${roboto.variable} ${allura.variable} ${robotoMono.variable} ${cookie.variable} ${openSans.variable} ${dancing.variable}`}
//         style={{
//           position: 'relative', // Necesario para posicionar el fondo
//           minHeight: '100vh', // Asegura que el fondo cubra toda la pantalla          
//         }}
//       >
//         {/* Capa de fondo con opacidad */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundImage: 'url("/images/texture.jpg")',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'repeat',
//             // backgroundAttachment: 'fixed',
//             opacity: 0.3, // Ajusta la opacidad de la textura de fondo
//             zIndex: -1, // Pone la capa de fondo debajo del contenido
//           }}
//         ></div>

//         {/* El contenido de la página */}
//         {children}
//       </body>
//     </html>
//   );
// }
