import {db} from '../../util/firestore';

export default async function (req, res) {
  // const snapshot = await db.collection('posts').limit(5).get();
  // const posts = snapshot.docs.map(d => d.data());

  // console.log(posts)
  // res.statusCode = 200;
  // res.json(posts);
  res.json([
    {
      upvotes: 27284,
      createdUtc: '1600071972',
      media: 'https://v.redd.it/mj24w8p0p2n51/DASH_720.mp4?source=fallback',
      subreddit: 'r/nonononoyes',
      author: 'i_am_atoms',
      title: 'The crowd appreciates it',
      redditId: 'isgzxt',
      url: 'https://v.redd.it/mj24w8p0p2n51',
    },
    {
      upvotes: 28299,
      redditId: 'ka373d',
      subreddit: 'r/nonononoyes',
      title: 'Uh oh',
      media: 'https://v.redd.it/a3ymtg8jv8461/DASH_1080.mp4?source=fallback',
      createdUtc: '1607555948',
      url: 'https://v.redd.it/a3ymtg8jv8461',
      author: 'Xytonn',
    },
    {
      media: 'https://v.redd.it/qu7csdy0ins51/DASH_480.mp4?source=fallback',
      createdUtc: '1602502817',
      redditId: 'j9pbca',
      url: 'https://v.redd.it/qu7csdy0ins51',
      author: 'moskayjoh',
      title: 'Monkey shows some pretty skills',
      subreddit: 'r/nonononoyes',
      upvotes: 21697,
    },
    {
      title: 'So close...wait',
      subreddit: 'r/nonononoyes',
      createdUtc: '1589731913',
      redditId: 'gli1bu',
      url: 'https://v.redd.it/5zj5brxgncz41',
      upvotes: 56579,
      author: 'What-do-you_mean',
      media: 'https://v.redd.it/5zj5brxgncz41/DASH_720?source=fallback',
    },
    {
      author: 'Sin-88',
      subreddit: 'r/yesyesyesno',
      url: 'https://v.redd.it/t0z3h4kjflx41',
      title: 'Streamer regrets listening to song suggestions',
      redditId: 'gfzwt0',
      createdUtc: '1588966455',
      media: 'https://v.redd.it/t0z3h4kjflx41/DASH_480?source=fallback',
      upvotes: 16181,
    },
  ]);
}
