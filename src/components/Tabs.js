import React, { useState } from 'react'
import style from './Tabs.module.css'

const Tabs = () => {
    console.log(style);
    
    const [tabNum, setTabNum] = useState(1);
    // tabNum = 1
    console.log(tabNum);
  return (
    <div className={style.tabs}>
        <ul>
            <li><a href="#" onClick={()=>setTabNum(1)}>1</a></li>
            <li><a href="#" onClick={()=>setTabNum(2)}>2</a></li>
            <li><a href="#" onClick={()=>setTabNum(3)}>3</a></li>
        </ul>
        <div className={style.content}>
            <div style={{display : tabNum === 1 ? "block" : "none"}}>content1</div>
            <div style={{display : tabNum === 2 ? "block" : "none"}}>content2</div>
            <div style={{display : tabNum === 3 ? "block" : "none"}}>content3</div>
        </div>
    </div>
  )
}

export default Tabs