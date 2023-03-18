import { mainService } from '../services/mainService';

export async function mainController(request, env) {
  const result = await mainService();
  return new Response(result);
}
