import React, { useState } from 'react'

interface Props{
    maxChars?:number;
    children:string
}

const ExpandableText = ({maxChars=100,children}:Props) => {
    const [isExpanded,setExpanded]=useState(false);

    if (children.length<=maxChars) return <div>{children}</div>;
    
        const text=isExpanded? children : children.substring(0,maxChars)
        return <p>{text}...<button onClick={()=>setExpanded(!isExpanded)}>{isExpanded?"Less":"More"}</button></p>;

      

  
}

export default ExpandableText