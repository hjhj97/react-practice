import { signin } from "../mocks/server";

export async function requestSignin(name: string, password: string) {
  return await signin(name, password);
}
