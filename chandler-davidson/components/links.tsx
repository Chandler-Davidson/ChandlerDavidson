const links = [
  ["Github", "https://github.com/chandler-davidson"],
  ["Instagram", "https://www.instagram.com/chandler_marx_davidson/"],
];

const getLinkElement = (link: string[]) => {
  const [body, href] = link;

  return (
    <li key={href+body}>
      <a href={href}>{body}</a>
      <style>{`
      a {
        padding: 5px;
      }

      li {
        display: inline;
      }
      `}</style>
    </li>
  );
};

const Links = () => (
  <div id="links">
    <ul>{links.map(getLinkElement)}</ul>
    <style jsx>
      {`
        ul {
          padding: 0;
          list-style-type: none;
        }
      `}
    </style>
  </div>
);

export default Links;
