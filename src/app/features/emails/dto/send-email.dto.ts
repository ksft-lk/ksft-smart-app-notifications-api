import {Allow, ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty, IsString, Matches} from 'class-validator';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z\d-_]+$/)
  tag: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({
    each: true,
  })
  @IsEmail(undefined, {
    each: true,
  })
  recipients: string[];

  @Allow()
  context: any;
}
