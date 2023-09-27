interface signinData {
  success: boolean;
  token: string;
  name: string;
}

function isMatched(name: string, password: string) {
  return name === "test" && password === "1234";
}

export function signin(name: string, password: string) {
  return new Promise<signinData>((resolve, reject) =>
    setTimeout(() => {
      if (isMatched(name, password)) {
        resolve({ success: true, token: "secret1234", name: "JuHeon" });
      } else reject({ success: false, msg: "Failed!" });
    }, 500)
  );
}
