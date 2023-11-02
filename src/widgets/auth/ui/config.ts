import { IIntroTexts } from './intro-switch'

export const texts: { signIn: IIntroTexts; signUp: IIntroTexts } = {
  signIn: {
    title: 'Welcome Back !',
    description:
      'To keep connected with us please login with your personal info',
    buttonText: 'SIGN IN',
  },
  signUp: {
    title: 'Hello Friend !',
    description: 'Enter your personal details and start journey with us',
    buttonText: 'SIGN UP',
  },
}
