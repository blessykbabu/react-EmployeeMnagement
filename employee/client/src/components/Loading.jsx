import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from '@emotion/react';
const override=css`
display:block;
margin:0 auto;`
;

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("white");

  return (
    <div className="sweet-loading d-flex justify-content-center ">
     

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;