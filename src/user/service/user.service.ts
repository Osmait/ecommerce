import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../domain/user.model';
import { Repository } from 'typeorm';

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


  public async create(user: User): Promise<void> {
    await this.userRepository.save(user)
  }
}
