import {useRouter} from 'next/router';
import {Provider} from 'react-redux';
import {store} from './store';
import {Keyboard} from './keyboard';

export default function Tonify({songId}) {
  const router = useRouter();
  songId = songId || router.query.songId;

  console.log(`router`)
  console.log(router.query)

  return (
    <Provider store={store}>
      <Keyboard songId={songId} />
    </Provider>
  );
}
