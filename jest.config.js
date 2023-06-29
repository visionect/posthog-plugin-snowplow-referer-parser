module.exports = {
    preset: 'ts-jest',
    moduleDirectories: ['node_modules'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest'
    },
    transformIgnorePatterns: [],
    globals: {
        'ts-jest': {
            // Without isolatedModules, tests run realy slow, so we enable them
            isolatedModules: true,
        },
    },
}
