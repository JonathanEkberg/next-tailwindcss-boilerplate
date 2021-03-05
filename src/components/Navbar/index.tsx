import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import UserButton from "./SideButtons"

const useStyles = makeStyles((theme) => ({
	appbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		background: theme.palette.background.paper,
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const Navbar: React.FC = () => {
	const c = useStyles()

	return (
		<AppBar classes={{}} className={c.appbar} color="default" position="static" elevation={0}>
			<Toolbar>
				<IconButton className={c.menuButton} color="inherit" edge="start" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={c.title}>
					Home
				</Typography>
				<UserButton />
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
