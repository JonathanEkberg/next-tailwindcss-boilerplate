import { FC, useEffect } from "react"
import useMediaQuery from "src/hooks/useMediaQuery"
import { useStore } from "src/lib/state"

const Theme: FC = () => {
	const { darkmode, setDarkmode } = useStore()
	const isDark: boolean = useMediaQuery("(prefers-color-scheme: dark)")

	useEffect(() => {
		if (darkmode === undefined) {
			setDarkmode(isDark)
		}
	}, [])

	useEffect(() => {
		const htmlElement = document.getElementsByTagName("html").item(0)

		if (!htmlElement) {
			return
		}

		if (darkmode === undefined) {
			setHtmlDark(isDark)
		} else {
			setHtmlDark(darkmode === true)
		}
	}, [darkmode])

	function setHtmlDark(value: boolean) {
		const htmlElement = document.getElementsByTagName("html").item(0)

		if (!htmlElement) {
			return
		}

		if (value) {
			htmlElement.classList.add("dark")
		} else {
			htmlElement.classList.remove("dark")
		}
	}

	return <></>
}

export default Theme
