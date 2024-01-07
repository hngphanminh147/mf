import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { TextBoxEntity } from './text-box.entity';

@Entity({ name: 'meme' })
export class MemeEntity extends AbstractBaseEntity {
  @Column()
  imageUrl: string;

  @OneToMany(() => TextBoxEntity, (textBox) => textBox.meme)
  textBoxes: TextBoxEntity[];
}
