class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('Beto');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = () => {
    try {
      method();
    } catch (e) {
      console.log('An error was ocurred');
    }
  };
}

new Boat().pilot();
