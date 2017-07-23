import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';


class ActivityInfo extends Component {
    render() {
        const { title, location, category } = this.props.activity;
        return (
            <div>
                <br/>
                <div>{title}</div>
                <div>{location}</div>
                <div>*Priority*</div>
                <div>*Image*</div>
                <div>{category}</div>
                <div>*notes*</div>
                <br/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activity: state.activity_info
    }
}

export default connect(mapStateToProps)(ActivityInfo);