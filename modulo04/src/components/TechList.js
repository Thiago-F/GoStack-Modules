import React, { Component } from 'react';

import TechItem from './TechItem'

class TechList extends Component {
  static propTypes = {
    // tech: PropTypes.string,
  }

  static defaultProps = {
    // tech : 'Oculto'
  }

  state = {
    newTech: '',
    techs: []
  }

  //é chamado antes do componente aparecer
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }
  //exec quando houver alterações
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      //toda vez que o componente muda atualiza aqui
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }
  //executado quando o componente deixa de existir
  componentWillUnmount() { }

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

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {
            this.state.techs.map(tech =>
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            )
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