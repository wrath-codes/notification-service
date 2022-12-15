import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { PrismaService } from './infra/database/prisma.service';
import { Module } from '@nestjs/common';

@Module({
	imports: [],
	controllers: [NotificationsController],
	providers: [PrismaService],
})
export class AppModule {}
