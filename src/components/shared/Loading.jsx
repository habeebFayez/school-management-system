import React from 'react'
import {ThreeDot} from "react-loading-indicators";

const Loading = ({size='small' , color='#fff'}) => {
    return (
    <div>
          <span className="flex items-center justify-center w-full ">
                  <ThreeDot size={size} color={color} />
          </span>
    </div>
    )
}
export default Loading
