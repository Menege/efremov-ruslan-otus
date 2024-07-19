function deepEqual(actual, expected, path = "$") {
  if (actual === expected) {
    return true;
  }

  if (
    typeof actual !== typeof expected ||
    actual === null ||
    expected === null ||
    typeof actual !== "object" ||
    Array.isArray(actual) !== Array.isArray(expected)
  ) {
    throw new Error(`Несоответствие в ${path}`);
  }

  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  if (actualKeys.length !== expectedKeys.length) {
    throw new Error(`Несоответствие в ${path}`);
  }

  for (let key of actualKeys) {
    if (!expected.hasOwnProperty(key)) {
      throw new Error(
        `Несоответствие в ${path}: ожидаемый объект не содержит свойство ${key}`
      );
    }
    deepEqual(actual[key], expected[key], `${path}.${key}`);
  }

  return true;
}

const obj1 = {
  a: {
    b: 1,
  },
};
const obj2 = {
  a: {
    b: 2,
  },
};
const obj3 = {
  a: {
    b: 1,
  },
};

try {
  deepEqual(obj1, obj2);
  console.log("obj1 и obj2 идентичны");
} catch (error) {
  console.error(error.message);
}

try {
  deepEqual(obj1, obj3);
  console.log("obj1 и obj3 идентичны");
} catch (error) {
  console.error(error.message);
}
