import React, { Component } from 'react';
import Table from './table'
import pover from './pover'

class Demo extends Component {



  state= {
    dataSource:  [{
      key: '1',
      name: '胡彦斌',
      age: 1,
      address: '西湖区湖底公园1号',
      selected:false,
      edit:false,
    },


      {
      key: '2',
      name: '胡彦祖',
      age: 2,
      address: '西湖区湖底公园1号',
      selected:true,
        edit:false,
    },
      {
        key: '3',
        name: '胡彦祖',
        age: 3,
        address: '西湖区湖底公园1号',
        selected:true,
        edit:false,
      },
      {
        key: '4',
        name: '胡彦祖',
        age: 0,
        address: '西湖区湖底公园1号',
        selected:true,
        edit:false,
      }],
    value:'11'
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
    let {dataSource,value} = this.state
    console.log(value,'b')
    let {change} = this
    var that = this
    let {sortByAge} = this
    return (
      <div className="App">
        <Table
          selectedKey={'selected'}

          columns={

            [
              {
                title:()=><div onClick={sortByAge}>展开 </div>,
                type:'expand',
                render:(text,record,index)=>{
                  console.log('in render ',record)
                  return (
                    <div>
                        sss
                    </div>
                  )
                }
              },
              {
                title:()=><div onClick={sortByAge}>全选或者反选 </div>,
                render:(text)=><input type={'checkbox'} checked={text}/>
              },

              {
                dataIndex:'name',
                key:'name',

              },
              {
                title:()=><div onClick={sortByAge} > 点击我，年龄排序 </div>,
                dataIndex:'age',
                key:'age',
                render(text,record,index){
                  return (
                    <div onClick={(e)=>that.pover2(e,index)}>
                      {text}
                    </div>
                  )
                }

              },
              {
                title:'操作',
                fixed:'left',
                render:(text,record,index)=><div>
                  <div>

                    <a href='javascript:void(0)' onClick={(e)=>change(index,'edit',!record.edit)}>edit</a>
                    &nbsp;&nbsp;
                    <a href='javascript:void(0)' onClick={(e)=>that.pover(e,index)}>删除</a>
                  </div>
                </div>
              }
            ]
          }


          dataSource={dataSource}

          header={[
            {title:'左边',span:2},
            {title:'右边',span:3}
          ]}
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
