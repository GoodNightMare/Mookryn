import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='box-1'>
            <p className='title-footer'>My-Contact</p>
            <ul>
                <li>Instagram : <a style={{color:"red",textDecoration:"none"}} target='blank' href='https://www.instagram.com/nnight_yy/'>nnight_yy</a> </li>
                <li>FaceBook : <a style={{color:"blue",textDecoration:"none"}} target='blank' href='https://www.facebook.com/nnth.thir.pana.thuk?locale=th_TH'>นนท์ธีร์ ปานะถึก</a></li>
                <li>Email : nonthee.night@gmail.com</li>
                <li>Tel : 098-898-0414</li>
            </ul>
        </div>
        <div className='box-2'>
            <p className='title-footer'>Mookryn & Night</p>
            <ul>
                <li>Instagram : <a style={{color:"red",textDecoration:"none"}} target='blank' href='https://www.instagram.com/n_mr_together/'>n_mr_together</a></li>
            </ul>
        </div>
    </div>
  )
}
