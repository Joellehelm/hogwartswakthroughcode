import React, { Component } from 'react';
import HogCard from './HogCard'
import ag from "../hog-imgs/augustus_gloop.jpg"
import bog from "../hog-imgs/bay_of_pigs.jpg"
import c from "../hog-imgs/cherub.jpg"
import gn from "../hog-imgs/galaxy_note.jpg"
import lme from "../hog-imgs/leggo_my_eggo.jpg"
import m from "../hog-imgs/mudblood.jpg"
import ps from "../hog-imgs/piggy_smalls.jpg"
import r from "../hog-imgs/rainbowdash.jpg"
import s from "../hog-imgs/sobriety.jpg"
import tpc from "../hog-imgs/the_prosciutto_concern.jpg"
import t from "../hog-imgs/trouble.jpg"
import ts from "../hog-imgs/truffleshuffle.jpg"
import pc from "../hog-imgs/porkchop.jpg"

class HogList extends Component {

    hogsMapper = {
        "Augustus Gloop": ag,
        "Bay of Pigs": bog,
        "Cherub": c ,
        "Galaxy Note": gn,
        "Leggo My Eggo": lme,
        "Mudblood":m,
        "Piggy smalls": ps,
        "Rainbowdash": r,
        "Sobriety": s,
        "The Prosciutto Concern": tpc,
        "Trouble": t,
        "TruffleShuffle": ts,
        "Porkchop": pc
    }



    render() {
        return (
            <div className="ui grid container">   
                {this.props.hogs.map(hog => <HogCard hog={hog} key={hog.name} image={this.hogsMapper[hog.name]}/>)}
            </div>
        );
    }
}

export default HogList;