import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset'

//エントリポイントからimport(名前付きexportに対するimport)
import { AnswersList, Chats } from './components/index'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      //回答コンポーネントに表示するデータ [{key: value},{key: value}]
      //その中身はanswer: { content: string, nextId: string }

      chats: [],
      //チャットコンポーネントに表示するデータ
      //chatsは、[{key: value},{key: value}]
      //chatは、{text:string, type:string}の連想配列

      currentId: "init",　//現在の質問ID
      dataset: defaultDataset, //デフォルトでdataset.jsの内容が渡ってくる
      open: false,　//問い合わせモーダルの開閉を管理
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  //次のクエスチョンを表示する
  displayNextQuestion = (nextQuestionId) => {

    const chats = this.state.chats //現在のchats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({

      //回答コンポーネントに表示するデータとチャットコンポーネントに表示するデータをセットする

      //回答コンポーネントに表示するデータ
      answers: this.state.dataset[nextQuestionId].answers,  //nextQuestionIdは最初はinit
      //ここでanswerの配列には、{ content: "仕事を依頼したい", nextId: "job_offer" },のようなデータが入る

      //チャットコンポーネントに表示するデータ
      chats: chats,
      //chatsは、[{key: value},{key: value}]
      //chatは、{text:string, type:string}の連想配列

      currentId: nextQuestionId　//現在の質問ID
    })
    console.log(chats)
    console.log(this.state.dataset[nextQuestionId].answers)
  }

  //回答したときの処理(回答がchatに追加される)
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    //selectedAnswerで回答を受け取る
    switch (true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        //QuestionIdがinitじゃないときは、受け取った回答をchatのtextに入れて配列を作る
        const chat = {
          text: selectedAnswer,
          type: 'answer'
        }
        const chats = this.state.chats  //現在のchats配列を取得
        chats.push(chat)　//回答を現在の配列に入れ込む

        this.setState({
          chats: chats
          //this.state.chats.push(chat)では直接chatを変更しているのでダメ
          //ここでstate が変更されたのでChatコンポーネントがrenderされる
        })

        //回答したら次の質問を表示する
        this.displayNextQuestion(nextQuestionId)
        break
    }
  }

  componentDidMount() {
    const initAnswer = ""
    this.selectAnswer(initAnswer, this.state.currentId)
    //this.state.currentIdは初期状態でinit
    //マウント時（初期状態）では回答していないため、selectedAnswerは空白
  }

  render() {
    return (
      <section className="c-section" >
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section >
    );
  }

  //answers={this.state.answers}でthis.state.answersを渡したから。
  /*
  [
    { content: "仕事を依頼したい", nextId: "job_offer" },
    { content: "エンジニアのキャリアについて相談したい", nextId: "consultant" },
    { content: "学習コミュニティについて知りたい", nextId: "community" },
    { content: "お付き合いしたい", nextId: "dating" },
  ],
  子のコンポーネントで、連想配列を扱える
  */

  /*
  //answers: []の空の配列に　dataset.jsのデータを入れる関数を作る
  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    //datasetにはデフォルトでdataset.jsの内容が渡ってくる
    //そのdataset.jsのinitプロパティ（現在の質問ID）での回答を変数に代入
    const initAnswers = initDataset.answers
    this.setState({
      answers: initAnswers
    })
  }


  //chats: []の空の配列に　dataset.jsのquestionデータを入れる関数を作る
  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId]
    const chat = {
      text: initDataset.question,
      type: 'question'
    }
    const chats = this.state.chats //カラの配列
    chats.push(chat)
    //[{text:string, type:string}, {~}] の形

    this.setState({
      chats: chats
      //this.state.chats.push(chat)では直接chatを変更している
    })
  }
  */
}

export default App;
