import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import { Alert } from "flowbite-react";
import NavBar from "../components/NavBar/NavBar";
import CategoriesBar from "../components/categoriesHomeBar/CategoriesBar";
import HomePageSlider from "../components/HomepageSlider/HomePageSlider";
import CategoriseCardsBar from "../components/HomePageCategoriesShow/Dekstop/CategoriseCardsBar";
import MobileDrawer from "../components/mobileDrawer/MobileDrawer";
import styleDrwer from "../components/mobileDrawer/css/MobileDrawer.module.css";
import { useContext } from "react";
import { MyContext } from "../ContaxtApi/ContextApi";

export default function Home() {
  const { isOpen, setisOpen } = useContext(MyContext);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <>
      <div>
        <div
          className={`${
            isOpen
              ? styleDrwer.MobileDrawer_warper_show
              : styleDrwer.MobileDrawer_warper_hide
          }`}
        >
          <MobileDrawer />
        </div>

        <NavBar />
        <CategoriesBar />
        <HomePageSlider />
        <CategoriseCardsBar />
        <CategoriseCardsBar />
        <CategoriseCardsBar />
      </div>
    </>
  );
}
