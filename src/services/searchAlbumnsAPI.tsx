const searchAlbumsAPI = async (artist: string) => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;

  const APIResponse = await fetch(getAlbumsAPI);

  const { results } = await APIResponse.json();

  const response = results.map(({
    artistId,
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
  }: {
    artistId: number,
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    releaseDate: string,
    trackCount: number,
  }) => ({
    artistId,
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
  }));
  return response;
};

export default searchAlbumsAPI;
