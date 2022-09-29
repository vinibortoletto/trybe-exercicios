import React, { createRef, Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './redux/actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.subredditRef = createRef();
  }

  componentDidMount() {
    const { getPosts } = this.props;
    getPosts(this.subredditRef.current.value);
  }

  handleSubredditChange = () => {
    const { getPosts } = this.props;
    getPosts(this.subredditRef.current.value);
  };

  render() {
    const { posts, isLoading, error } = this.props;

    if (isLoading) return <div>Loading posts...</div>;

    return (
      <div>
        <select
          name="subreddit"
          ref={this.subredditRef}
          onChange={this.handleSubredditChange}
        >
          <option value="brasil">Brasil</option>
          <option value="reactjs">React.js</option>
          <option value="frontend">Front-end</option>
        </select>

        <ul>
          {posts.map(({ data }) => (
            <li key={data.id}>
              <h2>{data.title}</h2>
              <h3>{data.author}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, isLoading, error }) => ({
  posts,
  isLoading,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (subreddit) => dispatch(getPosts(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
