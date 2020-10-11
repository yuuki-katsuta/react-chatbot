import React from 'react'
import { Chat } from './index'
//material UI
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() => (
  createStyles({
    "chats": {
      height: 400,
      padding: 0,
      overflow: 'auto',
      //高さ４００を超えたらスクロールバーを表示する設定
    }
  })
));

const Chats = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.chats} id={"scroll-area"}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  )
}
//mapにより、chatには{text:string, type:string}が入ってくる
export default Chats
