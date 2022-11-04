import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import Demo from './components/Demo';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './databinding/DataBinding';
import HandleEvent from './handleEvent/HandleEvent';
import DemoLogin from './State/DemoLogin';
//import css: Ảnh hưởng toàn bộ ứng dụng
import './index.scss';
import TangGiamFontSize from './State/TangGiamFontSize/TangGiamFontSize';
import DemoProps from './props/DemoProps/DemoProps';
import BaiTapShop from './props/BaiTapShop/BaiTapShop';
import BaiTapXemChiTiet from './props/BaiTapXemChiTiet/BaiTapXemChiTiet';




const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 
root.render(
  <>
    {/* <HomeLayout /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <DemoLogin /> */}
    {/* <TangGiamFontSize /> */}
    {/* <DemoProps /> */}
    {/* <BaiTapShop /> */}
    <BaiTapXemChiTiet />
  </>
  
)