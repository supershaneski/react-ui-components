import React from 'react';
import PropTypes from 'prop-types';

class ChristmasText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'white', 'yellow'],
      currentColorIndex: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentColorIndex: (this.state.currentColorIndex + 1) % this.state.colors.length
      });
    }, this.props.speed);
  }

  render() {

    const characters = this.props.children.split('');

    const characterElements = characters.map((character, index) => {
      const colorIndex = (this.state.currentColorIndex + index) % this.state.colors.length;
      return <span key={index} style={{color: this.state.colors[colorIndex]}}>{character}</span>;
    });

    return <span>{characterElements}</span>;

    //return <span style={{color: this.state.colors[this.state.currentColorIndex]}}>{this.props.children}</span>;
  }
}

ChristmasText.defaultProps = {
    speed: 500,
}

ChristmasText.propTypes = {
    speed: PropTypes.number,
}

export default ChristmasText
