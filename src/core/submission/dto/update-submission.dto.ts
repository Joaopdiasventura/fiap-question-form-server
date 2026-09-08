import { PartialType } from '@nestjs/mapped-types';
import { CreateSubmissionDto } from './create-submission.dto.js';

export class UpdateSubmissionDto extends PartialType(CreateSubmissionDto) {}
