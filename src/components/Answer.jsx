import React from 'react'

//Material UIの読み込み
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = (props) => {
  //const classes = useStyles();
  return (
    <Button variant="contained" onClick={() => { props.select(props.content, props.nextId) }}>
      {props.content}
    </Button>
  )
}
export default Answer
//onClick={() => { props.select(props.content, props.nextId) }}で、クリックすると
//その回答内容と、回答のnextIDを引数にとりselectAnswer()メソッドを実行する

//{props.content}で親AnswwrsListから受け取ったcontentを表示している
//親でループしていたものが一つずつ渡されて、そのたびに表示される??
