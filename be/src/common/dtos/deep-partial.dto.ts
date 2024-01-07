export type DeepPartial<T> = {
  // All properties of type T
  // Also makes each property optional by appending a '?'
  [P in keyof T]?: T[P] extends object // If the proterty is an object type
    ? DeepPartial<T[P]> // then recursively apply DeepPartial to that proterty's type
    : T[P];
};
