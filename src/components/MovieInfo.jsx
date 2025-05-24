export default function MovieInfo({ Detail, Trailer }) {
  return (
    <div className="relative">
      <article>
        {/* 영화 타이틀 */}
        <h1>{Detail?.title}</h1>
        <h2>{Detail?.original_title}</h2>

        {/* 영화 기타 정보 */}
        <div>
          <ul>
            {Detail?.genres.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
          <span>{Detail?.release_date}</span>
          <span>{Detail?.runtime}분</span>
          <span>{Detail?.vote_average} / 10</span>
        </div>

        {/* 영화 트레일러 호출 버튼 */}
        <nav>{Trailer && <button>WATCH TRAILER</button>}</nav>
      </article>
    </div>
  );
}
