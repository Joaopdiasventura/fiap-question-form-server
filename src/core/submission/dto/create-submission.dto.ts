import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  Equals,
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';
import { CurrentSituation } from '../enums/current-situation.enum.js';
import { ExperienceLevel } from '../enums/experience-level.enum.js';
import { InterestArea } from '../enums/interest-area.enum.js';
import { CareerPriority } from '../enums/career-proprity.enum.js';
import { Technology } from '../enums/technology.enum.js';

export class CreateSubmissionDto {
  @IsBoolean()
  @Equals(true)
  public participationConsent: boolean;

  @IsBoolean()
  @Equals(true)
  public academicUseConsent: boolean;

  @IsString()
  @MinLength(1)
  @Transform(({ value }) => (typeof value == 'string' ? value.trim() : value))
  public name: string;

  @IsEmail()
  @Transform(({ value }) =>
    typeof value == 'string' ? value.trim().toLowerCase() : value,
  )
  public email: string;

  @IsEnum(CurrentSituation)
  public currentSituation: CurrentSituation;

  @IsEnum(InterestArea)
  public interestArea: InterestArea;

  @IsEnum(ExperienceLevel)
  public experienceLevel: ExperienceLevel;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  @IsEnum(Technology, { each: true })
  public technologies: Technology[];

  @Type(() => Number)
  @IsNumber()
  public marketConfidence: number;

  @IsArray()
  @ArrayMinSize(5)
  @ArrayMaxSize(5)
  @ArrayUnique()
  @IsEnum(CareerPriority, { each: true })
  public careerPriorities: CareerPriority[];

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(10)
  public recommendationScore: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(120)
  public age: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  public salaryExpectation: number;

  @IsBoolean()
  public usesAi: boolean;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value == 'string' ? value.trim() : value))
  public additionalComments?: string;
}
