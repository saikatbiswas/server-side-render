import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
// import UsersPage, { loadData } from './pages/UsersPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';


export default [
    // Now we have to nested theose pages inside App
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path:"/",
                // component: HomePage,  we use spread operator for this and component export as an object
                exact: true,
            },
            {
                ...UsersPage,
                path:"/users",
                // loadData, we use spread operator for this and component export as an object
                // component: UsersPage  we use spread operator for this and component export as an object
            },
            {
                ...AdminPage,
                path:"/admins",
            },
            {
                ...LoginPage,
                path:"/login",
            },
            {
                ...NotFoundPage
            }
        ]
    }
];


// () => {
//     return(
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     );
// };