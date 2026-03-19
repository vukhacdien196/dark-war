export default {
  Id: "bathroom01",
  Title: "Bath Room",
  BackgroundImageUrl: "/background/bathroom01.jpg", // background room image
  RoomImageUrl: "/background-obj/bathroom01.png", // các vật thể trong phòng
  GlossyImageUrl: "/background-glossy/bathroom01.jpg", // ánh sáng phản chiếu
  MattImageUrl: "/background-matt/bathroom01.jpg", // ánh sáng tán xạ
  Width: 1920,
  Height: 1440,
  SetDesign: {
    WallAreas: [
      {
        TileType: ["2"],
        BaseWidth: 1920,
        BaseHeight: 1440,
        BottomLeft: [0, -66.79999999999998],
        TopLeft: [523.68, 363.3600000000001],
        TopRight: [1499.44, 363.3600000000001],
        BottomRight: [2152.8, -66.79999999999998],
        TileRateWidth: 0.69999532704,
        TileRateHeight: 0.25588782566400003,
        GUID: "F", // front wall
      },
      {
        TileType: ["3", "Paint"],
        BaseWidth: 1920,
        BaseHeight: 1440,
        BottomLeft: [523.68, 363.3600000000001],
        TopLeft: [523.68, 1248.0000000000002],
        TopRight: [1499.44, 1248.0000000000002],
        BottomRight: [1499.44, 363.3600000000001],
        TileRateWidth: 0.317143925232,
        TileRateHeight: 0.319606438224,
        GUID: "M", // middle wall
      },
      {
        TileType: ["3", "Paint"],
        BaseWidth: 1920,
        BaseHeight: 1440,
        BottomLeft: [0, -66.79999999999998],
        TopLeft: [0, 1887.84],
        TopRight: [523.68, 1248.0000000000002],
        BottomRight: [523.68, 363.3600000000001],
        TileRateWidth: 0.2688462036,
        TileRateHeight: 0.7060766937599999,
        GUID: "L", // left wall
      },
      {
        TileType: ["3", "Paint"],
        BaseWidth: 1920,
        BaseHeight: 1440,
        BottomLeft: [1499.2, 363.3600000000001],
        TopLeft: [1499.2, 1248.0000000000002],
        TopRight: [2152.8, 1887.84],
        BottomRight: [2152.8, -66.79999999999998],
        OffsetX: 33,
        TileRateWidth: 0.296772997872,
        TileRateHeight: 0.7061516097599999,
        GUID: "R", // right wall
      },
    ],
  },
  // areas that user can place products
  DefinedAreas: [
    {
      GUID: "F",
      AreaGUID: "F",
      BottomLeft: [0, 0],
      TopLeft: [0, 1440],
      TopRight: [1920, 1440],
      BottomRight: [1920, 0],
      NoResize: true,
    },
  ],
};
