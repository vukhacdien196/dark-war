# 🚀 Setup Guide: Nuxt + Better Auth + Prisma + PostgreSQL

Hướng dẫn setup hoàn chỉnh cho server pattern HOT với authentication và database.

## 📋 Prerequisites

- **Node.js**: 18+ (recommended 20+)
- **PostgreSQL**: 13+ (recommended 15+)
- **npm** or **yarn** or **pnpm**

## 🛠️ Quick Setup

### 1. Clone & Install
```bash
git clone <your-repo>
cd room-visualizer
npm install
```

### 2. Environment Setup
```bash
cp .env.example .env
```

Edit `.env` with your values:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/room_visualizer"

# Better Auth
BETTER_AUTH_SECRET="your-super-secret-key-here"
BETTER_AUTH_URL="http://localhost:3000"

# OAuth Providers (Optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with sample data
npm run db:seed
```

### 4. Development
```bash
npm run dev
```

Server sẽ chạy tại: http://localhost:3000

## 📁 Project Structure

```
├── server/
│   ├── api/           # API routes
│   │   ├── auth/[...all].ts    # Better Auth handler
│   │   ├── health.get.ts       # Health check
│   │   ├── rooms.get.ts        # Get rooms
│   │   └── rooms.post.ts       # Create room
│   ├── middleware/
│   │   └── logger.ts           # Request logging
│   ├── plugins/
│   │   └── database.ts         # Database plugin
│   ├── utils/
│   │   ├── prisma.ts           # Prisma client
│   │   └── response.ts         # API responses
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   └── auth.ts                 # Better Auth config
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Database seeding
└── .env.example                # Environment template
```

## 🔐 Authentication

### Better Auth Features
- ✅ Email/Password authentication
- ✅ Social login (GitHub, Google)
- ✅ Session management
- ✅ Password reset
- ✅ Email verification

### API Endpoints
```typescript
// Sign up
POST /api/auth/signup

// Sign in
POST /api/auth/signin

// Sign out
POST /api/auth/signout

// Get session
GET /api/auth/session
```

### Usage in Components
```vue
<script setup>
const { data: session } = await $fetch('/api/auth/session')

if (session) {
  // User is authenticated
  console.log('User:', session.user)
}
</script>
```

## 🗄️ Database

### Prisma Schema
- **Users**: Authentication & profiles
- **Rooms**: Room data with wall areas
- **WallAreas**: Individual wall configurations
- **Sessions**: Better Auth sessions
- **Accounts**: OAuth provider accounts

### Database Commands
```bash
# View database in browser
npm run db:studio

# Create migration
npm run db:migrate

# Reset database
npm run db:reset

# Generate client after schema changes
npm run db:generate
```

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema changes
npm run db:migrate      # Create migration
npm run db:seed         # Seed database
npm run db:studio       # Open Prisma Studio
npm run db:reset        # Reset database

# Setup
npm run setup           # Full setup (install + db + seed)
```

## 🌐 API Routes

### Health Check
```bash
GET /api/health
```

### Rooms
```bash
GET  /api/rooms         # Get all rooms
POST /api/rooms         # Create new room
```

### Authentication
```bash
POST /api/auth/signin
POST /api/auth/signup
POST /api/auth/signout
GET  /api/auth/session
```

## 🔒 Security

### Environment Variables
- `BETTER_AUTH_SECRET`: JWT signing secret
- `DATABASE_URL`: PostgreSQL connection string
- `NUXT_API_SECRET`: API secret for server-side operations

### Best Practices
- ✅ Never commit `.env` file
- ✅ Use strong passwords for database
- ✅ Enable SSL in production
- ✅ Use HTTPS in production
- ✅ Validate all inputs with Zod schemas

## 🚀 Production Deployment

### Build
```bash
npm run build
```

### Environment
```env
NODE_ENV=production
DATABASE_URL="postgresql://user:pass@host:5432/db"
BETTER_AUTH_URL="https://yourdomain.com"
```

### Server
```bash
npm run preview
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Database Connection Error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Check connection
psql -h localhost -U username -d room_visualizer
```

#### 2. Prisma Client Error
```bash
# Regenerate Prisma client
npm run db:generate
```

#### 3. Better Auth Issues
```bash
# Check environment variables
echo $BETTER_AUTH_SECRET
echo $DATABASE_URL
```

#### 4. Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📚 Additional Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Better Auth Docs](https://better-auth.com)
- [Prisma Documentation](https://prisma.io/docs)
- [PostgreSQL Docs](https://postgresql.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details.
