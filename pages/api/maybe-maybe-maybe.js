import {db} from '../../util/firestore';

export default async function (req, res) {
  const snapshot = await db.collection('posts').limit(5).get();
  const posts = snapshot.docs.map(d => d.data());

  console.log(posts)
  res.statusCode = 200;
  res.json(posts);
}
