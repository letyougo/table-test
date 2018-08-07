import React, { Component } from 'react';

import Body from './body'
import {Header} from './header'


export default class Table extends Component{
  render(){
    let {columns,dataSource,className,style,head=true,body=true} = this.props

    return (
      <table className={className} style={style}>
        <colgroup>
          {columns.map((item,index)=>{
            return (
              <col
                style={{width:item.width ,minWidth:item.minWidth+'px'}}
                key={'col-'+index} >

              </col>
            )
          })}
        </colgroup>
        {head?
          <Header {...this.props}/>:null
        }
        {body?
          <Body {...this.props}/>:null
        }

      </table>
    )
  }
}