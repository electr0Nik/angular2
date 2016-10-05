# angular2
Playground for Angular 2

# Build
Build and compile with Gradle and Node-Plugin
``` [./]gradlew[.bat] clean npmClean npmInstall ```

# Start
Start with Gradle and Node-Plugin 
``` [./]gradlew[.bat] npm_start ```

# Sub-Projects
Execute Tasks only for sub Projects
``` [./]gradlew[.bat] [sub-project-name]:tasks ```
e.g. execute commad ``` npm run ``` only for 'getting_started' sub project (on Linux):
``` ./Gradle getting_started:npm_run ``` 