export default function WorkTag({ tag }) {
  return (
    <div
      className="work-tag"
      style={{
        backgroundColor: "#B7950B",
        borderRadius: "99em",
        display: "inline-block",
        padding: "0.2rem 1em",
        color: "white",
        fontSize: "11px",
      }}
    >
      {tag}
    </div>
  );
}
