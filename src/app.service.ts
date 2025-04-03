import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getroot(): string {
    return 'This is me , Mohamed Amine Mastouri trying to learn NestJS';
  }
  getHello(): string {
    return 'Salem saaaaahbi';
  }
  getcompliment(): string {
    return 'JAD AALIK';
  }
  postSayWelcome(name :string , age :number , professtion : string  ): string {
    return  'Welcome , this is ' + name + ' and he is ' + age + ' years old and he is a ' + professtion;
  } 
}
