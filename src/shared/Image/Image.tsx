import { useState, useEffect, useRef } from 'react'
import './Image.css'

interface ImageProps {
	className: string
	src: string
	alt: string
	width: number
	height: number
}

export default function Image({
	className,
	src,
	alt,
	width,
	height,
}: ImageProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [bgSize, setBgSize] = useState('cover')
	const [bgPosition, setBgPosition] = useState('center')
	const imgRef = useRef<HTMLImageElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	// Генерация пути для минифицированной версии
	const smallVersionSrc = src
		.replace('/images/', '/images/smallVersions/')
		.replace(/(\.\w+)$/, '-small$1')
		.replace(/^((?!\/smallVersions).)*$/, '/smallVersions/$&')

	// Получение стилей изображения для минифицированной версии
	useEffect(() => {
		if (!imgRef.current || !containerRef.current) {
			return
		}

		const updateBackgroundStyles = () => {
			const computedStyle = window.getComputedStyle(imgRef.current!)

			// Получаем object-fit и преобразуем в background-size
			setBgSize(computedStyle.objectFit)

			// Получаем object-position и преобразуем в background-position
			setBgPosition(computedStyle.objectPosition)
		}

		updateBackgroundStyles()
	}, [className, src])

	useEffect(() => {
		setIsLoaded(false)
	}, [src])

	useEffect(() => {
		if (imgRef.current?.complete) {
			setIsLoaded(true)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className={`blur-load ${isLoaded ? 'loaded' : ''} ${className}`}
			style={{
				backgroundImage: `url(${smallVersionSrc})`,
				backgroundSize: bgSize,
				backgroundPosition: bgPosition,
			}}
		>
			<img
				ref={imgRef}
				className='blur-load__img'
				src={src}
				alt={alt}
				width={width}
				height={height}
				loading='lazy'
				onLoad={() => setIsLoaded(true)}
			/>
		</div>
	)
}
