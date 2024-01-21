import CurrentTime from '@/components/CurrentTime';
import { useTimeRecording } from '@/hooks/useTimeRecording';

export default function ScreenRecord() {
	const { recordedTime, recordCurrentTime } = useTimeRecording();

	return (
		<div onClick={recordCurrentTime} className="h-full w-full flex flex-col space-y-6 text-center cursor-grab h-100 items-center justify-center">
			<CurrentTime />
			<div className="my-auto flex flex-col text-lg space-y-1 text-orange-200">
				{recordedTime.map((time, index) => (
					<time key={`${time}-${index}`}>{time}</time>
				))}
			</div>
		</div>
	);
}
