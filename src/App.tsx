import { Router, useRoutes } from '@solidjs/router'
import routes from '~/routes'

export default () => {
  const Routes = useRoutes(routes)
  return (
    <div
      min-h-100vh
      bg="#282c34"
      text-white
    >
      <main p-12>
        <Router>
          <Routes />
        </Router>
      </main>
    </div>
  )
}
