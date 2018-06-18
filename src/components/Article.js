import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import moment from 'moment';
import marked from 'marked';

class Article extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup(text) {
        let rawMarkup = marked(text, {sanitize: true});
        return { __html: rawMarkup };
    }

    handleRenderArticle() {

        const article = this.handleFilterArticle(this.props.match.params.id);

        return article.map((item, key) => {

            const files = this.handleFilterArticleFiles(item.files);
            const tags = this.handleTags(item.tags);

            return (
                <article key={key}>
                    <p> { item.title } </p>
                    <p> { moment(item.date).format('DD/MM/YYYY') } </p>
                    <p dangerouslySetInnerHTML={this.rawMarkup(item.text)}></p>
                    <p> { tags } </p>
                    <p> { files }</p>
                </article>
            )
        })
    }

    handleFilterArticleFiles(files) {
        return files.map((file, key) => {
            return <img key={key} src={file.url} />;
        })
    }

    handleFilterArticle(id) {
        return _.filter( this.props.data, (data) => {
            let idPost = data.tinyurl.substr(data.tinyurl.lastIndexOf('/') + 1);
            return idPost === id;
        })
    }

    handleTags(tags) {
        tags = tags.split(',');
        return tags.map((tag, key) => {
            return <li key={key}><Link to={`/tag/${tag}`}>{tag}</Link></li>;
        });
    }

    render() {

        return (
            <div>
                {this.handleRenderArticle()}
            </div>
        )
    
    }
};

export default Article;