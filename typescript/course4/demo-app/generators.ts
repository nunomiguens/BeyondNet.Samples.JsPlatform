function* getNames() {
    console.log('2');
    yield 'Alberto';
    console.log('4');
    const myLastName = yield 'Arroyo Raygada';
    console.log(`6. My LastName: ${myLastName}`);
}

const nameGnerator = getNames();
console.log('1');
console.log(`3.${nameGnerator.next().value}`);
console.log(`5.${nameGnerator.next().value}`);
console.log(`7. Done? ${nameGnerator.next('Replacing name').done}`);
