import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'




import Demo1 from './demo/demo1'
import Demo2 from './demo/demo2'



class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<h3 >展开与排序</h3>*/}
        {/*<T1></T1>*/}

        {/*<h3 >行内编辑</h3>*/}
        {/*<T2></T2>*/}


        {/*<h3 >按钮旁弹窗</h3>*/}
        {/*<T3></T3>*/}

        {/*<h3>合并单元格</h3>*/}
        {/*<T4></T4>*/}

        {/*<h3>loading</h3>*/}
        {/*<T5></T5>*/}


        {/*<h3>空数据</h3>*/}
        {/*<T6></T6>*/}

        {/*<h3>多选</h3>*/}
        {/*<T7></T7>*/}

        <Demo1/>
        {/*<Demo2/>*/}
      </div>
    );
  }
}



export default App;
