import { faker } from '@faker-js/faker';

export function fakeArray<T>(f: () => T): T[] {
  return faker.datatype
    .array(
      faker.datatype.number({
        min: 1,
        max: 4,
      }),
    )
    .map(f);
}
