import React, { useState, MouseEventHandler } from 'react'
interface IProps {
  onClick: MouseEventHandler<HTMLDivElement>
}
function ReceiveAward() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      {/*<div onClick={setCount(count + 1)}>*/}
      {/*  +1*/}
      {/*</div>*/}
    </div>
  )
}
export default ReceiveAward
