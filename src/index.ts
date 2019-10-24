import "reflect-metadata";
import path from "path";
require('dotenv').config({path: path.join(__dirname, `../config/${process.env.NODE_ENV}.env`)});
import {createConnection} from "typeorm";
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express'
import connectionOptions from "../config/ormConfig"
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';

createConnection(connectionOptions).then(async connection => {
    const app = express();
    const formatError = err => {
        console.error('--- GraphQL Error ---');
        console.error('Path:', err.path);
        console.error('Message:', err.message);
        console.error('Code:', err.extensions.code);
        console.error('Original Error', err.originalError);
        return err;
    };
    const server = new ApolloServer({
        typeDefs: gql`${typeDefs}`,
        resolvers,
        formatError,
        debug: false
    });

    server.applyMiddleware({app, path: '/graphql'});
    
    app.use('/abc', ()=>console.log('hi'))
    
    app.listen({port: 4000}, () => {
        console.log("server ready at 4000 port")
    })
    
}).catch(error => console.log(error));
