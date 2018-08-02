import React, { Component } from 'react';


class Wrapper extends Component{
  render(){
    return (

    )
  }

  componentWillReceiveProps({dataSource,columns,...prop}){
    //只有dataSource,columns重造
    this.setState({dataSource,columns})
  }
}