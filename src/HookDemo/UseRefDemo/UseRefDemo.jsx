//rafce
import React, { useState } from 'react'
import { useRef } from 'react';

/*
    useRef dùng để lưu trữ giá trị sau các lần render. Thường thay thế useState trong 1 số trường hợp dữ liệu đó thay đổi nhưng không cần render lên giao diện
*/
const UseRefDemo = () => {

    const [arrComment, setArrComment] = useState([]);
    const [number,setNumber] = useState(1);
    // const [comment, setComment] = useState('');
    const commentRef = useRef('');
    const inputComment = useRef(null);

    const handleChange = (e) => {
        const {value} = e.target;
        // setComment(value);
        commentRef.current = value;
        if(inputComment.current.style.color !== 'red'){
            inputComment.current.style.color = 'red';
        }else {
            inputComment.current.style.color = 'green';
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //setState của array comment
        setArrComment([...arrComment,commentRef.current]);

    }


    return (
        <div className='container'>
            <button onClick={()=>{
                setNumber(number+1);
            }}>+</button>
            <h3>Demo useref</h3>
            {arrComment.map((commentItem,index)=>{
                return <p className='p-2 bg-light mt-2 ' key={index}>
                    {commentItem}
            </p>
            })}
            
            <form className='form-group' onSubmit={handleSubmit}>
                <input ref={inputComment} id="comment" className='form-control' onInput={handleChange}/>
                <button className='btn btn-success mt-2' type='submit'>Ok</button>
            </form>
        </div>
    )
}

export default UseRefDemo