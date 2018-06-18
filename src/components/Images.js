import React from 'react';
import { Link } from 'react-router-dom';

class Images extends React.Component {

    handleRenderImages() {

        let tab = [];

        this.props.data.map((item) => {
            let id = item.tinyurl.substr(item.tinyurl.lastIndexOf('/') + 1);
            let obj = {
                id,
                files: item.files.map((i) => i.url)
            }
            tab.push(obj);            
        });

        return tab.map((t) => {
                return t.files.map((f, k) => {
                    return <li  key={k} ><Link to={`/article/${t.id}`}><img src={f} /> </Link></li>
                })
            });
    }


    render() {

        return (
            <ul>
                {this.handleRenderImages()}
            </ul>
        )

    }

};

export default Images;