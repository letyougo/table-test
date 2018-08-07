import React, { Component } from 'react';


import {Table} from 'antd'
import Table2 from '../table/wrapper'


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default class Demo1 extends Component{
  render(){
    return (
      <div>
        <h2> 纵向滚动 </h2>
        <h3>hiui</h3>
        <Table2 dataSource={data} columns={columns} scroll={{ y: 240 }}/>

        <h3>antd</h3>

        {/*<Table dataSource={data} columns={columns} bordered={true}/>*/}
      </div>
    )
  }
}