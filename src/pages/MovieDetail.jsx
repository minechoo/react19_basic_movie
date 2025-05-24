import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  console.log("클릭한 썸네일의 고유 영화 ID", id);
  return (
    <section>
      <h1>Movie Detail Page</h1>
    </section>
  );
}
