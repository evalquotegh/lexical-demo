export type ErrorProps = Error;

export function onError(error: ErrorProps): void {
  console.log(error);
}
