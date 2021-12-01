import React from 'react'
import { Row, Col, Divider,Button,Modal,Info } from 'antd';
import {services} from './data'
import { FaHandsHelping } from 'react-icons/fa';
import style from './home.module.css';

 const Home = () => {
    const info = () => {
   Modal.info({
        title: 'Siz portala daxil olmamısınız. Zəhmət olmasa portala daxil olun.',
        content: 'some info',        
   })       
};
    return (   
        <section className={style._all__services}>
            <div className={style._main}>
                <Row>
                    <Col span={24}>
                        <h3 className={style._all__services___text}>Bütün xidmətlər</h3>
                    </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} gutter={[24, 32]}>
                    {services.map(s=>(
                        <Col className="gutter-row" span={6}>
                                    <div onClick={info} className={style._service}>
                                    {s.icon}
                                    <span className={style._text}>{s.text}</span>
                                </div>
                        </Col>
                    ))}
               </Row>
            </div>
        </section>
    )
}

export { Home }
