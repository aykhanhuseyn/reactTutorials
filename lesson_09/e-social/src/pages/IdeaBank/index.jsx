import React from "react";
import { Row, Col, Divider, Button, Modal, Info, Tabs } from "antd";
import {
  MdOutlineAddCircleOutline,
  MdOutlineInsertComment,
  MdOutlineThumbUp,
  MdOutlineThumbDownAlt,
} from "react-icons/md";
import style from "./idea.module.css";
import { datas, ideas } from "./data";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Idea = () => {
  return (
    <>
      <section className={style._sec}>
        <div className={style._main}>
          <Row>
            {ideas.map((i) => (
              <Col span={4} className={style._idea__tab}>
                <div
                  style={{ backgroundColor: i.color }}
                  className={style._idea__count}
                >
                  <div className={style._icon__text}>
                    {i.icon}
                    <span>{i.num}</span>
                  </div>
                  <span>{i.text}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section className={style._tabs__cards}>
        <div className={style._main}>
          <Row style={{ backgroundColor: "white", padding: "0 30px" }}>
            <Col
              span={24}
              style={{ position: "relative", padding: "20px 30px" }}
            >
              <Tabs
                className={style._card}
                defaultActiveKey="1"
                onChange={callback}
              >
                <TabPane tab="Ən yenilər" key="1">
                  <Row gutter={[32, 32]}>
                    {datas.map((d) => (
                      <Col span={12}>
                        <div className={style._data__card}>
                          <b>Tarix:</b>
                          <span className={style._date}>{d.date}</span>
                          <p className={style._text}>{d.text}</p>
                          <p>
                            <b>İstiqamət:</b>
                            {d.direction}
                          </p>
                          <p>
                            <b>Fikri bildirən:</b>
                            {d.opinion}
                          </p>
                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginRight: "5px",
                              }}
                            >
                              <MdOutlineInsertComment
                                style={{
                                  margin: " 0 5px",
                                  fontSize: "20px",
                                  color: "#2D55E4",
                                }}
                              />
                              <span>Şərh yaz</span>
                            </div>
                            <div>
                              <MdOutlineThumbUp
                                style={{
                                  margin: " 0 5px",
                                  fontSize: "20px",
                                  color: "#2D55E4",
                                }}
                              />
                            </div>
                            <div>
                              <MdOutlineThumbDownAlt
                                style={{
                                  margin: " 0 5px",
                                  fontSize: "20px",
                                  color: "#2D55E4",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane tab="Ən çox bəyənilənlər" key="2">
                  <Row gutter={[32, 32]}>
                    {datas.map((d) => (
                      <Col span={12} className={style._card}>
                        <div className={style._data__card}>
                          <span>
                            <b>Tarix:</b> {d.date}
                          </span>
                          <p>{d.text}</p>
                          <p>
                            <b>İstiqamət:</b>
                            {d.direction}
                          </p>
                          <p>
                            <b>Fikri bildirən:</b>
                            {d.opinion}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane tab="Qəbul edilmiş" key="3">
                  <Row gutter={[32, 32]}>
                    {datas.map((d) => (
                      <Col span={12} className={style._card}>
                        <div className={style._data__card}>
                          <span>
                            <b>Tarix:</b> {d.date}
                          </span>
                          <p>{d.text}</p>
                          <p>
                            <b>İstiqamət:</b>
                            {d.direction}
                          </p>
                          <p>
                            <b>Fikri bildirən:</b>
                            {d.opinion}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
                <TabPane tab="İcra edilmiş" key="4"></TabPane>
              </Tabs>
              <div className={style._btn__icon}>
                <Button className={style._btn} size="large">
                  <MdOutlineAddCircleOutline />
                  <span>Öz fikrini bildir</span>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export { Idea };
