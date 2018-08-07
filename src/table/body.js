import React, { Component } from 'react';

export default class Body extends Component{
  render(){
    let {columns,dataSource,addExpand} = this.props



    //表头分组

    let i = 0
    let nodes = dataSource.map((item,k)=>{
      let colSpan=1,tr=[]
      if(item.expand){
        let parent = dataSource[item.parent]
        let exoand = columns.find(o=>o.type==='expand')
        tr = <td colSpan={columns.length} key={'key-'+item.parent}>
          {exoand.render(dataSource[item.parent][item.dataIndex],dataSource[item.parent],item.parent)}
        </td>
      }else {
        //扩展项的占位dom

        //这里只能用for循环，因为会有表格 行列 合并的情况，要改变循环的顺序
        for (let j=0;j<columns.length;){
          let obj = columns[j]
          let td

          let rowSpan = 1

          if(obj.type === 'expand'){
            td = <div key={'td-'+k+'-'+j} onClick={(e)=>addExpand(e,obj)} data-index={k} data-open={false}> > </div>
          }else {

            td = obj.render(item[obj.dataIndex],item,i)

            //做判断的原因是？
            if(td && td.props && td.props.colSpan){
              colSpan = td.props.colSpan
            }
            if(td && td.props && td.props.hasOwnProperty('rowSpan')){
              rowSpan = td.props.rowSpan
            }
            if(td && td.children){
              td = td.children
            }
            // j=j+colSpan
            //表格溢出开关
            // if(colSpan>0){
            //   j=j+colSpan-1
            // }
          }
          if(parseInt(rowSpan) !== 0){
            tr.push(<td  rowSpan={rowSpan} colSpan={colSpan} data-span={colSpan} key={'td-'+k+'-'+j} style={{width:item.width+'px'}}>{td}</td>)
          }else {
            console.log(rowSpan,'null rosspan')
            tr.push(null)
          }
          j = j + colSpan
        }
        //这个i 是在动态插入行的时候，给render的回掉函数的 索引
        i++
        //动态插入的组件不累加
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