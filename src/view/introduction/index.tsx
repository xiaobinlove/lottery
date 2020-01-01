import React, { FC } from 'react'
import { getRequest } from "../../js/util";
import { RouteComponentProps } from 'react-router-dom'
import { getOpenId, setOpenId } from '../../js/util'
import { PRE_FIX } from '../../config'
import './index.scss'
const prefixClass = `${PRE_FIX}introduction-view`
const Introduction: FC<RouteComponentProps> = ({ history, location, match }) => {
  const searchObj: any = getRequest(location.search)
  const { openid } = searchObj
  if (openid) {
    setOpenId(openid)
  }
  const handleClick = (path: string) => {
    history.push(path);
  }
  return (
    <div className={prefixClass}>
      {
        Array.from({length: 15}).map((item, index) => {
          return (
            <div className={`${prefixClass}-img`} key={index} style={{ backgroundImage: `url(${require(`../../resource/image/introduction/${index + 1}.png`)})` }}></div>
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
