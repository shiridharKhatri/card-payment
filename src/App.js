import React, { useState } from "react";
import "./App.css";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsCreditCard2Back } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
export default function App() {
  const [value, setValue] = useState({
    name: "",
    number: "",
    date: "",
    cvv: "",
  });
  const valueOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="mainSection">
        <div className="Card">
          <div className="originalCard">
            <div className="your-card" data-tilt>
              <div className="first">
                <h4>Debit Card</h4>
              </div>
              <div className="second">
                <h3>
                  <FcSimCardChip />{" "}
                  <span>
                    <LuNfc />
                  </span>
                </h3>
              </div>
              <div className="third">
                {!value.number || value.number === "" ? (
                  <h3>4444 xxxx xxxx 3567</h3>
                ) : (
                  <h3>
                    {value.number.length === 4
                      ? value.number + " "
                      : value.number}
                  </h3>
                )}
              </div>
              <div className="forth">
                <div className="date">
                  <div className="par">
                    <p>Valid</p>
                    <p>Till</p>
                  </div>
                  {!value.date || value.date === "" ? (
                    <p id="datee">YY/MM</p>
                  ) : (
                    <p id="datee">{value.date}</p>
                  )}
                </div>
              </div>
              <div className="fifth">
                {!value.name || value.name === "" ? (
                  <h1 style={{textTransform:"uppercase"}}>Ken kaneki</h1>
                ) : (
                  <h1 style={{textTransform:"uppercase",width: "20rem", overflow: "hidden"}}>{value.name}</h1>
                )}

                <div className="ico">
                  {value.number.startsWith(4) ? (
                    <img width="55" height="55" src="https://img.icons8.com/3d-fluency/94/visa.png" alt="visa"/>
                  ) : value.number.startsWith(5) ? (
                    <img width="55" height="55" src="https://img.icons8.com/3d-fluency/94/mastercard.png" alt="mastercard"/>
                  ) : value.number.startsWith(34 || 37) ? (
                    <img width="55" height="55" src="https://img.icons8.com/3d-fluency/94/amex.png" alt="amex"/>
                  ) : value.number.startsWith(6 || 6011) ? (
                    <img width="55" height="55" src="https://img.icons8.com/officel/80/discover.png" alt="discover"/>
                  ) : value.number.startsWith(35 || 3528 || 3589) ? (
                    <img width="55" height="55" src="https://img.icons8.com/color/48/jcb.png" alt="jcb"/>
                  ): <img width="55" height="55" src="https://img.icons8.com/3d-fluency/94/mastercard.png" alt="mastercard"/>}
                </div>
              </div>
            </div>
          </div>
          <div className="formSec">
            <form>
              <h1>Card Details</h1>
              <label htmlFor="name">
                <IoPersonOutline />
                &nbsp;Card holder name
              </label>
              <input
                value={value.name}
                onChange={valueOnChange}
                type="text"
                id="name"
                name="name"
                placeholder="eg.Ken kaneki"
              />
              <label htmlFor="number">
                <BsCreditCard2Back />
                &nbsp;Card number
              </label>
              <input
                onChange={valueOnChange}
                value={value.number}
                maxLength={19}
                type="text"
                id="number"
                name="number"
                placeholder="4444 **** **** 3567"
              />
              <div className="together">
                <div className="det">
                  <label htmlFor="exp">
                    <CiCalendarDate />
                    &nbsp;Expairy
                  </label>
                  <input
                    value={value.date}
                    onChange={valueOnChange}
                    type="month"
                    id="exp"
                    name="date"
                    placeholder="YY/MM"
                  />
                </div>
                <div className="det">
                  <label htmlFor="cvv">
                    <RiLockPasswordLine />
                    &nbsp;CVV
                  </label>
                  <input
                    onChange={valueOnChange}
                    value={value.password}
                    type="password"
                    name="password"
                    maxLength={3}
                    id="cvv"
                    placeholder="xxx"
                  />
                </div>
              </div>
              <button>Proceed Payment</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
