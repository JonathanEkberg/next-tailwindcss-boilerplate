import nprogress from "nprogress"
import Router from "next/router"

let timeout: NodeJS.Timeout

function start() {
	timeout = setTimeout(nprogress.start, 100)
}

function done() {
	clearTimeout(timeout)
	nprogress.done()
}

Router.events.on("routeChangeStart", start)
Router.events.on("routeChangeComplete", done)
Router.events.on("routeChangeError", done)

const NProgress: React.FC = () => (
	<style jsx global>
		{`
			/* Make clicks pass-through */
			#nprogress {
				pointer-events: none;
			}
			#nprogress .bar {
				background: #0070f3;
				position: fixed;
				z-index: 1031;
				top: 0;
				left: 0;
				width: 100%;
				height: 2px;
			}
			/* Fancy blur effect */
			#nprogress .peg {
				display: block;
				position: absolute;
				right: 0px;
				width: 100px;
				height: 100%;
				box-shadow: 0 0 10px #0070f3, 0 0 5px #0070f3;
				opacity: 1;
				-webkit-transform: rotate(3deg) translate(0px, -4px);
				-ms-transform: rotate(3deg) translate(0px, -4px);
				transform: rotate(3deg) translate(0px, -4px);
			}
		`}
	</style>
)

export default NProgress
