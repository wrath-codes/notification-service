import { Module } from '@nestjs/common';
import { httpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
	imports: [httpModule, DatabaseModule],
})
export class AppModule {}
