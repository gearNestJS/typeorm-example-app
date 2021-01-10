import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ unique: true, length: 100})
  title: string;

  @IsString()
  @Column()
  body: string;

  constructor(title: string, body: string) {
    this.title = title,
    this.body = body
  }
}
