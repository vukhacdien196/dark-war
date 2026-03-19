declare module '@/config/contact.json' {
  interface SocialLink {
    url: string
    icon: string
    label: string
    color: string
  }

  interface SocialLinkWithName extends SocialLink {
    name: string
  }

  interface ContactConfig {
    contact: {
      zalo: string
      facebook: string
      phone: string
      phoneLink: string
      youtube: string
      tiktok: string
      zaloOA: string
      email: string
    }
    social: {
      zalo: SocialLink
      facebook: SocialLink
      youtube: SocialLink
      tiktok: SocialLink
      phone: SocialLink & { number: string }
      email: SocialLink & { address: string }
    }
    footer: {
      socialLinks: SocialLinkWithName[]
      contactInfo: {
        phone: {
          display: string
          link: string
        }
        email: {
          display: string
          link: string
        }
        address: string
        workingHours: string
      }
    }
  }
  
  const config: ContactConfig
  export default config
}

declare module '~/config/contact.json' {
  interface SocialLink {
    url: string
    icon: string
    label: string
    color: string
  }

  interface SocialLinkWithName extends SocialLink {
    name: string
  }

  interface ContactConfig {
    contact: {
      zalo: string
      facebook: string
      phone: string
      phoneLink: string
      youtube: string
      tiktok: string
      zaloOA: string
      email: string
    }
    social: {
      zalo: SocialLink
      facebook: SocialLink
      youtube: SocialLink
      tiktok: SocialLink
      phone: SocialLink & { number: string }
      email: SocialLink & { address: string }
    }
    footer: {
      socialLinks: SocialLinkWithName[]
      contactInfo: {
        phone: {
          display: string
          link: string
        }
        email: {
          display: string
          link: string
        }
        address: string
        workingHours: string
      }
    }
  }
  
  const config: ContactConfig
  export default config
}

