import { EntityRepository, Repository } from 'typeorm';
import { BarEntity } from './bar.entity';
@EntityRepository(BarEntity)
export class BarRepository extends Repository<BarEntity> {}
