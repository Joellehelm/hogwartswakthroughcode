import React, { Component } from 'react';
import HogFilters from './HogFilters'
import HogList from './HogList'

class HogContainer extends Component {
    constructor(){
        super()
        this.state = {
            hogsToShow: []
        }
    }

    componentDidMount(){
        this.setState({hogsToShow: this.props.hogs})
    }

    showGreased = (greased) => {
        if(greased){
            let filtered = this.state.hogsToShow.filter(hog => hog.greased)
            this.setState({hogsToShow: filtered})
        }else{
            this.setState({hogsToShow: this.props.hogs})
        }
    }

    handleSort = (event) => {
        if(event.target.value === "name"){
            let filtered = this.state.hogsToShow.sort((a, b) => a.name.localeCompare(b.name))
            this.setState({hogsToShow: filtered})
        }else if(event.target.value === "weight"){
            let filtered = this.state.hogsToShow.sort((a, b) => {
                if(a.weight > b.weight){
                    return -1
                }
                if(a.weight < b.weight){
                    return 1
                }else{
                    return 0
                }
            })
            this.setState({HogsToShow: filtered})
        }else{
            this.setState({HogsToShow: this.props.hogs})
        }
    }


    render() {
        return (
            <div>
                <HogFilters handleSort={this.handleSort} showGreased={this.showGreased}/>
                <br/>
                <br/>
                <HogList hogs={this.state.hogsToShow}/>
            </div>
        );
    }
}

export default HogContainer;