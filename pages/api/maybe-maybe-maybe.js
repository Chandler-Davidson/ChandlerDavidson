import { db } from 'util/firebase/firestore';

export default async function (req, res) {
  const snapshot = await db.collection('posts').limit(5).get();
  const posts = snapshot.docs.map(d => d.data());

  res.statusCode = 200;
  res.json(posts);
}
