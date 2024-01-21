import { useEffect, useState } from 'react';

export default function CurrentTime() {
	const timeSettings: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	};

	const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString('en-US', timeSettings));

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date();
			setCurrentTime(now.toLocaleTimeString('en-US', timeSettings));
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<time dateTime={currentTime} className="text-6xl text-orange-200 text-center">
			{currentTime}
		</time>
	);
}
