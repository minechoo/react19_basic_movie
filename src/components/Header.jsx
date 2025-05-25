import Logo from './Logo';

export default function Header() {
	return (
		<header className='w-full px-[10vw] py-6 fixed top-0 left-0 z-100 backdrop-blur-sm'>
			<Logo title='DCODELAB' desc='REVIEWING THE MOVIES' className='text-red-500' />
		</header>
	);
}
