import React from'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Introduction from '../view/introduction'
import Lottery from '../view/lottery'
import ReceiveAward from '../view/receveive-award'

class IndexRouter extends React.Component<any, any> {
  render () {
    return (
      <Router>
        <Switch>
          {/* 介绍页 */}
          <Route path={'/'} exact component={Introduction} />
          {/* 抽奖 */}
          <Route path={'/lottery'} component={Lottery} />
          {/* 领奖 */}
          <Route path={'/receiveAward'} component={ReceiveAward}></Route>
        </Switch>
      </Router>
    )
  }
}
export default IndexRouter
