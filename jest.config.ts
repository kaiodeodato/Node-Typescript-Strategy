import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            useESM: true, // Habilitar suporte a ESM
        }],
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
};

export default config;