(require 'cljs.build.api)
(cljs.build.api/watch "src" {:output-to "out/main.js"
                             :main 'hello-world.core})