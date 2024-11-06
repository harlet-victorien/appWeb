import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { Author } from '../database/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}