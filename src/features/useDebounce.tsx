import { useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: any) => void, delay: number) {
	let timer = useRef<ReturnType<typeof setTimeout> | null>(null)

	const debouncedCallback = useCallback(
		(...args: any) => {
			if (timer.current) {
				clearTimeout(timer.current)
			}

			timer.current = setTimeout(() => {
				callback(...args)
			}, delay)
		},
		[callback, delay]
	)

	return debouncedCallback
}
