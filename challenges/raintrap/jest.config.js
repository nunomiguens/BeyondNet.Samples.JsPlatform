// eslint-disable-next-line no-undef
module.exports = {
    clearMocks: true,
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    preset: 'ts-jest',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
