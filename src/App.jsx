import React from 'react';
import { Route, Switch } from 'react-router';
import Join from './components/Join/Join';
import RoomChat from './components/RoomChat/RoomChat';

const App = () => (
    <Switch>
      <Route exact path='/' component={Join}/>
      <Route path='/chat-room' component={RoomChat}/>
    </Switch>
)

export default App;