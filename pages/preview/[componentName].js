import {useRouter} from 'next/router';
import {getComponent} from '../../blog-components';

export default function Preview() {
  const router = useRouter();
  const {componentName} = router.query;
  const Component = getComponent(componentName);

  return (
    <div>
      <h2 className="title">{componentName}</h2>
      <Component />
    </div>
  );
}
