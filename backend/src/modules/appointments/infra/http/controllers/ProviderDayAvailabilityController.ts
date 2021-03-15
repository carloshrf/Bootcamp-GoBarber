import { Response, Request } from 'express';
import { container } from 'tsyringe';

import ProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.query;

    const listProviderDayAvailability = container.resolve(
      ProviderDayAvailabilityService,
    );

    const providers = await listProviderDayAvailability.execute({
      day: Number(day),
      month: Number(month),
      provider_id,
      year: Number(year),
    });

    return response.json(providers);
  }
}
