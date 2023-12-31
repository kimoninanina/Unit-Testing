import type { Config } from '@jest/types'
//base directory
// const baseDir = '<rootDir>/src/app/pass_checker'
// //base Test directory
// const baseTestDir = '<rootDir>/src/test/pass_checker'

// const baseDir = '<rootDir>/src/app/doubles'
// const baseTestDir = '<rootDir>/src/test/doubles'


const baseDir = '<rootDir>/src/app/server_app'
const baseTestDir = '<rootDir>/src/test/server_app'

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch:[
        `${baseTestDir}/**/*.ts`
    ]
}

export default config;