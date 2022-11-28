import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tangGiamFontSizeAction } from '../../redux/actions/fontSizeAction';
const DemoUseRedux = () => {
  //useSelector tương tự mapStateToProps => lấy state từ redux về
  const fontSize = useSelector(state => state.fontSizeState);
  //useDispatch thay thế cho this.props.dispatch khi connect với redux
  const dispatch = useDispatch();
  console.log('fontSize', fontSize);
  return (
    <div className='container'>
      <h3>Tăng giảm fontSize</h3>
      <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus deserunt atque officiis vero minima dolore tempora. Molestiae, accusamus est repudiandae, voluptates eius neque animi a natus, fugiat voluptate similique.</p>
      <button className='btn btn-success' onClick={() => {
        const action = tangGiamFontSizeAction(5)

        dispatch(action);
      }}>+</button>

      <button className='btn btn-success mx-2' onClick={() => {
        const action = tangGiamFontSizeAction(-5);

        dispatch(action);
      }}>-</button>
    </div>
  )
}

export default DemoUseRedux






//rfcredux => Tạo ra function component có chứa mapstatetorprops và dispatch tương tự class
// import React from 'react'
// import { connect } from 'react-redux'

// export const DemoRedux = (props) => {
//   return (
//     <div>DemoRedux</div>
//   )
// }

// const mapStateToProps = (state) => ({})



// export default connect(mapStateToProps)(DemoRedux)