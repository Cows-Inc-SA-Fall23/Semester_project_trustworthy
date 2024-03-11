import {logger} from "@bogeychan/elysia-logger";
import { Elysia } from 'elysia'
import {helmet} from "elysia-helmet";

new Elysia()
    .use(helmet())
    .use(logger())
    .get('/', () => 'Landing')
    .get('/hello', () => 'Hi')
    .listen(3000, () => console.log('Server started on http://localhost:3000'));
