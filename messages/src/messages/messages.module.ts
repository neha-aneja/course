import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServices } from './messages.Services';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServices, MessagesRepository] //things that can be used as dependencies for other classes
})
export class MessagesModule {}
