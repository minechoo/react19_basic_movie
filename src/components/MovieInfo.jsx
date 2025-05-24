export default function MovieInfo({ Detail, Trailer }) {
  return (
    <div className="relative w-9/12 h-full pr-20 theme-text">
      <article className="relative flex flex-wrap w-full gap-10">
        {/* 영화 타이틀 */}
        <h1 className="w-full text-[5vmax] font-hanna leading-none">
          {Detail?.title}
        </h1>
        <h2 className="w-full text-2xl leading-none font-hanna theme-text opacity-40">
          {Detail?.original_title}
        </h2>

        {/* 영화 기타 정보 */}
        <div className="flex flex-wrap gap-6 font-noto text-xs font-[600]">
          <ul className="flex bar">
            {Detail?.genres.map((el, idx) => (
              <li key={el.id}>
                &nbsp;
                {idx !== 0 && "/"}
                &nbsp;
                {el.name}
              </li>
            ))}
          </ul>
          <span className="bar">{Detail?.release_date}</span>
          <span className="bar">{Detail?.runtime}분</span>
          <span className="bar">{Detail?.vote_average} / 10</span>
        </div>

        {/* 영화 트레일러 호출 버튼 */}
        <nav>{Trailer && <button className="btn">WATCH TRAILER</button>}</nav>
      </article>
    </div>
  );
}
