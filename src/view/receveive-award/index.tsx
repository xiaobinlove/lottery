import React, { useState } from 'react'
function ReceiveAward() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <div onClick={setCount(count + 1)}>
        +1
      </div>
    </div>
  )
}
export default ReceiveAward
