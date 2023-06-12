import { UserType } from '~/presentation/context/auth/constants';

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignInOutput {
  user: UserType;
  accessToken: string;
}

export default interface AuthGateway {
  signIn({ email, password }: SignInInput): Promise<SignInOutput>;
  signOut(): Promise<void>;
}
