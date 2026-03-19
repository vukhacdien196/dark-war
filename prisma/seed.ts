import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample user
  const user = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin',
      isActive: true,
    },
  })

  // Create sample room
  const room = await prisma.room.upsert({
    where: { id: 'bathroom01' },
    update: {},
    create: {
      id: 'bathroom01',
      name: 'Bath Room',
      width: 1920,
      height: 1440,
      backgroundImageUrl: '/background/bathroom01.jpg',
      createdBy: user.id,
      wallAreas: {
        create: [
          {
            guid: 'F',
            tileType: ['2'],
            baseWidth: 2152.8,
            baseHeight: 782.54,
            bottomLeft: [0, -66.8],
            topLeft: [523.68, 363.36],
            topRight: [1499.44, 363.36],
            bottomRight: [2152.8, -66.8],
            tileRateWidth: 0.7,
            tileRateHeight: 0.26,
          },
          {
            guid: 'M',
            tileType: ['3', 'Paint'],
            baseWidth: 975.36,
            baseHeight: 884.64,
            bottomLeft: [523.68, 363.36],
            topLeft: [523.68, 1248],
            topRight: [1499.44, 1248],
            bottomRight: [1499.44, 363.36],
            tileRateWidth: 0.32,
            tileRateHeight: 0.32,
          },
        ],
      },
    },
  })

  console.log('✅ Database seeded successfully')
  console.log('👤 User:', user)
  console.log('🏠 Room:', room)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
