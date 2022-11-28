//rafce
import React, { useState } from 'react'


//Đây là function component => Không có con trỏ this (cũng k có state props như class)

const UseStateDemo = () => {
    // let [state,setState] = useState({
    //     number:1,
    //     fontSize:16
    // })
    let [number, setNumber] = useState(10);  //[state,hamSetState]
    let [fontSize, setFontSize] = useState(16);

  
    const handleChangeFontSize = (fSize) => {
        let newFontSize = fontSize + fSize;
        //setState thì giá trị mới thay thế hoàn toàn giá trị cũ => render lại
        setFontSize(newFontSize)
    }
    return (
        <div className='container'>
            <h3>Ví dụ 1: Tăng giảm số lượng</h3>
            <p>Number : {number}</p>
            <button className='btn btn-success mx-2' onClick={() => {
                let newNumber = number + 1;
                //hàm setState sẽ nhận vào state mới thay thế state cũ đồng thời render lại function
                setNumber(newNumber);
            }}>+</button>
            <button className='btn btn-success  mx-2'>-</button>
            <h3>Ví dụ 2: Tăng giảm fontSize</h3>
            <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique accusantium dolores earum sequi ratione, culpa quia fugiat repudiandae eligendi vitae error deleniti temporibus dolore distinctio perspiciatis unde aspernatur porro.</p>
            <button className='btn btn-success mx-2' onClick={()=>{
                handleChangeFontSize(5);
            }}>+</button>
            <button className='btn btn-success mx-2' onClick={()=>{
                handleChangeFontSize(-5);
            }}>-</button>
        </div>
    )
}

export default UseStateDemo