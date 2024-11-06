import { Module } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
  imports: [],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService],
  exports: [],
})
export class AuthorModule {}
