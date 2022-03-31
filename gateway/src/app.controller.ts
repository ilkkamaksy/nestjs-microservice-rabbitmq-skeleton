import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/items/:id')
  getItemById(@Param('id') id: number) {
    return this.appService.getItemById(id);
  }

  @Post('/items')
  createItem(@Body() createItemDto) {
    return this.appService.createItem(createItemDto);
  }

  @Get('/bars/:id')
  getBarById(@Param('id') id: number) {
    return this.appService.getBarById(id);
  }

  @Post('/bars')
  createBar(@Body() createBarDto) {
    return this.appService.createBar(createBarDto);
  }
}
