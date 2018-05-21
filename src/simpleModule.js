export default function sum(initial, ...values) {
  return values.reduce((total, value) => total + value, initial);
}
