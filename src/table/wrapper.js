import React, { Component } from 'react';
import Table from './table'
import className from 'classnames'
import './app.css'



const getScrollContent = ()=>{

}




export default class Wrapper extends Component{

  constructor(props){
    super(props);

    //只有dataSource,columns重造
    let {dataSource,columns} = props

    this.state = {
      dataSource,
      columns
    }
  }

  getScrollXContent(columns,headerColumns){

    let
        leftFiexColumns,
        rightFixColumns,
        content,
      {dataSource} = this.state,
      {scroll={x:undefined,y:undefined}} = this.props;

    let obj = this.getColumns(columns);

    leftFiexColumns= obj.leftFiexColumns
    rightFixColumns = obj.rightFixColumns
    columns = obj.columns





    if(leftFiexColumns.length ===0 && rightFixColumns.length === 0){
      content = this.getBaseContent()
    }else {
      let scrollTable = [
        <div className={'table-scroll'}>
          <div className={'table-body'} style={{overflowX:'scroll'}}>
            <Table style={{minWidth:scroll.x+'px'}} { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand},{headerColumns})  }  />
          </div>
        </div>
      ];

      if(leftFiexColumns.length>0){
        scrollTable.push(
          <div className={'table-fixed-left'}>
            <div className={'table-outer'}>
              <div className={'table-inner'}>
                <Table style={{width:'auto'}} className={'table-fixed'} { ...Object.assign({},{...this.props},{columns:leftFiexColumns},{dataSource},{addExpand:this.addExpand})  }  />
              </div>
            </div>
          </div>
        )
      }

      if(rightFixColumns.length>0){
        scrollTable.push(
          <div className={'table-fixed-right'}>
            <div className={'table-outer'}>
              <div className={'table-inner'}>
                <Table style={{width:'auto'}}  className={'table-fixed'} { ...Object.assign({},{...this.props},{columns:rightFixColumns},{dataSource},{addExpand:this.addExpand})  }  />
              </div>
            </div>
          </div>
        )
      }

      return (
        <div className={'table-content'}>
          {scrollTable}
        </div>
      )
    }
  }

  getScrollYContent(columns,headerColumns){
    let {dataSource} = this.state,
      {scroll={x:undefined,y:undefined}} = this.props;

    return (
      <div className={'table-content'}>
        <div className={'table-scroll'}>
          <div className={'table-head'}>
            <Table  { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand,body:false})  }  />
          </div>
          <div className={'table-body'} style={{maxHeight:scroll.y + 'px',overflowY:'scroll'}}>
            <Table  { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand,head:false},{headerColumns})  }  />
          </div>
        </div>
      </div>
    )
  }



  getScrollXYContent(headerColumns){

    let {
      leftFiexColumns,
      rightFixColumns,
      columns
    } = this.getColumns(),
      content,
      {dataSource} = this.state,
      {scroll={x:undefined,y:undefined}} = this.props


    if(leftFiexColumns.length ===0 && rightFixColumns.length === 0){
      content = this.getBaseContent()
    }else {
      let scrollTable = [
        <div className={'table-scroll'} >
          <div className={'table-header'} >
            <Table style={{width:scroll.x+'px'}} { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand})  } body={false}/>
          </div>
          <div className={'table-body'} style={{maxHeight:scroll.y+'px',overflowX:'scroll'}}>
            <Table style={{width:scroll.x+'px'}} { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand},{headerColumns})  }  header={false}/>
          </div>
        </div>
      ];

      // if(leftFiexColumns.length>0){
      //   scrollTable.push(
      //     <div className={'table-fixed-left'}>
      //       <div className={'table-header'} style={{overflowX:'scroll'}}>
      //         <Table style={{width:scroll.x+'px'}} { ...Object.assign({},{...this.props},{columns:leftFiexColumns},{dataSource},{addExpand:this.addExpand})  } body={false}/>
      //       </div>
      //       <div className={'table-outer'}>
      //         <div className={'table-inner'} style={{maxHeight:scroll.y + 'px',overflowY:'scroll'}}>
      //           <Table className={'table-fixed'} { ...Object.assign({},{...this.props},{columns:leftFiexColumns},{dataSource},{addExpand:this.addExpand})  } header={false} />
      //         </div>
      //       </div>
      //     </div>
      //   )
      // }

      // if(rightFixColumns.length>0){
      //   scrollTable.push(
      //     <div className={'table-fixed-right'}>
      //       <div className={'table-header'} style={{overflowX:'scroll'}}>
      //         <Table style={{width:scroll.x+'px'}} { ...Object.assign({},{...this.props},{columns:rightFixColumns},{dataSource},{addExpand:this.addExpand})  } body={false}/>
      //       </div>
      //       <div className={'table-outer'}>
      //         <div className={'table-inner'} style={{maxHeight:scroll.y + 'px',overflowY:'scroll'}}>
      //           <Table className={'table-fixed'} { ...Object.assign({},{...this.props},{columns:rightFixColumns},{dataSource},{addExpand:this.addExpand})  }  header={false}/>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // }

      return (
        <div className={'table-content'}>
          {scrollTable}
        </div>
      )
    }
  }

  getBaseContent(columns,headerColumns){
    let {dataSource} = this.state,
      {scroll={x:undefined,y:undefined}} = this.props;
    return (
      <div className={'table-content'}>
        <div className={'table-body'}>
          <Table  { ...Object.assign({},{...this.props},{columns},{dataSource},{addExpand:this.addExpand},{headerColumns})  }  />
        </div>
      </div>
    )
  }

  getColumns(){
    let
      {columns=[]} = this.props;

    let select = columns.find(({type})=>type==='select')
    let leftFiexColumns = columns.filter(({fixed})=>fixed && fixed === 'left');
    //将多选框放到左边，如果没有就放个null
    leftFiexColumns.unshift(select)

    //去掉null,否则遍历会报错
    leftFiexColumns = leftFiexColumns.filter(col=>!!col).map(item=>{
      item.width = item.width || '100px'
      return item
    });
    const rightFixColumns = columns.filter(({fixed})=>fixed && fixed === 'right').map(item=>{
      item.width = item.width || '100px'
      return item
    });;
    const commanColumns = columns.filter(({fixed})=>!fixed || (fixed !== 'left' && fixed !=='right'));

    //讲表格重新排序，并且去掉slelect ，因为是null
    columns = [...leftFiexColumns,...commanColumns,...rightFixColumns].filter(item=>item!==select).filter(col=>!!col);

    return {
      leftFiexColumns,
      rightFixColumns,
      columns
    }
  }

  getHeaderGroup(columns) {

    let bodyColumns = [],headerColumns=[]
    let deepMap = (columns,parent)=>{
      for(var key in columns){
        columns[key].depth = parent.depth+1
        let children = columns[key].children
        if(children && children.length>0){
          columns[key].isLast = false
          deepMap(children,columns[key])
            // delete columns[key].children
        }else {
          columns[key].render =columns[key].render ||  function(text,record,index){return text}
          columns[key].isLast = true

        }
        bodyColumns.push(columns[key])
      }
    }

    deepMap(columns,{depth:0,children:[]})

    let getNum=(obj)=>{
      let num =0
      var getn = (list)=>{
        for(var i=0;i<list.length;i++){
          let item = list[i]
          if(item.isLast){
            num++
          }
          if(item.children){
            getn(item.children)
          }
        }
      }
      getn([obj])
      return num

    }

    for(var key in bodyColumns){

      bodyColumns[key].headColSpan = getNum(bodyColumns[key],1)
    }

    console.log(bodyColumns,'body-columns')

    let a = [...bodyColumns].sort((pre,next)=>(pre.depth-next.depth))


    let max = [...bodyColumns].sort((pre,next)=>(next.depth-pre.depth))[0].depth


    //设置header-rowSpan
    let bd = bodyColumns.map(item=>{

      if(item.isLast){
        item.headRowSpan = max+1 - item.depth
      }

      return item
    })




    for(var i=1;i<max+1;i++){
      let arr = bd.filter(({depth})=>depth===i)
      headerColumns.push(arr)
    }

    bodyColumns = bodyColumns.filter(({isLast})=>isLast)
    return [headerColumns,bodyColumns]

  }

  render(){
    //多选配置
    let {columns,dataSource} = this.state,
      {rowSelection,scroll={x:undefined,y:undefined}} = this.props;

    columns = columns.map((item,index)=>{
      item.title = item.title || item.dataIndex
      item.key = item.key || item.dataIndex

      // item.render = item.render || function(text,record,index){return text};

      return item
    });


    //表头组columns处理

    let [headerColumns,bodyColumns] = this.getHeaderGroup(columns)
    columns = bodyColumns



    if(rowSelection){
      let {selectedRowKeys=[],onChange} = rowSelection
      columns.unshift({
        dataIndex:'name',
        width:'50px',
        type:'select',
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



    //固定列
    let content

    //不滚动
    if(!scroll.x && !scroll.y){
      content = this.getBaseContent(columns,headerColumns)
    }

    //列滚动
    if(scroll.x && !scroll.y){
      //将多选框放到最左边
      content = this.getScrollXContent(columns,headerColumns)
    }

    if(scroll.y && !scroll.x){
      content =this.getScrollYContent(columns,headerColumns)
    }

    if(scroll.x && scroll.y){

      //todo x和y同时滚动有bug
      content = this.getBaseContent(columns,headerColumns)
      // content = this.getScrollXYContent()
    }


    return (
      <div className={'table'}>
        {content}
      </div>
    )
  }

  addExpand=(e,item)=>{
    let {scroll={x:undefined,y:undefined}} = this.props;

    if(scroll.x){
      return console.warn('scroll 和 expand 不兼容')
    }


    let {index,open} = e.target.dataset
    index = parseInt(index)
    open = eval(open)

    let {dataSource} = this.props
    if(!open){
      dataSource.splice(index+1,0,{expand:true,parent:index,...{width:'50px'},...item})
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