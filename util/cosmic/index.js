import config from 'config';
const cosmic = require('cosmicjs')();

const {slug, read_key} = config.postsBucket;
export const postsBucket = cosmic.bucket({slug, read_key});

export async function fetchPosts(limit = 5, props = 'title,slug,created_at') {
  return (
    (
      await postsBucket.getObjects({
        type: 'posts',
        props,
        limit,
      })
    ).objects || []
  );
}

export async function fetchPost(slug) {
  return postsBucket.getObject({
    slug,
    props: 'slug,title,content,created_at',
  });
}
