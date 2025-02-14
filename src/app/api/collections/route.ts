export async function GET() {
  return Response.json({
    status: 200,
    data: [
      {
        id: "1",
        name: "Coco Crush",
      },
      {
        id: "2",
        name: "Camélia",
      },
      {
        id: "3",
        name: "Comète",
      },
      {
        id: "4",
        name: "Ruban",
      },
      {
        id: "5",
        name: "Baroque",
      },
      {
        id: "6",
        name: "Soleil de Artsy",
      },
    ],
  });
}
