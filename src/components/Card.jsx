export default function Card({ data }) {
  return (
    <article className="relative mb-16 w-65 h-100">
      <a href={"/" + data.id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
          alt={data.title}
        />
      </a>

      <h2 className="mt-4 text-2xl">
        <a href={"/" + data.id}>{data.title}</a>
      </h2>
    </article>
  );
}
