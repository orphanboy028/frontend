import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../../ContaxtApi/ProductContextApi";

export default function CommanFormInput(props) {
  const { label, id, name, ...inputProps } = props;
  const { values, handelOnChnage, handelSubmit } = useContext(ProductContext);
  return (
    <div>
      <div>
        <div>
          <lable>{label}</lable>
        </div>

        <div>
          <input
            name={name}
            value={values[name]}
            {...inputProps}
            onChange={handelOnChnage}
          />
        </div>
      </div>
    </div>
  );
}
