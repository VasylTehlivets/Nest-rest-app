import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule } from '@nestjs-plus/rabbitmq';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://your-mongo-db-url', {
      useNewUrlParser: true,
      useUnifieldTopology: true,
    }),

  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
