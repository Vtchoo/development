import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { pages } from './pages'
import Sidebar from './sidebar'
import style from './style.module.css'


function MainNavigation() {
    


    return (
        <BrowserRouter>
            <Sidebar />
            <div className={style.contentContainer}>
                
                <Switch>
                    {pages.map(page =>
                        <Route path={page.path} exact={page.exact}>
                            {page.component}
                        </Route>
                    )}
                </Switch>
               
            </div>
        </BrowserRouter>
    )
}

export default MainNavigation