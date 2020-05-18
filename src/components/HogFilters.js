import React, { Component } from 'react';

class HogFilters extends Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
    }

    handleGreased = (e) => {
        this.setState({ checked: !this.state.checked })
        this.props.showGreased(!this.state.checked)
    }



    render() {
        return (
            <div>
                Greased Hogs Only? <input onChange={this.handleGreased} type="checkbox" id="greased" name="greased" value={this.state.checked} />
                <br />
                <br />

                <select onChange={this.props.handleSort} id="sort">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                    <option value="none">None</option> 
                </select>
            </div>
        );
    }
}

export default HogFilters;