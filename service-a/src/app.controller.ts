import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'create' })
  async createItem(itemDto) {
    console.log('service a received item', itemDto);
    return await this.appService.createItem(itemDto);
  }

  @MessagePattern({ cmd: 'get-by-id' })
  async getItemById(id: number) {
    return await this.appService.getItemById(id);
  }
}
