var ghpages = require("gh-pages");
require("dotenv").config();

const myUser = process.env.GH_USER || "";
const myEmail = process.env.GH_EMAIL || "";
const myToken = process.env.GH_TOKEN || "";
const myRepo = process.env.GH_REPO || "";

if (!myUser || !myEmail) {
  console.error("ERROR no github username and/or email");
  return;
}

if (!myToken || !myRepo) {
  console.error("ERROR missing github token and/or repo");
  return;
}

ghpages.publish(
  "public",
  {
    user: {
      name: myUser,
      email: myEmail,
      repo:
        "https://" + myToken + "@github.com/" + myUser + "/" + myRepo + ".git",
    },
  },
  function (err) {
    console.log("ERROR", err);
  }
);
