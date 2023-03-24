import React, { useEffect } from "react";
import style from "../css/Alluser.module.css";
import { EnqiriyContext } from "../../../ContaxtApi/EnquiriyContexApi";
import { useContext } from "react";
export default function EnquiresComponnt() {
  const { enquries, getAllEnquiry } = useContext(EnqiriyContext);

  useEffect(() => {
    getAllEnquiry();
  }, []);

  console.log(enquries);

  const renderEnquires = () => {
    return enquries.map((el, i) => {
      return (
        <>
          <div className={style.EnquiresComponnt_tableBox}>
            <div>{i + 1}</div>
            <div>{el.product.name}</div>
            <div>{el.product.user.CompanyName}</div>
            <div>{el.user.name}</div>
          </div>
        </>
      );
    });
  };

  return (
    <div className={style.EnquiresComponnt_main_Container}>
      <div className={style.EnquiresComponnt_table_container}>
        <div className={style.EnquiresComponnt_tableBox}>
          <div>S.no</div>
          <div>Product Name</div>
          <div>company name</div>
          <div>Request User</div>
        </div>
        {renderEnquires()}
      </div>
    </div>
  );
}
