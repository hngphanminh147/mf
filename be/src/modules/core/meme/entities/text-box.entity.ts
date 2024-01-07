import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MemeEntity } from './meme.entity';

@Entity({ name: 'text_box' })
export class TextBoxEntity extends AbstractBaseEntity {
  // top-left corner location
  @Column()
  x: number;

  @Column()
  y: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @ManyToOne(() => MemeEntity, (meme) => meme.textBoxes)
  @JoinColumn()
  meme: MemeEntity;
}
