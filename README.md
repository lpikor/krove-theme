# Krove Theme
A WordPress theme created for Krove company

## Installation
### See the exact result of prepared Hero with Navigation menu
1. Add this theme to themes directory
2. Install packages and run the *build* command:

```
npm install
```

```
npm run build
```

3. Import krove.sql database
4. Change *siteurl* and *home* options in **wp_options** table to match your website location
5. In order for menu to work, in wp-admin go under **Appearance** -> **Menus**, and for the existing menu check the Display location *Main Navigation Menu* at the bottom

### Theme development
1. Do all of the above steps
2. Run *start* command:

```
npm start
```

3. Edit scss and js files inside **assets** directory
