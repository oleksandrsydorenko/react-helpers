type Func = (...args: any[]) => any;

const compose = (...fns: Func[]) =>
  fns.reduceRight(
    (prevFn, nextFn) =>
      (...args) =>
        nextFn(prevFn(...args)),
    (value) => value,
  );

export default compose;
