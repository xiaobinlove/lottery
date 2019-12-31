import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { PRE_FIX } from '../../config'
import './index.scss'
const prefixClass = `${PRE_FIX}introduction-view`
const Introduction: FC<RouteComponentProps> = ({ history }) => {
  const handleClick = (path: string) => {
    history.push(path);
  }
  return (
    <div className={prefixClass}>
      {
        Array.from({length: 15}).map((item, index) => {
          return (
            <div className={`${prefixClass}-img`} style={{ backgroundImage: `url(${require(`../../resource/image/introduction/${index + 1}.png`)})` }}></div>
          )
        })
      }
      <div className={`${prefixClass}-enter`}>
        <div className={`${prefixClass}-button`} onClick={ () => { handleClick('/lottery') } }>立即抽奖</div>
        <div className={`${prefixClass}-button`} onClick={ () => { handleClick('/receiveAward') } }>领取奖品</div>
      </div>
    </div>
  )
}
// class Introduction extends React.Component<any, any> {
//   render() {
//     return (
//       <div className={'test'}>介绍</div>
//     )
//   }
// }
export default Introduction
