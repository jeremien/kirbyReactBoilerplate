import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    handleRenderTags() {

        let tags = this.props.data.map((obj) => {
            return obj.tags.split(',');
        });

        tags = _.flatten(tags)
        tags = _.uniq(tags)

         return tags.map((tag, key) => {
            return <li key={key}><Link to={`/tag/${tag}`}>{tag}</Link></li>;
        });
    }

    handleRenderPost() {

        return this.props.data.map((obj, key) => {

            let id = obj.tinyurl.substr(obj.tinyurl.lastIndexOf('/') + 1);

            return (
                <li key={key}>
                   <Link to={`/article/${id}`}> {obj.title} </Link> 
                </li>
            )
        });

    }

    render() {

        return (

            <div>
                <h2> posts </h2>
                <ul>
                    {this.handleRenderPost()}
                </ul>
                
                <h2> tags </h2>
                <ul>
                    {this.handleRenderTags()}
                </ul>
            </div>
        )
    }
};

export default Home;