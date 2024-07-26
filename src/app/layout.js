import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export const metadata = {
  title: "Books Palace - The perfect place to find books to read",
  description: "Created by Abdul Samad Ansari using Next.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body style={{ overflowX: "hidden" }}>
        <header style={{ overflowX: "hidden" }}>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
