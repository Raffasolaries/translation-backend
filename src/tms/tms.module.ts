import { Module } from '@nestjs/common';
import { TmsService } from './tms.service';
import { TmsController } from './tms.controller';

@Module({
  controllers: [TmsController],
  providers: [TmsService]
})
export class TmsModule {}
