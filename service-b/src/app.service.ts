import { Injectable } from '@nestjs/common';
import { BarEntity } from './bar.entity';
import { BarRepository } from './bar.repository';

@Injectable()
export class AppService {
  constructor(private readonly barRepository: BarRepository) {}

  createBar(barDto) {
    const bar = new BarEntity();
    bar.name = barDto.name;
    return this.barRepository.save(bar);
  }
  getBarById(id) {
    return this.barRepository.findOne(id);
  }
}
