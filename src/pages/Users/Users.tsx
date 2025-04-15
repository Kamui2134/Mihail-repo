import { Image } from '@shared'
import { Header } from '@widgets'

export default function Users() {
	return (
		<div className='users'>
			<Header />
			<main className='users__main'>
				<h1 className='users__title'>Список пользователей </h1>
			</main>
		</div>
	)
}
