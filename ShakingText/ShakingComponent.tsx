import * as React from "react";
import { Shake } from "reshake"

export interface IShakerProps {
    textValue?: any;
    fontSize?:any;
    color?:any
  }
export const MyShake = (props:IShakerProps) => (
<div
    style={{
            fontSize:props.fontSize+"px",
            color:props.color
        }}
>
          <Shake h={50} v={10} r={3} dur={400}>
          {props.textValue}
  </Shake>
</div>
)