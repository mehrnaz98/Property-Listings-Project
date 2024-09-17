import { LoyaltyUser } from "./enums.js";
import { Review } from "./interfaces.js";

const returningUserDisplay = document.querySelector(
  "#returning-user"
) as HTMLElement;
const userNameDisplay = document.querySelector("#user") as HTMLElement;
const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;

export function showReviewTotal(
  reviewNum: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const displayIcon = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    reviewNum.toString() +
    " review" +
    makeMultiple(reviewNum) +
    " | Last reviewed by " +
    reviewer +
    displayIcon;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "$/night";
    element.appendChild(priceDisplay);
  }
}

export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
