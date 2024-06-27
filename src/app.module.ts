import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TaskModule, UserModule, PaymentsModule],
  providers: [AuthService],
  controllers: [HelloController],
})
export class AppModule {}
