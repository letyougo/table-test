import React, { Component } from 'react';


class Header extends Component{
  render(){
    let {columns} = this.props

    return (
      <thead>
        <tr>
          {columns.map(({title,dataIndex,key})=><td key={'head-'+key}>{title}</td>)}
        </tr>
      </thead>
    )
  }
}

class Body extends Component{
  render(){
    let {columns,dataSource} = this.props

    let nodes = dataSource.map((item,i)=>{
      let tr =  columns.map(({title,dataIndex,key},j)=>{
        return <td key={'key-'+j}>{item[dataIndex]}</td>
      })
      return <tr key={'tr'+i}>{tr}</tr>
    })



    return (
      <tbody>
      {nodes}
      </tbody>
    )
  }
}

class Table extends Component {
  render() {
    let {children,columns,dataSource} = this.props
    return (
      <div className="table">
        <table border="1">
          <Header columns={columns}/>
          <Body columns={columns} dataSource={dataSource}/>
        </table>

      </div>
    );
  }
}

export default Table;
