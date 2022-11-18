//rcredux, nhớ xoá export và mapdispatchtoprops
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
  render() {
    console.log(this.props);
    let {arrNguoiDungReducer} = this.props;
    return (
      <table className='table mt-2'>
        <thead className='bg-dark text-white'>
            <tr>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
            </tr>
        </thead>
        <tbody>
            {arrNguoiDungReducer.map((nd,index)=>{
                return <tr key={index}>
                <td>{nd.taiKhoan}</td>
                <td>{nd.matKhau}</td>
            </tr>
            })}
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => ({
    arrNguoiDungReducer: state.arrNguoiDungReducer
})
export default connect(mapStateToProps)(TableNguoiDung)