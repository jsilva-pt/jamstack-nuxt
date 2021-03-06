# jamstack-nuxt
   
> My [Jamstack](https://jamstack.org/) experiment with [Nuxt.js](https://nuxtjs.org).

## Requirements
- [X] Generate a website to be deployed in several domains (e.g. `com.ng, com.gh, com.eg, com.tn, ke, ci, ma`)
- [X] Each domain can have different languages available [nuxt-i18n](https://github.com/nuxt-community/nuxt-i18n)
- [X] Support RTL
- [X] Possibility to define the default language for each domain
- [X] Possibility to use markdown files as cms blocks [@nuxtjs/markdownit](https://github.com/nuxt-community/modules/tree/master/packages/markdownit)
- [X] All domains have the same pages however CMS blocks can be customized by country and language
- [x] Generate the sitemap.xml [@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module)
- [x] Generate the robots.txt [@nuxtjs/robots](https://github.com/nuxt-community/robots-module)

## Configurations
```bash
# Create a .env file with the following content
BASE_URL=http://localhost:3000
NUXT_ENV_COUNTRY=eg # can be ng, ke, gh, eg, ci, ma, tn
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

## Add a new language :speech_balloon: (e.g. Portuguese)
#### 1. Inside the file `data/languages.json` add a new object with the following structure:

```js
{
    "code": "pt", // language code
    "name": "Português", // language display name
    "iso": "pt-PT", // language ISO code
    "file": "pt.js", // filename where the translations will be present
    "rtl": false // Right-to-left enabled or disabled
}
```

#### 2. Create the translations file `lang/pt.js`
  
#### 3. Create the global CMS blocks to the Portuguese language
  
- Create the folder `data/cms-blocks/pt` (the language code for Portugal).

```bash
.
└─ data
   └─ cms-blocks
      ├─ ar
      ├─ en
      ├─ fr
      └─ pt # new language being added
```

- Create every CMS block existent to the other languages

```bash
cms-blocks
└─ pt
    ├─ block1.md
    ├─ block2.md
    └─ terms-and-conditions.md
```

:tada: Congratulation, we are ready to associate the Portuguese language to the desired countries.

## Add a new country :earth_africa: (e.g. Portugal)
Add the following structure to the `data/countries.json` file:

```js
{
    // other languages are nested here
    "pt": {
        "languages": [ "pt", "en" ], // available languages for Portugal
        "default": "pt" // default language
    }
}
```

## Override a markdown file for a specific country (eg. Brasil) in the Portuguese language

#### 1. Create the directory `data/cms-blocks/pt/br` (the country code for Brasil)
#### 2. Create the markdown(s) file(s) to override

```bash
cms-blocks
└─ pt # Portuguese language code
    ├─ br # Portugal country code
    |  └─ terms-and-conditions.md # CMS block being overrided
    ├─ block1.md
    ├─ block2.md
    └─ terms-and-conditions.md
```
