import React from 'react';
import { PropTypes } from 'prop-types';
import { Repo, Container } from './styles';

const CompareList = (props) => {
  const { repositories, onDelete } = props;
  return (
    <Container>
      {repositories.map(repo => (
        <Repo key={repo.id}>
          <header>
            <img src={repo.owner.avatar_url} alt="Avatar repo" />
            <strong>{repo.name}</strong>
            <small>{repo.owner.login}</small>
          </header>
          <ul>
            <li>
              <span>{repo.stargazers_count}</span>
              <small>stars</small>
            </li>
            <li>
              <span>{repo.forks_count}</span>
              <small>forks</small>
            </li>
            <li>
              <span>{repo.open_issues_count}</span>
              <small>issues</small>
            </li>
            <li>
              <span>{repo.lastCommit}</span>
              <small>last commit</small>
            </li>
          </ul>
          <button type="button" title="Deletar" onClick={() => onDelete(repo)}>
            <i className="fa fa-trash" />
          </button>
        </Repo>
      ))}

    </Container>
  );
};

CompareList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    pushed_at: PropTypes.string,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default CompareList;
