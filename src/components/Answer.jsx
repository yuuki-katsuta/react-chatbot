import React from 'react'

//Material UIの読み込み
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button": {
      borderColor: "#FFB549",
      color: "#FFB549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#FFB549",
        color: "#fff"
      }
    }
  })
))

const Answer = (props) => {
  const classes = useStyles();
  //useStylesの返り値をclassesに入れる
  return (
    <Button
      className={classes.button}
      variant="outlined" onClick={() => { props.select(props.content, props.nextId) }}>
      {props.content}
    </Button>
  )
}
export default Answer
//onClick={() => { props.select(props.content, props.nextId) }}で、クリックすると
//その回答内容と、回答のnextIDを引数にとりselectAnswer()メソッドを実行する

//{props.content}で親AnswwrsListから受け取ったcontentを表示している
//親でループしていたものが一つずつ渡されて、そのたびに表示される??
