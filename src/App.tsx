import { useState } from "react";
import FooterButtons from "@/components/FooterButtons"

function App() {
	const [buttonAction, setButtonAction] = useState<string>('');

  return (
    <div className="h-screen w-screen flex items-center justify-center p-8">
			<div className="max-w-md w-full h-full flex flex-col space-y-4">
				<div className="flex flex-grow border border-slate-600 p-4 rounded-md">
					{buttonAction}
				</div>
				<FooterButtons handleButton={setButtonAction} />
			</div>
    </div>
  )
}

export default App
