import React, { useState } from "react";
import "./Month.css";

// M1
import pretty from "./../../../assets/img/img-month/M1/สุดสวยที่คาเฟ่โคราช.png";
import sun from "./../../../assets/img/img-month/M1/ดูพระอาทิตย์.png";
import pattaya from "./../../../assets/img/img-month/M1/สาวพัทยา.png";
import catLover from "./../../../assets/img/img-month/M1/รักแมว.png";

// M2
import cute_smile from "./../../../assets/img/img-month/M2/cute smile.png";
import eatAndYoutube from "./../../../assets/img/img-month/M2/eatandyoutube.png";
import prettyGirl from "./../../../assets/img/img-month/M2/pretty girl.png";
import sun_sea_you from "./../../../assets/img/img-month/M2/sun sea you.png";

// M3
import prettyLookGood from "./../../../assets/img/img-month/M3/คนสวย ดูดี.png";
import waitTogether from "./../../../assets/img/img-month/M3/นั่งรอข้าวด้วยกัน.png";
import minecraft1 from "./../../../assets/img/img-month/M3/มายคราฟ1.png"; 
import photoboots1 from "./../../../assets/img/img-month/M3/โฟโต้บูส1.png";

// M4
import pumpkinAndpandee from "./../../../assets/img/img-month/M4/พั้มกิ้น&แพนดี้.png";
import mookrynStudyWithNight from "./../../../assets/img/img-month/M4/มุกรินไปเรียนด้วย.png";
import bookFairTogether from "./../../../assets/img/img-month/M4/งานหนังสือ.png";
import bookFairMookryn from "./../../../assets/img/img-month/M4/งานหนังสือรูปที่ชอบ.png";

// M5
import photoBoots2 from "./../../../assets/img/img-month/M5/โฟโต้บูส2.png";
import mookrynNail from "./../../../assets/img/img-month/M5/มุกรินทำเล็บ.png";
import prettySmile from "./../../../assets/img/img-month/M5/มุกรินยิ้มสวยมาก.png";
import onthewayToKorat from "./../../../assets/img/img-month/M5/ระหว่างทางไปโคราช.png";

// M6
import sunYouMe from "./../../../assets/img/img-month/M6/คุณถ่ายพระอาทิตย์.png";
import aquarium from "./../../../assets/img/img-month/M6/อควาเรียมกับคุณ.png";
import newYear from "./../../../assets/img/img-month/M6/ปีใหม่.png";
import sexyGirl from "./../../../assets/img/img-month/M6/เซ็กซี่.png";

// M7
import cutestGirl from "./../../../assets/img/img-month/M7/สุดสวย ชุดแพง.png";
import MookWithMask from "./../../../assets/img/img-month/M7/mookWithMask.png";
import ootd from "./../../../assets/img/img-month/M7/ootd.png";
import ootd2 from "./../../../assets/img/img-month/M7/ootd2.png";

export default function Month() {
  const month = {
    1: {
      title: "เดือนที่ 1",
      text: "",
      picture1: pretty,
      textPicture1: "รูปนี้เค้าถ่ายให้คุณแล้วก็เอาไปแต่งนิดหน่อย คุณสวยมาก",
      picture2: catLover,
      textPicture2: "คุณรักแมว เวลาเห็นแมวคุณจะไปเล่นด้วยตลอด",
      picture3: sun,
      textPicture3: "เราดูพระอาทิตย์กัน สวยมาก",
      picture4: pattaya,
      textPicture4: "ไปเล่นน้ำกับทรายที่พัทยากับคุณ",
    },
    2: {
      title: "เดือนที่ 2",
      text: "",
      picture1: sun_sea_you,
      textPicture1: "ไปดูพระอาทิตย์กัน สวยมาก คุณก็สวยมาก",
      picture2: prettyGirl,
      textPicture2: "สุดสวยไปเดินตลาด น่ารักมาก",
      picture3: cute_smile,
      textPicture3: "ยิ้มแป้นมาก เค้าชอบมาก น่ารัก",
      picture4: eatAndYoutube,
      textPicture4: "เวลาจะกินข้าวคุณจะดูยูทูปไปด้วย แฮปปี้มาก",
    },
    3: {
      title: "เดือนที่ 3",
      text: "",
      picture1: waitTogether,
      textPicture1: "เราไปนั่งรอข้าวที่ตลาดวอนกัน ถ่ายรูปกัน",
      picture2: prettyLookGood,
      textPicture2: "คุณแต่งหน้าสวย ชุดก็สวย ดูดีมากครับ",
      picture3: minecraft1,
      textPicture3: "เราเล่นมายคราฟกัน นี่เป็นบ้านหลังแรกของเรา",
      picture4: photoboots1,
      textPicture4: "เราไปถ่ายโฟโต้บูสครั้งแรกกัน เค้าชอบมาก เราแบ่งกันคนละครึ่ง",
    },
    4: {
      title: "เดือนที่ 4",
      text: "",
      picture1: pumpkinAndpandee,
      textPicture1: "สมาชิกใหม่คือแพนดี้ เพราะคุณชอบแพนด้า อยากเลี้ยง",
      picture2: mookrynStudyWithNight,
      textPicture2: "คุณมาเรียนกับเค้า แฮปปี้",
      picture3: bookFairMookryn,
      textPicture3: "ไปงานหนังสือกัน รูปนี้เค้าถ่ายให้ ชอบมาก",
      picture4: bookFairTogether,
      textPicture4: "รูปคู่ เค้าชอบรูปนี้ เอาไปตั้งพื้นหลังไลน์ด้วย",
    },
    5: {
      title: "เดือนที่ 5",
      text: "",
      picture1: photoBoots2,
      textPicture1: "โฟโต้บูสครั้งที่ 2 รอบนี้เราก็ชอบอยู่ดี",
      picture2: onthewayToKorat,
      textPicture2: "ระหว่างทางไปโคราช ถ่ายรูปกัน คุยกัน น่ารัก",
      picture3: mookrynNail,
      textPicture3: "มุกรินทำเล็บ ไนท์จ่ายให้ แค่เห็นรอยยิ้มก็แฮปปี้แล้ว",
      picture4: prettySmile,
      textPicture4: "ไปกินเบสซุปกัน คุณยิ้มน่ารักมากเลย",
    },
    6: {
      title: "เดือนที่ 6",
      text: "ครบรอบ 6 เดือน เดือนนี้เราไปเที่ยว อควาเรียม กัน มีเรื่องที่เค้าทำผิดต่อคุณมาก ๆ แต่คุณก็ให้อภัยและเราเข้าใจกันมากขึ้น เค้าไปหาคุณบ่อยเพราะปิดเทอมแต่หลังจากนี้คงนานๆทีได้ไปแล้วหรือคุณอาจจะมาหาเค้าก็ได้แต่ยังไงก็ขอให้เค้าและคุณรักกันมาก ๆ เข้าใจกัน คุยกัน และอยู่ข้างๆกันนะครับ เค้ารักคุณนะ รักมาก ๆ เลย ขอบคุณที่คุณเป็นแฟนเค้า ",
      gift:"ของขวัญ : แก้วน้ำสแตนเลส ให้ไว้ไปกินที่มหาลัยจะได้ไม่เป็นร้อนใน แล้วก็มีลิปให้ด้วย ไว้ทาให้สวย ๆ เลย",
      picture1: sunYouMe,
      textPicture1: "คุณถ่ายพระอาทิตย์ ส่วนเค้าถ่ายคุณเอง",
      picture2: aquarium,
      textPicture2: "เหมือนเด็กมากเลย ตื่นเต้นกับปลา สวยมากเลยอควาเรียม",
      picture3: sexyGirl,
      textPicture3: "เป็นรูปที่คุณสวยมาก แต่งตัวดูดี เซ็กซี่ เค้าหวงมาก",
      picture4: newYear,
      textPicture4: "เราเค้าดาวน์ด้วยกัน ร้องเพลงด้วย ดูพลุกัน จุ๊บกันข้ามปี",
    },
    7: {
      title: "เดือนที่ 7",
      text: "7 เดือนแล้ว เป็นยังไงบ้างมุกริน สำหรับเค้ามันผ่านไปไวมากแต่ละวันที่เราอยู่ด้วยกัน ช่วงเวลาที่มีความสุข เค้าแฮปปี้มาก เดือนที่ผ่านมาเราเข้าใจกันมากขึ้น ทะเลาะกันน้อยลง อาจจะมีบ้างแต่ก็เป็นธรรมดา แต่ไปก็ขอให้เรา 2 คนเข้าใจกันนะ ค่อย ๆ ไปรักกัน ถนอมหัวใจกัน ขอบคุณมากที่อยู่ด้วยกันมา แล้วก็อยู่ด้วยกันไปอีกนาน ๆ เลย รักคุณนะครับมุกริน",
      gift:"Fujifilm 200 : อันนี้เค้าซื้อให้ จริง ๆ เค้าสั่งมาตั้งแต่วันที่ 18 แล้ว ช่วงนั้นคุณอยากได้แล้วก็เราจะไปดรีมเวิลด์ เค้าเลยซื้อให้เป็นวันครบรอบ ไว้ไปถ่ายกันนะ ของขวัญอีกอย่างนึงคือเว็บนี้แหละ จริง ๆ ทำได้นานแล้วแต่เก็บไว้รอให้วันสำคัญ ขอมอบให้วันนี้ครับ",
      picture1: cutestGirl,
      textPicture1: "รูปนี้เท่มาก ชุดดูดีมาก สวยที่สุดในโลก",
      picture2: MookWithMask,
      textPicture2: "มุกรินใส่แมส ชอบมาก ใส่แมสคุณก็น่ารัก รักคุณอะ",
      picture3: ootd,
      textPicture3: "เอ้าฟิตวันไปเรียนวันจันทร์ เรียนเสร็จไปตีแบดด้วยแต่คุณไม่ตี หึๆๆๆ ไว้ตีกัน 2 คนนะครับ",
      picture4: ootd2,
      textPicture4: "เอ้าฟิตวันพุธ คุณไปเรียนด้วยกัน แล้วก็ไปซื้อ notebook ด้วยกันด้วย แฮปปี้อะ",
    },
  };

  const [months, setMonths] = useState(Object.keys(month));
  const [selectedMonth, setSelectedMonth] = useState(Object.keys(month)[0]);

  return (
    <div>
      <div className="month-title">
        <p>กรุณาเลือกเดือน</p>
      </div>
      <div className="month-select">
        {months.map((item, index) => {
          return (
            <div
              className="month-num"
              key={index}
              onClick={() => setSelectedMonth(item)}
              style={
                item === selectedMonth ? { backgroundColor: "#5DBB63" } : {}
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <p style={{ fontSize: "1.2rem", letterSpacing: "0.1rem" }}>
          เค้าจะเลือก 4 รูปที่เค้าชอบที่สุดมาในแต่ละเดือน
        </p>
      </div>
      <hr />
      <div className="month-content">
        <div>
            <p className="title-monthSelect">
                {month[selectedMonth].title}
            </p>
        </div>
        {month[selectedMonth].text && month[selectedMonth].gift && (
            <div className="month-text">
                <p style={{ fontSize: "1.1rem", letterSpacing: "0.05rem" }}>
                    {month[selectedMonth].text}
                </p>
                <br/>
                <p style={{ fontSize: "1.1rem", letterSpacing: "0.05rem" }}>
                    {month[selectedMonth].gift}
                </p>
            </div>
        )}
        <div className="month-img">
          <div className="month-image">
            <img src={month[selectedMonth].picture1} alt="" />
            <p>{month[selectedMonth].textPicture1}</p>
          </div>
          <div className="month-image">
            <img src={month[selectedMonth].picture2} alt="" />
            <p>{month[selectedMonth].textPicture2}</p>
          </div>
          <div className="month-image">
            <img src={month[selectedMonth].picture3} alt="" />
            <p>{month[selectedMonth].textPicture3}</p>
          </div>
          <div className="month-image">
            <img src={month[selectedMonth].picture4} alt="" />
            <p>{month[selectedMonth].textPicture4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
