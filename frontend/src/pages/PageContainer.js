export default function PageContainer({ children, id }) {
  return (
    <div id={id} style={{ padding: "32px 0" }}>
      {children}
    </div>
  );
}
