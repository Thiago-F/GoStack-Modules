import React, { Component } from 'react';

class TechList extends Component {

  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {
            this.state.techs.map(tech => <li key={tech} >{tech}</li>)
          }
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;