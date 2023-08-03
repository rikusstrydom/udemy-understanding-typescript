// Index types
interface ErrorContainer {
  // { email: 'Not a valid email', userName: 'Must be a string'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  userName: 'Must start with a capital letter!',
};
