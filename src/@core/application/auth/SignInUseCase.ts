import AuthGateway from '~/@core/infra/gateways/AuthGateway';
import { UserType } from '~/presentation/context/auth/constants';

interface Input {
  email: string;
  password: string;
}

interface Output {
  user: UserType;
  accessToken: string;
}

export class SignInUseCase {
  constructor(
    private authenticationGateway: AuthGateway,
    private readonly params: Input
  ) {}

  async execute(): Promise<Output> {
    return await this.authenticationGateway.signIn(this.params);
  }
}
