import React from 'react';
import $ from 'jquery';

class DataAjax extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []};
}

componentDidMount() {
  $.ajax({
    url: 'http://localhost/www/kirby-react/portfolio',
    dataType: 'json',
    cache: false,
    success: function(data) {
      console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(status, err);
    }.bind(this)
  });
}

render() {
    return (
      <div>data ajax</div>
    )
  }
}

export default DataAjax;
