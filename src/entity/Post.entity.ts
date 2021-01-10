import { IsString } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostCategory } from './PostCategory.entity';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ unique: true, length: 100 })
  title: string;

  @IsString()
  @Column()
  body: string;

  @ManyToMany((type) => PostCategory)
  @JoinTable()
  categories: PostCategory[];

  constructor(title: string, body: string, categories: PostCategory[]) {
    this.title = title,
    this.body = body,
    this.categories = categories
  }
}
