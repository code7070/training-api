export async function GET() {
  return Response.json({
    status: 200,
    data: [
      {
        id: "1",
        name: "silver",
      },
      {
        id: "2",
        name: "gold",
      },
      {
        id: "3",
        name: "platinum",
      },
      {
        id: "4",
        name: "titanium",
      },
      {
        id: "5",
        name: "pearl",
      },
      {
        id: "6",
        name: "brass",
      },
    ],
  });
}
