import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async findOne(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
  async create(name: string, email: string, password: string): Promise<User> {
    // const hashedPassword = await bcrypt.hash(password, 10); //si no se hiciera en el login de auth habría que ponerlo aquí
    const user = this.userRepository.create({
      name,
      email,
      password,
    });
    return this.userRepository.save(user);
  }
}
