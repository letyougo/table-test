import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





import T1 from './table-ant/demo1'
import T2 from './table-ant/demo2'
import T3 from './table-ant/demo3'
import T4 from './table-ant/demo4'
import T5 from './table-ant/demo5'
import T6 from './table-ant/demo6'
import T7 from './table-ant/demo7'
import Ant from './table-ant/ant'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 >展开与排序</h3>
        <T1></T1>

        <h3 >行内编辑</h3>
        <T2></T2>


        <h3 >按钮旁弹窗</h3>
        <T3></T3>

        <h3>合并单元格</h3>
        <T4></T4>

        <h3>loading</h3>
        <T5></T5>


        <h3>空数据</h3>
        <T6></T6>

        <h3>多选</h3>
        <T7></T7>


        <h4>ant</h4>
        <Ant></Ant>
      </div>
    );
  }
}



export default App;
