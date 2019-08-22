import React from 'react';
const Message = (props:{message: any}) =>{ //props:any 也是可以的
    return (<p>
        This is message from {props.message}
    </p>)
}
export default Message;
//functional component 默认的return 是 any