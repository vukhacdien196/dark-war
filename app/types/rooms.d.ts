// Type definitions for rooms.json
declare module '@config/rooms.json' {
  export interface RoomItem {
    id: string;
    name: string;
    image: string;
    description: string;
  }

  export interface RoomCategory {
    name: string;
    icon: string;
    samples: RoomItem[];
    designed: RoomItem[];
  }

  export interface RoomConfig {
    rooms: {
      [key: string]: RoomCategory;
    };
    categories: {
      id: string;
      name: string;
      icon: string;
    }[];
  }

  const config: RoomConfig;
  export default config;
}
