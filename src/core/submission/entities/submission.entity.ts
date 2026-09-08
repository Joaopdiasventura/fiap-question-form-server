import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CareerPriority } from '../enums/career-proprity.enum.js';
import { CurrentSituation } from '../enums/current-situation.enum.js';
import { ExperienceLevel } from '../enums/experience-level.enum.js';
import { InterestArea } from '../enums/interest-area.enum.js';
import { Technology } from '../enums/technology.enum.js';

export type SubmissionDocument = HydratedDocument<Submission>;

@Schema({
  versionKey: false,
  timestamps: true,
})
export class Submission {
  public id: string;

  public createdAt: Date;

  public updatedAt: Date;

  @Prop({
    type: Boolean,
    required: true,
    validate: (value: boolean) => value == true,
  })
  public participationConsent: boolean;

  @Prop({
    type: Boolean,
    required: true,
    validate: (value: boolean) => value == true,
  })
  public academicUseConsent: boolean;

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  public name: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  })
  public email: string;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(CurrentSituation),
  })
  public currentSituation: CurrentSituation;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(InterestArea),
  })
  public interestArea: InterestArea;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(ExperienceLevel),
  })
  public experienceLevel: ExperienceLevel;

  @Prop({
    type: [String],
    required: true,
    enum: Object.values(Technology),
    validate: (value: Technology[]) =>
      value.length > 0 && new Set(value).size == value.length,
  })
  public technologies: Technology[];

  @Prop({
    type: Number,
    required: true,
  })
  public marketConfidence: number;

  @Prop({
    type: [String],
    required: true,
    enum: Object.values(CareerPriority),
    validate: (value: CareerPriority[]) =>
      value.length == 5 && new Set(value).size == value.length,
  })
  public careerPriorities: CareerPriority[];

  @Prop({
    type: Number,
    required: true,
    min: 1,
    max: 10,
  })
  public recommendationScore: number;

  @Prop({
    type: Number,
    required: true,
    min: 1,
    max: 120,
  })
  public age: number;

  @Prop({
    type: Number,
    required: true,
    min: 1,
  })
  public salaryExpectation: number;

  @Prop({
    type: Boolean,
    required: true,
  })
  public usesAi: boolean;

  @Prop({
    type: String,
    required: false,
    trim: true,
  })
  public additionalComments?: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
