export const hi = <h2>Hi there!</h2>;
export const hello = <h3>This is named export!</h3>;

const greet = () => {
  console.log('Hello, World!');
  return <h1>Hello World from default export!</h1>;
}

export default greet;
