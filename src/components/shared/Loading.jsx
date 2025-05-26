import React from 'react'
import {ThreeDot} from "react-loading-indicators";

const Loading = () => {
    return (
    <div>
          <span className="flex items-center justify-center w-full ">
                  <ThreeDot size={'small'} color={'#fff'} />
          </span>
    </div>
    )
}
export default Loading
