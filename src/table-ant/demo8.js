import React, { Component } from 'react';
import Table from './table'
import pover from './pover'

class Demo extends Component {

  state= {
    dataSource:  [],
    selectedRowKeys:['胡彦祖4']
  }

  sortByAge=()=>{
    let {dataSource} = this.state
    dataSource = dataSource.sort((pre,next)=>pre.age-next.age)
    console.log(dataSource)
    this.setState({dataSource})
  }

  change=(index,key,value)=>{
    console.log('change',)
    let {dataSource} = this.state
    dataSource[index][key]=value
    this.setState({dataSource:JSON.parse(JSON.stringify(dataSource))})
  }


  render() {
    let {dataSource,value,selectedRowKeys} = this.state
    console.log(value,'b')
    let {change} = this
    var that = this
    let {sortByAge} = this


    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys,'onchange')
        this.setState({selectedRowKeys})
      },
      getCheckboxProps: record => {
        console.log('record is ',record)
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
                title:'名字'
              },
              {
                title:'点击我，年龄排序',
                dataIndex:'age',
                key:'age',
              },
            ]
          }
          dataSource={dataSource}
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