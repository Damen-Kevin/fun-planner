import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { displayActivityInfo } from '../actions/index';

class Activity extends Component {
    render() {
        return (
            <tr onClick={() => this.props.display_activity_info(this.props.activity)}>
                <td>{this.props.activity.title}</td>
                <td>{this.props.activity.location}</td>
                <td>{this.props.activity.category}</td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ display_activity_info: displayActivityInfo}, dispatch)
}

export default connect(null, mapDispatchToProps)(Activity);
