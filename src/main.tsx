import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@router'
import { Theme } from '@shared'
import { Provider } from 'react-redux'
import { store } from '@store'

import './main.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router} />
			</Theme>
		</Provider>
	</StrictMode>
)
