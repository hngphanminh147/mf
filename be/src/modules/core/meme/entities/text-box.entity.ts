import { AbstractBaseEntity } from '@common/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MemeEntity } from './meme.entity';

@Entity({ name: 'text_box' })
export class TextBoxEntity extends AbstractBaseEntity {
  // top-left corner location
  @Column({ name: 'x', type: 'integer', nullable: false })
  x: number;

  @Column({ name: 'y', type: 'integer', nullable: false })
  y: number;

  @Column({ name: 'width', type: 'integer', nullable: false })
  width: number;

  @Column({ name: 'height', type: 'integer', nullable: false })
  height: number;

  @ManyToOne(() => MemeEntity, (meme) => meme.textBoxes)
  @JoinColumn({ name: 'meme_id' })
  meme: MemeEntity;
}
