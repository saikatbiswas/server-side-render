import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import cookieParser from 'cookie-parser';
// import React from 'react';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(cookieParser())

app.use(express.static('public'));

// Brawser any call from /api it will send to the "https://react-ssr-api.herokuapp.com or http://localhost:3001/api" server.
app.use(
    '/api',
    // proxy('https://react-ssr-api.herokuapp.com'
    // , {
    
    // , {
        // This option is only for this project
      // proxyReqOptDecorator(opts) {
      //   // https://
      //   opts.headers['x-forwarded-host'] = 'localhost:3000';
      //   return opts;
      // }
    // }
    // )
    proxy('http://localhost:3001/api')
  );

app.get('*', (req, res)=>{
    const store = createStore(req);

    // console.log(matchRoutes(Routes, req.path));
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {

      const context = {};
      const content = renderer(req, store, context);

      if(context.notFound){
        res.status(404);
      }

      res.send(content);
    });

    // Promise.all(promises).then(()=>{
    //     res.send(renderer(req, store));
    // });

    
    

});

app.listen(3000, ()=>{ 
    console.log('Listing on port 3000 '); 
});