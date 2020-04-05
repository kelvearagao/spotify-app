import { createBrowserHistory } from 'history'

export const getBrowserHistory = () => createBrowserHistory({ basename: '/' })

export default getBrowserHistory()
