import { Inter } from "next/font/google";
import "./tailwind.css";
import SbMain from "./Components/SearchBar/SbMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Next",
  description: "App generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b fixed w-full backdrop-blur-md z-50" >
          <SbMain/>
        </div>
        <div className="py-20">
          {children}
        </div>
        </body>
    </html>
  );
}
