import React, { Component } from 'react';
class Palette extends Component {
    render() {
        const { colors, onChange } = this.props;
        const colorList = colors.map(
            (color) => (
                <option className="color"
                    {...color}
                    key={color.id}
                    style={Object.assign({color: color.value})}
                >
                    선택 색상 {color.value} ★
                </option>
            )
        );
        return (
            <select onChange={onChange}>
                {colorList}
            </select>
        );
    }
}

export default Palette;