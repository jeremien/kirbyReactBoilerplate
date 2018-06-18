import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Images from './Images';
import Sort from './Sort';
import Article from './Article';
import Tags from './Tags';

const Main = (props) => {

    const data = props.data;

    return (

        <main>
            <Switch>
                <Route exact path='/' render={(props) => <Home {...props} data={data} /> } />
                <Route path='/images' render={(props) => <Images {...props} data={data} /> } />
                <Route path='/sort' render={(props) => <Sort {...props} data={data} /> } />
                <Route path='/article/:id' render={(props) => <Article {...props} data={data} /> } />
                <Route path='/tag/:tag' render={(props) => <Tags {...props} data={data} /> } />
            </Switch>
        </main>

    )

}

export default Main;