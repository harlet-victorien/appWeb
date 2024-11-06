import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './modules/authors/author.module';
import { BookModule } from './modules/books/book.module';
// import other modules as needed

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your preferred database
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      entities: [__dirname + '/modules/database/entities/*.entity{.ts,.js}'],
      synchronize: true, // disable in production
    }),
    AuthorModule,
    BookModule,
    // add other modules here
  ],
})
export class AppModule {}