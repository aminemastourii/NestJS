import { Body, Controller, Get, Param, Post,  Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get()
  getroot(): string {
    return this.appService.getroot();
  }
  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/compliment")
  getasba(): string {
    return this.appService.getcompliment();
  }
  @Post("/love")
  postSayWelcome(@Body() body:{name : string, age : number,profession : string},@Res() res ) {
    //const total: number = Number(param.numb1) + Number(param.numb2);
    //return String(total);
  
    //return this.appService.postSayWelcome(body.name , body.age , body.profession);
    res.send(this.appService.postSayWelcome(body.name , body.age , body.profession));
  }
}
