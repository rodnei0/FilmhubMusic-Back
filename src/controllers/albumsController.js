import * as albumsService from "../services/albumsService.js";

export async function getAlbums(req, res) {
    const result = await albumsService.getAlbums();

    res.status(200).send(result);
}
