import { Router } from "express";
import { redirect } from "./UseCases/redirect";
import { newUrl } from "./UseCases/newUrl";

const routes = Router();

routes.post('/create', newUrl);

routes.all('/:id', redirect);

export { routes };