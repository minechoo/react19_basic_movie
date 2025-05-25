import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function Logo({ title, desc, className }) {
	return (
		<>
			{/* 다크모드시 적용될 스타일만 "dark:유틸리티클래스" 형식으로 지정 가능 */}
			<h1
				className={twMerge(
					`font-orbitron text-2xl text-black dark:text-white font-[800] tracking-tighter leading-none`,
					className
				)}
			>
				<Link to='/'>{title}</Link>
			</h1>
			{desc && (
				<h2 className='text-xs font-semibold theme-text tracking-wide indent-0.5 opacity-50 -translate-x-[2px]'>
					{desc}
				</h2>
			)}
		</>
	);
}
