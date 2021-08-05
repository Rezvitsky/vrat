import IRoute from '../interfaces/route'

import Index from '../pages/Index'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Index',
        comonent: Index,
        exact: true
    }
]

export default routes