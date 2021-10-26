import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  issueNumber: number;

  @Column()
  author: string;

  @Column({ length: 500 })
  title: string;
}
