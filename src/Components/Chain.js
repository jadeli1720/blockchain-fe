import React from 'react';
import { connect } from 'react-redux';
import {fetchServer} from '../store/actions'

const Chain = props => {
    console.log('Top of Chain component',props)
    return (
        <>
            <p>This message is from the Chain component</p>
        </>
    )
}

const mapStateToProps = state => {
    console.log("Chain component state",state)
    return {
        
    }
}

export default connect(mapStateToProps, {fetchServer})(Chain)