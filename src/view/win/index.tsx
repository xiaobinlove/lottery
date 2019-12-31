import React, { FC, useEffect, useState } from 'react'
import './index.scss'
import { RouteComponentProps } from 'react-router-dom'
import { winInfo } from '../../api/staff-member'
const WinInfo = () => {
  const [winList, setWinList] = useState([
    { awardCode: '', grade: 0, gradeName: '', viewName: '' }
  ])
  useEffect(() => {
    console.log('test')
    winInfo('TowLqB4CxxlpXnnq8KY2O3Z6+hPZOtIVZgbLRmb2OAA=')
      .then(res => {
        console.log(res)
        console.log(winList)
      })
      .catch(e => {
        console.log(e.response.data.message)
        setWinList([
          {
            awardCode: '',
            grade: 0,
            gradeName: '',
            viewName: ''
          }
        ])
          console.log(winList)
      })
  }, [])
  return <div>
      {
          winList.map((item,key) => {
              return <p key={key}>
                  <span>{item.viewName}</span>
                  <span>{item.awardCode}</span>
                  <span>{item.gradeName}</span>
                  <span>{item.grade}</span>
              </p>
          })
      }
  </div>
}
const WinNoData = () => {
  return <div>WinNoData</div>
}

const Win: FC<RouteComponentProps> = () => {
  const winData = []
  return (
    <div className='win'>
      <div className='header'></div>
      <div className='win-content'>
        {!winData.length ? <WinInfo /> : <WinNoData />}
      </div>
    </div>
  )
}
export default Win
