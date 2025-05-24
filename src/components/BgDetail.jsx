export default function BgDetail({ Detail }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${Detail.backdrop_path}`}
        alt={Detail.title}
      />
    </div>
  );
}
