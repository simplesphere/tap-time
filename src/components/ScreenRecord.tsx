import { useState } from 'react';
import CurrentTime from '@/components/CurrentTime';

export default function ScreenRecord() {
	const [recordedTimes, setRecordedTimes] = useState<string[]>([]);
	function handleRecordCurrentTime() {
		const currentDate = new Date();
		const formattedDateTime = currentDate.toISOString().slice(0, 19).replace('T', ' ');
		setRecordedTimes([...recordedTimes, formattedDateTime]);
	}

	return (
		<div onClick={handleRecordCurrentTime} className="h-full w-full flex flex-col space-y-6 text-center cursor-grab h-100">
			<CurrentTime />
			<div className="my-auto text-lg space-y-1 text-orange-200">
				{recordedTimes.map((time, index) => (
					<div key={index}>{time}</div>
				))}
			</div>
		</div>
	);
}
