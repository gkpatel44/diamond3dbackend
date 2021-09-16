import React, { Component } from 'react';
import './App.css';
import Ap from './Ap'
// import axios from 'axios';
class App extends Component {

  state = {
    id: '',
    size: '',
    shape: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.id);
    form_data.append('id', this.state.id);
    form_data.append('Size', this.state.Size);
    form_data.append('shape', this.state.shape);
    // let url = 'http://localhost:8000/api/posts/';
    // axios.post(url, form_data, {
    //   headers: {
    //     'Size-type': 'multipart/form-data'
    //   }
    // })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <h1>WELCOME TO ADMIN OF DIAMOND</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Id:</label>
            <input
              type="text"
              placeholder='Id'
              id='id'
              value={this.state.id}
              onChange={this.handleChange} required />
          </p>

          <p>
            <label>size:</label>
            <input
              type="text"
              placeholder='Size'
              id='size'
              value={this.state.size}
              onChange={this.handleChange}
              required />
          </p>

          <p>
            <label>Shape:</label>
            <input
              type="text"
              placeholder='Shape'
              id='shape'
              value={this.state.shape}
              onChange={this.handleChange}
              required />

          </p>

          <p style={{ marginLeft: "79px" }}>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required />
          </p>

          <input type="submit" /><br />

          <img src={this.state.image} alt="asdf"></img>


        </form>
        <Ap />
      </div>
    );
  }
}

export default App;

