import { useState, useCallback, useEffect } from "react"

function fallbackMatchMedia(query: string) {
	if (typeof matchMedia !== "function") {
		return null
	}
	return matchMedia(query)
}

function omitMatchMediaResult(matchMediaResult: any) {
	if (!matchMediaResult) {
		return null
	}
	return { media: matchMediaResult.media, matches: matchMediaResult.matches }
}

function useMedia(query: string) {
	var result = useState(function () {
		return omitMatchMediaResult(fallbackMatchMedia(query))
	})
	var setResult = result[1]

	var callback = useCallback(
		function (matchMediaResult) {
			return setResult(omitMatchMediaResult(matchMediaResult))
		},
		[setResult]
	)

	useEffect(
		function () {
			var matchMediaResult = fallbackMatchMedia(query)
			callback(matchMediaResult)
			matchMediaResult?.addListener(callback)
			return function () {
				return matchMediaResult?.removeListener(callback)
			}
		},
		[callback, query]
	)

	return result[0]
}

export default function useMediaPredicate(query: string) {
	var result = useMedia(query)
	return (result && result.matches) || false
}
