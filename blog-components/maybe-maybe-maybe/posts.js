import Axios from 'axios';

const posts = [];

export default async function getNextPost() {
  let nextPost;

  if (posts.length <= 1) {
    const newPosts = await fetchPosts();
    posts.push(...newPosts);
  }

  nextPost = posts[0];
  posts.shift();

  return nextPost;
}

async function fetchPosts() {
  return (await Axios.get('/api/maybe-maybe-maybe')).data;
}
