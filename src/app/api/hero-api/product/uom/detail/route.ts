import { mockProductUOM } from "../mock";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (id) {
    const found = mockProductUOM.filter((i) => i.id === parseInt(id, 10));
    if (found) {
      return Response.json({
        status: "success",
        data: found,
      });
    } else
      return Response.json({
        status: 400,
        error: { message: "No data found" },
        data: null,
      });
  }
  return Response.json(
    {
      status: 400,
      error: { message: "No ID provided" },
      data: null,
    },
    { status: 400 },
  );
}
