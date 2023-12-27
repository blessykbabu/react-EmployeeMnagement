import React from "react";
import {css} from '@emotion/react'
import {ClipLoader} from "react-spinners";
const override=css`
display:block;
margin:0 auto;`
;
export function Loadercomponnet(){
    return(
        <div className="loader-container">
            <ClipLoader css={override} size={150} color={'#36D7B7'} loading={true}/>

        </div>
    );
    
};