import React, { PureComponent, useEffect } from "react";
import style from "./css/Alluser.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { UserContext } from "../../ContaxtApi/UserContaxApi";
import { getCookies } from "../../Actions/auth";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AllUser() {
  const token = getCookies();
  const { getusers, allusers } = useContext(UserContext);

  console.log(allusers);
  useEffect(() => {
    getusers(token);
    busenessStatus();
  }, []);

  const busenessStatus = (businessDetails) => {
    if (!businessDetails) {
      return "Business Not updated";
    } else {
      // const filledFields = Object.values(businessDetails).filter(value => value !== "").length;
      const filledFields = Object.values(businessDetails).filter((value) => {
        return value;
      });
      if (filledFields.length > 1 && filledFields.length < 7) {
        return "incomplete";
      } else if (filledFields.length > 1 && filledFields.length == 7) {
        return "Completed";
      }
    }
  };

  const renderUserList = () => {
    return allusers.map((user, i) => {
      return (
        <>
          <div className={style.AllUser_List_Box}>
            <div>{i + 1}</div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.mobileNumber}</div>
            <div>{busenessStatus(user.businessDetails)}</div>
            <div>
              {" "}
              <Link href={`super-admin/${user._id}`}>view profile</Link>{" "}
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className={style.AllUser_main_container}>
        <div className={style.AllUser_Stats_container}>
          <div className={style.AllUser_circularProgressbar_container}>
            <div style={{ marginBottom: "10px" }}>
              <h2>Today new registration</h2>
            </div>
            <CircularProgressbar
              strokeWidth={5}
              value={allusers.length}
              maxValue={100}
              text={allusers.length}
            />
            ;
          </div>
          <div className={style.AllUser_chart_container}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className={style.AllUser_UserList_container}>
          <div className={style.AllUser_List_Box}>
            <div>S No</div>
            <div>User Name</div>
            <div>E-mail</div>
            <div>Phone-Number</div>
            <div>Business Profile status</div>
            <div>Business Profile</div>
          </div>

          {allusers.length > 1 ? renderUserList() : "No Users"}
        </div>
      </div>
    </>
  );
}
