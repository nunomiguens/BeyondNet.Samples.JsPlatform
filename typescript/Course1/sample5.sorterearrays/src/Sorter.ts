export interface ISortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

abstract class Sorter implements ISortable {
  abstract length: number;
  abstract compare(lefIndex: number, rightIndex: number): boolean;
  abstract swap(lefIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

export default Sorter;
