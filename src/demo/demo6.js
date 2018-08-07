import React, { Component } from 'react';


import {Table} from 'antd'
import Table2 from '../table/wrapper'

import pover from '../table/pover'

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park',
}];
export default class Demo1 extends Component{

  state={
    dataSource:data
  }

  render(){


    const that = this
    const columns = [


      { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
      { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
      { title: 'Column 1', dataIndex: 'address', key: '1' },
      { title: 'Column 2', dataIndex: 'address', key: '2' },
      { title: 'Column 3', dataIndex: 'address', key: '3' },
      { title: 'Column 4', dataIndex: 'address', key: '4' },
      { title: 'Column 5', dataIndex: 'address', key: '5' },
      { title: 'Column 6', dataIndex: 'address', key: '6' },
      { title: 'Column 7', dataIndex: 'address', key: '7' },
      { title: 'Column 8', dataIndex: 'address', key: '8' },
      {
        title:'action',
        render(text,record,index){
          return (
            <div>
              {/*<button onChange={(e)=>that.pover(e,index)}>修改</button>*/}
              <button onClick={(e)=>that.pover2(e,index)}>删除</button>
            </div>
          )
        }
      },
    ];

    return (
      <div>
        <h2> 右上角操作 </h2>
        <h3>hiui</h3>
        <Table2 dataSource={data} columns={columns}  />

        <h3>antd</h3>

        {/*<Table dataSource={data} columns={columns} bordered={true}/>*/}
      </div>
    )
  }


  pover2=(e,index)=>{

    let that = this
    let {dataSource} = that.state
    pover({
      title: '请输入内容',
      action:'input',
      target:e.target,
      onOk(value){
        dataSource[index].age = value

        that.setState({dataSource})
      }
    })
  }
  //
  // pover=(e,index)=>{
  //
  //   let that = this
  //   pover({
  //     title: <div>ssss:ok</div>,
  //     action:'input',
  //     target:e.target,
  //     onOk(value){
  //       let {dataSource} = that.state
  //       dataSource.splice(index,1)
  //       that.setState({dataSource})
  //     }
  //   })
  // }
}