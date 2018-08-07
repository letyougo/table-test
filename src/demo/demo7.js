import React, { Component } from 'react';


import {Table} from 'antd'
import Table2 from '../table/wrapper'

import pover from '../table/pover'


const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
export default class Demo1 extends Component{

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };


  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render(){
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };


    return (
      <div>
        <h2> 多选 </h2>
        <h3>hiui</h3>
        <Table2 rowSelection={rowSelection} columns={columns} dataSource={data} />

        <h3>antd</h3>

        {/*<Table dataSource={data} columns={columns} bordered={true}/>*/}
      </div>
    )
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