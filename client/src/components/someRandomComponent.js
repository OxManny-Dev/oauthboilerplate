import React, { Component } from 'react';

import { connect } from 'react-redux';

class Random extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
            </div>
        )
    }
}


function mapStateToProps({counter}) {
    return { counter }
}

export default connect(mapStateToProps, null)(Random);