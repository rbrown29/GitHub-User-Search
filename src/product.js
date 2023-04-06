import React, { Component } from "react";
import Rating from './Rating';
import { Media } from 'react-bootstrap'; //npm install react-bootstrap@1.6.1 for Media to work

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={this.props.data.imageUrl}
                        alt="Image"
                    ></img>
                
                <Media.Body>
                    <h5>{this.props.data.productName}</h5>
                    {this.props.data.releaseDate}
                    <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews} />
                    <p>{this.props.data.description}</p>
                </Media.Body>
                </Media>
            </div>
        )
    }
}

export default Product;