import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import Home from '@/pages/Home'
import BoardPage from '@/pages/board/BoardPage'
import LoginPage from '@/pages/Login/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'board',
        element: <BoardPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
])

export default router
