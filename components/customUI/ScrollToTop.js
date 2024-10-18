// components/ScrollToTop.js
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className="fixed bottom-5 right-5">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="py-2 px-4 bg-primary font-bold text-white rounded-full shadow-lg transition"
				>
					↑
				</button>
			)}
		</div>
	);
}
