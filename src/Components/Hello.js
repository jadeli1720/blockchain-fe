import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchServer} from '../store/actions'

const Hello = props => {
    // console.log('Top of hello',props)
    return (
        <>
            <p>This message is from the Hello component</p>
            <button onClick={props.fetchServer}> Click Me</button>
        </>
    )
}

const mapStateToProps = state => {
    console.log("Hello component",state)
    return {
        
    }
}

export default connect(mapStateToProps, {fetchServer})(Hello)