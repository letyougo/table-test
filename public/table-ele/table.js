import React, { Component } from 'react';

//给某些类型的表头加标题
function reset(props) {
  return props.map(({label,prop,type,render})=>{
    label = label || prop
    if(type === 'expand'){
      label = '>'
    }
    if(type === 'select'){
      label = '选中状态'
    }
    return {
      label,
      prop,
      type,
      render
    }
  })
}

//render 优先级最高
//其次是 type
//最后是 prop


class Header extends Component{
  render(){
    let {head} = this.props

    return (
      <thead>
        <tr>{head.map((item,i)=><td key={'head-'+i}>{item.label}</td>)}</tr>
      </thead>
    )
  }
}

class Body extends Component{
  render(){
    let that = this
    let {data=[],selectKey,selectList=[],head} = this.props
    let tbodyData = data.map((item,i)=>{
      return head.map(({label,prop,render,type},j)=>{


        if(render){
          return render({text:item[prop],record:item,index:i})
        }

        if(type === 'expand'){
          return <div onClick={that.expand}> > </div>
        }
        if(type === 'select'){
          if(selectList.includes(item[selectKey])){
            return <span style={{color:'#ff6600'}}>已被选中</span>
          }else{
            return <span >未被选中</span>
          }
        }

        return item[prop]
      })
    })

    let tbody = tbodyData.map((tr,i)=>{
      return (
        <tr key={'tr-'+i}>
          {tr.map((td,j)=><td key={'td-'+j}>{td}</td>)}
        </tr>
      )
    })

    return(
      <tbody>
      {tbody}
      </tbody>
    )
  }
}

export default class Table extends Component{
  constructor(props){
    super(props)

  }

  render(){
    let

      {children=[],data=[],border=false,selectKey='id',selectList=[]} = this.props
      let head = children.map(item=>item.props)
      head = reset(head)

    return (
      <div>
        <table border='1'>
          <Header head={head}/>

          <Body data={data} selectKey={selectKey} selectList={selectList} head={head}/>
        </table>
      </div>
    )
  }
}