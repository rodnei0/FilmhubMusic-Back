import axios from "axios";

export async function getAlbums() {
    const  result = await axios.get("https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json");

    return result.data.feed.results;
}
