import React, { useState } from "react";
import "./Trip.css";
// -- เล็ก --

// ขับรถเล่น
import couplePictureInCar from "./../../../assets/img/img-trip/เล็ก/ขับรถเล่น/รูปคู่ขับรถ.png";
import youAndSky from "./../../../assets/img/img-trip/เล็ก/ขับรถเล่น/คุณกับท้องฟ้า.png";
import prettyGirl from "./../../../assets/img/img-trip/เล็ก/ขับรถเล่น/คนสวย.png";
import food from "./../../../assets/img/img-trip/เล็ก/ขับรถเล่น/ของกิน.png";

// ตี๋น้อย
import prettySmile from "./../../../assets/img/img-trip/เล็ก/ตี๋น้อยครั้งแรก/ยิ้มสวย.png";
import twoFinger from "./../../../assets/img/img-trip/เล็ก/ตี๋น้อยครั้งแรก/2นิ้ว.png";
import coupleInTeenoi from "./../../../assets/img/img-trip/เล็ก/ตี๋น้อยครั้งแรก/เรา2คน.png";
import hide from "./../../../assets/img/img-trip/เล็ก/ตี๋น้อยครั้งแรก/แอบถ่ายคุณ.png";

// ให้กำลังใจ
import alarmMorning from "./../../../assets/img/img-trip/เล็ก/ให้กำลังใจ/ตั้งปลุก.png";
import iGoTo7 from "./../../../assets/img/img-trip/เล็ก/ให้กำลังใจ/ไปซื้อของ.png";
import instantNoodles from "./../../../assets/img/img-trip/เล็ก/ให้กำลังใจ/ทำมาม่า.png";
import bestSoup from "./../../../assets/img/img-trip/เล็ก/ให้กำลังใจ/เบสซุป.png";

// พระอาทิตย์ตก
import youAndSunset from "./../../../assets/img/img-trip/เล็ก/พระอาทิตย์ตก/คุณกับท้องฟ้า.png";
import skyAndSunset from "./../../../assets/img/img-trip/เล็ก/พระอาทิตย์ตก/ท้องฟ้า.png";
import youSoPretty from "./../../../assets/img/img-trip/เล็ก/พระอาทิตย์ตก/สวย.png";
import skySunsetAndMoon from "./../../../assets/img/img-trip/เล็ก/พระอาทิตย์ตก/ท้องฟ้ากับพระจันทร์.png";

// โฟโต้บูส 1
import firstTime from "./../../../assets/img/img-trip/เล็ก/โฟโต้บูส1/ครั้งแรก.png";
import yourPicture from "./../../../assets/img/img-trip/เล็ก/โฟโต้บูส1/คุณถ่าย.png";
import photoBoots1 from "./../../../assets/img/img-trip/เล็ก/โฟโต้บูส1/โฟโต้บูส.png";
import youLike from "./../../../assets/img/img-trip/เล็ก/โฟโต้บูส1/รูปที่ชอบ.png";

// ครบรอบ 3 เดือน
import youShootMe from "./../../../assets/img/img-trip/เล็ก/ครบรอบ3เดือน/แอบถ่ายเรา.png";
import grilledPork from "./../../../assets/img/img-trip/เล็ก/ครบรอบ3เดือน/หมูทะ.png";
import happyDozen from "./../../../assets/img/img-trip/เล็ก/ครบรอบ3เดือน/โหลความสุข.png";
import pumpkinAndPandee from "./../../../assets/img/img-trip/เล็ก/ครบรอบ3เดือน/พั้มกิ้นและแพนดี้.png";

// ตัดผม ทำเล็บ โฟโต้บูส2
import haircut from "./../../../assets/img/img-trip/เล็ก/ตัดผมทำเล็บโฟโต้บูส2/ไนท์ตัดผม.png";
import newNail from "./../../../assets/img/img-trip/เล็ก/ตัดผมทำเล็บโฟโต้บูส2/มุกรินทำเล็บ.png";
import showNail from "./../../../assets/img/img-trip/เล็ก/ตัดผมทำเล็บโฟโต้บูส2/โชว์เล็บ.png";
import photoBoots2 from "./../../../assets/img/img-trip/เล็ก/ตัดผมทำเล็บโฟโต้บูส2/โฟโต้บูส.png";

// ไปเรียนกับไนท์และไปดูไนท์ซ้อม
import studyWithNight from "./../../../assets/img/img-trip/เล็ก/ไปเรียนกับไนท์และไปดูไนท์ซ้อม/เรียนกับไนท์.png";
import mac from "./../../../assets/img/img-trip/เล็ก/ไปเรียนกับไนท์และไปดูไนท์ซ้อม/mac.png";
import energy from "./../../../assets/img/img-trip/เล็ก/ไปเรียนกับไนท์และไปดูไนท์ซ้อม/กำลังใจ.png";
import taekwondoPractise from "./../../../assets/img/img-trip/เล็ก/ไปเรียนกับไนท์และไปดูไนท์ซ้อม/ดูไนท์ซ้อม.png";

// อควาเรียม
import aquarium from "./../../../assets/img/img-trip/เล็ก/อควาเรียม/อควาเรียม.png";
import seeFish from "./../../../assets/img/img-trip/เล็ก/อควาเรียม/น่ารัก.png";
import seeFish2 from "./../../../assets/img/img-trip/เล็ก/อควาเรียม/ดูปลา.png";
import chirstmasInAquarium from "./../../../assets/img/img-trip/เล็ก/อควาเรียม/คริสต์มาสก่อนใคร.png";

// บางแสนเช้า
import beach from "./../../../assets/img/img-trip/เล็ก/บางแสนเช้า/หาด.png";
import mookrynInBeach from "./../../../assets/img/img-trip/เล็ก/บางแสนเช้า/มุก.png";
import beach2 from "./../../../assets/img/img-trip/เล็ก/บางแสนเช้า/หาด2.png";
import zoomBeach from "./../../../assets/img/img-trip/เล็ก/บางแสนเช้า/ซูม.png";

// คาเฟ่คริสต์มาส
import prettyGirlInSwensen from "./../../../assets/img/img-trip/เล็ก/คาเฟ่คริสต์มาส/คนสวย.png";
import beachNLM from "./../../../assets/img/img-trip/เล็ก/คาเฟ่คริสต์มาส/หาด.png";
import pictureFromCamera from "./../../../assets/img/img-trip/เล็ก/คาเฟ่คริสต์มาส/รูปจากกล้อง.png";
import prettyCuteSmile from "./../../../assets/img/img-trip/เล็ก/คาเฟ่คริสต์มาส/สวยยิ้มน่ารัก.png";

// -- ใหญ่ --

// ดูหนังพัทยา
import beforeGoToMovie from "./../../../assets/img/img-trip/ใหญ่/ดูหนังพัทยา/นายเบี้ยวก่อนไปพัทยา.png";
import bigSmile from "./../../../assets/img/img-trip/ใหญ่/ดูหนังพัทยา/ยิ้มแป้น.png";
import prettySmileWithMe from "./../../../assets/img/img-trip/ใหญ่/ดูหนังพัทยา/ยิ้มสวย.png";
import pattayaBeach from "./../../../assets/img/img-trip/ใหญ่/ดูหนังพัทยา/หาดพัทยา.png";

// ดูหนังเซ็นชล
import newShabu from "./../../../assets/img/img-trip/ใหญ่/ดูหนังเซ็นชล/กินร้านใหม่.png";
import inJectADrug from "./../../../assets/img/img-trip/ใหญ่/ดูหนังเซ็นชล/พามาหาหมอ.png";
import easyThings from "./../../../assets/img/img-trip/ใหญ่/ดูหนังเซ็นชล/เรื่องง่ายๆ.png";
import youSeeSun from "./../../../assets/img/img-trip/ใหญ่/ดูหนังเซ็นชล/ถ่ายคุณมองพระอาทิตย์ตก.png";

// เที่ยวเล่นกรุงเทพ
import fashion from "./../../../assets/img/img-trip/ใหญ่/เที่ยวเล่นกรุงเทพ/แฟชั่น.png";
import bigSmileInCar from "./../../../assets/img/img-trip/ใหญ่/เที่ยวเล่นกรุงเทพ/ยิ้มใหญ่.png";
import teenoiInBNK from "./../../../assets/img/img-trip/ใหญ่/เที่ยวเล่นกรุงเทพ/ตี๋น้อย.png";
import walkOnFootBridge from "./../../../assets/img/img-trip/ใหญ่/เที่ยวเล่นกรุงเทพ/เดินเล่น.png";

// พามุกรินกลับโคราช
import outfitGoToKorat from "./../../../assets/img/img-trip/ใหญ่/พามุกรินกลับโคราช/เอ้าฟิต.png";
import prettySmileGoToKorat from "./../../../assets/img/img-trip/ใหญ่/พามุกรินกลับโคราช/ยิ้มสวย.png";
import prettyGirlInCafe from "./../../../assets/img/img-trip/ใหญ่/พามุกรินกลับโคราช/คนสวยที่คาเฟ่.png";
import coupleInFrontOfMirror from "./../../../assets/img/img-trip/ใหญ่/พามุกรินกลับโคราช/หน้ากระจก.png";

// เที่ยวกรุงเทพและงานหนังสือ
import studyWithNight2 from "./../../../assets/img/img-trip/ใหญ่/เที่ยวกรุงเทพและงานหนังสือ/มาเรียนด้วยกัน.png";
import mookrynWithPostCard from "./../../../assets/img/img-trip/ใหญ่/เที่ยวกรุงเทพและงานหนังสือ/งานหนังสือ.png";
import walkInPark from "./../../../assets/img/img-trip/ใหญ่/เที่ยวกรุงเทพและงานหนังสือ/เดินสวน.png";
import hideCamera from "./../../../assets/img/img-trip/ใหญ่/เที่ยวกรุงเทพและงานหนังสือ/แอบถ่ายเรา.png";

// ไนท์แข่งที่โคราช
import onTheWayGoToKorat from "./../../../assets/img/img-trip/ใหญ่/ไนท์แข่งที่โคราช/คุณพามาโคราช.png";
import dinnerWithTaekwondoTeam from "./../../../assets/img/img-trip/ใหญ่/ไนท์แข่งที่โคราช/อาหารเย็น.png";
import taekwondoFight from "./../../../assets/img/img-trip/ใหญ่/ไนท์แข่งที่โคราช/มาดูเค้าแข่ง.png";
import teenoiAfterFight from "./../../../assets/img/img-trip/ใหญ่/ไนท์แข่งที่โคราช/ตี๋น้อยหลังแข่ง.png";

// ไปรับมุกรินและได้เจอครอบครัวคุณ
import meetInTemple from "./../../../assets/img/img-trip/ใหญ่/ไปรับมุกรินและได้เจอครอบครัวคุณ/มาหาคุณที่วัด.png";
import randomLuck from "./../../../assets/img/img-trip/ใหญ่/ไปรับมุกรินและได้เจอครอบครัวคุณ/สุ่มดวง.png";
import yourFamily from "./../../../assets/img/img-trip/ใหญ่/ไปรับมุกรินและได้เจอครอบครัวคุณ/ครอบครัวคุณ.png";
import lunchTogether from "./../../../assets/img/img-trip/ใหญ่/ไปรับมุกรินและได้เจอครอบครัวคุณ/กินอาหารด้วยกัน.png";

// พัทยาคริสต์มาส
import nightDate from "./../../../assets/img/img-trip/ใหญ่/พัทยาคริสต์มาส/ไนท์เดท.png";
import outfitInFrontOfMirror from "./../../../assets/img/img-trip/ใหญ่/พัทยาคริสต์มาส/หน้ากระจก.png";
import prettyGirlInPattaya from "./../../../assets/img/img-trip/ใหญ่/พัทยาคริสต์มาส/คนสวย.png";
import onTheWayBack from "./../../../assets/img/img-trip/ใหญ่/พัทยาคริสต์มาส/ตอนกลับ.png";

// ปีใหม่
import teenoiBeforeNewYear from "./../../../assets/img/img-trip/ใหญ่/ปีใหม่/ตี๋น้อย.png";
import countDown from "./../../../assets/img/img-trip/ใหญ่/ปีใหม่/เคาท์ดาวน์.png";
import photoBootsInKorat from "./../../../assets/img/img-trip/ใหญ่/ปีใหม่/โฟโต้บูสที่โคราช.png";
import dinosaurAndMook from "./../../../assets/img/img-trip/ใหญ่/ปีใหม่/ไดโนเสาร์กับมุก.png";

export default function Trip() {
  const [tripSelectSize, setTripSelectSize] = useState("small");
  const [tripSelect, setTripSelect] = useState({});
  const [tripSelectName, setTripSelectName] = useState("");

  const TripSmall = {
    ขับรถเล่น: {
      date: "22 มิถุนายน 2567",
      explain:
        "ทริปนี้เป็นช่วงแรกที่เราคุยกัน ไปดูพระอาทิตย์ตกดิน ขับรถเล่น และซื้อข้าวที่ปาร์คอินมากินที่ห้อง",
      image1: couplePictureInCar,
      textImage1: "รูปนี้คุณถ่าย เค้าชอบมาก เสื้อก็ให้คุณไปแล้ว",
      image2: youAndSky,
      textImage2: "รูปนี้เทสดีมาก สวยอะ",
      image3: prettyGirl,
      textImage3: "รูปนี้ให้คุณหมุนตัวแล้วถ่าย สวยอะ",
      image4: food,
      textImage4: "เราซื้อของมากินที่ห้อง ได้กินกับคุณก็แฮปปี้",
    },
    ตี๋น้อย: {
      date: "23 มิถุนายน 2567",
      explain: "เราไปกินตี๋น้อยกัน อร่อยมาก คุณชอบกินหมี่หยก",
      image1: prettySmile,
      textImage1: "คุณยิ้มน่ารักเสมอ เป็นรอยยิ้มที่ตกหลุกรักทุกวัน",
      image2: twoFinger,
      textImage2: "2นิ้วสู้ตายกับหมี่หยก",
      image3: coupleInTeenoi,
      textImage3: "มีคนแอบถ่ายเรา2คนแล้วเค้าก็ถ่ายคุณอยู่",
      image4: hide,
      textImage4: "เค้าแอบถ่ายคุณ น่ารักก",
    },
    ให้กำลังใจ: {
      date: "26 มิถุนายน 2567",
      explain:
        "เป็นวันเดย์ทริป เค้าลืมว่าไปทำอะไรTT แต่เค้าทำมาม่าไปให้ ตื่นเช้าขับรถไปเลย",
      image1: alarmMorning,
      textImage1: "วันนั้นเค้าตั้งปลุกเช้าา มีแพลนน",
      image2: iGoTo7,
      textImage2: "เค้าออกไปซื้อของ เอ้าฟิตชุดนอน",
      image3: instantNoodles,
      textImage3: "ทำมาม่าให้คุณกิน คุณชอบมาม่า",
      image4: bestSoup,
      textImage4: "เบสซุปกับคุณ อร่อยที่สุดด",
    },
    พระอาทิตย์ตก: {
      date: "9 สิงหาคม 2567",
      explain: "เราไปหาดบางแสนกัน วันนั้นพระอาทิตย์สวยมาก คุณก็สวยมาก",
      image1: youAndSunset,
      textImage1: "คุณกับพระอาทิตย์ที่กำลังจะตกดิน",
      image2: skyAndSunset,
      textImage2: "ท้องฟ้าตอนพระอาทิตย์จะตกดิน",
      image3: youSoPretty,
      textImage3: "รูปนี้เราชอบกันทั้งคู่",
      image4: skySunsetAndMoon,
      textImage4: "มีพระจันทร์ด้วย",
    },
    โฟโต้บูส1: {
      date: "28 กันยายน 2567",
      explain: "เราไปถ่ายโฟโต้บูสกันครั้งแรก แฮปปี้กันมาก",
      image1: firstTime,
      textImage1: "รูปเซ็ตแรกที่เราถ่ายกัน",
      image2: yourPicture,
      textImage2: "อันนี้คุณถ่าย น่ารัก",
      image3: photoBoots1,
      textImage3: "รูปเซ็ตที่สอง เราแบ่งกันคนละครึ่ง",
      image4: youLike,
      textImage4: "รูปนี้คุณเป็นคนคิดท่า ชอบมาก",
    },
    ครบรอบ3เดือน: {
      date: "3 ตุลาคม 2567",
      explain: "ครบรอบ 3 เดือน พาคุณไปกินเก้าอี้ไม้ มีของให้ด้วย",
      image1: youShootMe,
      textImage1: "คุณแอบถ่ายเรา น่ารักอะ แอบถ่ายกันด้วย", 
      image2: grilledPork,
      textImage2: "หมูทะ อร่อยมาก แฮปปี้",
      image3: happyDozen,
      textImage3: "โหลนี้ซื้อให้เพราะจะได้เก็บเยลลี่",
      image4: pumpkinAndPandee,
      textImage4: "พั้มกิ้นมีเพื่อนแล้ว ชื่อแพนดี้ พี่น้องกัน",
    },
    ตัดผมทำเล็บโฟโต้บูส2: {
      date: "10 พฤศจิกายน 2567",
      explain: "ได้ตัดผมสักที คุณพาไป ไปทำเล็บด้วย โฟโต้บูสด้วย แฮปปี้",
      image1: haircut,
      textImage1: "คุณถ่ายเราตอนไปตัดผม แสดงความเป็นเจ้าของสุด ๆ",
      image2: newNail,
      textImage2: "พาคุณไปทำเล็บ คุณแฮปปี้ก็ดีใจ",
      image3: showNail,
      textImage3: "โชว์ไป 1 เล็บสวยมาก",
      image4: photoBoots2,
      textImage4: "โฟโต้บูสครั้งที่สอง ขาวดำด้วย น่ารัก",
    },
    ไปเรียนกับไนท์และไปดูไนท์ซ้อม: {
      date: "12 พฤศจิกายน 2567",
      explain: "ไปกรุงเทพ ไปใช้ชีวิตกับไนท์",
      image1: studyWithNight,
      textImage1: "คุณไปเรียนกับเค้า พาคุณตื่นเช้า",
      image2: mac,
      textImage2: "ถ่ายรูปใน mac กัน ิ ิ",
      image3: energy,
      textImage3: "เค้าทำโปรเจค คุณก็คอยเป็นกำลังใจให้เค้า",
      image4: taekwondoPractise,
      textImage4: "คุณไปดูเค้าซ้อม ยุงกัดก็ทน มีกำลังใจจ",
    },
    อควาเรียม: {
      date: "2 ธันวาคม 2567",
      explain: "อควาเรียมครั้งแรกกับคุณ มีความสุข",
      image1: aquarium,
      textImage1: "รูปทางเข้าก่อนไปเจอปลา",
      image2: seeFish,
      textImage2: "เอ็นดูความอยากถ่าย",
      image3: seeFish2,
      textImage3: "รูปนี้ชอบมาก น่ารัก อยากรู้อยากเห็น",
      image4: chirstmasInAquarium,
      textImage4: "คริสต์มาสก่อนใครเลย",
    },
    บางแสนเช้า: {
      date: "13 ธันวาคม 2567",
      explain: "3 รูป กลับด้านดูนะ ิ ิ แวะไปบางแสนตอนเช้า คุณก็รอเค้า",
      image1: beach,
      textImage1: "ใช้กล้องใหญ่ถ่าย รูปสวยมาก",
      image2: mookrynInBeach,
      textImage2: "คุณนั่งรอเค้า บ่นกันนิดหน่อย",
      image3: beach2,
      textImage3: "กล้องใหญ่เหมือนกัน สวยเหมือนกัน",
      image4: zoomBeach,
      textImage4: "ถ่ายใกล้ เห็นสิ่งเล็ก ๆ สวยมาก",
    },
    คาเฟ่คริสต์มาส: {
      date: "23 ธันวาคม 2567",
      explain: "วันนี้ไปคาเฟ่ คุณสวยมาก ชอบคุยกับคุณ",
      image1: prettyGirlInSwensen,
      textImage1: "ไปกิน swensen กันที่บางแสน สวยมาก สถานที่และคุณด้วย",
      image2: beachNLM,
      textImage2: "แวะเดินเล่นหาด เขียน N Love M และคุณก็เข้ามาในรูป",
      image3: pictureFromCamera,
      textImage3: "รูปนี้จากกล้องเล็ก สวยไปอีกแบบ",
      image4: prettyCuteSmile,
      textImage4: "น่ารักที่สุดในโลกใบนี้ ที่สุด",
    },
  };

  const TripBig = {
    ดูหนังพัทยา: {
      date: "4 กรกฎาคม 2567",
      explain: "ทริปไปดูหนังพัทยา ก่อนไปมีเติมพลัง ดูเสร็จแวะหาดด้วย",
      image1: beforeGoToMovie,
      textImage1: "นายเบี้ยวกับคนโปรด ต้องสั่งไม่ผัก",
      image2: bigSmile,
      textImage2: "ยิ้มแป้นมากน่ารัก ยิ้มสวย",
      image3: prettySmileWithMe,
      textImage3: "มาพิงไหล่เรา ถ่ายรูปเลย น่ารักมาก ยิ้มสวยอีกแล้ว",
      image4: pattayaBeach,
      textImage4: "แวะหาดพัทยากัน เดินเล่นชิล ๆ",
    },
    ดูหนังเซ็นชล: {
      date: "11 กรกฎาคม 2567",
      explain: "ไปดูหนังที่เซ็นทรัลชลบุรี ก่อนไปมีแวะเติมพลัง แถมรอบนี้มีคนโดนหมากัด เลยพามาฉีดยา เข็มที่เท่าไหร่ไม่รู้ คุณซื้อหนังสือให้ด้วย ชอบมาก สนุก แถมพระอาทิตย์สวยด้วย",
      image1: newShabu,
      textImage1: "ร้านใหม่ เราไปกินกัน ใกล้หอคุณ อร่อย แต่เผ็ดมาก",
      image2: inJectADrug,
      textImage2: "พาไปฉีดยา ต้องระวังตัวเยอะ ๆ นะ เป็นห่วง",
      image3: easyThings,
      textImage3: "คุณซื้อหนังสือ เรื่องง่าย ๆ ให้เรา เราชอบมาก สนุก",
      image4: youSeeSun,
      textImage4: "ก่อนกลับมาดูพระอาทิตย์ตกกัน คุณดู เค้าถ่ายคุณ",
    },
    เที่ยวเล่นกรุงเทพ: {
      date: "18 กรกฎาคม 2567 - 20 กรกฎาคม 2567",
      explain: "แวะมากรุงเทพมาเที่ยวเล่น เค้าพาเที่ยวหน่อย",
      image1: fashion,
      textImage1: "พาแวะแฟชั่น ห้างโปรดเค้าเอง",
      image2: bigSmileInCar,
      textImage2: "ยิ้มแป้นอีกแล้ว ตกหลุมรักรอยยิ้มคุณทุกรอบเลยนะ",
      image3: teenoiInBNK,
      textImage3: "กินตี๋น้อยกัน ถึงแม้จะมีเรื่อง แต่ก็เป็นมื้อที่ได้กินกับคุณ อร่อยเหมือนเดิม",
      image4: walkOnFootBridge,
      textImage4: "เดินไป7-11ฝั่งตรงข้ามบ้าน เดินกลับมาเลยถ่ายรูปหน่อย เท่อะ",
    },
    พามุกรินกลับโคราช: {
      date: "27 กรกฎาคม 2567 - 28 กรกฎาคม 2567",
      explain: "พามุกรินกลับโคราช ได้เห็นคุณยิ้มเยอะ ๆ เค้าก็หายเหนื่อย",
      image1: outfitGoToKorat,
      textImage1: "เอ้าฟิตวันไปโคราช เท่ ๆ สบาย ๆ",
      image2: prettySmileGoToKorat,
      textImage2: "ยิ้มสวยมาก ชอบรอยยิ้มคุณจัง",
      image3: prettyGirlInCafe,
      textImage3: "แอบถ่ายคุณ เค้าชอบรูป สวยมาก ออร่าจับ",
      image4: coupleInFrontOfMirror,
      textImage4: "ถ่ายหน้ากระจกด้วยกัน ถึงคุณจะบอกไม่ชอบยังไง มันก็เป็นรูปที่เราถ่ายด้วยกัน เค้าชอบอยู่ดี",
    },
    เที่ยวกรุงเทพและงานหนังสือ: {
      date: "10 ตุลาคม 2567 - 12 ตุลาคม 2567",
      explain: "พามาเรียนด้วย มางานหนังสือ แฮปปี้",
      image1: studyWithNight2,
      textImage1: "เรียนกับเค้า เค้ายังตามอาจารย์ไม่ทันเลย อย่างไว",
      image2: mookrynWithPostCard,
      textImage2: "ถ่ายกับโปสการ์ด เอาปิดปากไว้ยังรู้ว่ายิ้มน่ารัก",
      image3: walkInPark,
      textImage3: "ไปเดินเล่นสวนกัน ถ่ายรูปให้นิดหน่อย สวยจัง",
      image4: hideCamera,
      textImage4: "แอบถ่ายเรา รูปนี้ชอบมาก น่ารักอะ",
    },
    ไนท์แข่งที่โคราช: {
      date: "15 พฤศจิกายน 2567 - 16 พฤศจิกายน 2567",
      explain: "เค้ามาแข่งแล้วก็พาคุณกลับพอดี โก ๆ โคราช",
      image1: onTheWayGoToKorat,
      textImage1: "ระหว่างทางมาโคราช เห็นฮาโลวีนด้วย",
      image2: dinnerWithTaekwondoTeam,
      textImage2: "อาหารเย็นกับทีมเค้า เกร็งมาก",
      image3: taekwondoFight,
      textImage3: "คุณมาดูเค้าแข่ง เค้าดีใจที่คุณไปเชียร์ ไปเอนจอย น่ารักมากเลย",
      image4: teenoiAfterFight,
      textImage4: "ตี๋น้อยหลังแข่ง กินตี๋น้อยแล้วชอบมีเรื่อง แปลกไหม",
    },
    ไปรับมุกรินและได้เจอครอบครัวคุณ: {
      date: "24 พฤศจิกายน 2567",
      explain: "มานัดเจอคุณที่วัดเพราะพ่อแม่คุณไม่อยากให้เค้าขับรถไกล กลายเป็นมาเจอครอบครัวคุณแบบนานที่สุด",
      image1: meetInTemple,
      textImage1: "นัดเจอที่วัด คุณแต่งตัวสวย ระหว่างทางมาคุณก็หลับแต่ยังติดต่อมาหาเค้าตลอด น่ารัก",
      image2: randomLuck,
      textImage2: "ไปสุ่มดวง พอดวงออกมาไม่ตรง ก็ไม่เชื่อ จบ",
      image3: yourFamily,
      textImage3: "ถ่ายรูปกับครอบครัวคุณ พ่อคุณชวนเค้าไปถ่ายรูปด้วย แฮปปี้มาก",
      image4: lunchTogether,
      textImage4: "หลังจากไปวัด ก่อนกลับไปหอ พ่อแม่คุณชวนเค้าไปกินข้าว เกร็งมาก แต่พยายามทำตัวสบาย ๆ ประทับใจมาก",
    },
    พัทยาคริสต์มาส: {
      date: "25 ธันวาคม 2567 - 26 ธันวาคม 2567",
      explain: "เค้าได้ยินคุณพูดเกี่ยวกับคุณจะไปเที่ยวกับเพื่อน เค้าเลยอยากไปกับคุณบ้าง เลยนัดไปพัทยาเลย งงมาก แต่เป็นทริปที่แฮปปี้มาก ๆ สนุก คุณแต่งตัวสวย",
      image1: nightDate,
      textImage1: "ไนท์เดท มาม่าของคุณอร่อย ของเค้าพอใช้ได้ มีอีกหลายอย่างเลยที่กินด้วยกัน",
      image2: outfitInFrontOfMirror,
      textImage2: "เอ้าฟิตก่อนไปเที่ยวกัน คุณสวยมากเลย",
      image3: prettyGirlInPattaya,
      textImage3: "ถ้านี่ไม่ใช่คนที่สวย ดูดี ที่สุด",
      image4: onTheWayBack,
      textImage4: "แอบถ่ายเราระหว่างตอนขับรถกลับ แอบถ่ายกันด้วย น่ารัก",
    },
    ปีใหม่: {
      date: "30 ธันวาคม 2567 - 1 มกราคม 2568",
      explain: "เค้าดาวน์ที่โคราช สนุก มีเรื่องทุกวัน คุยทุกวัน ร้องไห้ด้วย แต่เรายังคุยกันกอดกันเสมอ ขอบคุณนะครับ",
      image1: teenoiBeforeNewYear,
      textImage1: "ตี๋น้อย และใช่ มีเรื่องอีกแล้ว แต่ใครสน สั่งกุ้ง แกะให้คุณกินไปเลย วิธีแสดงความรัก",
      image2: countDown,
      textImage2: "เคาท์ดาวน์กัน มีฟังเพลงด้วย ได้รู้จักวงใหม่ และกลายเป็นวงที่ชอบอีก 1 วง seasonFive",
      image3: photoBootsInKorat,
      textImage3: "โฟโต้บูสอันนี้มันลบรูปได้ คุณเลยอยากถ่าย เค้าเลยพามา ถ่ายด้วยกัน จุ๊บกันด้วย น่ารัก",
      image4: dinosaurAndMook,
      textImage4: "เค้าเห็นไดโนเสาร์เลยให้คุณไปทำท่าตาม คุณยอมด้วย น่ารักอะ มีแฟนยอมทำอะไรแบบนี้น่ารักมาก",
    },
  };

  const tripOptions = tripSelectSize === "small" ? TripSmall : TripBig;

  return (
    <div>
      <div className="trip-title">
        <h4>Trip</h4>
        <p>
          นี่เป็นทริปที่เราเคยไปด้วยกันไม่ว่าจะเล็กหรือใหญ่ เลือกขนาดทริป ทริป
          และไปเอนจอยกันครับ
        </p>
      </div>
      <div className="trip-select-size">
        {/* เล็ก */}
        <div
          className="size-trip"
          style={
            tripSelectSize === "small" ? { backgroundColor: "#5DBB63" } : {}
          }
          onClick={() => {
            setTripSelectSize("small");
          }}
        >
          ทริปเล็ก
        </div>
        {/* ใหญ่ */}
        <div
          className="size-trip"
          style={tripSelectSize === "big" ? { backgroundColor: "#5DBB63" } : {}}
          onClick={() => {
            setTripSelectSize("big");
          }}
        >
          ทริปใหญ่
        </div>
      </div>
      <div className="trip-options">
        {Object.entries(tripOptions).map(([tripName, tripData], index) => (
          <div
            key={index}
            className="trip-item"
            style={
              tripSelectName === tripName ? { backgroundColor: "#5DBB63" } : {}
            }
            onClick={() => {
              setTripSelect(tripData); // ตั้งค่า object ทั้งตัว
              setTripSelectName(tripName);
            }}
          >
            {tripName}
          </div>
        ))}
      </div>
      <div className="trip-detail">
        <p className="trip-name">{tripSelectName}</p>

        <p className="trip-date">{tripSelect.date ? tripSelect.date : ""}</p>

        <p>{tripSelect.explain}</p>

        <div className="trip-img">
          <div>
            <img className="trip-image" src={tripSelect.image1} alt="" />
            <p>{tripSelect.textImage1}</p>
          </div>
          <div>
            <img className="trip-image" src={tripSelect.image2} alt="" />
            <p>{tripSelect.textImage2}</p>
          </div>
          <div>
            <img className="trip-image" src={tripSelect.image3} alt="" />
            <p>{tripSelect.textImage3}</p>
          </div>
          <div>
            <img className="trip-image" src={tripSelect.image4} alt="" />
            <p>{tripSelect.textImage4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
