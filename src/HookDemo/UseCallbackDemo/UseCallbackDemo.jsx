import React, { useState,useCallback } from 'react'
import Comment from './Comment';




export const UseCallbackDemo = () => {
    let [number,setNumber] = useState(1);
    let [like, setLike] = useState(1);
    const renderLike = () => {
        console.log('render Like');
        return 'Bạn đã like ' + like  +' lần';
    }
    //cache lại hàm renderLike
    /*
        useCallBack: dùng để cache lại địa chỉ của 1 hàm, nếu hàm đó còn tạo lại (Thay đổi địa chỉ) dựa vào state nào đó thì truyền state đó vào dependency tham số 2 của useCallBack
    */
    const callBackRenderLike = useCallback(renderLike,[like]);

    return (
        <div className="m-5">
            <p>Number: {number}</p>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number + 1);
            }}>+</button>
            <br />
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <Comment like={like} renderLike={callBackRenderLike} />
        </div>
    )
}
