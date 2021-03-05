import { Box, Button, IconButton, Link } from "@material-ui/core"
import { WbSunny as Sun, NightsStay as Moon } from "@material-ui/icons"
import { useStore } from "src/lib/state"

const UserButton: React.FC = () => {
	const { darkmode, setDarkmode } = useStore()

	return (
		<Box>
			<IconButton aria-label="Change theme" onClick={() => setDarkmode(!darkmode)}>{darkmode ? <Moon /> : <Sun />}</IconButton>
			<Link href="/login">
				<Button color="inherit" variant="outlined">
					Login
				</Button>
			</Link>
		</Box>
	)
}

export default UserButton
