export default function WorkTag({ tag }) {
  return (
    <div
      className="work-tag"
      style={{
        backgroundColor: "gray",
        borderRadius: "99em",
        display: "inline-block",
        padding: "0.5em 1em",
      }}
    >
      <span>{tag}</span>
    </div>
  );
}
