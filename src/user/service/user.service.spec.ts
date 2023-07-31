import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from '../domain/user.model';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<User>;

  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return User by email ', async () => {
    const user = new User();
    user.id = '1';
    user.email = 'saulburgos6@gmail.com';
    user.name = 'saul';
    user.lastName = 'burgos';
    user.password = '1234567';
    const result = Promise.resolve(user);
    jest.spyOn(userRepository, 'findOne').mockImplementation(() => result);
    await expect(service.finByEmail(user.email)).resolves.toEqual(user);
  });

  it('should return User by id ', async () => {
    const user = new User();
    user.id = '1';
    user.email = 'saulburgos6@gmail.com';
    user.name = 'saul';
    user.lastName = 'burgos';
    user.password = '1234567';
    const result = Promise.resolve(user);
    jest.spyOn(userRepository, 'findOne').mockImplementation(() => result);
    await expect(service.findOne(user.id)).resolves.toEqual(user);
  });
});
