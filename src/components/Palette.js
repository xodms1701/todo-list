import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
    render(){
        const color = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
        const { colorChange } = this.props;

        const colorList = color.map((val, i) => (
            <div className={"color-box"} style={{"backgroundColor" : val}} key={i} onClick={() => colorChange(val)}>&nbsp;</div>
        ));

        return (
            <div className="color">
                {colorList}
            </div>
        )
    }
}

export default Palette;