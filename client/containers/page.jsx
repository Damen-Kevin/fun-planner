import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActivityList from '../containers/activity_list';
import { fetchActivityList } from '../actions/index';


class Page extends Component {
    componentDidMount() {
      axios.get('/api/activities').then((res) => {
        this.props.fetch_activity_list(res.data);
      });
    }

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetch_activity_list: fetchActivityList }, dispatch)
}

export default connect(null, mapDispatchToProps)(Page);