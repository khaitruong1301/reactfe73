import React, { Component } from 'react'
import BaiTapChonXe from './BaiTapChonXe'
import BaiTapQLND from './BaiTapQLND/BaiTapQLND'
import DemoTangGiamFontSize from './DemoTangGiamFontSize'

export default class DemoRedux extends Component {
    // state = {

    // }
  
    render() {
    return (
      <div className='container'>
        <DemoTangGiamFontSize />
        <BaiTapChonXe />
        <BaiTapQLND />
      </div>
    )
  }
}
