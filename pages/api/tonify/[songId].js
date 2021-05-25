const db = require('../../../util/firebase/firestore').db;

export default async function (req, res) {
  const {songId} = req.query;

  const song = await db.collection('recordings').doc(songId).get();

  if (song.exists) {
    res.statusCode = 200;
    res.json(song.data());
  } else {
    res.statusCode = 404;
    res.send();
  }
}
