import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";


export default ()=> {
    const content = renderToString( <Home /> );

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