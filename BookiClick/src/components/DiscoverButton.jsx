export default function DiscoverButton({ onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : "Discover a Book"}
    </button>
  );
}
