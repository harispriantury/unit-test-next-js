export interface IDataSurah {
  nomor: number;
  arti: string;
  audioFull: string[];
  namaLatin: string;
  jumlahAyat: number;
  nama: string;
}

interface IAyat {
  audio: any;
  nomorAyat: number;
  deskripsi: string;
  teksArab: string;
  teksIndonesia: string;
  teksLatin: string;
}

export interface IDetailSurah extends IDataSurah {
  ayat: IAyat[];
}
