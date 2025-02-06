export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return Response.json({ error: "Missing API key or Place ID" }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    // Cache response for 30 days (2592000 seconds)
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 24 * 30 }, // 30 days cache
    });

    const data = await response.json();

    if (data.result && data.result.reviews) {
      return Response.json(data.result.reviews, { status: 200 });
    } else {
      return Response.json({ error: "No reviews found." }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error: "Failed to fetch reviews." }, { status: 500 });
  }
}