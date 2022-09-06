import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('~/page/index.js')),
  },
]

export default routes
