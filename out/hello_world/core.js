// Compiled by ClojureScript 1.9.473 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof hello_world.core.conn !== 'undefined'){
} else {
hello_world.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
alert("Ola Mundo, voltei!");
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.prn.call(null,"hello world");
hello_world.core.foo = (function hello_world$core$foo(a,b){
return hello_world.core._STAR_a.call(null,b);
});

//# sourceMappingURL=core.js.map