import { useEffect, useState } from 'react';

export function useTimeRecording() {
	const [recordedTimeHistory, setRecordedTimeHistory] = useState<{ [date: string]: string[] }>({});
	const [recordedTime, setRecordedTime] = useState<string[]>([]);

	useEffect(() => {
		const recordedTimes = localStorage.getItem('_recordedTimeHistory');
		const recordedTimeHistoryLocalStorage = recordedTimes ? JSON.parse(recordedTimes) : {};
		setRecordedTimeHistory(recordedTimeHistoryLocalStorage);
	}, []);

	const recordCurrentTime = () => {
		const currentDate = new Date();
		const formattedDate = currentDate.toISOString().slice(0, 10);
		const formattedTime = currentDate.toISOString().slice(11, 19);
		setRecordedTime([...recordedTime, formattedTime]);

		const newRecordedTimeHistory = { ...recordedTimeHistory };
		if (!newRecordedTimeHistory[formattedDate]) {
			newRecordedTimeHistory[formattedDate] = [];
		}
		newRecordedTimeHistory[formattedDate].push(formattedTime);
		setRecordedTimeHistory(newRecordedTimeHistory);
		localStorage.setItem('_recordedTimeHistory', JSON.stringify(newRecordedTimeHistory));
	};

	const clearRecordedTime = () => {
		setRecordedTime([]);
		localStorage.removeItem('_recordedTimeHistory');
		setRecordedTimeHistory({});
	}

	return { recordedTimeHistory, recordedTime, clearRecordedTime, recordCurrentTime };
}