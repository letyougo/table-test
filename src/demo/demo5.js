import React, { Component } from 'react';


import {Table} from 'antd'
import Table2 from '../table/wrapper'

const columns = [

  {
    type:'expand',
    render(text,record,index){
      return (
        <div>
          <form>
            <div style={{padding:'20px'}}>
              <p>
                姓名<input value={record.name}/>
              </p>
              <p>

                年龄<input value={record.age}/>
              </p>
              <button>修改</button>
            </div>

          </form>
        </div>
      )
    }
  },
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

];

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
  render(){
    return (
      <div>
        <h2> 扩展一行 </h2>
        <h3>hiui</h3>
        <Table2 dataSource={data} columns={columns}  />

        <h3>antd</h3>

        {/*<Table dataSource={data} columns={columns} bordered={true}/>*/}
      </div>
    )
  }
}