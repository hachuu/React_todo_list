import React, { Component } from 'react';
class Palette extends Component {
    render() {
        const { colors, selectColor } = this.props;
        const colorList = colors.map(
            (color) => (
                <option className="color"
                    {...color}
                    key={color.id}
                    style={Object.assign({color: color.value})}
                >
                    {color.value}
                </option>
            )
        );
        return (
            <select>
                {colorList}
            </select>
        );
    }
}

export default Palette;