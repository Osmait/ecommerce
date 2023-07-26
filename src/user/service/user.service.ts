import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, userRole } from '../domain/user.model';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';
import { throws } from 'assert';

@Injectable()
export class UserService {


  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  public async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id }

    })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user

  }

  public async finByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email }
    })
    if (!user) {
      throw new NotFoundException("User Not found ")
    }

    return user
  }

  public async create(user: User): Promise<void> {

    user.id = randomUUID()
    user.role = userRole.Customer
    await this.userRepository.save(user)
  }
}
