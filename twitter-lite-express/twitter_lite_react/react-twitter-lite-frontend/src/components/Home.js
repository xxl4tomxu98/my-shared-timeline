import React from 'react';
import UserContext from '../contexts/UserContext';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tweets: []
    }
  }

  static contextType = UserContext;

  fetchTweets = async () => {
    try{
      const res = await fetch(`/tweets`, {
        header: {
          "Authorization": this.context.authToken
        }
      });
      if(!res.ok) {
        throw res;
      }
      const obj = await res.json();
      return obj.tweets;
    } catch (e) {
      console.error (e);
      return [];
    }

  }

  async componentDidMount() {
    const tweets = await this.fetchTweets();
    this.setState({tweets});
  }

  update = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };



  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.context.logout}>Logout</button>

        <ul>
          {this.state.tweets.map((tweet) => {
            const { id, message, user: { username }} = tweet;
            return (
              <li key={id}>
                <h3>{username}</h3>
                <p>{message}</p>
              </li>
          )})}
        </ul>
      </div>
    );
  }

};

const HomeWithContext = (props) => (
  <UserContext.Consumer>
    {value => <Home currentUserId={value.currentUserId} authToken={value.authToken} {...props}/>}
  </UserContext.Consumer>
)

export default HomeWithContext;
