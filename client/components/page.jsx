import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import ActivityList from '../containers/activity_list';
import { fetchActivityList } from '../actions/index';


class Page extends Component {
    componentDidMount() {
      axios.
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.fetch_activity_list()}>Fetch Data</button>
                <div className="myNavBar">Navbar</div>
                    <ActivityList/>
                <div className="myFooter">Footer</div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetch_activity_list: fetchActivityList}, dispatch)
}

export default connect(null, mapDispatchToProps)(Page);
