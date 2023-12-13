import type { Config } from '@jest/types'
//base directory
const baseDir = '<rootDir>/src/app/pass_checker'
//base Test directory
const baseTestDir = '<rootDir>/src/test/pass_checker'

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