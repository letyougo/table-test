import React, { Component } from 'react';

import Table from './table'
import Column from './talble-column'



class Demo extends Component {

  constructor(props){
    super(props)
    this.state={
      list:[
        {id:1,name:'苏瑞',age:3,sex:'man',edit:false},
        {id:2,name:'黄警',age:4,sex:'man',edit:false},
        {id:3,name:'dongdong',age:6,sex:'man',edit:false},
        {id:4,name:'苏瑞1',age:3,sex:'man',edit:false},
        {id:5,name:'黄警2',age:4,sex:'man',edit:false},
        {id:6,name:'dongdong2',age:6,sex:'man',edit:false},
        {id:7,name:'nice',age:8,sex:'man',edit:false},
      ]
    }
  }

  render() {
    return (
      <div className="table"  ref={'name'}>
        <Table
          data={this.state.list}
          border
          selectKey={'id'}
          selectList={[1,2,3,4]}
        >
          <Column type='expand' />
          <Column type='select'/>
          <Column type='index'/>
          <Column
            label='序号'
            render={({text,record,index})=><div>{index+1}</div>}
          >
          </Column>
          <Column prop={'name'} label={'姓名'}> </Column>
          <Column prop={'age'} >  </Column>
          <Column prop={'sex'} label={'性别'}> </Column>
          <Column label={'操作'} prop={'name'}
            render={({text,record,index})=>(
              <div>
                <button style={{background:'blue',color:'white'}}>编辑 {text}+{index}</button>
                <button style={{background:'red',color:'white'}}>删除</button>
              </div>
            )}
          >
          </Column>
        </Table>

      </div>
    );
  }
}

export default Demo;
