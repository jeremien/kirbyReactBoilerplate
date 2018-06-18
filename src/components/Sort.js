import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Sort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortName: false,
            sortDate: false,
            data: []
        }

        this.onSortById = this.onSortById.bind(this);
        this.onSortByName = this.onSortByName.bind(this);
        this.onSortByDate = this.onSortByDate.bind(this);
    }

    componentDidMount() {
        let tab = [];
        this.props.data.map((d, i) => {
            let url = d.tinyurl.substr(d.tinyurl.lastIndexOf('/') + 1);
            let obj = {
                id: i,
                url,
                title: d.title,
                date: d.date
            }
            tab.push(obj);
        });
        this.setState({
            data: tab
        })
    }

    onSortById() {
        this.setState({
            data: this.state.data.reverse()
        })
    }

    onSortByName() {
        const sortData = _.sortBy(this.state.data, o => o.title );
        if (this.state.sortName) {
            this.setState({
                data: sortData.reverse(),
                sortName: false
            })
        } else {
            this.setState({
                data: sortData,
                sortName: true
            });
        }
    }

    onSortByDate() {
        const sortData = _.sortBy(this.state.data, (o) => {
            return new moment(o.date); 
        }).reverse();

        if (this.state.sortDate) {
            this.setState({
                data: sortData.reverse(),
                sortDate: false
            })
        } else {
            this.setState({
                data: sortData,
                sortDate: true
            });
        }
    }

    handleRenderData(data) {

        return data.map((t) => {
            return (
                <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{moment(t.date).format('LL')}</td>
                    <td><Link to={`/article/${t.url}`}>show</Link></td>
                </tr>      
            )
        })

    }

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <td><button onClick={this.onSortById}>Id</button></td>
                        <td><button onClick={this.onSortByName}>Name</button></td>
                        <td><button onClick={this.onSortByDate}>Date</button></td>
                        <td>Url</td>
                    </tr>
                </thead>
                <tbody>
                {this.handleRenderData(this.state.data)}
                </tbody>
            </table>
        );
    }
};

export default Sort;