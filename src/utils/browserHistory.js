import { createBrowserHistory } from 'history'

export const getBrowserHistory = () => createBrowserHistory({ basename: process.env.PUBLIC_URL })

export default getBrowserHistory()
