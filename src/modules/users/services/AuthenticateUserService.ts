import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';

import { IUsersRepository } from '@modules/users/iRepositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatched = await compare(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination.');
    }

    const token = sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        }
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )

    return {token, user};
  }
}

export { AuthenticateUserService }