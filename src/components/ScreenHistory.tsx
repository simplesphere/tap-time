import { useTimeRecording } from '@/hooks/useTimeRecording';

export default function ScreenHistory() {
	const { recordedTimeHistory, clearRecordedTime } = useTimeRecording();

	return (
		<div className="h-full w-full flex flex-col space-y-6 cursor-grab h-100 p-4">
			<div className="flex justify-between mb-4">
				<h4 className="text-3xl text-white">History</h4>
				<button className="py-2 px-4 bg-white text-slate-800 rounded-md hover:bg-red-500 hover:text-white" onClick={clearRecordedTime}>
					Clear History
				</button>
			</div>
			<div className="my-auto flex flex-col text-lg space-y-1 text-orange-200">
				{Object.entries(recordedTimeHistory).map(([date, times], index) => (
					<div key={index}>
						<h3 className="text-white text-xl mb-2">{date}</h3>
						<ul className="space-y-1 ml-4">
							{times.map((time, timeIndex) => (
								<li key={timeIndex}>{time}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
