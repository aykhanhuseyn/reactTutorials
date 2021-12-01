import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { FaGlobeAmericas } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
import logo from "../../assets/images/agLogo.png";
import ministry from "../../assets/images/ministry-logo.png";
import app from "../../assets/images/app-store.png";
import phoneLogo from "../../assets/images/phone-logo-compine.png";
import googlePlay from "../../assets/images/google-play.png";
import { externals, links } from "./data";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={style._app__footer}>
        <Row className={style._photo__app}>
          <Col span={12}>
            <div className={style._app__link}>
              <p className={style._app__text}>
                "E-sosial proqram təminatının yeni versiyasını iOS və Android
                əməliyyat sistemləri üçün yükləyə bilərsiniz”
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=az.e_sosial.e_sosial"
                target="_blank"
              >
                <img src={googlePlay} alt="google play" />
              </a>
              <a
                href="https://apps.apple.com/us/app/e-sosial/id1481346123?l=ru&ls=1"
                target="_blank"
              >
                <img src={app} alt="app store" />
              </a>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <img
                src={phoneLogo}
                alt="phone logo"
                className={style._logo__phone}
              />
            </div>
          </Col>
        </Row>
      </section>
      <section className={style._help__footer}>
        <Row className={style._help__link}>
          <Col span={8}>
            <Link to="/" className={style._ministry}>
              <img
                src={ministry}
                alt="ministry photo"
                className={style._ministry__img}
              />
            </Link>
          </Col>
          <Col span={8}>
            <div className={style._help}>
              <span className={style._text}>Kömək lazımdır mı?</span>
              <Row>
                <Col span={12}>
                  <div>
                    <Link to="/">
                      <VscLinkExternal />
                      <span>Zəng sifariş et</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <VscLinkExternal />
                      <span>Sosial arayışın yoxlamılması</span>
                    </Link>
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <Link to="/faq">
                      <VscLinkExternal />
                      <span>Sual ver,cavab al</span>
                    </Link>
                  </div>
                  <div>
                    <Link to="/about">
                      <VscLinkExternal />
                      <span>Portal haqqında</span>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={8} className={style._social}>
            <div>
              <span className={style._social__txt}>Sosial şəbəkələrimiz</span>
            </div>
            <div>
              {links.map((lnk) => (
                <a
                  href={lnk.link}
                  target="_blank"
                  className={style._link__btn___footer}
                >
                  {lnk.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </section>
      <section className={style._social__link}>
        {externals.map((ext) => (
          <div className={style._social}>
            <a href={ext.link} target="_blank" className={style._link}>
              <FaGlobeAmericas />
              <span className={style._label}>{ext.label} </span>
            </a>
          </div>
        ))}
      </section>
      <section className={style._copyright}>
        <span className={style._copy}>&copy; Bütün hüquqlar qorunur</span>
        <Link to="/" className={style._aistgroup}>
          <img src={logo} alt="aistGroup" className={style._aistgroup__img} />
        </Link>
      </section>
    </footer>
  );
};

export { Footer };
