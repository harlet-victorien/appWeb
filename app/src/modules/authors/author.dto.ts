import { IsString } from 'class-validator';

export class CreateAuthorDto {

  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  photoUrl: string;
}

export class UpdateAuthorDto {

  @IsString()
  id: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  photoUrl?: string;
}