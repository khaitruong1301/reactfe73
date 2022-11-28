//rafce
import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
const Detail = () => {
    const params = useParams();
    const [prodDetail,setProdDetail] = useState({})

    const getProductDetailById = async () =>{

        let result = await axios({
            url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.idProduct}`,
            method:'GET'
        });
        //Kết quả trả về => đưa vào state
        setProdDetail(result.data.content);
    }

    useEffect(()=>{
        //Call api sau khi giao diện load xong
        getProductDetailById();
    },[params.idProduct])


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-100' src={prodDetail.image} alt='...' />
                </div>
                <div className='col-8'>
                    <h3>{prodDetail.name}</h3>
                    <p>Description:{prodDetail.description}</p>
                </div>
            </div>

            <div>
                <h3>Related Products</h3>
                <div className='row'>
                    {prodDetail.relatedProducts?.map((prod,index)=>{
                        return   <div className='col-4' key={index}>
                            <div className='card'>
                                <img src={prod.image} alt="..." />
                                <div className='card-body'>
                                    <p>{prod.name}</p>
                                    <p>{prod.price}</p>
                                    <NavLink className="btn btn-danger" to={`/detail/${prod.id}`}>View detail</NavLink>
                                </div>
                            </div>
                        </div>
                    })}
                  
                </div>
            </div>
        </div>
    )
}

export default Detail