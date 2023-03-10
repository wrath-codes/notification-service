import { SendNotification } from '@application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
	imports: [DatabaseModule],
	controllers: [NotificationsController],
	providers: [SendNotification],
})
export class httpModule {}
