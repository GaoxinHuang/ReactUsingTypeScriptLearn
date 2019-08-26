import React from 'react';
interface UserMessage{
    name:string;
    message: string;
}
const Message = (props:UserMessage) =>{ //props:any 也是可以的
    return (<p>
        This is message from {props.name},  {props.message}
    </p>)
}
export default Message;
//functional component 默认的return 是 any