import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearchParamDemo = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([]);
    const keyword = useRef('');
    const handleChange = (e) => {
        keyword.current = e.target.value;
    }

    const getProductApi = async () => {
            let tuKhoa = searchParams.get('keyword');
            let result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product?keyword=${tuKhoa}`,
                method: 'GET'
            });
            setArrProduct(result.data.content);
    }


    useEffect(() => {
        //Keyword thay đổi thì mới chạy hàm này (lần đầu tiên không có keyword => null nên không chạy)
        if (searchParams.get('keyword')) {
            // console.log('call api');
            getProductApi();
        }
    }, [searchParams.get('keyword')])
    const handleSubmit = (e) => {
        e.preventDefault();
        //Hàm đưa tham số lên url tại trang này
        setSearchParams({
            keyword: keyword.current
        })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <p>Input keyword</p>
                <input className='form-control' name="keyword" onChange={handleChange} />
            </form>
            <div className='mt-2'>
                <h3>Search Result</h3>
                <div className='row'>
                    {arrProduct.map((prod, index) => {
                        return <div className='col-3' key={index}>
                            <div className='card'>
                                <img src={prod.image} alt="..." />
                                <div className='card-body'>
                                    <p>{prod.name}</p>
                                    <p>{prod.price}</p>
                                    <NavLink to={`/detail`} className="btn btn-success">View detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}

export default UseSearchParamDemo