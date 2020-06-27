const faker = require("faker");
const fs = require("fs");

const articles = [];

function getParagraphsCount() {
  return 4 + faker.random.number(10);
}

function* getParagraphs() {
  const count = getParagraphsCount();
  for (let index = 0; index < count; index++) {
    yield faker.lorem.paragraph(5);
  }
}

function* getTags() {
  const count = 2 + faker.random.number(5);
  for (let index = 0; index < count; index++) {
    yield faker.lorem.word();
  }
}

for (let index = 0; index < 20; index++) {
  articles[index] = {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.sentences(3),
    content: [...getParagraphs()],
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    date: faker.date.past(),
    duration: faker.random.number(30),
    imageId: faker.random.number(300),
    authorImageId: faker.random.number(300),
    tags: [...getTags()],
  };
}

fs.writeFile("./src/store/index.js", JSON.stringify({ articles }), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data generated");
  }
});
