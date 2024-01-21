import { useState } from "react";
import FooterButtons from "@/components/FooterButtons"
import ScreenRecord from "@/components/ScreenRecord";
import ScreenHistory from "@/components/ScreenHistory";

function App() {
	const [buttonAction, setButtonAction] = useState<string>('RECORD');

  return (
		<div className="h-screen w-screen flex items-center justify-center p-8">
			<div className="max-w-md w-full h-full max-h-full flex flex-col space-y-4">
				<div className="h-full border border-slate-600 p-4 rounded-md overflow-auto">
					{buttonAction === 'RECORD' && <ScreenRecord />}
					{buttonAction === 'HISTORY' && <ScreenHistory />}
				</div>
				<FooterButtons handleButton={setButtonAction} />
			</div>
		</div>
	);
}

export default App
