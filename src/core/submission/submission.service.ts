import { Injectable, Logger } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto.js';
import { ISubmissionRepository } from './repositories/submission.repository.js';
import {
  EmailAlreadyUsedError,
  UnexpectedError,
} from './errors/submission.error.js';
import { MessageDto } from '../../shared/dto/message.dto.js';

@Injectable()
export class SubmissionService {
  private readonly logger = new Logger(SubmissionService.name);

  public constructor(
    private readonly submissionRepository: ISubmissionRepository,
  ) {}

  public async create(
    createSubmissionDto: CreateSubmissionDto,
  ): Promise<MessageDto> {
    await this.validateEmail(createSubmissionDto.email);

    try {
      await this.submissionRepository.create(createSubmissionDto);
      return new MessageDto('Resposta cadastrada com sucesso');
    } catch (error) {
      this.logger.error(error);
      throw UnexpectedError;
    }
  }

  public async validateEmail(email: string): Promise<void> {
    const submission = await this.submissionRepository.findByEmail(email);
    if (submission) throw EmailAlreadyUsedError;
  }
}
