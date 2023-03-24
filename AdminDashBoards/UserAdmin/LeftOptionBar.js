import React from "react";
import style from "./css/UserDashBoard.module.css";
import diamondIcon from "../../public/icons/diamond.png";
import mostrecent from "../../public/icons/most-recent.png";
import Image from "next/image";
import Link from "next/link";

export default function LeftOptionBar() {
  return (
    <>
      <div className={style.LeftOptionBar_Container}>
        <div className={style.LeftOptionBar_options_Box}>
          <div className={style.LeftOptionBar_imageBox}>
            <Image src={diamondIcon} alt="dimaond-icon" width={20} />{" "}
          </div>
          <div className={style.LeftOptionBar_nameBox}>
            <p>Dashboard </p>
          </div>
        </div>

        <div className={style.LeftOptionBar_options_Box}>
          <div className={style.LeftOptionBar_imageBox}>
            <Image src={mostrecent} alt="dimaond-icon" width={20} />{" "}
          </div>
          <div className={style.LeftOptionBar_nameBox}>
            <Link href={"/admin/recent-activity"}>
              <p>Recent Activity </p>
            </Link>
          </div>
        </div>

        <div className={style.LeftOptionBar_options_Box}>
          <div className={style.LeftOptionBar_imageBox}>
            <Image src={mostrecent} alt="dimaond-icon" width={20} />{" "}
          </div>
          <div className={style.LeftOptionBar_nameBox}>
            <Link href={"/admin/categoies-search"}>
              <p>Categorires search</p>
            </Link>
          </div>
        </div>

        <div className={style.LeftOptionBar_options_Box}>
          <div className={style.LeftOptionBar_imageBox}>
            <Image src={mostrecent} alt="dimaond-icon" width={20} />{" "}
          </div>
          <div className={style.LeftOptionBar_nameBox}>
            <Link href={"/super-admin"}>
              <p>All user</p>
            </Link>
          </div>
        </div>
        <div className={style.LeftOptionBar_options_Box}>
          <div className={style.LeftOptionBar_imageBox}>
            <Image src={mostrecent} alt="dimaond-icon" width={20} />{" "}
          </div>
          <div className={style.LeftOptionBar_nameBox}>
            <Link href={"/super-admin/enquires"}>
              <p>Enquiues</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
