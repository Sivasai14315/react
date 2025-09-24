import React from "react";
import TestCom from "./TestCom";


const Mango=()=>{
    return(
        <h2>Mangoes are sweet</h2>
    )
}

const Grapes=()=>{
    return(
        <h2>Grapes are black</h2>
    )
}

function Sample(){
    return(
        <div><Mango/><Grapes/><TestCom/></div>
    )
}

export default Sample;