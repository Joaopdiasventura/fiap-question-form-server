import { CreateSubmissionDto } from '../dto/create-submission.dto.js';
import { Submission } from '../entities/submission.entity.js';

export abstract class ISubmissionRepository {
  public abstract create(
    createSubmissionDto: CreateSubmissionDto,
  ): Promise<Submission>;
  public abstract findByEmail(email: string): Promise<Submission | null>;
}
