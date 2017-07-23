import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeActivity } from '../actions/index';

class Activity extends Component {
    render() {
        return (
            <tr onClick={() => this.props.remove_activity(this.props.activity)}>
                <td>{this.props.activity.title}</td>
                <td>{this.props.activity.location}</td>
                <td>{this.props.activity.category}</td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ remove_activity: removeActivity}, dispatch)
}

export default connect(null, mapDispatchToProps)(Activity);
