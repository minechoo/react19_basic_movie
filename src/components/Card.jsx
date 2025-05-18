export default function Card({ data }) {
  return (
    <article>
      <a href={"/" + data.id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt={data.title}
        />
      </a>
      <h2>
        <a href={"/" + data.id}>{data.title}</a>
      </h2>
    </article>
  );
}
