import { db } from '../../util/firebase/firestore';

export default async function (req, res) {
  const {notes} = req.body;

  const {id} = await db.collection('recordings').add({
    notes,
  });

  res.statusCode = 202;
  res.json({id});
}
