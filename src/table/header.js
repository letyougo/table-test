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
    let {columns,headerColumns} = this.props

    //表头可以传组件，如果是文本就渲染文本
    let nodes = []


    //固定表头分组，这里好难。。
    console.log(headerColumns.length,'headerColumns.length')
    if(headerColumns && headerColumns.length>1){
      console.log('walk pu')
      nodes = headerColumns.map(columns=>{
        let tr = []
        for(var i=0;i<columns.length;i++){
          let colSpan = columns[i].headColSpan || 1
          tr.push( <th colSpan={colSpan} rowSpan={columns[i].headRowSpan} key={'head-'+columns[i].key || columns[i].dataIndex}>{columns[i].title}</th>)

        }

        return <tr>{tr}</tr>
      })

    }else {
      console.log('walk down')
      for(var i=0;i<columns.length;){
        let item = columns[i]
        let colSpan = columns[i].colSpan || 1
        nodes.push( <th colSpan={colSpan} key={'head-'+item.key || item.dataIndex}>{typeof item.title==='function'?item.title():item.title}</th>)
        i= i + colSpan
      }

      nodes = <tr>{nodes}</tr>
    }

    return (
      <thead>
      {nodes}
      </thead>
    )
  }
}