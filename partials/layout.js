import Navigation from './navigation';

export default function Layout({children}) {
  return (
    <div>
      <Navigation />
      <div
        style={{
          // margin: "1vmax",
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
