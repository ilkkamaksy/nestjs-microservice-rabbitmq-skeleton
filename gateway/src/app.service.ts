import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_A') private readonly clientA: ClientProxy,
    @Inject('SERVICE_B') private readonly clientB: ClientProxy,
  ) {}

  async createItem(createItemDto) {
    console.log('gateway received item', createItemDto);
    return await this.clientA.send({ cmd: 'create' }, createItemDto);
  }

  async getItemById(id: number) {
    return await this.clientA.send({ cmd: 'get-by-id' }, id);
  }

  async createBar(createBarDto) {
    console.log('gateway received bar', createBarDto);
    return await this.clientB.send({ cmd: 'create' }, createBarDto);
  }

  getBarById(id: number) {
    return this.clientB.send({ cmd: 'get-by-id' }, id);
  }
}
