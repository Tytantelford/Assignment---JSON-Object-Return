const users = [
  {
    id: "001",
    name: "User 1",
    email: "user1@devpipeline.com",
    password: "user1password",
  },

  {
    id: "002",
    name: "User 2",
    email: "user2@devpipeline.com",
    password: "user2password",
  },

  {
    id: "003",
    name: "User 3",
    email: "user3@devpipeline.com",
    password: "user3password",
  },
];

users.forEach((user) => {
  console.log(`Hello, ${user.name}, your email is ${user.email} `);
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Error: " + xhr.status);
        }
      }
    };

    xhr.send();
  });
}
const requestPromise = getData("https://swapi.tech/api/people/1");

requestPromise
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data.result.name);
  })
  .catch((error) => {
    console.error(error);
  });
