module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "jest":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins:['@typescript-eslint','prettier','import'],
    "rules": {
        'prettier/prettier':'error',
        'import/extensions':'off',
        'no-console':'off',
        'import/order':[
            'error',
            {
                'newlines-between':"never",
                groups:[
                    ['buitin','external'],
                    ['internal','parent','sibling','index'],
                ]
            }
        ]
    },
    settings:{
        'import/resolver':{
            '@typescript-eslint/parser':['.ts'],
        },
        'import/resolver':{
            typescript:{
                alwaysTryTypes:true,
                project:'./tsconfig.json'
            },
        }
    }
}