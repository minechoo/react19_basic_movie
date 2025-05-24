export default function MovieInfo({ Detail, Trailer }) {
  return (
    <div className="relative w-9/12 h-full pr-20 theme-text flex flex-col">
      <article className="relative flex flex-wrap content-end w-full gap-10">
        {/* 영화 타이틀 */}
        <h1 className="w-full text-[5vmax] font-hanna leading-none">
          {Detail?.title}
        </h1>
        <h2 className="w-full text-2xl leading-none font-hanna theme-text opacity-40">
          {Detail?.original_title}
        </h2>

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
