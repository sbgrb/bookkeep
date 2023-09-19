import { faker } from "@faker-js/faker";
import { AxiosRequestConfig } from "axios";

type Mock = (config: AxiosRequestConfig) => [number, any];

faker.setLocale("zh_CN");

export const mockItemSummary: Mock = (config) => {
  const { group_by, kind } = config.params;
  if (group_by === "happen_at" && kind === "expenses") {
    return [
      200,
      {
        groups: [
          { happen_at: "2022-07-18T00:00:00.000+0800", amount: 200 },
          { happen_at: "2022-07-22T00:00:00.000+0800", amount: 400 },
          { happen_at: "2022-07-29T00:00:00.000+0800", amount: 200 },
        ],
        summary: 800,
      },
    ];
  } else if (group_by === "happen_at" && kind === "income") {
    return [
      200,
      {
        groups: [
          { happen_at: "2022-07-08T00:00:00.000+0800", amount: 300 },
          { happen_at: "2022-07-12T00:00:00.000+0800", amount: 600 },
          { happen_at: "2022-07-19T00:00:00.000+0800", amount: 200 },
        ],
        summary: 1100,
      },
    ];
  } else if (group_by === "tag_id" && kind === "expenses") {
    return [
      200,
      {
        groups: [
          {
            tag_id: 1,
            tag: { id: 1, name: "交通", sign: faker.internet.emoji() },
            amount: 100,
          },
          {
            tag_id: 2,
            tag: { id: 2, name: "吃饭", sign: faker.internet.emoji() },
            amount: 300,
          },
          {
            tag_id: 3,
            tag: { id: 3, name: "购物", sign: faker.internet.emoji() },
            amount: 200,
          },
        ],
        summary: 600,
      },
    ];
  } else {
    return [
      200,
      {
        groups: [
          {
            tag_id: 1,
            tag: { id: 1, name: "交通", sign: faker.internet.emoji() },
            amount: 400,
          },
          {
            tag_id: 2,
            tag: { id: 2, name: "吃饭", sign: faker.internet.emoji() },
            amount: 300,
          },
          {
            tag_id: 3,
            tag: { id: 3, name: "购物", sign: faker.internet.emoji() },
            amount: 200,
          },
        ],
        summary: 900,
      },
    ];
  }
};
export const mockItemIndexBalance: Mock = (config) => {
  return [
    200,
    {
      income: faker.datatype.number({ min: 100, max: 10000 }),
      expenses: faker.datatype.number({
        min: 100,
        max: 10000,
      }),
      balance: faker.datatype.number(),
    },
  ];
};
export const mockItemIndex: Mock = (config) => {
  const { kind, page } = config.params;
  const per_page = 25;
  const count = 26;
  const createPaper = (page = 1) => ({
    page,
    per_page,
    count,
  });
  const createTag = (attrs?: any) => ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: "expenses",
    ...attrs,
  });
  const createItem = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(
      () =>
        ({
          id: createId(),
          user_id: createId(),
          amount: Math.floor(Math.random() * 10000),
          tag_ids: [createId()],
          tags: [createTag()],
          happen_at: faker.date.past().toISOString(),
          kind: config.params.kind,
        }) as Item
    );
  const createBody = (n = 1, attrs?: any) => ({
    resources: createItem(n),
    pager: createPaper(page),
    summary: {
      income: faker.datatype.number({ min: 100, max: 10000, precision: 0.1 }),
      expenses: faker.datatype.number({ min: 100, max: 10000, precision: 0.1 }),
      balance: faker.datatype.number({ precision: 1 }),
    },
  });
  if (!page || page === 1) {
    return [200, createBody(25)];
  } else if (page === 2) {
    return [200, createBody(1)];
  } else {
    return [200, {}];
  }
};
export const mockTagEdit: Mock = (config) => {
  const createTag = (attrs?: any) => ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: "expenses",
    ...attrs,
  });
  return [200, { resource: createTag() }];
};

export const mockTagShow: Mock = (config) => {
  const createTag = (attrs?: any) => ({
    id: createId(),
    name: faker.lorem.word(),
    sign: faker.internet.emoji(),
    kind: "expenses",
    ...attrs,
  });
  return [200, { resource: createTag() }];
};

export const mockItemCreate: Mock = (config) => {
  return [
    200,
    {
      resource: {
        id: 2264,
        user_id: 1312,
        amount: 9900,
        note: null,
        tag_ids: [3508],
        happen_at: "2020-10-29T16:00:00.000Z",
        created_at: "2022-07-03T15:35:56.301Z",
        updated_at: "2022-07-03T15:35:56.301Z",
        kind: "expenses",
      } as Item,
    },
  ];
};
export const mockSession: Mock = (config) => {
  return [
    200,
    {
      jwt: faker.random.word(),
    },
  ];
};

export const mockUser: Mock = (config) => {
  return [
    200,
    {
      email: faker.internet.email(),
      id: createId(),
    },
  ];
};

let id = 0;
const createId = () => {
  id += 1;
  return id;
};
export const mockTagIndex: Mock = (config) => {
  const { kind, page } = config.params;
  const per_page = 25;
  const count = 26;
  const createPaper = (page = 1) => ({
    page,
    per_page,
    count,
  });
  const createTag = (n = 1, attrs?: any) =>
    Array.from({ length: n }).map(() => ({
      id: createId(),
      name: faker.lorem.word(),
      sign: faker.internet.emoji(),
      kind: config.params.kind,
      ...attrs,
    }));
  const createBody = (n = 1, attrs?: any) => ({
    resources: createTag(n),
    pager: createPaper(page),
  });

  if (kind === "expenses" && (!page || page === 1)) {
    return [200, createBody(25)];
  } else if (kind === "expenses" && page === 2) {
    return [200, createBody(1)];
  } else if (kind === "income" && (!page || page === 1)) {
    return [200, createBody(25)];
  } else {
    return [200, createBody(1)];
  }
};
