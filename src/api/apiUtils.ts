import { Response } from 'express';
import ApplicationError from '../utils/application-error';

export function handleApiError(error: Error, res: Response) {
  if (error instanceof ApplicationError) {
    res.status(400).send({ message: error.message });
  } else {
    res.sendStatus(500);
  }
}
