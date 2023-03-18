import { fetchHandler } from './routes';

export default {
  async fetch(request, env) {
    return fetchHandler(request, env);
  },
};//wrangler publish