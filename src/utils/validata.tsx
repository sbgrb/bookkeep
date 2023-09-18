interface FData {
  [k: string]: JSONValue;
}
type Rule<T> = {
  key: keyof T;
  message: string;
} & (
  | { type: "required" }
  | { type: "pattern"; regex: RegExp }
  | { type: "notEqual"; value: JSONValue }
);
type Rules<T> = Rule<T>[];
const isEmpty = (value: null | undefined | string | number | FData) => {
  return value === null || value === undefined || value === "";
};
export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  type Errors = {
    [k in keyof T]?: string[];
  };
  const errors: Errors = {};
  rules.map((rule) => {
    const { key, type, message } = rule;
    const value = formData[key];
    switch (type) {
      case "required":
        if (value === null || value === undefined || value === "") {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      case "pattern":
        if (!isEmpty(value) && !rule.regex.test(value!.toString())) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      case "notEqual":
        if (!isEmpty(value) && value === rule.value) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      default:
        return;
    }
  });
  return errors;
};

export function hasError(errors: Record<string, string[]>) {
  let result = false;
  for (let key in errors) {
    if (errors[key].length > 0) {
      result = true;
      break;
    }
  }
  return result;
}

export type { Rules, Rule, FData };
