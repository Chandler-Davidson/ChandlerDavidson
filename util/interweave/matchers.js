import {Matcher} from 'interweave';
import {getComponent} from 'blog-components';

export class BlogComponentMatcher extends Matcher {
  match(str) {
    // {{demo-component}}
    const result = str.match(/{{([\w\d-_]+)}}/);

    if (!result) {
      return null;
    }

    this.matchedComponent = result[1];

    return {
      index: result.index,
      length: result[0].length,
      match: result[0],
      valid: true,
    };
  }

  replaceWith() {
    const Component = getComponent(this.matchedComponent);
    return <Component />;
  }

  asTag() {
    return 'div';
  }
}
