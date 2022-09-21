import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface MenuItem {
  title?: string;
  to?: string;
  click?: Function;
  icon?: string;
}
error test;
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getErrorTest() {
    const items: MenuItem[] | null = [
      {
        title: '',
        icon: 'mdi-earth',
      },
    ];
    items.unshift(undefined);
  }
}
