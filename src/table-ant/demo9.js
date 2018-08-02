import React, { Component } from 'react';
import Table from './table'
import pover from './pover'

class Demo extends Component {

  state= {
    dataSource: [{
      key: 'key-1',
      name: '胡彦斌1',
      age: 1,
      address: '西湖区湖底公园1号',
      selected:false,
      edit:false,        sex:"man",
    },
      {
        key: 'key-2',
        name: '胡彦祖3',
        age: 2,
        address: '西湖区湖底公园1号',
        selected:true,
        edit:false,        sex:"man",
      },
      {
        key: 'key-3',
        name: '胡彦祖3',
        age: 3,
        address: '西湖区湖底公园1号',
        selected:true,
        edit:false,        sex:"man",
      }
    ],
    selectedRowKeys:['胡彦祖4']
  }

  sortByAge=()=>{
    let {dataSource} = this.state
    dataSource = dataSource.sort((pre,next)=>pre.age-next.age)

    this.setState({dataSource})
  }

  change=(index,key,value)=>{

    let {dataSource} = this.state
    dataSource[index][key]=value
    this.setState({dataSource:JSON.parse(JSON.stringify(dataSource))})
  }


  render() {
    let {dataSource,value,selectedRowKeys} = this.state

    let {change} = this
    var that = this
    let {sortByAge} = this


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {

        this.setState({selectedRowKeys})
      },
      getCheckboxProps: record => {
        return {
          disabled: record.age === 3, // Column configuration not to be checked
          dataName: record.name,
        }
      },
      selectedRowKeys
    };
    return (
      <div className="App">
        <Table
          rowSelection={rowSelection}
          columns={
            [
              {
                dataIndex:'name',
                key:'name',
                title:'名字',
                width:'200px'
              },
              {
                title:'点击我，年龄排序',
                dataIndex:'age',
                key:'age2',
                width:"300px",
                fixed:'left'
              },
              {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
              },
              {
                title:'点击我，年龄排序',
                dataIndex:'age',
                key:'ages',
              },
            ]
          }
          dataSource={dataSource}
          // scroll={{y:'300px'}}
        />
      </div>
    );
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

  pover=(e,index)=>{

    let that = this
    pover({
      title: <div>ssss:ok</div>,
      // action:'input',
      target:e.target,
      onOk(value){
        let {dataSource} = that.state
        dataSource.splice(index,1)
        that.setState({dataSource})
      }
    })
  }
}

export default Demo;
