import React from 'react'
import './Birth.css'
import { MdCake } from "react-icons/md";
import meetYou from "./../../../assets/img/img-birth/มาหาคุณ.png";
import YourFamily from "./../../../assets/img/img-birth/YourFamily.png";
import taekwondo from "./../../../assets/img/img-birth/taekwondo.png";
import photoBoots from "./../../../assets/img/img-birth/photoBoots.png";

export default function Birth() {
  return (
    <div>
        <div className='birth-title'>
            <p>Happy Birthday To Mookryn 21Y <MdCake /></p>
        </div>
        <div>
            <p className='birthday-text'>
              {`สุขสันต์วันเกิดนะครับมุกริน ขอให้อายุ 21 มีแต่ความสุข 
              โตขึ้นอีก 1 ปี จะทำอะไรต้องคิดเยอะๆนะครับ กินข้าวเยอะๆ
              อย่ากินแต่มาม่า มีอะไรเล่าให้กันฟังได้นะครับ ขอให้ไม่ปวดท้องมาก
              ตั้งใจเรียนทำให้เต็มที่ ผลจะออกมาเป็นยังไงคุณก็ทำเต็มที่แล้ว`} 
            </p>
            <p className='birthday-text'>{`มีความสุขกับชีวิตมากๆครับ Enjoy Your Life :*)`}</p>
        </div>
        <div style={{marginBottom:"50px"}}>
          <p style={{fontWeight:"bold"}}>เป็น 4 รูปคู่ที่เค้าชอบที่สุด : </p>
          <div className='image-birthday'>
            <div className='img-birthday'>
              <img className='picture-birthday' src={meetYou} alt="" />
              <p className='text-birthday'>เค้าไปเจอคุณครั้งที่ 2 ได้เจอคุณแบบสติ 100% คุณก็ยังน่ารัก</p>
            </div>
            <div className='img-birthday'>
              <img className='picture-birthday' src={photoBoots} alt="" />
              <p className='text-birthday'>เราไปถ่ายโฟโต้บูสกัน เราชอบกันทุกรูป แต่นี่เป็นรูปที่คุณชอบที่สุด</p>
            </div>
            <div className='img-birthday'>
              <img className='picture-birthday' src={taekwondo} alt="" />
              <p className='text-birthday'>คุณไปเชียร์เค้าแข่ง คุณดูไม่เบื่อเลยแถมมาไปดูน้อง ๆ อีก เค้าแฮปปี้มาก</p>
            </div>
            <div className='img-birthday'>
              <img className='picture-birthday' src={YourFamily} alt="" />
              <p className='text-birthday'>ตอนแรกเค้าจะไม่ถ่าย แต่พ่อบอกให้ไนท์เข้ามาสิ เค้าดีใจมาก แบบมาก ๆ</p>
            </div>
          </div>
        </div>
        {/* <div>
          <p style={{fontWeight:"bold"}}>ของขวัญ : </p>
        </div> */}
        <div>
          <p style={{fontWeight:"bold"}}>เพลง : ฤดูของเธอ</p>
          <p style={{margin:"10px 0"}}><a className='song-birthday' href="https://www.youtube.com/watch?v=m7yse0zVZaY">ไว้เปิดฟังด้วยกันนะครับ</a></p>
        </div>
    </div>
  )
}
