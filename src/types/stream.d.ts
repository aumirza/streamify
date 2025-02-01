interface IStream {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: Date | string;
  genre: string;
  streamCount: number;
  userId: number;
}
