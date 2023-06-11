import { PartialType } from '@nestjs/mapped-types';
import { CreateArbDto } from './create-arb.dto';

export class UpdateArbDto extends PartialType(CreateArbDto) {}
