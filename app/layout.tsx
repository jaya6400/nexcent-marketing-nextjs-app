"use client"
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Caraousel from "@/components/Caraousel";
import Footer from "@/components/Footer";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {

    }
    <head/>
      <body>
      <ChakraProvider>
        <Navbar/>
        <Caraousel/>
        <Footer/>
        {children}
        </ChakraProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: NewType) {
//   return (
//     <>
//       <html lang="en" suppressHydrationWarning>
//         <head />
//         <body>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
//           </ThemeProvider>
//         </body>
//       </html>
//     </>
//   )
// }

