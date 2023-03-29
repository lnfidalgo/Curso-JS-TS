type MyType = number;

export async function asyncPromise() {
  return 1;
}

function myPromise(): Promise<MyType> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

asyncPromise().then((resultado) => console.log(resultado + 1));
myPromise().then((resultado) => console.log(resultado + 1));
