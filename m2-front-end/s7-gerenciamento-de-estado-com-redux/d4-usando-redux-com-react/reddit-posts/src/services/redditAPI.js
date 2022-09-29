const redditAPI = async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const {
    data: { children },
  } = await response.json();

  return children;
};

export default redditAPI;
