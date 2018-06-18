import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';


class Tags extends React.Component {


    handleRenderArticle() {
        const article = this.handleFilterArticle(this.props.match.params.tag);
        
        
        return article.map((obj, key) => {
            let id = obj.tinyurl.substr(obj.tinyurl.lastIndexOf('/') + 1);
            return (
                <li key={key}>
                <Link to={`/article/${id}`}> {obj.title} </Link> 
                </li>
            )
        });
    }

    handleFilterArticle(tag) {
        return _.filter( this.props.data, (item) => {
            if ( _.includes( item.tags.split(','), tag )) {
                return item;
            }
        });
  
    }

    render() {

        return (
            <div>
                tags : {this.props.match.params.tag}
                <ul>
                {this.handleRenderArticle()}
                </ul>
            </div>
        )

    }
    
};

export default Tags;