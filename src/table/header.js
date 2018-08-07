import React, { Component } from 'react';

//固定表头
// export  class FiexHeader extends Component{
//   render(){
//     let {columns,scroll:{x,y},dataSource} = this.props
//     console.log(x,y,'scroll')
//     if(y && y>0){
//
//     }
//     //表头可以传组件，如果是文本就渲染文本
//     let nodes = columns.map(({title,dataIndex,key},index)=>{
//       console.log(title,dataIndex,key,index,'in-header')
//       return (
//         <td key={'head-'+index}>{typeof title==='function'?title():title}</td>
//       )
//     });
//
//     return (
//       <table border="1">
//         <colgroup>
//           {columns.map((item,index)=> <col
//             style={{width:item.width,minWidth:item.width}}
//             key={'col-'+index}>
//
//           </col>)}
//         </colgroup>
//         <thead>
//         <tr>
//           {nodes}
//         </tr>
//         </thead>
//       </table>
//     )
//   }
// }


//普通的表头
export class Header extends Component{
  render(){
    let {columns} = this.props

    //表头可以传组件，如果是文本就渲染文本



    let nodes = []
    //如果有colSpan的话，会将表头隐藏某些列，取决于colSpan的大小
    for(var i=0;i<columns.length;){
      let item = columns[i]
      let colSpan = columns[i].colSpan || 1
      nodes.push( <td colSpan={colSpan} key={'head-'+item.index}>{typeof item.title==='function'?item.title():item.title}</td>)
      i= i + colSpan
    }

    return (
      <thead>
      <tr>
        {nodes}
      </tr>
      </thead>
    )
  }
}