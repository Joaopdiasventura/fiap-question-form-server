import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';

export const EmailAlreadyUsedError = new BadRequestException(
  'Esse e-mail já está sendo utilizado',
);

export const UnexpectedError = new InternalServerErrorException(
  'Ocorreu um erro inesperado, tente novamente mais tarde',
);
