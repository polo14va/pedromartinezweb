import { mainController } from '../controllers/mainController';

export async function fetchHandler(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/hello') {
    return mainController(request, env);
  }

  if (path === '/') {
    return mainController(request, env);
  }

  return new Response('Endpoint not found', { status: 404 });
}
