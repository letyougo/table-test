import React, { Component } from 'react';
import ReactDOM from 'react-dom'

function insertAfter(newElement,targetElement){
  let parent=targetElement.parentNode;
  if(parent.lastChild===targetElement){
    parent.appendChild(newElement);
  }else{
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}


class Header extends Component{
  render(){
    let {columns} = this.props




    //表头可以传组件，如果是文本就渲染文本
    let nodes = columns.map(({title,dataIndex,key},index)=>{
      return (
        <td key={'head-'+index}>{typeof title==='function'?title():title}</td>
      )
    })

    return (
      <thead>
        <tr>
          {nodes}
        </tr>
      </thead>
    )
  }
}

class Body extends Component{
  render(){
    let {columns,dataSource} = this.props

    let nodes = dataSource.map((item,i)=>{
      let tr

      if(item.expand){
        tr = <td colSpan={dataSource.length}>{item.expand(undefined,item,i)}</td>
      }else {
        tr =  columns.map(({title,dataIndex,key,render},j)=>{
          return <td key={'key-'+j} key={'td-'+i+'-'+j}>{render(item[dataIndex],item,i)}</td>
        })
      }


      return <tr key={item.key}>{tr}</tr>
    })



    return (
      <tbody>
      {nodes}
      </tbody>
    )
  }
}



class Table extends Component {



  constructor(props){
    super(props)
    let {columns,selectedKey,dataSource} = props
    this.state = {
      columns:columns,
      dataSource
    }
  }


  openRow(i){
    let {columns} = this.state
    columns[i].toggle = !columns[i].toggle

    this.setState({columns})
  }


  getExpand=(text,record,index,expand)=>{
    let {insertRow} = this



    return <div onClick={(e)=>insertRow(text,record,index,expand)} key={'expand-'+index} ref={'expand-'+index}>action</div>
  }

  insertRow=(text,record,index,expand)=>{
    let tr = this.refs.table.querySelectorAll('tbody tr')[index]
    let {columns,dataSource} = this.state

    let open = eval(tr.getAttribute('open'))

    this.openRow(index)
    if(!open){
      // let row = {
      //   key:'expand-'+(index+1),
      //   expand,
      //
      // }
      // dataSource.splice(index+1,0,row)


      let newRow = document.createElement('tr')
      insertAfter(newRow,tr)
      ReactDOM.render(expand(text,record,index), newRow)
      tr.setAttribute('open',true)



    }else {
      // dataSource.splice(index+1,1)

      // console.log(dataSource)
      let row = this.refs.table.querySelectorAll('tbody tr')[index+1]
      this.refs.table.querySelector('tbody').removeChild(row)
      ReactDOM.unmountComponentAtNode(row)
      tr.setAttribute('open',false)

    }
    // this.setState({dataSource})
  }

  render() {
    let {columns,dataSource} = this.state

    let {getExpand} = this
    //给属性添加默认值，防止用户漏传参数

    let col = columns.map((item,index)=>{
      item.title = item.title || item.dataIndex
      item.key = item.key || item.dataIndex
      item.render = item.render || function(text,record,index){return text}

      if(item.expand){
        item.render=(text,record,index)=>getExpand(text,record,index,item.expand)
      }

      return item
    })
    return (
      <div className="table">
        <table border="1" ref={'table'}>
          <Header columns={columns}/>
          <Body columns={columns} dataSource={dataSource} ref='body'/>
        </table>

      </div>
    );
  }

  componentWillReceiveProps(state){
    // console.log(state)
    // this.setState({dataSource:state.dataSource})
  }
}

export default Table;
