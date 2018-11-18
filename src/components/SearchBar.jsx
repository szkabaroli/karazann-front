import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'
import Tilt from './Tilt'

const SearchBar = ({active}) => {

    const onChange = event => {
        props.dispatch(setFilter(event.target.value));
    }

    if(!active)
        return null

    return (
        <Tilt className="search"  options={{ speed: 1500, scale: 1.04, max: 0,reverse: true, axis: 'y' }}>
            <input placeholder="Search..." onChange={onChange} type="search" name="" id="test" />
        </Tilt>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SearchBar);