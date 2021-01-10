import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  title: string;

  @Column()
  body: string;

  constructor(title: string, body: string) {
    this.title = title,
    this.body = body
  }
}
