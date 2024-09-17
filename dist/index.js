import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
} from "./utils.js";
import { LoyaltyUser, Permissions } from "./enums.js";
import { MainProperty } from "./classes.js";
var propertyContainer = document.querySelector(".properties");
var reviewContainer = document.querySelector(".reviews");
var container = document.querySelector(".container");
var button = document.querySelector("button");
var footer = document.querySelector(".footer");
document.addEventListener("DOMContentLoaded", function () {
  var isLoggedIn;
  // Reviews
  var reviews = [
    {
      name: "Sheia",
      stars: 5,
      loyaltyUser: LoyaltyUser.GOLD_USER,
      date: "01-04-2021",
    },
    {
      name: "Andrzej",
      stars: 3,
      loyaltyUser: LoyaltyUser.BRONZE_USER,
      date: "28-03-2021",
    },
    {
      name: "Omar",
      stars: 4,
      loyaltyUser: LoyaltyUser.SILVER_USER,
      date: "27-03-2021",
      // description: "Great hosts, location was a bit further than said",
    },
  ];
  // User
  var you = {
    userName: { firstName: "Bobby", lastName: "Brown" },
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 31,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
  };
  // properties
  var properties = [
    {
      image: "images/colombia-property.jpg",
      title: "Colombian Shack",
      price: 45,
      location: {
        firstLine: "shack 37",
        city: "Bogota",
        code: 45632,
        country: "Colombia",
      },
      contact: [+1123495082908, "marywinkle@gmail.com"],
      isAvailable: true,
    },
    {
      image: "images/poland-property.jpg",
      title: "Polish Cottage",
      price: 34,
      location: {
        firstLine: "no 23",
        city: "Gdansk",
        code: 343903,
        country: "Poland",
      },
      contact: [+1123495082908, "garydavis@hotmail.com"],
      isAvailable: false,
    },
    {
      image: "images/london-property.jpg",
      title: "London Flat",
      price: 23,
      location: {
        firstLine: "flat 15",
        city: "London",
        code: 35433,
        country: "United Kingdom",
      },
      contact: [+1123495082908, "andyluger@aol.com"],
      isAvailable: true,
    },
    {
      image: "images/malaysian-hotel.jpeg",
      title: "Malia Hotel",
      price: 35,
      location: {
        firstLine: "Room 4",
        city: "Malia",
        code: 45334,
        country: "Malaysia",
      },
      contact: [+60349822083, "lee34@gmail.com"],
      isAvailable: false,
    },
  ];
  // Functions
  showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
  populateUser(you.isReturning, you.userName.firstName);
  var authorityStatus;
  isLoggedIn = true;
  //Add the properties
  for (var i = 0; i < properties.length; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement("img");
    image_1.setAttribute("src", properties[i].image);
    card.appendChild(image_1);
    propertyContainer.appendChild(card);
    showDetails(isLoggedIn, card, properties[i].price);
  }
  // Add latest reviews
  var count = 0;
  function addReviews(array) {
    if (!count) {
      count++;
      var topTwo = getTopTwoReviews(array);
      for (var i = 0; i < topTwo.length; i++) {
        var card = document.createElement("div");
        card.classList.add("review-card");
        card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
        reviewContainer.appendChild(card);
      }
      container.removeChild(button);
    }
  }
  button.addEventListener("click", function () {
    return addReviews(reviews);
  });
  // let currentLocation;
  var currentLocation = { city: "Rasht", time: "14:47", temperature: 27 };
  footer.innerHTML =
    "Location: " +
    currentLocation.city +
    " | " +
    currentLocation.time +
    " | " +
    currentLocation.temperature.toString() +
    "℃";
  // let currentLocation: [string, string, number] = ['Rasht', '14:47', 27]
  // footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
  var yourMainProperty = new MainProperty(
    "images/italian-property.jpg",
    "Italian House",
    [
      {
        name: "Olive",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "12-04-2021",
      },
    ]
  );
  var mainImageContainer = document.querySelector(".main-image");
  var image = document.createElement("img");
  image.setAttribute("src", yourMainProperty.src);
  mainImageContainer.appendChild(image);
});
//# sourceMappingURL=index.js.map
