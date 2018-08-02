import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames'


import {FiexHeader,Header} from './header'
import Body from './body'


class Table extends Component {
  constructor(props){
    super(props)

    //只有dataSource,columns重造
    let {dataSource,columns,...prop} = props
    this.state = {
      dataSource,
      columns
    }
  }

  render() {
    let {columns,dataSource} = this.state,
      {header=[],loading = false,rowSelection,scroll={x:undefined,y:undefined}} = this.props,
      {addExpand} = this

    columns = columns.map((item,index)=>{
      item.title = item.title || item.dataIndex
      item.key = item.key || item.dataIndex
      item.render = item.render || function(text,record,index){return text}
      return item
    })

    //固定列
    let fixedColumns = columns.filter(({fixed})=>!!fixed).map(item=>{
      item.dir = item.fixed
      delete item.fixed
      return item
    })

    //多选配置
    if(rowSelection){
      let {selectedRowKeys=[],onChange} = rowSelection
      columns.unshift({
        dataIndex:'name',
        width:'50px',
        title:()=>{
          let {getCheckboxProps=(record)=>({ disabled:false,dataName:record.key })} = rowSelection
          let data = dataSource.filter(record=>!getCheckboxProps(record).disabled)
          return (

            <input
              type={'checkbox'}
              checked={selectedRowKeys.length === data.length}
              onChange={(e)=>{
                if(e.target.checked){
                  onChange(data.map(record=>record.key),data)
                }else {
                  onChange([],[])
                }}
              }
            />
          )
        },
        render:(text,record,index)=>{
          let {getCheckboxProps=(record)=>({ disabled:false,dataName:record.key })} = rowSelection
          //todo dataName 是干嘛的不明白
          let {disabled,dataName} = getCheckboxProps(record)
            return (
              <input
                type={'checkbox'}
                checked={selectedRowKeys.includes(record.key)}
                disabled={disabled}
                onChange={(e)=>{
                  let rows = []
                  let selected = selectedRowKeys.includes(record.key)
                  if(selected){
                    selectedRowKeys.splice(selectedRowKeys.indexOf(record.key),1)
                  }else {
                    rows.push(dataSource[index])
                    selectedRowKeys.push(record.key)
                  }
                  onChange(selectedRowKeys,rows)
                }}
              />
            )
          }
      })
    }

    return (
      <div className={classNames('table')}>
        <div className={classNames('table-content')}>

          {scroll.y ? <div className={classNames('table-head')}>
              <FiexHeader columns={columns} scroll={scroll} dataSource={dataSource}/>
            </div> : undefined
          }

          <div className={classNames('table-body')}>
            <table border="1" >
              <colgroup>
                {columns.map(({width},index)=><col style={{width,minWidth:'100px'}} key={'col-'+index}></col>)}
              </colgroup>
              {
                scroll.y ? null :
                  <Header columns={columns}/>
              }
              {dataSource.length ?
                <Body columns={columns} dataSource={dataSource} addExpand={addExpand} scroll={scroll}/> : <tbody><tr>数据为空</tr></tbody>}

              {fixedColumns.length ?
                <Table columns={fixedColumns} dataSource={dataSource}/> : null
              }

            </table>
            {loading ? <div className={'loading'}>加载中...</div> : null}
          </div>
        </div>
      </div>
    );
  }

  addExpand=(e)=>{
    let {index,open} = e.target.dataset
    index = parseInt(index)
    open = eval(open)

    let {dataSource} = this.props
    if(!open){
      dataSource.splice(index+1,0,{expand:true,parent:index})
    }else {
      dataSource.splice(index+1,1)
    }
    e.target.dataset.open = !open
    this.setState({dataSource})
  };

  componentWillReceiveProps({dataSource,columns,...prop}){
    //只有dataSource,columns重造
    this.setState({dataSource,columns})
  }
}

export default Table;
