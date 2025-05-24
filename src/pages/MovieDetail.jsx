import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  const [Detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = "https://api.themoviedb.org/3/movie";
      const API_KEY = "4cf85a609f260b43cf0278ad12483b46";
      const REQ_URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;

      try {
        const res = await fetch(REQ_URL);
        const data = await res.json();
        console.log(data);
        setDetail(data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("complete");
      }
    };

    fetchData();
  }, [id]);

  return (
    <section>
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
    </section>
  );
}
