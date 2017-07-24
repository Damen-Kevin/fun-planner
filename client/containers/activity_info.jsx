import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';


class ActivityInfo extends Component {
    render() {
        if(this.props.activity) {
            const { title, location, priority, image, category, notes } = this.props.activity;
            return (
                <div>
                    <br/>
                    <div>Title: {title}</div>
                    <div>Location: {location}</div>
                    <div>Priority: {priority}</div>
                    <div>Category: {category}</div>
                    <div>Notes: {notes}</div>
                    <br/>
                </div>
            );
        } return null;   
    }
}

function mapStateToProps(state) {
    return {
        activity: state.activity_info
    }
}

export default connect(mapStateToProps)(ActivityInfo);