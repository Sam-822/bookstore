"use client";
import { useEffect } from "react";
import Category from "./component/Category";
import Hero from "./component/Hero";
import Link from "next/link";
import Footer from "./component/Footer";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <main>
        <Hero />
        <div className="container mt-5 ">
          <Category cat="computers" />
          <Category cat="mystery" />
          <Category cat="psychology" />
          <Category cat="philosophy" />
        </div>
        <div className=" vw-100 d-flex justify-content-center my-5">
          <Link href="/categories" className="m-0 td-none fs-4 font-titillium glass border px-5 py-3 rounded bottom-link">
            View All Categories
          </Link>
        </div>
      </main>
    </>
  );
}
