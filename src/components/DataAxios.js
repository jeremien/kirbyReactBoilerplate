import React from 'react';
import axios from 'axios';

class DataAxios extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: []};
  }

  componentDidMount() {
    axios.get(`http://localhost/www/kirby-react/portfolio`)
         .then((res) => {
           this.setState({
             items: res.data
           })
         })
  }

  render() {
    return (
      <div>{this.state.items.map((item, i) => {
        return (<li key={i}>{item.title}</li>);
      })}</div>
    );
  }

};

export default DataAxios;
