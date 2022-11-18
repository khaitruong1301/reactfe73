//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
//Xoá : export và xoá hàm mapDispatchToProps
class BaiTapChonXe extends Component {

    handleChangeColor = (color) => {
        let imgSrc = `./img/img${color}Car.jpg`;
        //Tạo ra action 
        const action = {
            type:'CHANGE_COLOR',
            payload: imgSrc
        }
        //dispatch lên reducer
        this.props.dispatch(action);
    }
    //mobx, context (react), recoiljs, ..., reduxToolKit

    render() {
        console.log(this.props);
        let {imgSrcReducer} = this.props;
        return (
            <div>
                <h3>Bài tập chọn xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={imgSrcReducer} className='w-100' alt='...' />
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-danger mx-3' onClick={()=>{
                            this.handleChangeColor('Red');
                        }}>Red</button>
                        <button className='btn btn-secondary mx-3' onClick={()=>{
                            this.handleChangeColor('Silver');
                        }}>Silver</button>
                  
                        <button className='btn btn-dark mx-3' onClick={()=>{
                            this.handleChangeColor('Black');
                        }}>black</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    imgSrcReducer: state.imgSrcReducer
})
export default connect(mapStateToProps)(BaiTapChonXe)