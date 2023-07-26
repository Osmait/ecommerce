import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { jwtConstants } from './constans';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '15d' },
  }),],
  controllers: [AuthController],
  providers: [AuthService, {
    provide: 'APP_GUARD',
    useClass: AuthGuard,
  },]
})
export class AuthModule { }
