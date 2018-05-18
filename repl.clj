(require 'cljs.build.api)
(require 'cljs.repl)
(require 'cljs.repl.browser)

(cljs.build.api/build "src" {:output-to "out/main.js"
                             :main 'hello-world.core})


(cljs.repl/repl (cljs.repl.browser/repl-env)
  :watch "src"
  :output-to "out/main.js" )                              