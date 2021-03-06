import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActivityList from './activity_list';
import ActivityInfo from './activity_info';
import { fetchActivityList } from '../actions/index';


class Page extends Component {
    componentDidMount() {
        this.props.fetch_activity_list();
    };
    
    render() {
        return (
            <div>
                <div className="myNavBar">Navbar</div>
                <ActivityList/>
                <ActivityInfo/>
                <div className="myFooter">Footer</div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetch_activity_list: fetchActivityList }, dispatch)
}

export default connect(null, mapDispatchToProps)(Page);