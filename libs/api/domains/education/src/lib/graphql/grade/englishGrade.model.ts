import { Field, ObjectType } from '@nestjs/graphql'

import { Grade } from './grade.model'
import { GradeType } from './gradeType.model'

@ObjectType('EducationEnglishGrade')
export class EnglishGrade {
  @Field(() => String)
  label!: string

  @Field(() => GradeType)
  grade!: GradeType

  @Field(() => String)
  competence!: string

  @Field(() => String)
  competenceStatus!: string

  @Field(() => GradeType)
  reading!: GradeType

  @Field(() => GradeType)
  grammar!: GradeType

  @Field(() => Grade)
  progressText!: Grade
}
