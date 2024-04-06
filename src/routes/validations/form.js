import { body } from "express-validator";

export const vendorBookingValidation = [
  body("address").isString().exists().withMessage("Address must exist!"),
  body("booking-category")
    .exists()
    .withMessage("Booking Category must exist!")
    .bail()
    .isArray()
    .withMessage("booking Category must be an array"),
  body("booking-category.*")
    .trim()
    .exists()
    .withMessage("Booking Category must exist!")
    .bail()
    .isIn(["venue", "catering-service", "decore", "photo-video", "dj-band"])
    .withMessage("Please provide a valid Category"),
  body("catering-service")
    .if(body("booking-category").contains("catering-service"))
    // .withMessage("booking-category must contain catering-service")
    .exists()
    .withMessage("Catering Service must exist!")
    .bail()
    .isArray()
    .withMessage("Catering Service must be an array"),
  body("catering-service.*")
    .trim()
    .exists()
    .withMessage("Catering Category must exist!")
    .bail()
    .isIn([
      "dinner",
      "breakfast",
      "lunch",
      "finger-food",
      "soft-drink",
      "water",
      "juice",
      "alcohol",
      "all",
      "cocktails",
    ])
    .withMessage("Please provide a valid Catering Service Category"),
  body("city").exists().withMessage("City must exist!").bail().isString().withMessage("City must be a string"),
  body("company-name")
    .exists()
    .withMessage("Company Name must exist!")
    .bail()
    .isString()
    .withMessage("Company Name must be a string"),
  body("country").exists().withMessage("Country must exist!").bail().isString().withMessage("Country must be a string"),
  body("event-date").exists().withMessage("Date of Event must exist!").trim(),
  body("decore")
    .if(body("booking-category").contains("decor"))
    .exists()
    .withMessage("Decore must exist!")
    .isArray()
    .withMessage("Decore must be an array"),
  body("decore.*")
    .trim()
    .exists()
    .withMessage("Decore Category must exist!")
    .bail()
    .isIn([
      "tent",
      "stage",
      "stage-decore",
      "high-table",
      "full-decore",
      "speaker",
      "mixer",
      "table",
      "mic",
      "light",
      "high-chair",
      "chair",
      "tv",
      "table-cloth",
    ])
    .withMessage("Please provide a valid Decore Category"),
  body("dj-band")
    .if(body("booking-category").contains("dj-band"))
    .exists()
    .withMessage("Dj/Band must exist!")
    .bail()
    .isArray()
    .withMessage("Dj/Band must be an array"),
  body("dj-band.*")
    .trim()
    .exists()
    .withMessage("Dj/Band Category must exist!")
    .bail()
    .isIn(["mobiledj", "genere-dj", "club-dj", "acoustic-live-music", "band-live-music"])
    .withMessage("Please provide a valid Dj/Band Category"),
  body("email").exists().withMessage("Email must exist!").isEmail().withMessage("Email must be a valid email"),
  body("first-name")
    .exists()
    .withMessage("First Name must exist!")
    .bail()
    .isString()
    .withMessage("First Name must be a string"),
  body("last-name")
    .exists()
    .withMessage("Last Name must exist!")
    .bail()
    .isString()
    .withMessage("Last Name must be a string"),
  body("max-budget")
    .exists()
    .withMessage("Max Budget must exist!")
    .bail()
    .isNumeric()
    .withMessage("Max Budget must be a number"),
  body("min-budget")
    .exists()
    .withMessage("Min Budget must exist!")
    .bail()
    .isNumeric()
    .withMessage("Min Budget must be a number"),
  body("number-of-people")
    .exists()
    .withMessage("Number of People must exist!")
    .bail()
    .isArray()
    .withMessage("Number Of People Must Be an Array"),
  body("phone-number").isMobilePhone().exists().withMessage("Phone Number must exist!"),
  body("photo-video")
    .if(body("booking-category").contains("photo-video"))
    .exists()
    .withMessage("Photo/Video must exist!")
    .bail()
    .isArray()
    .withMessage("Photo/Video must be an array"),
  body("photo-video.*")
    .trim()
    .isIn(["informal-fun", "product", "group-family", "professional", "portrait"])
    .withMessage("Please provide a valid Photo/Video Category")
    .exists()
    .withMessage("Photo/Video Category must exist!"),
  body("venue-type")
    .if(body("booking-category").contains("venue"))
    .exists()
    .withMessage("Venue Type must exist!")
    .bail()
    .isArray()
    .withMessage("Venue Type must be an array"),
  body("venue-type.*")
    .trim()
    .isIn(["hotel", "open-space", "working-space", "airbnb", "private-vip"])
    .withMessage("Please provide a valid Venue Category")
    .exists()
    .withMessage("Venue Category must exist!"),
];

export const vendorRegistrationValidation = [
  body("name").exists().withMessage("Name must exist!").bail().isString().withMessage("Name must be a string"),
  body("contact-name").exists().withMessage("Contact Name must exist!").bail().isString().withMessage("Contact Name must be a string"),
  body("phone-number")
    .exists()
    .withMessage("Phone Number must exist!")
    .bail()
    .isMobilePhone()
    .withMessage("Phone Number must be a valid"),
  body("contact-phone-number")
    .exists()
    .withMessage("Contact Phone Number must exist!")
    .bail()
    .isMobilePhone()
    .withMessage("Contact Phone Number must be a valid"),
  body("email").exists().withMessage("Email must exist!").isEmail().withMessage("Email must be a valid email"),
  body("contact-email").exists().withMessage("Contact Email must exist!").isEmail().withMessage("Contact Email must be a valid email"),
  body("service-type")
    .trim()
    .exists()
    .withMessage("Service Type must exist!")
    .bail()
    .isIn(["venue", "catering-service", "decore", "photo-video", "dj-band", "other-services"])
    .withMessage("Please provide a valid Service Type Category"),
  body("years-in-business.*")
    .trim()
    .exists()
    .withMessage("Business Year range must exist!")
    .bail()
    .isIn(["5plus", "3to5", "1to3", "0to1"])
    .withMessage("Please provide a valid Year Range"),
  body("business-type.*")
    .trim()
    .exists()
    .withMessage("Business Type must exist!")
    .bail()
    .isIn(["registered", "freelancer"])
    .withMessage("Please provide a valid Business Type"),
  body("max-price")
    .exists()
    .withMessage("Max price must exist!")
    .bail()
    .isNumeric()
    .withMessage("Max price must be a number"),
  body("min-price")
    .exists()
    .withMessage("Min price must exist!")
    .bail()
    .isNumeric()
    .withMessage("Min price must be a number"),
  body("tin")
    .if(body("business-type").contains("registered"))
    .exists()
    .withMessage("TIN must exist!")
    .isNumeric()
    .bail()
    .withMessage("Min price must be a number"),
  body("city").exists().withMessage("City must exist!").bail().isString().withMessage("City must be a string"),
  body("other-service")
    .if(body("service-type").contains("other-services"))
    .exists()
    .withMessage("Other Service type must exist!")
    .bail()
    .isString()
    .withMessage("Service must be a string"),
  body("country").exists().withMessage("Country must exist!").bail().isString().withMessage("Country must be a string"),
  body("address").exists().withMessage("Address must exist!").bail().isString().withMessage("Address must be a string"),
  body("comment").exists().withMessage("Comment must exist!").bail().isString().withMessage("Comment must be a string"),
];

export const packageBookingValidation = [
  body("name").exists().withMessage("Name must exist!").bail().isString().withMessage("Name must be a string"),
  body("phone-number")
    .exists()
    .withMessage("Phone Number must exist!")
    .bail()
    .isMobilePhone()
    .withMessage("Phone Number must be a valid"),
  body("email").exists().withMessage("Email must exist!").isEmail().withMessage("Email must be a valid email"),
  body("package-type")
    .trim()
    .exists()
    .withMessage("Event Package must exist!")
    .bail()
    .isIn(["product-launch", "birthday", "special-holiday", "wedding", "corporate-event"])
    .withMessage("Please provide a valid Category"),
  body("comment").exists().withMessage("Comment must exist!").bail().isString().withMessage("Comment must be a string"),
];
