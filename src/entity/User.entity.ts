import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age
  }
}
