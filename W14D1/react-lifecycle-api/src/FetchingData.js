import React from 'react';

class FetchingData extends React.Component {
  constructor() {
    super();

    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    const url = `https://api.github.com/users/${this.props.gitHubUsername}/repos`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ repositories: data }));
  }

  render() {
    const { repositories } = this.state;

    if (repositories.length === 0) {
      return (
        <div>Fetching data...</div>
      );
    } else {
     return (
       <div>
         <h2>GitHub Repositories for {this.props.gitHubUsername}</h2>
         <ul>
           {
             repositories.map((repo) => (
               <li key={repo.id}>
                 <a href={repo.html_url}>{repo.name}</a>
               </li>
             ))
           }
         </ul>
       </div>
     );
    }
  }
}

export default FetchingData;
