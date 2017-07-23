import React, { Component } from 'react';

import ActivityList from '../containers/activity_list';


export default class Page extends Component {
    render() {
        return (
            <div>
                <div className="myNavBar">Navbar</div>
                    <ActivityList/>
                <div className="myFooter">Footer</div>
            </div>
        )
    }
}