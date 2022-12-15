import { PrismaService } from './infra/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [PrismaService],
})
export class AppModule {}
