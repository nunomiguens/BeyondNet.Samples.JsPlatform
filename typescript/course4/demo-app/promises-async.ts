class MyClass {
    async Test() {
        console.log('Getting value...');
        const returnedValue = await this.getValue();
        console.log(returnedValue);
    }

    private getValue() {
        return new Promise<number>((resolve) => {
            setTimeout(() => {
                resolve(5);
            }, 100);
        });
    }
}

const obj = new MyClass();
obj.Test();
