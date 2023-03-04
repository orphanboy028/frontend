import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { Alert } from "flowbite-react";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const alert = () => {
    console.log("run");
    <Alert color="info">Alert!</Alert>;
  };

  return (
    <>
      <div>
        <h1>Hello Next js</h1>
      </div>
    </>
  );
}
