import { Column, Entity, Index } from 'typeorm';

@Index(['type', 'name'])
@Entity()
export class Event {
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
