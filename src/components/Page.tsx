import Head from "next/head"
import useMediaQuery from "src/hooks/useMediaQuery"
import Layout from "./Layout"
import NProgress from "./NProgress"
import Theme from "./Theme"

interface PageProps {
	center?: boolean
	navbar?: boolean
}

const Page: React.FC<PageProps> = ({ children, center = false, navbar = true }) => {
	const isDark: boolean = useMediaQuery("(prefers-color-scheme: dark)")
	const folder = isDark ? "dark" : "light"

	return (
		<>
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<title>Web App</title>
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta name="theme-color" content="#0070f3" />
				<noscript>This page requires JavaScript in order to function</noscript>
				<link rel="icon" href={`/images/favicons/${folder}/favicon.svg`} type="image/svg" />
				<link rel="icon" href={`/images/favicons/${folder}/favicon-16x16.png`} type="image/png" sizes="16x16" />
				<link rel="icon" href={`/images/favicons/${folder}/favicon-32x32.png`} type="image/png" sizes="32x32" />
				<link
					rel="icon"
					href={`/images/favicons/${folder}/android-chrome-192x192.png`}
					type="image/png"
					sizes="192x192"
				/>
				<link
					rel="icon"
					href={`/images/favicons/${folder}/android-chrome-512x512.png`}
					type="image/png"
					sizes="512x512"
				/>
				<link
					rel="apple-touch-icon"
					href={`/images/favicons/${folder}/apple-touch-icon.png`}
					type="image/png"
					sizes="180x180"
				/>
			</Head>
			<NProgress />
			<Theme />
			<Layout>{children}</Layout>
		</>
	)
}

export default Page
