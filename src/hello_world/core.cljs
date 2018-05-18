(ns hello-world.core
 (:require [clojure.browser.repl :as repl]))

 (defonce conn
    (repl/connect "http://localhost:9000/repl"))   

(js/alert "Ola Mundo, voltei!")

(enable-console-print!)

(prn "hello world")

(defn foo [a b]
    (*a b))
