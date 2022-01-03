import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Routes from "../client/Routes";




export default (req, store) => {
    const content = renderToString( 
        // store.runSaga(rootSaga).done.then(()=>{
            <Provider store={store} >
                <StaticRouter context={{}} location={req.path}>
                    <Routes />
                </StaticRouter>
            </Provider>
        // })
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <!-- no need to pul /public/bundle.js beacause app.use(express.static('public')) -->
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}