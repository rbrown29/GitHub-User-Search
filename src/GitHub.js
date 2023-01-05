import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class GitHub extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.getGitHubData(''); //uncomment this line to see the initial data
    }

    getGitHubData(_searchTerm) {
        axios.get("https://api.github.com/search/users?q=" + _searchTerm)
            .then(response => {
                this.setState({
                    data: response.data.items,
                    isLoading: false
                })
                console.log(response.data.items);
            })
    }
    render() {
        const listUsers = this.state.data.map((user) =>
            <div className='col'>
            <div className='card'>
                <Media key={user.id}>
                    <a href={user.html_url}>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={user.avatar_url}
                            alt="Image"
                        />
                    </a>
                    <Media.Body>
                        <h5>Login: {user.login}</h5>
                        <p>ID: {user.id}</p>
                    </Media.Body>
                </Media>
            </div>
            </div>
        );
        return (
            <div className='form'>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.handleChange}
                            placeholder="GitHub username or name"
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">Search</Button>
                </Form>
                    <h3>GitHub Users Results</h3>
                    {this.state.isLoading ? <ReactLoading type="spinningBubbles" color="#444" /> : listUsers}
            </div>
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isLoading: true
        });
        this.getGitHubData(this.state.searchTerm);
    }
    handleChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }
}

export default GitHub;