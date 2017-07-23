import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Activity from './activity';


class ActivityList extends Component {
    renderTableData() {
        console.log('activity_list in ActivityList', this.props.activity_list);
        return (
            this.props.activity_list.map((activity) => {
                return (
                    <Activity key={activity.id} activity={activity}/>
                )
            })
        )
    }
    
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTableData()}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        activity_list: state.activity_list
    }
}

export default connect(mapStateToProps)(ActivityList);