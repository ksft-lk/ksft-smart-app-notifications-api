import {IsNotEmpty, IsString} from 'class-validator';

export class AuthorizeUserDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @IsNotEmpty()
  method: string;

  @IsString()
  @IsNotEmpty()
  path: string;
}
