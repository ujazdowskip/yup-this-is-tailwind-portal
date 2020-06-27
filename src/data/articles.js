import faker from "faker";

const articles = [];

for (let index = 0; index < 20; index++) {
  articles[index] = {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.sentences(3),
    text: faker.lorem.paragraphs(6),
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    date: faker.date.past(),
    duration: faker.random.number(30),
    imageId: faker.random.number(300),
    authorImageId: faker.random.number(300),
  };
}

export default articles;
