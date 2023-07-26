import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../domain/user.model';

@Controller('user')
export class UserController {

  constructor(private userSevice: UserService) { }

  @Get(":id")
  public findUser(@Param("id") id: string) {
    return this.userSevice.findOne(id)
  }


  @Post()
  public create(@Body() user: User) {
    this.create(user)
    return "created"
  }
}
