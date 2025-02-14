export async function GET() {
  return Response.json({
    status: 200,
    data: [
      {
        id: "1",
        name: "black",
        image: `${process.env.API_URL}/colors/black.png`,
      },
      {
        id: "2",
        name: "blue",
        image: `${process.env.API_URL}/colors/blue.png`,
      },
      {
        id: "3",
        name: "brown",
        image: `${process.env.API_URL}/colors/brown.png`,
      },
      {
        id: "4",
        name: "cream",
        image: `${process.env.API_URL}/colors/cream.png`,
      },
      {
        id: "5",
        name: "gold",
        image: `${process.env.API_URL}/colors/gold.png`,
      },
      {
        id: "6",
        name: "green",
        image: `${process.env.API_URL}/colors/green.png`,
      },
      {
        id: "7",
        name: "grey",
        image: `${process.env.API_URL}/colors/grey.png`,
      },
      {
        id: "8",
        name: "multi",
        image: `${process.env.API_URL}/colors/multi.png`,
      },
      {
        id: "9",
        name: "purple",
        image: `${process.env.API_URL}/colors/purple.png`,
      },
      {
        id: "10",
        name: "red",
        image: `${process.env.API_URL}/colors/red.png`,
      },
      {
        id: "11",
        name: "rose gold",
        image: `${process.env.API_URL}/colors/gold.png`,
      },
      {
        id: "12",
        name: "silver",
        image: `${process.env.API_URL}/colors/silver.png`,
      },
      {
        id: "13",
        name: "yellow",
        image: `${process.env.API_URL}/colors/yellow.png`,
      },
    ],
  });
}
