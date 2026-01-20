import z from 'zod'

import { type User } from 'better-auth'
import { LucideIcon } from 'lucide-react'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const signupSchema = z.object({
  fullName: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(8),
})

export interface NavPrimaryProps {
  items: {
    title: string
    to: string
    icon: LucideIcon
    activeOptions: { exact: boolean }
  }[]
}

export interface NavUserProps {
  user: User
}
