import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from '../components/MovieInfo';
import BgDetail from '../components/BgDetail';
import Modal from '../components/Modal';
import { twMerge } from 'tailwind-merge';

export default function MovieDetail() {
	const { id } = useParams();

	const [Detail, setDetail] = useState(null);
	const [Trailer, setTrailer] = useState(null);
	const [Open, setOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const BASE_URL = 'https://api.themoviedb.org/3/movie';
			const API_KEY = '4cf85a609f260b43cf0278ad12483b46';
			const REQ_URL = `${BASE_URL}/${id}?api_key=${API_KEY}&language=ko-KR`;
			const REQ_TRAILER = `${BASE_URL}/${id}/videos?api_key=${API_KEY}`;

			try {
				const resDetail = await fetch(REQ_URL);
				const dataDetail = await resDetail.json();
				console.log(dataDetail);
				setDetail(dataDetail);

				const resTrailer = await fetch(REQ_TRAILER);
				const dataTrailer = await resTrailer.json();

				//영상 정보중 유튜브에서 제공하는 트레일러 영상만 찾음
				const officialTrailer = dataTrailer.results.find(
					(vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
				);
				console.log('official', officialTrailer);
				setTrailer(officialTrailer);
			} catch (err) {
				console.error(err);
			} finally {
				console.log('complete');
			}
		};

		fetchData();
	}, [id]);

	return (
		<section className='w-full h-screen theme-bg relative px-[10vw] pt-[17vh] pb-[6vh] overflow-hidden max-xl:overflow-auto max-xl:h-auto'>
			{Detail && (
				<>
					<BgDetail Detail={Detail} />
					<MovieInfo Detail={Detail} Trailer={Trailer} setOpen={() => setOpen(true)} />

					<Modal open={Open} onClose={() => setOpen(false)} isFull={true}>
						<iframe
							src={`https://www.youtube.com/embed/${Trailer?.key}`}
							className='size-full object-cover'
						/>
					</Modal>
				</>
			)}
		</section>
	);
}
