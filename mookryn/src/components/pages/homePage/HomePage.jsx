import React from "react";
import "./HomePage.css";
import { FaHeart } from "react-icons/fa";
import firstTime from "./../../../assets/img/img-home/firstTime.png";
import drunk from "./../../../assets/img/img-home/drunk.png";
import firstPictureInFilm from './../../../assets/img/img-home/firstPictureInFilm.png';
import cafeWithYou from './../../../assets/img/img-home/คาเฟ่กับมุกริน.png';
import sunAndYou from './../../../assets/img/img-home/คุณถ่ายพระอาทิตย์แต่เค้าถ่ายคุณ.png';
import seeFish from './../../../assets/img/img-home/เด็กน้อยเห็นปลา.png';
import withFamily from './../../../assets/img/img-home/ถ่ายรูปกับครอบครัวคุณ.png';
import forceYouToPicture from './../../../assets/img/img-home/บังคับมุกรินไปถ่ายรูป.png';
import nail from './../../../assets/img/img-home/พามุกรินไปทำเล็บ.png';
import photoBoots from './../../../assets/img/img-home/โฟโต้บูสที่มุกรินชอบ.png';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="title-home">
        <p>For You Mookryn</p>
      </div>
      <div className="introduction-home">
        {/* บทนำ */}
        <p>
          นี่เป็นเว็บที่ไนท์ทำให้มุกรินเริ่มทำวันที่ 7 ธันวาคม 2567
          จริงๆอยากทำให้ในวันเกิดแต่ไหน ๆ ก็ไหน ๆ ทำเป็นของเค้าและคุณเลยดีกว่า
          เอาไว้เก็บเรื่องราวต่าง ๆ ที่เกิดขึ้นกับเรา
          มีสิ่งหนึ่งที่อยากจะขอก่อนไปชม
          ขอให้เอนจอยกับทุกโมเม้นที่เกิดขึ้นกับเรา นึกถึงช่วงเวลานั้น
          ขอบคุณที่รักกันครับ <FaHeart />
        </p>
      </div>
      <div className="image-home">
        {" "}
        {/*img*/}
        <div className="img-home">
          <img className="picture-home" src={firstTime} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={drunk} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={photoBoots} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={sunAndYou} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={seeFish} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={nail} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={firstPictureInFilm} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={forceYouToPicture} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={cafeWithYou} />
        </div>
        <div className="img-home">
          <img className="picture-home" src={withFamily} />
        </div>
      </div>
    </div>
  );
}
