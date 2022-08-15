import { Terbaru, Terlama, AZ, ZA, BelumSelesai } from "../static/icons";

export const sortList = [
  {
    icon: Terbaru,
    title: "Terbaru",
    isChecked: true,
    dataCy: "sort-latest",
  },
  {
    icon: Terlama,
    title: "Terlama",
    isChecked: false,
    dataCy: "sort-oldest",
  },
  {
    icon: AZ,
    title: "A-Z",
    isChecked: false,
    dataCy: "sort-az",
  },
  {
    icon: ZA,
    title: "Z-A",
    isChecked: false,
    dataCy: "sort-za",
  },
  {
    icon: BelumSelesai,
    title: "Belum Selesai",
    isChecked: false,
    dataCy: "sort-unfinished",
  },
];
