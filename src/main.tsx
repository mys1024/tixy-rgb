import { render } from 'solid-js/web'
import { bindUsefulVariables } from '~/util/bind'
import App from '~/App'

import '@unocss/reset/tailwind.css'
import '~/style/index.css'
import 'uno.css'

bindUsefulVariables(window)
render(() => <App />, document.getElementById('root') as HTMLElement)
