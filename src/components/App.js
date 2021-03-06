import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []};
      }
    
    componentDidMount() {
        fetch(`${this.props.url}/portfolio`)
            .then(res => res.json())
            .then((result) => {
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
                <div>
                    <Header />
                    <Main data={items}/>
                </div>
            )
        
        }
    }
    
}

export default App;