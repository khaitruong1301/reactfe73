//rafce
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Modal } from './Modal';




const UseEffectDemo = () => {
    const [number, setNumber] = useState(1);
    const [arrProduct, setArrProduct] = useState([
        {id:1,name:'product 1',image:'https://picsum.photos/200/200',price:1000}
    ]);

    //idProductDetail
    const [idProductDetail,setIdProductDetail] = useState(0);
    //state của product detail
    const [productDefail,setProductDetail] = useState({});

    const getApiProduct = async () => {
        let result = await axios({
            url:'https://shop.cyberlearn.vn/api/product',
            method:'get'
        });
        setArrProduct(result.data.content);
    }

    const getProductDetail = async()=>{
        let result = await axios({
            url:'https://shop.cyberlearn.vn/api/product/getbyid?id='+idProductDetail,
            method:'get'
        });
        //Sau khi lấy dữ liệu api productDetail về thì set vào state ProductDetail
        setProductDetail(result.data.content);
        console.log('update product detail',result.data.content)
    }
    useEffect(()=>{
        //Bất kì sự kiện nào làm state idProductDetail thay đổi thì hàm này sẽ chạy (ComponentDidUpdate mà có if)
        if(idProductDetail !== 0) {
            getProductDetail();
        }
        return () => {
            console.log('hàm này sẽ kích hoạt 1 là component mất khỏi giao diện hoặc khi dependency tham số thứ 2 thay đổi');
            console.log('clear đi các biến hoặc hàm chạy ngầm giống componentWillUnmount')
        }

    },[idProductDetail]); //đối với object hoặc array thì biết được thay đổi hay không thì phải là object mới hoặc array mới (...)


    

    useEffect(()=>{
        console.log('log useEffect');
        //Trường hợp 2:Thực thi lần đầu sau render và Khi muốn bất kì state nào thay đổi cũng sẽ thực thi hàm này 
        //Tương tự componentDidUpdate (bên class)
    })

    useEffect(() => {
        //Trường hợp 1: 
        //Hàm callback tham số thứ 1 sẽ chạy lần đầu tiên sau khi giao diện render, chỉ chạy 1 lần duy nhất nếu tham số thứ 2 là mảng rổng []
        //Thường dùng để call api (Tương tự componentDidMount bên class)
        getApiProduct();
        console.log('componentdidmount')
        return () => {
            console.log('hàm này sẽ kích hoạt 1 là component mất khỏi giao diện hoặc khi dependency tham số thứ 2 thay đổi');
            console.log('clear đi các biến hoặc hàm chạy ngầm giống componentWillUnmount')
        }
    }, [])
    const renderProduct = () => {
        return arrProduct.map((prod, index) => {
            return <div className='col-4' key={index}>
                <div className='card'>
                    <img src={prod.image} alt="..." />
                    <div className="card-body">
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                            setIdProductDetail(prod.id);
                            //call api
                        }}>View detail</button>

                        <NavLink className="btn btn-danger" to={`/detail/${prod.id}`}>
                            View detail page
                        </NavLink>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number + 1);
            }}>+</button>
            <h3>Product list</h3>
            <div className='row'>
                {renderProduct()}
            </div>

            <Modal prodDetail={productDefail} />
        </div>
    )
}

export default UseEffectDemo