import React, { Component } from 'react';

class HogCard extends Component {
    constructor() {
        super()
        this.state = {
            showDetails: false
        }
    }

    handleClick = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }


    render() {
        return (
            <div className="ui eight wide column">
                <div onClick={this.handleClick} class="ui card">
                    <div class="image">
                        <img src={this.props.image} alt={this.props.hog.name} />
                    </div>
                    <div class="content">
                        <div class="header">{this.props.hog.name}</div>

                        {this.state.showDetails ?

                            <div class="description">
                                Specialty: {this.props.hog.specialty}
                                <br />
                                Weight: {this.props.hog.weight}
                                <br />
                                Greased: {this.props.hog.greased ? "Yep" : "Nope"}
                                <br />
                                Highest Medal Acheived: {this.props.hog['highest medal achieved']}
                            </div>
                            :
                            null
                        }

                    </div>

                </div>
            </div>
        );
    }
}

export default HogCard;