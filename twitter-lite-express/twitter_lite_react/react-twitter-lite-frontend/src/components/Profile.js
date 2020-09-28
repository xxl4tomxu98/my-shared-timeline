import React from 'react';
import UserContext from '../contexts/UserContext';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // TODO: Set up default state
    this.state = {
      user: {},
      tweets: [],
      tweetInput: ''
    }
  }


  fetchTweets= async () => {
    try {
      const userId = this.props.currentUserId;

      const res = await fetch(`/users/${userId}/tweets`, {
        headers: {
          "Authorization": this.props.authToken
        }
      })
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();

      return data.tweets;
    }  catch (e) {
      console.error(e);
    }
  }


  fetchUser = async () => {
    try {
      const userId = this.props.currentUserId;
      const res = await fetch(`/users/${userId}/`, {
        headers: {
          "Authorization": this.props.authToken
        }
      })
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      return data.user;

    } catch (e) {
      console.error(e);
    }
  }

  createTweet = async (e) => {
    e.preventDefault();
    // const {tweetInput} = e.target;
    // console.log(this.state.tweetInput)
    try {
      const newTweet = {
        message: this.state.tweetInput,
        userId: this.props.currentUserId
      }
      const res = await fetch("/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": this.props.authToken
        },
        body: JSON.stringify(newTweet)
      })
      if (!res.ok) {
        throw res;
      }

      const data = await res.json();
      const tweets = await this.fetchUserTweets();
      this.setState({ tweets, tweetInput: "" });
      return data.tweet;

    } catch (e) {
      console.error(e)
    }

  }


  deleteTweet = async (tweetId) => {
    try {
      const res = await fetch(`/tweets/${tweetId}/`, {
        method: "DELETE",
        headers: {
          "Authorization": this.props.authToken,
        }
      })
      if (!res.ok) {
        throw res;
      }
      const tweets = await this.fetchUserTweets();
      this.setState({ tweets });
    } catch (e) {
      console.error(e);
    }
  }

  updateNewTweet = e => {
    this.setState({ tweetInput: e.target.value });
  }

  async componentDidMount() {
    const user = await this.fetchUser();
    const tweets = await this.fetchTweets();
    this.setState(
      { user, tweets },
      () => console.log(this.state),
    );

  }

  render() {
    const {user, tweets} = this.state;
    // debugger;
    return (
      <div>
        <h1>{user.username}'s Profile Page</h1>
        <form onSubmit={this.createTweet}>
          <h3>Compose a new tweet</h3>
          <textarea
            type="text"
            value={this.state.tweetInput}
            onChange={this.updateNewTweet}
            name="tweetInput"
            placeholder="What's on your mind?"
          />
          <button type="submit">Create New Tweet</button>
        </form>
        <ul>
          {tweets.map((tweet) => {
            const { id, message } = tweet;
            return (
              <li key={id}>
                <p>{message}</p> <button onClick={this.deleteTweet(id)} name="delete">Delete</button>
              </li>
          )})}
        </ul>
      </div>
    );
  }
};

const ProfileWithContext = (props) => (
  <UserContext.Consumer>
    {value => <Profile currentUserId={value.currentUserId} authToken={value.authToken} {...props}/>}
  </UserContext.Consumer>
)

export default ProfileWithContext;
