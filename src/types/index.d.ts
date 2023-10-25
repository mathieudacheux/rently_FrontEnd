import { DialogHTMLAttributes } from 'react'

export {}

declare global {
  interface Window {
    image_modal: DialogHTMLAttributes
    appointment_modal: DialogHTMLAttributes
  }
}
