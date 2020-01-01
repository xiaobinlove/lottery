import React, { useEffect, FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { getAwards } from '../../api/awards'
import { login } from '../../api/user'
import { Modal, Icon, Carousel } from 'antd-mobile'
import { staffsInfo } from "../../api/lottery-info";
import { PRE_FIX } from '../../config'
import './index.scss'
const prefixClass = `${PRE_FIX}lottery-view`
const Lottery: FC<RouteComponentProps> = ({ history }) => {
  const [loginModal, setLoginModal] = useState(false)
  const [lotterModal, setLotterModal] = useState(false)
  const [flag, setFlag] = useState(false)
  const [listData, setListData] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
    useEffect(() => {
    console.log('useEffect')
    // getAwards().then(data => {
    //   console.log(data, 'res')
    // })
    staffsInfo({
      page: 1,
      size: 100
    }).then(data => {
      // @ts-ignore
      const { content } = data
      setListData(content)
      setFlag(true)
        console.log(content, 'content')
    }).catch(err => {
      console.log(err, 'err')
    })
  }, []);
  const handleLogin = () => {
    login({
      name,
      phone
    }).then(data => {
      setLoginModal(false)
      console.log(data)
    })
  }
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
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
            {/*<div className={`${prefixClass}-list-item`}>*/}
            {/*  <div className={`${prefixClass}-list-text1`}>嘻嘻嘻</div>*/}
            {/*  <div className={`${prefixClass}-list-text2`}>136****3636</div>*/}
            {/*  <div className={`${prefixClass}-list-text3`}>外交官拉杆箱</div>*/}
            {/*</div>*/}
            <Carousel
              className={`list-carouse`}
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={flag}
              infinite
              speed={200}
              autoplayInterval={1000}
            >
              {listData.map((item: any, index) => (
                  <div className={`${prefixClass}-list-item`} key={index}>
                    <div className={`${prefixClass}-list-text1`}>{item.userName}</div>
                    <div className={`${prefixClass}-list-text2`}>{item.userPhone}</div>
                    <div className={`${prefixClass}-list-text3`}>{item.awardViewName}</div>
                  </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* 登录弹窗 */}
      <Modal
        className={`${prefixClass}-login-modal`}
        visible={loginModal}
        transparent
        maskClosable={false}
        onClose={ () => { setLoginModal(false) } }
      >
        <div className={`${prefixClass}-login-content`}>
          <Icon type={'cross'} className={`${prefixClass}-close-icon`} onClick={() => { setLoginModal(false) }} />
          <div className={`${prefixClass}-login-content-title`}>请输入姓名与手机号码</div>
          <div className={`${prefixClass}-input-item`}>
            <input type="text" placeholder={'姓名'} onChange={ (e) => { setName(e.target.value) } } />
          </div>
          <div className={`${prefixClass}-input-item`}>
            <input type="text" placeholder={'手机号码'} onChange={(e) => {
              setPhone(e.target.value)
            }}/>
          </div>
          <div className={`${prefixClass}-login-button`} onClick={handleLogin}>立即抽奖</div>
        </div>
      </Modal>
      {/* 中奖弹窗 */}
      <Modal
        className={`${prefixClass}-lottery-modal`}
        visible={lotterModal}
        transparent
        maskClosable={false}
        onClose={ () => { setLotterModal(false) } }
      >
        <div className={`${prefixClass}-lottery-content`}>
          {/*<div className={`no-award`}>谢谢参与</div>*/}
          <div className={`get-award`}>
            <div className={`get-award-title`}>恭喜获得</div>
            <div className={`get-award-level`}>一等奖</div>
            <div className={`get-award-name`}>外交官拉杆箱</div>
            <div className={`get-award-code-title`}>兑换码</div>
            <div className={`get-award-code`}>asdfgh</div>
          </div>
          <div className={`record-button`} onClick={() => { history.push('/record') }}>查看中奖记录</div>
          <div className={'close'} onClick={() => { setLotterModal(false) }}></div>
        </div>
      </Modal>
    </div>
  );
}
export default Lottery
