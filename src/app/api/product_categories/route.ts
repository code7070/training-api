export async function GET() {
  return Response.json({
    status: 200,
    data: [
      {
        id: "1",
        name: "ring",
      },
      {
        id: "2",
        name: "necklace",
      },
      {
        id: "3",
        name: "earring",
      },
      {
        id: "4",
        name: "bracelet",
      },
    ],
  });
}
