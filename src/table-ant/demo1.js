import React, { Component } from 'react';
import Table from './table'


class Demo extends Component {



  state= {
    dataSource:  [{
      key: '1',
      name: '胡彦斌',
      age: 1,
      address: '西湖区湖底公园1号',
      selected:false,
    },


      {
      key: '2',
      name: '胡彦祖',
      age: 2,
      address: '西湖区湖底公园1号',
      selected:true
    },
      {
        key: '3',
        name: '胡彦祖',
        age: 3,
        address: '西湖区湖底公园1号',
        selected:true
      },
      {
        key: '4',
        name: '胡彦祖',
        age: 0,
        address: '西湖区湖底公园1号',
        selected:true
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

    console.log('change 1',value)
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

                      <form>
                        <h3>编辑{index}</h3>
                        <p>
                          <label>名字</label>
                          <input value={record.name} onChange={(e)=>{
                            change(index,'name',e.target.value)
                          }}/>
                        </p>
                        <p>
                          <label>年龄</label>
                          <input value={record.age} onChange={(e)=>change(index,'age',e.target.value)}/>
                        </p>
                        <p>
                          <button>确定</button>
                        </p>
                      </form>
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
                render(text,record,index){
                  return (
                    <a href='#'>{text}-{index}</a>
                  )
                },
                header(text,record,index){
                  return (
                    <div>

                    </div>
                  )
                }
              },
              {
                title:()=><div onClick={sortByAge}> 点击我，年龄排序 </div>,
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
}

export default Demo;
