import React from "react";
import style from "./css/LocationBar.module.css";
import placeholder from "../../public/placeholder.png";
import Image from "next/image";
import navigatorIcon from "../../public/navigator.png";

const locationList = [
  {
    name: "All India",
    active: true,
  },

  {
    name: "Gurgaon",
    active: false,
  },

  {
    name: "Delhi",
    active: false,
  },
  {
    name: "Noida",
    active: false,
  },
  {
    name: "Faridabad",
    active: false,
  },

  {
    name: "Gujrat",
    active: false,
  },

  {
    name: "Bengaluru",
    active: false,
  },
  {
    name: "Aurangabad",
    active: false,
  },

  {
    name: "Ghaziabad",
    active: false,
  },
  {
    name: "Pune",
    active: false,
  },
];

const renderLocationList = () => {
  return locationList.map((el, i) => {
    return (
      <>
        <div className={`${style.LocationBar_City_location_Box}`} key={i}>
          <h4>{el.name}</h4>
        </div>
      </>
    );
  });
};

export default function LocationBar() {
  return (
    <>
      <div className={style.LocationBar_conatiner}>
        <div className={style.LocationBar_dynimic_loacation_conatiner}>
          <div className={style.LocationBar_dynimic_Icon_box}>
            <Image src={placeholder} alt="location_icon" width={30} />
          </div>
          <div className={style.LocationBar_search_location_box}>
            <input type="text" placeholder="Enter your LOcation" />
          </div>
          <div className={style.LocationBar_dynimic_location_detect_box}>
            <div className={style.LocationBar_dynimic_location_detect_icon}>
              <Image src={navigatorIcon} alt="navigatorIcon" width={30} />
            </div>
            <div>Near Me</div>
          </div>
        </div>
        <div className={style.LocationBar_City_location_conatiner}>
          {renderLocationList()}
        </div>
      </div>
    </>
  );
}
