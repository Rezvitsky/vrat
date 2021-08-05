import React, { FC } from 'react'
import { HashRouter as Router, RouteComponentProps, Switch, Route } from 'react-router-dom'

import routes from './routes'

import Header from './components/Header'

const App: FC<{}> = (props) => (
    <Router>
        <div className="App h-screen bg-white dark:bg-black">
            <Header />
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => (
                            <route.comonent
                                {...props}
                                {...route.name}
                                {...route.props}
                            />
                        )}
                    />
                ))}
            </Switch>
        </div>
    </Router>
)

export default App