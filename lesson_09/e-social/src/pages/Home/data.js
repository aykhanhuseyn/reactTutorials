// TODO: Iconlari hamisini bir yerden import ele
import { FaHandsHelping } from 'react-icons/fa'
import { MdAccessible,MdDirectionsWalk, MdFamilyRestroom, MdElderly, MdOutlineHomeWork, MdWork, MdOutlineFence } from 'react-icons/md'
import {  FaBlind, FaUsers,FaHeadset, FaRegIdCard, FaCar, FaUserAlt,FaHospitalUser } from 'react-icons/fa'
import { BsFileEarmarkText } from 'react-icons/bs'
import { ImUserTie } from 'react-icons/im'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { GiReceiveMoney,GiShipWheel } from 'react-icons/gi'
import { VscCreditCard } from 'react-icons/vsc'
import style from './home.module.css';


export const services=[

    { text:"Əmək müqaviləsi bildirişi",
      icon:<FaHandsHelping  className={style._icon} />
    },

    {  text:"Fərdi şəxsi hesab",
       icon:<FaUserAlt className={style._icon} />
    },

    {  text:"Məşğulluq AS İşaxtaranlar",
       icon:<MdWork className={style._icon} />
    },

    {  text:"Məşğulluq AS İşəgötürənlər",
       icon:<ImUserTie className={style._icon} />
    },

     { text:"Pensiya",
       icon:<MdElderly className={style._icon} />
     },

     {  text:"Ünvanlı dövlət sosial yardımı",
        icon:<GiShipWheel  className={style._icon} />
     },

     {  text:"Əlillik",
        icon:<MdAccessible className={style._icon} />
     },

     {  text:"Torpaq pay mülkiyyətçisi",
        icon:<MdOutlineFence className={style._icon} />
     },

     {  text:"Vətəndaş qəbulu",
        icon:<FaUsers className={style._icon} />
     },


     {  text:"Ərizə-müraciətlər",
        icon:<BsFileEarmarkText className={style._icon} />
     },


     {  text:"Çağrı mərkəzi",
        icon:<FaHeadset className={style._icon} />
     },


     {  text:"Reabilitasiya",
        icon:<MdDirectionsWalk className={style._icon} />
     },


     {  text:"Avtomobil növbəsi",
        icon:<FaCar className={style._icon} />
     },


    {  text:"Mənzil növbəsi",
       icon:<MdOutlineHomeWork className={style._icon} />
    },


     {  text:"Maddi yardım",
        icon:<GiReceiveMoney className={style._icon} />
     },
     

     {  text:"Müavinət və təqaüdlər",
        icon:<FaRegIdCard className={style._icon} />
     },


     {  text:"Axtarış tarixçəsi",
        icon:<AiOutlineFileSearch className={style._icon} />
     },


     {  text:"Birdəfəlik ödəmə",
        icon:<VscCreditCard className={style._icon} />
     },


     {  text:"Övladlığagötürmə",
        icon:<MdFamilyRestroom className={style._icon} />
     },


     {  text:"Məşğulluq",
        icon:<MdWork className={style._icon} />
     },
    ]