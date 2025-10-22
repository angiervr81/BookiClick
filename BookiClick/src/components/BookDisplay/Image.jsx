export default function Image({ image, title }) {
  return (
    <img
      src={image}
      alt={`Cover for ${title}`}
      width={100}
      height={150}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/100x150?text=No+Cover";
      }}
    />
  );
}
