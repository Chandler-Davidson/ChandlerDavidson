import {fetchPost} from 'util/cosmic';
import PostPage from 'partials/post';
import LostPage from 'pages/404';

export async function getStaticPaths() {
  return {
    paths: [],

    // use SSR instead of SSG when path not found
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {slug} = context.params;
  const post = await fetchPost(slug);

  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({post}) {
  const {status, object} = post || {};

  return status === 'error' ? <LostPage /> : <PostPage post={object} />;
}
