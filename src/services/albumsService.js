import * as albumsRepository from "../repositories/albumsRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function getAlbums() {
    const result = await albumsRepository.getAlbums();
    if (!result) throw notFoundError('albums');

    return result;
}