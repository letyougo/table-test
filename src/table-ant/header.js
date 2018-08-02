import React, { Component } from 'react';

//固定表头
export  class FiexHeader extends Component{
  render(){
    let {columns,scroll:{x,y},dataSource} = this.props
    console.log(x,y,'scroll')
    if(y && y>0){

    }
    //表头可以传组件，如果是文本就渲染文本
    let nodes = columns.map(({title,dataIndex,key},index)=>{
      return (
        <td key={'head-'+index}>{typeof title==='function'?title():title}</td>
      )
    });

    return (
      <table border="1">
        <colgroup>
          {columns.map(({width},index)=> <col style={{width,minWidth:"100px"}} key={'col-'+index}></col>)}
        </colgroup>
        <thead>
          <tr>
            {nodes}
          </tr>
        </thead>
      </table>
    )
  }
}


//普通的表头
export class Header extends Component{
  render(){
    let {columns} = this.props

    //表头可以传组件，如果是文本就渲染文本
    let nodes = columns.map(({title,dataIndex,key},index)=>{
      return (
        <td key={'head-'+index}>{typeof title==='function'?title():title}</td>
      )
    });

    return (
      <thead>
      <tr>
        {nodes}
      </tr>
      </thead>
    )
  }
}