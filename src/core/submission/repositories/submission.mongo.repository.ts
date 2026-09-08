import { InjectModel } from '@nestjs/mongoose';
import { CreateSubmissionDto } from '../dto/create-submission.dto.js';
import {
  Submission,
  SubmissionDocument,
} from '../entities/submission.entity.js';
import { ISubmissionRepository } from './submission.repository.js';
import { Model } from 'mongoose';

export class SubmissionMongoRepository implements ISubmissionRepository {
  public constructor(
    @InjectModel('Submission')
    private readonly submissionModel: Model<SubmissionDocument>,
  ) {}

  public create(createSubmissionDto: CreateSubmissionDto): Promise<Submission> {
    return this.submissionModel.insertOne(createSubmissionDto);
  }

  public findByEmail(email: string): Promise<Submission | null> {
    return this.submissionModel.findOne({ email }).exec();
  }
}
