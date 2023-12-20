import emailjs from '@emailjs/browser'

export const sendEmailMessage = (data: any) =>
  emailjs.send(
    'service_fphhwcp',
    'template_9gygzql',
    data,
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
  )
