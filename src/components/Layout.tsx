import { Box, NoSsr } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
	main: {
		background: theme.palette.background.default,
	},
	mainCenter: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}))

interface LayoutProps {
	center?: boolean
	navbar?: boolean
}

const Layout: React.FC<LayoutProps> = ({ center = false, navbar = true, children }) => {
	const c = useStyles()

	return (
		<>
			{navbar && <Navbar />}
			<Box className={`${c.main}${center && ` ${c.mainCenter}`}`} component="main">
				{children}
			</Box>
		</>
	)
}

export default Layout
