import { Controller, Post, Body } from '@nestjs/common';
import { SubmissionService } from './submission.service.js';
import { CreateSubmissionDto } from './dto/create-submission.dto.js';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  public create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionService.create(createSubmissionDto);
  }
}
