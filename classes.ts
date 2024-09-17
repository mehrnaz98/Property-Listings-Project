import { Review } from "./interfaces";

export class MainProperty {
  src: string;
  title: string;
  reviews: Review[];

  constructor(src, title, reviews) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}
