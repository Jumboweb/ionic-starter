# Ionic Starter JumboWeb

## Getting started

- install nodejs, gulp, cordova & ionic (if not already done)
- `git clone git@github.com:Jumboweb/ionic-starter.git` : clone this repo
- `cd ionic-starter` : go to folder
- `bower install` : install app dependencies
- `npm install gulp` : install build dependencies
- `ionic setup sass` : use sass
- `ionic serve` : start the app on your browser


## Personnalize

As it's only a template project, you may want to change its name. For that, you just have to open :

- `config.xml` (widget id, name, description & author)
- `www/index.html` (title)
- `bower.json` (name, homepage, author & description)
- `package.json` (name & description)

## Infos

### Browser development

- Chrome cordova : https://chrome.google.com/webstore/detail/cordova-mocks/iigcccneenmnplhhfhaeahiofeeeifpn (https://github.com/pbernasconi/chrome-cordova)

### Android debug

- android remote debug : https://developer.chrome.com/devtools/docs/remote-debugging
- activate developer mode on android

### Specific urls

Use these custom urls to open other apps using inappbrowser (org.apache.cordova.inappbrowser)

- "tel:0123456789" => call this number
- "sms:0123456789?body=coucou" => send sms to this number
- "geo:lat,lon" => open google map to this geoloc
- "mailto:toto@example.com" => send an email
- "market:???"

see http://stackoverflow.com/questions/26271313/tel-sms-and-mailto-no-longer-working-in-android-after-upgrading-to-cordo
