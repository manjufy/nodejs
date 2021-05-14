async function bootstrap() {
    console.log('Hello World....')
    return 'boostrap';
}

const result = bootstrap();
console.log(Promise.resolve(result))