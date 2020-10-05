import React from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset'
import { AnswersList } from './components/index'



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      //回答コンポーネントに表示するデータ [{key: value},{key: value}]
      //その中身はanswer: { content: string, nextId: string }

      chats: [], //チャットコンポーネントに表示するデータ
      currentId: "init",　//現在の質問ID
      dataset: defaultDataset, //デフォルトでdataset.jsの内容が渡ってくる
      open: false,　//問い合わせモーダルの開閉を管理
    }
  }

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

  componentDidMount() {
    this.initAnswer()
  }

  render() {
    return (
      <section className="c-section" >
        <div className="c-box">
          <AnswersList answers={this.state.answers} />
        </div>
      </section >
    );
  }
}

export default App;
