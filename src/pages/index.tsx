import { Page } from "src/components"
import { useStore } from "src/lib/state"

const Home: React.FC = () => {
	const { toggleDarkmode } = useStore()

	return (
		<Page>
			<div className="bg-blue-600 dark:bg-red-600 flex-grow">Page</div>
			<button onClick={toggleDarkmode}>Toggle darkmode</button>
		</Page>
	)
}

export default Home
