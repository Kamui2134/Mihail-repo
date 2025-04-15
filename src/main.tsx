import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@router'
import { Theme } from '@shared'

import './main.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Theme>
			<RouterProvider router={router} />
		</Theme>
	</StrictMode>
)
