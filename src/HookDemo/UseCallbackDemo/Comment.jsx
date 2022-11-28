import React, { memo } from 'react'
const Comment = (props) => {
    console.log('comment');
    props.renderLike();
    return (
        <div>
            <p>
                {props.renderLike()}
            </p>
            <textarea></textarea> <br />
            <button>Gửi</button>
        </div>
    )
}
export default memo(Comment);
