import React, { Component } from 'react';

export default class Body extends Component{
  render(){
    let {columns,dataSource,addExpand} = this.props

    let i = 0
    let nodes = dataSource.map((item,k)=>{
      let tr

      //插入的那一行
      if(item.expand){

        let exoand = columns.find(o=>o.type==='expand')
        tr = <td colSpan={columns.length} key={'key-'+item.parent}>
          {exoand.render(dataSource[item.parent][item.dataIndex],dataSource[item.parent],item.parent)}
        </td>
      }else {
        //扩展项的占位dom
        tr =  columns.map(({title,dataIndex,key,render,type,width},j)=>{
          let td
          if(type === 'expand'){
            td = <div key={'td-'+k+'-'+j} onClick={addExpand} data-index={k} data-open={false}> > </div>
          }else {
            td = render(item[dataIndex],item,i)
          }
          return <td  key={'td-'+k+'-'+j} width={width}>{td}</td>
        })
        //动态插入的组件不累加
        i++
      }
      return <tr key={item.key || 'tr-'+k} >{tr}</tr>
    })

    return (
      <tbody>
      {nodes}
      </tbody>
    )
  }
}