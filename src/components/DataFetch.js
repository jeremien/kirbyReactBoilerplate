import React from 'react';

class DataFetch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []};
  }

  componentDidMount() {
    fetch(`http://localhost/www/kirby-react/portfolio`)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {

      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map((item,i) => (
              <li key={i}>
                <p>{item.title}</p>
                <p>{item.date}</p>
                <p>{item.text}</p>
                <p>{item.url}</p>
              </li>
            ))}
          </ul>
        )
      }
  }

};

export default DataFetch;
