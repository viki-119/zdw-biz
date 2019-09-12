module.exports = {
    "parser": "babel-eslint",
    "env": {// 指定脚本的运行环境，支持定义多个
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6, // 指定想要支持的javascript版本,这里6表示es6
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"// 默认为"script",代码是ECMAScript准则，则设置为"module"
    },
    // "extends": "eslint:recommended",
    // 使用第三方airbnb
    "extends": "airbnb",
    // airbnb包括以下三个插件，插件名称可以省略eslint-plugin-前缀
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        // "linebreak-style": [
        //     "error",
        //     "windows"
        // ],
        "linebreak-style": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": ["error","never"], //禁止末尾逗号
    }
};
