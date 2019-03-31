import React, { Component } from 'react';
import moment from 'moment';
import Logo from '../../assets/logo.png';
import { Container, Form } from './style';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

class Main extends Component {
  state = {
    repositoryError: false,
    repositorieInput: '',
    repositories: (window.localStorage.getItem('repos')) ? JSON.parse(window.localStorage.getItem('repos')) : [],
    loading: false,
  }

  handlerAddRepository = async (e) => {
    const { repositorieInput, repositories } = this.state;

    // Array com
    const localStorageRepos = repositories;

    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${repositorieInput}`);

      // Cria um campo chamado last commit com a data formatada
      response.data.lastCommit = moment(response.data.pushed_at).fromNow();

      // Salva o novo registro no local storage
      localStorageRepos.push(response.data);
      window.localStorage.removeItem('repos');
      window.localStorage.setItem('repos', JSON.stringify(localStorageRepos));

      this.setState({
        repositorieInput: '',
        repositories: localStorageRepos,
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  removeRepo = (repositorio) => {
    this.setState(state => ({
      repositories: state.repositories.filter(repo => repo.id !== repositorio.id),
    }), () => {
      window.localStorage.removeItem('repos');
      // eslint-disable-next-line react/destructuring-assignment
      window.localStorage.setItem('repos', JSON.stringify(this.state.repositories));
    });
  }

  render() {
    const {
      repositories,
      repositorieInput,
      repositoryError,
      loading,
    } = this.state;
    return (
      <Container>
        <img src={Logo} alt="Gitcompare Application" />

        <Form withError={repositoryError} onSubmit={this.handlerAddRepository}>
          <input
            type="text"
            value={repositorieInput}
            placeholder="Usuário/repositório"
            onChange={e => this.setState({ repositorieInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>

        <CompareList repositories={repositories} onDelete={this.removeRepo} />
      </Container>
    );
  }
}

export default Main;
