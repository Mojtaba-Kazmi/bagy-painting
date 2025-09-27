export const dynamic = "force-dynamic";

function fetchInit() {
  return process.env.NODE_ENV !== "production"
    ? { cache: "no-store" }
    : { next: { revalidate: 60 * 60 * 24 * 30 } }; // 30 days in prod
}

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey  = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return Response.json({ rating: null, count: null }, { status: 200 });
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=rating,user_ratings_total` +
    `&language=en&region=AU` +
    `&key=${encodeURIComponent(apiKey)}`;
    
  try {
    const resp = await fetch(url, fetchInit());
    const data = await resp.json();
    return Response.json({
      rating: data?.result?.rating ?? null,
      count: data?.result?.user_ratings_total ?? null,
    }, { status: 200 });
  } catch {
    return Response.json({ rating: null, count: null }, { status: 200 });
  }
}