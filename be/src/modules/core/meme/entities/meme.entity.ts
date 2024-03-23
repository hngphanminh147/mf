import { AbstractBaseEntity } from '@common/entities';
import { Column, Entity, OneToMany } from 'typeorm';
import { TextBoxEntity } from './text-box.entity';

@Entity({ name: 'meme' })
export class MemeEntity extends AbstractBaseEntity {
  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'image_url', type: 'varchar', nullable: false })
  imageUrl: string;

  @OneToMany(() => TextBoxEntity, (textBox) => textBox.meme)
  textBoxes: TextBoxEntity[];
}
