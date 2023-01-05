import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating
        };
    }
    handleClick(ratingValue) {
        this.setState({ rating: ratingValue });
    }
    render() {
        return (
            <div style={styles.starStyles}>
                <h1>Rating: {this.state.rating}</h1>
                {this.state.rating >= 1 ? (
                    <IoIosStar onclick={this.handleClick.bind(this, 1)} />
                ) : (
                    <IoIosStarOutline onclick={this.handleClick.bind(this, 1)} />
                )}
                {this.state.rating >= 2 ? (
                    <IoIosStar onclick={this.handleClick.bind(this, 2)} />
                ) : (
                    <IoIosStarOutline onclick={this.handleClick.bind(this, 2)} />
                )}
                {this.state.rating >= 3 ? (
                    <IoIosStar onclick={this.handleClick.bind(this, 3)} />
                ) : (
                    <IoIosStarOutline onclick={this.handleClick.bind(this, 3)} />
                )}
                {this.state.rating >= 4 ? (
                    <IoIosStar onclick={this.handleClick.bind(this, 4)} />
                ) : (
                    <IoIosStarOutline onclick={this.handleClick.bind(this, 4)} />
                )}
                {this.state.rating >= 5 ? (
                    <IoIosStar onclick={this.handleClick.bind(this, 5)} />
                ) : (
                    <IoIosStarOutline onclick={this.handleClick.bind(this, 5)} />
                )}
            </div>
        ); 
    }
}
export default Rating;

const styles = {
    starStyles: {
        color: "orange",
        fontSize: "2em"
    }
};