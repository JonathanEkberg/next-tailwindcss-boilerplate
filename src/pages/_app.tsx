import React, { useEffect, useState } from "react"
import { AppProps } from "next/app"
import { CssBaseline, Theme, useMediaQuery } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { useStore } from "src/lib/state"
import { lightTheme, darkTheme } from "src/lib/theme"
import "public/global.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const isDark: boolean = useMediaQuery("(prefers-color-scheme: dark)")

	const [theme, setTheme] = useState<Theme>(lightTheme)
	const { darkmode, setDarkmode } = useStore()

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		jssStyles?.parentElement?.removeChild(jssStyles)
		setDarkmode(isDark)
	}, [])

	useEffect(() => {
		setDarkmode(isDark)
	}, [isDark])

	useEffect(() => {
		setTheme(darkmode ? darkTheme : lightTheme)
	}, [darkmode])

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App
