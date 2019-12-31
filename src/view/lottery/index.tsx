import React, { useEffect, FC } from 'react'
import { getAwards } from '../../api/awards'
// import { Button } from 'antd-mobile'
import './index.scss'
// const Lottery: FC = () => {
//   useEffect(() => {
//
//   })
// }
const Lottery: FC = () => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log('useEffect')
    getAwards().then(res => {
      console.log(res, 'res')
    })
  });
  return (
    <div>
      <button onClick={() => {
        console.log(11111)
      }}>Click Drawer</button>
    </div>
  );
}
export default Lottery
