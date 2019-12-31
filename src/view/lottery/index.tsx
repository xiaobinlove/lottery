import React, { useEffect, FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { getAwards } from '../../api/awards'
import { staffsInfo } from "../../api/lottery-info";
import { PRE_FIX } from '../../config'
import './index.scss'
const prefixClass = `${PRE_FIX}lottery-view`
const Lottery: FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    console.log('useEffect')
    // getAwards().then(data => {
    //   console.log(data, 'res')
    // })
    staffsInfo({
      page: 1,
      size: 100
    }).then(data => {
      console.log(data, 'staffsInfo')
    }).catch(err => {
      console.log(err, 'err')
    })
  });
  return (
    <div className={prefixClass}>
      <div className={`${prefixClass}-bg`}>
        <div className={`${prefixClass}-enter`}>
          <div className={`${prefixClass}-button`}>活动规则</div>
          <div className={`${prefixClass}-button`}>中奖记录</div>
        </div>
        {/* 抽奖轮盘 */}
        <div className={`${prefixClass}-lottery-wrap`}>
          <div className={`${prefixClass}-lottery`}></div>
          <div className={`${prefixClass}-inner`}></div>
          <div className={`${prefixClass}-tottery-button`}></div>
        </div>
        {/* 中奖名单 */}
        <div className={`${prefixClass}-list`}>
          <div className={`${prefixClass}-list-title`}>中奖名单</div>
          <div className={`${prefixClass}-list-content`}>
            <div className={`${prefixClass}-list-item`}>
              <div className={`${prefixClass}-list-text1`}>嘻嘻嘻</div>
              <div className={`${prefixClass}-list-text2`}>136****3636</div>
              <div className={`${prefixClass}-list-text3`}>外交官拉杆箱</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lottery
