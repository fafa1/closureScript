// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3674__auto__,writer__3675__auto__,opt__3676__auto__){
return cljs.core._write.call(null,writer__3675__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3987__auto__ = [];
var len__3984__auto___173 = arguments.length;
var i__3985__auto___174 = (0);
while(true){
if((i__3985__auto___174 < len__3984__auto___173)){
args__3987__auto__.push((arguments[i__3985__auto___174]));

var G__175 = (i__3985__auto___174 + (1));
i__3985__auto___174 = G__175;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq172){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq172));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___177 = arguments.length;
var i__3985__auto___178 = (0);
while(true){
if((i__3985__auto___178 < len__3984__auto___177)){
args__3987__auto__.push((arguments[i__3985__auto___178]));

var G__179 = (i__3985__auto___178 + (1));
i__3985__auto___178 = G__179;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq176){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq176));
});

var g_QMARK__180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_181 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__180){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__180))
,null));
var mkg_182 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__180,g_181){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__180,g_181))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__180,g_181,mkg_182){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__180).call(null,x);
});})(g_QMARK__180,g_181,mkg_182))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__180,g_181,mkg_182){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_182).call(null,gfn);
});})(g_QMARK__180,g_181,mkg_182))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__180,g_181,mkg_182){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_181).call(null,generator);
});})(g_QMARK__180,g_181,mkg_182))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__6358__auto___202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__6358__auto___202){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3987__auto__ = [];
var len__3984__auto___203 = arguments.length;
var i__3985__auto___204 = (0);
while(true){
if((i__3985__auto___204 < len__3984__auto___203)){
args__3987__auto__.push((arguments[i__3985__auto___204]));

var G__205 = (i__3985__auto___204 + (1));
i__3985__auto___204 = G__205;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___202))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___202),args);
});})(g__6358__auto___202))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__6358__auto___202){
return (function (seq183){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq183));
});})(g__6358__auto___202))
;


var g__6358__auto___206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__6358__auto___206){
return (function cljs$spec$impl$gen$list(var_args){
var args__3987__auto__ = [];
var len__3984__auto___207 = arguments.length;
var i__3985__auto___208 = (0);
while(true){
if((i__3985__auto___208 < len__3984__auto___207)){
args__3987__auto__.push((arguments[i__3985__auto___208]));

var G__209 = (i__3985__auto___208 + (1));
i__3985__auto___208 = G__209;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___206))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___206),args);
});})(g__6358__auto___206))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__6358__auto___206){
return (function (seq184){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq184));
});})(g__6358__auto___206))
;


var g__6358__auto___210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__6358__auto___210){
return (function cljs$spec$impl$gen$map(var_args){
var args__3987__auto__ = [];
var len__3984__auto___211 = arguments.length;
var i__3985__auto___212 = (0);
while(true){
if((i__3985__auto___212 < len__3984__auto___211)){
args__3987__auto__.push((arguments[i__3985__auto___212]));

var G__213 = (i__3985__auto___212 + (1));
i__3985__auto___212 = G__213;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___210))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___210),args);
});})(g__6358__auto___210))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__6358__auto___210){
return (function (seq185){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq185));
});})(g__6358__auto___210))
;


var g__6358__auto___214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__6358__auto___214){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3987__auto__ = [];
var len__3984__auto___215 = arguments.length;
var i__3985__auto___216 = (0);
while(true){
if((i__3985__auto___216 < len__3984__auto___215)){
args__3987__auto__.push((arguments[i__3985__auto___216]));

var G__217 = (i__3985__auto___216 + (1));
i__3985__auto___216 = G__217;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___214))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___214),args);
});})(g__6358__auto___214))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__6358__auto___214){
return (function (seq186){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq186));
});})(g__6358__auto___214))
;


var g__6358__auto___218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__6358__auto___218){
return (function cljs$spec$impl$gen$set(var_args){
var args__3987__auto__ = [];
var len__3984__auto___219 = arguments.length;
var i__3985__auto___220 = (0);
while(true){
if((i__3985__auto___220 < len__3984__auto___219)){
args__3987__auto__.push((arguments[i__3985__auto___220]));

var G__221 = (i__3985__auto___220 + (1));
i__3985__auto___220 = G__221;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___218))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___218),args);
});})(g__6358__auto___218))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__6358__auto___218){
return (function (seq187){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq187));
});})(g__6358__auto___218))
;


var g__6358__auto___222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__6358__auto___222){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3987__auto__ = [];
var len__3984__auto___223 = arguments.length;
var i__3985__auto___224 = (0);
while(true){
if((i__3985__auto___224 < len__3984__auto___223)){
args__3987__auto__.push((arguments[i__3985__auto___224]));

var G__225 = (i__3985__auto___224 + (1));
i__3985__auto___224 = G__225;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___222))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___222),args);
});})(g__6358__auto___222))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__6358__auto___222){
return (function (seq188){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq188));
});})(g__6358__auto___222))
;


var g__6358__auto___226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__6358__auto___226){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3987__auto__ = [];
var len__3984__auto___227 = arguments.length;
var i__3985__auto___228 = (0);
while(true){
if((i__3985__auto___228 < len__3984__auto___227)){
args__3987__auto__.push((arguments[i__3985__auto___228]));

var G__229 = (i__3985__auto___228 + (1));
i__3985__auto___228 = G__229;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___226))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___226),args);
});})(g__6358__auto___226))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__6358__auto___226){
return (function (seq189){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq189));
});})(g__6358__auto___226))
;


var g__6358__auto___230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__6358__auto___230){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3987__auto__ = [];
var len__3984__auto___231 = arguments.length;
var i__3985__auto___232 = (0);
while(true){
if((i__3985__auto___232 < len__3984__auto___231)){
args__3987__auto__.push((arguments[i__3985__auto___232]));

var G__233 = (i__3985__auto___232 + (1));
i__3985__auto___232 = G__233;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___230))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___230),args);
});})(g__6358__auto___230))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__6358__auto___230){
return (function (seq190){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq190));
});})(g__6358__auto___230))
;


var g__6358__auto___234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__6358__auto___234){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3987__auto__ = [];
var len__3984__auto___235 = arguments.length;
var i__3985__auto___236 = (0);
while(true){
if((i__3985__auto___236 < len__3984__auto___235)){
args__3987__auto__.push((arguments[i__3985__auto___236]));

var G__237 = (i__3985__auto___236 + (1));
i__3985__auto___236 = G__237;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___234))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___234),args);
});})(g__6358__auto___234))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__6358__auto___234){
return (function (seq191){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq191));
});})(g__6358__auto___234))
;


var g__6358__auto___238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__6358__auto___238){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3987__auto__ = [];
var len__3984__auto___239 = arguments.length;
var i__3985__auto___240 = (0);
while(true){
if((i__3985__auto___240 < len__3984__auto___239)){
args__3987__auto__.push((arguments[i__3985__auto___240]));

var G__241 = (i__3985__auto___240 + (1));
i__3985__auto___240 = G__241;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___238))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___238),args);
});})(g__6358__auto___238))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__6358__auto___238){
return (function (seq192){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq192));
});})(g__6358__auto___238))
;


var g__6358__auto___242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__6358__auto___242){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3987__auto__ = [];
var len__3984__auto___243 = arguments.length;
var i__3985__auto___244 = (0);
while(true){
if((i__3985__auto___244 < len__3984__auto___243)){
args__3987__auto__.push((arguments[i__3985__auto___244]));

var G__245 = (i__3985__auto___244 + (1));
i__3985__auto___244 = G__245;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___242))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___242),args);
});})(g__6358__auto___242))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__6358__auto___242){
return (function (seq193){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq193));
});})(g__6358__auto___242))
;


var g__6358__auto___246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__6358__auto___246){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3987__auto__ = [];
var len__3984__auto___247 = arguments.length;
var i__3985__auto___248 = (0);
while(true){
if((i__3985__auto___248 < len__3984__auto___247)){
args__3987__auto__.push((arguments[i__3985__auto___248]));

var G__249 = (i__3985__auto___248 + (1));
i__3985__auto___248 = G__249;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___246))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___246),args);
});})(g__6358__auto___246))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__6358__auto___246){
return (function (seq194){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq194));
});})(g__6358__auto___246))
;


var g__6358__auto___250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__6358__auto___250){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3987__auto__ = [];
var len__3984__auto___251 = arguments.length;
var i__3985__auto___252 = (0);
while(true){
if((i__3985__auto___252 < len__3984__auto___251)){
args__3987__auto__.push((arguments[i__3985__auto___252]));

var G__253 = (i__3985__auto___252 + (1));
i__3985__auto___252 = G__253;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___250))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___250),args);
});})(g__6358__auto___250))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__6358__auto___250){
return (function (seq195){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq195));
});})(g__6358__auto___250))
;


var g__6358__auto___254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__6358__auto___254){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3987__auto__ = [];
var len__3984__auto___255 = arguments.length;
var i__3985__auto___256 = (0);
while(true){
if((i__3985__auto___256 < len__3984__auto___255)){
args__3987__auto__.push((arguments[i__3985__auto___256]));

var G__257 = (i__3985__auto___256 + (1));
i__3985__auto___256 = G__257;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___254))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___254),args);
});})(g__6358__auto___254))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__6358__auto___254){
return (function (seq196){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq196));
});})(g__6358__auto___254))
;


var g__6358__auto___258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__6358__auto___258){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3987__auto__ = [];
var len__3984__auto___259 = arguments.length;
var i__3985__auto___260 = (0);
while(true){
if((i__3985__auto___260 < len__3984__auto___259)){
args__3987__auto__.push((arguments[i__3985__auto___260]));

var G__261 = (i__3985__auto___260 + (1));
i__3985__auto___260 = G__261;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___258))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___258),args);
});})(g__6358__auto___258))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__6358__auto___258){
return (function (seq197){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq197));
});})(g__6358__auto___258))
;


var g__6358__auto___262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__6358__auto___262){
return (function cljs$spec$impl$gen$return(var_args){
var args__3987__auto__ = [];
var len__3984__auto___263 = arguments.length;
var i__3985__auto___264 = (0);
while(true){
if((i__3985__auto___264 < len__3984__auto___263)){
args__3987__auto__.push((arguments[i__3985__auto___264]));

var G__265 = (i__3985__auto___264 + (1));
i__3985__auto___264 = G__265;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___262))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___262),args);
});})(g__6358__auto___262))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__6358__auto___262){
return (function (seq198){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq198));
});})(g__6358__auto___262))
;


var g__6358__auto___266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__6358__auto___266){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___267 = arguments.length;
var i__3985__auto___268 = (0);
while(true){
if((i__3985__auto___268 < len__3984__auto___267)){
args__3987__auto__.push((arguments[i__3985__auto___268]));

var G__269 = (i__3985__auto___268 + (1));
i__3985__auto___268 = G__269;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___266))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___266),args);
});})(g__6358__auto___266))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__6358__auto___266){
return (function (seq199){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq199));
});})(g__6358__auto___266))
;


var g__6358__auto___270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__6358__auto___270){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___271 = arguments.length;
var i__3985__auto___272 = (0);
while(true){
if((i__3985__auto___272 < len__3984__auto___271)){
args__3987__auto__.push((arguments[i__3985__auto___272]));

var G__273 = (i__3985__auto___272 + (1));
i__3985__auto___272 = G__273;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___270))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___270),args);
});})(g__6358__auto___270))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__6358__auto___270){
return (function (seq200){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq200));
});})(g__6358__auto___270))
;


var g__6358__auto___274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__6358__auto___274){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__3987__auto__ = [];
var len__3984__auto___275 = arguments.length;
var i__3985__auto___276 = (0);
while(true){
if((i__3985__auto___276 < len__3984__auto___275)){
args__3987__auto__.push((arguments[i__3985__auto___276]));

var G__277 = (i__3985__auto___276 + (1));
i__3985__auto___276 = G__277;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___274))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___274),args);
});})(g__6358__auto___274))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__6358__auto___274){
return (function (seq201){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq201));
});})(g__6358__auto___274))
;

var g__6363__auto___299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__6363__auto___299){
return (function cljs$spec$impl$gen$any(var_args){
var args__3987__auto__ = [];
var len__3984__auto___300 = arguments.length;
var i__3985__auto___301 = (0);
while(true){
if((i__3985__auto___301 < len__3984__auto___300)){
args__3987__auto__.push((arguments[i__3985__auto___301]));

var G__302 = (i__3985__auto___301 + (1));
i__3985__auto___301 = G__302;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___299))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___299){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___299);
});})(g__6363__auto___299))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__6363__auto___299){
return (function (seq278){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq278));
});})(g__6363__auto___299))
;


var g__6363__auto___303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__6363__auto___303){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3987__auto__ = [];
var len__3984__auto___304 = arguments.length;
var i__3985__auto___305 = (0);
while(true){
if((i__3985__auto___305 < len__3984__auto___304)){
args__3987__auto__.push((arguments[i__3985__auto___305]));

var G__306 = (i__3985__auto___305 + (1));
i__3985__auto___305 = G__306;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___303))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___303){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___303);
});})(g__6363__auto___303))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__6363__auto___303){
return (function (seq279){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq279));
});})(g__6363__auto___303))
;


var g__6363__auto___307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__6363__auto___307){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3987__auto__ = [];
var len__3984__auto___308 = arguments.length;
var i__3985__auto___309 = (0);
while(true){
if((i__3985__auto___309 < len__3984__auto___308)){
args__3987__auto__.push((arguments[i__3985__auto___309]));

var G__310 = (i__3985__auto___309 + (1));
i__3985__auto___309 = G__310;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___307))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___307){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___307);
});})(g__6363__auto___307))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__6363__auto___307){
return (function (seq280){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq280));
});})(g__6363__auto___307))
;


var g__6363__auto___311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__6363__auto___311){
return (function cljs$spec$impl$gen$char(var_args){
var args__3987__auto__ = [];
var len__3984__auto___312 = arguments.length;
var i__3985__auto___313 = (0);
while(true){
if((i__3985__auto___313 < len__3984__auto___312)){
args__3987__auto__.push((arguments[i__3985__auto___313]));

var G__314 = (i__3985__auto___313 + (1));
i__3985__auto___313 = G__314;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___311))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___311){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___311);
});})(g__6363__auto___311))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__6363__auto___311){
return (function (seq281){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq281));
});})(g__6363__auto___311))
;


var g__6363__auto___315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__6363__auto___315){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3987__auto__ = [];
var len__3984__auto___316 = arguments.length;
var i__3985__auto___317 = (0);
while(true){
if((i__3985__auto___317 < len__3984__auto___316)){
args__3987__auto__.push((arguments[i__3985__auto___317]));

var G__318 = (i__3985__auto___317 + (1));
i__3985__auto___317 = G__318;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___315))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___315){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___315);
});})(g__6363__auto___315))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__6363__auto___315){
return (function (seq282){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq282));
});})(g__6363__auto___315))
;


var g__6363__auto___319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__6363__auto___319){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3987__auto__ = [];
var len__3984__auto___320 = arguments.length;
var i__3985__auto___321 = (0);
while(true){
if((i__3985__auto___321 < len__3984__auto___320)){
args__3987__auto__.push((arguments[i__3985__auto___321]));

var G__322 = (i__3985__auto___321 + (1));
i__3985__auto___321 = G__322;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___319))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___319){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___319);
});})(g__6363__auto___319))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__6363__auto___319){
return (function (seq283){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq283));
});})(g__6363__auto___319))
;


var g__6363__auto___323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__6363__auto___323){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3987__auto__ = [];
var len__3984__auto___324 = arguments.length;
var i__3985__auto___325 = (0);
while(true){
if((i__3985__auto___325 < len__3984__auto___324)){
args__3987__auto__.push((arguments[i__3985__auto___325]));

var G__326 = (i__3985__auto___325 + (1));
i__3985__auto___325 = G__326;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___323))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___323){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___323);
});})(g__6363__auto___323))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__6363__auto___323){
return (function (seq284){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq284));
});})(g__6363__auto___323))
;


var g__6363__auto___327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__6363__auto___327){
return (function cljs$spec$impl$gen$double(var_args){
var args__3987__auto__ = [];
var len__3984__auto___328 = arguments.length;
var i__3985__auto___329 = (0);
while(true){
if((i__3985__auto___329 < len__3984__auto___328)){
args__3987__auto__.push((arguments[i__3985__auto___329]));

var G__330 = (i__3985__auto___329 + (1));
i__3985__auto___329 = G__330;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___327))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___327){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___327);
});})(g__6363__auto___327))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__6363__auto___327){
return (function (seq285){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq285));
});})(g__6363__auto___327))
;


var g__6363__auto___331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__6363__auto___331){
return (function cljs$spec$impl$gen$int(var_args){
var args__3987__auto__ = [];
var len__3984__auto___332 = arguments.length;
var i__3985__auto___333 = (0);
while(true){
if((i__3985__auto___333 < len__3984__auto___332)){
args__3987__auto__.push((arguments[i__3985__auto___333]));

var G__334 = (i__3985__auto___333 + (1));
i__3985__auto___333 = G__334;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___331))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___331){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___331);
});})(g__6363__auto___331))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__6363__auto___331){
return (function (seq286){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq286));
});})(g__6363__auto___331))
;


var g__6363__auto___335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__6363__auto___335){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3987__auto__ = [];
var len__3984__auto___336 = arguments.length;
var i__3985__auto___337 = (0);
while(true){
if((i__3985__auto___337 < len__3984__auto___336)){
args__3987__auto__.push((arguments[i__3985__auto___337]));

var G__338 = (i__3985__auto___337 + (1));
i__3985__auto___337 = G__338;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___335))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___335){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___335);
});})(g__6363__auto___335))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__6363__auto___335){
return (function (seq287){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq287));
});})(g__6363__auto___335))
;


var g__6363__auto___339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__6363__auto___339){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3987__auto__ = [];
var len__3984__auto___340 = arguments.length;
var i__3985__auto___341 = (0);
while(true){
if((i__3985__auto___341 < len__3984__auto___340)){
args__3987__auto__.push((arguments[i__3985__auto___341]));

var G__342 = (i__3985__auto___341 + (1));
i__3985__auto___341 = G__342;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___339))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___339){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___339);
});})(g__6363__auto___339))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__6363__auto___339){
return (function (seq288){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288));
});})(g__6363__auto___339))
;


var g__6363__auto___343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__6363__auto___343){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3987__auto__ = [];
var len__3984__auto___344 = arguments.length;
var i__3985__auto___345 = (0);
while(true){
if((i__3985__auto___345 < len__3984__auto___344)){
args__3987__auto__.push((arguments[i__3985__auto___345]));

var G__346 = (i__3985__auto___345 + (1));
i__3985__auto___345 = G__346;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___343))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___343){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___343);
});})(g__6363__auto___343))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__6363__auto___343){
return (function (seq289){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq289));
});})(g__6363__auto___343))
;


var g__6363__auto___347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__6363__auto___347){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3987__auto__ = [];
var len__3984__auto___348 = arguments.length;
var i__3985__auto___349 = (0);
while(true){
if((i__3985__auto___349 < len__3984__auto___348)){
args__3987__auto__.push((arguments[i__3985__auto___349]));

var G__350 = (i__3985__auto___349 + (1));
i__3985__auto___349 = G__350;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___347))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___347){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___347);
});})(g__6363__auto___347))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__6363__auto___347){
return (function (seq290){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq290));
});})(g__6363__auto___347))
;


var g__6363__auto___351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__6363__auto___351){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3987__auto__ = [];
var len__3984__auto___352 = arguments.length;
var i__3985__auto___353 = (0);
while(true){
if((i__3985__auto___353 < len__3984__auto___352)){
args__3987__auto__.push((arguments[i__3985__auto___353]));

var G__354 = (i__3985__auto___353 + (1));
i__3985__auto___353 = G__354;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___351))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___351){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___351);
});})(g__6363__auto___351))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__6363__auto___351){
return (function (seq291){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq291));
});})(g__6363__auto___351))
;


var g__6363__auto___355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__6363__auto___355){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3987__auto__ = [];
var len__3984__auto___356 = arguments.length;
var i__3985__auto___357 = (0);
while(true){
if((i__3985__auto___357 < len__3984__auto___356)){
args__3987__auto__.push((arguments[i__3985__auto___357]));

var G__358 = (i__3985__auto___357 + (1));
i__3985__auto___357 = G__358;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___355))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___355){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___355);
});})(g__6363__auto___355))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__6363__auto___355){
return (function (seq292){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq292));
});})(g__6363__auto___355))
;


var g__6363__auto___359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__6363__auto___359){
return (function cljs$spec$impl$gen$string(var_args){
var args__3987__auto__ = [];
var len__3984__auto___360 = arguments.length;
var i__3985__auto___361 = (0);
while(true){
if((i__3985__auto___361 < len__3984__auto___360)){
args__3987__auto__.push((arguments[i__3985__auto___361]));

var G__362 = (i__3985__auto___361 + (1));
i__3985__auto___361 = G__362;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___359))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___359){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___359);
});})(g__6363__auto___359))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__6363__auto___359){
return (function (seq293){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq293));
});})(g__6363__auto___359))
;


var g__6363__auto___363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__6363__auto___363){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3987__auto__ = [];
var len__3984__auto___364 = arguments.length;
var i__3985__auto___365 = (0);
while(true){
if((i__3985__auto___365 < len__3984__auto___364)){
args__3987__auto__.push((arguments[i__3985__auto___365]));

var G__366 = (i__3985__auto___365 + (1));
i__3985__auto___365 = G__366;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___363))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___363){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___363);
});})(g__6363__auto___363))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__6363__auto___363){
return (function (seq294){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq294));
});})(g__6363__auto___363))
;


var g__6363__auto___367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__6363__auto___367){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3987__auto__ = [];
var len__3984__auto___368 = arguments.length;
var i__3985__auto___369 = (0);
while(true){
if((i__3985__auto___369 < len__3984__auto___368)){
args__3987__auto__.push((arguments[i__3985__auto___369]));

var G__370 = (i__3985__auto___369 + (1));
i__3985__auto___369 = G__370;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___367))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___367){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___367);
});})(g__6363__auto___367))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__6363__auto___367){
return (function (seq295){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq295));
});})(g__6363__auto___367))
;


var g__6363__auto___371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__6363__auto___371){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3987__auto__ = [];
var len__3984__auto___372 = arguments.length;
var i__3985__auto___373 = (0);
while(true){
if((i__3985__auto___373 < len__3984__auto___372)){
args__3987__auto__.push((arguments[i__3985__auto___373]));

var G__374 = (i__3985__auto___373 + (1));
i__3985__auto___373 = G__374;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___371))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___371){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___371);
});})(g__6363__auto___371))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__6363__auto___371){
return (function (seq296){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq296));
});})(g__6363__auto___371))
;


var g__6363__auto___375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__6363__auto___375){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3987__auto__ = [];
var len__3984__auto___376 = arguments.length;
var i__3985__auto___377 = (0);
while(true){
if((i__3985__auto___377 < len__3984__auto___376)){
args__3987__auto__.push((arguments[i__3985__auto___377]));

var G__378 = (i__3985__auto___377 + (1));
i__3985__auto___377 = G__378;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___375))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___375){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___375);
});})(g__6363__auto___375))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__6363__auto___375){
return (function (seq297){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq297));
});})(g__6363__auto___375))
;


var g__6363__auto___379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__6363__auto___379){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3987__auto__ = [];
var len__3984__auto___380 = arguments.length;
var i__3985__auto___381 = (0);
while(true){
if((i__3985__auto___381 < len__3984__auto___380)){
args__3987__auto__.push((arguments[i__3985__auto___381]));

var G__382 = (i__3985__auto___381 + (1));
i__3985__auto___381 = G__382;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___379))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___379){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___379);
});})(g__6363__auto___379))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__6363__auto___379){
return (function (seq298){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq298));
});})(g__6363__auto___379))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3987__auto__ = [];
var len__3984__auto___385 = arguments.length;
var i__3985__auto___386 = (0);
while(true){
if((i__3985__auto___386 < len__3984__auto___385)){
args__3987__auto__.push((arguments[i__3985__auto___386]));

var G__387 = (i__3985__auto___386 + (1));
i__3985__auto___386 = G__387;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__383_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__383_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq384){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq384));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__388_SHARP_){
return (new Date(p1__388_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map