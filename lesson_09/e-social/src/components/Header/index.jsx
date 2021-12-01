import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { MdPhone } from "react-icons/md";
import { navs } from "./data";
import style from "./header.module.css";
import { Button, Space, Affix } from "antd";
import { AuthModal } from "../Auth";

const modalStates = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  NONE: null,
};

const Header = () => {
  const [modal, setModal] = useState(modalStates.NONE);

  const handleClickLogin = () => {
    setModal(modalStates.LOGIN);
  };

  const handleCloseModal = () => {
    setModal(modalStates.NONE);
  };

  return (
    <>
      <AuthModal
        visible={modal === modalStates.LOGIN}
        close={handleCloseModal}
      />
      <Affix offsetTop={0}>
        <header>
          <section className={style._header}>
            <Link to="/" className={style._logo}>
              <div className={style._logo__wrapper}>
                <img
                  className={style._logo__img}
                  src={logo}
                  alt="eSocial logo"
                />
              </div>
              <span className={style._logo__text}>e-sosial</span>
            </Link>
            <a className={style._call} href="tel:994120000412" title="call us">
              <MdPhone />
              <span>142</span>
            </a>
            <Space className={style._actions} size={20}>
              <Button
                shape="round"
                style={{
                  color: "white",
                  backgroundColor: "#2f438a",
                  border: "1px solid #4c65bf",
                  width: "150px",
                }}
              >
                <a
                  href="https://asanlogin.my.gov.az/auth?origin=https:%2F%2Fe-sosial.az%2F%23%2Fasanlogin"
                  target="_blank"
                >
                  Qeydiyyat
                </a>
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#2f438a",
                  border: "1px solid #4c65bf",
                  width: "150px",
                }}
                shape="round"
                onClick={handleClickLogin}
              >
                Giriş
              </Button>
            </Space>
          </section>
          <section>
            <nav className={style._nav}>
              <Space>
                {navs.map((nav) => (
                  <NavLink
                    exact
                    activeStyle={{
                      borderBottom: "3px solid #325fff",
                      backgroundColor: "#eeeeef",
                    }}
                    key={nav.key}
                    to={nav.route}
                  >
                    {nav.name}
                  </NavLink>
                ))}
              </Space>
            </nav>
          </section>
        </header>
      </Affix>
    </>
  );
};

export { Header };
