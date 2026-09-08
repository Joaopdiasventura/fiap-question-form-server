import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionController } from './submission.controller.js';
import { SubmissionService } from './submission.service.js';

describe('SubmissionController', () => {
  let controller: SubmissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmissionController],
      providers: [SubmissionService],
    }).compile();

    controller = module.get<SubmissionController>(SubmissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
