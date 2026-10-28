import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
// import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    // return `ENV ${this.configService.get<number>('PORT')}`;
    return this.appService.getHello();
  }
}
