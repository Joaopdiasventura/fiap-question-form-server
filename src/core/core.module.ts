import { Module } from '@nestjs/common';
import { SubmissionModule } from './submission/submission.module.js';

@Module({
  imports: [SubmissionModule]
})
export class CoreModule {}
