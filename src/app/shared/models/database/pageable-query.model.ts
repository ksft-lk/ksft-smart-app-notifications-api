import {IsInt, IsNumber, IsOptional, IsPositive, Min} from 'class-validator';
import {Transform} from 'class-transformer';

export class PageableQuery {
  @IsOptional()
  @Transform(data => parseInt(data.value), {toClassOnly: true})
  @IsNumber()
  @IsInt()
  @Min(0)
  page?: number;

  @IsOptional()
  @Transform(data => parseInt(data.value), {toClassOnly: true})
  @IsNumber()
  @IsInt()
  @IsPositive()
  @Min(2)
  size?: number;
}
