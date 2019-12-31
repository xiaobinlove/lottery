import React, { FC } from 'react'
import './index.scss'
import { RouteComponentProps } from 'react-router-dom'

const Record: FC<RouteComponentProps> = () => {
  const siteData = [
    { label: '网点', value: '联系电话' },
    { label: '支行营业部', value: '023-63975499' },
    { label: '中山路支行', value: '023-63975398' },
    { label: '朝阳支行', value: '023-63975477' },
    { label: '复兴支行', value: '023-63975466' },
    { label: '龙凤支行', value: '023-63975386' },
    { label: '新城支行', value: '023-63975378' },
    { label: '静观支行', value: '023-63975488' },
    { label: '蔡家支行', value: '023-63975422' },
    { label: '柳荫支行', value: '023-63975444' },
    { label: '歇马支行', value: '023-63975418' },
    { label: '水土支行', value: '023-63975455' },
    { label: '北温泉支行', value: '023-63975400' },
    { label: '天生丽街支行', value: '023-63975408' },
    { label: '公园支行', value: '023-63975411' },
    { label: '云汉大道支行', value: '023-63975433' }
  ]
  return (
    <div className='record'>
      <div className='header'></div>
      <div className='rule-content'>
        <p>
          1、活动1月6日起至1月26日结束，在此期间每位客户（每个微信号）每日可获得1次抽奖机会；
        </p>
        <p>
          2、中奖信息请在我的中奖记录中查询，中奖兑换码为您兑换礼品唯一凭证请妥善保管；
        </p>
        <p>3、若有疑问请咨询农行北碚支行辖内各营业网点。</p>
      </div>
      <div className='site'>
        {siteData.map((item, key) => (
          <p className={key === 0 ? 'site-header site-item' : 'site-item'}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </p>
        ))}
      </div>
    </div>
  )
}
export default Record
