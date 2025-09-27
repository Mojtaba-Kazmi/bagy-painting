// app/api/reviews/route.js

export const dynamic = "force-dynamic";

function fetchInit() {
  if (process.env.NODE_ENV !== "production") {
    return { cache: "no-store" }; // no cache in dev to make testing easy
  }
  return { next: { revalidate: 60 * 60 * 24 * 30 } }; // 30 days in prod
}

export async function GET(request) {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey  = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return Response.json([], { status: 200 });
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(placeId)}` +
    `&fields=reviews,user_ratings_total,rating` +
    `&reviews_sort=newest` +
    `&reviews_no_translations=true` +
    `&language=en` +
    `&region=AU` +
    `&key=${encodeURIComponent(apiKey)}`;

  try {
    const resp = await fetch(url, fetchInit());
    const data = await resp.json();

    const reviews = Array.isArray(data?.result?.reviews)
      ? data.result.reviews
      : [];

    return Response.json(reviews, { status: 200 });
  } catch {
    return Response.json([], { status: 200 });
  }
}