declare module '#app' {
  interface AppConfigInput {
    contact?: {
      phone?: string
      phoneLink?: string
      email?: string
      facebook?: string
      youtube?: string
      tiktok?: string
      zalo?: string
      zaloOA?: string
    }
    app?: {
      name?: string
      description?: string
      slogan?: string
    }
    company?: {
      name?: string
      address?: string
      workingHours?: string
    }
  }
}

export {}

