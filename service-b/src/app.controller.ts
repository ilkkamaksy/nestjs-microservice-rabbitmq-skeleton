import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'create' })
  async createBar(barDto) {
    console.log('service b received bar', barDto);
    return await this.appService.createBar(barDto);
  }

  @MessagePattern({ cmd: 'get-by-id' })
  getBarById(id: number) {
    return this.appService.getBarById(id);
  }
}
