import React from 'react'
//Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png'
import Torahack from '../assets/img/torahack.png'

const Chat = (props) => {
  //typeがquestionかanswerなのかを、評価
  //これで、質問（左表示）、回答（右表示）かを分けている
  const isQuestion = (props.type === 'question')
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
  //isQuestionがtrueなら、p-chat__rowを適用
  //p-chat__rowは左から表示　p-chat__reverseは右表示

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Torahack} />
        ) : (
            <Avatar alt="icon" src={NoProfile} />
          )}

      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat
