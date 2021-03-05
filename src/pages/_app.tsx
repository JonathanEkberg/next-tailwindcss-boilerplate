import { AppProps } from "next/app"
import "../../public/global.css"

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default App
