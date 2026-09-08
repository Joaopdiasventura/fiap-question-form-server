import { Module } from '@nestjs/common';
import { SubmissionService } from './submission.service.js';
import { SubmissionController } from './submission.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionSchema } from './entities/submission.entity.js';
import { ISubmissionRepository } from './repositories/submission.repository.js';
import { SubmissionMongoRepository } from './repositories/submission.mongo.repository.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Submission', schema: SubmissionSchema },
    ]),
  ],
  controllers: [SubmissionController],
  providers: [
    SubmissionService,
    { provide: ISubmissionRepository, useClass: SubmissionMongoRepository },
  ],
})
export class SubmissionModule {}
