
export default function Layout({children}) {
  return (
    <div>
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
