import { Hono } from "hono";
import { logger } from "hono/logger";
import { createServer } from "http2";

const app = new Hono();

// middleware
app.use(logger());

//routes
app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
