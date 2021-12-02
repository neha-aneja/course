import { Module, MiddlewareConsumer } from '@nestjs/common';
//import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
//import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, AuthService,], 
    //{provide: APP_INTERCEPTOR,useClass : CurrentUserInterceptor}],
  controllers: [UserController]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
