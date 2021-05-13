import { performance } from "perf_hooks";

function greet(name: string): void {
  const t0 = performance.now();
  console.log("Hello", name);

  const t1 = performance.now();
  console.log(`Took: (${t1 - t0}) milliseconds`);
}

const readerName = "Medium Reader";

greet(readerName);
