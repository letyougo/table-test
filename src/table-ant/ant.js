import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  fixed:'left',
}, {
  title: 'Age',
  dataIndex: 'age',
  fixed:'left'
}, {
  title: 'Address',
  dataIndex: 'address',
  width:'100px'
},
  {
    title: 'Name',
    dataIndex: 'name',
    width:"300px"
  }, {
    title: 'Age',
    dataIndex: 'age',
    width:"400px"
  }, {
    title: 'Address',
    dataIndex: 'address',
  },


];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Ant extends Component{

  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys,'rows',selectedRows);
    this.setState({ selectedRowKeys });
  }

  render(){

    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      getCheckboxProps: record => ({
        disabled: record.key%2 === 1,
        name: record.name,
      }),
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <Table columns={columns} dataSource={data} scroll={{x:300}}/>
    )
  }
}

export default Ant