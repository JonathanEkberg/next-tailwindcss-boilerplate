import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Page } from "src/components"

const useStyles = makeStyles(() => ({
	box: {},
}))

const Home: React.FC = () => {
	const c = useStyles()

	return (
		<Page>
			<Box className={c.box} />
		</Page>
	)
}

export default Home
