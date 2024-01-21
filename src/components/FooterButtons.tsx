import { useState } from "react";

type TProps = {
	handleButton: (action: string) => void;
};

enum ButtonAction {
	RECORD = 'RECORD',
	HISTORY = 'HISTORY'
}

export default function FooterButtons({ handleButton }: TProps) {
	const [activeButton, setActiveButton] = useState<string | null>(ButtonAction.RECORD); 

	const buttons = [
		{ action: ButtonAction.RECORD, color: 'red', text: 'Record' },
		{ action: ButtonAction.HISTORY, color: 'yellow', text: 'History' }
	];

	const handleButtonAction = (action: string) => {
		handleButton(action);
		setActiveButton(action);
	};

	return (
		<div className="flex space-x-4">
			{buttons.map(button => (
				<button
					key={button.action}
					className={`flex-1 p-2 border border-${button.color}-500 text-${button.color}-500 rounded-md ${
						activeButton === button.action ? `bg-${button.color}-500 text-white` : `hover:bg-${button.color}-500 hover:text-white`
					}`}
					onClick={() => handleButtonAction(button.action)}
				>
					{button.text}
				</button>
			))}
		</div>
	);
}
