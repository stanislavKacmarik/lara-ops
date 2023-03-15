Setup
1. `cp .env.example .env`
2. Modify database .env to: 
```
    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=laraops
    DB_USERNAME=sail
    DB_PASSWORD=laraops
```
3. run:
```
   docker run --rm \
   -u "$(id -u):$(id -g)" \
   -v "$(pwd):/var/www/html" \
   -w /var/www/html \
   laravelsail/php82-composer:latest \
   composer install --ignore-platform-reqs
   ```
4. `./vendor/bin/sail up`
5. `./vendor/bin/sail php artisan key:generate`
