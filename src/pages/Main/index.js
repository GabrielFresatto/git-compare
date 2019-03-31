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
    repositories: [],
    loading: false,
  }

  handlerAddRepository = async (e) => {
    const { repositorieInput, repositories } = this.state;

    e.preventDefault();

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${repositorieInput}`);

      // Cria um campo chamado last commit com a data formatada
      response.data.lastCommit = moment(response.data.pushed_at).fromNow();
      this.setState({
        repositorieInput: '',
        repositories: [...repositories, response.data],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
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

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

export default Main;
