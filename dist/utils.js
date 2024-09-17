import { LoyaltyUser } from "./enums.js";
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
export function showReviewTotal(reviewNum, reviewer, isLoyalty) {
    var displayIcon = isLoyalty === LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        reviewNum.toString() +
            " review" +
            makeMultiple(reviewNum) +
            " | Last reviewed by " +
            reviewer +
            displayIcon;
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        var priceDisplay = document.createElement("div");
        priceDisplay.innerHTML = price.toString() + "$/night";
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
export function getTopTwoReviews(reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
//# sourceMappingURL=utils.js.map