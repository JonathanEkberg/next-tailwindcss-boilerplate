import { useState } from "react"
import { Button, Avatar, Menu, MenuItem, Switch } from "@material-ui/core"
import { useStore } from "src/lib/state"

const SignedIn: React.FC = () => {
	const darkmode = useStore((state) => state.darkmode)
	const setDarkmode = useStore((state) => state.setDarkmode)

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	function handleClose() {
		setAnchorEl(null)
	}

	function themeSwitch() {
		setDarkmode(!darkmode)
	}

	return (
		<>
			<Button onClick={(e) => setAnchorEl(e.currentTarget)}>
				<Avatar />
			</Button>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem>
					<Switch name="darkmode" checked={darkmode} onChange={themeSwitch} />
				</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</>
	)
}

export default SignedIn
