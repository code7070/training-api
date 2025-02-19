import { mockProductUOM } from "../mock";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const per_page = parseInt(url.searchParams.get("per_page") ?? "") || 10;
  const page = parseInt(url.searchParams.get("page") ?? "") || 1;
  const search = url.searchParams.get("search") || "";

  const filteredData = mockProductUOM.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase()),
  );

  const paginatedData = filteredData.slice(
    (page - 1) * per_page,
    page * per_page,
  );

  return Response.json({
    status: "success",
    data: {
      current_page: 1,
      data: paginatedData,
      first_page_url: `http://127.0.0.1:8000/hero-api/product/uom/list?page=1`,
      from: (page - 1) * per_page + 1,
      last_page: Math.ceil(filteredData.length / per_page),
      last_page_url: `http://127.0.0.1:8000/hero-api/product/uom/list?page=${Math.ceil(filteredData.length / per_page)}`,
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://127.0.0.1:8000/hero-api/product/uom/list?page=1",
          label: "1",
          active: true,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url: null,
      path: "http://127.0.0.1:8000/hero-api/product/uom/list",
      per_page,
      prev_page_url: null,
      to: page,
      total: mockProductUOM.length,
    },
  });
}
