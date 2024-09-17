import { Price, Country } from "./types";
import { LoyaltyUser } from "./enums";

export interface Properties {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface MainProperty {
  src: string;
  title: string;
  reviews: Review[];
}
