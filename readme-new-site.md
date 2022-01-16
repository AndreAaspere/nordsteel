## TODO

- remove old WP installation. Can be done manually 

## New site files:

/certificates - not in GH
/css
/img
/js
readme-new-site.md
index.html
NS.svg
.htaccess

## .htaccess

```
# BEGIN NordSteel

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>

# END NordSteel
```

## github & gh pages

https://github.com/AndreAaspere/nordsteel
https://andreaaspere.github.io/nordsteel/

## Production

vue.config.js

```
  // publicPath: '/nordsteel/', //for githup-pages
  publicPath: '/', //for production
```