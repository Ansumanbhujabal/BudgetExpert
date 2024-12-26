"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@lumino/algorithm/dist/index.js
var require_dist = __commonJS({
  "node_modules/@lumino/algorithm/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_algorithm = {}));
    })(exports2, function(exports3) {
      "use strict";
      exports3.ArrayExt = void 0;
      (function(ArrayExt) {
        function firstIndexOf(array, value, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return -1;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let span;
          if (stop < start) {
            span = stop + 1 + (n - start);
          } else {
            span = stop - start + 1;
          }
          for (let i = 0; i < span; ++i) {
            let j = (start + i) % n;
            if (array[j] === value) {
              return j;
            }
          }
          return -1;
        }
        ArrayExt.firstIndexOf = firstIndexOf;
        function lastIndexOf(array, value, start = -1, stop = 0) {
          let n = array.length;
          if (n === 0) {
            return -1;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let span;
          if (start < stop) {
            span = start + 1 + (n - stop);
          } else {
            span = start - stop + 1;
          }
          for (let i = 0; i < span; ++i) {
            let j = (start - i + n) % n;
            if (array[j] === value) {
              return j;
            }
          }
          return -1;
        }
        ArrayExt.lastIndexOf = lastIndexOf;
        function findFirstIndex(array, fn, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return -1;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let span;
          if (stop < start) {
            span = stop + 1 + (n - start);
          } else {
            span = stop - start + 1;
          }
          for (let i = 0; i < span; ++i) {
            let j = (start + i) % n;
            if (fn(array[j], j)) {
              return j;
            }
          }
          return -1;
        }
        ArrayExt.findFirstIndex = findFirstIndex;
        function findLastIndex(array, fn, start = -1, stop = 0) {
          let n = array.length;
          if (n === 0) {
            return -1;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let d;
          if (start < stop) {
            d = start + 1 + (n - stop);
          } else {
            d = start - stop + 1;
          }
          for (let i = 0; i < d; ++i) {
            let j = (start - i + n) % n;
            if (fn(array[j], j)) {
              return j;
            }
          }
          return -1;
        }
        ArrayExt.findLastIndex = findLastIndex;
        function findFirstValue(array, fn, start = 0, stop = -1) {
          let index = findFirstIndex(array, fn, start, stop);
          return index !== -1 ? array[index] : void 0;
        }
        ArrayExt.findFirstValue = findFirstValue;
        function findLastValue(array, fn, start = -1, stop = 0) {
          let index = findLastIndex(array, fn, start, stop);
          return index !== -1 ? array[index] : void 0;
        }
        ArrayExt.findLastValue = findLastValue;
        function lowerBound(array, value, fn, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return 0;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let begin = start;
          let span = stop - start + 1;
          while (span > 0) {
            let half = span >> 1;
            let middle = begin + half;
            if (fn(array[middle], value) < 0) {
              begin = middle + 1;
              span -= half + 1;
            } else {
              span = half;
            }
          }
          return begin;
        }
        ArrayExt.lowerBound = lowerBound;
        function upperBound(array, value, fn, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return 0;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let begin = start;
          let span = stop - start + 1;
          while (span > 0) {
            let half = span >> 1;
            let middle = begin + half;
            if (fn(array[middle], value) > 0) {
              span = half;
            } else {
              begin = middle + 1;
              span -= half + 1;
            }
          }
          return begin;
        }
        ArrayExt.upperBound = upperBound;
        function shallowEqual(a, b, fn) {
          if (a === b) {
            return true;
          }
          if (a.length !== b.length) {
            return false;
          }
          for (let i = 0, n = a.length; i < n; ++i) {
            if (fn ? !fn(a[i], b[i]) : a[i] !== b[i]) {
              return false;
            }
          }
          return true;
        }
        ArrayExt.shallowEqual = shallowEqual;
        function slice(array, options = {}) {
          let { start, stop, step } = options;
          if (step === void 0) {
            step = 1;
          }
          if (step === 0) {
            throw new Error("Slice `step` cannot be zero.");
          }
          let n = array.length;
          if (start === void 0) {
            start = step < 0 ? n - 1 : 0;
          } else if (start < 0) {
            start = Math.max(start + n, step < 0 ? -1 : 0);
          } else if (start >= n) {
            start = step < 0 ? n - 1 : n;
          }
          if (stop === void 0) {
            stop = step < 0 ? -1 : n;
          } else if (stop < 0) {
            stop = Math.max(stop + n, step < 0 ? -1 : 0);
          } else if (stop >= n) {
            stop = step < 0 ? n - 1 : n;
          }
          let length;
          if (step < 0 && stop >= start || step > 0 && start >= stop) {
            length = 0;
          } else if (step < 0) {
            length = Math.floor((stop - start + 1) / step + 1);
          } else {
            length = Math.floor((stop - start - 1) / step + 1);
          }
          let result = [];
          for (let i = 0; i < length; ++i) {
            result[i] = array[start + i * step];
          }
          return result;
        }
        ArrayExt.slice = slice;
        function move(array, fromIndex, toIndex) {
          let n = array.length;
          if (n <= 1) {
            return;
          }
          if (fromIndex < 0) {
            fromIndex = Math.max(0, fromIndex + n);
          } else {
            fromIndex = Math.min(fromIndex, n - 1);
          }
          if (toIndex < 0) {
            toIndex = Math.max(0, toIndex + n);
          } else {
            toIndex = Math.min(toIndex, n - 1);
          }
          if (fromIndex === toIndex) {
            return;
          }
          let value = array[fromIndex];
          let d = fromIndex < toIndex ? 1 : -1;
          for (let i = fromIndex; i !== toIndex; i += d) {
            array[i] = array[i + d];
          }
          array[toIndex] = value;
        }
        ArrayExt.move = move;
        function reverse(array, start = 0, stop = -1) {
          let n = array.length;
          if (n <= 1) {
            return;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          while (start < stop) {
            let a = array[start];
            let b = array[stop];
            array[start++] = b;
            array[stop--] = a;
          }
        }
        ArrayExt.reverse = reverse;
        function rotate(array, delta, start = 0, stop = -1) {
          let n = array.length;
          if (n <= 1) {
            return;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          if (start >= stop) {
            return;
          }
          let length = stop - start + 1;
          if (delta > 0) {
            delta = delta % length;
          } else if (delta < 0) {
            delta = (delta % length + length) % length;
          }
          if (delta === 0) {
            return;
          }
          let pivot = start + delta;
          reverse(array, start, pivot - 1);
          reverse(array, pivot, stop);
          reverse(array, start, stop);
        }
        ArrayExt.rotate = rotate;
        function fill(array, value, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let span;
          if (stop < start) {
            span = stop + 1 + (n - start);
          } else {
            span = stop - start + 1;
          }
          for (let i = 0; i < span; ++i) {
            array[(start + i) % n] = value;
          }
        }
        ArrayExt.fill = fill;
        function insert(array, index, value) {
          let n = array.length;
          if (index < 0) {
            index = Math.max(0, index + n);
          } else {
            index = Math.min(index, n);
          }
          for (let i = n; i > index; --i) {
            array[i] = array[i - 1];
          }
          array[index] = value;
        }
        ArrayExt.insert = insert;
        function removeAt(array, index) {
          let n = array.length;
          if (index < 0) {
            index += n;
          }
          if (index < 0 || index >= n) {
            return void 0;
          }
          let value = array[index];
          for (let i = index + 1; i < n; ++i) {
            array[i - 1] = array[i];
          }
          array.length = n - 1;
          return value;
        }
        ArrayExt.removeAt = removeAt;
        function removeFirstOf(array, value, start = 0, stop = -1) {
          let index = firstIndexOf(array, value, start, stop);
          if (index !== -1) {
            removeAt(array, index);
          }
          return index;
        }
        ArrayExt.removeFirstOf = removeFirstOf;
        function removeLastOf(array, value, start = -1, stop = 0) {
          let index = lastIndexOf(array, value, start, stop);
          if (index !== -1) {
            removeAt(array, index);
          }
          return index;
        }
        ArrayExt.removeLastOf = removeLastOf;
        function removeAllOf(array, value, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return 0;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let count = 0;
          for (let i = 0; i < n; ++i) {
            if (start <= stop && i >= start && i <= stop && array[i] === value) {
              count++;
            } else if (stop < start && (i <= stop || i >= start) && array[i] === value) {
              count++;
            } else if (count > 0) {
              array[i - count] = array[i];
            }
          }
          if (count > 0) {
            array.length = n - count;
          }
          return count;
        }
        ArrayExt.removeAllOf = removeAllOf;
        function removeFirstWhere(array, fn, start = 0, stop = -1) {
          let value;
          let index = findFirstIndex(array, fn, start, stop);
          if (index !== -1) {
            value = removeAt(array, index);
          }
          return { index, value };
        }
        ArrayExt.removeFirstWhere = removeFirstWhere;
        function removeLastWhere(array, fn, start = -1, stop = 0) {
          let value;
          let index = findLastIndex(array, fn, start, stop);
          if (index !== -1) {
            value = removeAt(array, index);
          }
          return { index, value };
        }
        ArrayExt.removeLastWhere = removeLastWhere;
        function removeAllWhere(array, fn, start = 0, stop = -1) {
          let n = array.length;
          if (n === 0) {
            return 0;
          }
          if (start < 0) {
            start = Math.max(0, start + n);
          } else {
            start = Math.min(start, n - 1);
          }
          if (stop < 0) {
            stop = Math.max(0, stop + n);
          } else {
            stop = Math.min(stop, n - 1);
          }
          let count = 0;
          for (let i = 0; i < n; ++i) {
            if (start <= stop && i >= start && i <= stop && fn(array[i], i)) {
              count++;
            } else if (stop < start && (i <= stop || i >= start) && fn(array[i], i)) {
              count++;
            } else if (count > 0) {
              array[i - count] = array[i];
            }
          }
          if (count > 0) {
            array.length = n - count;
          }
          return count;
        }
        ArrayExt.removeAllWhere = removeAllWhere;
      })(exports3.ArrayExt || (exports3.ArrayExt = {}));
      function* chain(...objects) {
        for (const object of objects) {
          yield* object;
        }
      }
      function* empty() {
        return;
      }
      function* enumerate(object, start = 0) {
        for (const value of object) {
          yield [start++, value];
        }
      }
      function* filter(object, fn) {
        let index = 0;
        for (const value of object) {
          if (fn(value, index++)) {
            yield value;
          }
        }
      }
      function find(object, fn) {
        let index = 0;
        for (const value of object) {
          if (fn(value, index++)) {
            return value;
          }
        }
        return void 0;
      }
      function findIndex(object, fn) {
        let index = 0;
        for (const value of object) {
          if (fn(value, index++)) {
            return index - 1;
          }
        }
        return -1;
      }
      function min(object, fn) {
        let result = void 0;
        for (const value of object) {
          if (result === void 0) {
            result = value;
            continue;
          }
          if (fn(value, result) < 0) {
            result = value;
          }
        }
        return result;
      }
      function max(object, fn) {
        let result = void 0;
        for (const value of object) {
          if (result === void 0) {
            result = value;
            continue;
          }
          if (fn(value, result) > 0) {
            result = value;
          }
        }
        return result;
      }
      function minmax(object, fn) {
        let empty2 = true;
        let vmin;
        let vmax;
        for (const value of object) {
          if (empty2) {
            vmin = value;
            vmax = value;
            empty2 = false;
          } else if (fn(value, vmin) < 0) {
            vmin = value;
          } else if (fn(value, vmax) > 0) {
            vmax = value;
          }
        }
        return empty2 ? void 0 : [vmin, vmax];
      }
      function toArray(object) {
        return Array.from(object);
      }
      function toObject(object) {
        const result = {};
        for (const [key, value] of object) {
          result[key] = value;
        }
        return result;
      }
      function each(object, fn) {
        let index = 0;
        for (const value of object) {
          if (false === fn(value, index++)) {
            return;
          }
        }
      }
      function every(object, fn) {
        let index = 0;
        for (const value of object) {
          if (false === fn(value, index++)) {
            return false;
          }
        }
        return true;
      }
      function some(object, fn) {
        let index = 0;
        for (const value of object) {
          if (fn(value, index++)) {
            return true;
          }
        }
        return false;
      }
      function* map(object, fn) {
        let index = 0;
        for (const value of object) {
          yield fn(value, index++);
        }
      }
      function* range(start, stop, step) {
        if (stop === void 0) {
          stop = start;
          start = 0;
          step = 1;
        } else if (step === void 0) {
          step = 1;
        }
        const length = Private.rangeLength(start, stop, step);
        for (let index = 0; index < length; index++) {
          yield start + step * index;
        }
      }
      var Private;
      (function(Private2) {
        function rangeLength(start, stop, step) {
          if (step === 0) {
            return Infinity;
          }
          if (start > stop && step > 0) {
            return 0;
          }
          if (start < stop && step < 0) {
            return 0;
          }
          return Math.ceil((stop - start) / step);
        }
        Private2.rangeLength = rangeLength;
      })(Private || (Private = {}));
      function reduce(object, fn, initial) {
        const it = object[Symbol.iterator]();
        let index = 0;
        let first = it.next();
        if (first.done && initial === void 0) {
          throw new TypeError("Reduce of empty iterable with no initial value.");
        }
        if (first.done) {
          return initial;
        }
        let second = it.next();
        if (second.done && initial === void 0) {
          return first.value;
        }
        if (second.done) {
          return fn(initial, first.value, index++);
        }
        let accumulator;
        if (initial === void 0) {
          accumulator = fn(first.value, second.value, index++);
        } else {
          accumulator = fn(fn(initial, first.value, index++), second.value, index++);
        }
        let next;
        while (!(next = it.next()).done) {
          accumulator = fn(accumulator, next.value, index++);
        }
        return accumulator;
      }
      function* repeat(value, count) {
        while (0 < count--) {
          yield value;
        }
      }
      function* once(value) {
        yield value;
      }
      function* retro(object) {
        if (typeof object.retro === "function") {
          yield* object.retro();
        } else {
          for (let index = object.length - 1; index > -1; index--) {
            yield object[index];
          }
        }
      }
      function topologicSort(edges) {
        let sorted = [];
        let visited = /* @__PURE__ */ new Set();
        let graph = /* @__PURE__ */ new Map();
        for (const edge of edges) {
          addEdge(edge);
        }
        for (const [k] of graph) {
          visit(k);
        }
        return sorted;
        function addEdge(edge) {
          let [fromNode, toNode] = edge;
          let children = graph.get(toNode);
          if (children) {
            children.push(fromNode);
          } else {
            graph.set(toNode, [fromNode]);
          }
        }
        function visit(node) {
          if (visited.has(node)) {
            return;
          }
          visited.add(node);
          let children = graph.get(node);
          if (children) {
            for (const child of children) {
              visit(child);
            }
          }
          sorted.push(node);
        }
      }
      function* stride(object, step) {
        let count = 0;
        for (const value of object) {
          if (0 === count++ % step) {
            yield value;
          }
        }
      }
      exports3.StringExt = void 0;
      (function(StringExt) {
        function findIndices(source, query, start = 0) {
          let indices = new Array(query.length);
          for (let i = 0, j = start, n = query.length; i < n; ++i, ++j) {
            j = source.indexOf(query[i], j);
            if (j === -1) {
              return null;
            }
            indices[i] = j;
          }
          return indices;
        }
        StringExt.findIndices = findIndices;
        function matchSumOfSquares(source, query, start = 0) {
          let indices = findIndices(source, query, start);
          if (!indices) {
            return null;
          }
          let score = 0;
          for (let i = 0, n = indices.length; i < n; ++i) {
            let j = indices[i] - start;
            score += j * j;
          }
          return { score, indices };
        }
        StringExt.matchSumOfSquares = matchSumOfSquares;
        function matchSumOfDeltas(source, query, start = 0) {
          let indices = findIndices(source, query, start);
          if (!indices) {
            return null;
          }
          let score = 0;
          let last = start - 1;
          for (let i = 0, n = indices.length; i < n; ++i) {
            let j = indices[i];
            score += j - last - 1;
            last = j;
          }
          return { score, indices };
        }
        StringExt.matchSumOfDeltas = matchSumOfDeltas;
        function highlight(source, indices, fn) {
          let result = [];
          let k = 0;
          let last = 0;
          let n = indices.length;
          while (k < n) {
            let i = indices[k];
            let j = indices[k];
            while (++k < n && indices[k] === j + 1) {
              j++;
            }
            if (last < i) {
              result.push(source.slice(last, i));
            }
            if (i < j + 1) {
              result.push(fn(source.slice(i, j + 1)));
            }
            last = j + 1;
          }
          if (last < source.length) {
            result.push(source.slice(last));
          }
          return result;
        }
        StringExt.highlight = highlight;
        function cmp(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }
        StringExt.cmp = cmp;
      })(exports3.StringExt || (exports3.StringExt = {}));
      function* take(object, count) {
        if (count < 1) {
          return;
        }
        const it = object[Symbol.iterator]();
        let item;
        while (0 < count-- && !(item = it.next()).done) {
          yield item.value;
        }
      }
      function* zip(...objects) {
        const iters = objects.map((obj) => obj[Symbol.iterator]());
        let tuple = iters.map((it) => it.next());
        for (; every(tuple, (item) => !item.done); tuple = iters.map((it) => it.next())) {
          yield tuple.map((item) => item.value);
        }
      }
      exports3.chain = chain;
      exports3.each = each;
      exports3.empty = empty;
      exports3.enumerate = enumerate;
      exports3.every = every;
      exports3.filter = filter;
      exports3.find = find;
      exports3.findIndex = findIndex;
      exports3.map = map;
      exports3.max = max;
      exports3.min = min;
      exports3.minmax = minmax;
      exports3.once = once;
      exports3.range = range;
      exports3.reduce = reduce;
      exports3.repeat = repeat;
      exports3.retro = retro;
      exports3.some = some;
      exports3.stride = stride;
      exports3.take = take;
      exports3.toArray = toArray;
      exports3.toObject = toObject;
      exports3.topologicSort = topologicSort;
      exports3.zip = zip;
    });
  }
});

// node_modules/@lumino/coreutils/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@lumino/coreutils/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_dist()) : typeof define === "function" && define.amd ? define(["exports", "@lumino/algorithm"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_coreutils = {}, global2.lumino_algorithm));
    })(exports2, function(exports3, algorithm) {
      "use strict";
      exports3.JSONExt = void 0;
      (function(JSONExt) {
        JSONExt.emptyObject = Object.freeze({});
        JSONExt.emptyArray = Object.freeze([]);
        function isPrimitive(value) {
          return value === null || typeof value === "boolean" || typeof value === "number" || typeof value === "string";
        }
        JSONExt.isPrimitive = isPrimitive;
        function isArray2(value) {
          return Array.isArray(value);
        }
        JSONExt.isArray = isArray2;
        function isObject2(value) {
          return !isPrimitive(value) && !isArray2(value);
        }
        JSONExt.isObject = isObject2;
        function deepEqual(first, second) {
          if (first === second) {
            return true;
          }
          if (isPrimitive(first) || isPrimitive(second)) {
            return false;
          }
          let a1 = isArray2(first);
          let a2 = isArray2(second);
          if (a1 !== a2) {
            return false;
          }
          if (a1 && a2) {
            return deepArrayEqual(first, second);
          }
          return deepObjectEqual(first, second);
        }
        JSONExt.deepEqual = deepEqual;
        function deepCopy(value) {
          if (isPrimitive(value)) {
            return value;
          }
          if (isArray2(value)) {
            return deepArrayCopy(value);
          }
          return deepObjectCopy(value);
        }
        JSONExt.deepCopy = deepCopy;
        function deepArrayEqual(first, second) {
          if (first === second) {
            return true;
          }
          if (first.length !== second.length) {
            return false;
          }
          for (let i = 0, n = first.length; i < n; ++i) {
            if (!deepEqual(first[i], second[i])) {
              return false;
            }
          }
          return true;
        }
        function deepObjectEqual(first, second) {
          if (first === second) {
            return true;
          }
          for (let key in first) {
            if (first[key] !== void 0 && !(key in second)) {
              return false;
            }
          }
          for (let key in second) {
            if (second[key] !== void 0 && !(key in first)) {
              return false;
            }
          }
          for (let key in first) {
            let firstValue = first[key];
            let secondValue = second[key];
            if (firstValue === void 0 && secondValue === void 0) {
              continue;
            }
            if (firstValue === void 0 || secondValue === void 0) {
              return false;
            }
            if (!deepEqual(firstValue, secondValue)) {
              return false;
            }
          }
          return true;
        }
        function deepArrayCopy(value) {
          let result = new Array(value.length);
          for (let i = 0, n = value.length; i < n; ++i) {
            result[i] = deepCopy(value[i]);
          }
          return result;
        }
        function deepObjectCopy(value) {
          let result = {};
          for (let key in value) {
            let subvalue = value[key];
            if (subvalue === void 0) {
              continue;
            }
            result[key] = deepCopy(subvalue);
          }
          return result;
        }
      })(exports3.JSONExt || (exports3.JSONExt = {}));
      class MimeData {
        constructor() {
          this._types = [];
          this._values = [];
        }
        /**
         * Get an array of the MIME types contained within the dataset.
         *
         * @returns A new array of the MIME types, in order of insertion.
         */
        types() {
          return this._types.slice();
        }
        /**
         * Test whether the dataset has an entry for the given type.
         *
         * @param mime - The MIME type of interest.
         *
         * @returns `true` if the dataset contains a value for the given
         *   MIME type, `false` otherwise.
         */
        hasData(mime) {
          return this._types.indexOf(mime) !== -1;
        }
        /**
         * Get the data value for the given MIME type.
         *
         * @param mime - The MIME type of interest.
         *
         * @returns The value for the given MIME type, or `undefined` if
         *   the dataset does not contain a value for the type.
         */
        getData(mime) {
          let i = this._types.indexOf(mime);
          return i !== -1 ? this._values[i] : void 0;
        }
        /**
         * Set the data value for the given MIME type.
         *
         * @param mime - The MIME type of interest.
         *
         * @param data - The data value for the given MIME type.
         *
         * #### Notes
         * This will overwrite any previous entry for the MIME type.
         */
        setData(mime, data) {
          this.clearData(mime);
          this._types.push(mime);
          this._values.push(data);
        }
        /**
         * Remove the data entry for the given MIME type.
         *
         * @param mime - The MIME type of interest.
         *
         * #### Notes
         * This is a no-op if there is no entry for the given MIME type.
         */
        clearData(mime) {
          let i = this._types.indexOf(mime);
          if (i !== -1) {
            this._types.splice(i, 1);
            this._values.splice(i, 1);
          }
        }
        /**
         * Remove all data entries from the dataset.
         */
        clear() {
          this._types.length = 0;
          this._values.length = 0;
        }
      }
      class PluginRegistry {
        constructor(options = {}) {
          this._application = null;
          this._validatePlugin = () => true;
          this._plugins = /* @__PURE__ */ new Map();
          this._services = /* @__PURE__ */ new Map();
          if (options.validatePlugin) {
            console.info("Plugins may be rejected by the custom validation plugin method.");
            this._validatePlugin = options.validatePlugin;
          }
        }
        /**
         * The application object.
         *
         * It will be provided as first argument to the
         * plugins activation and deactivation functions.
         *
         * It can only be set once.
         *
         * By default, it is `null`.
         */
        get application() {
          return this._application;
        }
        set application(v) {
          if (this._application !== null) {
            throw Error("PluginRegistry.application is already set. It cannot be overridden.");
          }
          this._application = v;
        }
        /**
         * The list of all the deferred plugins.
         */
        get deferredPlugins() {
          return Array.from(this._plugins).filter(([id, plugin]) => plugin.autoStart === "defer").map(([id, plugin]) => id);
        }
        /**
         * Get a plugin description.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @returns The plugin description.
         */
        getPluginDescription(id) {
          var _a7, _b;
          return (_b = (_a7 = this._plugins.get(id)) === null || _a7 === void 0 ? void 0 : _a7.description) !== null && _b !== void 0 ? _b : "";
        }
        /**
         * Test whether a plugin is registered with the application.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @returns `true` if the plugin is registered, `false` otherwise.
         */
        hasPlugin(id) {
          return this._plugins.has(id);
        }
        /**
         * Test whether a plugin is activated with the application.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @returns `true` if the plugin is activated, `false` otherwise.
         */
        isPluginActivated(id) {
          var _a7, _b;
          return (_b = (_a7 = this._plugins.get(id)) === null || _a7 === void 0 ? void 0 : _a7.activated) !== null && _b !== void 0 ? _b : false;
        }
        /**
         * List the IDs of the plugins registered with the application.
         *
         * @returns A new array of the registered plugin IDs.
         */
        listPlugins() {
          return Array.from(this._plugins.keys());
        }
        /**
         * Register a plugin with the application.
         *
         * @param plugin - The plugin to register.
         *
         * #### Notes
         * An error will be thrown if a plugin with the same ID is already
         * registered, or if the plugin has a circular dependency.
         *
         * If the plugin provides a service which has already been provided
         * by another plugin, the new service will override the old service.
         */
        registerPlugin(plugin) {
          if (this._plugins.has(plugin.id)) {
            throw new TypeError(`Plugin '${plugin.id}' is already registered.`);
          }
          if (!this._validatePlugin(plugin)) {
            throw new Error(`Plugin '${plugin.id}' is not valid.`);
          }
          const data = Private.createPluginData(plugin);
          Private.ensureNoCycle(data, this._plugins, this._services);
          if (data.provides) {
            this._services.set(data.provides, data.id);
          }
          this._plugins.set(data.id, data);
        }
        /**
         * Register multiple plugins with the application.
         *
         * @param plugins - The plugins to register.
         *
         * #### Notes
         * This calls `registerPlugin()` for each of the given plugins.
         */
        registerPlugins(plugins) {
          for (const plugin of plugins) {
            this.registerPlugin(plugin);
          }
        }
        /**
         * Deregister a plugin with the application.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @param force - Whether to deregister the plugin even if it is active.
         */
        deregisterPlugin(id, force) {
          const plugin = this._plugins.get(id);
          if (!plugin) {
            return;
          }
          if (plugin.activated && !force) {
            throw new Error(`Plugin '${id}' is still active.`);
          }
          this._plugins.delete(id);
        }
        /**
         * Activate the plugin with the given ID.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @returns A promise which resolves when the plugin is activated
         *   or rejects with an error if it cannot be activated.
         */
        async activatePlugin(id) {
          const plugin = this._plugins.get(id);
          if (!plugin) {
            throw new ReferenceError(`Plugin '${id}' is not registered.`);
          }
          if (plugin.activated) {
            return;
          }
          if (plugin.promise) {
            return plugin.promise;
          }
          const required = plugin.requires.map((t) => this.resolveRequiredService(t));
          const optional = plugin.optional.map((t) => this.resolveOptionalService(t));
          plugin.promise = Promise.all([...required, ...optional]).then((services) => plugin.activate.apply(void 0, [this.application, ...services])).then((service) => {
            plugin.service = service;
            plugin.activated = true;
            plugin.promise = null;
          }).catch((error) => {
            plugin.promise = null;
            throw error;
          });
          return plugin.promise;
        }
        /**
         * Activate all the deferred plugins.
         *
         * @returns A promise which will resolve when each plugin is activated
         * or rejects with an error if one cannot be activated.
         */
        async activatePlugins(kind, options = {}) {
          switch (kind) {
            case "defer": {
              const promises = this.deferredPlugins.filter((pluginId) => this._plugins.get(pluginId).autoStart).map((pluginId) => {
                return this.activatePlugin(pluginId);
              });
              await Promise.all(promises);
              break;
            }
            case "startUp": {
              const startups = Private.collectStartupPlugins(this._plugins, options);
              const promises = startups.map(async (id) => {
                try {
                  return await this.activatePlugin(id);
                } catch (error) {
                  console.error(`Plugin '${id}' failed to activate.`, error);
                }
              });
              await Promise.all(promises);
              break;
            }
          }
        }
        /**
         * Deactivate the plugin and its downstream dependents if and only if the
         * plugin and its dependents all support `deactivate`.
         *
         * @param id - The ID of the plugin of interest.
         *
         * @returns A list of IDs of downstream plugins deactivated with this one.
         */
        async deactivatePlugin(id) {
          const plugin = this._plugins.get(id);
          if (!plugin) {
            throw new ReferenceError(`Plugin '${id}' is not registered.`);
          }
          if (!plugin.activated) {
            return [];
          }
          if (!plugin.deactivate) {
            throw new TypeError(`Plugin '${id}'#deactivate() method missing`);
          }
          const manifest = Private.findDependents(id, this._plugins, this._services);
          const downstream = manifest.map((id2) => this._plugins.get(id2));
          for (const plugin2 of downstream) {
            if (!plugin2.deactivate) {
              throw new TypeError(`Plugin ${plugin2.id}#deactivate() method missing (depends on ${id})`);
            }
          }
          for (const plugin2 of downstream) {
            const services = [...plugin2.requires, ...plugin2.optional].map((service) => {
              const id2 = this._services.get(service);
              return id2 ? this._plugins.get(id2).service : null;
            });
            await plugin2.deactivate(this.application, ...services);
            plugin2.service = null;
            plugin2.activated = false;
          }
          manifest.pop();
          return manifest;
        }
        /**
         * Resolve a required service of a given type.
         *
         * @param token - The token for the service type of interest.
         *
         * @returns A promise which resolves to an instance of the requested
         *   service, or rejects with an error if it cannot be resolved.
         *
         * #### Notes
         * Services are singletons. The same instance will be returned each
         * time a given service token is resolved.
         *
         * If the plugin which provides the service has not been activated,
         * resolving the service will automatically activate the plugin.
         *
         * User code will not typically call this method directly. Instead,
         * the required services for the user's plugins will be resolved
         * automatically when the plugin is activated.
         */
        async resolveRequiredService(token) {
          const id = this._services.get(token);
          if (!id) {
            throw new TypeError(`No provider for: ${token.name}.`);
          }
          const plugin = this._plugins.get(id);
          if (!plugin.activated) {
            await this.activatePlugin(id);
          }
          return plugin.service;
        }
        /**
         * Resolve an optional service of a given type.
         *
         * @param token - The token for the service type of interest.
         *
         * @returns A promise which resolves to an instance of the requested
         *   service, or `null` if it cannot be resolved.
         *
         * #### Notes
         * Services are singletons. The same instance will be returned each
         * time a given service token is resolved.
         *
         * If the plugin which provides the service has not been activated,
         * resolving the service will automatically activate the plugin.
         *
         * User code will not typically call this method directly. Instead,
         * the optional services for the user's plugins will be resolved
         * automatically when the plugin is activated.
         */
        async resolveOptionalService(token) {
          const id = this._services.get(token);
          if (!id) {
            return null;
          }
          const plugin = this._plugins.get(id);
          if (!plugin.activated) {
            try {
              await this.activatePlugin(id);
            } catch (reason) {
              console.error(reason);
              return null;
            }
          }
          return plugin.service;
        }
      }
      var Private;
      (function(Private2) {
        class PluginData {
          constructor(plugin) {
            var _a7, _b, _c, _d;
            this._activated = false;
            this._promise = null;
            this._service = null;
            this.id = plugin.id;
            this.description = (_a7 = plugin.description) !== null && _a7 !== void 0 ? _a7 : "";
            this.activate = plugin.activate;
            this.deactivate = (_b = plugin.deactivate) !== null && _b !== void 0 ? _b : null;
            this.provides = (_c = plugin.provides) !== null && _c !== void 0 ? _c : null;
            this.autoStart = (_d = plugin.autoStart) !== null && _d !== void 0 ? _d : false;
            this.requires = plugin.requires ? plugin.requires.slice() : [];
            this.optional = plugin.optional ? plugin.optional.slice() : [];
          }
          /**
           * Whether the plugin has been activated.
           */
          get activated() {
            return this._activated;
          }
          set activated(a) {
            this._activated = a;
          }
          /**
           * The resolved service for the plugin, or `null`.
           */
          get service() {
            return this._service;
          }
          set service(s) {
            this._service = s;
          }
          /**
           * The pending resolver promise, or `null`.
           */
          get promise() {
            return this._promise;
          }
          set promise(p) {
            this._promise = p;
          }
        }
        function createPluginData(plugin) {
          return new PluginData(plugin);
        }
        Private2.createPluginData = createPluginData;
        function ensureNoCycle(plugin, plugins, services) {
          const dependencies = [...plugin.requires, ...plugin.optional];
          const visit = (token) => {
            if (token === plugin.provides) {
              return true;
            }
            const id = services.get(token);
            if (!id) {
              return false;
            }
            const visited = plugins.get(id);
            const dependencies2 = [...visited.requires, ...visited.optional];
            if (dependencies2.length === 0) {
              return false;
            }
            trace.push(id);
            if (dependencies2.some(visit)) {
              return true;
            }
            trace.pop();
            return false;
          };
          if (!plugin.provides || dependencies.length === 0) {
            return;
          }
          const trace = [plugin.id];
          if (dependencies.some(visit)) {
            throw new ReferenceError(`Cycle detected: ${trace.join(" -> ")}.`);
          }
        }
        Private2.ensureNoCycle = ensureNoCycle;
        function findDependents(id, plugins, services) {
          const edges = new Array();
          const add = (id2) => {
            const plugin = plugins.get(id2);
            const dependencies = [...plugin.requires, ...plugin.optional];
            edges.push(...dependencies.reduce((acc, dep) => {
              const service = services.get(dep);
              if (service) {
                acc.push([id2, service]);
              }
              return acc;
            }, []));
          };
          for (const id2 of plugins.keys()) {
            add(id2);
          }
          const newEdges = edges.filter((edge) => edge[1] === id);
          let oldSize = 0;
          while (newEdges.length > oldSize) {
            const previousSize = newEdges.length;
            const packagesOfInterest = new Set(newEdges.map((edge) => edge[0]));
            for (const poi of packagesOfInterest) {
              edges.filter((edge) => edge[1] === poi).forEach((edge) => {
                if (!newEdges.includes(edge)) {
                  newEdges.push(edge);
                }
              });
            }
            oldSize = previousSize;
          }
          const sorted = algorithm.topologicSort(newEdges);
          const index = sorted.findIndex((candidate) => candidate === id);
          if (index === -1) {
            return [id];
          }
          return sorted.slice(0, index + 1);
        }
        Private2.findDependents = findDependents;
        function collectStartupPlugins(plugins, options) {
          const collection = /* @__PURE__ */ new Set();
          for (const id of plugins.keys()) {
            if (plugins.get(id).autoStart === true) {
              collection.add(id);
            }
          }
          if (options.startPlugins) {
            for (const id of options.startPlugins) {
              collection.add(id);
            }
          }
          if (options.ignorePlugins) {
            for (const id of options.ignorePlugins) {
              collection.delete(id);
            }
          }
          return Array.from(collection);
        }
        Private2.collectStartupPlugins = collectStartupPlugins;
      })(Private || (Private = {}));
      class PromiseDelegate {
        /**
         * Construct a new promise delegate.
         */
        constructor() {
          this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
          });
        }
        /**
         * Resolve the wrapped promise with the given value.
         *
         * @param value - The value to use for resolving the promise.
         */
        resolve(value) {
          let resolve = this._resolve;
          resolve(value);
        }
        /**
         * Reject the wrapped promise with the given value.
         *
         * @reason - The reason for rejecting the promise.
         */
        reject(reason) {
          let reject = this._reject;
          reject(reason);
        }
      }
      class Token {
        /**
         * Construct a new token.
         *
         * @param name - A human readable name for the token.
         * @param description - Token purpose description for documentation.
         */
        constructor(name2, description) {
          this.name = name2;
          this.description = description !== null && description !== void 0 ? description : "";
          this._tokenStructuralPropertyT = null;
        }
      }
      function fallbackRandomValues(buffer) {
        let value = 0;
        for (let i = 0, n = buffer.length; i < n; ++i) {
          if (i % 4 === 0) {
            value = Math.random() * 4294967295 >>> 0;
          }
          buffer[i] = value & 255;
          value >>>= 8;
        }
      }
      exports3.Random = void 0;
      (function(Random) {
        Random.getRandomValues = (() => {
          const crypto = typeof window !== "undefined" && (window.crypto || window.msCrypto) || null;
          if (crypto && typeof crypto.getRandomValues === "function") {
            return function getRandomValues(buffer) {
              return crypto.getRandomValues(buffer);
            };
          }
          return fallbackRandomValues;
        })();
      })(exports3.Random || (exports3.Random = {}));
      function uuid4Factory(getRandomValues) {
        const bytes = new Uint8Array(16);
        const lut = new Array(256);
        for (let i = 0; i < 16; ++i) {
          lut[i] = "0" + i.toString(16);
        }
        for (let i = 16; i < 256; ++i) {
          lut[i] = i.toString(16);
        }
        return function uuid4() {
          getRandomValues(bytes);
          bytes[6] = 64 | bytes[6] & 15;
          bytes[8] = 128 | bytes[8] & 63;
          return lut[bytes[0]] + lut[bytes[1]] + lut[bytes[2]] + lut[bytes[3]] + "-" + lut[bytes[4]] + lut[bytes[5]] + "-" + lut[bytes[6]] + lut[bytes[7]] + "-" + lut[bytes[8]] + lut[bytes[9]] + "-" + lut[bytes[10]] + lut[bytes[11]] + lut[bytes[12]] + lut[bytes[13]] + lut[bytes[14]] + lut[bytes[15]];
        };
      }
      exports3.UUID = void 0;
      (function(UUID) {
        UUID.uuid4 = uuid4Factory(exports3.Random.getRandomValues);
      })(exports3.UUID || (exports3.UUID = {}));
      exports3.MimeData = MimeData;
      exports3.PluginRegistry = PluginRegistry;
      exports3.PromiseDelegate = PromiseDelegate;
      exports3.Token = Token;
    });
  }
});

// node_modules/@lumino/signaling/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@lumino/signaling/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_dist(), require_dist2()) : typeof define === "function" && define.amd ? define(["exports", "@lumino/algorithm", "@lumino/coreutils"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_signaling = {}, global2.lumino_algorithm, global2.lumino_coreutils));
    })(exports2, function(exports3, algorithm, coreutils) {
      "use strict";
      class Signal {
        /**
         * Construct a new signal.
         *
         * @param sender - The sender which owns the signal.
         */
        constructor(sender) {
          this.sender = sender;
        }
        /**
         * Connect a slot to the signal.
         *
         * @param slot - The slot to invoke when the signal is emitted.
         *
         * @param thisArg - The `this` context for the slot. If provided,
         *   this must be a non-primitive object.
         *
         * @returns `true` if the connection succeeds, `false` otherwise.
         */
        connect(slot, thisArg) {
          return Private.connect(this, slot, thisArg);
        }
        /**
         * Disconnect a slot from the signal.
         *
         * @param slot - The slot to disconnect from the signal.
         *
         * @param thisArg - The `this` context for the slot. If provided,
         *   this must be a non-primitive object.
         *
         * @returns `true` if the connection is removed, `false` otherwise.
         */
        disconnect(slot, thisArg) {
          return Private.disconnect(this, slot, thisArg);
        }
        /**
         * Emit the signal and invoke the connected slots.
         *
         * @param args - The args to pass to the connected slots.
         *
         * #### Notes
         * Slots are invoked synchronously in connection order.
         *
         * Exceptions thrown by connected slots will be caught and logged.
         */
        emit(args) {
          Private.emit(this, args);
        }
      }
      (function(Signal2) {
        function disconnectBetween(sender, receiver) {
          Private.disconnectBetween(sender, receiver);
        }
        Signal2.disconnectBetween = disconnectBetween;
        function disconnectSender(sender) {
          Private.disconnectSender(sender);
        }
        Signal2.disconnectSender = disconnectSender;
        function disconnectReceiver(receiver) {
          Private.disconnectReceiver(receiver);
        }
        Signal2.disconnectReceiver = disconnectReceiver;
        function disconnectAll(object) {
          Private.disconnectAll(object);
        }
        Signal2.disconnectAll = disconnectAll;
        function clearData(object) {
          Private.disconnectAll(object);
        }
        Signal2.clearData = clearData;
        function getExceptionHandler() {
          return Private.exceptionHandler;
        }
        Signal2.getExceptionHandler = getExceptionHandler;
        function setExceptionHandler(handler) {
          let old = Private.exceptionHandler;
          Private.exceptionHandler = handler;
          return old;
        }
        Signal2.setExceptionHandler = setExceptionHandler;
      })(Signal || (Signal = {}));
      class Stream extends Signal {
        constructor() {
          super(...arguments);
          this._pending = new coreutils.PromiseDelegate();
        }
        /**
         * Return an async iterator that yields every emission.
         */
        async *[Symbol.asyncIterator]() {
          let pending = this._pending;
          while (true) {
            try {
              const { args, next } = await pending.promise;
              pending = next;
              yield args;
            } catch (_) {
              return;
            }
          }
        }
        /**
         * Emit the signal, invoke the connected slots, and yield the emission.
         *
         * @param args - The args to pass to the connected slots.
         */
        emit(args) {
          const pending = this._pending;
          const next = this._pending = new coreutils.PromiseDelegate();
          pending.resolve({ args, next });
          super.emit(args);
        }
        /**
         * Stop the stream's async iteration.
         */
        stop() {
          this._pending.promise.catch(() => void 0);
          this._pending.reject("stop");
          this._pending = new coreutils.PromiseDelegate();
        }
      }
      var Private;
      (function(Private2) {
        Private2.exceptionHandler = (err) => {
          console.error(err);
        };
        function connect(signal, slot, thisArg) {
          thisArg = thisArg || void 0;
          let receivers = receiversForSender.get(signal.sender);
          if (!receivers) {
            receivers = [];
            receiversForSender.set(signal.sender, receivers);
          }
          if (findConnection(receivers, signal, slot, thisArg)) {
            return false;
          }
          let receiver = thisArg || slot;
          let senders = sendersForReceiver.get(receiver);
          if (!senders) {
            senders = [];
            sendersForReceiver.set(receiver, senders);
          }
          let connection = { signal, slot, thisArg };
          receivers.push(connection);
          senders.push(connection);
          return true;
        }
        Private2.connect = connect;
        function disconnect(signal, slot, thisArg) {
          thisArg = thisArg || void 0;
          let receivers = receiversForSender.get(signal.sender);
          if (!receivers || receivers.length === 0) {
            return false;
          }
          let connection = findConnection(receivers, signal, slot, thisArg);
          if (!connection) {
            return false;
          }
          let receiver = thisArg || slot;
          let senders = sendersForReceiver.get(receiver);
          connection.signal = null;
          scheduleCleanup(receivers);
          scheduleCleanup(senders);
          return true;
        }
        Private2.disconnect = disconnect;
        function disconnectBetween(sender, receiver) {
          let receivers = receiversForSender.get(sender);
          if (!receivers || receivers.length === 0) {
            return;
          }
          let senders = sendersForReceiver.get(receiver);
          if (!senders || senders.length === 0) {
            return;
          }
          for (const connection of senders) {
            if (!connection.signal) {
              continue;
            }
            if (connection.signal.sender === sender) {
              connection.signal = null;
            }
          }
          scheduleCleanup(receivers);
          scheduleCleanup(senders);
        }
        Private2.disconnectBetween = disconnectBetween;
        function disconnectSender(sender) {
          let receivers = receiversForSender.get(sender);
          if (!receivers || receivers.length === 0) {
            return;
          }
          for (const connection of receivers) {
            if (!connection.signal) {
              continue;
            }
            let receiver = connection.thisArg || connection.slot;
            connection.signal = null;
            scheduleCleanup(sendersForReceiver.get(receiver));
          }
          scheduleCleanup(receivers);
        }
        Private2.disconnectSender = disconnectSender;
        function disconnectReceiver(receiver) {
          let senders = sendersForReceiver.get(receiver);
          if (!senders || senders.length === 0) {
            return;
          }
          for (const connection of senders) {
            if (!connection.signal) {
              continue;
            }
            let sender = connection.signal.sender;
            connection.signal = null;
            scheduleCleanup(receiversForSender.get(sender));
          }
          scheduleCleanup(senders);
        }
        Private2.disconnectReceiver = disconnectReceiver;
        function disconnectAll(object) {
          disconnectSender(object);
          disconnectReceiver(object);
        }
        Private2.disconnectAll = disconnectAll;
        function emit(signal, args) {
          let receivers = receiversForSender.get(signal.sender);
          if (!receivers || receivers.length === 0) {
            return;
          }
          for (let i = 0, n = receivers.length; i < n; ++i) {
            let connection = receivers[i];
            if (connection.signal === signal) {
              invokeSlot(connection, args);
            }
          }
        }
        Private2.emit = emit;
        const receiversForSender = /* @__PURE__ */ new WeakMap();
        const sendersForReceiver = /* @__PURE__ */ new WeakMap();
        const dirtySet = /* @__PURE__ */ new Set();
        const schedule = (() => {
          let ok = typeof requestAnimationFrame === "function";
          return ok ? requestAnimationFrame : setImmediate;
        })();
        function findConnection(connections, signal, slot, thisArg) {
          return algorithm.find(connections, (connection) => connection.signal === signal && connection.slot === slot && connection.thisArg === thisArg);
        }
        function invokeSlot(connection, args) {
          let { signal, slot, thisArg } = connection;
          try {
            slot.call(thisArg, signal.sender, args);
          } catch (err) {
            Private2.exceptionHandler(err);
          }
        }
        function scheduleCleanup(array) {
          if (dirtySet.size === 0) {
            schedule(cleanupDirtySet);
          }
          dirtySet.add(array);
        }
        function cleanupDirtySet() {
          dirtySet.forEach(cleanupConnections);
          dirtySet.clear();
        }
        function cleanupConnections(connections) {
          algorithm.ArrayExt.removeAllWhere(connections, isDeadConnection);
        }
        function isDeadConnection(connection) {
          return connection.signal === null;
        }
      })(Private || (Private = {}));
      exports3.Signal = Signal;
      exports3.Stream = Stream;
    });
  }
});

// node_modules/@jupyterlab/coreutils/lib/activitymonitor.js
var require_activitymonitor = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/activitymonitor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ActivityMonitor = void 0;
    var signaling_1 = require_dist3();
    var ActivityMonitor = class {
      /**
       * Construct a new activity monitor.
       */
      constructor(options) {
        this._timer = -1;
        this._timeout = -1;
        this._isDisposed = false;
        this._activityStopped = new signaling_1.Signal(this);
        options.signal.connect(this._onSignalFired, this);
        this._timeout = options.timeout || 1e3;
      }
      /**
       * A signal emitted when activity has ceased.
       */
      get activityStopped() {
        return this._activityStopped;
      }
      /**
       * The timeout associated with the monitor, in milliseconds.
       */
      get timeout() {
        return this._timeout;
      }
      set timeout(value) {
        this._timeout = value;
      }
      /**
       * Test whether the monitor has been disposed.
       *
       * #### Notes
       * This is a read-only property.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources used by the activity monitor.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        signaling_1.Signal.clearData(this);
      }
      /**
       * A signal handler for the monitored signal.
       */
      _onSignalFired(sender, args) {
        clearTimeout(this._timer);
        this._sender = sender;
        this._args = args;
        this._timer = setTimeout(() => {
          this._activityStopped.emit({
            sender: this._sender,
            args: this._args
          });
        }, this._timeout);
      }
    };
    exports2.ActivityMonitor = ActivityMonitor;
  }
});

// node_modules/@jupyterlab/coreutils/lib/interfaces.js
var require_interfaces = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/interfaces.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@jupyterlab/coreutils/lib/lru.js
var require_lru = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/lru.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LruCache = void 0;
    var DEFAULT_MAX_SIZE = 128;
    var LruCache = class {
      constructor(options = {}) {
        this._map = /* @__PURE__ */ new Map();
        this._maxSize = (options === null || options === void 0 ? void 0 : options.maxSize) || DEFAULT_MAX_SIZE;
      }
      /**
       * Return the current size of the cache.
       */
      get size() {
        return this._map.size;
      }
      /**
       * Clear the values in the cache.
       */
      clear() {
        this._map.clear();
      }
      /**
       * Get a value (or null) from the cache, pushing the item to the front of the cache.
       */
      get(key) {
        const item = this._map.get(key) || null;
        if (item != null) {
          this._map.delete(key);
          this._map.set(key, item);
        }
        return item;
      }
      /**
       * Set a value in the cache, potentially evicting an old item.
       */
      set(key, value) {
        if (this._map.size >= this._maxSize) {
          this._map.delete(this._map.keys().next().value);
        }
        this._map.set(key, value);
      }
    };
    exports2.LruCache = LruCache;
  }
});

// node_modules/@jupyterlab/coreutils/lib/markdowncodeblocks.js
var require_markdowncodeblocks = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/markdowncodeblocks.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MarkdownCodeBlocks = void 0;
    var MarkdownCodeBlocks;
    (function(MarkdownCodeBlocks2) {
      MarkdownCodeBlocks2.CODE_BLOCK_MARKER = "```";
      const markdownExtensions = [
        ".markdown",
        ".mdown",
        ".mkdn",
        ".md",
        ".mkd",
        ".mdwn",
        ".mdtxt",
        ".mdtext",
        ".text",
        ".txt",
        ".Rmd"
      ];
      class MarkdownCodeBlock {
        constructor(startLine) {
          this.startLine = startLine;
          this.code = "";
          this.endLine = -1;
        }
      }
      MarkdownCodeBlocks2.MarkdownCodeBlock = MarkdownCodeBlock;
      function isMarkdown(extension) {
        return markdownExtensions.indexOf(extension) > -1;
      }
      MarkdownCodeBlocks2.isMarkdown = isMarkdown;
      function findMarkdownCodeBlocks(text) {
        if (!text || text === "") {
          return [];
        }
        const lines = text.split("\n");
        const codeBlocks = [];
        let currentBlock = null;
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
          const line = lines[lineIndex];
          const lineContainsMarker = line.indexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER) === 0;
          const constructingBlock = currentBlock != null;
          if (!lineContainsMarker && !constructingBlock) {
            continue;
          }
          if (!constructingBlock) {
            currentBlock = new MarkdownCodeBlock(lineIndex);
            const firstIndex = line.indexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER);
            const lastIndex = line.lastIndexOf(MarkdownCodeBlocks2.CODE_BLOCK_MARKER);
            const isSingleLine = firstIndex !== lastIndex;
            if (isSingleLine) {
              currentBlock.code = line.substring(firstIndex + MarkdownCodeBlocks2.CODE_BLOCK_MARKER.length, lastIndex);
              currentBlock.endLine = lineIndex;
              codeBlocks.push(currentBlock);
              currentBlock = null;
            }
          } else if (currentBlock) {
            if (lineContainsMarker) {
              currentBlock.endLine = lineIndex - 1;
              codeBlocks.push(currentBlock);
              currentBlock = null;
            } else {
              currentBlock.code += line + "\n";
            }
          }
        }
        return codeBlocks;
      }
      MarkdownCodeBlocks2.findMarkdownCodeBlocks = findMarkdownCodeBlocks;
    })(MarkdownCodeBlocks || (exports2.MarkdownCodeBlocks = MarkdownCodeBlocks = {}));
  }
});

// node_modules/minimist/index.js
var require_minimist = __commonJS({
  "node_modules/minimist/index.js"(exports2, module2) {
    "use strict";
    function hasKey(obj, keys) {
      var o = obj;
      keys.slice(0, -1).forEach(function(key2) {
        o = o[key2] || {};
      });
      var key = keys[keys.length - 1];
      return key in o;
    }
    function isNumber2(x) {
      if (typeof x === "number") {
        return true;
      }
      if (/^0x[0-9a-f]+$/i.test(x)) {
        return true;
      }
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function isConstructorOrProto(obj, key) {
      return key === "constructor" && typeof obj[key] === "function" || key === "__proto__";
    }
    module2.exports = function(args, opts) {
      if (!opts) {
        opts = {};
      }
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null
      };
      if (typeof opts.unknown === "function") {
        flags.unknownFn = opts.unknown;
      }
      if (typeof opts.boolean === "boolean" && opts.boolean) {
        flags.allBools = true;
      } else {
        [].concat(opts.boolean).filter(Boolean).forEach(function(key2) {
          flags.bools[key2] = true;
        });
      }
      var aliases = {};
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function(x) {
          return flags.bools[x];
        });
      }
      Object.keys(opts.alias || {}).forEach(function(key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function(x) {
          aliases[x] = [key2].concat(aliases[key2].filter(function(y) {
            return x !== y;
          }));
        });
      });
      [].concat(opts.string).filter(Boolean).forEach(function(key2) {
        flags.strings[key2] = true;
        if (aliases[key2]) {
          [].concat(aliases[key2]).forEach(function(k) {
            flags.strings[k] = true;
          });
        }
      });
      var defaults = opts.default || {};
      var argv = { _: [] };
      function argDefined(key2, arg2) {
        return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setKey(obj, keys, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys.length - 1; i2++) {
          var key2 = keys[i2];
          if (isConstructorOrProto(o, key2)) {
            return;
          }
          if (o[key2] === void 0) {
            o[key2] = {};
          }
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype) {
            o[key2] = {};
          }
          if (o[key2] === Array.prototype) {
            o[key2] = [];
          }
          o = o[key2];
        }
        var lastKey = keys[keys.length - 1];
        if (isConstructorOrProto(o, lastKey)) {
          return;
        }
        if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
          o = {};
        }
        if (o === Array.prototype) {
          o = [];
        }
        if (o[lastKey] === void 0 || flags.bools[lastKey] || typeof o[lastKey] === "boolean") {
          o[lastKey] = value2;
        } else if (Array.isArray(o[lastKey])) {
          o[lastKey].push(value2);
        } else {
          o[lastKey] = [o[lastKey], value2];
        }
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false) {
            return;
          }
        }
        var value2 = !flags.strings[key2] && isNumber2(val) ? Number(val) : val;
        setKey(argv, key2.split("."), value2);
        (aliases[key2] || []).forEach(function(x) {
          setKey(argv, x.split("."), value2);
        });
      }
      Object.keys(flags.bools).forEach(function(key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf("--") !== -1) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var key;
        var next;
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== "false";
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          key = arg.match(/^--(.+)/)[1];
          next = args[i + 1];
          if (next !== void 0 && !/^(-|--)[^-]/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, next, arg);
            i += 1;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === "true", arg);
            i += 1;
          } else {
            setArg(key, flags.strings[key] ? "" : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split("");
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (next === "-") {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
              setArg(letters[j], next.slice(1), arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== "-") {
            if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, args[i + 1], arg);
              i += 1;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === "true", arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv._.push(flags.strings._ || !isNumber2(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv._.push.apply(argv._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function(k) {
        if (!hasKey(argv, k.split("."))) {
          setKey(argv, k.split("."), defaults[k]);
          (aliases[k] || []).forEach(function(x) {
            setKey(argv, x.split("."), defaults[k]);
          });
        }
      });
      if (opts["--"]) {
        argv["--"] = notFlags.slice();
      } else {
        notFlags.forEach(function(k) {
          argv._.push(k);
        });
      }
      return argv;
    };
  }
});

// node_modules/path-browserify/index.js
var require_path_browserify = __commonJS({
  "node_modules/path-browserify/index.js"(exports2, module2) {
    "use strict";
    function assertPath(path2) {
      if (typeof path2 !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
      }
    }
    function normalizeStringPosix(path2, allowAboveRoot) {
      var res = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path2.length; ++i) {
        if (i < path2.length)
          code = path2.charCodeAt(i);
        else if (code === 47)
          break;
        else
          code = 47;
        if (code === 47) {
          if (lastSlash === i - 1 || dots === 1) {
          } else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf("/");
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = "";
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += "/..";
              else
                res = "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += "/" + path2.slice(lastSlash + 1, i);
            else
              res = path2.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }
    var posix = {
      // path.resolve([from ...], to)
      resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path2;
          if (i >= 0)
            path2 = arguments[i];
          else {
            if (cwd === void 0)
              cwd = process.cwd();
            path2 = cwd;
          }
          assertPath(path2);
          if (path2.length === 0) {
            continue;
          }
          resolvedPath = path2 + "/" + resolvedPath;
          resolvedAbsolute = path2.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return "/" + resolvedPath;
          else
            return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize(path2) {
        assertPath(path2);
        if (path2.length === 0)
          return ".";
        var isAbsolute = path2.charCodeAt(0) === 47;
        var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
        path2 = normalizeStringPosix(path2, !isAbsolute);
        if (path2.length === 0 && !isAbsolute)
          path2 = ".";
        if (path2.length > 0 && trailingSeparator)
          path2 += "/";
        if (isAbsolute)
          return "/" + path2;
        return path2;
      },
      isAbsolute: function isAbsolute(path2) {
        assertPath(path2);
        return path2.length > 0 && path2.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === void 0)
              joined = arg;
            else
              joined += "/" + arg;
          }
        }
        if (joined === void 0)
          return ".";
        return posix.normalize(joined);
      },
      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to)
          return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to)
          return "";
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47) {
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47) {
                lastCommonSep = i;
              } else if (i === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47)
            lastCommonSep = i;
        }
        var out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0)
              out += "..";
            else
              out += "/..";
          }
        }
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47)
            ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path2) {
        return path2;
      },
      dirname: function dirname(path2) {
        assertPath(path2);
        if (path2.length === 0)
          return ".";
        var code = path2.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i = path2.length - 1; i >= 1; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1)
          return hasRoot ? "/" : ".";
        if (hasRoot && end === 1)
          return "//";
        return path2.slice(0, end);
      },
      basename: function basename(path2, ext) {
        if (ext !== void 0 && typeof ext !== "string")
          throw new TypeError('"ext" argument must be a string');
        assertPath(path2);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
          if (ext.length === path2.length && ext === path2)
            return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path2.length - 1; i >= 0; --i) {
            var code = path2.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end)
            end = firstNonSlashEnd;
          else if (end === -1)
            end = path2.length;
          return path2.slice(start, end);
        } else {
          for (i = path2.length - 1; i >= 0; --i) {
            if (path2.charCodeAt(i) === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
          }
          if (end === -1)
            return "";
          return path2.slice(start, end);
        }
      },
      extname: function extname(path2) {
        assertPath(path2);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i = path2.length - 1; i >= 0; --i) {
          var code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path2.slice(startDot, end);
      },
      format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format("/", pathObject);
      },
      parse: function parse(path2) {
        assertPath(path2);
        var ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path2.length === 0)
          return ret;
        var code = path2.charCodeAt(0);
        var isAbsolute = code === 47;
        var start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path2.length - 1;
        var preDotState = 0;
        for (; i >= start; --i) {
          code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute)
              ret.base = ret.name = path2.slice(1, end);
            else
              ret.base = ret.name = path2.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path2.slice(1, startDot);
            ret.base = path2.slice(1, end);
          } else {
            ret.name = path2.slice(startPart, startDot);
            ret.base = path2.slice(startPart, end);
          }
          ret.ext = path2.slice(startDot, end);
        }
        if (startPart > 0)
          ret.dir = path2.slice(0, startPart - 1);
        else if (isAbsolute)
          ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.posix = posix;
    module2.exports = posix;
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if ("string" !== typeof prefix)
        prefix = "?";
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode(key);
          value = encode(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports2.stringify = querystringify;
    exports2.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports2, module2) {
    "use strict";
    var required = require_requires_port();
    var qs = require_querystringify();
    var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    var CRHTLF = /[\n\r\t]/g;
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var port = /:\d+$/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
    var windowsDriveLetter = /^[a-zA-Z]:/;
    function trimLeft(str) {
      return (str ? str : "").toString().replace(controlOrWhitespace, "");
    }
    var rules = [
      ["#", "hash"],
      // Extract from the back.
      ["?", "query"],
      // Extract from the back.
      function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
      },
      ["/", "pathname"],
      // Extract from the back.
      ["@", "auth", 1],
      // Extract from the front.
      [NaN, "host", void 0, 1, 1],
      // Set left over value.
      [/:(\d*)$/, "port", void 0, 1],
      // RegExp the back.
      [NaN, "hostname", void 0, 1, 1]
      // Set left over.
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof this !== "undefined")
        globalVar = this;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location2 = globalVar.location || {};
      loc = loc || location2;
      var finaldestination = {}, type = typeof loc, key;
      if ("blob:" === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if ("string" === type) {
        finaldestination = new Url(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if ("object" === type) {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function isSpecial(scheme) {
      return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
    }
    function extractProtocol(address, location2) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      location2 = location2 || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : "";
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;
      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }
      if (protocol === "file:") {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location2.protocol)) {
        rest = match[4];
      }
      return {
        protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount,
        rest
      };
    }
    function resolve(relative, base) {
      if (relative === "")
        return base;
      var path2 = (base || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path2.length, last = path2[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path2[i] === ".") {
          path2.splice(i, 1);
        } else if (path2[i] === "..") {
          path2.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path2.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path2.unshift("");
      if (last === "." || last === "..")
        path2.push("");
      return path2.join("/");
    }
    function Url(address, location2, parser) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      if (!(this instanceof Url)) {
        return new Url(address, location2, parser);
      }
      var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location2, url = this, i = 0;
      if ("object" !== type && "string" !== type) {
        parser = location2;
        location2 = null;
      }
      if (parser && "function" !== typeof parser)
        parser = qs.parse;
      location2 = lolcation(location2);
      extracted = extractProtocol(address || "", location2);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location2.slashes;
      url.protocol = extracted.protocol || location2.protocol || "";
      address = extracted.rest;
      if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, "pathname"];
      }
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address, url);
          continue;
        }
        parse = instruction[0];
        key = instruction[1];
        if (parse !== parse) {
          url[key] = address;
        } else if ("string" === typeof parse) {
          index = parse === "@" ? address.lastIndexOf(parse) : address.indexOf(parse);
          if (~index) {
            if ("number" === typeof instruction[2]) {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location2[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location2.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location2.pathname !== "")) {
        url.pathname = resolve(url.pathname, location2.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        index = url.auth.indexOf(":");
        if (~index) {
          url.username = url.auth.slice(0, index);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = url.auth.slice(index + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
      }
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if ("string" === typeof value && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (port.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        case "username":
        case "password":
          url[part] = encodeURIComponent(value);
          break;
        case "auth":
          var index = value.indexOf(":");
          if (~index) {
            url.username = value.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = value.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
          } else {
            url.username = encodeURIComponent(decodeURIComponent(value));
          }
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.auth = url.password ? url.username + ":" + url.password : url.username;
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify) {
      if (!stringify || "function" !== typeof stringify)
        stringify = qs.stringify;
      var query, url = this, host = url.host, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      } else if (url.password) {
        result += ":" + url.password;
        result += "@";
      } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        result += "@";
      }
      if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
      }
      result += host + url.pathname;
      query = "object" === typeof url.query ? stringify(url.query) : url.query;
      if (query)
        result += "?" !== query.charAt(0) ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url.prototype = { set, toString };
    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module2.exports = Url;
  }
});

// node_modules/@jupyterlab/coreutils/lib/url.js
var require_url = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/url.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.URLExt = void 0;
    var path_1 = require_path_browserify();
    var url_parse_1 = __importDefault2(require_url_parse());
    var URLExt;
    (function(URLExt2) {
      function parse(url) {
        if (typeof document !== "undefined" && document) {
          const a = document.createElement("a");
          a.href = url;
          return a;
        }
        return (0, url_parse_1.default)(url);
      }
      URLExt2.parse = parse;
      function getHostName2(url) {
        return (0, url_parse_1.default)(url).hostname;
      }
      URLExt2.getHostName = getHostName2;
      function normalize(url) {
        return url && parse(url).toString();
      }
      URLExt2.normalize = normalize;
      function join(...parts) {
        let u = (0, url_parse_1.default)(parts[0], {});
        const isSchemaLess = u.protocol === "" && u.slashes;
        if (isSchemaLess) {
          u = (0, url_parse_1.default)(parts[0], "https:" + parts[0]);
        }
        const prefix = `${isSchemaLess ? "" : u.protocol}${u.slashes ? "//" : ""}${u.auth}${u.auth ? "@" : ""}${u.host}`;
        const path2 = path_1.posix.join(`${!!prefix && u.pathname[0] !== "/" ? "/" : ""}${u.pathname}`, ...parts.slice(1));
        return `${prefix}${path2 === "." ? "" : path2}`;
      }
      URLExt2.join = join;
      function encodeParts(url) {
        return join(...url.split("/").map(encodeURIComponent));
      }
      URLExt2.encodeParts = encodeParts;
      function objectToQueryString(value) {
        const keys = Object.keys(value).filter((key) => key.length > 0);
        if (!keys.length) {
          return "";
        }
        return "?" + keys.map((key) => {
          const content = encodeURIComponent(String(value[key]));
          return key + (content ? "=" + content : "");
        }).join("&");
      }
      URLExt2.objectToQueryString = objectToQueryString;
      function queryStringToObject(value) {
        return value.replace(/^\?/, "").split("&").reduce((acc, val) => {
          const [key, value2] = val.split("=");
          if (key.length > 0) {
            acc[key] = decodeURIComponent(value2 || "");
          }
          return acc;
        }, {});
      }
      URLExt2.queryStringToObject = queryStringToObject;
      function isLocal(url, allowRoot = false) {
        const { protocol } = parse(url);
        return (!protocol || url.toLowerCase().indexOf(protocol) !== 0) && (allowRoot ? url.indexOf("//") !== 0 : url.indexOf("/") !== 0);
      }
      URLExt2.isLocal = isLocal;
    })(URLExt || (exports2.URLExt = URLExt = {}));
  }
});

// node_modules/@jupyterlab/coreutils/lib/pageconfig.js
var require_pageconfig = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/pageconfig.js"(exports, module) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageConfig = void 0;
    var coreutils_1 = require_dist2();
    var minimist_1 = __importDefault(require_minimist());
    var url_1 = require_url();
    var PageConfig;
    (function(PageConfig) {
      function getOption(name) {
        if (configData) {
          return configData[name] || getBodyData(name);
        }
        configData = /* @__PURE__ */ Object.create(null);
        let found = false;
        if (typeof document !== "undefined" && document) {
          const el = document.getElementById("jupyter-config-data");
          if (el) {
            configData = JSON.parse(el.textContent || "");
            found = true;
          }
        }
        if (!found && typeof process !== "undefined" && process.argv) {
          try {
            const cli = (0, minimist_1.default)(process.argv.slice(2));
            const path = require_path_browserify();
            let fullPath = "";
            if ("jupyter-config-data" in cli) {
              fullPath = path.resolve(cli["jupyter-config-data"]);
            } else if ("JUPYTER_CONFIG_DATA" in process.env) {
              fullPath = path.resolve(process.env["JUPYTER_CONFIG_DATA"]);
            }
            if (fullPath) {
              configData = eval("require")(fullPath);
            }
          } catch (e) {
            console.error(e);
          }
        }
        if (!coreutils_1.JSONExt.isObject(configData)) {
          configData = /* @__PURE__ */ Object.create(null);
        } else {
          for (const key in configData) {
            if (typeof configData[key] !== "string") {
              configData[key] = JSON.stringify(configData[key]);
            }
          }
        }
        return configData[name] || getBodyData(name);
      }
      PageConfig.getOption = getOption;
      function setOption(name2, value) {
        const last = getOption(name2);
        configData[name2] = value;
        return last;
      }
      PageConfig.setOption = setOption;
      function getBaseUrl() {
        return url_1.URLExt.normalize(getOption("baseUrl") || "/");
      }
      PageConfig.getBaseUrl = getBaseUrl;
      function getTreeUrl() {
        return url_1.URLExt.join(getBaseUrl(), getOption("treeUrl"));
      }
      PageConfig.getTreeUrl = getTreeUrl;
      function getShareUrl() {
        return url_1.URLExt.normalize(getOption("shareUrl") || getBaseUrl());
      }
      PageConfig.getShareUrl = getShareUrl;
      function getTreeShareUrl() {
        return url_1.URLExt.normalize(url_1.URLExt.join(getShareUrl(), getOption("treeUrl")));
      }
      PageConfig.getTreeShareUrl = getTreeShareUrl;
      function getUrl(options) {
        var _a7, _b, _c, _d;
        let path2 = options.toShare ? getShareUrl() : getBaseUrl();
        const mode = (_a7 = options.mode) !== null && _a7 !== void 0 ? _a7 : getOption("mode");
        const workspace5 = (_b = options.workspace) !== null && _b !== void 0 ? _b : getOption("workspace");
        const labOrDoc = mode === "single-document" ? "doc" : "lab";
        path2 = url_1.URLExt.join(path2, labOrDoc);
        if (workspace5 !== PageConfig.defaultWorkspace) {
          path2 = url_1.URLExt.join(path2, "workspaces", encodeURIComponent((_c = getOption("workspace")) !== null && _c !== void 0 ? _c : PageConfig.defaultWorkspace));
        }
        const treePath = (_d = options.treePath) !== null && _d !== void 0 ? _d : getOption("treePath");
        if (treePath) {
          path2 = url_1.URLExt.join(path2, "tree", url_1.URLExt.encodeParts(treePath));
        }
        return path2;
      }
      PageConfig.getUrl = getUrl;
      PageConfig.defaultWorkspace = "default";
      function getWsUrl(baseUrl) {
        let wsUrl = getOption("wsUrl");
        if (!wsUrl) {
          baseUrl = baseUrl ? url_1.URLExt.normalize(baseUrl) : getBaseUrl();
          if (baseUrl.indexOf("http") !== 0) {
            return "";
          }
          wsUrl = "ws" + baseUrl.slice(4);
        }
        return url_1.URLExt.normalize(wsUrl);
      }
      PageConfig.getWsUrl = getWsUrl;
      function getNBConvertURL({ path: path2, format, download }) {
        const notebookPath = url_1.URLExt.encodeParts(path2);
        const url = url_1.URLExt.join(getBaseUrl(), "nbconvert", format, notebookPath);
        if (download) {
          return url + "?download=true";
        }
        return url;
      }
      PageConfig.getNBConvertURL = getNBConvertURL;
      function getToken() {
        return getOption("token") || getBodyData("jupyterApiToken");
      }
      PageConfig.getToken = getToken;
      function getNotebookVersion() {
        const notebookVersion = getOption("notebookVersion");
        if (notebookVersion === "") {
          return [0, 0, 0];
        }
        return JSON.parse(notebookVersion);
      }
      PageConfig.getNotebookVersion = getNotebookVersion;
      let configData = null;
      function getBodyData(key) {
        if (typeof document === "undefined" || !document.body) {
          return "";
        }
        const val = document.body.dataset[key];
        if (typeof val === "undefined") {
          return "";
        }
        return decodeURIComponent(val);
      }
      let Extension;
      (function(Extension2) {
        function populate(key) {
          try {
            const raw = getOption(key);
            if (raw) {
              return JSON.parse(raw);
            }
          } catch (error) {
            console.warn(`Unable to parse ${key}.`, error);
          }
          return [];
        }
        Extension2.deferred = populate("deferredExtensions");
        Extension2.disabled = populate("disabledExtensions");
        function isDeferred(id) {
          const separatorIndex = id.indexOf(":");
          let extName = "";
          if (separatorIndex !== -1) {
            extName = id.slice(0, separatorIndex);
          }
          return Extension2.deferred.some((val) => val === id || extName && val === extName);
        }
        Extension2.isDeferred = isDeferred;
        function isDisabled(id) {
          const separatorIndex = id.indexOf(":");
          let extName = "";
          if (separatorIndex !== -1) {
            extName = id.slice(0, separatorIndex);
          }
          return Extension2.disabled.some((val) => val === id || extName && val === extName);
        }
        Extension2.isDisabled = isDisabled;
      })(Extension = PageConfig.Extension || (PageConfig.Extension = {}));
    })(PageConfig || (exports.PageConfig = PageConfig = {}));
  }
});

// node_modules/@jupyterlab/coreutils/lib/path.js
var require_path = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PathExt = void 0;
    var path_1 = require_path_browserify();
    var PathExt;
    (function(PathExt2) {
      function join(...paths) {
        const path2 = path_1.posix.join(...paths);
        return path2 === "." ? "" : removeSlash(path2);
      }
      PathExt2.join = join;
      function joinWithLeadingSlash(...paths) {
        const path2 = path_1.posix.join(...paths);
        return path2 === "." ? "" : path2;
      }
      PathExt2.joinWithLeadingSlash = joinWithLeadingSlash;
      function basename(path2, ext) {
        return path_1.posix.basename(path2, ext);
      }
      PathExt2.basename = basename;
      function dirname(path2) {
        const dir = removeSlash(path_1.posix.dirname(path2));
        return dir === "." ? "" : dir;
      }
      PathExt2.dirname = dirname;
      function extname(path2) {
        return path_1.posix.extname(path2);
      }
      PathExt2.extname = extname;
      function normalize(path2) {
        if (path2 === "") {
          return "";
        }
        return removeSlash(path_1.posix.normalize(path2));
      }
      PathExt2.normalize = normalize;
      function resolve(...parts) {
        return removeSlash(path_1.posix.resolve(...parts));
      }
      PathExt2.resolve = resolve;
      function relative(from, to) {
        return removeSlash(path_1.posix.relative(from, to));
      }
      PathExt2.relative = relative;
      function normalizeExtension(extension) {
        if (extension.length > 0 && extension.indexOf(".") !== 0) {
          extension = `.${extension}`;
        }
        return extension;
      }
      PathExt2.normalizeExtension = normalizeExtension;
      function removeSlash(path2) {
        if (path2.indexOf("/") === 0) {
          path2 = path2.slice(1);
        }
        return path2;
      }
      PathExt2.removeSlash = removeSlash;
    })(PathExt || (exports2.PathExt = PathExt = {}));
  }
});

// node_modules/@jupyterlab/coreutils/lib/signal.js
var require_signal = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/signal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signalToPromise = void 0;
    var coreutils_12 = require_dist2();
    function signalToPromise(signal, timeout) {
      const waitForSignal = new coreutils_12.PromiseDelegate();
      function cleanup() {
        signal.disconnect(slot);
      }
      function slot(sender, args) {
        cleanup();
        waitForSignal.resolve([sender, args]);
      }
      signal.connect(slot);
      if ((timeout !== null && timeout !== void 0 ? timeout : 0) > 0) {
        setTimeout(() => {
          cleanup();
          waitForSignal.reject(`Signal not emitted within ${timeout} ms.`);
        }, timeout);
      }
      return waitForSignal.promise;
    }
    exports2.signalToPromise = signalToPromise;
  }
});

// node_modules/@jupyterlab/coreutils/lib/text.js
var require_text = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/text.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Text = void 0;
    var Text;
    (function(Text2) {
      const HAS_SURROGATES = "\u{1D41A}".length > 1;
      function jsIndexToCharIndex(jsIdx, text) {
        if (HAS_SURROGATES) {
          return jsIdx;
        }
        let charIdx = jsIdx;
        for (let i = 0; i + 1 < text.length && i < jsIdx; i++) {
          const charCode = text.charCodeAt(i);
          if (charCode >= 55296 && charCode <= 56319) {
            const nextCharCode = text.charCodeAt(i + 1);
            if (nextCharCode >= 56320 && nextCharCode <= 57343) {
              charIdx--;
              i++;
            }
          }
        }
        return charIdx;
      }
      Text2.jsIndexToCharIndex = jsIndexToCharIndex;
      function charIndexToJsIndex(charIdx, text) {
        if (HAS_SURROGATES) {
          return charIdx;
        }
        let jsIdx = charIdx;
        for (let i = 0; i + 1 < text.length && i < jsIdx; i++) {
          const charCode = text.charCodeAt(i);
          if (charCode >= 55296 && charCode <= 56319) {
            const nextCharCode = text.charCodeAt(i + 1);
            if (nextCharCode >= 56320 && nextCharCode <= 57343) {
              jsIdx++;
              i++;
            }
          }
        }
        return jsIdx;
      }
      Text2.charIndexToJsIndex = charIndexToJsIndex;
      function camelCase(str, upper = false) {
        return str.replace(/^(\w)|[\s-_:]+(\w)/g, function(match, p1, p2) {
          if (p2) {
            return p2.toUpperCase();
          } else {
            return upper ? p1.toUpperCase() : p1.toLowerCase();
          }
        });
      }
      Text2.camelCase = camelCase;
      function titleCase(str) {
        return (str || "").toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      }
      Text2.titleCase = titleCase;
    })(Text || (exports2.Text = Text = {}));
  }
});

// node_modules/@jupyterlab/coreutils/lib/time.js
var require_time = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/time.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Time = void 0;
    var UNITS = [
      { name: "years", milliseconds: 365 * 24 * 60 * 60 * 1e3 },
      { name: "months", milliseconds: 30 * 24 * 60 * 60 * 1e3 },
      { name: "days", milliseconds: 24 * 60 * 60 * 1e3 },
      { name: "hours", milliseconds: 60 * 60 * 1e3 },
      { name: "minutes", milliseconds: 60 * 1e3 },
      { name: "seconds", milliseconds: 1e3 }
    ];
    var Time;
    (function(Time2) {
      function formatHuman(value, format2 = "long") {
        const lang = document.documentElement.lang || "en";
        const formatter = new Intl.RelativeTimeFormat(lang, {
          numeric: "auto",
          style: format2
        });
        const delta = new Date(value).getTime() - Date.now();
        for (let unit of UNITS) {
          const amount = Math.ceil(delta / unit.milliseconds);
          if (amount === 0) {
            continue;
          }
          return formatter.format(amount, unit.name);
        }
        return formatter.format(0, "seconds");
      }
      Time2.formatHuman = formatHuman;
      function format(value) {
        const lang = document.documentElement.lang || "en";
        const formatter = new Intl.DateTimeFormat(lang, {
          dateStyle: "short",
          timeStyle: "short"
        });
        return formatter.format(new Date(value));
      }
      Time2.format = format;
    })(Time || (exports2.Time = Time = {}));
  }
});

// node_modules/@jupyterlab/coreutils/lib/index.js
var require_lib = __commonJS({
  "node_modules/@jupyterlab/coreutils/lib/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_activitymonitor(), exports2);
    __exportStar(require_interfaces(), exports2);
    __exportStar(require_lru(), exports2);
    __exportStar(require_markdowncodeblocks(), exports2);
    __exportStar(require_pageconfig(), exports2);
    __exportStar(require_path(), exports2);
    __exportStar(require_signal(), exports2);
    __exportStar(require_text(), exports2);
    __exportStar(require_time(), exports2);
    __exportStar(require_url(), exports2);
  }
});

// node_modules/@jupyterlab/services/lib/kernel/messages.js
var require_messages = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.supportedKernelWebSocketProtocols = exports2.isInputReplyMsg = exports2.isInputRequestMsg = exports2.isDebugReplyMsg = exports2.isDebugRequestMsg = exports2.isExecuteReplyMsg = exports2.isInfoRequestMsg = exports2.isCommMsgMsg = exports2.isCommCloseMsg = exports2.isCommOpenMsg = exports2.isDebugEventMsg = exports2.isClearOutputMsg = exports2.isStatusMsg = exports2.isErrorMsg = exports2.isExecuteResultMsg = exports2.isExecuteInputMsg = exports2.isUpdateDisplayDataMsg = exports2.isDisplayDataMsg = exports2.isStreamMsg = exports2.createMessage = void 0;
    var coreutils_12 = require_dist2();
    function createMessage(options) {
      var _a7, _b, _c, _d, _e;
      return {
        buffers: (_a7 = options.buffers) !== null && _a7 !== void 0 ? _a7 : [],
        channel: options.channel,
        content: options.content,
        header: {
          date: (/* @__PURE__ */ new Date()).toISOString(),
          msg_id: (_b = options.msgId) !== null && _b !== void 0 ? _b : coreutils_12.UUID.uuid4(),
          msg_type: options.msgType,
          session: options.session,
          username: (_c = options.username) !== null && _c !== void 0 ? _c : "",
          version: "5.2"
        },
        metadata: (_d = options.metadata) !== null && _d !== void 0 ? _d : {},
        parent_header: (_e = options.parentHeader) !== null && _e !== void 0 ? _e : {}
      };
    }
    exports2.createMessage = createMessage;
    function isStreamMsg(msg) {
      return msg.header.msg_type === "stream";
    }
    exports2.isStreamMsg = isStreamMsg;
    function isDisplayDataMsg(msg) {
      return msg.header.msg_type === "display_data";
    }
    exports2.isDisplayDataMsg = isDisplayDataMsg;
    function isUpdateDisplayDataMsg(msg) {
      return msg.header.msg_type === "update_display_data";
    }
    exports2.isUpdateDisplayDataMsg = isUpdateDisplayDataMsg;
    function isExecuteInputMsg(msg) {
      return msg.header.msg_type === "execute_input";
    }
    exports2.isExecuteInputMsg = isExecuteInputMsg;
    function isExecuteResultMsg(msg) {
      return msg.header.msg_type === "execute_result";
    }
    exports2.isExecuteResultMsg = isExecuteResultMsg;
    function isErrorMsg(msg) {
      return msg.header.msg_type === "error";
    }
    exports2.isErrorMsg = isErrorMsg;
    function isStatusMsg(msg) {
      return msg.header.msg_type === "status";
    }
    exports2.isStatusMsg = isStatusMsg;
    function isClearOutputMsg(msg) {
      return msg.header.msg_type === "clear_output";
    }
    exports2.isClearOutputMsg = isClearOutputMsg;
    function isDebugEventMsg(msg) {
      return msg.header.msg_type === "debug_event";
    }
    exports2.isDebugEventMsg = isDebugEventMsg;
    function isCommOpenMsg(msg) {
      return msg.header.msg_type === "comm_open";
    }
    exports2.isCommOpenMsg = isCommOpenMsg;
    function isCommCloseMsg(msg) {
      return msg.header.msg_type === "comm_close";
    }
    exports2.isCommCloseMsg = isCommCloseMsg;
    function isCommMsgMsg(msg) {
      return msg.header.msg_type === "comm_msg";
    }
    exports2.isCommMsgMsg = isCommMsgMsg;
    function isInfoRequestMsg(msg) {
      return msg.header.msg_type === "kernel_info_request";
    }
    exports2.isInfoRequestMsg = isInfoRequestMsg;
    function isExecuteReplyMsg(msg) {
      return msg.header.msg_type === "execute_reply";
    }
    exports2.isExecuteReplyMsg = isExecuteReplyMsg;
    function isDebugRequestMsg(msg) {
      return msg.header.msg_type === "debug_request";
    }
    exports2.isDebugRequestMsg = isDebugRequestMsg;
    function isDebugReplyMsg(msg) {
      return msg.header.msg_type === "debug_reply";
    }
    exports2.isDebugReplyMsg = isDebugReplyMsg;
    function isInputRequestMsg(msg) {
      return msg.header.msg_type === "input_request";
    }
    exports2.isInputRequestMsg = isInputRequestMsg;
    function isInputReplyMsg(msg) {
      return msg.header.msg_type === "input_reply";
    }
    exports2.isInputReplyMsg = isInputReplyMsg;
    var supportedKernelWebSocketProtocols;
    (function(supportedKernelWebSocketProtocols2) {
      supportedKernelWebSocketProtocols2["v1KernelWebsocketJupyterOrg"] = "v1.kernel.websocket.jupyter.org";
    })(supportedKernelWebSocketProtocols || (exports2.supportedKernelWebSocketProtocols = supportedKernelWebSocketProtocols = {}));
  }
});

// node_modules/@jupyterlab/services/lib/kernel/serialize.js
var require_serialize = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/serialize.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.deserialize = exports2.serialize = void 0;
    var KernelMessage = __importStar(require_messages());
    function serialize(msg, protocol = "") {
      switch (protocol) {
        case KernelMessage.supportedKernelWebSocketProtocols.v1KernelWebsocketJupyterOrg:
          return Private.serializeV1KernelWebsocketJupyterOrg(msg);
        default:
          return Private.serializeDefault(msg);
      }
    }
    exports2.serialize = serialize;
    function deserialize(data, protocol = "") {
      switch (protocol) {
        case KernelMessage.supportedKernelWebSocketProtocols.v1KernelWebsocketJupyterOrg:
          return Private.deserializeV1KernelWebsocketJupyterOrg(data);
        default:
          return Private.deserializeDefault(data);
      }
    }
    exports2.deserialize = deserialize;
    var Private;
    (function(Private2) {
      function deserializeV1KernelWebsocketJupyterOrg(binMsg) {
        let msg;
        const data = new DataView(binMsg);
        const offsetNumber = Number(data.getBigUint64(
          0,
          true
          /* littleEndian */
        ));
        let offsets = [];
        for (let i = 0; i < offsetNumber; i++) {
          offsets.push(Number(data.getBigUint64(
            8 * (i + 1),
            true
            /* littleEndian */
          )));
        }
        const decoder = new TextDecoder("utf8");
        const channel = decoder.decode(binMsg.slice(offsets[0], offsets[1]));
        const header = JSON.parse(decoder.decode(binMsg.slice(offsets[1], offsets[2])));
        const parent_header = JSON.parse(decoder.decode(binMsg.slice(offsets[2], offsets[3])));
        const metadata2 = JSON.parse(decoder.decode(binMsg.slice(offsets[3], offsets[4])));
        const content = JSON.parse(decoder.decode(binMsg.slice(offsets[4], offsets[5])));
        let buffers = [];
        for (let i = 5; i < offsets.length - 1; i++) {
          buffers.push(new DataView(binMsg.slice(offsets[i], offsets[i + 1])));
        }
        msg = {
          channel,
          header,
          parent_header,
          metadata: metadata2,
          content,
          buffers
        };
        return msg;
      }
      Private2.deserializeV1KernelWebsocketJupyterOrg = deserializeV1KernelWebsocketJupyterOrg;
      function serializeV1KernelWebsocketJupyterOrg(msg) {
        const header = JSON.stringify(msg.header);
        const parentHeader = msg.parent_header == null ? "{}" : JSON.stringify(msg.parent_header);
        const metadata2 = JSON.stringify(msg.metadata);
        const content = JSON.stringify(msg.content);
        const buffers = msg.buffers !== void 0 ? msg.buffers : [];
        const offsetNumber = 1 + 4 + buffers.length + 1;
        let offsets = [];
        offsets.push(8 * (1 + offsetNumber));
        offsets.push(msg.channel.length + offsets[offsets.length - 1]);
        const encoder = new TextEncoder();
        const channelEncoded = encoder.encode(msg.channel);
        const headerEncoded = encoder.encode(header);
        const parentHeaderEncoded = encoder.encode(parentHeader);
        const metadataEncoded = encoder.encode(metadata2);
        const contentEncoded = encoder.encode(content);
        const binMsgNoBuff = new Uint8Array(channelEncoded.length + headerEncoded.length + parentHeaderEncoded.length + metadataEncoded.length + contentEncoded.length);
        binMsgNoBuff.set(channelEncoded);
        binMsgNoBuff.set(headerEncoded, channelEncoded.length);
        binMsgNoBuff.set(parentHeaderEncoded, channelEncoded.length + headerEncoded.length);
        binMsgNoBuff.set(metadataEncoded, channelEncoded.length + headerEncoded.length + parentHeaderEncoded.length);
        binMsgNoBuff.set(contentEncoded, channelEncoded.length + headerEncoded.length + parentHeaderEncoded.length + metadataEncoded.length);
        for (let length of [
          headerEncoded.length,
          parentHeaderEncoded.length,
          metadataEncoded.length,
          contentEncoded.length
        ]) {
          offsets.push(length + offsets[offsets.length - 1]);
        }
        let buffersByteLength = 0;
        for (let buffer of buffers) {
          let length = buffer.byteLength;
          offsets.push(length + offsets[offsets.length - 1]);
          buffersByteLength += length;
        }
        const binMsg = new Uint8Array(8 * (1 + offsetNumber) + binMsgNoBuff.byteLength + buffersByteLength);
        const word = new ArrayBuffer(8);
        const data = new DataView(word);
        data.setBigUint64(
          0,
          BigInt(offsetNumber),
          true
          /* littleEndian */
        );
        binMsg.set(new Uint8Array(word), 0);
        for (let i = 0; i < offsets.length; i++) {
          data.setBigUint64(
            0,
            BigInt(offsets[i]),
            true
            /* littleEndian */
          );
          binMsg.set(new Uint8Array(word), 8 * (i + 1));
        }
        binMsg.set(binMsgNoBuff, offsets[0]);
        for (let i = 0; i < buffers.length; i++) {
          const buffer = buffers[i];
          binMsg.set(new Uint8Array(ArrayBuffer.isView(buffer) ? buffer.buffer : buffer), offsets[5 + i]);
        }
        return binMsg.buffer;
      }
      Private2.serializeV1KernelWebsocketJupyterOrg = serializeV1KernelWebsocketJupyterOrg;
      function deserializeDefault(data) {
        let value;
        if (typeof data === "string") {
          value = JSON.parse(data);
        } else {
          value = deserializeBinary(data);
        }
        return value;
      }
      Private2.deserializeDefault = deserializeDefault;
      function serializeDefault(msg) {
        var _a7;
        let value;
        if ((_a7 = msg.buffers) === null || _a7 === void 0 ? void 0 : _a7.length) {
          value = serializeBinary(msg);
        } else {
          value = JSON.stringify(msg);
        }
        return value;
      }
      Private2.serializeDefault = serializeDefault;
      function deserializeBinary(buf) {
        const data = new DataView(buf);
        const nbufs = data.getUint32(0);
        const offsets = [];
        if (nbufs < 2) {
          throw new Error("Invalid incoming Kernel Message");
        }
        for (let i = 1; i <= nbufs; i++) {
          offsets.push(data.getUint32(i * 4));
        }
        const jsonBytes = new Uint8Array(buf.slice(offsets[0], offsets[1]));
        const msg = JSON.parse(new TextDecoder("utf8").decode(jsonBytes));
        msg.buffers = [];
        for (let i = 1; i < nbufs; i++) {
          const start = offsets[i];
          const stop = offsets[i + 1] || buf.byteLength;
          msg.buffers.push(new DataView(buf.slice(start, stop)));
        }
        return msg;
      }
      function serializeBinary(msg) {
        const offsets = [];
        const buffers = [];
        const encoder = new TextEncoder();
        let origBuffers = [];
        if (msg.buffers !== void 0) {
          origBuffers = msg.buffers;
          delete msg["buffers"];
        }
        const jsonUtf8 = encoder.encode(JSON.stringify(msg));
        buffers.push(jsonUtf8.buffer);
        for (let i = 0; i < origBuffers.length; i++) {
          const b = origBuffers[i];
          buffers.push(ArrayBuffer.isView(b) ? b.buffer : b);
        }
        const nbufs = buffers.length;
        offsets.push(4 * (nbufs + 1));
        for (let i = 0; i + 1 < buffers.length; i++) {
          offsets.push(offsets[offsets.length - 1] + buffers[i].byteLength);
        }
        const msgBuf = new Uint8Array(offsets[offsets.length - 1] + buffers[buffers.length - 1].byteLength);
        const view = new DataView(msgBuf.buffer);
        view.setUint32(0, nbufs);
        for (let i = 0; i < offsets.length; i++) {
          view.setUint32(4 * (i + 1), offsets[i]);
        }
        for (let i = 0; i < buffers.length; i++) {
          msgBuf.set(new Uint8Array(buffers[i]), offsets[i]);
        }
        return msgBuf.buffer;
      }
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/shim/ws.js
var require_ws = __commonJS({
  "node_modules/@jupyterlab/services/lib/shim/ws.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = WebSocket;
  }
});

// node_modules/@jupyterlab/services/lib/serverconnection.js
var require_serverconnection = __commonJS({
  "node_modules/@jupyterlab/services/lib/serverconnection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServerConnection = void 0;
    var coreutils_12 = require_lib();
    var serialize_1 = require_serialize();
    var WEBSOCKET;
    if (typeof window === "undefined") {
      WEBSOCKET = require_ws();
    } else {
      WEBSOCKET = WebSocket;
    }
    var ServerConnection3;
    (function(ServerConnection4) {
      function makeSettings(options) {
        return Private.makeSettings(options);
      }
      ServerConnection4.makeSettings = makeSettings;
      function makeRequest(url, init, settings) {
        return Private.handleRequest(url, init, settings);
      }
      ServerConnection4.makeRequest = makeRequest;
      class ResponseError extends Error {
        /**
         * Create a ResponseError from a response, handling the traceback and message
         * as appropriate.
         *
         * @param response The response object.
         *
         * @returns A promise that resolves with a `ResponseError` object.
         */
        static async create(response) {
          try {
            const data = await response.json();
            const { message, traceback } = data;
            if (traceback) {
              console.error(traceback);
            }
            return new ResponseError(response, message !== null && message !== void 0 ? message : ResponseError._defaultMessage(response), traceback !== null && traceback !== void 0 ? traceback : "");
          } catch (e) {
            console.debug(e);
            return new ResponseError(response);
          }
        }
        /**
         * Create a new response error.
         */
        constructor(response, message = ResponseError._defaultMessage(response), traceback = "") {
          super(message);
          this.response = response;
          this.traceback = traceback;
        }
        static _defaultMessage(response) {
          return `Invalid response: ${response.status} ${response.statusText}`;
        }
      }
      ServerConnection4.ResponseError = ResponseError;
      class NetworkError extends TypeError {
        /**
         * Create a new network error.
         */
        constructor(original) {
          super(original.message);
          this.stack = original.stack;
        }
      }
      ServerConnection4.NetworkError = NetworkError;
    })(ServerConnection3 || (exports2.ServerConnection = ServerConnection3 = {}));
    var Private;
    (function(Private2) {
      function makeSettings(options = {}) {
        var _a7;
        const pageBaseUrl = coreutils_12.PageConfig.getBaseUrl();
        const pageWsUrl = coreutils_12.PageConfig.getWsUrl();
        const baseUrl = coreutils_12.URLExt.normalize(options.baseUrl) || pageBaseUrl;
        let wsUrl = options.wsUrl;
        if (!wsUrl && baseUrl === pageBaseUrl) {
          wsUrl = pageWsUrl;
        }
        if (!wsUrl && baseUrl.indexOf("http") === 0) {
          wsUrl = "ws" + baseUrl.slice(4);
        }
        wsUrl = wsUrl !== null && wsUrl !== void 0 ? wsUrl : pageWsUrl;
        const appendTokenConfig = coreutils_12.PageConfig.getOption("appendToken").toLowerCase();
        let appendToken;
        if (appendTokenConfig === "") {
          appendToken = typeof window === "undefined" || typeof process !== "undefined" && ((_a7 = process === null || process === void 0 ? void 0 : process.env) === null || _a7 === void 0 ? void 0 : _a7.JEST_WORKER_ID) !== void 0 || coreutils_12.URLExt.getHostName(pageBaseUrl) !== coreutils_12.URLExt.getHostName(wsUrl);
        } else {
          appendToken = appendTokenConfig === "true";
        }
        return {
          init: { cache: "no-store", credentials: "same-origin" },
          fetch,
          Headers,
          Request,
          WebSocket: WEBSOCKET,
          token: coreutils_12.PageConfig.getToken(),
          appUrl: coreutils_12.PageConfig.getOption("appUrl"),
          appendToken,
          serializer: { serialize: serialize_1.serialize, deserialize: serialize_1.deserialize },
          ...options,
          baseUrl,
          wsUrl
        };
      }
      Private2.makeSettings = makeSettings;
      function handleRequest(url, init, settings) {
        var _a7;
        if (url.indexOf(settings.baseUrl) !== 0) {
          throw new Error("Can only be used for notebook server requests");
        }
        const cache = (_a7 = init.cache) !== null && _a7 !== void 0 ? _a7 : settings.init.cache;
        if (cache === "no-store") {
          url += (/\?/.test(url) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
        }
        const request = new settings.Request(url, { ...settings.init, ...init });
        let authenticated = false;
        if (settings.token) {
          authenticated = true;
          request.headers.append("Authorization", `token ${settings.token}`);
        }
        if (typeof document !== "undefined") {
          const xsrfToken = getCookie3("_xsrf");
          if (xsrfToken !== void 0) {
            authenticated = true;
            request.headers.append("X-XSRFToken", xsrfToken);
          }
        }
        if (!request.headers.has("Content-Type") && authenticated) {
          request.headers.set("Content-Type", "application/json");
        }
        return settings.fetch.call(null, request).catch((e) => {
          throw new ServerConnection3.NetworkError(e);
        });
      }
      Private2.handleRequest = handleRequest;
      function getCookie3(name2) {
        let cookie = "";
        try {
          cookie = document.cookie;
        } catch (e) {
          return;
        }
        const matches = cookie.match("\\b" + name2 + "=([^;]*)\\b");
        return matches === null || matches === void 0 ? void 0 : matches[1];
      }
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/basemanager.js
var require_basemanager = __commonJS({
  "node_modules/@jupyterlab/services/lib/basemanager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BaseManager = void 0;
    var signaling_1 = require_dist3();
    var serverconnection_1 = require_serverconnection();
    var BaseManager = class {
      constructor(options) {
        var _a7;
        this._isDisposed = false;
        this._disposed = new signaling_1.Signal(this);
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
      }
      /**
       * A signal emitted when the delegate is disposed.
       */
      get disposed() {
        return this._disposed;
      }
      /**
       * Test whether the delegate has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Whether the manager is active.
       */
      get isActive() {
        return true;
      }
      /**
       * Dispose of the delegate and invoke the callback function.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        this._disposed.emit(void 0);
        signaling_1.Signal.clearData(this);
      }
    };
    exports2.BaseManager = BaseManager;
  }
});

// node_modules/@jupyterlab/services/lib/config/index.js
var require_config = __commonJS({
  "node_modules/@jupyterlab/services/lib/config/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigWithDefaults = exports2.ConfigSection = void 0;
    var coreutils_12 = require_lib();
    var __1 = require_lib3();
    var SERVICE_CONFIG_URL = "api/config";
    var ConfigSection;
    (function(ConfigSection2) {
      function create(options) {
        const section = new DefaultConfigSection(options);
        return section.load().then(() => {
          return section;
        });
      }
      ConfigSection2.create = create;
    })(ConfigSection || (exports2.ConfigSection = ConfigSection = {}));
    var DefaultConfigSection = class {
      /**
       * Construct a new config section.
       */
      constructor(options) {
        var _a7;
        this._url = "unknown";
        const settings = this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : __1.ServerConnection.makeSettings();
        this._url = coreutils_12.URLExt.join(settings.baseUrl, SERVICE_CONFIG_URL, encodeURIComponent(options.name));
      }
      /**
       * Get the data for this section.
       */
      get data() {
        return this._data;
      }
      /**
       * Load the initial data for this section.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/config).
       *
       * The promise is fulfilled on a valid response and rejected otherwise.
       */
      async load() {
        const response = await __1.ServerConnection.makeRequest(this._url, {}, this.serverSettings);
        if (response.status !== 200) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        this._data = await response.json();
      }
      /**
       * Modify the stored config values.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/config).
       *
       * The promise is fulfilled on a valid response and rejected otherwise.
       *
       * Updates the local data immediately, sends the change to the server,
       * and updates the local data with the response, and fulfils the promise
       * with that data.
       */
      async update(newdata) {
        this._data = { ...this._data, ...newdata };
        const init = {
          method: "PATCH",
          body: JSON.stringify(newdata)
        };
        const response = await __1.ServerConnection.makeRequest(this._url, init, this.serverSettings);
        if (response.status !== 200) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        this._data = await response.json();
        return this._data;
      }
    };
    var ConfigWithDefaults = class {
      /**
       * Create a new config with defaults.
       */
      constructor(options) {
        var _a7, _b;
        this._className = "";
        this._section = options.section;
        this._defaults = (_a7 = options.defaults) !== null && _a7 !== void 0 ? _a7 : {};
        this._className = (_b = options.className) !== null && _b !== void 0 ? _b : "";
      }
      /**
       * Get data from the config section or fall back to defaults.
       */
      get(key) {
        const data = this._classData();
        return key in data ? data[key] : this._defaults[key];
      }
      /**
       * Set a config value.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/config).
       *
       * The promise is fulfilled on a valid response and rejected otherwise.
       *
       * Sends the update to the server, and changes our local copy of the data
       * immediately.
       */
      set(key, value) {
        const d = {};
        d[key] = value;
        if (this._className) {
          const d2 = {};
          d2[this._className] = d;
          return this._section.update(d2);
        } else {
          return this._section.update(d);
        }
      }
      /**
       * Get data from the Section with our classname, if available.
       *
       * #### Notes
       * If we have no classname, get all of the data in the Section
       */
      _classData() {
        const data = this._section.data;
        if (this._className && this._className in data) {
          return data[this._className];
        }
        return data;
      }
    };
    exports2.ConfigWithDefaults = ConfigWithDefaults;
  }
});

// node_modules/@jupyterlab/services/lib/validate.js
var require_validate = __commonJS({
  "node_modules/@jupyterlab/services/lib/validate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateProperty = void 0;
    function validateProperty(object, name2, typeName, values = []) {
      if (!object.hasOwnProperty(name2)) {
        throw Error(`Missing property '${name2}'`);
      }
      const value = object[name2];
      if (typeName !== void 0) {
        let valid = true;
        switch (typeName) {
          case "array":
            valid = Array.isArray(value);
            break;
          case "object":
            valid = typeof value !== "undefined";
            break;
          default:
            valid = typeof value === typeName;
        }
        if (!valid) {
          throw new Error(`Property '${name2}' is not of type '${typeName}'`);
        }
        if (values.length > 0) {
          let valid2 = true;
          switch (typeName) {
            case "string":
            case "number":
            case "boolean":
              valid2 = values.includes(value);
              break;
            default:
              valid2 = values.findIndex((v) => v === value) >= 0;
              break;
          }
          if (!valid2) {
            throw new Error(`Property '${name2}' is not one of the valid values ${JSON.stringify(values)}`);
          }
        }
      }
    }
    exports2.validateProperty = validateProperty;
  }
});

// node_modules/@jupyterlab/services/lib/contents/validate.js
var require_validate2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/contents/validate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateCheckpointModel = exports2.validateContentsModel = void 0;
    var validate_1 = require_validate();
    function validateContentsModel(model) {
      (0, validate_1.validateProperty)(model, "name", "string");
      (0, validate_1.validateProperty)(model, "path", "string");
      (0, validate_1.validateProperty)(model, "type", "string");
      (0, validate_1.validateProperty)(model, "created", "string");
      (0, validate_1.validateProperty)(model, "last_modified", "string");
      (0, validate_1.validateProperty)(model, "mimetype", "object");
      (0, validate_1.validateProperty)(model, "content", "object");
      (0, validate_1.validateProperty)(model, "format", "object");
    }
    exports2.validateContentsModel = validateContentsModel;
    function validateCheckpointModel(model) {
      (0, validate_1.validateProperty)(model, "id", "string");
      (0, validate_1.validateProperty)(model, "last_modified", "string");
    }
    exports2.validateCheckpointModel = validateCheckpointModel;
  }
});

// node_modules/@jupyterlab/services/lib/contents/index.js
var require_contents = __commonJS({
  "node_modules/@jupyterlab/services/lib/contents/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Drive = exports2.ContentsManager = exports2.Contents = void 0;
    var coreutils_12 = require_lib();
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var validate = __importStar(require_validate2());
    var SERVICE_DRIVE_URL = "api/contents";
    var FILES_URL = "files";
    var Contents;
    (function(Contents2) {
      function validateContentsModel(contents) {
        validate.validateContentsModel(contents);
      }
      Contents2.validateContentsModel = validateContentsModel;
      function validateCheckpointModel(checkpoint) {
        validate.validateCheckpointModel(checkpoint);
      }
      Contents2.validateCheckpointModel = validateCheckpointModel;
    })(Contents || (exports2.Contents = Contents = {}));
    var ContentsManager = class {
      /**
       * Construct a new contents manager object.
       *
       * @param options - The options used to initialize the object.
       */
      constructor(options = {}) {
        var _a7, _b;
        this._isDisposed = false;
        this._additionalDrives = /* @__PURE__ */ new Map();
        this._fileChanged = new signaling_1.Signal(this);
        const serverSettings = this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : __1.ServerConnection.makeSettings();
        this._defaultDrive = (_b = options.defaultDrive) !== null && _b !== void 0 ? _b : new Drive({ serverSettings });
        this._defaultDrive.fileChanged.connect(this._onFileChanged, this);
      }
      /**
       * A signal emitted when a file operation takes place.
       */
      get fileChanged() {
        return this._fileChanged;
      }
      /**
       * Test whether the manager has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources held by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        signaling_1.Signal.clearData(this);
      }
      /**
       * Add an `IDrive` to the manager.
       */
      addDrive(drive) {
        this._additionalDrives.set(drive.name, drive);
        drive.fileChanged.connect(this._onFileChanged, this);
      }
      /**
       * Given a path, get a shared model factory from the
       * relevant backend. Returns `null` if the backend
       * does not provide one.
       */
      getSharedModelFactory(path2) {
        var _a7;
        const [drive] = this._driveForPath(path2);
        return (_a7 = drive === null || drive === void 0 ? void 0 : drive.sharedModelFactory) !== null && _a7 !== void 0 ? _a7 : null;
      }
      /**
       * Given a path of the form `drive:local/portion/of/it.txt`
       * get the local part of it.
       *
       * @param path the path.
       *
       * @returns The local part of the path.
       */
      localPath(path2) {
        const parts = path2.split("/");
        const firstParts = parts[0].split(":");
        if (firstParts.length === 1 || !this._additionalDrives.has(firstParts[0])) {
          return coreutils_12.PathExt.removeSlash(path2);
        }
        return coreutils_12.PathExt.join(firstParts.slice(1).join(":"), ...parts.slice(1));
      }
      /**
       * Normalize a global path. Reduces '..' and '.' parts, and removes
       * leading slashes from the local part of the path, while retaining
       * the drive name if it exists.
       *
       * @param path the path.
       *
       * @returns The normalized path.
       */
      normalize(path2) {
        const parts = path2.split(":");
        if (parts.length === 1) {
          return coreutils_12.PathExt.normalize(path2);
        }
        return `${parts[0]}:${coreutils_12.PathExt.normalize(parts.slice(1).join(":"))}`;
      }
      /**
       * Resolve a global path, starting from the root path. Behaves like
       * posix-path.resolve, with 3 differences:
       *  - will never prepend cwd
       *  - if root has a drive name, the result is prefixed with "<drive>:"
       *  - before adding drive name, leading slashes are removed
       *
       * @param path the path.
       *
       * @returns The normalized path.
       */
      resolvePath(root, path2) {
        const driveName = this.driveName(root);
        const localPath = this.localPath(root);
        const resolved = coreutils_12.PathExt.resolve("/", localPath, path2);
        return driveName ? `${driveName}:${resolved}` : resolved;
      }
      /**
       * Given a path of the form `drive:local/portion/of/it.txt`
       * get the name of the drive. If the path is missing
       * a drive portion, returns an empty string.
       *
       * @param path the path.
       *
       * @returns The drive name for the path, or the empty string.
       */
      driveName(path2) {
        const parts = path2.split("/");
        const firstParts = parts[0].split(":");
        if (firstParts.length === 1) {
          return "";
        }
        if (this._additionalDrives.has(firstParts[0])) {
          return firstParts[0];
        }
        return "";
      }
      /**
       * Get a file or directory.
       *
       * @param path The path to the file.
       *
       * @param options The options used to fetch the file.
       *
       * @returns A promise which resolves with the file content.
       */
      get(path2, options) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.get(localPath, options).then((contentsModel) => {
          const listing = [];
          if (contentsModel.type === "directory" && contentsModel.content) {
            for (const item of contentsModel.content) {
              listing.push({ ...item, path: this._toGlobalPath(drive, item.path) });
            }
            return {
              ...contentsModel,
              path: this._toGlobalPath(drive, localPath),
              content: listing,
              serverPath: contentsModel.path
            };
          } else {
            return {
              ...contentsModel,
              path: this._toGlobalPath(drive, localPath),
              serverPath: contentsModel.path
            };
          }
        });
      }
      /**
       * Get an encoded download url given a file path.
       *
       * @param path - An absolute POSIX file path on the server.
       *
       * #### Notes
       * It is expected that the path contains no relative paths.
       *
       * The returned URL may include a query parameter.
       */
      getDownloadUrl(path2) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.getDownloadUrl(localPath);
      }
      /**
       * Create a new untitled file or directory in the specified directory path.
       *
       * @param options The options used to create the file.
       *
       * @returns A promise which resolves with the created file content when the
       *    file is created.
       */
      newUntitled(options = {}) {
        if (options.path) {
          const globalPath = this.normalize(options.path);
          const [drive, localPath] = this._driveForPath(globalPath);
          return drive.newUntitled({ ...options, path: localPath }).then((contentsModel) => {
            return {
              ...contentsModel,
              path: coreutils_12.PathExt.join(globalPath, contentsModel.name),
              serverPath: contentsModel.path
            };
          });
        } else {
          return this._defaultDrive.newUntitled(options);
        }
      }
      /**
       * Delete a file.
       *
       * @param path - The path to the file.
       *
       * @returns A promise which resolves when the file is deleted.
       */
      delete(path2) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.delete(localPath);
      }
      /**
       * Rename a file or directory.
       *
       * @param path - The original file path.
       *
       * @param newPath - The new file path.
       *
       * @returns A promise which resolves with the new file contents model when
       *   the file is renamed.
       */
      rename(path2, newPath) {
        const [drive1, path1] = this._driveForPath(path2);
        const [drive2, path22] = this._driveForPath(newPath);
        if (drive1 !== drive2) {
          throw Error("ContentsManager: renaming files must occur within a Drive");
        }
        return drive1.rename(path1, path22).then((contentsModel) => {
          return {
            ...contentsModel,
            path: this._toGlobalPath(drive1, path22),
            serverPath: contentsModel.path
          };
        });
      }
      /**
       * Save a file.
       *
       * @param path - The desired file path.
       *
       * @param options - Optional overrides to the model.
       *
       * @returns A promise which resolves with the file content model when the
       *   file is saved.
       *
       * #### Notes
       * Ensure that `model.content` is populated for the file.
       */
      save(path2, options = {}) {
        const globalPath = this.normalize(path2);
        const [drive, localPath] = this._driveForPath(path2);
        return drive.save(localPath, { ...options, path: localPath }).then((contentsModel) => {
          return {
            ...contentsModel,
            path: globalPath,
            serverPath: contentsModel.path
          };
        });
      }
      /**
       * Copy a file into a given directory.
       *
       * @param path - The original file path.
       *
       * @param toDir - The destination directory path.
       *
       * @returns A promise which resolves with the new contents model when the
       *  file is copied.
       *
       * #### Notes
       * The server will select the name of the copied file.
       */
      copy(fromFile, toDir) {
        const [drive1, path1] = this._driveForPath(fromFile);
        const [drive2, path2] = this._driveForPath(toDir);
        if (drive1 === drive2) {
          return drive1.copy(path1, path2).then((contentsModel) => {
            return {
              ...contentsModel,
              path: this._toGlobalPath(drive1, contentsModel.path),
              serverPath: contentsModel.path
            };
          });
        } else {
          throw Error("Copying files between drives is not currently implemented");
        }
      }
      /**
       * Create a checkpoint for a file.
       *
       * @param path - The path of the file.
       *
       * @returns A promise which resolves with the new checkpoint model when the
       *   checkpoint is created.
       */
      createCheckpoint(path2) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.createCheckpoint(localPath);
      }
      /**
       * List available checkpoints for a file.
       *
       * @param path - The path of the file.
       *
       * @returns A promise which resolves with a list of checkpoint models for
       *    the file.
       */
      listCheckpoints(path2) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.listCheckpoints(localPath);
      }
      /**
       * Restore a file to a known checkpoint state.
       *
       * @param path - The path of the file.
       *
       * @param checkpointID - The id of the checkpoint to restore.
       *
       * @returns A promise which resolves when the checkpoint is restored.
       */
      restoreCheckpoint(path2, checkpointID) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.restoreCheckpoint(localPath, checkpointID);
      }
      /**
       * Delete a checkpoint for a file.
       *
       * @param path - The path of the file.
       *
       * @param checkpointID - The id of the checkpoint to delete.
       *
       * @returns A promise which resolves when the checkpoint is deleted.
       */
      deleteCheckpoint(path2, checkpointID) {
        const [drive, localPath] = this._driveForPath(path2);
        return drive.deleteCheckpoint(localPath, checkpointID);
      }
      /**
       * Given a drive and a local path, construct a fully qualified
       * path. The inverse of `_driveForPath`.
       *
       * @param drive an `IDrive`.
       *
       * @param localPath the local path on the drive.
       *
       * @returns the fully qualified path.
       */
      _toGlobalPath(drive, localPath) {
        if (drive === this._defaultDrive) {
          return coreutils_12.PathExt.removeSlash(localPath);
        } else {
          return `${drive.name}:${coreutils_12.PathExt.removeSlash(localPath)}`;
        }
      }
      /**
       * Given a path, get the `IDrive to which it refers,
       * where the path satisfies the pattern
       * `'driveName:path/to/file'`. If there is no `driveName`
       * prepended to the path, it returns the default drive.
       *
       * @param path a path to a file.
       *
       * @returns A tuple containing an `IDrive` object for the path,
       * and a local path for that drive.
       */
      _driveForPath(path2) {
        const driveName = this.driveName(path2);
        const localPath = this.localPath(path2);
        if (driveName) {
          return [this._additionalDrives.get(driveName), localPath];
        } else {
          return [this._defaultDrive, localPath];
        }
      }
      /**
       * Respond to fileChanged signals from the drives attached to
       * the manager. This prepends the drive name to the path if necessary,
       * and then forwards the signal.
       */
      _onFileChanged(sender, args) {
        var _a7, _b;
        if (sender === this._defaultDrive) {
          this._fileChanged.emit(args);
        } else {
          let newValue = null;
          let oldValue = null;
          if ((_a7 = args.newValue) === null || _a7 === void 0 ? void 0 : _a7.path) {
            newValue = {
              ...args.newValue,
              path: this._toGlobalPath(sender, args.newValue.path)
            };
          }
          if ((_b = args.oldValue) === null || _b === void 0 ? void 0 : _b.path) {
            oldValue = {
              ...args.oldValue,
              path: this._toGlobalPath(sender, args.oldValue.path)
            };
          }
          this._fileChanged.emit({
            type: args.type,
            newValue,
            oldValue
          });
        }
      }
    };
    exports2.ContentsManager = ContentsManager;
    var Drive = class {
      /**
       * Construct a new contents manager object.
       *
       * @param options - The options used to initialize the object.
       */
      constructor(options = {}) {
        var _a7, _b, _c;
        this._isDisposed = false;
        this._fileChanged = new signaling_1.Signal(this);
        this.name = (_a7 = options.name) !== null && _a7 !== void 0 ? _a7 : "Default";
        this._apiEndpoint = (_b = options.apiEndpoint) !== null && _b !== void 0 ? _b : SERVICE_DRIVE_URL;
        this.serverSettings = (_c = options.serverSettings) !== null && _c !== void 0 ? _c : __1.ServerConnection.makeSettings();
      }
      /**
       * A signal emitted when a file operation takes place.
       */
      get fileChanged() {
        return this._fileChanged;
      }
      /**
       * Test whether the manager has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources held by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        signaling_1.Signal.clearData(this);
      }
      /**
       * Get a file or directory.
       *
       * @param localPath The path to the file.
       *
       * @param options The options used to fetch the file.
       *
       * @returns A promise which resolves with the file content.
       *
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async get(localPath, options) {
        let url = this._getUrl(localPath);
        if (options) {
          if (options.type === "notebook") {
            delete options["format"];
          }
          const content = options.content ? "1" : "0";
          const hash = options.hash ? "1" : "0";
          const params = { ...options, content, hash };
          url += coreutils_12.URLExt.objectToQueryString(params);
        }
        const settings = this.serverSettings;
        const response = await __1.ServerConnection.makeRequest(url, {}, settings);
        if (response.status !== 200) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateContentsModel(data);
        return data;
      }
      /**
       * Get an encoded download url given a file path.
       *
       * @param localPath - An absolute POSIX file path on the server.
       *
       * #### Notes
       * It is expected that the path contains no relative paths.
       *
       * The returned URL may include a query parameter.
       */
      getDownloadUrl(localPath) {
        const baseUrl = this.serverSettings.baseUrl;
        let url = coreutils_12.URLExt.join(baseUrl, FILES_URL, coreutils_12.URLExt.encodeParts(localPath));
        let cookie = "";
        try {
          cookie = document.cookie;
        } catch (e) {
        }
        const xsrfTokenMatch = cookie.match("\\b_xsrf=([^;]*)\\b");
        if (xsrfTokenMatch) {
          const fullUrl = new URL(url);
          fullUrl.searchParams.append("_xsrf", xsrfTokenMatch[1]);
          url = fullUrl.toString();
        }
        return Promise.resolve(url);
      }
      /**
       * Create a new untitled file or directory in the specified directory path.
       *
       * @param options The options used to create the file.
       *
       * @returns A promise which resolves with the created file content when the
       *    file is created.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async newUntitled(options = {}) {
        var _a7;
        let body = "{}";
        if (options) {
          if (options.ext) {
            options.ext = Private.normalizeExtension(options.ext);
          }
          body = JSON.stringify(options);
        }
        const settings = this.serverSettings;
        const url = this._getUrl((_a7 = options.path) !== null && _a7 !== void 0 ? _a7 : "");
        const init = {
          method: "POST",
          body
        };
        const response = await __1.ServerConnection.makeRequest(url, init, settings);
        if (response.status !== 201) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateContentsModel(data);
        this._fileChanged.emit({
          type: "new",
          oldValue: null,
          newValue: data
        });
        return data;
      }
      /**
       * Delete a file.
       *
       * @param localPath - The path to the file.
       *
       * @returns A promise which resolves when the file is deleted.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents).
       */
      async delete(localPath) {
        const url = this._getUrl(localPath);
        const settings = this.serverSettings;
        const init = { method: "DELETE" };
        const response = await __1.ServerConnection.makeRequest(url, init, settings);
        if (response.status !== 204) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        this._fileChanged.emit({
          type: "delete",
          oldValue: { path: localPath },
          newValue: null
        });
      }
      /**
       * Rename a file or directory.
       *
       * @param oldLocalPath - The original file path.
       *
       * @param newLocalPath - The new file path.
       *
       * @returns A promise which resolves with the new file contents model when
       *   the file is renamed.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async rename(oldLocalPath, newLocalPath) {
        const settings = this.serverSettings;
        const url = this._getUrl(oldLocalPath);
        const init = {
          method: "PATCH",
          body: JSON.stringify({ path: newLocalPath })
        };
        const response = await __1.ServerConnection.makeRequest(url, init, settings);
        if (response.status !== 200) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateContentsModel(data);
        this._fileChanged.emit({
          type: "rename",
          oldValue: { path: oldLocalPath },
          newValue: data
        });
        return data;
      }
      /**
       * Save a file.
       *
       * @param localPath - The desired file path.
       *
       * @param options - Optional overrides to the model.
       *
       * @returns A promise which resolves with the file content model when the
       *   file is saved.
       *
       * #### Notes
       * Ensure that `model.content` is populated for the file.
       *
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async save(localPath, options = {}) {
        const settings = this.serverSettings;
        const url = this._getUrl(localPath);
        const init = {
          method: "PUT",
          body: JSON.stringify(options)
        };
        const response = await __1.ServerConnection.makeRequest(url, init, settings);
        if (response.status !== 200 && response.status !== 201) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateContentsModel(data);
        this._fileChanged.emit({
          type: "save",
          oldValue: null,
          newValue: data
        });
        return data;
      }
      /**
       * Copy a file into a given directory.
       *
       * @param localPath - The original file path.
       *
       * @param toDir - The destination directory path.
       *
       * @returns A promise which resolves with the new contents model when the
       *  file is copied.
       *
       * #### Notes
       * The server will select the name of the copied file.
       *
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async copy(fromFile, toDir) {
        const settings = this.serverSettings;
        const url = this._getUrl(toDir);
        const init = {
          method: "POST",
          body: JSON.stringify({ copy_from: fromFile })
        };
        const response = await __1.ServerConnection.makeRequest(url, init, settings);
        if (response.status !== 201) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateContentsModel(data);
        this._fileChanged.emit({
          type: "new",
          oldValue: null,
          newValue: data
        });
        return data;
      }
      /**
       * Create a checkpoint for a file.
       *
       * @param localPath - The path of the file.
       *
       * @returns A promise which resolves with the new checkpoint model when the
       *   checkpoint is created.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async createCheckpoint(localPath) {
        const url = this._getUrl(localPath, "checkpoints");
        const init = { method: "POST" };
        const response = await __1.ServerConnection.makeRequest(url, init, this.serverSettings);
        if (response.status !== 201) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        validate.validateCheckpointModel(data);
        return data;
      }
      /**
       * List available checkpoints for a file.
       *
       * @param localPath - The path of the file.
       *
       * @returns A promise which resolves with a list of checkpoint models for
       *    the file.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents) and validates the response model.
       */
      async listCheckpoints(localPath) {
        const url = this._getUrl(localPath, "checkpoints");
        const response = await __1.ServerConnection.makeRequest(url, {}, this.serverSettings);
        if (response.status !== 200) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid Checkpoint list");
        }
        for (let i = 0; i < data.length; i++) {
          validate.validateCheckpointModel(data[i]);
        }
        return data;
      }
      /**
       * Restore a file to a known checkpoint state.
       *
       * @param localPath - The path of the file.
       *
       * @param checkpointID - The id of the checkpoint to restore.
       *
       * @returns A promise which resolves when the checkpoint is restored.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents).
       */
      async restoreCheckpoint(localPath, checkpointID) {
        const url = this._getUrl(localPath, "checkpoints", checkpointID);
        const init = { method: "POST" };
        const response = await __1.ServerConnection.makeRequest(url, init, this.serverSettings);
        if (response.status !== 204) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
      }
      /**
       * Delete a checkpoint for a file.
       *
       * @param localPath - The path of the file.
       *
       * @param checkpointID - The id of the checkpoint to delete.
       *
       * @returns A promise which resolves when the checkpoint is deleted.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/contents).
       */
      async deleteCheckpoint(localPath, checkpointID) {
        const url = this._getUrl(localPath, "checkpoints", checkpointID);
        const init = { method: "DELETE" };
        const response = await __1.ServerConnection.makeRequest(url, init, this.serverSettings);
        if (response.status !== 204) {
          const err = await __1.ServerConnection.ResponseError.create(response);
          throw err;
        }
      }
      /**
       * Get a REST url for a file given a path.
       */
      _getUrl(...args) {
        const parts = args.map((path2) => coreutils_12.URLExt.encodeParts(path2));
        const baseUrl = this.serverSettings.baseUrl;
        return coreutils_12.URLExt.join(baseUrl, this._apiEndpoint, ...parts);
      }
    };
    exports2.Drive = Drive;
    var Private;
    (function(Private2) {
      function normalizeExtension(extension) {
        if (extension.length > 0 && extension.indexOf(".") !== 0) {
          extension = `.${extension}`;
        }
        return extension;
      }
      Private2.normalizeExtension = normalizeExtension;
    })(Private || (Private = {}));
  }
});

// node_modules/@lumino/polling/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@lumino/polling/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_dist2(), require_dist3()) : typeof define === "function" && define.amd ? define(["exports", "@lumino/coreutils", "@lumino/signaling"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_polling = {}, global2.lumino_coreutils, global2.lumino_signaling));
    })(exports2, function(exports3, coreutils, signaling) {
      "use strict";
      class Poll {
        /**
         * Instantiate a new poll with exponential backoff in case of failure.
         *
         * @param options - The poll instantiation options.
         */
        constructor(options) {
          var _a7;
          this._disposed = new signaling.Signal(this);
          this._lingered = 0;
          this._tick = new coreutils.PromiseDelegate();
          this._ticked = new signaling.Signal(this);
          this._factory = options.factory;
          this._linger = (_a7 = options.linger) !== null && _a7 !== void 0 ? _a7 : Private.DEFAULT_LINGER;
          this._standby = options.standby || Private.DEFAULT_STANDBY;
          this._state = { ...Private.DEFAULT_STATE, timestamp: (/* @__PURE__ */ new Date()).getTime() };
          const frequency = options.frequency || {};
          const max = Math.max(frequency.interval || 0, frequency.max || 0, Private.DEFAULT_FREQUENCY.max);
          this.frequency = { ...Private.DEFAULT_FREQUENCY, ...frequency, ...{ max } };
          this.name = options.name || Private.DEFAULT_NAME;
          if ("auto" in options ? options.auto : true) {
            setTimeout(() => this.start());
          }
        }
        /**
         * A signal emitted when the poll is disposed.
         */
        get disposed() {
          return this._disposed;
        }
        /**
         * The polling frequency parameters.
         */
        get frequency() {
          return this._frequency;
        }
        set frequency(frequency) {
          if (this.isDisposed || coreutils.JSONExt.deepEqual(frequency, this.frequency || {})) {
            return;
          }
          let { backoff, interval, max } = frequency;
          interval = Math.round(interval);
          max = Math.round(max);
          if (typeof backoff === "number" && backoff < 1) {
            throw new Error("Poll backoff growth factor must be at least 1");
          }
          if ((interval < 0 || interval > max) && interval !== Poll.NEVER) {
            throw new Error("Poll interval must be between 0 and max");
          }
          if (max > Poll.MAX_INTERVAL && max !== Poll.NEVER) {
            throw new Error(`Max interval must be less than ${Poll.MAX_INTERVAL}`);
          }
          this._frequency = { backoff, interval, max };
        }
        /**
         * Whether the poll is disposed.
         */
        get isDisposed() {
          return this.state.phase === "disposed";
        }
        /**
         * Indicates when the poll switches to standby.
         */
        get standby() {
          return this._standby;
        }
        set standby(standby) {
          if (this.isDisposed || this.standby === standby) {
            return;
          }
          this._standby = standby;
        }
        /**
         * The poll state, which is the content of the current poll tick.
         */
        get state() {
          return this._state;
        }
        /**
         * A promise that resolves when the poll next ticks.
         */
        get tick() {
          return this._tick.promise;
        }
        /**
         * A signal emitted when the poll ticks and fires off a new request.
         */
        get ticked() {
          return this._ticked;
        }
        /**
         * Return an async iterator that yields every tick.
         */
        async *[Symbol.asyncIterator]() {
          while (!this.isDisposed) {
            yield this.state;
            await this.tick.catch(() => void 0);
          }
        }
        /**
         * Dispose the poll.
         */
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this._state = {
            ...Private.DISPOSED_STATE,
            timestamp: (/* @__PURE__ */ new Date()).getTime()
          };
          this._tick.promise.catch((_) => void 0);
          this._tick.reject(new Error(`Poll (${this.name}) is disposed.`));
          this._disposed.emit(void 0);
          signaling.Signal.clearData(this);
        }
        /**
         * Refreshes the poll. Schedules `refreshed` tick if necessary.
         *
         * @returns A promise that resolves after tick is scheduled and never rejects.
         *
         * #### Notes
         * The returned promise resolves after the tick is scheduled, but before
         * the polling action is run. To wait until after the poll action executes,
         * await the `poll.tick` promise: `await poll.refresh(); await poll.tick;`
         */
        refresh() {
          return this.schedule({
            cancel: ({ phase }) => phase === "refreshed",
            interval: Poll.IMMEDIATE,
            phase: "refreshed"
          });
        }
        /**
         * Schedule the next poll tick.
         *
         * @param next - The next poll state data to schedule. Defaults to standby.
         *
         * @param next.cancel - Cancels state transition if function returns `true`.
         *
         * @returns A promise that resolves when the next poll state is active.
         *
         * #### Notes
         * This method is not meant to be invoked by user code typically. It is public
         * to allow poll instances to be composed into classes that schedule ticks.
         */
        async schedule(next = {}) {
          if (this.isDisposed) {
            return;
          }
          if (next.cancel && next.cancel(this.state)) {
            return;
          }
          const pending = this._tick;
          const scheduled = new coreutils.PromiseDelegate();
          const state = {
            interval: this.frequency.interval,
            payload: null,
            phase: "standby",
            timestamp: (/* @__PURE__ */ new Date()).getTime(),
            ...next
          };
          this._state = state;
          this._tick = scheduled;
          clearTimeout(this._timeout);
          this._ticked.emit(this.state);
          pending.resolve(this);
          await pending.promise;
          if (state.interval === Poll.NEVER) {
            this._timeout = void 0;
            return;
          }
          const execute = () => {
            if (this.isDisposed || this.tick !== scheduled.promise) {
              return;
            }
            this._execute();
          };
          this._timeout = setTimeout(execute, state.interval);
        }
        /**
         * Starts the poll. Schedules `started` tick if necessary.
         *
         * @returns A promise that resolves after tick is scheduled and never rejects.
         */
        start() {
          return this.schedule({
            cancel: ({ phase }) => phase !== "constructed" && phase !== "standby" && phase !== "stopped",
            interval: Poll.IMMEDIATE,
            phase: "started"
          });
        }
        /**
         * Stops the poll. Schedules `stopped` tick if necessary.
         *
         * @returns A promise that resolves after tick is scheduled and never rejects.
         */
        stop() {
          return this.schedule({
            cancel: ({ phase }) => phase === "stopped",
            interval: Poll.NEVER,
            phase: "stopped"
          });
        }
        /**
         * Whether the poll is hidden.
         *
         * #### Notes
         * This property is only relevant in a browser context.
         */
        get hidden() {
          return Private.hidden;
        }
        /**
         * Execute a new poll factory promise or stand by if necessary.
         */
        _execute() {
          let standby = typeof this.standby === "function" ? this.standby() : this.standby;
          if (standby === "never") {
            standby = false;
          } else if (standby === "when-hidden") {
            if (this.hidden) {
              standby = ++this._lingered > this._linger;
            } else {
              this._lingered = 0;
              standby = false;
            }
          }
          if (standby) {
            void this.schedule();
            return;
          }
          const pending = this.tick;
          this._factory(this.state).then((resolved) => {
            if (this.isDisposed || this.tick !== pending) {
              return;
            }
            void this.schedule({
              payload: resolved,
              phase: this.state.phase === "rejected" ? "reconnected" : "resolved"
            });
          }).catch((rejected) => {
            if (this.isDisposed || this.tick !== pending) {
              return;
            }
            void this.schedule({
              interval: Private.sleep(this.frequency, this.state),
              payload: rejected,
              phase: "rejected"
            });
          });
        }
      }
      (function(Poll2) {
        Poll2.IMMEDIATE = 0;
        Poll2.MAX_INTERVAL = 2147483647;
        Poll2.NEVER = Infinity;
      })(Poll || (Poll = {}));
      var Private;
      (function(Private2) {
        Private2.DEFAULT_BACKOFF = 3;
        Private2.DEFAULT_FREQUENCY = {
          backoff: true,
          interval: 1e3,
          max: 30 * 1e3
        };
        Private2.DEFAULT_LINGER = 1;
        Private2.DEFAULT_NAME = "unknown";
        Private2.DEFAULT_STANDBY = "when-hidden";
        Private2.DEFAULT_STATE = {
          interval: Poll.NEVER,
          payload: null,
          phase: "constructed",
          timestamp: (/* @__PURE__ */ new Date(0)).getTime()
        };
        Private2.DISPOSED_STATE = {
          interval: Poll.NEVER,
          payload: null,
          phase: "disposed",
          timestamp: (/* @__PURE__ */ new Date(0)).getTime()
        };
        function sleep2(frequency, last) {
          const { backoff, interval, max } = frequency;
          if (interval === Poll.NEVER) {
            return interval;
          }
          const growth = backoff === true ? Private2.DEFAULT_BACKOFF : backoff === false ? 1 : backoff;
          const random = getRandomIntInclusive(interval, last.interval * growth);
          return Math.min(max, random);
        }
        Private2.sleep = sleep2;
        Private2.hidden = (() => {
          if (typeof document === "undefined") {
            return false;
          }
          document.addEventListener("visibilitychange", () => {
            Private2.hidden = document.visibilityState === "hidden";
          });
          document.addEventListener("pagehide", () => {
            Private2.hidden = document.visibilityState === "hidden";
          });
          return document.visibilityState === "hidden";
        })();
        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
      })(Private || (Private = {}));
      class RateLimiter {
        /**
         * Instantiate a rate limiter.
         *
         * @param fn - The function to rate limit.
         *
         * @param limit - The rate limit; defaults to 500ms.
         */
        constructor(fn, limit = 500) {
          this.args = void 0;
          this.payload = null;
          this.limit = limit;
          this.poll = new Poll({
            auto: false,
            factory: async () => {
              const { args } = this;
              this.args = void 0;
              return fn(...args);
            },
            frequency: { backoff: false, interval: Poll.NEVER, max: Poll.NEVER },
            standby: "never"
          });
          this.payload = new coreutils.PromiseDelegate();
          this.poll.ticked.connect((_, state) => {
            const { payload } = this;
            if (state.phase === "resolved") {
              this.payload = new coreutils.PromiseDelegate();
              payload.resolve(state.payload);
              return;
            }
            if (state.phase === "rejected" || state.phase === "stopped") {
              this.payload = new coreutils.PromiseDelegate();
              payload.promise.catch((_2) => void 0);
              payload.reject(state.payload);
              return;
            }
          }, this);
        }
        /**
         * Whether the rate limiter is disposed.
         */
        get isDisposed() {
          return this.payload === null;
        }
        /**
         * Disposes the rate limiter.
         */
        dispose() {
          if (this.isDisposed) {
            return;
          }
          this.args = void 0;
          this.payload = null;
          this.poll.dispose();
        }
        /**
         * Stop the function if it is mid-flight.
         */
        async stop() {
          return this.poll.stop();
        }
      }
      class Debouncer extends RateLimiter {
        /**
         * Invokes the function and only executes after rate limit has elapsed.
         * Each invocation resets the timer.
         */
        invoke(...args) {
          this.args = args;
          void this.poll.schedule({ interval: this.limit, phase: "invoked" });
          return this.payload.promise;
        }
      }
      class Throttler extends RateLimiter {
        /**
         * Instantiate a throttler.
         *
         * @param fn - The function being throttled.
         *
         * @param options - Throttling configuration or throttling limit in ms.
         *
         * #### Notes
         * The `edge` defaults to `leading`; the `limit` defaults to `500`.
         */
        constructor(fn, options) {
          super(fn, typeof options === "number" ? options : options && options.limit);
          this._trailing = false;
          if (typeof options !== "number" && options && options.edge === "trailing") {
            this._trailing = true;
          }
          this._interval = this._trailing ? this.limit : Poll.IMMEDIATE;
        }
        /**
         * Throttles function invocations if one is currently in flight.
         */
        invoke(...args) {
          const idle = this.poll.state.phase !== "invoked";
          if (idle || this._trailing) {
            this.args = args;
          }
          if (idle) {
            void this.poll.schedule({ interval: this._interval, phase: "invoked" });
          }
          return this.payload.promise;
        }
      }
      exports3.Debouncer = Debouncer;
      exports3.Poll = Poll;
      exports3.RateLimiter = RateLimiter;
      exports3.Throttler = Throttler;
    });
  }
});

// node_modules/@jupyterlab/services/lib/event/index.js
var require_event = __commonJS({
  "node_modules/@jupyterlab/services/lib/event/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EventManager = void 0;
    var coreutils_12 = require_lib();
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var serverconnection_1 = require_serverconnection();
    var SERVICE_EVENTS_URL = "api/events";
    var EventManager = class {
      /**
       * Create a new event manager.
       */
      constructor(options = {}) {
        var _a7;
        this._socket = null;
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
        this._poll = new polling_1.Poll({ factory: () => this._subscribe() });
        this._stream = new signaling_1.Stream(this);
        void this._poll.start();
      }
      /**
       * Whether the event manager is disposed.
       */
      get isDisposed() {
        return this._poll.isDisposed;
      }
      /**
       * An event stream that emits and yields each new event.
       */
      get stream() {
        return this._stream;
      }
      /**
       * Dispose the event manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._poll.dispose();
        const socket = this._socket;
        if (socket) {
          this._socket = null;
          socket.onopen = () => void 0;
          socket.onerror = () => void 0;
          socket.onmessage = () => void 0;
          socket.onclose = () => void 0;
          socket.close();
        }
        signaling_1.Signal.clearData(this);
        this._stream.stop();
      }
      /**
       * Post an event request to be emitted by the event bus.
       */
      async emit(event) {
        const { serverSettings } = this;
        const { baseUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const url = coreutils_12.URLExt.join(baseUrl, SERVICE_EVENTS_URL);
        const init = { body: JSON.stringify(event), method: "POST" };
        const response = await makeRequest(url, init, serverSettings);
        if (response.status !== 204) {
          throw new ResponseError(response);
        }
      }
      /**
       * Subscribe to event bus emissions.
       */
      _subscribe() {
        return new Promise((_, reject) => {
          if (this.isDisposed) {
            return;
          }
          const { appendToken, token, WebSocket: WebSocket2, wsUrl } = this.serverSettings;
          let url = coreutils_12.URLExt.join(wsUrl, SERVICE_EVENTS_URL, "subscribe");
          if (appendToken && token !== "") {
            url += `?token=${encodeURIComponent(token)}`;
          }
          const socket = this._socket = new WebSocket2(url);
          const stream = this._stream;
          socket.onclose = () => reject(new Error("EventManager socket closed"));
          socket.onmessage = (msg) => msg.data && stream.emit(JSON.parse(msg.data));
        });
      }
    };
    exports2.EventManager = EventManager;
  }
});

// node_modules/@jupyterlab/services/lib/kernel/kernel.js
var require_kernel = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/kernel.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@jupyterlab/services/lib/kernel/validate.js
var require_validate3 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/validate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateModels = exports2.validateModel = exports2.validateMessage = void 0;
    var validate_1 = require_validate();
    var HEADER_FIELDS = ["username", "version", "session", "msg_id", "msg_type"];
    var IOPUB_CONTENT_FIELDS = {
      stream: { name: "string", text: "string" },
      display_data: { data: "object", metadata: "object" },
      execute_input: { code: "string", execution_count: "number" },
      execute_result: {
        execution_count: "number",
        data: "object",
        metadata: "object"
      },
      error: { ename: "string", evalue: "string", traceback: "object" },
      status: {
        execution_state: [
          "string",
          ["starting", "idle", "busy", "restarting", "dead"]
        ]
      },
      clear_output: { wait: "boolean" },
      comm_open: { comm_id: "string", target_name: "string", data: "object" },
      comm_msg: { comm_id: "string", data: "object" },
      comm_close: { comm_id: "string" },
      shutdown_reply: { restart: "boolean" }
      // Emitted by the IPython kernel.
    };
    function validateHeader(header) {
      for (let i = 0; i < HEADER_FIELDS.length; i++) {
        (0, validate_1.validateProperty)(header, HEADER_FIELDS[i], "string");
      }
    }
    function validateMessage(msg) {
      (0, validate_1.validateProperty)(msg, "metadata", "object");
      (0, validate_1.validateProperty)(msg, "content", "object");
      (0, validate_1.validateProperty)(msg, "channel", "string");
      validateHeader(msg.header);
      if (msg.channel === "iopub") {
        validateIOPubContent(msg);
      }
    }
    exports2.validateMessage = validateMessage;
    function validateIOPubContent(msg) {
      if (msg.channel === "iopub") {
        const fields = IOPUB_CONTENT_FIELDS[msg.header.msg_type];
        if (fields === void 0) {
          return;
        }
        const names = Object.keys(fields);
        const content = msg.content;
        for (let i = 0; i < names.length; i++) {
          let args = fields[names[i]];
          if (!Array.isArray(args)) {
            args = [args];
          }
          (0, validate_1.validateProperty)(content, names[i], ...args);
        }
      }
    }
    function validateModel(model) {
      (0, validate_1.validateProperty)(model, "name", "string");
      (0, validate_1.validateProperty)(model, "id", "string");
    }
    exports2.validateModel = validateModel;
    function validateModels(models) {
      if (!Array.isArray(models)) {
        throw new Error("Invalid kernel list");
      }
      models.forEach((d) => validateModel(d));
    }
    exports2.validateModels = validateModels;
  }
});

// node_modules/@jupyterlab/services/lib/kernel/restapi.js
var require_restapi = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/restapi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getKernelModel = exports2.shutdownKernel = exports2.interruptKernel = exports2.restartKernel = exports2.startNew = exports2.listRunning = exports2.KERNEL_SERVICE_URL = void 0;
    var serverconnection_1 = require_serverconnection();
    var coreutils_12 = require_lib();
    var validate_1 = require_validate3();
    exports2.KERNEL_SERVICE_URL = "api/kernels";
    async function listRunning(settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL);
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.validateModels)(data);
      return data;
    }
    exports2.listRunning = listRunning;
    async function startNew(options = {}, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL);
      const init = {
        method: "POST",
        body: JSON.stringify(options)
      };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 201) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.validateModel)(data);
      return data;
    }
    exports2.startNew = startNew;
    async function restartKernel(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL, encodeURIComponent(id), "restart");
      const init = { method: "POST" };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.validateModel)(data);
    }
    exports2.restartKernel = restartKernel;
    async function interruptKernel(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL, encodeURIComponent(id), "interrupt");
      const init = { method: "POST" };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 204) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
    }
    exports2.interruptKernel = interruptKernel;
    async function shutdownKernel(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL, encodeURIComponent(id));
      const init = { method: "DELETE" };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status === 404) {
        const msg = `The kernel "${id}" does not exist on the server`;
        console.warn(msg);
      } else if (response.status !== 204) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
    }
    exports2.shutdownKernel = shutdownKernel;
    async function getKernelModel(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.KERNEL_SERVICE_URL, encodeURIComponent(id));
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status === 404) {
        return void 0;
      } else if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.validateModel)(data);
      return data;
    }
    exports2.getKernelModel = getKernelModel;
  }
});

// node_modules/@lumino/disposable/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@lumino/disposable/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2, require_dist3()) : typeof define === "function" && define.amd ? define(["exports", "@lumino/signaling"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_disposable = {}, global2.lumino_signaling));
    })(exports2, function(exports3, signaling) {
      "use strict";
      class DisposableDelegate {
        /**
         * Construct a new disposable delegate.
         *
         * @param fn - The callback function to invoke on dispose.
         */
        constructor(fn) {
          this._fn = fn;
        }
        /**
         * Test whether the delegate has been disposed.
         */
        get isDisposed() {
          return !this._fn;
        }
        /**
         * Dispose of the delegate and invoke the callback function.
         */
        dispose() {
          if (!this._fn) {
            return;
          }
          let fn = this._fn;
          this._fn = null;
          fn();
        }
      }
      class ObservableDisposableDelegate extends DisposableDelegate {
        constructor() {
          super(...arguments);
          this._disposed = new signaling.Signal(this);
        }
        /**
         * A signal emitted when the delegate is disposed.
         */
        get disposed() {
          return this._disposed;
        }
        /**
         * Dispose of the delegate and invoke the callback function.
         */
        dispose() {
          if (this.isDisposed) {
            return;
          }
          super.dispose();
          this._disposed.emit(void 0);
          signaling.Signal.clearData(this);
        }
      }
      class DisposableSet {
        constructor() {
          this._isDisposed = false;
          this._items = /* @__PURE__ */ new Set();
        }
        /**
         * Test whether the set has been disposed.
         */
        get isDisposed() {
          return this._isDisposed;
        }
        /**
         * Dispose of the set and the items it contains.
         *
         * #### Notes
         * Items are disposed in the order they are added to the set.
         */
        dispose() {
          if (this._isDisposed) {
            return;
          }
          this._isDisposed = true;
          this._items.forEach((item) => {
            item.dispose();
          });
          this._items.clear();
        }
        /**
         * Test whether the set contains a specific item.
         *
         * @param item - The item of interest.
         *
         * @returns `true` if the set contains the item, `false` otherwise.
         */
        contains(item) {
          return this._items.has(item);
        }
        /**
         * Add a disposable item to the set.
         *
         * @param item - The item to add to the set.
         *
         * #### Notes
         * If the item is already contained in the set, this is a no-op.
         */
        add(item) {
          this._items.add(item);
        }
        /**
         * Remove a disposable item from the set.
         *
         * @param item - The item to remove from the set.
         *
         * #### Notes
         * If the item is not contained in the set, this is a no-op.
         */
        remove(item) {
          this._items.delete(item);
        }
        /**
         * Remove all items from the set.
         */
        clear() {
          this._items.clear();
        }
      }
      (function(DisposableSet2) {
        function from(items) {
          let set = new DisposableSet2();
          for (const item of items) {
            set.add(item);
          }
          return set;
        }
        DisposableSet2.from = from;
      })(DisposableSet || (DisposableSet = {}));
      class ObservableDisposableSet extends DisposableSet {
        constructor() {
          super(...arguments);
          this._disposed = new signaling.Signal(this);
        }
        /**
         * A signal emitted when the set is disposed.
         */
        get disposed() {
          return this._disposed;
        }
        /**
         * Dispose of the set and the items it contains.
         *
         * #### Notes
         * Items are disposed in the order they are added to the set.
         */
        dispose() {
          if (this.isDisposed) {
            return;
          }
          super.dispose();
          this._disposed.emit(void 0);
          signaling.Signal.clearData(this);
        }
      }
      (function(ObservableDisposableSet2) {
        function from(items) {
          let set = new ObservableDisposableSet2();
          for (const item of items) {
            set.add(item);
          }
          return set;
        }
        ObservableDisposableSet2.from = from;
      })(ObservableDisposableSet || (ObservableDisposableSet = {}));
      exports3.DisposableDelegate = DisposableDelegate;
      exports3.DisposableSet = DisposableSet;
      exports3.ObservableDisposableDelegate = ObservableDisposableDelegate;
      exports3.ObservableDisposableSet = ObservableDisposableSet;
    });
  }
});

// node_modules/@jupyterlab/services/lib/kernel/comm.js
var require_comm = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/comm.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CommHandler = void 0;
    var disposable_1 = require_dist5();
    var KernelMessage = __importStar(require_messages());
    var CommHandler = class extends disposable_1.DisposableDelegate {
      /**
       * Construct a new comm channel.
       */
      constructor(target, id, kernel, disposeCb) {
        super(disposeCb);
        this._target = "";
        this._id = "";
        this._id = id;
        this._target = target;
        this._kernel = kernel;
      }
      /**
       * The unique id for the comm channel.
       */
      get commId() {
        return this._id;
      }
      /**
       * The target name for the comm channel.
       */
      get targetName() {
        return this._target;
      }
      /**
       * Get the callback for a comm close event.
       *
       * #### Notes
       * This is called when the comm is closed from either the server or client.
       *
       * **See also:** [[ICommClose]], [[close]]
       */
      get onClose() {
        return this._onClose;
      }
      /**
       * Set the callback for a comm close event.
       *
       * #### Notes
       * This is called when the comm is closed from either the server or client. If
       * the function returns a promise, and the kernel was closed from the server,
       * kernel message processing will pause until the returned promise is
       * fulfilled.
       *
       * **See also:** [[close]]
       */
      set onClose(cb) {
        this._onClose = cb;
      }
      /**
       * Get the callback for a comm message received event.
       */
      get onMsg() {
        return this._onMsg;
      }
      /**
       * Set the callback for a comm message received event.
       *
       * #### Notes
       * This is called when a comm message is received. If the function returns a
       * promise, kernel message processing will pause until it is fulfilled.
       */
      set onMsg(cb) {
        this._onMsg = cb;
      }
      /**
       * Open a comm with optional data and metadata.
       *
       * #### Notes
       * This sends a `comm_open` message to the server.
       *
       * **See also:** [[ICommOpen]]
       */
      open(data, metadata2, buffers = []) {
        if (this.isDisposed || this._kernel.isDisposed) {
          throw new Error("Cannot open");
        }
        const msg = KernelMessage.createMessage({
          msgType: "comm_open",
          channel: "shell",
          username: this._kernel.username,
          session: this._kernel.clientId,
          content: {
            comm_id: this._id,
            target_name: this._target,
            data: data !== null && data !== void 0 ? data : {}
          },
          metadata: metadata2,
          buffers
        });
        return this._kernel.sendShellMessage(msg, false, true);
      }
      /**
       * Send a `comm_msg` message to the kernel.
       *
       * #### Notes
       * This is a no-op if the comm has been closed.
       *
       * **See also:** [[ICommMsg]]
       */
      send(data, metadata2, buffers = [], disposeOnDone = true) {
        if (this.isDisposed || this._kernel.isDisposed) {
          throw new Error("Cannot send");
        }
        const msg = KernelMessage.createMessage({
          msgType: "comm_msg",
          channel: "shell",
          username: this._kernel.username,
          session: this._kernel.clientId,
          content: {
            comm_id: this._id,
            data
          },
          metadata: metadata2,
          buffers
        });
        return this._kernel.sendShellMessage(msg, false, disposeOnDone);
      }
      /**
       * Close the comm.
       *
       * #### Notes
       * This will send a `comm_close` message to the kernel, and call the
       * `onClose` callback if set.
       *
       * This is a no-op if the comm is already closed.
       *
       * **See also:** [[ICommClose]], [[onClose]]
       */
      close(data, metadata2, buffers = []) {
        if (this.isDisposed || this._kernel.isDisposed) {
          throw new Error("Cannot close");
        }
        const msg = KernelMessage.createMessage({
          msgType: "comm_close",
          channel: "shell",
          username: this._kernel.username,
          session: this._kernel.clientId,
          content: {
            comm_id: this._id,
            data: data !== null && data !== void 0 ? data : {}
          },
          metadata: metadata2,
          buffers
        });
        const future = this._kernel.sendShellMessage(msg, false, true);
        const onClose = this._onClose;
        if (onClose) {
          const ioMsg = KernelMessage.createMessage({
            msgType: "comm_close",
            channel: "iopub",
            username: this._kernel.username,
            session: this._kernel.clientId,
            content: {
              comm_id: this._id,
              data: data !== null && data !== void 0 ? data : {}
            },
            metadata: metadata2,
            buffers
          });
          void onClose(ioMsg);
        }
        this.dispose();
        return future;
      }
    };
    exports2.CommHandler = CommHandler;
  }
});

// node_modules/@jupyterlab/services/lib/kernel/future.js
var require_future = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/future.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelShellFutureHandler = exports2.KernelControlFutureHandler = exports2.KernelFutureHandler = void 0;
    var coreutils_12 = require_dist2();
    var disposable_1 = require_dist5();
    var KernelMessage = __importStar(require_messages());
    var KernelFutureHandler = class extends disposable_1.DisposableDelegate {
      /**
       * Construct a new KernelFutureHandler.
       */
      constructor(cb, msg, expectReply, disposeOnDone, kernel) {
        super(cb);
        this._status = 0;
        this._stdin = Private.noOp;
        this._iopub = Private.noOp;
        this._reply = Private.noOp;
        this._done = new coreutils_12.PromiseDelegate();
        this._hooks = new Private.HookList();
        this._disposeOnDone = true;
        this._msg = msg;
        if (!expectReply) {
          this._setFlag(Private.KernelFutureFlag.GotReply);
        }
        this._disposeOnDone = disposeOnDone;
        this._kernel = kernel;
      }
      /**
       * Get the original outgoing message.
       */
      get msg() {
        return this._msg;
      }
      /**
       * A promise that resolves when the future is done.
       */
      get done() {
        return this._done.promise;
      }
      /**
       * Get the reply handler.
       */
      get onReply() {
        return this._reply;
      }
      /**
       * Set the reply handler.
       */
      set onReply(cb) {
        this._reply = cb;
      }
      /**
       * Get the iopub handler.
       */
      get onIOPub() {
        return this._iopub;
      }
      /**
       * Set the iopub handler.
       */
      set onIOPub(cb) {
        this._iopub = cb;
      }
      /**
       * Get the stdin handler.
       */
      get onStdin() {
        return this._stdin;
      }
      /**
       * Set the stdin handler.
       */
      set onStdin(cb) {
        this._stdin = cb;
      }
      /**
       * Register hook for IOPub messages.
       *
       * @param hook - The callback invoked for an IOPub message.
       *
       * #### Notes
       * The IOPub hook system allows you to preempt the handlers for IOPub
       * messages handled by the future.
       *
       * The most recently registered hook is run first. A hook can return a
       * boolean or a promise to a boolean, in which case all kernel message
       * processing pauses until the promise is fulfilled. If a hook return value
       * resolves to false, any later hooks will not run and the function will
       * return a promise resolving to false. If a hook throws an error, the error
       * is logged to the console and the next hook is run. If a hook is
       * registered during the hook processing, it will not run until the next
       * message. If a hook is removed during the hook processing, it will be
       * deactivated immediately.
       */
      registerMessageHook(hook) {
        if (this.isDisposed) {
          throw new Error("Kernel future is disposed");
        }
        this._hooks.add(hook);
      }
      /**
       * Remove a hook for IOPub messages.
       *
       * @param hook - The hook to remove.
       *
       * #### Notes
       * If a hook is removed during the hook processing, it will be deactivated immediately.
       */
      removeMessageHook(hook) {
        if (this.isDisposed) {
          return;
        }
        this._hooks.remove(hook);
      }
      /**
       * Send an `input_reply` message.
       */
      sendInputReply(content, parent_header) {
        this._kernel.sendInputReply(content, parent_header);
      }
      /**
       * Dispose and unregister the future.
       */
      dispose() {
        this._stdin = Private.noOp;
        this._iopub = Private.noOp;
        this._reply = Private.noOp;
        this._hooks = null;
        if (!this._testFlag(Private.KernelFutureFlag.IsDone)) {
          this._done.promise.catch(() => {
          });
          this._done.reject(new Error(`Canceled future for ${this.msg.header.msg_type} message before replies were done`));
        }
        super.dispose();
      }
      /**
       * Handle an incoming kernel message.
       */
      async handleMsg(msg) {
        switch (msg.channel) {
          case "control":
          case "shell":
            if (msg.channel === this.msg.channel && msg.parent_header.msg_id === this.msg.header.msg_id) {
              await this._handleReply(msg);
            }
            break;
          case "stdin":
            await this._handleStdin(msg);
            break;
          case "iopub":
            await this._handleIOPub(msg);
            break;
          default:
            break;
        }
      }
      async _handleReply(msg) {
        const reply = this._reply;
        if (reply) {
          await reply(msg);
        }
        this._replyMsg = msg;
        this._setFlag(Private.KernelFutureFlag.GotReply);
        if (this._testFlag(Private.KernelFutureFlag.GotIdle)) {
          this._handleDone();
        }
      }
      async _handleStdin(msg) {
        this._kernel.hasPendingInput = true;
        const stdin = this._stdin;
        if (stdin) {
          await stdin(msg);
        }
      }
      async _handleIOPub(msg) {
        const process2 = await this._hooks.process(msg);
        const iopub = this._iopub;
        if (process2 && iopub) {
          await iopub(msg);
        }
        if (KernelMessage.isStatusMsg(msg) && msg.content.execution_state === "idle") {
          this._setFlag(Private.KernelFutureFlag.GotIdle);
          if (this._testFlag(Private.KernelFutureFlag.GotReply)) {
            this._handleDone();
          }
        }
      }
      _handleDone() {
        if (this._testFlag(Private.KernelFutureFlag.IsDone)) {
          return;
        }
        this._setFlag(Private.KernelFutureFlag.IsDone);
        this._done.resolve(this._replyMsg);
        if (this._disposeOnDone) {
          this.dispose();
        }
      }
      /**
       * Test whether the given future flag is set.
       */
      _testFlag(flag) {
        return (this._status & flag) !== 0;
      }
      /**
       * Set the given future flag.
       */
      _setFlag(flag) {
        this._status |= flag;
      }
    };
    exports2.KernelFutureHandler = KernelFutureHandler;
    var KernelControlFutureHandler = class extends KernelFutureHandler {
    };
    exports2.KernelControlFutureHandler = KernelControlFutureHandler;
    var KernelShellFutureHandler = class extends KernelFutureHandler {
    };
    exports2.KernelShellFutureHandler = KernelShellFutureHandler;
    var Private;
    (function(Private2) {
      Private2.noOp = () => {
      };
      const defer = (() => {
        const ok = typeof requestAnimationFrame === "function";
        return ok ? requestAnimationFrame : setImmediate;
      })();
      class HookList {
        constructor() {
          this._hooks = [];
        }
        /**
         * Register a hook.
         *
         * @param hook - The callback to register.
         */
        add(hook) {
          this.remove(hook);
          this._hooks.push(hook);
        }
        /**
         * Remove a hook, if it exists in the hook list.
         *
         * @param hook - The callback to remove.
         */
        remove(hook) {
          const index = this._hooks.indexOf(hook);
          if (index >= 0) {
            this._hooks[index] = null;
            this._scheduleCompact();
          }
        }
        /**
         * Process a message through the hooks.
         *
         * @returns a promise resolving to false if any hook resolved as false,
         * otherwise true
         *
         * #### Notes
         * The most recently registered hook is run first. A hook can return a
         * boolean or a promise to a boolean, in which case processing pauses until
         * the promise is fulfilled. If a hook return value resolves to false, any
         * later hooks will not run and the function will return a promise resolving
         * to false. If a hook throws an error, the error is logged to the console
         * and the next hook is run. If a hook is registered during the hook
         * processing, it will not run until the next message. If a hook is removed
         * during the hook processing, it will be deactivated immediately.
         */
        async process(msg) {
          await this._processing;
          const processing = new coreutils_12.PromiseDelegate();
          this._processing = processing.promise;
          let continueHandling;
          for (let i = this._hooks.length - 1; i >= 0; i--) {
            const hook = this._hooks[i];
            if (hook === null) {
              continue;
            }
            try {
              continueHandling = await hook(msg);
            } catch (err) {
              continueHandling = true;
              console.error(err);
            }
            if (continueHandling === false) {
              processing.resolve(void 0);
              return false;
            }
          }
          processing.resolve(void 0);
          return true;
        }
        /**
         * Schedule a cleanup of the list, removing any hooks that have been nulled out.
         */
        _scheduleCompact() {
          if (!this._compactScheduled) {
            this._compactScheduled = true;
            defer(() => {
              this._processing = this._processing.then(() => {
                this._compactScheduled = false;
                this._compact();
              });
            });
          }
        }
        /**
         * Compact the list, removing any nulls.
         */
        _compact() {
          let numNulls = 0;
          for (let i = 0, len = this._hooks.length; i < len; i++) {
            const hook = this._hooks[i];
            if (this._hooks[i] === null) {
              numNulls++;
            } else {
              this._hooks[i - numNulls] = hook;
            }
          }
          this._hooks.length -= numNulls;
        }
      }
      Private2.HookList = HookList;
      let KernelFutureFlag;
      (function(KernelFutureFlag2) {
        KernelFutureFlag2[KernelFutureFlag2["GotReply"] = 1] = "GotReply";
        KernelFutureFlag2[KernelFutureFlag2["GotIdle"] = 2] = "GotIdle";
        KernelFutureFlag2[KernelFutureFlag2["IsDone"] = 4] = "IsDone";
        KernelFutureFlag2[KernelFutureFlag2["DisposeOnDone"] = 8] = "DisposeOnDone";
      })(KernelFutureFlag = Private2.KernelFutureFlag || (Private2.KernelFutureFlag = {}));
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/kernelspec/kernelspec.js
var require_kernelspec = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernelspec/kernelspec.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@jupyterlab/services/lib/kernelspec/validate.js
var require_validate4 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernelspec/validate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateSpecModels = exports2.validateSpecModel = void 0;
    var validate_1 = require_validate();
    function validateSpecModel(data) {
      const spec = data.spec;
      if (!spec) {
        throw new Error("Invalid kernel spec");
      }
      (0, validate_1.validateProperty)(data, "name", "string");
      (0, validate_1.validateProperty)(data, "resources", "object");
      (0, validate_1.validateProperty)(spec, "language", "string");
      (0, validate_1.validateProperty)(spec, "display_name", "string");
      (0, validate_1.validateProperty)(spec, "argv", "array");
      let metadata2 = null;
      if (spec.hasOwnProperty("metadata")) {
        (0, validate_1.validateProperty)(spec, "metadata", "object");
        metadata2 = spec.metadata;
      }
      let env2 = null;
      if (spec.hasOwnProperty("env")) {
        (0, validate_1.validateProperty)(spec, "env", "object");
        env2 = spec.env;
      }
      return {
        name: data.name,
        resources: data.resources,
        language: spec.language,
        display_name: spec.display_name,
        argv: spec.argv,
        metadata: metadata2,
        env: env2
      };
    }
    exports2.validateSpecModel = validateSpecModel;
    function validateSpecModels(data) {
      if (!data.hasOwnProperty("kernelspecs")) {
        throw new Error("No kernelspecs found");
      }
      let keys = Object.keys(data.kernelspecs);
      const kernelspecs = /* @__PURE__ */ Object.create(null);
      let defaultSpec = data.default;
      for (let i = 0; i < keys.length; i++) {
        const ks = data.kernelspecs[keys[i]];
        try {
          kernelspecs[keys[i]] = validateSpecModel(ks);
        } catch (err) {
          console.warn(`Removing errant kernel spec: ${keys[i]}`);
        }
      }
      keys = Object.keys(kernelspecs);
      if (!keys.length) {
        throw new Error("No valid kernelspecs found");
      }
      if (!defaultSpec || typeof defaultSpec !== "string" || !(defaultSpec in kernelspecs)) {
        defaultSpec = keys[0];
        console.warn(`Default kernel not found, using '${keys[0]}'`);
      }
      return {
        default: defaultSpec,
        kernelspecs
      };
    }
    exports2.validateSpecModels = validateSpecModels;
  }
});

// node_modules/@jupyterlab/services/lib/kernelspec/restapi.js
var require_restapi2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernelspec/restapi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSpecs = void 0;
    var serverconnection_1 = require_serverconnection();
    var validate_1 = require_validate4();
    var coreutils_12 = require_lib();
    var KERNELSPEC_SERVICE_URL = "api/kernelspecs";
    async function getSpecs(settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, KERNELSPEC_SERVICE_URL);
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      return (0, validate_1.validateSpecModels)(data);
    }
    exports2.getSpecs = getSpecs;
  }
});

// node_modules/@jupyterlab/services/lib/kernelspec/manager.js
var require_manager = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernelspec/manager.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelSpecManager = void 0;
    var coreutils_12 = require_dist2();
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var restapi = __importStar(require_restapi2());
    var basemanager_1 = require_basemanager();
    var KernelSpecManager2 = class extends basemanager_1.BaseManager {
      /**
       * Construct a new kernel spec manager.
       *
       * @param options - The default options for kernel.
       */
      constructor(options = {}) {
        var _a7;
        super(options);
        this._isReady = false;
        this._connectionFailure = new signaling_1.Signal(this);
        this._specs = null;
        this._specsChanged = new signaling_1.Signal(this);
        this._ready = Promise.all([this.requestSpecs()]).then((_) => void 0).catch((_) => void 0).then(() => {
          if (this.isDisposed) {
            return;
          }
          this._isReady = true;
        });
        this._pollSpecs = new polling_1.Poll({
          auto: false,
          factory: () => this.requestSpecs(),
          frequency: {
            interval: 61 * 1e3,
            backoff: true,
            max: 300 * 1e3
          },
          name: `@jupyterlab/services:KernelSpecManager#specs`,
          standby: (_a7 = options.standby) !== null && _a7 !== void 0 ? _a7 : "when-hidden"
        });
        void this.ready.then(() => {
          void this._pollSpecs.start();
        });
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._ready;
      }
      /**
       * Get the most recently fetched kernel specs.
       */
      get specs() {
        return this._specs;
      }
      /**
       * A signal emitted when the specs change.
       */
      get specsChanged() {
        return this._specsChanged;
      }
      /**
       * A signal emitted when there is a connection failure.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        this._pollSpecs.dispose();
        super.dispose();
      }
      /**
       * Force a refresh of the specs from the server.
       *
       * @returns A promise that resolves when the specs are fetched.
       *
       * #### Notes
       * This is intended to be called only in response to a user action,
       * since the manager maintains its internal state.
       */
      async refreshSpecs() {
        await this._pollSpecs.refresh();
        await this._pollSpecs.tick;
      }
      /**
       * Execute a request to the server to poll specs and update state.
       */
      async requestSpecs() {
        const specs = await restapi.getSpecs(this.serverSettings);
        if (this.isDisposed) {
          return;
        }
        if (!coreutils_12.JSONExt.deepEqual(specs, this._specs)) {
          this._specs = specs;
          this._specsChanged.emit(specs);
        }
      }
    };
    exports2.KernelSpecManager = KernelSpecManager2;
  }
});

// node_modules/@jupyterlab/services/lib/kernelspec/index.js
var require_kernelspec2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernelspec/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelSpecAPI = exports2.KernelSpec = void 0;
    var KernelSpec = __importStar(require_kernelspec());
    exports2.KernelSpec = KernelSpec;
    var KernelSpecAPI = __importStar(require_restapi2());
    exports2.KernelSpecAPI = KernelSpecAPI;
    __exportStar(require_manager(), exports2);
  }
});

// node_modules/@jupyterlab/services/lib/kernel/default.js
var require_default = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/default.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelConnection = void 0;
    var coreutils_12 = require_lib();
    var coreutils_2 = require_dist2();
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var comm_1 = require_comm();
    var KernelMessage = __importStar(require_messages());
    var future_1 = require_future();
    var validate = __importStar(require_validate3());
    var kernelspec_1 = require_kernelspec2();
    var restapi = __importStar(require_restapi());
    var KERNEL_INFO_TIMEOUT = 3e3;
    var RESTARTING_KERNEL_SESSION = "_RESTARTING_";
    var STARTING_KERNEL_SESSION = "";
    var KernelConnection = class _KernelConnection {
      /**
       * Construct a kernel object.
       */
      constructor(options) {
        var _a7, _b, _c, _d;
        this._createSocket = (useProtocols = true) => {
          this._errorIfDisposed();
          this._clearSocket();
          this._updateConnectionStatus("connecting");
          const settings = this.serverSettings;
          const partialUrl = coreutils_12.URLExt.join(settings.wsUrl, restapi.KERNEL_SERVICE_URL, encodeURIComponent(this._id));
          const display = partialUrl.replace(/^((?:\w+:)?\/\/)(?:[^@\/]+@)/, "$1");
          console.debug(`Starting WebSocket: ${display}`);
          let url = coreutils_12.URLExt.join(partialUrl, "channels?session_id=" + encodeURIComponent(this._clientId));
          const token = settings.token;
          if (settings.appendToken && token !== "") {
            url = url + `&token=${encodeURIComponent(token)}`;
          }
          const supportedProtocols = useProtocols ? this._supportedProtocols : [];
          this._ws = new settings.WebSocket(url, supportedProtocols);
          this._ws.binaryType = "arraybuffer";
          let alreadyCalledOnclose = false;
          const getKernelModel = async (evt) => {
            var _a8, _b2;
            if (this._isDisposed) {
              return;
            }
            this._reason = "";
            this._model = void 0;
            try {
              const model = await restapi.getKernelModel(this._id, settings);
              this._model = model;
              if ((model === null || model === void 0 ? void 0 : model.execution_state) === "dead") {
                this._updateStatus("dead");
              } else {
                this._onWSClose(evt);
              }
            } catch (err) {
              if (err instanceof __1.ServerConnection.NetworkError || ((_a8 = err.response) === null || _a8 === void 0 ? void 0 : _a8.status) === 503 || ((_b2 = err.response) === null || _b2 === void 0 ? void 0 : _b2.status) === 424) {
                const timeout = Private.getRandomIntInclusive(10, 30) * 1e3;
                setTimeout(getKernelModel, timeout, evt);
              } else {
                this._reason = "Kernel died unexpectedly";
                this._updateStatus("dead");
              }
            }
            return;
          };
          const earlyClose = async (evt) => {
            if (alreadyCalledOnclose) {
              return;
            }
            alreadyCalledOnclose = true;
            await getKernelModel(evt);
            return;
          };
          this._ws.onmessage = this._onWSMessage;
          this._ws.onopen = this._onWSOpen;
          this._ws.onclose = earlyClose;
          this._ws.onerror = earlyClose;
        };
        this._onWSOpen = (evt) => {
          if (this._ws.protocol !== "" && !this._supportedProtocols.includes(this._ws.protocol)) {
            console.log("Server selected unknown kernel wire protocol:", this._ws.protocol);
            this._updateStatus("dead");
            throw new Error(`Unknown kernel wire protocol:  ${this._ws.protocol}`);
          }
          this._selectedProtocol = this._ws.protocol;
          this._ws.onclose = this._onWSClose;
          this._ws.onerror = this._onWSClose;
          this._updateConnectionStatus("connected");
        };
        this._onWSMessage = (evt) => {
          let msg;
          try {
            msg = this.serverSettings.serializer.deserialize(evt.data, this._ws.protocol);
            validate.validateMessage(msg);
          } catch (error) {
            error.message = `Kernel message validation error: ${error.message}`;
            throw error;
          }
          this._kernelSession = msg.header.session;
          this._msgChain = this._msgChain.then(() => {
            return this._handleMessage(msg);
          }).catch((error) => {
            if (error.message.startsWith("Canceled future for ")) {
              console.error(error);
            }
          });
          this._anyMessage.emit({ msg, direction: "recv" });
        };
        this._onWSClose = (evt) => {
          if (!this.isDisposed) {
            this._reconnect();
          }
        };
        this._id = "";
        this._name = "";
        this._status = "unknown";
        this._connectionStatus = "connecting";
        this._kernelSession = "";
        this._isDisposed = false;
        this._ws = null;
        this._username = "";
        this._reconnectLimit = 7;
        this._reconnectAttempt = 0;
        this._reconnectTimeout = null;
        this._supportedProtocols = Object.values(KernelMessage.supportedKernelWebSocketProtocols);
        this._selectedProtocol = "";
        this._futures = /* @__PURE__ */ new Map();
        this._comms = /* @__PURE__ */ new Map();
        this._targetRegistry = /* @__PURE__ */ Object.create(null);
        this._info = new coreutils_2.PromiseDelegate();
        this._pendingMessages = [];
        this._statusChanged = new signaling_1.Signal(this);
        this._connectionStatusChanged = new signaling_1.Signal(this);
        this._disposed = new signaling_1.Signal(this);
        this._iopubMessage = new signaling_1.Signal(this);
        this._anyMessage = new signaling_1.Signal(this);
        this._pendingInput = new signaling_1.Signal(this);
        this._unhandledMessage = new signaling_1.Signal(this);
        this._displayIdToParentIds = /* @__PURE__ */ new Map();
        this._msgIdToDisplayIds = /* @__PURE__ */ new Map();
        this._msgChain = Promise.resolve();
        this._hasPendingInput = false;
        this._reason = "";
        this._noOp = () => {
        };
        this._name = options.model.name;
        this._id = options.model.id;
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : __1.ServerConnection.makeSettings();
        this._clientId = (_b = options.clientId) !== null && _b !== void 0 ? _b : coreutils_2.UUID.uuid4();
        this._username = (_c = options.username) !== null && _c !== void 0 ? _c : "";
        this.handleComms = (_d = options.handleComms) !== null && _d !== void 0 ? _d : true;
        this._createSocket();
      }
      get disposed() {
        return this._disposed;
      }
      /**
       * A signal emitted when the kernel status changes.
       */
      get statusChanged() {
        return this._statusChanged;
      }
      /**
       * A signal emitted when the kernel status changes.
       */
      get connectionStatusChanged() {
        return this._connectionStatusChanged;
      }
      /**
       * A signal emitted for iopub kernel messages.
       *
       * #### Notes
       * This signal is emitted after the iopub message is handled asynchronously.
       */
      get iopubMessage() {
        return this._iopubMessage;
      }
      /**
       * A signal emitted for unhandled kernel message.
       *
       * #### Notes
       * This signal is emitted for a message that was not handled. It is emitted
       * during the asynchronous message handling code.
       */
      get unhandledMessage() {
        return this._unhandledMessage;
      }
      /**
       * The kernel model
       */
      get model() {
        return this._model || {
          id: this.id,
          name: this.name,
          reason: this._reason
        };
      }
      /**
       * A signal emitted for any kernel message.
       *
       * #### Notes
       * This signal is emitted when a message is received, before it is handled
       * asynchronously.
       *
       * This message is emitted when a message is queued for sending (either in
       * the websocket buffer, or our own pending message buffer). The message may
       * actually be sent across the wire at a later time.
       *
       * The message emitted in this signal should not be modified in any way.
       */
      get anyMessage() {
        return this._anyMessage;
      }
      /**
       * A signal emitted when a kernel has pending inputs from the user.
       */
      get pendingInput() {
        return this._pendingInput;
      }
      /**
       * The id of the server-side kernel.
       */
      get id() {
        return this._id;
      }
      /**
       * The name of the server-side kernel.
       */
      get name() {
        return this._name;
      }
      /**
       * The client username.
       */
      get username() {
        return this._username;
      }
      /**
       * The client unique id.
       */
      get clientId() {
        return this._clientId;
      }
      /**
       * The current status of the kernel.
       */
      get status() {
        return this._status;
      }
      /**
       * The current connection status of the kernel connection.
       */
      get connectionStatus() {
        return this._connectionStatus;
      }
      /**
       * Test whether the kernel has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * The cached kernel info.
       *
       * @returns A promise that resolves to the kernel info.
       */
      get info() {
        return this._info.promise;
      }
      /**
       * The kernel spec.
       *
       * @returns A promise that resolves to the kernel spec.
       */
      get spec() {
        if (this._specPromise) {
          return this._specPromise;
        }
        this._specPromise = kernelspec_1.KernelSpecAPI.getSpecs(this.serverSettings).then((specs) => {
          return specs.kernelspecs[this._name];
        });
        return this._specPromise;
      }
      /**
       * Clone the current kernel with a new clientId.
       */
      clone(options = {}) {
        return new _KernelConnection({
          model: this.model,
          username: this.username,
          serverSettings: this.serverSettings,
          // handleComms defaults to false since that is safer
          handleComms: false,
          ...options
        });
      }
      /**
       * Dispose of the resources held by the kernel.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        this._disposed.emit();
        this._updateConnectionStatus("disconnected");
        this._clearKernelState();
        this._pendingMessages = [];
        this._clearSocket();
        signaling_1.Signal.clearData(this);
      }
      /**
       * Send a shell message to the kernel.
       *
       * #### Notes
       * Send a message to the kernel's shell channel, yielding a future object
       * for accepting replies.
       *
       * If `expectReply` is given and `true`, the future is disposed when both a
       * shell reply and an idle status message are received. If `expectReply`
       * is not given or is `false`, the future is resolved when an idle status
       * message is received.
       * If `disposeOnDone` is not given or is `true`, the Future is disposed at this point.
       * If `disposeOnDone` is given and `false`, it is up to the caller to dispose of the Future.
       *
       * All replies are validated as valid kernel messages.
       *
       * If the kernel status is `dead`, this will throw an error.
       */
      sendShellMessage(msg, expectReply = false, disposeOnDone = true) {
        return this._sendKernelShellControl(future_1.KernelShellFutureHandler, msg, expectReply, disposeOnDone);
      }
      /**
       * Send a control message to the kernel.
       *
       * #### Notes
       * Send a message to the kernel's control channel, yielding a future object
       * for accepting replies.
       *
       * If `expectReply` is given and `true`, the future is disposed when both a
       * control reply and an idle status message are received. If `expectReply`
       * is not given or is `false`, the future is resolved when an idle status
       * message is received.
       * If `disposeOnDone` is not given or is `true`, the Future is disposed at this point.
       * If `disposeOnDone` is given and `false`, it is up to the caller to dispose of the Future.
       *
       * All replies are validated as valid kernel messages.
       *
       * If the kernel status is `dead`, this will throw an error.
       */
      sendControlMessage(msg, expectReply = false, disposeOnDone = true) {
        return this._sendKernelShellControl(future_1.KernelControlFutureHandler, msg, expectReply, disposeOnDone);
      }
      _sendKernelShellControl(ctor, msg, expectReply = false, disposeOnDone = true) {
        this._sendMessage(msg);
        this._anyMessage.emit({ msg, direction: "send" });
        const future = new ctor(() => {
          const msgId = msg.header.msg_id;
          this._futures.delete(msgId);
          const displayIds = this._msgIdToDisplayIds.get(msgId);
          if (!displayIds) {
            return;
          }
          displayIds.forEach((displayId) => {
            const msgIds = this._displayIdToParentIds.get(displayId);
            if (msgIds) {
              const idx = msgIds.indexOf(msgId);
              if (idx === -1) {
                return;
              }
              if (msgIds.length === 1) {
                this._displayIdToParentIds.delete(displayId);
              } else {
                msgIds.splice(idx, 1);
                this._displayIdToParentIds.set(displayId, msgIds);
              }
            }
          });
          this._msgIdToDisplayIds.delete(msgId);
        }, msg, expectReply, disposeOnDone, this);
        this._futures.set(msg.header.msg_id, future);
        return future;
      }
      /**
       * Send a message on the websocket.
       *
       * If queue is true, queue the message for later sending if we cannot send
       * now. Otherwise throw an error.
       *
       * #### Notes
       * As an exception to the queueing, if we are sending a kernel_info_request
       * message while we think the kernel is restarting, we send the message
       * immediately without queueing. This is so that we can trigger a message
       * back, which will then clear the kernel restarting state.
       */
      _sendMessage(msg, queue = true) {
        if (this.status === "dead") {
          throw new Error("Kernel is dead");
        }
        if ((this._kernelSession === STARTING_KERNEL_SESSION || this._kernelSession === RESTARTING_KERNEL_SESSION) && KernelMessage.isInfoRequestMsg(msg)) {
          if (this.connectionStatus === "connected") {
            this._ws.send(this.serverSettings.serializer.serialize(msg, this._ws.protocol));
            return;
          } else {
            throw new Error("Could not send message: status is not connected");
          }
        }
        if (queue && this._pendingMessages.length > 0) {
          this._pendingMessages.push(msg);
          return;
        }
        if (this.connectionStatus === "connected" && this._kernelSession !== RESTARTING_KERNEL_SESSION) {
          this._ws.send(this.serverSettings.serializer.serialize(msg, this._ws.protocol));
        } else if (queue) {
          this._pendingMessages.push(msg);
        } else {
          throw new Error("Could not send message");
        }
      }
      /**
       * Interrupt a kernel.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/kernels).
       *
       * The promise is fulfilled on a valid response and rejected otherwise.
       *
       * It is assumed that the API call does not mutate the kernel id or name.
       *
       * The promise will be rejected if the kernel status is `Dead` or if the
       * request fails or the response is invalid.
       */
      async interrupt() {
        this.hasPendingInput = false;
        if (this.status === "dead") {
          throw new Error("Kernel is dead");
        }
        return restapi.interruptKernel(this.id, this.serverSettings);
      }
      /**
       * Request a kernel restart.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/kernels)
       * and validates the response model.
       *
       * Any existing Future or Comm objects are cleared once the kernel has
       * actually be restarted.
       *
       * The promise is fulfilled on a valid server response (after the kernel restarts)
       * and rejected otherwise.
       *
       * It is assumed that the API call does not mutate the kernel id or name.
       *
       * The promise will be rejected if the request fails or the response is
       * invalid.
       */
      async restart() {
        if (this.status === "dead") {
          throw new Error("Kernel is dead");
        }
        this._updateStatus("restarting");
        this._clearKernelState();
        this._kernelSession = RESTARTING_KERNEL_SESSION;
        await restapi.restartKernel(this.id, this.serverSettings);
        await this.reconnect();
        this.hasPendingInput = false;
      }
      /**
       * Reconnect to a kernel.
       *
       * #### Notes
       * This may try multiple times to reconnect to a kernel, and will sever any
       * existing connection.
       */
      reconnect() {
        this._errorIfDisposed();
        const result = new coreutils_2.PromiseDelegate();
        const fulfill = (sender, status) => {
          if (status === "connected") {
            result.resolve();
            this.connectionStatusChanged.disconnect(fulfill, this);
          } else if (status === "disconnected") {
            result.reject(new Error("Kernel connection disconnected"));
            this.connectionStatusChanged.disconnect(fulfill, this);
          }
        };
        this.connectionStatusChanged.connect(fulfill, this);
        this._reconnectAttempt = 0;
        this._reconnect();
        return result.promise;
      }
      /**
       * Shutdown a kernel.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/kernels).
       *
       * The promise is fulfilled on a valid response and rejected otherwise.
       *
       * On a valid response, disposes this kernel connection.
       *
       * If the kernel is already `dead`, disposes this kernel connection without
       * a server request.
       */
      async shutdown() {
        if (this.status !== "dead") {
          await restapi.shutdownKernel(this.id, this.serverSettings);
        }
        this.handleShutdown();
      }
      /**
       * Handles a kernel shutdown.
       *
       * #### Notes
       * This method should be called if we know from outside information that a
       * kernel is dead (for example, we cannot find the kernel model on the
       * server).
       */
      handleShutdown() {
        this._updateStatus("dead");
        this.dispose();
      }
      /**
       * Send a `kernel_info_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#kernel-info).
       *
       * Fulfills with the `kernel_info_response` content when the shell reply is
       * received and validated.
       */
      async requestKernelInfo() {
        const msg = KernelMessage.createMessage({
          msgType: "kernel_info_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content: {}
        });
        let reply;
        try {
          reply = await Private.handleShellMessage(this, msg);
        } catch (e) {
          if (this.isDisposed) {
            return;
          } else {
            throw e;
          }
        }
        this._errorIfDisposed();
        if (!reply) {
          return;
        }
        if (reply.content.status === void 0) {
          reply.content.status = "ok";
        }
        if (reply.content.status !== "ok") {
          this._info.reject("Kernel info reply errored");
          return reply;
        }
        this._info.resolve(reply.content);
        this._kernelSession = reply.header.session;
        return reply;
      }
      /**
       * Send a `complete_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#completion).
       *
       * Fulfills with the `complete_reply` content when the shell reply is
       * received and validated.
       */
      requestComplete(content) {
        const msg = KernelMessage.createMessage({
          msgType: "complete_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content
        });
        return Private.handleShellMessage(this, msg);
      }
      /**
       * Send an `inspect_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#introspection).
       *
       * Fulfills with the `inspect_reply` content when the shell reply is
       * received and validated.
       */
      requestInspect(content) {
        const msg = KernelMessage.createMessage({
          msgType: "inspect_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content
        });
        return Private.handleShellMessage(this, msg);
      }
      /**
       * Send a `history_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#history).
       *
       * Fulfills with the `history_reply` content when the shell reply is
       * received and validated.
       */
      requestHistory(content) {
        const msg = KernelMessage.createMessage({
          msgType: "history_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content
        });
        return Private.handleShellMessage(this, msg);
      }
      /**
       * Send an `execute_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#execute).
       *
       * Future `onReply` is called with the `execute_reply` content when the
       * shell reply is received and validated. The future will resolve when
       * this message is received and the `idle` iopub status is received.
       * The future will also be disposed at this point unless `disposeOnDone`
       * is specified and `false`, in which case it is up to the caller to dispose
       * of the future.
       *
       * **See also:** [[IExecuteReply]]
       */
      requestExecute(content, disposeOnDone = true, metadata2) {
        const defaults = {
          silent: false,
          store_history: true,
          user_expressions: {},
          allow_stdin: true,
          stop_on_error: false
        };
        const msg = KernelMessage.createMessage({
          msgType: "execute_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content: { ...defaults, ...content },
          metadata: metadata2
        });
        return this.sendShellMessage(msg, true, disposeOnDone);
      }
      /**
       * Send an experimental `debug_request` message.
       *
       * @hidden
       *
       * #### Notes
       * Debug messages are experimental messages that are not in the official
       * kernel message specification. As such, this function is *NOT* considered
       * part of the public API, and may change without notice.
       */
      requestDebug(content, disposeOnDone = true) {
        const msg = KernelMessage.createMessage({
          msgType: "debug_request",
          channel: "control",
          username: this._username,
          session: this._clientId,
          content
        });
        return this.sendControlMessage(msg, true, disposeOnDone);
      }
      /**
       * Send an `is_complete_request` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#code-completeness).
       *
       * Fulfills with the `is_complete_response` content when the shell reply is
       * received and validated.
       */
      requestIsComplete(content) {
        const msg = KernelMessage.createMessage({
          msgType: "is_complete_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content
        });
        return Private.handleShellMessage(this, msg);
      }
      /**
       * Send a `comm_info_request` message.
       *
       * #### Notes
       * Fulfills with the `comm_info_reply` content when the shell reply is
       * received and validated.
       */
      requestCommInfo(content) {
        const msg = KernelMessage.createMessage({
          msgType: "comm_info_request",
          channel: "shell",
          username: this._username,
          session: this._clientId,
          content
        });
        return Private.handleShellMessage(this, msg);
      }
      /**
       * Send an `input_reply` message.
       *
       * #### Notes
       * See [Messaging in Jupyter](https://jupyter-client.readthedocs.io/en/latest/messaging.html#messages-on-the-stdin-router-dealer-sockets).
       */
      sendInputReply(content, parent_header) {
        const msg = KernelMessage.createMessage({
          msgType: "input_reply",
          channel: "stdin",
          username: this._username,
          session: this._clientId,
          content
        });
        msg.parent_header = parent_header;
        this._sendMessage(msg);
        this._anyMessage.emit({ msg, direction: "send" });
        this.hasPendingInput = false;
      }
      /**
       * Create a new comm.
       *
       * #### Notes
       * If a client-side comm already exists with the given commId, an error is thrown.
       * If the kernel does not handle comms, an error is thrown.
       */
      createComm(targetName, commId = coreutils_2.UUID.uuid4()) {
        if (!this.handleComms) {
          throw new Error("Comms are disabled on this kernel connection");
        }
        if (this._comms.has(commId)) {
          throw new Error("Comm is already created");
        }
        const comm = new comm_1.CommHandler(targetName, commId, this, () => {
          this._unregisterComm(commId);
        });
        this._comms.set(commId, comm);
        return comm;
      }
      /**
       * Check if a comm exists.
       */
      hasComm(commId) {
        return this._comms.has(commId);
      }
      /**
       * Register a comm target handler.
       *
       * @param targetName - The name of the comm target.
       *
       * @param callback - The callback invoked for a comm open message.
       *
       * @returns A disposable used to unregister the comm target.
       *
       * #### Notes
       * Only one comm target can be registered to a target name at a time, an
       * existing callback for the same target name will be overridden.  A registered
       * comm target handler will take precedence over a comm which specifies a
       * `target_module`.
       *
       * If the callback returns a promise, kernel message processing will pause
       * until the returned promise is fulfilled.
       */
      registerCommTarget(targetName, callback) {
        if (!this.handleComms) {
          return;
        }
        this._targetRegistry[targetName] = callback;
      }
      /**
       * Remove a comm target handler.
       *
       * @param targetName - The name of the comm target to remove.
       *
       * @param callback - The callback to remove.
       *
       * #### Notes
       * The comm target is only removed if the callback argument matches.
       */
      removeCommTarget(targetName, callback) {
        if (!this.handleComms) {
          return;
        }
        if (!this.isDisposed && this._targetRegistry[targetName] === callback) {
          delete this._targetRegistry[targetName];
        }
      }
      /**
       * Register an IOPub message hook.
       *
       * @param msg_id - The parent_header message id the hook will intercept.
       *
       * @param hook - The callback invoked for the message.
       *
       * #### Notes
       * The IOPub hook system allows you to preempt the handlers for IOPub
       * messages that are responses to a given message id.
       *
       * The most recently registered hook is run first. A hook can return a
       * boolean or a promise to a boolean, in which case all kernel message
       * processing pauses until the promise is fulfilled. If a hook return value
       * resolves to false, any later hooks will not run and the function will
       * return a promise resolving to false. If a hook throws an error, the error
       * is logged to the console and the next hook is run. If a hook is
       * registered during the hook processing, it will not run until the next
       * message. If a hook is removed during the hook processing, it will be
       * deactivated immediately.
       *
       * See also [[IFuture.registerMessageHook]].
       */
      registerMessageHook(msgId, hook) {
        var _a7;
        const future = (_a7 = this._futures) === null || _a7 === void 0 ? void 0 : _a7.get(msgId);
        if (future) {
          future.registerMessageHook(hook);
        }
      }
      /**
       * Remove an IOPub message hook.
       *
       * @param msg_id - The parent_header message id the hook intercepted.
       *
       * @param hook - The callback invoked for the message.
       *
       */
      removeMessageHook(msgId, hook) {
        var _a7;
        const future = (_a7 = this._futures) === null || _a7 === void 0 ? void 0 : _a7.get(msgId);
        if (future) {
          future.removeMessageHook(hook);
        }
      }
      /**
       * Remove the input guard, if any.
       */
      removeInputGuard() {
        this.hasPendingInput = false;
      }
      /**
       * Handle a message with a display id.
       *
       * @returns Whether the message was handled.
       */
      async _handleDisplayId(displayId, msg) {
        var _a7, _b;
        const msgId = msg.parent_header.msg_id;
        let parentIds = this._displayIdToParentIds.get(displayId);
        if (parentIds) {
          const updateMsg = {
            header: coreutils_2.JSONExt.deepCopy(msg.header),
            parent_header: coreutils_2.JSONExt.deepCopy(msg.parent_header),
            metadata: coreutils_2.JSONExt.deepCopy(msg.metadata),
            content: coreutils_2.JSONExt.deepCopy(msg.content),
            channel: msg.channel,
            buffers: msg.buffers ? msg.buffers.slice() : []
          };
          updateMsg.header.msg_type = "update_display_data";
          await Promise.all(parentIds.map(async (parentId) => {
            const future = this._futures && this._futures.get(parentId);
            if (future) {
              await future.handleMsg(updateMsg);
            }
          }));
        }
        if (msg.header.msg_type === "update_display_data") {
          return true;
        }
        parentIds = (_a7 = this._displayIdToParentIds.get(displayId)) !== null && _a7 !== void 0 ? _a7 : [];
        if (parentIds.indexOf(msgId) === -1) {
          parentIds.push(msgId);
        }
        this._displayIdToParentIds.set(displayId, parentIds);
        const displayIds = (_b = this._msgIdToDisplayIds.get(msgId)) !== null && _b !== void 0 ? _b : [];
        if (displayIds.indexOf(msgId) === -1) {
          displayIds.push(msgId);
        }
        this._msgIdToDisplayIds.set(msgId, displayIds);
        return false;
      }
      /**
       * Forcefully clear the socket state.
       *
       * #### Notes
       * This will clear all socket state without calling any handlers and will
       * not update the connection status. If you call this method, you are
       * responsible for updating the connection status as needed and recreating
       * the socket if you plan to reconnect.
       */
      _clearSocket() {
        if (this._ws !== null) {
          this._ws.onopen = this._noOp;
          this._ws.onclose = this._noOp;
          this._ws.onerror = this._noOp;
          this._ws.onmessage = this._noOp;
          this._ws.close();
          this._ws = null;
        }
      }
      /**
       * Handle status iopub messages from the kernel.
       */
      _updateStatus(status) {
        if (this._status === status || this._status === "dead") {
          return;
        }
        this._status = status;
        Private.logKernelStatus(this);
        this._statusChanged.emit(status);
        if (status === "dead") {
          this.dispose();
        }
      }
      /**
       * Send pending messages to the kernel.
       */
      _sendPending() {
        while (this.connectionStatus === "connected" && this._kernelSession !== RESTARTING_KERNEL_SESSION && this._pendingMessages.length > 0) {
          this._sendMessage(this._pendingMessages[0], false);
          this._pendingMessages.shift();
        }
      }
      /**
       * Clear the internal state.
       */
      _clearKernelState() {
        this._kernelSession = "";
        this._pendingMessages = [];
        this._futures.forEach((future) => {
          future.dispose();
        });
        this._comms.forEach((comm) => {
          comm.dispose();
        });
        this._msgChain = Promise.resolve();
        this._futures = /* @__PURE__ */ new Map();
        this._comms = /* @__PURE__ */ new Map();
        this._displayIdToParentIds.clear();
        this._msgIdToDisplayIds.clear();
      }
      /**
       * Check to make sure it is okay to proceed to handle a message.
       *
       * #### Notes
       * Because we handle messages asynchronously, before a message is handled the
       * kernel might be disposed or restarted (and have a different session id).
       * This function throws an error in each of these cases. This is meant to be
       * called at the start of an asynchronous message handler to cancel message
       * processing if the message no longer is valid.
       */
      _assertCurrentMessage(msg) {
        this._errorIfDisposed();
        if (msg.header.session !== this._kernelSession) {
          throw new Error(`Canceling handling of old message: ${msg.header.msg_type}`);
        }
      }
      /**
       * Handle a `comm_open` kernel message.
       */
      async _handleCommOpen(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = new comm_1.CommHandler(content.target_name, content.comm_id, this, () => {
          this._unregisterComm(content.comm_id);
        });
        this._comms.set(content.comm_id, comm);
        try {
          const target = await Private.loadObject(content.target_name, content.target_module, this._targetRegistry);
          await target(comm, msg);
        } catch (e) {
          comm.close();
          console.error("Exception opening new comm");
          throw e;
        }
      }
      /**
       * Handle 'comm_close' kernel message.
       */
      async _handleCommClose(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = this._comms.get(content.comm_id);
        if (!comm) {
          console.error("Comm not found for comm id " + content.comm_id);
          return;
        }
        this._unregisterComm(comm.commId);
        const onClose = comm.onClose;
        if (onClose) {
          await onClose(msg);
        }
        comm.dispose();
      }
      /**
       * Handle a 'comm_msg' kernel message.
       */
      async _handleCommMsg(msg) {
        this._assertCurrentMessage(msg);
        const content = msg.content;
        const comm = this._comms.get(content.comm_id);
        if (!comm) {
          return;
        }
        const onMsg = comm.onMsg;
        if (onMsg) {
          await onMsg(msg);
        }
      }
      /**
       * Unregister a comm instance.
       */
      _unregisterComm(commId) {
        this._comms.delete(commId);
      }
      /**
       * Handle connection status changes.
       */
      _updateConnectionStatus(connectionStatus) {
        if (this._connectionStatus === connectionStatus) {
          return;
        }
        this._connectionStatus = connectionStatus;
        if (connectionStatus !== "connecting") {
          this._reconnectAttempt = 0;
          clearTimeout(this._reconnectTimeout);
        }
        if (this.status !== "dead") {
          if (connectionStatus === "connected") {
            let restarting = this._kernelSession === RESTARTING_KERNEL_SESSION;
            let p = this.requestKernelInfo();
            let sendPendingCalled = false;
            let sendPendingOnce = () => {
              if (sendPendingCalled) {
                return;
              }
              sendPendingCalled = true;
              if (restarting && this._kernelSession === RESTARTING_KERNEL_SESSION) {
                this._kernelSession = "";
              }
              clearTimeout(timeoutHandle);
              if (this._pendingMessages.length > 0) {
                this._sendPending();
              }
            };
            void p.then(sendPendingOnce);
            let timeoutHandle = setTimeout(sendPendingOnce, KERNEL_INFO_TIMEOUT);
          } else {
            this._updateStatus("unknown");
          }
        }
        this._connectionStatusChanged.emit(connectionStatus);
      }
      async _handleMessage(msg) {
        var _a7, _b;
        let handled = false;
        if (msg.parent_header && msg.channel === "iopub" && (KernelMessage.isDisplayDataMsg(msg) || KernelMessage.isUpdateDisplayDataMsg(msg) || KernelMessage.isExecuteResultMsg(msg))) {
          const transient = (_a7 = msg.content.transient) !== null && _a7 !== void 0 ? _a7 : {};
          const displayId = transient["display_id"];
          if (displayId) {
            handled = await this._handleDisplayId(displayId, msg);
            this._assertCurrentMessage(msg);
          }
        }
        if (!handled && msg.parent_header) {
          const parentHeader = msg.parent_header;
          const future = (_b = this._futures) === null || _b === void 0 ? void 0 : _b.get(parentHeader.msg_id);
          if (future) {
            await future.handleMsg(msg);
            this._assertCurrentMessage(msg);
          } else {
            const owned = parentHeader.session === this.clientId;
            if (msg.channel !== "iopub" && owned) {
              this._unhandledMessage.emit(msg);
            }
          }
        }
        if (msg.channel === "iopub") {
          switch (msg.header.msg_type) {
            case "status": {
              const executionState = msg.content.execution_state;
              if (executionState === "restarting") {
                void Promise.resolve().then(async () => {
                  this._updateStatus("autorestarting");
                  this._clearKernelState();
                  await this.reconnect();
                });
              }
              this._updateStatus(executionState);
              break;
            }
            case "comm_open":
              if (this.handleComms) {
                await this._handleCommOpen(msg);
              }
              break;
            case "comm_msg":
              if (this.handleComms) {
                await this._handleCommMsg(msg);
              }
              break;
            case "comm_close":
              if (this.handleComms) {
                await this._handleCommClose(msg);
              }
              break;
            default:
              break;
          }
          if (!this.isDisposed) {
            this._assertCurrentMessage(msg);
            this._iopubMessage.emit(msg);
          }
        }
      }
      /**
       * Attempt a connection if we have not exhausted connection attempts.
       */
      _reconnect() {
        this._errorIfDisposed();
        clearTimeout(this._reconnectTimeout);
        if (this._reconnectAttempt < this._reconnectLimit) {
          this._updateConnectionStatus("connecting");
          const timeout = Private.getRandomIntInclusive(0, 1e3 * (Math.pow(2, this._reconnectAttempt) - 1));
          console.warn(`Connection lost, reconnecting in ${Math.floor(timeout / 1e3)} seconds.`);
          const useProtocols = this._selectedProtocol !== "" ? true : false;
          this._reconnectTimeout = setTimeout(this._createSocket, timeout, useProtocols);
          this._reconnectAttempt += 1;
        } else {
          this._updateConnectionStatus("disconnected");
        }
        this._clearSocket();
      }
      /**
       * Utility function to throw an error if this instance is disposed.
       */
      _errorIfDisposed() {
        if (this.isDisposed) {
          throw new Error("Kernel connection is disposed");
        }
      }
      get hasPendingInput() {
        return this._hasPendingInput;
      }
      set hasPendingInput(value) {
        this._hasPendingInput = value;
        this._pendingInput.emit(value);
      }
    };
    exports2.KernelConnection = KernelConnection;
    var Private;
    (function(Private2) {
      function logKernelStatus(kernel) {
        switch (kernel.status) {
          case "idle":
          case "busy":
          case "unknown":
            return;
          default:
            console.debug(`Kernel: ${kernel.status} (${kernel.id})`);
            break;
        }
      }
      Private2.logKernelStatus = logKernelStatus;
      async function handleShellMessage(kernel, msg) {
        const future = kernel.sendShellMessage(msg, true);
        return future.done;
      }
      Private2.handleShellMessage = handleShellMessage;
      function loadObject(name2, moduleName, registry) {
        return new Promise((resolve, reject) => {
          if (moduleName) {
            if (typeof requirejs === "undefined") {
              throw new Error("requirejs not found");
            }
            requirejs([moduleName], (mod) => {
              if (mod[name2] === void 0) {
                const msg = `Object '${name2}' not found in module '${moduleName}'`;
                reject(new Error(msg));
              } else {
                resolve(mod[name2]);
              }
            }, reject);
          } else {
            if (registry === null || registry === void 0 ? void 0 : registry[name2]) {
              resolve(registry[name2]);
            } else {
              reject(new Error(`Object '${name2}' not found in registry`));
            }
          }
        });
      }
      Private2.loadObject = loadObject;
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      Private2.getRandomIntInclusive = getRandomIntInclusive;
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/kernel/manager.js
var require_manager2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/manager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelManager = void 0;
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var basemanager_1 = require_basemanager();
    var restapi_1 = require_restapi();
    var default_1 = require_default();
    var KernelManager2 = class extends basemanager_1.BaseManager {
      /**
       * Construct a new kernel manager.
       *
       * @param options - The default options for kernel.
       */
      constructor(options = {}) {
        var _a7;
        super(options);
        this._isReady = false;
        this._kernelConnections = /* @__PURE__ */ new Set();
        this._models = /* @__PURE__ */ new Map();
        this._runningChanged = new signaling_1.Signal(this);
        this._connectionFailure = new signaling_1.Signal(this);
        this._pollModels = new polling_1.Poll({
          auto: false,
          factory: () => this.requestRunning(),
          frequency: {
            interval: 10 * 1e3,
            backoff: true,
            max: 300 * 1e3
          },
          name: `@jupyterlab/services:KernelManager#models`,
          standby: (_a7 = options.standby) !== null && _a7 !== void 0 ? _a7 : "when-hidden"
        });
        this._ready = (async () => {
          await this._pollModels.start();
          await this._pollModels.tick;
          this._isReady = true;
        })();
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._ready;
      }
      /**
       * A signal emitted when the running kernels change.
       */
      get runningChanged() {
        return this._runningChanged;
      }
      /**
       * A signal emitted when there is a connection failure.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._models.clear();
        this._kernelConnections.forEach((x) => x.dispose());
        this._pollModels.dispose();
        super.dispose();
      }
      /**
       * Connect to an existing kernel.
       *
       * @returns The new kernel connection.
       *
       * #### Notes
       * This will use the manager's server settings and ignore any server
       * settings passed in the options.
       */
      connectTo(options) {
        var _a7;
        const { id } = options.model;
        let handleComms = (_a7 = options.handleComms) !== null && _a7 !== void 0 ? _a7 : true;
        if (options.handleComms === void 0) {
          for (const kc of this._kernelConnections) {
            if (kc.id === id && kc.handleComms) {
              handleComms = false;
              break;
            }
          }
        }
        const kernelConnection = new default_1.KernelConnection({
          handleComms,
          ...options,
          serverSettings: this.serverSettings
        });
        this._onStarted(kernelConnection);
        if (!this._models.has(id)) {
          void this.refreshRunning().catch(() => {
          });
        }
        return kernelConnection;
      }
      /**
       * Create an iterator over the most recent running kernels.
       *
       * @returns A new iterator over the running kernels.
       */
      running() {
        return this._models.values();
      }
      /**
       * Force a refresh of the running kernels.
       *
       * @returns A promise that resolves when the running list has been refreshed.
       *
       * #### Notes
       * This is not typically meant to be called by the user, since the
       * manager maintains its own internal state.
       */
      async refreshRunning() {
        await this._pollModels.refresh();
        await this._pollModels.tick;
      }
      /**
       * Start a new kernel.
       *
       * @param createOptions - The kernel creation options
       *
       * @param connectOptions - The kernel connection options
       *
       * @returns A promise that resolves with the kernel connection.
       *
       * #### Notes
       * The manager `serverSettings` will be always be used.
       */
      async startNew(createOptions = {}, connectOptions = {}) {
        const model = await (0, restapi_1.startNew)(createOptions, this.serverSettings);
        return this.connectTo({
          ...connectOptions,
          model
        });
      }
      /**
       * Shut down a kernel by id.
       *
       * @param id - The id of the target kernel.
       *
       * @returns A promise that resolves when the operation is complete.
       */
      async shutdown(id) {
        await (0, restapi_1.shutdownKernel)(id, this.serverSettings);
        await this.refreshRunning();
      }
      /**
       * Shut down all kernels.
       *
       * @returns A promise that resolves when all of the kernels are shut down.
       */
      async shutdownAll() {
        await this.refreshRunning();
        await Promise.all([...this._models.keys()].map((id) => (0, restapi_1.shutdownKernel)(id, this.serverSettings)));
        await this.refreshRunning();
      }
      /**
       * Find a kernel by id.
       *
       * @param id - The id of the target kernel.
       *
       * @returns A promise that resolves with the kernel's model.
       */
      async findById(id) {
        if (this._models.has(id)) {
          return this._models.get(id);
        }
        await this.refreshRunning();
        return this._models.get(id);
      }
      /**
       * Execute a request to the server to poll running kernels and update state.
       */
      async requestRunning() {
        var _a7, _b;
        let models;
        try {
          models = await (0, restapi_1.listRunning)(this.serverSettings);
        } catch (err) {
          if (err instanceof __1.ServerConnection.NetworkError || ((_a7 = err.response) === null || _a7 === void 0 ? void 0 : _a7.status) === 503 || ((_b = err.response) === null || _b === void 0 ? void 0 : _b.status) === 424) {
            this._connectionFailure.emit(err);
          }
          throw err;
        }
        if (this.isDisposed) {
          return;
        }
        if (this._models.size === models.length && models.every((model) => {
          const existing = this._models.get(model.id);
          if (!existing) {
            return false;
          }
          return existing.connections === model.connections && existing.execution_state === model.execution_state && existing.last_activity === model.last_activity && existing.name === model.name && existing.reason === model.reason && existing.traceback === model.traceback;
        })) {
          return;
        }
        this._models = new Map(models.map((x) => [x.id, x]));
        this._kernelConnections.forEach((kc) => {
          if (!this._models.has(kc.id)) {
            kc.handleShutdown();
          }
        });
        this._runningChanged.emit(models);
      }
      /**
       * Handle a kernel starting.
       */
      _onStarted(kernelConnection) {
        this._kernelConnections.add(kernelConnection);
        kernelConnection.statusChanged.connect(this._onStatusChanged, this);
        kernelConnection.disposed.connect(this._onDisposed, this);
      }
      _onDisposed(kernelConnection) {
        this._kernelConnections.delete(kernelConnection);
        void this.refreshRunning().catch(() => {
        });
      }
      _onStatusChanged(kernelConnection, status) {
        if (status === "dead") {
          void this.refreshRunning().catch(() => {
          });
        }
      }
    };
    exports2.KernelManager = KernelManager2;
    (function(KernelManager3) {
      class NoopManager extends KernelManager3 {
        constructor() {
          super(...arguments);
          this._readyPromise = new Promise(() => {
          });
        }
        /**
         * Whether the manager is active.
         */
        get isActive() {
          return false;
        }
        /**
         * Used for testing.
         */
        get parentReady() {
          return super.ready;
        }
        /**
         * Start a new kernel - throws an error since it is not supported.
         */
        async startNew(createOptions = {}, connectOptions = {}) {
          return Promise.reject(new Error("Not implemented in no-op Kernel Manager"));
        }
        /**
         * Connect to an existing kernel - throws an error since it is not supported.
         */
        connectTo(options) {
          throw new Error("Not implemented in no-op Kernel Manager");
        }
        /**
         * Shut down a kernel by id - throws an error since it is not supported.
         */
        async shutdown(id) {
          return Promise.reject(new Error("Not implemented in no-op Kernel Manager"));
        }
        /**
         * A promise that fulfills when the manager is ready (never).
         */
        get ready() {
          return this.parentReady.then(() => this._readyPromise);
        }
        /**
         * Execute a request to the server to poll running kernels and update state.
         */
        async requestRunning() {
          return Promise.resolve();
        }
      }
      KernelManager3.NoopManager = NoopManager;
    })(KernelManager2 || (exports2.KernelManager = KernelManager2 = {}));
  }
});

// node_modules/@jupyterlab/services/lib/kernel/index.js
var require_kernel2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/kernel/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.KernelConnection = exports2.KernelAPI = exports2.KernelMessage = exports2.Kernel = void 0;
    var Kernel = __importStar(require_kernel());
    exports2.Kernel = Kernel;
    var KernelMessage = __importStar(require_messages());
    exports2.KernelMessage = KernelMessage;
    var KernelAPI = __importStar(require_restapi());
    exports2.KernelAPI = KernelAPI;
    var default_1 = require_default();
    Object.defineProperty(exports2, "KernelConnection", { enumerable: true, get: function() {
      return default_1.KernelConnection;
    } });
    __exportStar(require_manager2(), exports2);
  }
});

// node_modules/@jupyterlab/services/lib/builder/index.js
var require_builder = __commonJS({
  "node_modules/@jupyterlab/services/lib/builder/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BuildManager = void 0;
    var coreutils_12 = require_lib();
    var serverconnection_1 = require_serverconnection();
    var BUILD_SETTINGS_URL = "api/build";
    var BuildManager = class {
      /**
       * Create a new setting manager.
       */
      constructor(options = {}) {
        var _a7;
        this._url = "";
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
        const { baseUrl, appUrl } = this.serverSettings;
        this._url = coreutils_12.URLExt.join(baseUrl, appUrl, BUILD_SETTINGS_URL);
      }
      /**
       * Test whether the build service is available.
       */
      get isAvailable() {
        return coreutils_12.PageConfig.getOption("buildAvailable").toLowerCase() === "true";
      }
      /**
       * Test whether to check build status automatically.
       */
      get shouldCheck() {
        return coreutils_12.PageConfig.getOption("buildCheck").toLowerCase() === "true";
      }
      /**
       * Get whether the application should be built.
       */
      getStatus() {
        const { _url, serverSettings } = this;
        const promise = serverconnection_1.ServerConnection.makeRequest(_url, {}, serverSettings);
        return promise.then((response) => {
          if (response.status !== 200) {
            throw new serverconnection_1.ServerConnection.ResponseError(response);
          }
          return response.json();
        }).then((data) => {
          if (typeof data.status !== "string") {
            throw new Error("Invalid data");
          }
          if (typeof data.message !== "string") {
            throw new Error("Invalid data");
          }
          return data;
        });
      }
      /**
       * Build the application.
       */
      build() {
        const { _url, serverSettings } = this;
        const init = { method: "POST" };
        const promise = serverconnection_1.ServerConnection.makeRequest(_url, init, serverSettings);
        return promise.then((response) => {
          if (response.status === 400) {
            throw new serverconnection_1.ServerConnection.ResponseError(response, "Build aborted");
          }
          if (response.status !== 200) {
            const message = `Build failed with ${response.status}.

        If you are experiencing the build failure after installing an extension (or trying to include previously installed extension after updating JupyterLab) please check the extension repository for new installation instructions as many extensions migrated to the prebuilt extensions system which no longer requires rebuilding JupyterLab (but uses a different installation procedure, typically involving a package manager such as 'pip' or 'conda').

        If you specifically intended to install a source extension, please run 'jupyter lab build' on the server for full output.`;
            throw new serverconnection_1.ServerConnection.ResponseError(response, message);
          }
        });
      }
      /**
       * Cancel an active build.
       */
      cancel() {
        const { _url, serverSettings } = this;
        const init = { method: "DELETE" };
        const promise = serverconnection_1.ServerConnection.makeRequest(_url, init, serverSettings);
        return promise.then((response) => {
          if (response.status !== 204) {
            throw new serverconnection_1.ServerConnection.ResponseError(response);
          }
        });
      }
    };
    exports2.BuildManager = BuildManager;
  }
});

// node_modules/@jupyterlab/services/lib/nbconvert/index.js
var require_nbconvert = __commonJS({
  "node_modules/@jupyterlab/services/lib/nbconvert/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NbConvertManager = void 0;
    var coreutils_12 = require_lib();
    var serverconnection_1 = require_serverconnection();
    var coreutils_2 = require_dist2();
    var NBCONVERT_SETTINGS_URL = "api/nbconvert";
    var NbConvertManager = class {
      /**
       * Create a new nbconvert manager.
       */
      constructor(options = {}) {
        var _a7;
        this._exportFormats = null;
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
      }
      /**
       * Fetch and cache the export formats from the expensive nbconvert handler.
       */
      async fetchExportFormats() {
        this._requestingFormats = new coreutils_2.PromiseDelegate();
        this._exportFormats = null;
        const base = this.serverSettings.baseUrl;
        const url = coreutils_12.URLExt.join(base, NBCONVERT_SETTINGS_URL);
        const { serverSettings } = this;
        const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, serverSettings);
        if (response.status !== 200) {
          const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
          throw err;
        }
        const data = await response.json();
        const exportList = {};
        const keys = Object.keys(data);
        keys.forEach(function(key) {
          const mimeType = data[key].output_mimetype;
          exportList[key] = { output_mimetype: mimeType };
        });
        this._exportFormats = exportList;
        this._requestingFormats.resolve(exportList);
        return exportList;
      }
      /**
       * Get the list of export formats, preferring pre-cached ones.
       */
      async getExportFormats(force = true) {
        if (this._requestingFormats) {
          return this._requestingFormats.promise;
        }
        if (force || !this._exportFormats) {
          return await this.fetchExportFormats();
        }
        return this._exportFormats;
      }
    };
    exports2.NbConvertManager = NbConvertManager;
  }
});

// node_modules/@jupyterlab/services/lib/session/session.js
var require_session = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/session.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@jupyterlab/services/lib/session/validate.js
var require_validate5 = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/validate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateModels = exports2.updateLegacySessionModel = exports2.validateModel = void 0;
    var validate_1 = require_validate3();
    var validate_2 = require_validate();
    function validateModel(data) {
      (0, validate_2.validateProperty)(data, "id", "string");
      (0, validate_2.validateProperty)(data, "type", "string");
      (0, validate_2.validateProperty)(data, "name", "string");
      (0, validate_2.validateProperty)(data, "path", "string");
      (0, validate_2.validateProperty)(data, "kernel", "object");
      (0, validate_1.validateModel)(data.kernel);
    }
    exports2.validateModel = validateModel;
    function updateLegacySessionModel(data) {
      if (data.path === void 0 && data.notebook !== void 0) {
        data.path = data.notebook.path;
        data.type = "notebook";
        data.name = "";
      }
    }
    exports2.updateLegacySessionModel = updateLegacySessionModel;
    function validateModels(models) {
      if (!Array.isArray(models)) {
        throw new Error("Invalid session list");
      }
      models.forEach((d) => validateModel(d));
    }
    exports2.validateModels = validateModels;
  }
});

// node_modules/@jupyterlab/services/lib/session/restapi.js
var require_restapi3 = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/restapi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.updateSession = exports2.startSession = exports2.getSessionModel = exports2.shutdownSession = exports2.getSessionUrl = exports2.listRunning = exports2.SESSION_SERVICE_URL = void 0;
    var serverconnection_1 = require_serverconnection();
    var coreutils_12 = require_lib();
    var validate_1 = require_validate5();
    exports2.SESSION_SERVICE_URL = "api/sessions";
    async function listRunning(settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.SESSION_SERVICE_URL);
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid Session list");
      }
      data.forEach((m) => {
        (0, validate_1.updateLegacySessionModel)(m);
        (0, validate_1.validateModel)(m);
      });
      return data;
    }
    exports2.listRunning = listRunning;
    function getSessionUrl(baseUrl, id) {
      const servicesBase = coreutils_12.URLExt.join(baseUrl, exports2.SESSION_SERVICE_URL);
      const result = coreutils_12.URLExt.join(servicesBase, id);
      if (!result.startsWith(servicesBase)) {
        throw new Error("Can only be used for services requests");
      }
      return result;
    }
    exports2.getSessionUrl = getSessionUrl;
    async function shutdownSession(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      var _a7;
      const url = getSessionUrl(settings.baseUrl, id);
      const init = { method: "DELETE" };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status === 404) {
        const data = await response.json();
        const msg = (_a7 = data.message) !== null && _a7 !== void 0 ? _a7 : `The session "${id}"" does not exist on the server`;
        console.warn(msg);
      } else if (response.status === 410) {
        throw new serverconnection_1.ServerConnection.ResponseError(response, "The kernel was deleted but the session was not");
      } else if (response.status !== 204) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
    }
    exports2.shutdownSession = shutdownSession;
    async function getSessionModel(id, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = getSessionUrl(settings.baseUrl, id);
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.updateLegacySessionModel)(data);
      (0, validate_1.validateModel)(data);
      return data;
    }
    exports2.getSessionModel = getSessionModel;
    async function startSession(options, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.SESSION_SERVICE_URL);
      const init = {
        method: "POST",
        body: JSON.stringify(options)
      };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 201) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.updateLegacySessionModel)(data);
      (0, validate_1.validateModel)(data);
      return data;
    }
    exports2.startSession = startSession;
    async function updateSession(model, settings = serverconnection_1.ServerConnection.makeSettings()) {
      const url = getSessionUrl(settings.baseUrl, model.id);
      const init = {
        method: "PATCH",
        body: JSON.stringify(model)
      };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      (0, validate_1.updateLegacySessionModel)(data);
      (0, validate_1.validateModel)(data);
      return data;
    }
    exports2.updateSession = updateSession;
  }
});

// node_modules/@jupyterlab/services/lib/session/default.js
var require_default2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/default.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SessionConnection = void 0;
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var restapi_1 = require_restapi3();
    var coreutils_12 = require_dist2();
    var SessionConnection = class {
      /**
       * Construct a new session.
       */
      constructor(options) {
        var _a7, _b, _c, _d;
        this._id = "";
        this._path = "";
        this._name = "";
        this._type = "";
        this._kernel = null;
        this._isDisposed = false;
        this._disposed = new signaling_1.Signal(this);
        this._kernelChanged = new signaling_1.Signal(this);
        this._statusChanged = new signaling_1.Signal(this);
        this._connectionStatusChanged = new signaling_1.Signal(this);
        this._pendingInput = new signaling_1.Signal(this);
        this._iopubMessage = new signaling_1.Signal(this);
        this._unhandledMessage = new signaling_1.Signal(this);
        this._anyMessage = new signaling_1.Signal(this);
        this._propertyChanged = new signaling_1.Signal(this);
        this._id = options.model.id;
        this._name = options.model.name;
        this._path = options.model.path;
        this._type = options.model.type;
        this._username = (_a7 = options.username) !== null && _a7 !== void 0 ? _a7 : "";
        this._clientId = (_b = options.clientId) !== null && _b !== void 0 ? _b : coreutils_12.UUID.uuid4();
        this._connectToKernel = options.connectToKernel;
        this._kernelConnectionOptions = (_c = options.kernelConnectionOptions) !== null && _c !== void 0 ? _c : {};
        this.serverSettings = (_d = options.serverSettings) !== null && _d !== void 0 ? _d : __1.ServerConnection.makeSettings();
        this.setupKernel(options.model.kernel);
      }
      /**
       * A signal emitted when the session is disposed.
       */
      get disposed() {
        return this._disposed;
      }
      /**
       * A signal emitted when the kernel changes.
       */
      get kernelChanged() {
        return this._kernelChanged;
      }
      /**
       * A signal proxied from the connection about the kernel status.
       */
      get statusChanged() {
        return this._statusChanged;
      }
      /**
       * A signal proxied from the kernel about the connection status.
       */
      get connectionStatusChanged() {
        return this._connectionStatusChanged;
      }
      /**
       * A signal proxied from the kernel pending input.
       */
      get pendingInput() {
        return this._pendingInput;
      }
      /**
       * A signal proxied from the kernel about iopub kernel messages.
       */
      get iopubMessage() {
        return this._iopubMessage;
      }
      /**
       * A signal proxied from the kernel for an unhandled kernel message.
       */
      get unhandledMessage() {
        return this._unhandledMessage;
      }
      /**
       * A signal proxied from the kernel emitted for any kernel message.
       *
       * #### Notes
       * The behavior is undefined if the message is modified during message
       * handling. As such, it should be treated as read-only.
       */
      get anyMessage() {
        return this._anyMessage;
      }
      /**
       * A signal emitted when a session property changes.
       */
      get propertyChanged() {
        return this._propertyChanged;
      }
      /**
       * Get the session id.
       */
      get id() {
        return this._id;
      }
      /**
       * Get the session kernel connection object.
       *
       * #### Notes
       * This is a read-only property, and can be altered by [changeKernel].
       */
      get kernel() {
        return this._kernel;
      }
      /**
       * Get the session path.
       */
      get path() {
        return this._path;
      }
      /**
       * Get the session type.
       */
      get type() {
        return this._type;
      }
      /**
       * Get the session name.
       */
      get name() {
        return this._name;
      }
      /**
       * Get the model associated with the session.
       */
      get model() {
        return {
          id: this.id,
          kernel: this.kernel && { id: this.kernel.id, name: this.kernel.name },
          path: this._path,
          type: this._type,
          name: this._name
        };
      }
      /**
       * Test whether the session has been disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Update the session based on a session model from the server.
       *
       * #### Notes
       * This only updates this session connection instance. Use `setPath`,
       * `setName`, `setType`, and `changeKernel` to change the session values on
       * the server.
       */
      update(model) {
        const oldModel = this.model;
        this._path = model.path;
        this._name = model.name;
        this._type = model.type;
        if (this._kernel === null && model.kernel !== null || this._kernel !== null && model.kernel === null || this._kernel !== null && model.kernel !== null && this._kernel.id !== model.kernel.id) {
          if (this._kernel !== null) {
            this._kernel.dispose();
          }
          const oldValue = this._kernel || null;
          this.setupKernel(model.kernel);
          const newValue = this._kernel || null;
          this._kernelChanged.emit({ name: "kernel", oldValue, newValue });
        }
        this._handleModelChange(oldModel);
      }
      /**
       * Dispose of the resources held by the session.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        this._disposed.emit();
        if (this._kernel) {
          this._kernel.dispose();
          const oldValue = this._kernel;
          this._kernel = null;
          const newValue = this._kernel;
          this._kernelChanged.emit({ name: "kernel", oldValue, newValue });
        }
        signaling_1.Signal.clearData(this);
      }
      /**
       * Change the session path.
       *
       * @param path - The new session path.
       *
       * @returns A promise that resolves when the session has renamed.
       *
       * #### Notes
       * This uses the Jupyter REST API, and the response is validated.
       * The promise is fulfilled on a valid response and rejected otherwise.
       */
      async setPath(path2) {
        if (this.isDisposed) {
          throw new Error("Session is disposed");
        }
        await this._patch({ path: path2 });
      }
      /**
       * Change the session name.
       */
      async setName(name2) {
        if (this.isDisposed) {
          throw new Error("Session is disposed");
        }
        await this._patch({ name: name2 });
      }
      /**
       * Change the session type.
       */
      async setType(type) {
        if (this.isDisposed) {
          throw new Error("Session is disposed");
        }
        await this._patch({ type });
      }
      /**
       * Change the kernel.
       *
       * @param options - The name or id of the new kernel.
       *
       * #### Notes
       * This shuts down the existing kernel and creates a new kernel,
       * keeping the existing session ID and session path.
       */
      async changeKernel(options) {
        if (this.isDisposed) {
          throw new Error("Session is disposed");
        }
        await this._patch({ kernel: options });
        return this.kernel;
      }
      /**
       * Kill the kernel and shutdown the session.
       *
       * @returns - The promise fulfilled on a valid response from the server.
       *
       * #### Notes
       * Uses the [Jupyter Server API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/jupyter-server/jupyter_server/main/jupyter_server/services/api/api.yaml#!/sessions), and validates the response.
       * Disposes of the session and emits a [sessionDied] signal on success.
       */
      async shutdown() {
        if (this.isDisposed) {
          throw new Error("Session is disposed");
        }
        await (0, restapi_1.shutdownSession)(this.id, this.serverSettings);
        this.dispose();
      }
      /**
       * Create a new kernel connection and connect to its signals.
       *
       * #### Notes
       * This method is not meant to be subclassed.
       */
      setupKernel(model) {
        if (model === null) {
          this._kernel = null;
          return;
        }
        const kc = this._connectToKernel({
          ...this._kernelConnectionOptions,
          model,
          username: this._username,
          clientId: this._clientId,
          serverSettings: this.serverSettings
        });
        this._kernel = kc;
        kc.statusChanged.connect(this.onKernelStatus, this);
        kc.connectionStatusChanged.connect(this.onKernelConnectionStatus, this);
        kc.pendingInput.connect(this.onPendingInput, this);
        kc.unhandledMessage.connect(this.onUnhandledMessage, this);
        kc.iopubMessage.connect(this.onIOPubMessage, this);
        kc.anyMessage.connect(this.onAnyMessage, this);
      }
      /**
       * Handle to changes in the Kernel status.
       */
      onKernelStatus(sender, state) {
        this._statusChanged.emit(state);
      }
      /**
       * Handle to changes in the Kernel status.
       */
      onKernelConnectionStatus(sender, state) {
        this._connectionStatusChanged.emit(state);
      }
      /**
       * Handle a change in the pendingInput.
       */
      onPendingInput(sender, state) {
        this._pendingInput.emit(state);
      }
      /**
       * Handle iopub kernel messages.
       */
      onIOPubMessage(sender, msg) {
        this._iopubMessage.emit(msg);
      }
      /**
       * Handle unhandled kernel messages.
       */
      onUnhandledMessage(sender, msg) {
        this._unhandledMessage.emit(msg);
      }
      /**
       * Handle any kernel messages.
       */
      onAnyMessage(sender, args) {
        this._anyMessage.emit(args);
      }
      /**
       * Send a PATCH to the server, updating the session path or the kernel.
       */
      async _patch(body) {
        const model = await (0, restapi_1.updateSession)({ ...body, id: this._id }, this.serverSettings);
        this.update(model);
        return model;
      }
      /**
       * Handle a change to the model.
       */
      _handleModelChange(oldModel) {
        if (oldModel.name !== this._name) {
          this._propertyChanged.emit("name");
        }
        if (oldModel.type !== this._type) {
          this._propertyChanged.emit("type");
        }
        if (oldModel.path !== this._path) {
          this._propertyChanged.emit("path");
        }
      }
    };
    exports2.SessionConnection = SessionConnection;
  }
});

// node_modules/@jupyterlab/services/lib/session/manager.js
var require_manager3 = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/manager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SessionManager = void 0;
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var serverconnection_1 = require_serverconnection();
    var basemanager_1 = require_basemanager();
    var default_1 = require_default2();
    var restapi_1 = require_restapi3();
    var SessionManager2 = class extends basemanager_1.BaseManager {
      /**
       * Construct a new session manager.
       *
       * @param options - The default options for each session.
       */
      constructor(options) {
        var _a7;
        super(options);
        this._isReady = false;
        this._sessionConnections = /* @__PURE__ */ new Set();
        this._models = /* @__PURE__ */ new Map();
        this._runningChanged = new signaling_1.Signal(this);
        this._connectionFailure = new signaling_1.Signal(this);
        this._connectToKernel = (options2) => {
          return this._kernelManager.connectTo(options2);
        };
        this._kernelManager = options.kernelManager;
        this._pollModels = new polling_1.Poll({
          auto: false,
          factory: () => this.requestRunning(),
          frequency: {
            interval: 10 * 1e3,
            backoff: true,
            max: 300 * 1e3
          },
          name: `@jupyterlab/services:SessionManager#models`,
          standby: (_a7 = options.standby) !== null && _a7 !== void 0 ? _a7 : "when-hidden"
        });
        this._ready = (async () => {
          await this._pollModels.start();
          await this._pollModels.tick;
          if (this._kernelManager.isActive) {
            await this._kernelManager.ready;
          }
          this._isReady = true;
        })();
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._ready;
      }
      /**
       * A signal emitted when the running sessions change.
       */
      get runningChanged() {
        return this._runningChanged;
      }
      /**
       * A signal emitted when there is a connection failure.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._models.clear();
        this._sessionConnections.forEach((x) => x.dispose());
        this._pollModels.dispose();
        super.dispose();
      }
      /*
       * Connect to a running session.  See also [[connectToSession]].
       */
      connectTo(options) {
        const sessionConnection = new default_1.SessionConnection({
          ...options,
          connectToKernel: this._connectToKernel,
          serverSettings: this.serverSettings
        });
        this._onStarted(sessionConnection);
        if (!this._models.has(options.model.id)) {
          void this.refreshRunning().catch(() => {
          });
        }
        return sessionConnection;
      }
      /**
       * Create an iterator over the most recent running sessions.
       *
       * @returns A new iterator over the running sessions.
       */
      running() {
        return this._models.values();
      }
      /**
       * Force a refresh of the running sessions.
       *
       * @returns A promise that with the list of running sessions.
       *
       * #### Notes
       * This is not typically meant to be called by the user, since the
       * manager maintains its own internal state.
       */
      async refreshRunning() {
        await this._pollModels.refresh();
        await this._pollModels.tick;
      }
      /**
       * Start a new session.  See also [[startNewSession]].
       *
       * @param createOptions - Options for creating the session
       *
       * @param connectOptions - Options for connecting to the session
       */
      async startNew(createOptions, connectOptions = {}) {
        const model = await (0, restapi_1.startSession)(createOptions, this.serverSettings);
        await this.refreshRunning();
        return this.connectTo({ ...connectOptions, model });
      }
      /**
       * Shut down a session by id.
       */
      async shutdown(id) {
        await (0, restapi_1.shutdownSession)(id, this.serverSettings);
        await this.refreshRunning();
      }
      /**
       * Shut down all sessions.
       *
       * @returns A promise that resolves when all of the kernels are shut down.
       */
      async shutdownAll() {
        await this.refreshRunning();
        await Promise.all([...this._models.keys()].map((id) => (0, restapi_1.shutdownSession)(id, this.serverSettings)));
        await this.refreshRunning();
      }
      /**
       * Find a session associated with a path and stop it if it is the only session
       * using that kernel.
       *
       * @param path - The path in question.
       *
       * @returns A promise that resolves when the relevant sessions are stopped.
       */
      async stopIfNeeded(path2) {
        try {
          const sessions = await (0, restapi_1.listRunning)(this.serverSettings);
          const matches = sessions.filter((value) => value.path === path2);
          if (matches.length === 1) {
            const id = matches[0].id;
            await this.shutdown(id);
          }
        } catch (error) {
        }
      }
      /**
       * Find a session by id.
       */
      async findById(id) {
        if (this._models.has(id)) {
          return this._models.get(id);
        }
        await this.refreshRunning();
        return this._models.get(id);
      }
      /**
       * Find a session by path.
       */
      async findByPath(path2) {
        for (const m of this._models.values()) {
          if (m.path === path2) {
            return m;
          }
        }
        await this.refreshRunning();
        for (const m of this._models.values()) {
          if (m.path === path2) {
            return m;
          }
        }
        return void 0;
      }
      /**
       * Execute a request to the server to poll running kernels and update state.
       */
      async requestRunning() {
        var _a7, _b;
        let models;
        try {
          models = await (0, restapi_1.listRunning)(this.serverSettings);
        } catch (err) {
          if (err instanceof serverconnection_1.ServerConnection.NetworkError || ((_a7 = err.response) === null || _a7 === void 0 ? void 0 : _a7.status) === 503 || ((_b = err.response) === null || _b === void 0 ? void 0 : _b.status) === 424) {
            this._connectionFailure.emit(err);
          }
          throw err;
        }
        if (this.isDisposed) {
          return;
        }
        if (this._models.size === models.length && models.every((model) => {
          var _a8, _b2, _c, _d;
          const existing = this._models.get(model.id);
          if (!existing) {
            return false;
          }
          return ((_a8 = existing.kernel) === null || _a8 === void 0 ? void 0 : _a8.id) === ((_b2 = model.kernel) === null || _b2 === void 0 ? void 0 : _b2.id) && ((_c = existing.kernel) === null || _c === void 0 ? void 0 : _c.name) === ((_d = model.kernel) === null || _d === void 0 ? void 0 : _d.name) && existing.name === model.name && existing.path === model.path && existing.type === model.type;
        })) {
          return;
        }
        this._models = new Map(models.map((x) => [x.id, x]));
        this._sessionConnections.forEach((sc) => {
          if (this._models.has(sc.id)) {
            sc.update(this._models.get(sc.id));
          } else {
            sc.dispose();
          }
        });
        this._runningChanged.emit(models);
      }
      /**
       * Handle a session starting.
       */
      _onStarted(sessionConnection) {
        this._sessionConnections.add(sessionConnection);
        sessionConnection.disposed.connect(this._onDisposed, this);
        sessionConnection.propertyChanged.connect(this._onChanged, this);
        sessionConnection.kernelChanged.connect(this._onChanged, this);
      }
      _onDisposed(sessionConnection) {
        this._sessionConnections.delete(sessionConnection);
        void this.refreshRunning().catch(() => {
        });
      }
      _onChanged() {
        void this.refreshRunning().catch(() => {
        });
      }
    };
    exports2.SessionManager = SessionManager2;
    (function(SessionManager3) {
      class NoopManager extends SessionManager3 {
        constructor() {
          super(...arguments);
          this._readyPromise = new Promise(() => {
          });
        }
        /**
         * Whether the manager is active.
         */
        get isActive() {
          return false;
        }
        /**
         * Used for testing.
         */
        get parentReady() {
          return super.ready;
        }
        /**
         * Start a new session - throw an error since it is not supported.
         */
        async startNew(createOptions, connectOptions = {}) {
          return Promise.reject(new Error("Not implemented in no-op Session Manager"));
        }
        /*
         * Connect to a running session - throw an error since it is not supported.
         */
        connectTo(options) {
          throw Error("Not implemented in no-op Session Manager");
        }
        /**
         * A promise that fulfills when the manager is ready (never).
         */
        get ready() {
          return this.parentReady.then(() => this._readyPromise);
        }
        /**
         * Shut down a session by id - throw an error since it is not supported.
         */
        async shutdown(id) {
          return Promise.reject(new Error("Not implemented in no-op Session Manager"));
        }
        /**
         * Execute a request to the server to poll running sessions and update state.
         */
        async requestRunning() {
          return Promise.resolve();
        }
      }
      SessionManager3.NoopManager = NoopManager;
    })(SessionManager2 || (exports2.SessionManager = SessionManager2 = {}));
  }
});

// node_modules/@jupyterlab/services/lib/session/index.js
var require_session2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/session/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SessionAPI = exports2.Session = void 0;
    var Session = __importStar(require_session());
    exports2.Session = Session;
    var SessionAPI = __importStar(require_restapi3());
    exports2.SessionAPI = SessionAPI;
    __exportStar(require_manager3(), exports2);
  }
});

// node_modules/@jupyterlab/statedb/lib/dataconnector.js
var require_dataconnector = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/dataconnector.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DataConnector = void 0;
    var DataConnector = class {
      /**
       * Retrieve the list of items available from the data connector.
       *
       * @param query - The optional query filter to apply to the connector request.
       *
       * @returns A promise that always rejects with an error.
       *
       * #### Notes
       * Subclasses should reimplement if they support a back-end that can list.
       */
      async list(query) {
        throw new Error("DataConnector#list method has not been implemented.");
      }
      /**
       * Remove a value using the data connector.
       *
       * @param id - The identifier for the data being removed.
       *
       * @returns A promise that always rejects with an error.
       *
       * #### Notes
       * Subclasses should reimplement if they support a back-end that can remove.
       */
      async remove(id) {
        throw new Error("DataConnector#remove method has not been implemented.");
      }
      /**
       * Save a value using the data connector.
       *
       * @param id - The identifier for the data being saved.
       *
       * @param value - The data being saved.
       *
       * @returns A promise that always rejects with an error.
       *
       * #### Notes
       * Subclasses should reimplement if they support a back-end that can save.
       */
      async save(id, value) {
        throw new Error("DataConnector#save method has not been implemented.");
      }
    };
    exports2.DataConnector = DataConnector;
  }
});

// node_modules/@jupyterlab/statedb/lib/interfaces.js
var require_interfaces2 = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/interfaces.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@lumino/properties/dist/index.js
var require_dist6 = __commonJS({
  "node_modules/@lumino/properties/dist/index.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.lumino_properties = {}));
    })(exports2, function(exports3) {
      "use strict";
      class AttachedProperty {
        /**
         * Construct a new attached property.
         *
         * @param options - The options for initializing the property.
         */
        constructor(options) {
          this._pid = Private.nextPID();
          this.name = options.name;
          this._create = options.create;
          this._coerce = options.coerce || null;
          this._compare = options.compare || null;
          this._changed = options.changed || null;
        }
        /**
         * Get the current value of the property for a given owner.
         *
         * @param owner - The property owner of interest.
         *
         * @returns The current value of the property.
         *
         * #### Notes
         * If the value has not yet been set, the default value will be
         * computed and assigned as the current value of the property.
         */
        get(owner) {
          let value;
          let map = Private.ensureMap(owner);
          if (this._pid in map) {
            value = map[this._pid];
          } else {
            value = map[this._pid] = this._createValue(owner);
          }
          return value;
        }
        /**
         * Set the current value of the property for a given owner.
         *
         * @param owner - The property owner of interest.
         *
         * @param value - The value for the property.
         *
         * #### Notes
         * If the value has not yet been set, the default value will be
         * computed and used as the previous value for the comparison.
         */
        set(owner, value) {
          let oldValue;
          let map = Private.ensureMap(owner);
          if (this._pid in map) {
            oldValue = map[this._pid];
          } else {
            oldValue = map[this._pid] = this._createValue(owner);
          }
          let newValue = this._coerceValue(owner, value);
          this._maybeNotify(owner, oldValue, map[this._pid] = newValue);
        }
        /**
         * Explicitly coerce the current property value for a given owner.
         *
         * @param owner - The property owner of interest.
         *
         * #### Notes
         * If the value has not yet been set, the default value will be
         * computed and used as the previous value for the comparison.
         */
        coerce(owner) {
          let oldValue;
          let map = Private.ensureMap(owner);
          if (this._pid in map) {
            oldValue = map[this._pid];
          } else {
            oldValue = map[this._pid] = this._createValue(owner);
          }
          let newValue = this._coerceValue(owner, oldValue);
          this._maybeNotify(owner, oldValue, map[this._pid] = newValue);
        }
        /**
         * Get or create the default value for the given owner.
         */
        _createValue(owner) {
          let create = this._create;
          return create(owner);
        }
        /**
         * Coerce the value for the given owner.
         */
        _coerceValue(owner, value) {
          let coerce = this._coerce;
          return coerce ? coerce(owner, value) : value;
        }
        /**
         * Compare the old value and new value for equality.
         */
        _compareValue(oldValue, newValue) {
          let compare = this._compare;
          return compare ? compare(oldValue, newValue) : oldValue === newValue;
        }
        /**
         * Run the change notification if the given values are different.
         */
        _maybeNotify(owner, oldValue, newValue) {
          let changed = this._changed;
          if (changed && !this._compareValue(oldValue, newValue)) {
            changed(owner, oldValue, newValue);
          }
        }
      }
      (function(AttachedProperty2) {
        function clearData(owner) {
          Private.ownerData.delete(owner);
        }
        AttachedProperty2.clearData = clearData;
      })(AttachedProperty || (AttachedProperty = {}));
      var Private;
      (function(Private2) {
        Private2.ownerData = /* @__PURE__ */ new WeakMap();
        Private2.nextPID = (() => {
          let id = 0;
          return () => {
            let rand = Math.random();
            let stem = `${rand}`.slice(2);
            return `pid-${stem}-${id++}`;
          };
        })();
        function ensureMap(owner) {
          let map = Private2.ownerData.get(owner);
          if (map) {
            return map;
          }
          map = /* @__PURE__ */ Object.create(null);
          Private2.ownerData.set(owner, map);
          return map;
        }
        Private2.ensureMap = ensureMap;
      })(Private || (Private = {}));
      exports3.AttachedProperty = AttachedProperty;
    });
  }
});

// node_modules/@jupyterlab/statedb/lib/restorablepool.js
var require_restorablepool = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/restorablepool.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.RestorablePool = void 0;
    var coreutils_12 = require_dist2();
    var properties_1 = require_dist6();
    var signaling_1 = require_dist3();
    var RestorablePool = class {
      /**
       * Create a new restorable pool.
       *
       * @param options - The instantiation options for a restorable pool.
       */
      constructor(options) {
        this._added = new signaling_1.Signal(this);
        this._current = null;
        this._currentChanged = new signaling_1.Signal(this);
        this._hasRestored = false;
        this._isDisposed = false;
        this._objects = /* @__PURE__ */ new Set();
        this._restore = null;
        this._restored = new coreutils_12.PromiseDelegate();
        this._updated = new signaling_1.Signal(this);
        this.namespace = options.namespace;
      }
      /**
       * A signal emitted when an object object is added.
       *
       * #### Notes
       * This signal will only fire when an object is added to the pool.
       * It will not fire if an object injected into the pool.
       */
      get added() {
        return this._added;
      }
      /**
       * The current object.
       *
       * #### Notes
       * The restorable pool does not set `current`. It is intended for client use.
       *
       * If `current` is set to an object that does not exist in the pool, it is a
       * no-op.
       */
      get current() {
        return this._current;
      }
      set current(obj) {
        if (this._current === obj) {
          return;
        }
        if (obj !== null && this._objects.has(obj)) {
          this._current = obj;
          this._currentChanged.emit(this._current);
        }
      }
      /**
       * A signal emitted when the current widget changes.
       */
      get currentChanged() {
        return this._currentChanged;
      }
      /**
       * Test whether the pool is disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * A promise resolved when the restorable pool has been restored.
       */
      get restored() {
        return this._restored.promise;
      }
      /**
       * The number of objects held by the pool.
       */
      get size() {
        return this._objects.size;
      }
      /**
       * A signal emitted when an object is updated.
       */
      get updated() {
        return this._updated;
      }
      /**
       * Add a new object to the pool.
       *
       * @param obj - The object object being added.
       *
       * #### Notes
       * The object passed into the pool is added synchronously; its existence in
       * the pool can be checked with the `has()` method. The promise this method
       * returns resolves after the object has been added and saved to an underlying
       * restoration connector, if one is available.
       */
      async add(obj) {
        var _a7, _b;
        if (obj.isDisposed) {
          const warning = "A disposed object cannot be added.";
          console.warn(warning, obj);
          throw new Error(warning);
        }
        if (this._objects.has(obj)) {
          const warning = "This object already exists in the pool.";
          console.warn(warning, obj);
          throw new Error(warning);
        }
        this._objects.add(obj);
        obj.disposed.connect(this._onInstanceDisposed, this);
        if (Private.injectedProperty.get(obj)) {
          return;
        }
        if (this._restore) {
          const { connector } = this._restore;
          const objName = this._restore.name(obj);
          if (objName) {
            const name2 = `${this.namespace}:${objName}`;
            const data = (_b = (_a7 = this._restore).args) === null || _b === void 0 ? void 0 : _b.call(_a7, obj);
            Private.nameProperty.set(obj, name2);
            await connector.save(name2, { data });
          }
        }
        this._added.emit(obj);
      }
      /**
       * Dispose of the resources held by the pool.
       *
       * #### Notes
       * Disposing a pool does not affect the underlying data in the data connector,
       * it simply disposes the client-side pool without making any connector calls.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._current = null;
        this._isDisposed = true;
        this._objects.clear();
        signaling_1.Signal.clearData(this);
      }
      /**
       * Find the first object in the pool that satisfies a filter function.
       *
       * @param fn The filter function to call on each object.
       */
      find(fn) {
        const values = this._objects.values();
        for (const value of values) {
          if (fn(value)) {
            return value;
          }
        }
        return void 0;
      }
      /**
       * Iterate through each object in the pool.
       *
       * @param fn - The function to call on each object.
       */
      forEach(fn) {
        this._objects.forEach(fn);
      }
      /**
       * Filter the objects in the pool based on a predicate.
       *
       * @param fn - The function by which to filter.
       */
      filter(fn) {
        const filtered = [];
        this.forEach((obj) => {
          if (fn(obj)) {
            filtered.push(obj);
          }
        });
        return filtered;
      }
      /**
       * Inject an object into the restorable pool without the pool handling its
       * restoration lifecycle.
       *
       * @param obj - The object to inject into the pool.
       */
      inject(obj) {
        Private.injectedProperty.set(obj, true);
        return this.add(obj);
      }
      /**
       * Check if this pool has the specified object.
       *
       * @param obj - The object whose existence is being checked.
       */
      has(obj) {
        return this._objects.has(obj);
      }
      /**
       * Restore the objects in this pool's namespace.
       *
       * @param options - The configuration options that describe restoration.
       *
       * @returns A promise that resolves when restoration has completed.
       *
       * #### Notes
       * This function should almost never be invoked by client code. Its primary
       * use case is to be invoked by a layout restorer plugin that handles
       * multiple restorable pools and, when ready, asks them each to restore their
       * respective objects.
       */
      async restore(options) {
        if (this._hasRestored) {
          throw new Error("This pool has already been restored.");
        }
        this._hasRestored = true;
        const { command, connector, registry, when } = options;
        const namespace = this.namespace;
        const promises = when ? [connector.list(namespace)].concat(when) : [connector.list(namespace)];
        this._restore = options;
        const [saved] = await Promise.all(promises);
        const values = await Promise.all(saved.ids.map(async (id, index) => {
          const value = saved.values[index];
          const args = value && value.data;
          if (args === void 0) {
            return connector.remove(id);
          }
          return registry.execute(command, args).catch(() => connector.remove(id));
        }));
        this._restored.resolve();
        return values;
      }
      /**
       * Save the restore data for a given object.
       *
       * @param obj - The object being saved.
       */
      async save(obj) {
        var _a7, _b;
        const injected = Private.injectedProperty.get(obj);
        if (!this._restore || !this.has(obj) || injected) {
          return;
        }
        const { connector } = this._restore;
        const objName = this._restore.name(obj);
        const oldName = Private.nameProperty.get(obj);
        const newName = objName ? `${this.namespace}:${objName}` : "";
        if (oldName && oldName !== newName) {
          await connector.remove(oldName);
        }
        Private.nameProperty.set(obj, newName);
        if (newName) {
          const data = (_b = (_a7 = this._restore).args) === null || _b === void 0 ? void 0 : _b.call(_a7, obj);
          await connector.save(newName, { data });
        }
        if (oldName !== newName) {
          this._updated.emit(obj);
        }
      }
      /**
       * Clean up after disposed objects.
       */
      _onInstanceDisposed(obj) {
        this._objects.delete(obj);
        if (obj === this._current) {
          this._current = null;
          this._currentChanged.emit(this._current);
        }
        if (Private.injectedProperty.get(obj)) {
          return;
        }
        if (!this._restore) {
          return;
        }
        const { connector } = this._restore;
        const name2 = Private.nameProperty.get(obj);
        if (name2) {
          void connector.remove(name2);
        }
      }
    };
    exports2.RestorablePool = RestorablePool;
    var Private;
    (function(Private2) {
      Private2.injectedProperty = new properties_1.AttachedProperty({
        name: "injected",
        create: () => false
      });
      Private2.nameProperty = new properties_1.AttachedProperty({
        name: "name",
        create: () => ""
      });
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/statedb/lib/statedb.js
var require_statedb = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/statedb.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.StateDB = void 0;
    var signaling_1 = require_dist3();
    var StateDB = class _StateDB {
      /**
       * Create a new state database.
       *
       * @param options - The instantiation options for a state database.
       */
      constructor(options = {}) {
        this._changed = new signaling_1.Signal(this);
        const { connector, transform } = options;
        this._connector = connector || new _StateDB.Connector();
        if (!transform) {
          this._ready = Promise.resolve(void 0);
        } else {
          this._ready = transform.then((transformation) => {
            const { contents, type } = transformation;
            switch (type) {
              case "cancel":
                return;
              case "clear":
                return this._clear();
              case "merge":
                return this._merge(contents || {});
              case "overwrite":
                return this._overwrite(contents || {});
              default:
                return;
            }
          });
        }
      }
      /**
       * A signal that emits the change type any time a value changes.
       */
      get changed() {
        return this._changed;
      }
      /**
       * Clear the entire database.
       */
      async clear() {
        await this._ready;
        await this._clear();
      }
      /**
       * Retrieve a saved bundle from the database.
       *
       * @param id - The identifier used to retrieve a data bundle.
       *
       * @returns A promise that bears a data payload if available.
       *
       * #### Notes
       * The `id` values of stored items in the state database are formatted:
       * `'namespace:identifier'`, which is the same convention that command
       * identifiers in JupyterLab use as well. While this is not a technical
       * requirement for `fetch()`, `remove()`, and `save()`, it *is* necessary for
       * using the `list(namespace: string)` method.
       *
       * The promise returned by this method may be rejected if an error occurs in
       * retrieving the data. Non-existence of an `id` will succeed with the `value`
       * `undefined`.
       */
      async fetch(id) {
        await this._ready;
        return this._fetch(id);
      }
      /**
       * Retrieve all the saved bundles for a namespace.
       *
       * @param namespace The namespace prefix to retrieve.
       *
       * @returns A promise that bears a collection of payloads for a namespace.
       *
       * #### Notes
       * Namespaces are entirely conventional entities. The `id` values of stored
       * items in the state database are formatted: `'namespace:identifier'`, which
       * is the same convention that command identifiers in JupyterLab use as well.
       *
       * If there are any errors in retrieving the data, they will be logged to the
       * console in order to optimistically return any extant data without failing.
       * This promise will always succeed.
       */
      async list(namespace) {
        await this._ready;
        return this._list(namespace);
      }
      /**
       * Remove a value from the database.
       *
       * @param id - The identifier for the data being removed.
       *
       * @returns A promise that is rejected if remove fails and succeeds otherwise.
       */
      async remove(id) {
        await this._ready;
        await this._remove(id);
        this._changed.emit({ id, type: "remove" });
      }
      /**
       * Save a value in the database.
       *
       * @param id - The identifier for the data being saved.
       *
       * @param value - The data being saved.
       *
       * @returns A promise that is rejected if saving fails and succeeds otherwise.
       *
       * #### Notes
       * The `id` values of stored items in the state database are formatted:
       * `'namespace:identifier'`, which is the same convention that command
       * identifiers in JupyterLab use as well. While this is not a technical
       * requirement for `fetch()`, `remove()`, and `save()`, it *is* necessary for
       * using the `list(namespace: string)` method.
       */
      async save(id, value) {
        await this._ready;
        await this._save(id, value);
        this._changed.emit({ id, type: "save" });
      }
      /**
       * Return a serialized copy of the state database's entire contents.
       *
       * @returns A promise that resolves with the database contents as JSON.
       */
      async toJSON() {
        await this._ready;
        const { ids, values } = await this._list();
        return values.reduce((acc, val, idx) => {
          acc[ids[idx]] = val;
          return acc;
        }, {});
      }
      /**
       * Clear the entire database.
       */
      async _clear() {
        await Promise.all((await this._list()).ids.map((id) => this._remove(id)));
      }
      /**
       * Fetch a value from the database.
       */
      async _fetch(id) {
        const value = await this._connector.fetch(id);
        if (value) {
          return JSON.parse(value).v;
        }
      }
      /**
       * Fetch a list from the database.
       */
      async _list(namespace = "") {
        const { ids, values } = await this._connector.list(namespace);
        return {
          ids,
          values: values.map((val) => JSON.parse(val).v)
        };
      }
      /**
       * Merge data into the state database.
       */
      async _merge(contents) {
        await Promise.all(Object.keys(contents).map((key) => contents[key] && this._save(key, contents[key])));
      }
      /**
       * Overwrite the entire database with new contents.
       */
      async _overwrite(contents) {
        await this._clear();
        await this._merge(contents);
      }
      /**
       * Remove a key in the database.
       */
      async _remove(id) {
        return this._connector.remove(id);
      }
      /**
       * Save a key and its value in the database.
       */
      async _save(id, value) {
        return this._connector.save(id, JSON.stringify({ v: value }));
      }
    };
    exports2.StateDB = StateDB;
    (function(StateDB2) {
      class Connector {
        constructor() {
          this._storage = {};
        }
        /**
         * Retrieve an item from the data connector.
         */
        async fetch(id) {
          return this._storage[id];
        }
        /**
         * Retrieve the list of items available from the data connector.
         *
         * @param namespace - If not empty, only keys whose first token before `:`
         * exactly match `namespace` will be returned, e.g. `foo` in `foo:bar`.
         */
        async list(namespace = "") {
          return Object.keys(this._storage).reduce((acc, val) => {
            if (namespace === "" ? true : namespace === val.split(":")[0]) {
              acc.ids.push(val);
              acc.values.push(this._storage[val]);
            }
            return acc;
          }, { ids: [], values: [] });
        }
        /**
         * Remove a value using the data connector.
         */
        async remove(id) {
          delete this._storage[id];
        }
        /**
         * Save a value using the data connector.
         */
        async save(id, value) {
          this._storage[id] = value;
        }
      }
      StateDB2.Connector = Connector;
    })(StateDB || (exports2.StateDB = StateDB = {}));
  }
});

// node_modules/@jupyterlab/statedb/lib/tokens.js
var require_tokens = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/tokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IStateDB = void 0;
    var coreutils_12 = require_dist2();
    exports2.IStateDB = new coreutils_12.Token("@jupyterlab/coreutils:IStateDB", `A service for the JupyterLab state database.
  Use this if you want to store data that will persist across page loads.
  See "state database" for more information.`);
  }
});

// node_modules/@jupyterlab/statedb/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@jupyterlab/statedb/lib/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_dataconnector(), exports2);
    __exportStar(require_interfaces2(), exports2);
    __exportStar(require_restorablepool(), exports2);
    __exportStar(require_statedb(), exports2);
    __exportStar(require_tokens(), exports2);
  }
});

// node_modules/@jupyterlab/services/lib/setting/index.js
var require_setting = __commonJS({
  "node_modules/@jupyterlab/services/lib/setting/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SettingManager = void 0;
    var coreutils_12 = require_lib();
    var statedb_1 = require_lib2();
    var serverconnection_1 = require_serverconnection();
    var SERVICE_SETTINGS_URL = "api/settings";
    var SettingManager = class extends statedb_1.DataConnector {
      /**
       * Create a new setting manager.
       */
      constructor(options = {}) {
        var _a7;
        super();
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
      }
      /**
       * Fetch a plugin's settings.
       *
       * @param id - The plugin's ID.
       *
       * @returns A promise that resolves if successful.
       */
      async fetch(id) {
        if (!id) {
          throw new Error("Plugin `id` parameter is required for settings fetch.");
        }
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, id);
        const response = await makeRequest(url, {}, serverSettings);
        if (response.status !== 200) {
          const err = await ResponseError.create(response);
          throw err;
        }
        return response.json();
      }
      /**
       * Fetch the list of all plugin setting bundles.
       *
       * @returns A promise that resolves if successful.
       */
      async list(query) {
        var _a7, _b, _c, _d;
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, "", query === "ids");
        const response = await makeRequest(url, {}, serverSettings);
        if (response.status !== 200) {
          throw new ResponseError(response);
        }
        const json = await response.json();
        const ids = (_b = (_a7 = json === null || json === void 0 ? void 0 : json["settings"]) === null || _a7 === void 0 ? void 0 : _a7.map((plugin) => plugin.id)) !== null && _b !== void 0 ? _b : [];
        let values = [];
        if (!query) {
          values = (_d = (_c = json === null || json === void 0 ? void 0 : json["settings"]) === null || _c === void 0 ? void 0 : _c.map((plugin) => {
            plugin.data = { composite: {}, user: {} };
            return plugin;
          })) !== null && _d !== void 0 ? _d : [];
        }
        return { ids, values };
      }
      /**
       * Save a plugin's settings.
       *
       * @param id - The plugin's ID.
       *
       * @param raw - The user setting values as a raw string of JSON with comments.
       *
       * @returns A promise that resolves if successful.
       */
      async save(id, raw) {
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, id);
        const init = { body: JSON.stringify({ raw }), method: "PUT" };
        const response = await makeRequest(url, init, serverSettings);
        if (response.status !== 204) {
          throw new ResponseError(response);
        }
      }
    };
    exports2.SettingManager = SettingManager;
    var Private;
    (function(Private2) {
      function url(base, id, idsOnly) {
        const idsOnlyParam = idsOnly ? coreutils_12.URLExt.objectToQueryString({ ids_only: true }) : "";
        const settingsBase = coreutils_12.URLExt.join(base, SERVICE_SETTINGS_URL);
        const result = coreutils_12.URLExt.join(settingsBase, id);
        if (!result.startsWith(settingsBase)) {
          throw new Error("Can only be used for workspaces requests");
        }
        return `${result}${idsOnlyParam}`;
      }
      Private2.url = url;
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/terminal/restapi.js
var require_restapi4 = __commonJS({
  "node_modules/@jupyterlab/services/lib/terminal/restapi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.shutdownTerminal = exports2.listRunning = exports2.startNew = exports2.isAvailable = exports2.TERMINAL_SERVICE_URL = void 0;
    var coreutils_12 = require_lib();
    var serverconnection_1 = require_serverconnection();
    exports2.TERMINAL_SERVICE_URL = "api/terminals";
    function isAvailable() {
      const available = String(coreutils_12.PageConfig.getOption("terminalsAvailable"));
      return available.toLowerCase() === "true";
    }
    exports2.isAvailable = isAvailable;
    async function startNew(settings = serverconnection_1.ServerConnection.makeSettings(), name2, cwd) {
      Private.errorIfNotAvailable();
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.TERMINAL_SERVICE_URL);
      const init = {
        method: "POST",
        body: JSON.stringify({ name: name2, cwd })
      };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      return data;
    }
    exports2.startNew = startNew;
    async function listRunning(settings = serverconnection_1.ServerConnection.makeSettings()) {
      Private.errorIfNotAvailable();
      const url = coreutils_12.URLExt.join(settings.baseUrl, exports2.TERMINAL_SERVICE_URL);
      const response = await serverconnection_1.ServerConnection.makeRequest(url, {}, settings);
      if (response.status !== 200) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("Invalid terminal list");
      }
      return data;
    }
    exports2.listRunning = listRunning;
    async function shutdownTerminal(name2, settings = serverconnection_1.ServerConnection.makeSettings()) {
      var _a7;
      Private.errorIfNotAvailable();
      const workspacesBase = coreutils_12.URLExt.join(settings.baseUrl, exports2.TERMINAL_SERVICE_URL);
      const url = coreutils_12.URLExt.join(workspacesBase, name2);
      if (!url.startsWith(workspacesBase)) {
        throw new Error("Can only be used for terminal requests");
      }
      const init = { method: "DELETE" };
      const response = await serverconnection_1.ServerConnection.makeRequest(url, init, settings);
      if (response.status === 404) {
        const data = await response.json();
        const msg = (_a7 = data.message) !== null && _a7 !== void 0 ? _a7 : `The terminal session "${name2}"" does not exist on the server`;
        console.warn(msg);
      } else if (response.status !== 204) {
        const err = await serverconnection_1.ServerConnection.ResponseError.create(response);
        throw err;
      }
    }
    exports2.shutdownTerminal = shutdownTerminal;
    var Private;
    (function(Private2) {
      function errorIfNotAvailable() {
        if (!isAvailable()) {
          throw new Error("Terminals Unavailable");
        }
      }
      Private2.errorIfNotAvailable = errorIfNotAvailable;
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/terminal/terminal.js
var require_terminal = __commonJS({
  "node_modules/@jupyterlab/services/lib/terminal/terminal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isAvailable = void 0;
    var restapi_1 = require_restapi4();
    Object.defineProperty(exports2, "isAvailable", { enumerable: true, get: function() {
      return restapi_1.isAvailable;
    } });
  }
});

// node_modules/@jupyterlab/services/lib/terminal/default.js
var require_default3 = __commonJS({
  "node_modules/@jupyterlab/services/lib/terminal/default.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TerminalConnection = void 0;
    var coreutils_12 = require_lib();
    var coreutils_2 = require_dist2();
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var restapi_1 = require_restapi4();
    var TerminalConnection = class _TerminalConnection {
      /**
       * Construct a new terminal session.
       */
      constructor(options) {
        var _a7;
        this._createSocket = () => {
          this._errorIfDisposed();
          this._clearSocket();
          this._updateConnectionStatus("connecting");
          const name2 = this._name;
          const settings = this.serverSettings;
          let url = coreutils_12.URLExt.join(settings.wsUrl, "terminals", "websocket", encodeURIComponent(name2));
          const token = settings.token;
          if (settings.appendToken && token !== "") {
            url = url + `?token=${encodeURIComponent(token)}`;
          }
          this._ws = new settings.WebSocket(url);
          this._ws.onmessage = this._onWSMessage;
          this._ws.onclose = this._onWSClose;
          this._ws.onerror = this._onWSClose;
        };
        this._onWSMessage = (event) => {
          if (this._isDisposed) {
            return;
          }
          const data = JSON.parse(event.data);
          if (data[0] === "disconnect") {
            this.dispose();
          }
          if (this._connectionStatus === "connecting") {
            if (data[0] === "setup") {
              this._updateConnectionStatus("connected");
            }
            return;
          }
          this._messageReceived.emit({
            type: data[0],
            content: data.slice(1)
          });
        };
        this._onWSClose = (event) => {
          console.warn(`Terminal websocket closed: ${event.code}`);
          if (!this.isDisposed) {
            this._reconnect();
          }
        };
        this._connectionStatus = "connecting";
        this._connectionStatusChanged = new signaling_1.Signal(this);
        this._isDisposed = false;
        this._disposed = new signaling_1.Signal(this);
        this._messageReceived = new signaling_1.Signal(this);
        this._reconnectTimeout = null;
        this._ws = null;
        this._noOp = () => {
        };
        this._reconnectLimit = 7;
        this._reconnectAttempt = 0;
        this._pendingMessages = [];
        this._name = options.model.name;
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : __1.ServerConnection.makeSettings();
        this._createSocket();
      }
      /**
       * A signal emitted when the session is disposed.
       */
      get disposed() {
        return this._disposed;
      }
      /**
       * A signal emitted when a message is received from the server.
       */
      get messageReceived() {
        return this._messageReceived;
      }
      /**
       * Get the name of the terminal session.
       */
      get name() {
        return this._name;
      }
      /**
       * Get the model for the terminal session.
       */
      get model() {
        return { name: this._name };
      }
      /**
       * Test whether the session is disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources held by the session.
       */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        this._isDisposed = true;
        this._disposed.emit();
        this._updateConnectionStatus("disconnected");
        this._clearSocket();
        signaling_1.Signal.clearData(this);
      }
      /**
       * Send a message to the terminal session.
       *
       * #### Notes
       * If the connection is down, the message will be queued for sending when
       * the connection comes back up.
       */
      send(message) {
        this._sendMessage(message);
      }
      /**
       * Send a message on the websocket, or possibly queue for later sending.
       *
       * @param queue - whether to queue the message if it cannot be sent
       */
      _sendMessage(message, queue = true) {
        if (this._isDisposed || !message.content) {
          return;
        }
        if (this.connectionStatus === "connected" && this._ws) {
          const msg = [message.type, ...message.content];
          this._ws.send(JSON.stringify(msg));
        } else if (queue) {
          this._pendingMessages.push(message);
        } else {
          throw new Error(`Could not send message: ${JSON.stringify(message)}`);
        }
      }
      /**
       * Send pending messages to the kernel.
       */
      _sendPending() {
        while (this.connectionStatus === "connected" && this._pendingMessages.length > 0) {
          this._sendMessage(this._pendingMessages[0], false);
          this._pendingMessages.shift();
        }
      }
      /**
       * Reconnect to a terminal.
       *
       * #### Notes
       * This may try multiple times to reconnect to a terminal, and will sever
       * any existing connection.
       */
      reconnect() {
        this._errorIfDisposed();
        const result = new coreutils_2.PromiseDelegate();
        const fulfill = (sender, status) => {
          if (status === "connected") {
            result.resolve();
            this.connectionStatusChanged.disconnect(fulfill, this);
          } else if (status === "disconnected") {
            result.reject(new Error("Terminal connection disconnected"));
            this.connectionStatusChanged.disconnect(fulfill, this);
          }
        };
        this.connectionStatusChanged.connect(fulfill, this);
        this._reconnectAttempt = 0;
        this._reconnect();
        return result.promise;
      }
      /**
       * Attempt a connection if we have not exhausted connection attempts.
       */
      _reconnect() {
        this._errorIfDisposed();
        clearTimeout(this._reconnectTimeout);
        if (this._reconnectAttempt < this._reconnectLimit) {
          this._updateConnectionStatus("connecting");
          const timeout = Private.getRandomIntInclusive(0, 1e3 * (Math.pow(2, this._reconnectAttempt) - 1));
          console.error(`Connection lost, reconnecting in ${Math.floor(timeout / 1e3)} seconds.`);
          this._reconnectTimeout = setTimeout(this._createSocket, timeout);
          this._reconnectAttempt += 1;
        } else {
          this._updateConnectionStatus("disconnected");
        }
        this._clearSocket();
      }
      /**
       * Forcefully clear the socket state.
       *
       * #### Notes
       * This will clear all socket state without calling any handlers and will
       * not update the connection status. If you call this method, you are
       * responsible for updating the connection status as needed and recreating
       * the socket if you plan to reconnect.
       */
      _clearSocket() {
        if (this._ws !== null) {
          this._ws.onopen = this._noOp;
          this._ws.onclose = this._noOp;
          this._ws.onerror = this._noOp;
          this._ws.onmessage = this._noOp;
          this._ws.close();
          this._ws = null;
        }
      }
      /**
       * Shut down the terminal session.
       */
      async shutdown() {
        await (0, restapi_1.shutdownTerminal)(this.name, this.serverSettings);
        this.dispose();
      }
      /**
       * Clone the current terminal connection.
       */
      clone() {
        return new _TerminalConnection(this);
      }
      /**
       * Handle connection status changes.
       */
      _updateConnectionStatus(connectionStatus) {
        if (this._connectionStatus === connectionStatus) {
          return;
        }
        this._connectionStatus = connectionStatus;
        if (connectionStatus !== "connecting") {
          this._reconnectAttempt = 0;
          clearTimeout(this._reconnectTimeout);
        }
        if (connectionStatus === "connected") {
          this._sendPending();
        }
        this._connectionStatusChanged.emit(connectionStatus);
      }
      /**
       * Utility function to throw an error if this instance is disposed.
       */
      _errorIfDisposed() {
        if (this.isDisposed) {
          throw new Error("Terminal connection is disposed");
        }
      }
      /**
       * A signal emitted when the terminal connection status changes.
       */
      get connectionStatusChanged() {
        return this._connectionStatusChanged;
      }
      /**
       * The current connection status of the terminal connection.
       */
      get connectionStatus() {
        return this._connectionStatus;
      }
    };
    exports2.TerminalConnection = TerminalConnection;
    var Private;
    (function(Private2) {
      function getTermUrl(baseUrl, name2) {
        return coreutils_12.URLExt.join(baseUrl, restapi_1.TERMINAL_SERVICE_URL, encodeURIComponent(name2));
      }
      Private2.getTermUrl = getTermUrl;
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      Private2.getRandomIntInclusive = getRandomIntInclusive;
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/terminal/manager.js
var require_manager4 = __commonJS({
  "node_modules/@jupyterlab/services/lib/terminal/manager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TerminalManager = void 0;
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var __1 = require_lib3();
    var basemanager_1 = require_basemanager();
    var restapi_1 = require_restapi4();
    var default_1 = require_default3();
    var TerminalManager = class extends basemanager_1.BaseManager {
      /**
       * Construct a new terminal manager.
       */
      constructor(options = {}) {
        var _a7;
        super(options);
        this._isReady = false;
        this._names = [];
        this._terminalConnections = /* @__PURE__ */ new Set();
        this._runningChanged = new signaling_1.Signal(this);
        this._connectionFailure = new signaling_1.Signal(this);
        if (!this.isAvailable()) {
          this._ready = Promise.reject("Terminals unavailable");
          this._ready.catch((_) => void 0);
          return;
        }
        this._pollModels = new polling_1.Poll({
          auto: false,
          factory: () => this.requestRunning(),
          frequency: {
            interval: 10 * 1e3,
            backoff: true,
            max: 300 * 1e3
          },
          name: `@jupyterlab/services:TerminalManager#models`,
          standby: (_a7 = options.standby) !== null && _a7 !== void 0 ? _a7 : "when-hidden"
        });
        this._ready = (async () => {
          await this._pollModels.start();
          await this._pollModels.tick;
          this._isReady = true;
        })();
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._ready;
      }
      /**
       * A signal emitted when the running terminals change.
       */
      get runningChanged() {
        return this._runningChanged;
      }
      /**
       * A signal emitted when there is a connection failure.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._names.length = 0;
        this._terminalConnections.forEach((x) => x.dispose());
        this._pollModels.dispose();
        super.dispose();
      }
      /**
       * Whether the terminal service is available.
       */
      isAvailable() {
        return (0, restapi_1.isAvailable)();
      }
      /*
       * Connect to a running terminal.
       *
       * @param options - The options used to connect to the terminal.
       *
       * @returns The new terminal connection instance.
       *
       * #### Notes
       * The manager `serverSettings` will be used.
       */
      connectTo(options) {
        const terminalConnection = new default_1.TerminalConnection({
          ...options,
          serverSettings: this.serverSettings
        });
        this._onStarted(terminalConnection);
        if (!this._names.includes(options.model.name)) {
          void this.refreshRunning().catch(() => {
          });
        }
        return terminalConnection;
      }
      /**
       * Create an iterator over the most recent running terminals.
       *
       * @returns A new iterator over the running terminals.
       */
      running() {
        return this._models[Symbol.iterator]();
      }
      /**
       * Force a refresh of the running terminals.
       *
       * @returns A promise that with the list of running terminals.
       *
       * #### Notes
       * This is intended to be called only in response to a user action,
       * since the manager maintains its internal state.
       */
      async refreshRunning() {
        await this._pollModels.refresh();
        await this._pollModels.tick;
      }
      /**
       * Create a new terminal session.
       *
       * @param options - The options used to create the terminal.
       *
       * @returns A promise that resolves with the terminal connection instance.
       *
       * #### Notes
       * The manager `serverSettings` will be used unless overridden in the
       * options.
       */
      async startNew(options) {
        const model = await (0, restapi_1.startNew)(this.serverSettings, options === null || options === void 0 ? void 0 : options.name, options === null || options === void 0 ? void 0 : options.cwd);
        await this.refreshRunning();
        return this.connectTo({ model });
      }
      /**
       * Shut down a terminal session by name.
       */
      async shutdown(name2) {
        await (0, restapi_1.shutdownTerminal)(name2, this.serverSettings);
        await this.refreshRunning();
      }
      /**
       * Shut down all terminal sessions.
       *
       * @returns A promise that resolves when all of the sessions are shut down.
       */
      async shutdownAll() {
        await this.refreshRunning();
        await Promise.all(this._names.map((name2) => (0, restapi_1.shutdownTerminal)(name2, this.serverSettings)));
        await this.refreshRunning();
      }
      /**
       * Execute a request to the server to poll running terminals and update state.
       */
      async requestRunning() {
        var _a7, _b;
        let models;
        try {
          models = await (0, restapi_1.listRunning)(this.serverSettings);
        } catch (err) {
          if (err instanceof __1.ServerConnection.NetworkError || ((_a7 = err.response) === null || _a7 === void 0 ? void 0 : _a7.status) === 503 || ((_b = err.response) === null || _b === void 0 ? void 0 : _b.status) === 424) {
            this._connectionFailure.emit(err);
          }
          throw err;
        }
        if (this.isDisposed) {
          return;
        }
        const names = models.map(({ name: name2 }) => name2).sort();
        if (names === this._names) {
          return;
        }
        this._names = names;
        this._terminalConnections.forEach((tc) => {
          if (!names.includes(tc.name)) {
            tc.dispose();
          }
        });
        this._runningChanged.emit(this._models);
      }
      /**
       * Handle a session starting.
       */
      _onStarted(terminalConnection) {
        this._terminalConnections.add(terminalConnection);
        terminalConnection.disposed.connect(this._onDisposed, this);
      }
      /**
       * Handle a session terminating.
       */
      _onDisposed(terminalConnection) {
        this._terminalConnections.delete(terminalConnection);
        void this.refreshRunning().catch(() => {
        });
      }
      get _models() {
        return this._names.map((name2) => {
          return { name: name2 };
        });
      }
    };
    exports2.TerminalManager = TerminalManager;
    (function(TerminalManager2) {
      class NoopManager extends TerminalManager2 {
        constructor() {
          super(...arguments);
          this._readyPromise = new Promise(() => {
          });
        }
        /**
         * Whether the manager is active.
         */
        get isActive() {
          return false;
        }
        /**
         * Used for testing.
         */
        get parentReady() {
          return super.ready;
        }
        /**
         * A promise that fulfills when the manager is ready (never).
         */
        get ready() {
          return this.parentReady.then(() => this._readyPromise);
        }
        /**
         * Create a new terminal session - throw an error since it is not supported.
         *
         */
        async startNew(options) {
          return Promise.reject(new Error("Not implemented in no-op Terminal Manager"));
        }
        /*
         * Connect to a running terminal - throw an error since it is not supported.
         */
        connectTo(options) {
          throw Error("Not implemented in no-op Terminal Manager");
        }
        /**
         * Shut down a session by id - throw an error since it is not supported.
         */
        async shutdown(id) {
          return Promise.reject(new Error("Not implemented in no-op Terminal Manager"));
        }
        /**
         * Execute a request to the server to poll running sessions and update state.
         */
        async requestRunning() {
          return Promise.resolve();
        }
      }
      TerminalManager2.NoopManager = NoopManager;
    })(TerminalManager || (exports2.TerminalManager = TerminalManager = {}));
  }
});

// node_modules/@jupyterlab/services/lib/terminal/index.js
var require_terminal2 = __commonJS({
  "node_modules/@jupyterlab/services/lib/terminal/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TerminalAPI = exports2.Terminal = void 0;
    var Terminal = __importStar(require_terminal());
    exports2.Terminal = Terminal;
    var TerminalAPI = __importStar(require_restapi4());
    exports2.TerminalAPI = TerminalAPI;
    __exportStar(require_manager4(), exports2);
  }
});

// node_modules/@jupyterlab/services/lib/user/index.js
var require_user = __commonJS({
  "node_modules/@jupyterlab/services/lib/user/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UserManager = void 0;
    var coreutils_12 = require_lib();
    var coreutils_2 = require_dist2();
    var polling_1 = require_dist4();
    var signaling_1 = require_dist3();
    var serverconnection_1 = require_serverconnection();
    var basemanager_1 = require_basemanager();
    var SERVICE_USER_URL = "api/me";
    var SERVICE_ID = "@jupyterlab/services:UserManager#user";
    var UserManager = class extends basemanager_1.BaseManager {
      /**
       * Create a new user manager.
       */
      constructor(options = {}) {
        var _a7;
        super(options);
        this._isReady = false;
        this._userChanged = new signaling_1.Signal(this);
        this._connectionFailure = new signaling_1.Signal(this);
        this._ready = this.requestUser().then(() => {
          if (this.isDisposed) {
            return;
          }
          this._isReady = true;
        }).catch((_) => (
          // Return a promise that will never resolve, so user service is never ready
          // This typically occurs when the backend has no user service
          new Promise(() => {
          })
        ));
        this._pollSpecs = new polling_1.Poll({
          auto: false,
          factory: () => this.requestUser(),
          frequency: {
            interval: 61 * 1e3,
            backoff: true,
            max: 300 * 1e3
          },
          name: SERVICE_ID,
          standby: (_a7 = options.standby) !== null && _a7 !== void 0 ? _a7 : "when-hidden"
        });
        void this.ready.then(() => {
          void this._pollSpecs.start();
        });
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._ready;
      }
      /**
       * Get the most recently fetched identity.
       */
      get identity() {
        return this._identity;
      }
      /**
       * Get the most recently fetched permissions.
       */
      get permissions() {
        return this._permissions;
      }
      /**
       * A signal emitted when the user changes.
       */
      get userChanged() {
        return this._userChanged;
      }
      /**
       * A signal emitted when there is a connection failure.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        this._pollSpecs.dispose();
        super.dispose();
      }
      /**
       * Force a refresh of the specs from the server.
       *
       * @returns A promise that resolves when the specs are fetched.
       *
       * #### Notes
       * This is intended to be called only in response to a user action,
       * since the manager maintains its internal state.
       */
      async refreshUser() {
        await this._pollSpecs.refresh();
        await this._pollSpecs.tick;
      }
      /**
       * Execute a request to the server to poll the user and update state.
       */
      async requestUser() {
        if (this.isDisposed) {
          return;
        }
        const { baseUrl } = this.serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const url = coreutils_12.URLExt.join(baseUrl, SERVICE_USER_URL);
        const response = await makeRequest(url, {}, this.serverSettings);
        if (response.status !== 200) {
          const err = await ResponseError.create(response);
          throw err;
        }
        const oldUser = {
          identity: this._identity,
          permissions: this._permissions
        };
        const newUser = await response.json();
        const identity = newUser.identity;
        const { localStorage } = window;
        const data = localStorage.getItem(SERVICE_ID);
        if (data && (!identity.initials || !identity.color)) {
          const localUser = JSON.parse(data);
          identity.initials = identity.initials || localUser.initials || identity.name.substring(0, 1);
          identity.color = identity.color || localUser.color || Private.getRandomColor();
        }
        if (!coreutils_2.JSONExt.deepEqual(newUser, oldUser)) {
          this._identity = identity;
          this._permissions = newUser.permissions;
          localStorage.setItem(SERVICE_ID, JSON.stringify(identity));
          this._userChanged.emit(newUser);
        }
      }
    };
    exports2.UserManager = UserManager;
    var Private;
    (function(Private2) {
      const userColors = [
        "var(--jp-collaborator-color1)",
        "var(--jp-collaborator-color2)",
        "var(--jp-collaborator-color3)",
        "var(--jp-collaborator-color4)",
        "var(--jp-collaborator-color5)",
        "var(--jp-collaborator-color6)",
        "var(--jp-collaborator-color7)"
      ];
      Private2.getRandomColor = () => userColors[Math.floor(Math.random() * userColors.length)];
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/workspace/index.js
var require_workspace = __commonJS({
  "node_modules/@jupyterlab/services/lib/workspace/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceManager = void 0;
    var coreutils_12 = require_lib();
    var statedb_1 = require_lib2();
    var serverconnection_1 = require_serverconnection();
    var SERVICE_WORKSPACES_URL = "api/workspaces";
    var WorkspaceManager = class extends statedb_1.DataConnector {
      /**
       * Create a new workspace manager.
       */
      constructor(options = {}) {
        var _a7;
        super();
        this.serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
      }
      /**
       * Fetch a workspace.
       *
       * @param id - The workspace's ID.
       *
       * @returns A promise that resolves if successful.
       */
      async fetch(id) {
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, id);
        const response = await makeRequest(url, {}, serverSettings);
        if (response.status !== 200) {
          const err = await ResponseError.create(response);
          throw err;
        }
        return response.json();
      }
      /**
       * Fetch the list of workspace IDs that exist on the server.
       *
       * @returns A promise that resolves if successful.
       */
      async list() {
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, "");
        const response = await makeRequest(url, {}, serverSettings);
        if (response.status !== 200) {
          const err = await ResponseError.create(response);
          throw err;
        }
        const result = await response.json();
        return result.workspaces;
      }
      /**
       * Remove a workspace from the server.
       *
       * @param id - The workspaces's ID.
       *
       * @returns A promise that resolves if successful.
       */
      async remove(id) {
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, id);
        const init = { method: "DELETE" };
        const response = await makeRequest(url, init, serverSettings);
        if (response.status !== 204) {
          const err = await ResponseError.create(response);
          throw err;
        }
      }
      /**
       * Save a workspace.
       *
       * @param id - The workspace's ID.
       *
       * @param workspace - The workspace being saved.
       *
       * @returns A promise that resolves if successful.
       */
      async save(id, workspace5) {
        const { serverSettings } = this;
        const { baseUrl, appUrl } = serverSettings;
        const { makeRequest, ResponseError } = serverconnection_1.ServerConnection;
        const base = baseUrl + appUrl;
        const url = Private.url(base, id);
        const init = { body: JSON.stringify(workspace5), method: "PUT" };
        const response = await makeRequest(url, init, serverSettings);
        if (response.status !== 204) {
          const err = await ResponseError.create(response);
          throw err;
        }
      }
    };
    exports2.WorkspaceManager = WorkspaceManager;
    var Private;
    (function(Private2) {
      function url(base, id) {
        const workspacesBase = coreutils_12.URLExt.join(base, SERVICE_WORKSPACES_URL);
        const result = coreutils_12.URLExt.join(workspacesBase, id);
        if (!result.startsWith(workspacesBase)) {
          throw new Error("Can only be used for workspaces requests");
        }
        return result;
      }
      Private2.url = url;
    })(Private || (Private = {}));
  }
});

// node_modules/@jupyterlab/services/lib/manager.js
var require_manager5 = __commonJS({
  "node_modules/@jupyterlab/services/lib/manager.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ServiceManager = void 0;
    var signaling_1 = require_dist3();
    var builder_1 = require_builder();
    var contents_1 = require_contents();
    var event_1 = require_event();
    var kernel_1 = require_kernel2();
    var kernelspec_1 = require_kernelspec2();
    var nbconvert_1 = require_nbconvert();
    var serverconnection_1 = require_serverconnection();
    var session_1 = require_session2();
    var setting_1 = require_setting();
    var terminal_1 = require_terminal2();
    var user_1 = require_user();
    var workspace_1 = require_workspace();
    var ServiceManager = class {
      /**
       * Construct a new services provider.
       */
      constructor(options = {}) {
        var _a7, _b;
        this._isDisposed = false;
        this._connectionFailure = new signaling_1.Signal(this);
        this._isReady = false;
        const defaultDrive = options.defaultDrive;
        const serverSettings = (_a7 = options.serverSettings) !== null && _a7 !== void 0 ? _a7 : serverconnection_1.ServerConnection.makeSettings();
        const standby = (_b = options.standby) !== null && _b !== void 0 ? _b : "when-hidden";
        const normalized = { defaultDrive, serverSettings, standby };
        this.serverSettings = serverSettings;
        this.contents = options.contents || new contents_1.ContentsManager(normalized);
        this.events = options.events || new event_1.EventManager(normalized);
        this.kernels = options.kernels || new kernel_1.KernelManager(normalized);
        this.sessions = options.sessions || new session_1.SessionManager({
          ...normalized,
          kernelManager: this.kernels
        });
        this.settings = options.settings || new setting_1.SettingManager(normalized);
        this.terminals = options.terminals || new terminal_1.TerminalManager(normalized);
        this.builder = options.builder || new builder_1.BuildManager(normalized);
        this.workspaces = options.workspaces || new workspace_1.WorkspaceManager(normalized);
        this.nbconvert = options.nbconvert || new nbconvert_1.NbConvertManager(normalized);
        this.kernelspecs = options.kernelspecs || new kernelspec_1.KernelSpecManager(normalized);
        this.user = options.user || new user_1.UserManager(normalized);
        this.kernelspecs.connectionFailure.connect(this._onConnectionFailure, this);
        this.sessions.connectionFailure.connect(this._onConnectionFailure, this);
        this.terminals.connectionFailure.connect(this._onConnectionFailure, this);
        const readyList = [this.sessions.ready, this.kernelspecs.ready];
        if (this.terminals.isAvailable()) {
          readyList.push(this.terminals.ready);
        }
        this._readyPromise = Promise.all(readyList).then(() => {
          this._isReady = true;
        });
      }
      /**
       * A signal emitted when there is a connection failure with the kernel.
       */
      get connectionFailure() {
        return this._connectionFailure;
      }
      /**
       * Test whether the service manager is disposed.
       */
      get isDisposed() {
        return this._isDisposed;
      }
      /**
       * Dispose of the resources used by the manager.
       */
      dispose() {
        if (this.isDisposed) {
          return;
        }
        this._isDisposed = true;
        signaling_1.Signal.clearData(this);
        this.contents.dispose();
        this.events.dispose();
        this.sessions.dispose();
        this.terminals.dispose();
      }
      /**
       * Test whether the manager is ready.
       */
      get isReady() {
        return this._isReady;
      }
      /**
       * A promise that fulfills when the manager is ready.
       */
      get ready() {
        return this._readyPromise;
      }
      _onConnectionFailure(sender, err) {
        this._connectionFailure.emit(err);
      }
    };
    exports2.ServiceManager = ServiceManager;
  }
});

// node_modules/@jupyterlab/services/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@jupyterlab/services/lib/index.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding2(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_basemanager(), exports2);
    __exportStar(require_config(), exports2);
    __exportStar(require_contents(), exports2);
    __exportStar(require_event(), exports2);
    __exportStar(require_kernel2(), exports2);
    __exportStar(require_kernelspec2(), exports2);
    __exportStar(require_manager5(), exports2);
    __exportStar(require_serverconnection(), exports2);
    __exportStar(require_session2(), exports2);
    __exportStar(require_setting(), exports2);
    __exportStar(require_terminal2(), exports2);
    __exportStar(require_user(), exports2);
    __exportStar(require_workspace(), exports2);
    __exportStar(require_nbconvert(), exports2);
  }
});

// node_modules/@microsoft/applicationinsights-shims/dist-esm/Constants.js
var strShimFunction, strShimObject, strShimUndefined, strShimPrototype, strShimHasOwnProperty, ObjClass, ObjProto, ObjAssign, ObjCreate, ObjDefineProperty, ObjHasOwnProperty;
var init_Constants = __esm({
  "node_modules/@microsoft/applicationinsights-shims/dist-esm/Constants.js"() {
    strShimFunction = "function";
    strShimObject = "object";
    strShimUndefined = "undefined";
    strShimPrototype = "prototype";
    strShimHasOwnProperty = "hasOwnProperty";
    ObjClass = Object;
    ObjProto = ObjClass[strShimPrototype];
    ObjAssign = ObjClass["assign"];
    ObjCreate = ObjClass["create"];
    ObjDefineProperty = ObjClass["defineProperty"];
    ObjHasOwnProperty = ObjProto[strShimHasOwnProperty];
  }
});

// node_modules/@microsoft/applicationinsights-shims/dist-esm/Helpers.js
function getGlobal(useCached) {
  if (useCached === void 0) {
    useCached = true;
  }
  var result = useCached === false ? null : _cachedGlobal;
  if (!result) {
    if (typeof globalThis !== strShimUndefined) {
      result = globalThis;
    }
    if (!result && typeof self !== strShimUndefined) {
      result = self;
    }
    if (!result && typeof window !== strShimUndefined) {
      result = window;
    }
    if (!result && typeof this !== strShimUndefined) {
      result = this;
    }
    _cachedGlobal = result;
  }
  return result;
}
function throwTypeError(message) {
  throw new TypeError(message);
}
function objCreateFn(obj) {
  var func = ObjCreate;
  if (func) {
    return func(obj);
  }
  if (obj == null) {
    return {};
  }
  var type = typeof obj;
  if (type !== strShimObject && type !== strShimFunction) {
    throwTypeError("Object prototype may only be an Object:" + obj);
  }
  function tmpFunc() {
  }
  tmpFunc[strShimPrototype] = obj;
  return new tmpFunc();
}
var _cachedGlobal;
var init_Helpers = __esm({
  "node_modules/@microsoft/applicationinsights-shims/dist-esm/Helpers.js"() {
    init_Constants();
    _cachedGlobal = null;
  }
});

// node_modules/@microsoft/applicationinsights-shims/dist-esm/TsLibShims.js
function __extendsFn(d, b) {
  if (typeof b !== strShimFunction && b !== null) {
    throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
  }
  extendStaticsFn(d, b);
  function __() {
    this.constructor = d;
  }
  d[strShimPrototype] = b === null ? objCreateFn(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
}
function __spreadArrayFn(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }
  return to;
}
var SymbolObj, ReflectObj, __objAssignFnImpl, __assignFn, extendStaticsFn;
var init_TsLibShims = __esm({
  "node_modules/@microsoft/applicationinsights-shims/dist-esm/TsLibShims.js"() {
    init_Constants();
    init_Helpers();
    SymbolObj = (getGlobal() || {})["Symbol"];
    ReflectObj = (getGlobal() || {})["Reflect"];
    __objAssignFnImpl = function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
          if (ObjProto[strShimHasOwnProperty].call(s, p)) {
            t[p] = s[p];
          }
        }
      }
      return t;
    };
    __assignFn = ObjAssign || __objAssignFnImpl;
    extendStaticsFn = function(d, b) {
      extendStaticsFn = ObjClass["setPrototypeOf"] || // tslint:disable-next-line: only-arrow-functions
      { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || // tslint:disable-next-line: only-arrow-functions
      function(d2, b2) {
        for (var p in b2) {
          if (b2[strShimHasOwnProperty](p)) {
            d2[p] = b2[p];
          }
        }
      };
      return extendStaticsFn(d, b);
    };
  }
});

// node_modules/@microsoft/applicationinsights-shims/dist-esm/TsLibGlobals.js
var init_TsLibGlobals = __esm({
  "node_modules/@microsoft/applicationinsights-shims/dist-esm/TsLibGlobals.js"() {
  }
});

// node_modules/@microsoft/applicationinsights-shims/dist-esm/applicationinsights-shims.js
var init_applicationinsights_shims = __esm({
  "node_modules/@microsoft/applicationinsights-shims/dist-esm/applicationinsights-shims.js"() {
    init_Constants();
    init_Helpers();
    init_TsLibShims();
    init_TsLibGlobals();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Interfaces/IChannelControls.js
var MinChannelPriorty;
var init_IChannelControls = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Interfaces/IChannelControls.js"() {
    "use strict";
    MinChannelPriorty = 100;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/__DynamicConstants.js
var _DYN_INITIALIZE, _DYN_NAME, _DYN_GET_NOTIFY_MGR, _DYN_IDENTIFIER, _DYN_PUSH, _DYN_IS_INITIALIZED, _DYN_CONFIG, _DYN_INSTRUMENTATION_KEY, _DYN_LOGGER, _DYN_LENGTH, _DYN_TIME, _DYN_PROCESS_NEXT, _DYN_GET_PROCESS_TEL_CONT0, _DYN_ADD_NOTIFICATION_LIS1, _DYN_REMOVE_NOTIFICATION_2, _DYN_STOP_POLLING_INTERNA3, _DYN_ON_COMPLETE, _DYN_GET_PLUGIN, _DYN_FLUSH, _DYN__EXTENSIONS, _DYN_SPLICE, _DYN_TEARDOWN, _DYN_MESSAGE_ID, _DYN_MESSAGE, _DYN_IS_ASYNC, _DYN__DO_TEARDOWN, _DYN_UPDATE, _DYN_GET_NEXT, _DYN_DIAG_LOG, _DYN_SET_NEXT_PLUGIN, _DYN_CREATE_NEW, _DYN_COOKIE_CFG, _DYN_INDEX_OF, _DYN_SUBSTRING, _DYN_USER_AGENT, _DYN_SPLIT, _DYN_SET_ENABLED, _DYN_SUBSTR, _DYN_NODE_TYPE, _DYN_APPLY, _DYN_REPLACE, _DYN_ENABLE_DEBUG_EXCEPTI4, _DYN_LOG_INTERNAL_MESSAGE, _DYN_TO_LOWER_CASE, _DYN_CALL, _DYN_TYPE, _DYN_HANDLER, _DYN_LISTENERS, _DYN_IS_CHILD_EVT, _DYN_GET_CTX, _DYN_SET_CTX, _DYN_COMPLETE, _DYN_TRACE_ID, _DYN_SPAN_ID, _DYN_TRACE_FLAGS, _DYN_VERSION;
var init_DynamicConstants = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/__DynamicConstants.js"() {
    _DYN_INITIALIZE = "initialize";
    _DYN_NAME = "name";
    _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
    _DYN_IDENTIFIER = "identifier";
    _DYN_PUSH = "push";
    _DYN_IS_INITIALIZED = "isInitialized";
    _DYN_CONFIG = "config";
    _DYN_INSTRUMENTATION_KEY = "instrumentationKey";
    _DYN_LOGGER = "logger";
    _DYN_LENGTH = "length";
    _DYN_TIME = "time";
    _DYN_PROCESS_NEXT = "processNext";
    _DYN_GET_PROCESS_TEL_CONT0 = "getProcessTelContext";
    _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
    _DYN_REMOVE_NOTIFICATION_2 = "removeNotificationListener";
    _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
    _DYN_ON_COMPLETE = "onComplete";
    _DYN_GET_PLUGIN = "getPlugin";
    _DYN_FLUSH = "flush";
    _DYN__EXTENSIONS = "_extensions";
    _DYN_SPLICE = "splice";
    _DYN_TEARDOWN = "teardown";
    _DYN_MESSAGE_ID = "messageId";
    _DYN_MESSAGE = "message";
    _DYN_IS_ASYNC = "isAsync";
    _DYN__DO_TEARDOWN = "_doTeardown";
    _DYN_UPDATE = "update";
    _DYN_GET_NEXT = "getNext";
    _DYN_DIAG_LOG = "diagLog";
    _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
    _DYN_CREATE_NEW = "createNew";
    _DYN_COOKIE_CFG = "cookieCfg";
    _DYN_INDEX_OF = "indexOf";
    _DYN_SUBSTRING = "substring";
    _DYN_USER_AGENT = "userAgent";
    _DYN_SPLIT = "split";
    _DYN_SET_ENABLED = "setEnabled";
    _DYN_SUBSTR = "substr";
    _DYN_NODE_TYPE = "nodeType";
    _DYN_APPLY = "apply";
    _DYN_REPLACE = "replace";
    _DYN_ENABLE_DEBUG_EXCEPTI4 = "enableDebugExceptions";
    _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
    _DYN_TO_LOWER_CASE = "toLowerCase";
    _DYN_CALL = "call";
    _DYN_TYPE = "type";
    _DYN_HANDLER = "handler";
    _DYN_LISTENERS = "listeners";
    _DYN_IS_CHILD_EVT = "isChildEvt";
    _DYN_GET_CTX = "getCtx";
    _DYN_SET_CTX = "setCtx";
    _DYN_COMPLETE = "complete";
    _DYN_TRACE_ID = "traceId";
    _DYN_SPAN_ID = "spanId";
    _DYN_TRACE_FLAGS = "traceFlags";
    _DYN_VERSION = "version";
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/InternalConstants.js
var STR_EMPTY, STR_CHANNELS, STR_CORE, STR_CREATE_PERF_MGR, STR_DISABLED, STR_EXTENSION_CONFIG, STR_EXTENSIONS, STR_PROCESS_TELEMETRY, STR_PRIORITY, STR_EVENTS_SENT, STR_EVENTS_DISCARDED, STR_EVENTS_SEND_REQUEST, STR_PERF_EVENT, STR_ERROR_TO_CONSOLE, STR_WARN_TO_CONSOLE, STR_GET_PERF_MGR;
var init_InternalConstants = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/InternalConstants.js"() {
    STR_EMPTY = "";
    STR_CHANNELS = "channels";
    STR_CORE = "core";
    STR_CREATE_PERF_MGR = "createPerfMgr";
    STR_DISABLED = "disabled";
    STR_EXTENSION_CONFIG = "extensionConfig";
    STR_EXTENSIONS = "extensions";
    STR_PROCESS_TELEMETRY = "processTelemetry";
    STR_PRIORITY = "priority";
    STR_EVENTS_SENT = "eventsSent";
    STR_EVENTS_DISCARDED = "eventsDiscarded";
    STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
    STR_PERF_EVENT = "perfEvent";
    STR_ERROR_TO_CONSOLE = "errorToConsole";
    STR_WARN_TO_CONSOLE = "warnToConsole";
    STR_GET_PERF_MGR = "getPerfMgr";
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/HelperFuncs.js
function _getObjProto(target) {
  if (target) {
    if (_objGetPrototypeOf) {
      return _objGetPrototypeOf(target);
    }
    var newProto = target[str__Proto] || target[strShimPrototype] || target[strConstructor];
    if (newProto) {
      return newProto;
    }
  }
  return null;
}
function isTypeof(value, theType) {
  return typeof value === theType;
}
function isUndefined(value) {
  return value === void 0 || typeof value === strShimUndefined;
}
function isNullOrUndefined(value) {
  return value === null || isUndefined(value);
}
function isNotNullOrUndefined(value) {
  return !isNullOrUndefined(value);
}
function hasOwnProperty(obj, prop) {
  return !!(obj && ObjHasOwnProperty[
    _DYN_CALL
    /* @min:%2ecall */
  ](obj, prop));
}
function isObject(value) {
  return !!(value && typeof value === strShimObject);
}
function isFunction(value) {
  return !!(value && typeof value === strShimFunction);
}
function normalizeJsName(name2) {
  var value = name2;
  if (value && isString(value)) {
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rCamelCase, function(_all, letter) {
      return letter.toUpperCase();
    });
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rNormalizeInvalid, "_");
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rLeadingNumeric, function(_all, match) {
      return "_" + match;
    });
  }
  return value;
}
function objForEachKey(target, callbackfn) {
  if (target) {
    for (var prop in target) {
      if (ObjHasOwnProperty[
        _DYN_CALL
        /* @min:%2ecall */
      ](target, prop)) {
        callbackfn[
          _DYN_CALL
          /* @min:%2ecall */
        ](target, prop, target[prop]);
      }
    }
  }
}
function strEndsWith(value, search) {
  var result = false;
  if (value && search && !(result = value === search)) {
    result = _strEndsWith ? value[cStrEndsWith](search) : _strEndsWithPoly(value, search);
  }
  return result;
}
function _strEndsWithPoly(value, search) {
  var result = false;
  var searchLen = search ? search[
    _DYN_LENGTH
    /* @min:%2elength */
  ] : 0;
  var valLen = value ? value[
    _DYN_LENGTH
    /* @min:%2elength */
  ] : 0;
  if (searchLen && valLen && valLen >= searchLen && !(result = value === search)) {
    var pos = valLen - 1;
    for (var lp = searchLen - 1; lp >= 0; lp--) {
      if (value[pos] != search[lp]) {
        return false;
      }
      pos--;
    }
    result = true;
  }
  return result;
}
function strStartsWith(value, checkValue) {
  var result = false;
  if (value && checkValue && !(result = value === checkValue)) {
    result = _strStartsWith ? value[cStrStartsWith](checkValue) : _strStartsWithPoly(value, checkValue);
  }
  return result;
}
function _strStartsWithPoly(value, checkValue) {
  var result = false;
  var chkLen = checkValue ? checkValue[
    _DYN_LENGTH
    /* @min:%2elength */
  ] : 0;
  if (value && chkLen && value[
    _DYN_LENGTH
    /* @min:%2elength */
  ] >= chkLen && !(result = value === checkValue)) {
    for (var lp = 0; lp < chkLen; lp++) {
      if (value[lp] !== checkValue[lp]) {
        return false;
      }
    }
    result = true;
  }
  return result;
}
function strContains(value, search) {
  if (value && search) {
    return value[
      _DYN_INDEX_OF
      /* @min:%2eindexOf */
    ](search) !== -1;
  }
  return false;
}
function isDate(obj) {
  return !!(obj && _objToString[
    _DYN_CALL
    /* @min:%2ecall */
  ](obj) === "[object Date]");
}
function _isArrayPoly(obj) {
  return !!(obj && _objToString[
    _DYN_CALL
    /* @min:%2ecall */
  ](obj) === "[object Array]");
}
function isError(obj) {
  return !!(obj && _objToString[
    _DYN_CALL
    /* @min:%2ecall */
  ](obj) === "[object Error]");
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isPlainObject(value) {
  var result = false;
  if (value && typeof value === "object") {
    var proto = _objGetPrototypeOf ? _objGetPrototypeOf(value) : _getObjProto(value);
    if (!proto) {
      result = true;
    } else {
      if (proto[strConstructor] && ObjHasOwnProperty[
        _DYN_CALL
        /* @min:%2ecall */
      ](proto, strConstructor)) {
        proto = proto[strConstructor];
      }
      result = typeof proto === strShimFunction && _fnToString[
        _DYN_CALL
        /* @min:%2ecall */
      ](proto) === _objFunctionString;
    }
  }
  return result;
}
function toISOString(date) {
  if (date) {
    return _dataToISOString ? date[strToISOString]() : _toISOStringPoly(date);
  }
}
function _toISOStringPoly(date) {
  if (date && date.getUTCFullYear) {
    var pad = function(num) {
      var r = String(num);
      if (r[
        _DYN_LENGTH
        /* @min:%2elength */
      ] === 1) {
        r = "0" + r;
      }
      return r;
    };
    return date.getUTCFullYear() + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + "T" + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + "." + String((date.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
  }
}
function arrForEach(arr, callbackfn, thisArg) {
  var len = arr[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  try {
    for (var idx = 0; idx < len; idx++) {
      if (idx in arr) {
        if (callbackfn[
          _DYN_CALL
          /* @min:%2ecall */
        ](thisArg || arr, arr[idx], idx, arr) === -1) {
          break;
        }
      }
    }
  } catch (e) {
  }
}
function arrIndexOf(arr, searchElement, fromIndex) {
  if (arr) {
    if (arr[strIndexOf]) {
      return arr[strIndexOf](searchElement, fromIndex);
    }
    var len = arr[
      _DYN_LENGTH
      /* @min:%2elength */
    ];
    var from = fromIndex || 0;
    try {
      for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
        if (lp in arr && arr[lp] === searchElement) {
          return lp;
        }
      }
    } catch (e) {
    }
  }
  return -1;
}
function arrMap(arr, callbackfn, thisArg) {
  var results;
  if (arr) {
    if (arr[strMap]) {
      return arr[strMap](callbackfn, thisArg);
    }
    var len = arr[
      _DYN_LENGTH
      /* @min:%2elength */
    ];
    var _this = thisArg || arr;
    results = new Array(len);
    try {
      for (var lp = 0; lp < len; lp++) {
        if (lp in arr) {
          results[lp] = callbackfn[
            _DYN_CALL
            /* @min:%2ecall */
          ](_this, arr[lp], arr);
        }
      }
    } catch (e) {
    }
  }
  return results;
}
function arrReduce(arr, callbackfn, initialValue) {
  var value;
  if (arr) {
    if (arr[strReduce]) {
      return arr[strReduce](callbackfn, initialValue);
    }
    var len = arr[
      _DYN_LENGTH
      /* @min:%2elength */
    ];
    var lp = 0;
    if (arguments[
      _DYN_LENGTH
      /* @min:%2elength */
    ] >= 3) {
      value = arguments[2];
    } else {
      while (lp < len && !(lp in arr)) {
        lp++;
      }
      value = arr[lp++];
    }
    while (lp < len) {
      if (lp in arr) {
        value = callbackfn(value, arr[lp], lp, arr);
      }
      lp++;
    }
  }
  return value;
}
function strTrim(str) {
  if (str) {
    str = _strTrim && str[cStrTrim] ? str[cStrTrim]() : str[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ] ? str[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](/^\s+|(?=\s)\s+$/g, STR_EMPTY) : str;
  }
  return str;
}
function objKeys(obj) {
  var objType = typeof obj;
  if (objType !== strShimFunction && (objType !== strShimObject || obj === null)) {
    throwTypeError("objKeys called on non-object");
  }
  if (!_objKeysHasDontEnumBug && _objKeys) {
    return _objKeys(obj);
  }
  var result = [];
  for (var prop in obj) {
    if (obj && ObjHasOwnProperty[
      _DYN_CALL
      /* @min:%2ecall */
    ](obj, prop)) {
      result[
        _DYN_PUSH
        /* @min:%2epush */
      ](prop);
    }
  }
  if (_objKeysHasDontEnumBug) {
    var dontEnumsLength = _objKeysDontEnums[
      _DYN_LENGTH
      /* @min:%2elength */
    ];
    for (var lp = 0; lp < dontEnumsLength; lp++) {
      if (obj && ObjHasOwnProperty[
        _DYN_CALL
        /* @min:%2ecall */
      ](obj, _objKeysDontEnums[lp])) {
        result[
          _DYN_PUSH
          /* @min:%2epush */
        ](_objKeysDontEnums[lp]);
      }
    }
  }
  return result;
}
function objDefineAccessors(target, prop, getProp, setProp) {
  if (_objDefineProperty) {
    try {
      var descriptor = {
        enumerable: true,
        configurable: true
      };
      if (getProp) {
        descriptor.get = getProp;
      }
      if (setProp) {
        descriptor.set = setProp;
      }
      _objDefineProperty(target, prop, descriptor);
      return true;
    } catch (e) {
    }
  }
  return false;
}
function _doNothing(value) {
  return value;
}
function deepFreeze(obj) {
  if (_objFreeze) {
    objForEachKey(obj, function(name2, value) {
      if (isArray(value) || isObject(value)) {
        _objFreeze(value);
      }
    });
  }
  return objFreeze(obj);
}
function dateNow() {
  var dt = Date;
  return dt.now ? dt.now() : new dt().getTime();
}
function getExceptionName(object) {
  if (isError(object)) {
    return object[
      _DYN_NAME
      /* @min:%2ename */
    ];
  }
  return STR_EMPTY;
}
function setValue(target, field, value, valChk, srcChk) {
  var theValue = value;
  if (target) {
    theValue = target[field];
    if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
      theValue = value;
      target[field] = theValue;
    }
  }
  return theValue;
}
function getSetValue(target, field, defValue) {
  var theValue;
  if (target) {
    theValue = target[field];
    if (!theValue && isNullOrUndefined(theValue)) {
      theValue = !isUndefined(defValue) ? defValue : {};
      target[field] = theValue;
    }
  } else {
    theValue = !isUndefined(defValue) ? defValue : {};
  }
  return theValue;
}
function getCfgValue(theValue, defaultValue) {
  return !isNullOrUndefined(theValue) ? theValue : defaultValue;
}
function isNotTruthy(value) {
  return !value;
}
function isTruthy(value) {
  return !!value;
}
function throwError(message) {
  throw new Error(message);
}
function _createProxyFunction(source, funcName) {
  var srcFunc = null;
  var src = null;
  if (isFunction(source)) {
    srcFunc = source;
  } else {
    src = source;
  }
  return function() {
    var originalArguments = arguments;
    if (srcFunc) {
      src = srcFunc();
    }
    if (src) {
      return src[funcName][
        _DYN_APPLY
        /* @min:%2eapply */
      ](src, originalArguments);
    }
  };
}
function proxyAssign(target, source, chkSet) {
  if (target && source && isObject(target) && isObject(source)) {
    var _loop_1 = function(field2) {
      if (isString(field2)) {
        var value = source[field2];
        if (isFunction(value)) {
          if (!chkSet || chkSet(field2, true, source, target)) {
            target[field2] = _createProxyFunction(source, field2);
          }
        } else if (!chkSet || chkSet(field2, false, source, target)) {
          if (hasOwnProperty(target, field2)) {
            delete target[field2];
          }
          if (!objDefineAccessors(target, field2, function() {
            return source[field2];
          }, function(theValue) {
            source[field2] = theValue;
          })) {
            target[field2] = value;
          }
        }
      }
    };
    for (var field in source) {
      _loop_1(field);
    }
  }
  return target;
}
function proxyFunctionAs(target, name2, source, theFunc, overwriteTarget) {
  if (target && name2 && source) {
    if (overwriteTarget !== false || isUndefined(target[name2])) {
      target[name2] = _createProxyFunction(source, theFunc);
    }
  }
}
function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
  if (target && source && isObject(target) && isArray(functionsToProxy)) {
    arrForEach(functionsToProxy, function(theFuncName) {
      if (isString(theFuncName)) {
        proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
      }
    });
  }
  return target;
}
function createClassFromInterface(defaults) {
  return (
    /** @class */
    function() {
      function class_1() {
        var _this_1 = this;
        if (defaults) {
          objForEachKey(defaults, function(field, value) {
            _this_1[field] = value;
          });
        }
      }
      return class_1;
    }()
  );
}
function optimizeObject(theObject) {
  if (theObject && ObjAssign) {
    theObject = ObjClass(ObjAssign({}, theObject));
  }
  return theObject;
}
function objExtend(obj1, obj2, obj3, obj4, obj5, obj6) {
  var theArgs = arguments;
  var extended = theArgs[0] || {};
  var argLen = theArgs[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  var deep = false;
  var idx = 1;
  if (argLen > 0 && isBoolean(extended)) {
    deep = extended;
    extended = theArgs[idx] || {};
    idx++;
  }
  if (!isObject(extended)) {
    extended = {};
  }
  for (; idx < argLen; idx++) {
    var arg = theArgs[idx];
    var isArgArray = isArray(arg);
    var isArgObj = isObject(arg);
    for (var prop in arg) {
      var propOk = isArgArray && prop in arg || isArgObj && ObjHasOwnProperty[
        _DYN_CALL
        /* @min:%2ecall */
      ](arg, prop);
      if (!propOk) {
        continue;
      }
      var newValue = arg[prop];
      var isNewArray = void 0;
      if (deep && newValue && ((isNewArray = isArray(newValue)) || isPlainObject(newValue))) {
        var clone = extended[prop];
        if (isNewArray) {
          if (!isArray(clone)) {
            clone = [];
          }
        } else if (!isPlainObject(clone)) {
          clone = {};
        }
        newValue = objExtend(deep, clone, newValue);
      }
      if (newValue !== void 0) {
        extended[prop] = newValue;
      }
    }
  }
  return extended;
}
var strToISOString, cStrEndsWith, cStrStartsWith, strIndexOf, strMap, strReduce, cStrTrim, strToString, str__Proto, strConstructor, _objDefineProperty, _objFreeze, _objSeal, _objKeys, StringProto, _strTrim, _strEndsWith, _strStartsWith, DateProto, _dataToISOString, _isArray, _objToString, _fnToString, _objFunctionString, rCamelCase, rNormalizeInvalid, rLeadingNumeric, _objGetPrototypeOf, isArray, _objKeysHasDontEnumBug, _objKeysDontEnums, objFreeze, objSeal;
var init_HelperFuncs = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/HelperFuncs.js"() {
    init_applicationinsights_shims();
    init_DynamicConstants();
    init_InternalConstants();
    strToISOString = "toISOString";
    cStrEndsWith = "endsWith";
    cStrStartsWith = "startsWith";
    strIndexOf = "indexOf";
    strMap = "map";
    strReduce = "reduce";
    cStrTrim = "trim";
    strToString = "toString";
    str__Proto = "__proto__";
    strConstructor = "constructor";
    _objDefineProperty = ObjDefineProperty;
    _objFreeze = ObjClass.freeze;
    _objSeal = ObjClass.seal;
    _objKeys = ObjClass.keys;
    StringProto = String[strShimPrototype];
    _strTrim = StringProto[cStrTrim];
    _strEndsWith = StringProto[cStrEndsWith];
    _strStartsWith = StringProto[cStrStartsWith];
    DateProto = Date[strShimPrototype];
    _dataToISOString = DateProto[strToISOString];
    _isArray = Array.isArray;
    _objToString = ObjProto[strToString];
    _fnToString = ObjHasOwnProperty[strToString];
    _objFunctionString = _fnToString[
      _DYN_CALL
      /* @min:%2ecall */
    ](ObjClass);
    rCamelCase = /-([a-z])/g;
    rNormalizeInvalid = /([^\w\d_$])/g;
    rLeadingNumeric = /^(\d+[\w\d_$])/;
    _objGetPrototypeOf = Object["getPrototypeOf"];
    isArray = _isArray || _isArrayPoly;
    _objKeysHasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
    _objKeysDontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    objFreeze = _objFreeze || _doNothing;
    objSeal = _objSeal || _doNothing;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/EnumHelperFuncs.js
function createEnumStyle(values) {
  var enumClass = {};
  objForEachKey(values, function(field, value) {
    enumClass[field] = value;
    enumClass[value] = field;
  });
  return deepFreeze(enumClass);
}
function createValueMap(values) {
  var mapClass = {};
  objForEachKey(values, function(field, value) {
    mapClass[field] = value[1];
    mapClass[value[0]] = value[1];
  });
  return deepFreeze(mapClass);
}
var init_EnumHelperFuncs = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/EnumHelperFuncs.js"() {
    init_HelperFuncs();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/EventsDiscardedReason.js
var EventsDiscardedReason;
var init_EventsDiscardedReason = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/EventsDiscardedReason.js"() {
    init_EnumHelperFuncs();
    EventsDiscardedReason = createEnumStyle({
      /**
       * Unknown.
       */
      Unknown: 0,
      /**
       * Status set to non-retryable.
       */
      NonRetryableStatus: 1,
      /**
       * The event is invalid.
       */
      InvalidEvent: 2,
      /**
       * The size of the event is too large.
       */
      SizeLimitExceeded: 3,
      /**
       * The server is not accepting events from this instrumentation key.
       */
      KillSwitch: 4,
      /**
       * The event queue is full.
       */
      QueueFull: 5
      /* eEventsDiscardedReason.QueueFull */
    });
  }
});

// node_modules/@microsoft/dynamicproto-js/lib/dist/esm/dynamicproto-js.js
function _getGlobal() {
  var result;
  if (typeof globalThis !== UNDEFINED) {
    result = globalThis;
  }
  if (!result && typeof self !== UNDEFINED) {
    result = self;
  }
  if (!result && typeof window !== UNDEFINED) {
    result = window;
  }
  if (!result && typeof this !== UNDEFINED) {
    result = this;
  }
  return result || {};
}
function _hasOwnProperty(obj, prop) {
  return obj && Obj[Prototype].hasOwnProperty.call(obj, prop);
}
function _isObjectOrArrayPrototype(target) {
  return target && (target === Obj[Prototype] || target === Array[Prototype]);
}
function _isObjectArrayOrFunctionPrototype(target) {
  return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
}
function _getObjProto2(target) {
  var newProto;
  if (target) {
    if (_objGetPrototypeOf2) {
      return _objGetPrototypeOf2(target);
    }
    var curProto = target[str__Proto2] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
    newProto = target[DynProtoBaseProto] || curProto;
    if (!_hasOwnProperty(target, DynProtoBaseProto)) {
      delete target[DynProtoCurrent];
      newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
      target[DynProtoCurrent] = curProto;
    }
  }
  return newProto;
}
function _forEachProp(target, func) {
  var props = [];
  if (_objGetOwnProps) {
    props = _objGetOwnProps(target);
  } else {
    for (var name_1 in target) {
      if (typeof name_1 === "string" && _hasOwnProperty(target, name_1)) {
        props.push(name_1);
      }
    }
  }
  if (props && props.length > 0) {
    for (var lp = 0; lp < props.length; lp++) {
      func(props[lp]);
    }
  }
}
function _isDynamicCandidate(target, funcName, skipOwn) {
  return funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || _hasOwnProperty(target, funcName));
}
function _throwTypeError(message) {
  throw new TypeError("DynamicProto: " + message);
}
function _getInstanceFuncs(thisTarget) {
  var instFuncs = {};
  _forEachProp(thisTarget, function(name2) {
    if (!instFuncs[name2] && _isDynamicCandidate(thisTarget, name2, false)) {
      instFuncs[name2] = thisTarget[name2];
    }
  });
  return instFuncs;
}
function _hasVisited(values, value) {
  for (var lp = values.length - 1; lp >= 0; lp--) {
    if (values[lp] === value) {
      return true;
    }
  }
  return false;
}
function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
  function _instFuncProxy(target, funcHost, funcName) {
    var theFunc = funcHost[funcName];
    if (theFunc[DynProxyTag] && useBaseInst) {
      var instFuncTable = target[DynInstFuncTable] || {};
      if (instFuncTable[DynAllowInstChkTag] !== false) {
        theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
      }
    }
    return function() {
      return theFunc.apply(target, arguments);
    };
  }
  var baseFuncs = {};
  _forEachProp(instFuncs, function(name2) {
    baseFuncs[name2] = _instFuncProxy(thisTarget, instFuncs, name2);
  });
  var baseProto = _getObjProto2(classProto);
  var visited = [];
  while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
    _forEachProp(baseProto, function(name2) {
      if (!baseFuncs[name2] && _isDynamicCandidate(baseProto, name2, !_objGetPrototypeOf2)) {
        baseFuncs[name2] = _instFuncProxy(thisTarget, baseProto, name2);
      }
    });
    visited.push(baseProto);
    baseProto = _getObjProto2(baseProto);
  }
  return baseFuncs;
}
function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
  var instFunc = null;
  if (target && _hasOwnProperty(proto, DynClassName)) {
    var instFuncTable = target[DynInstFuncTable] || {};
    instFunc = (instFuncTable[proto[DynClassName]] || {})[funcName];
    if (!instFunc) {
      _throwTypeError("Missing [" + funcName + "] " + strFunction);
    }
    if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
      var canAddInst = !_hasOwnProperty(target, funcName);
      var objProto = _getObjProto2(target);
      var visited = [];
      while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
        var protoFunc = objProto[funcName];
        if (protoFunc) {
          canAddInst = protoFunc === currentDynProtoProxy;
          break;
        }
        visited.push(objProto);
        objProto = _getObjProto2(objProto);
      }
      try {
        if (canAddInst) {
          target[funcName] = instFunc;
        }
        instFunc[DynInstChkTag] = 1;
      } catch (e) {
        instFuncTable[DynAllowInstChkTag] = false;
      }
    }
  }
  return instFunc;
}
function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
  var protoFunc = proto[funcName];
  if (protoFunc === currentDynProtoProxy) {
    protoFunc = _getObjProto2(proto)[funcName];
  }
  if (typeof protoFunc !== strFunction) {
    _throwTypeError("[" + funcName + "] is not a " + strFunction);
  }
  return protoFunc;
}
function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
  function _createDynamicPrototype(proto2, funcName) {
    var dynProtoProxy = function() {
      var instFunc = _getInstFunc(this, funcName, proto2, dynProtoProxy) || _getProtoFunc(funcName, proto2, dynProtoProxy);
      return instFunc.apply(this, arguments);
    };
    dynProtoProxy[DynProxyTag] = 1;
    return dynProtoProxy;
  }
  if (!_isObjectOrArrayPrototype(proto)) {
    var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || {};
    var instFuncs_1 = instFuncTable[className] = instFuncTable[className] || {};
    if (instFuncTable[DynAllowInstChkTag] !== false) {
      instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
    }
    _forEachProp(target, function(name2) {
      if (_isDynamicCandidate(target, name2, false) && target[name2] !== baseInstFuncs[name2]) {
        instFuncs_1[name2] = target[name2];
        delete target[name2];
        if (!_hasOwnProperty(proto, name2) || proto[name2] && !proto[name2][DynProxyTag]) {
          proto[name2] = _createDynamicPrototype(proto, name2);
        }
      }
    });
  }
}
function _checkPrototype(classProto, thisTarget) {
  if (_objGetPrototypeOf2) {
    var visited = [];
    var thisProto = _getObjProto2(thisTarget);
    while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
      if (thisProto === classProto) {
        return true;
      }
      visited.push(thisProto);
      thisProto = _getObjProto2(thisProto);
    }
    return false;
  }
  return true;
}
function _getObjName(target, unknownValue) {
  if (_hasOwnProperty(target, Prototype)) {
    return target.name || unknownValue || UnknownValue;
  }
  return ((target || {})[Constructor] || {}).name || unknownValue || UnknownValue;
}
function dynamicProto(theClass, target, delegateFunc, options) {
  if (!_hasOwnProperty(theClass, Prototype)) {
    _throwTypeError("theClass is an invalid class definition.");
  }
  var classProto = theClass[Prototype];
  if (!_checkPrototype(classProto, target)) {
    _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
  }
  var className = null;
  if (_hasOwnProperty(classProto, DynClassName)) {
    className = classProto[DynClassName];
  } else {
    className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
    _gblInst.n++;
    classProto[DynClassName] = className;
  }
  var perfOptions = dynamicProto[DynProtoDefaultOptions];
  var useBaseInst = !!perfOptions[strUseBaseInst];
  if (useBaseInst && options && options[strUseBaseInst] !== void 0) {
    useBaseInst = !!options[strUseBaseInst];
  }
  var instFuncs = _getInstanceFuncs(target);
  var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
  delegateFunc(target, baseFuncs);
  var setInstanceFunc = !!_objGetPrototypeOf2 && !!perfOptions[strSetInstFuncs];
  if (setInstanceFunc && options) {
    setInstanceFunc = !!options[strSetInstFuncs];
  }
  _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
}
var _a, UNDEFINED, Constructor, Prototype, strFunction, DynInstFuncTable, DynProxyTag, DynClassName, DynClassNamePrefix, DynInstChkTag, DynAllowInstChkTag, DynProtoDefaultOptions, UnknownValue, str__Proto2, DynProtoBaseProto, DynProtoGlobalSettings, DynProtoCurrent, strUseBaseInst, strSetInstFuncs, Obj, _objGetPrototypeOf2, _objGetOwnProps, _gbl, _gblInst;
var init_dynamicproto_js = __esm({
  "node_modules/@microsoft/dynamicproto-js/lib/dist/esm/dynamicproto-js.js"() {
    UNDEFINED = "undefined";
    Constructor = "constructor";
    Prototype = "prototype";
    strFunction = "function";
    DynInstFuncTable = "_dynInstFuncs";
    DynProxyTag = "_isDynProxy";
    DynClassName = "_dynClass";
    DynClassNamePrefix = "_dynCls$";
    DynInstChkTag = "_dynInstChk";
    DynAllowInstChkTag = DynInstChkTag;
    DynProtoDefaultOptions = "_dfOpts";
    UnknownValue = "_unknown_";
    str__Proto2 = "__proto__";
    DynProtoBaseProto = "_dyn" + str__Proto2;
    DynProtoGlobalSettings = "__dynProto$Gbl";
    DynProtoCurrent = "_dynInstProto";
    strUseBaseInst = "useBaseInst";
    strSetInstFuncs = "setInstFuncs";
    Obj = Object;
    _objGetPrototypeOf2 = Obj["getPrototypeOf"];
    _objGetOwnProps = Obj["getOwnPropertyNames"];
    _gbl = _getGlobal();
    _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
      o: (_a = {}, _a[strSetInstFuncs] = true, _a[strUseBaseInst] = true, _a),
      n: 1e3
      // Start new global index @ 1000 so we "fix" some cases when mixed with 1.1.6 or earlier
    });
    dynamicProto[DynProtoDefaultOptions] = _gblInst.o;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/EnvUtils.js
function _hasProperty(theClass, property) {
  var supported = false;
  if (theClass) {
    try {
      supported = property in theClass;
      if (!supported) {
        var proto = theClass[strShimPrototype];
        if (proto) {
          supported = property in proto;
        }
      }
    } catch (e) {
    }
    if (!supported) {
      try {
        var tmp = new theClass();
        supported = !isUndefined(tmp[property]);
      } catch (e) {
      }
    }
  }
  return supported;
}
function setEnableEnvMocks(enabled) {
  _enableMocks = enabled;
}
function getGlobalInst(name2) {
  var gbl = getGlobal();
  if (gbl && gbl[name2]) {
    return gbl[name2];
  }
  if (name2 === strWindow && hasWindow()) {
    return window;
  }
  return null;
}
function hasWindow() {
  return Boolean(typeof window === strShimObject && window);
}
function getWindow() {
  if (hasWindow()) {
    return window;
  }
  return getGlobalInst(strWindow);
}
function hasDocument() {
  return Boolean(typeof document === strShimObject && document);
}
function getDocument() {
  if (hasDocument()) {
    return document;
  }
  return getGlobalInst(strDocument);
}
function hasNavigator() {
  return Boolean(typeof navigator === strShimObject && navigator);
}
function getNavigator() {
  if (hasNavigator()) {
    return navigator;
  }
  return getGlobalInst(strNavigator);
}
function hasHistory() {
  return Boolean(typeof history === strShimObject && history);
}
function getHistory() {
  if (hasHistory()) {
    return history;
  }
  return getGlobalInst(strHistory);
}
function getLocation(checkForMock) {
  if (checkForMock && _enableMocks) {
    var mockLocation = getGlobalInst("__mockLocation");
    if (mockLocation) {
      return mockLocation;
    }
  }
  if (typeof location === strShimObject && location) {
    return location;
  }
  return getGlobalInst(strLocation);
}
function getConsole() {
  if (typeof console !== strShimUndefined) {
    return console;
  }
  return getGlobalInst(strConsole);
}
function getPerformance() {
  return getGlobalInst(strPerformance);
}
function hasJSON() {
  return Boolean(typeof JSON === strShimObject && JSON || getGlobalInst(strJSON) !== null);
}
function getJSON() {
  if (hasJSON()) {
    return JSON || getGlobalInst(strJSON);
  }
  return null;
}
function getCrypto() {
  return getGlobalInst(strCrypto);
}
function getMsCrypto() {
  return getGlobalInst(strMsCrypto);
}
function isReactNative() {
  var nav = getNavigator();
  if (nav && nav.product) {
    return nav.product === strReactNative;
  }
  return false;
}
function isIE() {
  var nav = getNavigator();
  if (nav && (nav[
    _DYN_USER_AGENT
    /* @min:%2euserAgent */
  ] !== _navUserAgentCheck || _isTrident === null)) {
    _navUserAgentCheck = nav[
      _DYN_USER_AGENT
      /* @min:%2euserAgent */
    ];
    var userAgent = (_navUserAgentCheck || STR_EMPTY)[
      _DYN_TO_LOWER_CASE
      /* @min:%2etoLowerCase */
    ]();
    _isTrident = strContains(userAgent, strMsie) || strContains(userAgent, strTrident);
  }
  return _isTrident;
}
function getIEVersion(userAgentStr) {
  if (userAgentStr === void 0) {
    userAgentStr = null;
  }
  if (!userAgentStr) {
    var navigator_1 = getNavigator() || {};
    userAgentStr = navigator_1 ? (navigator_1[
      _DYN_USER_AGENT
      /* @min:%2euserAgent */
    ] || STR_EMPTY)[
      _DYN_TO_LOWER_CASE
      /* @min:%2etoLowerCase */
    ]() : STR_EMPTY;
  }
  var ua = (userAgentStr || STR_EMPTY)[
    _DYN_TO_LOWER_CASE
    /* @min:%2etoLowerCase */
  ]();
  if (strContains(ua, strMsie)) {
    var doc = getDocument() || {};
    return Math.max(parseInt(ua[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](strMsie)[1]), doc[strDocumentMode] || 0);
  } else if (strContains(ua, strTrident)) {
    var tridentVer = parseInt(ua[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](strTrident)[1]);
    if (tridentVer) {
      return tridentVer + 4;
    }
  }
  return null;
}
function dumpObj(object) {
  var objectTypeDump = Object[strShimPrototype].toString[
    _DYN_CALL
    /* @min:%2ecall */
  ](object);
  var propertyValueDump = STR_EMPTY;
  if (objectTypeDump === "[object Error]") {
    propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object[
      _DYN_NAME
      /* @min:%2ename */
    ] + "'";
  } else if (hasJSON()) {
    propertyValueDump = getJSON().stringify(object);
  }
  return objectTypeDump + propertyValueDump;
}
function isBeaconsSupported() {
  if (_beaconsSupported === null) {
    _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
  }
  return _beaconsSupported;
}
function isFetchSupported(withKeepAlive) {
  var isSupported = false;
  try {
    isSupported = !!getGlobalInst("fetch");
    var request = getGlobalInst("Request");
    if (isSupported && withKeepAlive && request) {
      isSupported = _hasProperty(request, "keepalive");
    }
  } catch (e) {
  }
  return isSupported;
}
function useXDomainRequest() {
  if (_useXDomainRequest === null) {
    _useXDomainRequest = typeof XDomainRequest !== strShimUndefined;
    if (_useXDomainRequest && isXhrSupported()) {
      _useXDomainRequest = _useXDomainRequest && !_hasProperty(getGlobalInst(strXMLHttpRequest), "withCredentials");
    }
  }
  return _useXDomainRequest;
}
function isXhrSupported() {
  var isSupported = false;
  try {
    var xmlHttpRequest = getGlobalInst(strXMLHttpRequest);
    isSupported = !!xmlHttpRequest;
  } catch (e) {
  }
  return isSupported;
}
function _getNamedValue(values, name2) {
  if (values) {
    for (var i = 0; i < values[
      _DYN_LENGTH
      /* @min:%2elength */
    ]; i++) {
      var value = values[i];
      if (value[
        _DYN_NAME
        /* @min:%2ename */
      ]) {
        if (value[
          _DYN_NAME
          /* @min:%2ename */
        ] === name2) {
          return value;
        }
      }
    }
  }
  return {};
}
function findMetaTag(name2) {
  var doc = getDocument();
  if (doc && name2) {
    return _getNamedValue(doc.querySelectorAll("meta"), name2).content;
  }
  return null;
}
function findNamedServerTiming(name2) {
  var value;
  var perf = getPerformance();
  if (perf) {
    var navPerf = perf.getEntriesByType("navigation") || [];
    value = _getNamedValue((navPerf[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > 0 ? navPerf[0] : {}).serverTiming, name2).description;
  }
  return value;
}
var strWindow, strDocument, strDocumentMode, strNavigator, strHistory, strLocation, strConsole, strPerformance, strJSON, strCrypto, strMsCrypto, strReactNative, strMsie, strTrident, strXMLHttpRequest, _isTrident, _navUserAgentCheck, _enableMocks, _useXDomainRequest, _beaconsSupported;
var init_EnvUtils = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/EnvUtils.js"() {
    "use strict";
    init_applicationinsights_shims();
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    strWindow = "window";
    strDocument = "document";
    strDocumentMode = "documentMode";
    strNavigator = "navigator";
    strHistory = "history";
    strLocation = "location";
    strConsole = "console";
    strPerformance = "performance";
    strJSON = "JSON";
    strCrypto = "crypto";
    strMsCrypto = "msCrypto";
    strReactNative = "ReactNative";
    strMsie = "msie";
    strTrident = "trident/";
    strXMLHttpRequest = "XMLHttpRequest";
    _isTrident = null;
    _navUserAgentCheck = null;
    _enableMocks = false;
    _useXDomainRequest = null;
    _beaconsSupported = null;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DbgExtensionUtils.js
function _listenerProxyFunc(name2, config) {
  return function() {
    var args = arguments;
    var dbgExt = getDebugExt(config);
    if (dbgExt) {
      var listener = dbgExt.listener;
      if (listener && listener[name2]) {
        listener[name2][
          _DYN_APPLY
          /* @min:%2eapply */
        ](listener, args);
      }
    }
  };
}
function _getExtensionNamespace() {
  var target = getGlobalInst("Microsoft");
  if (target) {
    _aiNamespace = target["ApplicationInsights"];
  }
  return _aiNamespace;
}
function getDebugExt(config) {
  var ns = _aiNamespace;
  if (!ns && config.disableDbgExt !== true) {
    ns = _aiNamespace || _getExtensionNamespace();
  }
  return ns ? ns["ChromeDbgExt"] : null;
}
function getDebugListener(config) {
  if (!_debugListener) {
    _debugListener = {};
    for (var lp = 0; lp < listenerFuncs[
      _DYN_LENGTH
      /* @min:%2elength */
    ]; lp++) {
      _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
    }
  }
  return _debugListener;
}
var listenerFuncs, _aiNamespace, _debugListener;
var init_DbgExtensionUtils = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DbgExtensionUtils.js"() {
    init_DynamicConstants();
    init_EnvUtils();
    listenerFuncs = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"];
    _aiNamespace = null;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DiagnosticLogger.js
function _sanitizeDiagnosticText(text) {
  if (text) {
    return '"' + text[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](/\"/g, STR_EMPTY) + '"';
  }
  return STR_EMPTY;
}
function _logToConsole(func, message) {
  var theConsole = getConsole();
  if (!!theConsole) {
    var logFunc = "log";
    if (theConsole[func]) {
      logFunc = func;
    }
    if (isFunction(theConsole[logFunc])) {
      theConsole[logFunc](message);
    }
  }
}
function safeGetLogger(core, config) {
  return (core || {})[
    _DYN_LOGGER
    /* @min:%2elogger */
  ] || new DiagnosticLogger(config);
}
function _getLogger(logger) {
  return logger || new DiagnosticLogger();
}
function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
  if (isUserAct === void 0) {
    isUserAct = false;
  }
  _getLogger(logger).throwInternal(severity, msgId, msg, properties, isUserAct);
}
function _warnToConsole(logger, message) {
  _getLogger(logger)[
    STR_WARN_TO_CONSOLE
    /* @min:%2ewarnToConsole */
  ](message);
}
function _logInternalMessage(logger, severity, message) {
  _getLogger(logger)[
    _DYN_LOG_INTERNAL_MESSAGE
    /* @min:%2elogInternalMessage */
  ](severity, message);
}
var AiNonUserActionablePrefix, AiUserActionablePrefix, AIInternalMessagePrefix, _InternalLogMessage, DiagnosticLogger;
var init_DiagnosticLogger = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DiagnosticLogger.js"() {
    "use strict";
    init_dynamicproto_js();
    init_DynamicConstants();
    init_DbgExtensionUtils();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    AiNonUserActionablePrefix = "AI (Internal): ";
    AiUserActionablePrefix = "AI: ";
    AIInternalMessagePrefix = "AITR_";
    _InternalLogMessage = /** @class */
    function() {
      function _InternalLogMessage2(msgId, msg, isUserAct, properties) {
        if (isUserAct === void 0) {
          isUserAct = false;
        }
        var _self = this;
        _self[
          _DYN_MESSAGE_ID
          /* @min:%2emessageId */
        ] = msgId;
        _self[
          _DYN_MESSAGE
          /* @min:%2emessage */
        ] = (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) + msgId;
        var strProps = STR_EMPTY;
        if (hasJSON()) {
          strProps = getJSON().stringify(properties);
        }
        var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY) + (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY);
        _self[
          _DYN_MESSAGE
          /* @min:%2emessage */
        ] += diagnosticText;
      }
      _InternalLogMessage2.dataType = "MessageData";
      return _InternalLogMessage2;
    }();
    DiagnosticLogger = /** @class */
    function() {
      function DiagnosticLogger2(config) {
        this.identifier = "DiagnosticLogger";
        this.queue = [];
        var _messageCount = 0;
        var _messageLogged = {};
        var _loggingLevelConsole;
        var _loggingLevelTelemetry;
        var _maxInternalMessageLimit;
        var _enableDebug;
        dynamicProto(DiagnosticLogger2, this, function(_self) {
          _setDefaultsFromConfig(config || {});
          _self.consoleLoggingLevel = function() {
            return _loggingLevelConsole;
          };
          _self.telemetryLoggingLevel = function() {
            return _loggingLevelTelemetry;
          };
          _self.maxInternalMessageLimit = function() {
            return _maxInternalMessageLimit;
          };
          _self[
            _DYN_ENABLE_DEBUG_EXCEPTI4
            /* @min:%2eenableDebugExceptions */
          ] = function() {
            return _enableDebug;
          };
          _self.throwInternal = function(severity, msgId, msg, properties, isUserAct) {
            if (isUserAct === void 0) {
              isUserAct = false;
            }
            var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
            if (_enableDebug) {
              throw dumpObj(message);
            } else {
              var logFunc = severity === 1 ? STR_ERROR_TO_CONSOLE : STR_WARN_TO_CONSOLE;
              if (!isUndefined(message[
                _DYN_MESSAGE
                /* @min:%2emessage */
              ])) {
                if (isUserAct) {
                  var messageKey = +message[
                    _DYN_MESSAGE_ID
                    /* @min:%2emessageId */
                  ];
                  if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                    _self[logFunc](message[
                      _DYN_MESSAGE
                      /* @min:%2emessage */
                    ]);
                    _messageLogged[messageKey] = true;
                  }
                } else {
                  if (_loggingLevelConsole >= severity) {
                    _self[logFunc](message[
                      _DYN_MESSAGE
                      /* @min:%2emessage */
                    ]);
                  }
                }
                _logInternalMessage2(severity, message);
              } else {
                _debugExtMsg("throw" + (severity === 1 ? "Critical" : "Warning"), message);
              }
            }
          };
          _self[
            STR_WARN_TO_CONSOLE
            /* @min:%2ewarnToConsole */
          ] = function(message) {
            _logToConsole("warn", message);
            _debugExtMsg("warning", message);
          };
          _self[
            STR_ERROR_TO_CONSOLE
            /* @min:%2eerrorToConsole */
          ] = function(message) {
            _logToConsole("error", message);
            _debugExtMsg("error", message);
          };
          _self.resetInternalMessageCount = function() {
            _messageCount = 0;
            _messageLogged = {};
          };
          _self[
            _DYN_LOG_INTERNAL_MESSAGE
            /* @min:%2elogInternalMessage */
          ] = _logInternalMessage2;
          function _logInternalMessage2(severity, message) {
            if (_areInternalMessagesThrottled()) {
              return;
            }
            var logMessage2 = true;
            var messageKey = AIInternalMessagePrefix + message[
              _DYN_MESSAGE_ID
              /* @min:%2emessageId */
            ];
            if (_messageLogged[messageKey]) {
              logMessage2 = false;
            } else {
              _messageLogged[messageKey] = true;
            }
            if (logMessage2) {
              if (severity <= _loggingLevelTelemetry) {
                _self.queue[
                  _DYN_PUSH
                  /* @min:%2epush */
                ](message);
                _messageCount++;
                _debugExtMsg(severity === 1 ? "error" : "warn", message);
              }
              if (_messageCount === _maxInternalMessageLimit) {
                var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                var throttleMessage = new _InternalLogMessage(23, throttleLimitMessage, false);
                _self.queue[
                  _DYN_PUSH
                  /* @min:%2epush */
                ](throttleMessage);
                if (severity === 1) {
                  _self[
                    STR_ERROR_TO_CONSOLE
                    /* @min:%2eerrorToConsole */
                  ](throttleLimitMessage);
                } else {
                  _self[
                    STR_WARN_TO_CONSOLE
                    /* @min:%2ewarnToConsole */
                  ](throttleLimitMessage);
                }
              }
            }
          }
          function _setDefaultsFromConfig(config2) {
            _loggingLevelConsole = getCfgValue(config2.loggingLevelConsole, 0);
            _loggingLevelTelemetry = getCfgValue(config2.loggingLevelTelemetry, 1);
            _maxInternalMessageLimit = getCfgValue(config2.maxMessageLimit, 25);
            _enableDebug = getCfgValue(config2.enableDebug, getCfgValue(config2[
              _DYN_ENABLE_DEBUG_EXCEPTI4
              /* @min:%2eenableDebugExceptions */
            ], false));
          }
          function _areInternalMessagesThrottled() {
            return _messageCount >= _maxInternalMessageLimit;
          }
          function _debugExtMsg(name2, data) {
            var dbgExt = getDebugExt(config || {});
            if (dbgExt && dbgExt[
              _DYN_DIAG_LOG
              /* @min:%2ediagLog */
            ]) {
              dbgExt[
                _DYN_DIAG_LOG
                /* @min:%2ediagLog */
              ](name2, data);
            }
          }
        });
      }
      DiagnosticLogger2.__ieDyn = 1;
      return DiagnosticLogger2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/PerfManager.js
function doPerf(mgrSource, getSource, func, details, isAsync) {
  if (mgrSource) {
    var perfMgr = mgrSource;
    if (perfMgr[STR_GET_PERF_MGR]) {
      perfMgr = perfMgr[STR_GET_PERF_MGR]();
    }
    if (perfMgr) {
      var perfEvt = void 0;
      var currentActive = perfMgr[
        _DYN_GET_CTX
        /* @min:%2egetCtx */
      ](doPerfActiveKey);
      try {
        perfEvt = perfMgr.create(getSource(), details, isAsync);
        if (perfEvt) {
          if (currentActive && perfEvt[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ]) {
            perfEvt[
              _DYN_SET_CTX
              /* @min:%2esetCtx */
            ](PerfEvent[strParentContextKey], currentActive);
            if (currentActive[
              _DYN_GET_CTX
              /* @min:%2egetCtx */
            ] && currentActive[
              _DYN_SET_CTX
              /* @min:%2esetCtx */
            ]) {
              var children = currentActive[
                _DYN_GET_CTX
                /* @min:%2egetCtx */
              ](PerfEvent[strChildrenContextKey]);
              if (!children) {
                children = [];
                currentActive[
                  _DYN_SET_CTX
                  /* @min:%2esetCtx */
                ](PerfEvent[strChildrenContextKey], children);
              }
              children[
                _DYN_PUSH
                /* @min:%2epush */
              ](perfEvt);
            }
          }
          perfMgr[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ](doPerfActiveKey, perfEvt);
          return func(perfEvt);
        }
      } catch (ex) {
        if (perfEvt && perfEvt[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ]) {
          perfEvt[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ]("exception", ex);
        }
      } finally {
        if (perfEvt) {
          perfMgr.fire(perfEvt);
        }
        perfMgr[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ](doPerfActiveKey, currentActive);
      }
    }
  }
  return func();
}
function getGblPerfMgr() {
  return _defaultPerfManager;
}
var strExecutionContextKey, strParentContextKey, strChildrenContextKey, _defaultPerfManager, PerfEvent, PerfManager, doPerfActiveKey;
var init_PerfManager = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/PerfManager.js"() {
    init_dynamicproto_js();
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    strExecutionContextKey = "ctx";
    strParentContextKey = "ParentContextKey";
    strChildrenContextKey = "ChildrenContextKey";
    _defaultPerfManager = null;
    PerfEvent = /** @class */
    function() {
      function PerfEvent2(name2, payloadDetails, isAsync) {
        var _self = this;
        var accessorDefined = false;
        _self.start = dateNow();
        _self[
          _DYN_NAME
          /* @min:%2ename */
        ] = name2;
        _self[
          _DYN_IS_ASYNC
          /* @min:%2eisAsync */
        ] = isAsync;
        _self[
          _DYN_IS_CHILD_EVT
          /* @min:%2eisChildEvt */
        ] = function() {
          return false;
        };
        if (isFunction(payloadDetails)) {
          var theDetails_1;
          accessorDefined = objDefineAccessors(_self, "payload", function() {
            if (!theDetails_1 && isFunction(payloadDetails)) {
              theDetails_1 = payloadDetails();
              payloadDetails = null;
            }
            return theDetails_1;
          });
        }
        _self[
          _DYN_GET_CTX
          /* @min:%2egetCtx */
        ] = function(key) {
          if (key) {
            if (key === PerfEvent2[strParentContextKey] || key === PerfEvent2[strChildrenContextKey]) {
              return _self[key];
            }
            return (_self[strExecutionContextKey] || {})[key];
          }
          return null;
        };
        _self[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ] = function(key, value) {
          if (key) {
            if (key === PerfEvent2[strParentContextKey]) {
              if (!_self[key]) {
                _self[
                  _DYN_IS_CHILD_EVT
                  /* @min:%2eisChildEvt */
                ] = function() {
                  return true;
                };
              }
              _self[key] = value;
            } else if (key === PerfEvent2[strChildrenContextKey]) {
              _self[key] = value;
            } else {
              var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
              ctx[key] = value;
            }
          }
        };
        _self[
          _DYN_COMPLETE
          /* @min:%2ecomplete */
        ] = function() {
          var childTime = 0;
          var childEvts = _self[
            _DYN_GET_CTX
            /* @min:%2egetCtx */
          ](PerfEvent2[strChildrenContextKey]);
          if (isArray(childEvts)) {
            for (var lp = 0; lp < childEvts[
              _DYN_LENGTH
              /* @min:%2elength */
            ]; lp++) {
              var childEvt = childEvts[lp];
              if (childEvt) {
                childTime += childEvt[
                  _DYN_TIME
                  /* @min:%2etime */
                ];
              }
            }
          }
          _self[
            _DYN_TIME
            /* @min:%2etime */
          ] = dateNow() - _self.start;
          _self.exTime = _self[
            _DYN_TIME
            /* @min:%2etime */
          ] - childTime;
          _self[
            _DYN_COMPLETE
            /* @min:%2ecomplete */
          ] = function() {
          };
          if (!accessorDefined && isFunction(payloadDetails)) {
            _self.payload = payloadDetails();
          }
        };
      }
      PerfEvent2.ParentContextKey = "parent";
      PerfEvent2.ChildrenContextKey = "childEvts";
      return PerfEvent2;
    }();
    PerfManager = /** @class */
    function() {
      function PerfManager2(manager) {
        this.ctx = {};
        dynamicProto(PerfManager2, this, function(_self) {
          _self.create = function(src, payloadDetails, isAsync) {
            return new PerfEvent(src, payloadDetails, isAsync);
          };
          _self.fire = function(perfEvent) {
            if (perfEvent) {
              perfEvent[
                _DYN_COMPLETE
                /* @min:%2ecomplete */
              ]();
              if (manager && isFunction(manager[
                STR_PERF_EVENT
                /* @min:%2eperfEvent */
              ])) {
                manager[
                  STR_PERF_EVENT
                  /* @min:%2eperfEvent */
                ](perfEvent);
              }
            }
          };
          _self[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ] = function(key, value) {
            if (key) {
              var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
              ctx[key] = value;
            }
          };
          _self[
            _DYN_GET_CTX
            /* @min:%2egetCtx */
          ] = function(key) {
            return (_self[strExecutionContextKey] || {})[key];
          };
        });
      }
      PerfManager2.__ieDyn = 1;
      return PerfManager2;
    }();
    doPerfActiveKey = "CoreUtils.doPerf";
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/RandomHelper.js
function _mwcSeed(seedValue) {
  if (seedValue < 0) {
    seedValue >>>= 0;
  }
  _mwcW = 123456789 + seedValue & MaxUInt32;
  _mwcZ = 987654321 - seedValue & MaxUInt32;
  _mwcSeeded = true;
}
function _autoSeedMwc() {
  try {
    var now = dateNow() & 2147483647;
    _mwcSeed((Math.random() * UInt32Mask ^ now) + now);
  } catch (e) {
  }
}
function randomValue(maxValue) {
  if (maxValue > 0) {
    return Math.floor(random32() / MaxUInt32 * (maxValue + 1)) >>> 0;
  }
  return 0;
}
function random32(signed) {
  var value = 0;
  var c = getCrypto() || getMsCrypto();
  if (c && c.getRandomValues) {
    value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
  }
  if (value === 0 && isIE()) {
    if (!_mwcSeeded) {
      _autoSeedMwc();
    }
    value = mwcRandom32() & MaxUInt32;
  }
  if (value === 0) {
    value = Math.floor(UInt32Mask * Math.random() | 0);
  }
  if (!signed) {
    value >>>= 0;
  }
  return value;
}
function mwcRandomSeed(value) {
  if (!value) {
    _autoSeedMwc();
  } else {
    _mwcSeed(value);
  }
}
function mwcRandom32(signed) {
  _mwcZ = 36969 * (_mwcZ & 65535) + (_mwcZ >> 16) & MaxUInt32;
  _mwcW = 18e3 * (_mwcW & 65535) + (_mwcW >> 16) & MaxUInt32;
  var value = (_mwcZ << 16) + (_mwcW & 65535) >>> 0 & MaxUInt32 | 0;
  if (!signed) {
    value >>>= 0;
  }
  return value;
}
function newId(maxLength) {
  if (maxLength === void 0) {
    maxLength = 22;
  }
  var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var number = random32() >>> 0;
  var chars = 0;
  var result = STR_EMPTY;
  while (result[
    _DYN_LENGTH
    /* @min:%2elength */
  ] < maxLength) {
    chars++;
    result += base64chars.charAt(number & 63);
    number >>>= 6;
    if (chars === 5) {
      number = (random32() << 2 & 4294967295 | number & 3) >>> 0;
      chars = 0;
    }
  }
  return result;
}
var UInt32Mask, MaxUInt32, _mwcSeeded, _mwcW, _mwcZ;
var init_RandomHelper = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/RandomHelper.js"() {
    init_DynamicConstants();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    UInt32Mask = 4294967296;
    MaxUInt32 = 4294967295;
    _mwcSeeded = false;
    _mwcW = 123456789;
    _mwcZ = 987654321;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DataCacheHelper.js
function _createAccessor(target, prop, value) {
  if (_objDefineProperty2) {
    try {
      _objDefineProperty2(target, prop, {
        value,
        enumerable: false,
        configurable: true
      });
      return true;
    } catch (e) {
    }
  }
  return false;
}
function _canAcceptData(target) {
  return target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ] === 1 || target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ] === 9 || !+target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ];
}
function _getCache(data, target) {
  var theCache = target[data.id];
  if (!theCache) {
    theCache = {};
    try {
      if (_canAcceptData(target)) {
        if (!_createAccessor(target, data.id, theCache)) {
          target[data.id] = theCache;
        }
      }
    } catch (e) {
    }
  }
  return theCache;
}
function createUniqueNamespace(name2, includeVersion) {
  if (includeVersion === void 0) {
    includeVersion = false;
  }
  return normalizeJsName(name2 + _dataUid++ + (includeVersion ? "." + version : STR_EMPTY) + instanceName);
}
function createElmNodeData(name2) {
  var data = {
    id: createUniqueNamespace("_aiData-" + (name2 || STR_EMPTY) + "." + version),
    accept: function(target) {
      return _canAcceptData(target);
    },
    get: function(target, name3, defValue, addDefault) {
      var theCache = target[data.id];
      if (!theCache) {
        if (addDefault) {
          theCache = _getCache(data, target);
          theCache[normalizeJsName(name3)] = defValue;
        }
        return defValue;
      }
      return theCache[normalizeJsName(name3)];
    },
    kill: function(target, name3) {
      if (target && target[name3]) {
        try {
          delete target[name3];
        } catch (e) {
        }
      }
    }
  };
  return data;
}
var _objDefineProperty2, version, instanceName, _dataUid;
var init_DataCacheHelper = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/DataCacheHelper.js"() {
    init_applicationinsights_shims();
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    init_RandomHelper();
    _objDefineProperty2 = ObjDefineProperty;
    version = "2.8.15";
    instanceName = "." + newId(6);
    _dataUid = 0;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/CookieMgr.js
function _gblCookieMgr(config, logger) {
  var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
  if (!inst) {
    inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
    _globalCookieConfig[strConfigCookieMgr] = inst;
  }
  return inst;
}
function _isMgrEnabled(cookieMgr) {
  if (cookieMgr) {
    return cookieMgr.isEnabled();
  }
  return true;
}
function _createCookieMgrConfig(rootConfig) {
  var cookieMgrCfg = rootConfig[
    _DYN_COOKIE_CFG
    /* @min:%2ecookieCfg */
  ] = rootConfig[
    _DYN_COOKIE_CFG
    /* @min:%2ecookieCfg */
  ] || {};
  setValue(cookieMgrCfg, "domain", rootConfig.cookieDomain, isNotNullOrUndefined, isNullOrUndefined);
  setValue(cookieMgrCfg, "path", rootConfig.cookiePath || "/", null, isNullOrUndefined);
  if (isNullOrUndefined(cookieMgrCfg[strEnabled])) {
    var cookieEnabled = void 0;
    if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
      cookieEnabled = !rootConfig[strIsCookieUseDisabled];
    }
    if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
      cookieEnabled = !rootConfig[strDisableCookiesUsage];
    }
    cookieMgrCfg[strEnabled] = cookieEnabled;
  }
  return cookieMgrCfg;
}
function _isIgnoredCookie(cookieMgrCfg, name2) {
  if (name2 && cookieMgrCfg && isArray(cookieMgrCfg.ignoreCookies)) {
    return cookieMgrCfg.ignoreCookies[
      _DYN_INDEX_OF
      /* @min:%2eindexOf */
    ](name2) !== -1;
  }
  return false;
}
function _isBlockedCookie(cookieMgrCfg, name2) {
  if (name2 && cookieMgrCfg && isArray(cookieMgrCfg.blockedCookies)) {
    if (cookieMgrCfg.blockedCookies[
      _DYN_INDEX_OF
      /* @min:%2eindexOf */
    ](name2) !== -1) {
      return true;
    }
  }
  return _isIgnoredCookie(cookieMgrCfg, name2);
}
function safeGetCookieMgr(core, config) {
  var cookieMgr;
  if (core) {
    cookieMgr = core.getCookieMgr();
  } else if (config) {
    var cookieCfg = config[
      _DYN_COOKIE_CFG
      /* @min:%2ecookieCfg */
    ];
    if (cookieCfg[strConfigCookieMgr]) {
      cookieMgr = cookieCfg[strConfigCookieMgr];
    } else {
      cookieMgr = createCookieMgr(config);
    }
  }
  if (!cookieMgr) {
    cookieMgr = _gblCookieMgr(config, (core || {})[
      _DYN_LOGGER
      /* @min:%2elogger */
    ]);
  }
  return cookieMgr;
}
function createCookieMgr(rootConfig, logger) {
  var _a7;
  var cookieMgrConfig = _createCookieMgrConfig(rootConfig || _globalCookieConfig);
  var _path = cookieMgrConfig.path || "/";
  var _domain = cookieMgrConfig.domain;
  var _enabled = cookieMgrConfig[strEnabled] !== false;
  var cookieMgr = (_a7 = {
    isEnabled: function() {
      var enabled = _enabled && areCookiesSupported(logger);
      var gblManager = _globalCookieConfig[strConfigCookieMgr];
      if (enabled && gblManager && cookieMgr !== gblManager) {
        enabled = _isMgrEnabled(gblManager);
      }
      return enabled;
    }
  }, _a7[
    _DYN_SET_ENABLED
    /* @min:setEnabled */
  ] = function(value) {
    _enabled = value !== false;
  }, _a7.set = function(name2, value, maxAgeSec, domain, path2) {
    var result = false;
    if (_isMgrEnabled(cookieMgr) && !_isBlockedCookie(cookieMgrConfig, name2)) {
      var values = {};
      var theValue = strTrim(value || STR_EMPTY);
      var idx = theValue[
        _DYN_INDEX_OF
        /* @min:%2eindexOf */
      ](";");
      if (idx !== -1) {
        theValue = strTrim(value[
          _DYN_SUBSTRING
          /* @min:%2esubstring */
        ](0, idx));
        values = _extractParts(value[
          _DYN_SUBSTRING
          /* @min:%2esubstring */
        ](idx + 1));
      }
      setValue(values, "domain", domain || _domain, isTruthy, isUndefined);
      if (!isNullOrUndefined(maxAgeSec)) {
        var _isIE = isIE();
        if (isUndefined(values[strExpires])) {
          var nowMs = dateNow();
          var expireMs = nowMs + maxAgeSec * 1e3;
          if (expireMs > 0) {
            var expiry = /* @__PURE__ */ new Date();
            expiry.setTime(expireMs);
            setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY, isTruthy);
          }
        }
        if (!_isIE) {
          setValue(values, "max-age", STR_EMPTY + maxAgeSec, null, isUndefined);
        }
      }
      var location_1 = getLocation();
      if (location_1 && location_1.protocol === "https:") {
        setValue(values, "secure", null, null, isUndefined);
        if (_allowUaSameSite === null) {
          _allowUaSameSite = !uaDisallowsSameSiteNone((getNavigator() || {})[
            _DYN_USER_AGENT
            /* @min:%2euserAgent */
          ]);
        }
        if (_allowUaSameSite) {
          setValue(values, "SameSite", "None", null, isUndefined);
        }
      }
      setValue(values, "path", path2 || _path, null, isUndefined);
      var setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
      setCookieFn(name2, _formatCookieValue(theValue, values));
      result = true;
    }
    return result;
  }, _a7.get = function(name2) {
    var value = STR_EMPTY;
    if (_isMgrEnabled(cookieMgr) && !_isIgnoredCookie(cookieMgrConfig, name2)) {
      value = (cookieMgrConfig.getCookie || _getCookieValue)(name2);
    }
    return value;
  }, _a7.del = function(name2, path2) {
    var result = false;
    if (_isMgrEnabled(cookieMgr)) {
      result = cookieMgr.purge(name2, path2);
    }
    return result;
  }, _a7.purge = function(name2, path2) {
    var _a8;
    var result = false;
    if (areCookiesSupported(logger)) {
      var values = (_a8 = {}, _a8["path"] = path2 ? path2 : "/", _a8[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT", _a8);
      if (!isIE()) {
        values["max-age"] = "0";
      }
      var delCookie = cookieMgrConfig.delCookie || _setCookieValue;
      delCookie(name2, _formatCookieValue(STR_EMPTY, values));
      result = true;
    }
    return result;
  }, _a7);
  cookieMgr[strConfigCookieMgr] = cookieMgr;
  return cookieMgr;
}
function areCookiesSupported(logger) {
  if (_supportsCookies === null) {
    _supportsCookies = false;
    try {
      var doc = _doc || {};
      _supportsCookies = doc[strCookie] !== void 0;
    } catch (e) {
      _throwInternal(logger, 2, 68, "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return _supportsCookies;
}
function _extractParts(theValue) {
  var values = {};
  if (theValue && theValue[
    _DYN_LENGTH
    /* @min:%2elength */
  ]) {
    var parts = strTrim(theValue)[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](";");
    arrForEach(parts, function(thePart) {
      thePart = strTrim(thePart || STR_EMPTY);
      if (thePart) {
        var idx = thePart[
          _DYN_INDEX_OF
          /* @min:%2eindexOf */
        ]("=");
        if (idx === -1) {
          values[thePart] = null;
        } else {
          values[strTrim(thePart[
            _DYN_SUBSTRING
            /* @min:%2esubstring */
          ](0, idx))] = strTrim(thePart[
            _DYN_SUBSTRING
            /* @min:%2esubstring */
          ](idx + 1));
        }
      }
    });
  }
  return values;
}
function _formatDate(theDate, func) {
  if (isFunction(theDate[func])) {
    return theDate[func]();
  }
  return null;
}
function _formatCookieValue(value, values) {
  var cookieValue = value || STR_EMPTY;
  objForEachKey(values, function(name2, theValue) {
    cookieValue += "; " + name2 + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY);
  });
  return cookieValue;
}
function _getCookieValue(name2) {
  var cookieValue = STR_EMPTY;
  if (_doc) {
    var theCookie = _doc[strCookie] || STR_EMPTY;
    if (_parsedCookieValue !== theCookie) {
      _cookieCache = _extractParts(theCookie);
      _parsedCookieValue = theCookie;
    }
    cookieValue = strTrim(_cookieCache[name2] || STR_EMPTY);
  }
  return cookieValue;
}
function _setCookieValue(name2, cookieValue) {
  if (_doc) {
    _doc[strCookie] = name2 + "=" + cookieValue;
  }
}
function uaDisallowsSameSiteNone(userAgent) {
  if (!isString(userAgent)) {
    return false;
  }
  if (strContains(userAgent, "CPU iPhone OS 12") || strContains(userAgent, "iPad; CPU OS 12")) {
    return true;
  }
  if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains(userAgent, "Version/") && strContains(userAgent, "Safari")) {
    return true;
  }
  if (strContains(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
    return true;
  }
  if (strContains(userAgent, "Chrome/5") || strContains(userAgent, "Chrome/6")) {
    return true;
  }
  if (strContains(userAgent, "UnrealEngine") && !strContains(userAgent, "Chrome")) {
    return true;
  }
  if (strContains(userAgent, "UCBrowser/12") || strContains(userAgent, "UCBrowser/11")) {
    return true;
  }
  return false;
}
var strToGMTString, strToUTCString, strCookie, strExpires, strEnabled, strIsCookieUseDisabled, strDisableCookiesUsage, strConfigCookieMgr, _supportsCookies, _allowUaSameSite, _parsedCookieValue, _doc, _cookieCache, _globalCookieConfig;
var init_CookieMgr = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/CookieMgr.js"() {
    init_DynamicConstants();
    init_DiagnosticLogger();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    strToGMTString = "toGMTString";
    strToUTCString = "toUTCString";
    strCookie = "cookie";
    strExpires = "expires";
    strEnabled = "enabled";
    strIsCookieUseDisabled = "isCookieUseDisabled";
    strDisableCookiesUsage = "disableCookiesUsage";
    strConfigCookieMgr = "_ckMgr";
    _supportsCookies = null;
    _allowUaSameSite = null;
    _parsedCookieValue = null;
    _doc = getDocument();
    _cookieCache = {};
    _globalCookieConfig = {};
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/EventHelpers.js
function _normalizeNamespace(name2) {
  if (name2 && name2[
    _DYN_REPLACE
    /* @min:%2ereplace */
  ]) {
    return name2[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY);
  }
  return name2;
}
function _getEvtNamespace(eventName, evtNamespace) {
  var _a7;
  if (evtNamespace) {
    var theNamespace_1 = STR_EMPTY;
    if (isArray(evtNamespace)) {
      theNamespace_1 = STR_EMPTY;
      arrForEach(evtNamespace, function(name2) {
        name2 = _normalizeNamespace(name2);
        if (name2) {
          if (name2[0] !== ".") {
            name2 = "." + name2;
          }
          theNamespace_1 += name2;
        }
      });
    } else {
      theNamespace_1 = _normalizeNamespace(evtNamespace);
    }
    if (theNamespace_1) {
      if (theNamespace_1[0] !== ".") {
        theNamespace_1 = "." + theNamespace_1;
      }
      eventName = (eventName || STR_EMPTY) + theNamespace_1;
    }
  }
  var parsedEvent = eventNamespace.exec(eventName || STR_EMPTY) || [];
  return _a7 = {}, _a7[
    _DYN_TYPE
    /* @min:type */
  ] = parsedEvent[1], _a7.ns = (parsedEvent[2] || STR_EMPTY).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY)[
    _DYN_SPLIT
    /* @min:%2esplit */
  ](".").sort().join("."), _a7;
}
function __getRegisteredEvents(target, eventName, evtNamespace) {
  var theEvents = [];
  var eventCache = elmNodeData.get(target, strEvents, {}, false);
  var evtName = _getEvtNamespace(eventName, evtNamespace);
  objForEachKey(eventCache, function(evtType, registeredEvents) {
    arrForEach(registeredEvents, function(value) {
      var _a7;
      if (!evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ] || evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ] === value.evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ]) {
        if (!evtName.ns || evtName.ns === evtName.ns) {
          theEvents[
            _DYN_PUSH
            /* @min:%2epush */
          ]((_a7 = {}, _a7[
            _DYN_NAME
            /* @min:name */
          ] = value.evtName[
            _DYN_TYPE
            /* @min:%2etype */
          ] + (value.evtName.ns ? "." + value.evtName.ns : STR_EMPTY), _a7.handler = value[
            _DYN_HANDLER
            /* @min:%2ehandler */
          ], _a7));
        }
      }
    });
  });
  return theEvents;
}
function _getRegisteredEvents(target, evtName, addDefault) {
  if (addDefault === void 0) {
    addDefault = true;
  }
  var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
  var registeredEvents = aiEvts[evtName];
  if (!registeredEvents) {
    registeredEvents = aiEvts[evtName] = [];
  }
  return registeredEvents;
}
function _doDetach(obj, evtName, handlerRef, useCapture) {
  if (obj && evtName && evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ]) {
    if (obj[strRemoveEventListener]) {
      obj[strRemoveEventListener](evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef, useCapture);
    } else if (obj[strDetachEvent]) {
      obj[strDetachEvent](strOnPrefix + evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef);
    }
  }
}
function _doAttach(obj, evtName, handlerRef, useCapture) {
  var result = false;
  if (obj && evtName && evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ] && handlerRef) {
    if (obj[strAddEventHelper]) {
      obj[strAddEventHelper](evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef, useCapture);
      result = true;
    } else if (obj[strAttachEvent]) {
      obj[strAttachEvent](strOnPrefix + evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef);
      result = true;
    }
  }
  return result;
}
function _doUnregister(target, events, evtName, unRegFn) {
  var idx = events[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  while (idx--) {
    var theEvent = events[idx];
    if (theEvent) {
      if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
        if (!unRegFn || unRegFn(theEvent)) {
          _doDetach(target, theEvent.evtName, theEvent[
            _DYN_HANDLER
            /* @min:%2ehandler */
          ], theEvent.capture);
          events[
            _DYN_SPLICE
            /* @min:%2esplice */
          ](idx, 1);
        }
      }
    }
  }
}
function _unregisterEvents(target, evtName, unRegFn) {
  if (evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ]) {
    _doUnregister(target, _getRegisteredEvents(target, evtName[
      _DYN_TYPE
      /* @min:%2etype */
    ]), evtName, unRegFn);
  } else {
    var eventCache = elmNodeData.get(target, strEvents, {});
    objForEachKey(eventCache, function(evtType, events) {
      _doUnregister(target, events, evtName, unRegFn);
    });
    if (objKeys(eventCache)[
      _DYN_LENGTH
      /* @min:%2elength */
    ] === 0) {
      elmNodeData.kill(target, strEvents);
    }
  }
}
function mergeEvtNamespace(theNamespace, namespaces) {
  var newNamespaces;
  if (namespaces) {
    if (isArray(namespaces)) {
      newNamespaces = [theNamespace].concat(namespaces);
    } else {
      newNamespaces = [theNamespace, namespaces];
    }
    newNamespaces = _getEvtNamespace("xx", newNamespaces).ns[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](".");
  } else {
    newNamespaces = theNamespace;
  }
  return newNamespaces;
}
function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
  var _a7;
  if (useCapture === void 0) {
    useCapture = false;
  }
  var result = false;
  if (target) {
    try {
      var evtName = _getEvtNamespace(eventName, evtNamespace);
      result = _doAttach(target, evtName, handlerRef, useCapture);
      if (result && elmNodeData.accept(target)) {
        var registeredEvent = (_a7 = {
          guid: _guid++,
          evtName
        }, _a7[
          _DYN_HANDLER
          /* @min:handler */
        ] = handlerRef, _a7.capture = useCapture, _a7);
        _getRegisteredEvents(target, evtName.type)[
          _DYN_PUSH
          /* @min:%2epush */
        ](registeredEvent);
      }
    } catch (e) {
    }
  }
  return result;
}
function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }
  if (target) {
    try {
      var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
      var found_1 = false;
      _unregisterEvents(target, evtName_1, function(regEvent) {
        if (evtName_1.ns && !handlerRef || regEvent[
          _DYN_HANDLER
          /* @min:%2ehandler */
        ] === handlerRef) {
          found_1 = true;
          return true;
        }
        return false;
      });
      if (!found_1) {
        _doDetach(target, evtName_1, handlerRef, useCapture);
      }
    } catch (e) {
    }
  }
}
function attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }
  return eventOn(obj, eventNameWithoutOn, handlerRef, null, useCapture);
}
function detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }
  eventOff(obj, eventNameWithoutOn, handlerRef, null, useCapture);
}
function addEventHandler(eventName, callback, evtNamespace) {
  var result = false;
  var w = getWindow();
  if (w) {
    result = eventOn(w, eventName, callback, evtNamespace);
    result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
  }
  var doc = getDocument();
  if (doc) {
    result = eventOn(doc, eventName, callback, evtNamespace) || result;
  }
  return result;
}
function removeEventHandler(eventName, callback, evtNamespace) {
  var w = getWindow();
  if (w) {
    eventOff(w, eventName, callback, evtNamespace);
    eventOff(w["body"], eventName, callback, evtNamespace);
  }
  var doc = getDocument();
  if (doc) {
    eventOff(doc, eventName, callback, evtNamespace);
  }
}
function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
  var added = false;
  if (listener && events && events[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 0) {
    arrForEach(events, function(name2) {
      if (name2) {
        if (!excludeEvents || arrIndexOf(excludeEvents, name2) === -1) {
          added = addEventHandler(name2, listener, evtNamespace) || added;
        }
      }
    });
  }
  return added;
}
function addEventListeners(events, listener, excludeEvents, evtNamespace) {
  var added = false;
  if (listener && events && isArray(events)) {
    added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
    if (!added && excludeEvents && excludeEvents[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > 0) {
      added = _addEventListeners(events, listener, null, evtNamespace);
    }
  }
  return added;
}
function removeEventListeners(events, listener, evtNamespace) {
  if (events && isArray(events)) {
    arrForEach(events, function(name2) {
      if (name2) {
        removeEventHandler(name2, listener, evtNamespace);
      }
    });
  }
}
function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
  return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
}
function removePageUnloadEventListener(listener, evtNamespace) {
  removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
}
function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
  function _handlePageVisibility(evt) {
    var doc = getDocument();
    if (listener && doc && doc.visibilityState === "hidden") {
      listener(evt);
    }
  }
  var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
  var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
  if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
    pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
  }
  if (!pageUnloadAdded && excludeEvents) {
    pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
  }
  return pageUnloadAdded;
}
function removePageHideEventListener(listener, evtNamespace) {
  var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
  removeEventListeners([strPageHide], listener, newNamespaces);
  removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}
function addPageShowEventListener(listener, excludeEvents, evtNamespace) {
  function _handlePageVisibility(evt) {
    var doc = getDocument();
    if (listener && doc && doc.visibilityState === "visible") {
      listener(evt);
    }
  }
  var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
  var pageShowAdded = _addEventListeners([strPageShow], listener, excludeEvents, newNamespaces);
  pageShowAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageShowAdded;
  if (!pageShowAdded && excludeEvents) {
    pageShowAdded = addPageShowEventListener(listener, null, evtNamespace);
  }
  return pageShowAdded;
}
function removePageShowEventListener(listener, evtNamespace) {
  var newNamespaces = mergeEvtNamespace(strPageShowNamespace, evtNamespace);
  removeEventListeners([strPageShow], listener, newNamespaces);
  removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}
var strOnPrefix, strAttachEvent, strAddEventHelper, strDetachEvent, strRemoveEventListener, strEvents, strVisibilityChangeEvt, strPageHide, strPageShow, strUnload, strBeforeUnload, strPageHideNamespace, strPageShowNamespace, rRemoveEmptyNs, rRemoveTrailingEmptyNs, _guid, elmNodeData, eventNamespace;
var init_EventHelpers = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/EventHelpers.js"() {
    init_DynamicConstants();
    init_DataCacheHelper();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    strOnPrefix = "on";
    strAttachEvent = "attachEvent";
    strAddEventHelper = "addEventListener";
    strDetachEvent = "detachEvent";
    strRemoveEventListener = "removeEventListener";
    strEvents = "events";
    strVisibilityChangeEvt = "visibilitychange";
    strPageHide = "pagehide";
    strPageShow = "pageshow";
    strUnload = "unload";
    strBeforeUnload = "beforeunload";
    strPageHideNamespace = createUniqueNamespace("aiEvtPageHide");
    strPageShowNamespace = createUniqueNamespace("aiEvtPageShow");
    rRemoveEmptyNs = /\.[\.]+/g;
    rRemoveTrailingEmptyNs = /[\.]+$/;
    _guid = 1;
    elmNodeData = createElmNodeData("events");
    eventNamespace = /^([^.]*)(?:\.(.+)|)/;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/CoreUtils.js
function newGuid() {
  var uuid2 = generateW3CId();
  return uuid2[
    _DYN_SUBSTRING
    /* @min:%2esubstring */
  ](0, 8) + "-" + uuid2[
    _DYN_SUBSTRING
    /* @min:%2esubstring */
  ](8, 12) + "-" + uuid2[
    _DYN_SUBSTRING
    /* @min:%2esubstring */
  ](12, 16) + "-" + uuid2[
    _DYN_SUBSTRING
    /* @min:%2esubstring */
  ](16, 20) + "-" + uuid2[
    _DYN_SUBSTRING
    /* @min:%2esubstring */
  ](20);
}
function perfNow() {
  var perf = getPerformance();
  if (perf && perf.now) {
    return perf.now();
  }
  return dateNow();
}
function generateW3CId() {
  var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var oct = STR_EMPTY, tmp;
  for (var a = 0; a < 4; a++) {
    tmp = random32();
    oct += hexValues[tmp & 15] + hexValues[tmp >> 4 & 15] + hexValues[tmp >> 8 & 15] + hexValues[tmp >> 12 & 15] + hexValues[tmp >> 16 & 15] + hexValues[tmp >> 20 & 15] + hexValues[tmp >> 24 & 15] + hexValues[tmp >> 28 & 15];
  }
  var clockSequenceHi = hexValues[8 + (random32() & 3) | 0];
  return oct[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](0, 8) + oct[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](9, 4) + "4" + oct[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](13, 3) + clockSequenceHi + oct[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](16, 3) + oct[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](19, 12);
}
function _legacyCookieMgr(config, logger) {
  var cookieMgr = _gblCookieMgr(config, logger);
  var legacyCanUseCookies = CoreUtils._canUseCookies;
  if (_cookieMgrs === null) {
    _cookieMgrs = [];
    _canUseCookies = legacyCanUseCookies;
    objDefineAccessors(CoreUtils, "_canUseCookies", function() {
      return _canUseCookies;
    }, function(value) {
      _canUseCookies = value;
      arrForEach(_cookieMgrs, function(mgr) {
        mgr[
          _DYN_SET_ENABLED
          /* @min:%2esetEnabled */
        ](value);
      });
    });
  }
  if (arrIndexOf(_cookieMgrs, cookieMgr) === -1) {
    _cookieMgrs[
      _DYN_PUSH
      /* @min:%2epush */
    ](cookieMgr);
  }
  if (isBoolean(legacyCanUseCookies)) {
    cookieMgr[
      _DYN_SET_ENABLED
      /* @min:%2esetEnabled */
    ](legacyCanUseCookies);
  }
  if (isBoolean(_canUseCookies)) {
    cookieMgr[
      _DYN_SET_ENABLED
      /* @min:%2esetEnabled */
    ](_canUseCookies);
  }
  return cookieMgr;
}
function disableCookies() {
  _legacyCookieMgr()[
    _DYN_SET_ENABLED
    /* @min:%2esetEnabled */
  ](false);
}
var _cookieMgrs, _canUseCookies, CoreUtils, EventHelper;
var init_CoreUtils = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/CoreUtils.js"() {
    "use strict";
    init_applicationinsights_shims();
    init_DynamicConstants();
    init_CookieMgr();
    init_EnvUtils();
    init_EventHelpers();
    init_HelperFuncs();
    init_InternalConstants();
    init_RandomHelper();
    _cookieMgrs = null;
    CoreUtils = {
      _canUseCookies: void 0,
      isTypeof,
      isUndefined,
      isNullOrUndefined,
      hasOwnProperty,
      isFunction,
      isObject,
      isDate,
      isArray,
      isError,
      isString,
      isNumber,
      isBoolean,
      toISOString,
      arrForEach,
      arrIndexOf,
      arrMap,
      arrReduce,
      strTrim,
      objCreate: objCreateFn,
      objKeys,
      objDefineAccessors,
      addEventHandler,
      dateNow,
      isIE,
      disableCookies,
      newGuid,
      perfNow,
      newId,
      randomValue,
      random32,
      mwcRandomSeed,
      mwcRandom32,
      generateW3CId
    };
    EventHelper = {
      Attach: attachEvent,
      AttachEvent: attachEvent,
      Detach: detachEvent,
      DetachEvent: detachEvent
    };
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/W3cTraceParent.js
function _isValid(value, len, invalidValue) {
  if (value && value[
    _DYN_LENGTH
    /* @min:%2elength */
  ] === len && value !== invalidValue) {
    return !!value.match(/^[\da-f]*$/);
  }
  return false;
}
function _formatValue(value, len, defValue) {
  if (_isValid(value, len)) {
    return value;
  }
  return defValue;
}
function _formatFlags(value) {
  if (isNaN(value) || value < 0 || value > 255) {
    value = 1;
  }
  var result = value.toString(16);
  while (result[
    _DYN_LENGTH
    /* @min:%2elength */
  ] < 2) {
    result = "0" + result;
  }
  return result;
}
function createTraceParent(traceId, spanId, flags, version2) {
  var _a7;
  return _a7 = {}, _a7[
    _DYN_VERSION
    /* @min:version */
  ] = _isValid(version2, 2, INVALID_VERSION) ? version2 : DEFAULT_VERSION, _a7[
    _DYN_TRACE_ID
    /* @min:traceId */
  ] = isValidTraceId(traceId) ? traceId : generateW3CId(), _a7.spanId = isValidSpanId(spanId) ? spanId : generateW3CId()[
    _DYN_SUBSTR
    /* @min:%2esubstr */
  ](0, 16), _a7.traceFlags = flags >= 0 && flags <= 255 ? flags : 1, _a7;
}
function parseTraceParent(value) {
  var _a7;
  if (!value) {
    return null;
  }
  if (isArray(value)) {
    value = value[0] || "";
  }
  if (!value || !isString(value) || value[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 8192) {
    return null;
  }
  var match = TRACE_PARENT_REGEX.exec(strTrim(value));
  if (!match || // No match
  match[1] === INVALID_VERSION || // version ff is forbidden
  match[2] === INVALID_TRACE_ID || // All zeros is considered to be invalid
  match[3] === INVALID_SPAN_ID) {
    return null;
  }
  return _a7 = {}, _a7[
    _DYN_VERSION
    /* @min:version */
  ] = match[1], _a7[
    _DYN_TRACE_ID
    /* @min:traceId */
  ] = match[2], _a7[
    _DYN_SPAN_ID
    /* @min:spanId */
  ] = match[3], _a7[
    _DYN_TRACE_FLAGS
    /* @min:traceFlags */
  ] = parseInt(match[4], 16), _a7;
}
function isValidTraceId(value) {
  return _isValid(value, 32, INVALID_TRACE_ID);
}
function isValidSpanId(value) {
  return _isValid(value, 16, INVALID_SPAN_ID);
}
function isValidTraceParent(value) {
  if (!value || !_isValid(value[
    _DYN_VERSION
    /* @min:%2eversion */
  ], 2, INVALID_VERSION) || !_isValid(value[
    _DYN_TRACE_ID
    /* @min:%2etraceId */
  ], 32, INVALID_TRACE_ID) || !_isValid(value[
    _DYN_SPAN_ID
    /* @min:%2espanId */
  ], 16, INVALID_SPAN_ID) || !_isValid(_formatFlags(value[
    _DYN_TRACE_FLAGS
    /* @min:%2etraceFlags */
  ]), 2)) {
    return false;
  }
  return true;
}
function isSampledFlag(value) {
  if (isValidTraceParent(value)) {
    return (value[
      _DYN_TRACE_FLAGS
      /* @min:%2etraceFlags */
    ] & SAMPLED_FLAG) === SAMPLED_FLAG;
  }
  return false;
}
function formatTraceParent(value) {
  if (value) {
    var flags = _formatFlags(value[
      _DYN_TRACE_FLAGS
      /* @min:%2etraceFlags */
    ]);
    if (!_isValid(flags, 2)) {
      flags = "01";
    }
    var version2 = value[
      _DYN_VERSION
      /* @min:%2eversion */
    ] || DEFAULT_VERSION;
    if (version2 !== "00" && version2 !== "ff") {
      version2 = DEFAULT_VERSION;
    }
    return "".concat(version2, "-").concat(_formatValue(value.traceId, 32, INVALID_TRACE_ID), "-").concat(_formatValue(value.spanId, 16, INVALID_SPAN_ID), "-").concat(flags);
  }
  return "";
}
function findW3cTraceParent() {
  var name2 = "traceparent";
  var traceParent = parseTraceParent(findMetaTag(name2));
  if (!traceParent) {
    traceParent = parseTraceParent(findNamedServerTiming(name2));
  }
  return traceParent;
}
var TRACE_PARENT_REGEX, DEFAULT_VERSION, INVALID_VERSION, INVALID_TRACE_ID, INVALID_SPAN_ID, SAMPLED_FLAG;
var init_W3cTraceParent = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/W3cTraceParent.js"() {
    init_DynamicConstants();
    init_CoreUtils();
    init_EnvUtils();
    init_HelperFuncs();
    TRACE_PARENT_REGEX = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]*)?$/;
    DEFAULT_VERSION = "00";
    INVALID_VERSION = "ff";
    INVALID_TRACE_ID = "00000000000000000000000000000000";
    INVALID_SPAN_ID = "0000000000000000";
    SAMPLED_FLAG = 1;
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryHelpers.js
function _getPluginState(plugin) {
  return pluginStateData.get(plugin, "state", {}, true);
}
function initializePlugins(processContext, extensions2) {
  var initPlugins = [];
  var lastPlugin = null;
  var proxy = processContext[
    _DYN_GET_NEXT
    /* @min:%2egetNext */
  ]();
  var pluginState;
  while (proxy) {
    var thePlugin = proxy[
      _DYN_GET_PLUGIN
      /* @min:%2egetPlugin */
    ]();
    if (thePlugin) {
      if (lastPlugin && isFunction(lastPlugin[
        _DYN_SET_NEXT_PLUGIN
        /* @min:%2esetNextPlugin */
      ]) && isFunction(thePlugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ])) {
        lastPlugin[
          _DYN_SET_NEXT_PLUGIN
          /* @min:%2esetNextPlugin */
        ](thePlugin);
      }
      var isInitialized = false;
      if (isFunction(thePlugin[
        _DYN_IS_INITIALIZED
        /* @min:%2eisInitialized */
      ])) {
        isInitialized = thePlugin[
          _DYN_IS_INITIALIZED
          /* @min:%2eisInitialized */
        ]();
      } else {
        pluginState = _getPluginState(thePlugin);
        isInitialized = pluginState[
          _DYN_IS_INITIALIZED
          /* @min:%2eisInitialized */
        ];
      }
      if (!isInitialized) {
        initPlugins[
          _DYN_PUSH
          /* @min:%2epush */
        ](thePlugin);
      }
      lastPlugin = thePlugin;
      proxy = proxy[
        _DYN_GET_NEXT
        /* @min:%2egetNext */
      ]();
    }
  }
  arrForEach(initPlugins, function(thePlugin2) {
    var core = processContext[STR_CORE]();
    thePlugin2[
      _DYN_INITIALIZE
      /* @min:%2einitialize */
    ](processContext.getCfg(), core, extensions2, processContext[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]());
    pluginState = _getPluginState(thePlugin2);
    if (!thePlugin2[STR_CORE] && !pluginState[STR_CORE]) {
      pluginState[STR_CORE] = core;
    }
    pluginState[
      _DYN_IS_INITIALIZED
      /* @min:%2eisInitialized */
    ] = true;
    delete pluginState[
      _DYN_TEARDOWN
      /* @min:%2eteardown */
    ];
  });
}
function sortPlugins(plugins) {
  return plugins.sort(function(extA, extB) {
    var result = 0;
    if (extB) {
      var bHasProcess = isFunction(extB[STR_PROCESS_TELEMETRY]);
      if (isFunction(extA[STR_PROCESS_TELEMETRY])) {
        result = bHasProcess ? extA[STR_PRIORITY] - extB[STR_PRIORITY] : 1;
      } else if (bHasProcess) {
        result = -1;
      }
    } else {
      result = extA ? 1 : -1;
    }
    return result;
  });
}
function createDistributedTraceContext(parentCtx) {
  var trace = {};
  return {
    getName: function() {
      return trace[
        _DYN_NAME
        /* @min:%2ename */
      ];
    },
    setName: function(newValue) {
      parentCtx && parentCtx.setName(newValue);
      trace[
        _DYN_NAME
        /* @min:%2ename */
      ] = newValue;
    },
    getTraceId: function() {
      return trace[
        _DYN_TRACE_ID
        /* @min:%2etraceId */
      ];
    },
    setTraceId: function(newValue) {
      parentCtx && parentCtx.setTraceId(newValue);
      if (isValidTraceId(newValue)) {
        trace[
          _DYN_TRACE_ID
          /* @min:%2etraceId */
        ] = newValue;
      }
    },
    getSpanId: function() {
      return trace[
        _DYN_SPAN_ID
        /* @min:%2espanId */
      ];
    },
    setSpanId: function(newValue) {
      parentCtx && parentCtx.setSpanId(newValue);
      if (isValidSpanId(newValue)) {
        trace[
          _DYN_SPAN_ID
          /* @min:%2espanId */
        ] = newValue;
      }
    },
    getTraceFlags: function() {
      return trace[
        _DYN_TRACE_FLAGS
        /* @min:%2etraceFlags */
      ];
    },
    setTraceFlags: function(newTraceFlags) {
      parentCtx && parentCtx.setTraceFlags(newTraceFlags);
      trace[
        _DYN_TRACE_FLAGS
        /* @min:%2etraceFlags */
      ] = newTraceFlags;
    }
  };
}
var pluginStateData;
var init_TelemetryHelpers = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryHelpers.js"() {
    "use strict";
    init_DynamicConstants();
    init_DataCacheHelper();
    init_HelperFuncs();
    init_InternalConstants();
    init_W3cTraceParent();
    pluginStateData = createElmNodeData("plugin");
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ProcessTelemetryContext.js
function _getNextProxyStart(proxy, core, startAt) {
  while (proxy) {
    if (proxy[
      _DYN_GET_PLUGIN
      /* @min:%2egetPlugin */
    ]() === startAt) {
      return proxy;
    }
    proxy = proxy[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]();
  }
  return createTelemetryProxyChain([startAt], core[
    _DYN_CONFIG
    /* @min:%2econfig */
  ] || {}, core);
}
function _createInternalContext(telemetryChain, config, core, startAt) {
  var _nextProxy = null;
  var _onComplete = [];
  if (startAt !== null) {
    _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
  }
  var context = {
    _next: _moveNext,
    ctx: {
      core: function() {
        return core;
      },
      diagLog: function() {
        return safeGetLogger(core, config);
      },
      getCfg: function() {
        return config;
      },
      getExtCfg: _getExtCfg,
      getConfig: _getConfig,
      hasNext: function() {
        return !!_nextProxy;
      },
      getNext: function() {
        return _nextProxy;
      },
      setNext: function(nextPlugin) {
        _nextProxy = nextPlugin;
      },
      iterate: _iterateChain,
      onComplete: _addOnComplete
    }
  };
  function _addOnComplete(onComplete, that) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    if (onComplete) {
      _onComplete[
        _DYN_PUSH
        /* @min:%2epush */
      ]({
        func: onComplete,
        self: !isUndefined(that) ? that : context.ctx,
        args
      });
    }
  }
  function _moveNext() {
    var nextProxy = _nextProxy;
    _nextProxy = nextProxy ? nextProxy[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]() : null;
    if (!nextProxy) {
      var onComplete = _onComplete;
      if (onComplete && onComplete[
        _DYN_LENGTH
        /* @min:%2elength */
      ] > 0) {
        arrForEach(onComplete, function(completeDetails) {
          try {
            completeDetails.func[
              _DYN_CALL
              /* @min:%2ecall */
            ](completeDetails.self, completeDetails.args);
          } catch (e) {
            _throwInternal(core[
              _DYN_LOGGER
              /* @min:%2elogger */
            ], 2, 73, "Unexpected Exception during onComplete - " + dumpObj(e));
          }
        });
        _onComplete = [];
      }
    }
    return nextProxy;
  }
  function _getExtCfg(identifier, defaultValue, mergeDefault) {
    if (defaultValue === void 0) {
      defaultValue = {};
    }
    if (mergeDefault === void 0) {
      mergeDefault = 0;
    }
    var theConfig;
    if (config) {
      var extConfig = config[
        STR_EXTENSION_CONFIG
        /* @min:%2eextensionConfig */
      ];
      if (extConfig && identifier) {
        theConfig = extConfig[identifier];
      }
    }
    if (!theConfig) {
      theConfig = defaultValue;
    } else if (isObject(defaultValue)) {
      if (mergeDefault !== 0) {
        var newConfig_1 = objExtend(true, defaultValue, theConfig);
        if (config && mergeDefault === 2) {
          objForEachKey(defaultValue, function(field) {
            if (isNullOrUndefined(newConfig_1[field])) {
              var cfgValue = config[field];
              if (!isNullOrUndefined(cfgValue)) {
                newConfig_1[field] = cfgValue;
              }
            }
          });
        }
        theConfig = newConfig_1;
      }
    }
    return theConfig;
  }
  function _getConfig(identifier, field, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = false;
    }
    var theValue;
    var extConfig = _getExtCfg(identifier, null);
    if (extConfig && !isNullOrUndefined(extConfig[field])) {
      theValue = extConfig[field];
    } else if (config && !isNullOrUndefined(config[field])) {
      theValue = config[field];
    }
    return !isNullOrUndefined(theValue) ? theValue : defaultValue;
  }
  function _iterateChain(cb) {
    var nextPlugin;
    while (!!(nextPlugin = context._next())) {
      var plugin = nextPlugin[
        _DYN_GET_PLUGIN
        /* @min:%2egetPlugin */
      ]();
      if (plugin) {
        cb(plugin);
      }
    }
  }
  return context;
}
function createProcessTelemetryContext(telemetryChain, config, core, startAt) {
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(env2) {
    var nextPlugin = internalContext._next();
    nextPlugin && nextPlugin[
      STR_PROCESS_TELEMETRY
      /* @min:%2eprocessTelemetry */
    ](env2, context);
    return !nextPlugin;
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config, core, startAt2);
    }
    return createProcessTelemetryContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), config, core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
  var config = core[
    _DYN_CONFIG
    /* @min:%2econfig */
  ] || {};
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(unloadState) {
    var nextPlugin = internalContext._next();
    nextPlugin && nextPlugin.unload(context, unloadState);
    return !nextPlugin;
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config, core, startAt2);
    }
    return createProcessTelemetryUnloadContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
  var config = core[
    _DYN_CONFIG
    /* @min:%2econfig */
  ] || {};
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(updateState) {
    return context.iterate(function(plugin) {
      if (isFunction(plugin[
        _DYN_UPDATE
        /* @min:%2eupdate */
      ])) {
        plugin[
          _DYN_UPDATE
          /* @min:%2eupdate */
        ](context, updateState);
      }
    });
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config, core, startAt2);
    }
    return createProcessTelemetryUpdateContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createTelemetryProxyChain(plugins, config, core, startAt) {
  var firstProxy = null;
  var add = startAt ? false : true;
  if (isArray(plugins) && plugins[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 0) {
    var lastProxy_1 = null;
    arrForEach(plugins, function(thePlugin) {
      if (!add && startAt === thePlugin) {
        add = true;
      }
      if (add && thePlugin && isFunction(thePlugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ])) {
        var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
        if (!firstProxy) {
          firstProxy = newProxy;
        }
        if (lastProxy_1) {
          lastProxy_1._setNext(newProxy);
        }
        lastProxy_1 = newProxy;
      }
    });
  }
  if (startAt && !firstProxy) {
    return createTelemetryProxyChain([startAt], config, core);
  }
  return firstProxy;
}
function createTelemetryPluginProxy(plugin, config, core) {
  var nextProxy = null;
  var hasProcessTelemetry = isFunction(plugin[
    STR_PROCESS_TELEMETRY
    /* @min:%2eprocessTelemetry */
  ]);
  var hasSetNext = isFunction(plugin[
    _DYN_SET_NEXT_PLUGIN
    /* @min:%2esetNextPlugin */
  ]);
  var chainId;
  if (plugin) {
    chainId = plugin[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ] + "-" + plugin[
      STR_PRIORITY
      /* @min:%2epriority */
    ] + "-" + _chainId++;
  } else {
    chainId = "Unknown-0-" + _chainId++;
  }
  var proxyChain = {
    getPlugin: function() {
      return plugin;
    },
    getNext: function() {
      return nextProxy;
    },
    processTelemetry: _processTelemetry,
    unload: _unloadPlugin,
    update: _updatePlugin,
    _id: chainId,
    _setNext: function(nextPlugin) {
      nextProxy = nextPlugin;
    }
  };
  function _getTelCtx() {
    var itemCtx;
    if (plugin && isFunction(plugin[strGetTelCtx])) {
      itemCtx = plugin[strGetTelCtx]();
    }
    if (!itemCtx) {
      itemCtx = createProcessTelemetryContext(proxyChain, config, core);
    }
    return itemCtx;
  }
  function _processChain(itemCtx, processPluginFn, name2, details, isAsync) {
    var hasRun = false;
    var identifier = plugin ? plugin[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ] : strTelemetryPluginChain;
    var hasRunContext = itemCtx[strHasRunFlags];
    if (!hasRunContext) {
      hasRunContext = itemCtx[strHasRunFlags] = {};
    }
    itemCtx.setNext(nextProxy);
    if (plugin) {
      doPerf(itemCtx[
        STR_CORE
        /* @min:%2ecore */
      ](), function() {
        return identifier + ":" + name2;
      }, function() {
        hasRunContext[chainId] = true;
        try {
          var nextId = nextProxy ? nextProxy._id : STR_EMPTY;
          if (nextId) {
            hasRunContext[nextId] = false;
          }
          hasRun = processPluginFn(itemCtx);
        } catch (error) {
          var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
          if (hasNextRun) {
            hasRun = true;
          }
          if (!nextProxy || !hasNextRun) {
            _throwInternal(itemCtx[
              _DYN_DIAG_LOG
              /* @min:%2ediagLog */
            ](), 1, 73, "Plugin [" + identifier + "] failed during " + name2 + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
          }
        }
      }, details, isAsync);
    }
    return hasRun;
  }
  function _processTelemetry(env2, itemCtx) {
    itemCtx = itemCtx || _getTelCtx();
    function _callProcessTelemetry(itemCtx2) {
      if (!plugin || !hasProcessTelemetry) {
        return false;
      }
      var pluginState = _getPluginState(plugin);
      if (pluginState[
        _DYN_TEARDOWN
        /* @min:%2eteardown */
      ] || pluginState[STR_DISABLED]) {
        return false;
      }
      if (hasSetNext) {
        plugin[
          _DYN_SET_NEXT_PLUGIN
          /* @min:%2esetNextPlugin */
        ](nextProxy);
      }
      plugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ](env2, itemCtx2);
      return true;
    }
    if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function() {
      return { item: env2 };
    }, !env2.sync)) {
      itemCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](env2);
    }
  }
  function _unloadPlugin(unloadCtx, unloadState) {
    function _callTeardown() {
      var hasRun = false;
      if (plugin) {
        var pluginState = _getPluginState(plugin);
        var pluginCore = plugin[STR_CORE] || pluginState[
          STR_CORE
          /* @min:%2ecore */
        ];
        if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[
          _DYN_TEARDOWN
          /* @min:%2eteardown */
        ]) {
          pluginState[
            STR_CORE
            /* @min:%2ecore */
          ] = null;
          pluginState[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ] = true;
          pluginState[
            _DYN_IS_INITIALIZED
            /* @min:%2eisInitialized */
          ] = false;
          if (plugin[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ] && plugin[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ](unloadCtx, unloadState) === true) {
            hasRun = true;
          }
        }
      }
      return hasRun;
    }
    if (!_processChain(unloadCtx, _callTeardown, "unload", function() {
    }, unloadState[
      _DYN_IS_ASYNC
      /* @min:%2eisAsync */
    ])) {
      unloadCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](unloadState);
    }
  }
  function _updatePlugin(updateCtx, updateState) {
    function _callUpdate() {
      var hasRun = false;
      if (plugin) {
        var pluginState = _getPluginState(plugin);
        var pluginCore = plugin[STR_CORE] || pluginState[
          STR_CORE
          /* @min:%2ecore */
        ];
        if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[
          _DYN_TEARDOWN
          /* @min:%2eteardown */
        ]) {
          if (plugin[
            _DYN_UPDATE
            /* @min:%2eupdate */
          ] && plugin[
            _DYN_UPDATE
            /* @min:%2eupdate */
          ](updateCtx, updateState) === true) {
            hasRun = true;
          }
        }
      }
      return hasRun;
    }
    if (!_processChain(updateCtx, _callUpdate, "update", function() {
    }, false)) {
      updateCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](updateState);
    }
  }
  return objFreeze(proxyChain);
}
var strTelemetryPluginChain, strHasRunFlags, strGetTelCtx, _chainId, ProcessTelemetryContext;
var init_ProcessTelemetryContext = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ProcessTelemetryContext.js"() {
    "use strict";
    init_DynamicConstants();
    init_DiagnosticLogger();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    init_PerfManager();
    init_TelemetryHelpers();
    strTelemetryPluginChain = "TelemetryPluginChain";
    strHasRunFlags = "_hasRun";
    strGetTelCtx = "_getTelCtx";
    _chainId = 0;
    ProcessTelemetryContext = /** @class */
    function() {
      function ProcessTelemetryContext2(pluginChain, config, core, startAt) {
        var _self = this;
        var context = createProcessTelemetryContext(pluginChain, config, core, startAt);
        proxyFunctions(_self, context, objKeys(context));
      }
      return ProcessTelemetryContext2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ChannelController.js
function _addChannelQueue(channelQueue, queue, core) {
  if (queue && isArray(queue) && queue[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 0) {
    queue = queue.sort(function(a, b) {
      return a[
        STR_PRIORITY
        /* @min:%2epriority */
      ] - b[
        STR_PRIORITY
        /* @min:%2epriority */
      ];
    });
    arrForEach(queue, function(queueItem) {
      if (queueItem[
        STR_PRIORITY
        /* @min:%2epriority */
      ] < ChannelControllerPriority) {
        throwError(ChannelValidationMessage + queueItem[
          _DYN_IDENTIFIER
          /* @min:%2eidentifier */
        ]);
      }
    });
    channelQueue[
      _DYN_PUSH
      /* @min:%2epush */
    ]({
      queue: objFreeze(queue),
      chain: createTelemetryProxyChain(queue, core[
        _DYN_CONFIG
        /* @min:%2econfig */
      ], core)
    });
  }
}
function createChannelControllerPlugin(channelQueue, core) {
  function _getTelCtx() {
    return createProcessTelemetryContext(null, core[
      _DYN_CONFIG
      /* @min:%2econfig */
    ], core, null);
  }
  function _processChannelQueue(theChannels, itemCtx, processFn, onComplete) {
    var waiting = theChannels ? theChannels[
      _DYN_LENGTH
      /* @min:%2elength */
    ] + 1 : 1;
    function _runChainOnComplete() {
      waiting--;
      if (waiting === 0) {
        onComplete && onComplete();
        onComplete = null;
      }
    }
    if (waiting > 0) {
      arrForEach(theChannels, function(channels) {
        if (channels && channels.queue[
          _DYN_LENGTH
          /* @min:%2elength */
        ] > 0) {
          var channelChain = channels.chain;
          var chainCtx = itemCtx[
            _DYN_CREATE_NEW
            /* @min:%2ecreateNew */
          ](channelChain);
          chainCtx[
            _DYN_ON_COMPLETE
            /* @min:%2eonComplete */
          ](_runChainOnComplete);
          processFn(chainCtx);
        } else {
          waiting--;
        }
      });
    }
    _runChainOnComplete();
  }
  function _doUpdate(updateCtx, updateState) {
    var theUpdateState = updateState || {
      reason: 0
      /* TelemetryUpdateReason.Unknown */
    };
    _processChannelQueue(channelQueue, updateCtx, function(chainCtx) {
      chainCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](theUpdateState);
    }, function() {
      updateCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](theUpdateState);
    });
    return true;
  }
  function _doTeardown(unloadCtx, unloadState) {
    var theUnloadState = unloadState || {
      reason: 0,
      isAsync: false
    };
    _processChannelQueue(channelQueue, unloadCtx, function(chainCtx) {
      chainCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](theUnloadState);
    }, function() {
      unloadCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](theUnloadState);
      isInitialized = false;
    });
    return true;
  }
  function _getChannel(pluginIdentifier) {
    var thePlugin = null;
    if (channelQueue && channelQueue[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > 0) {
      arrForEach(channelQueue, function(channels) {
        if (channels && channels.queue[
          _DYN_LENGTH
          /* @min:%2elength */
        ] > 0) {
          arrForEach(channels.queue, function(ext) {
            if (ext[
              _DYN_IDENTIFIER
              /* @min:%2eidentifier */
            ] === pluginIdentifier) {
              thePlugin = ext;
              return -1;
            }
          });
          if (thePlugin) {
            return -1;
          }
        }
      });
    }
    return thePlugin;
  }
  var isInitialized = false;
  var channelController = {
    identifier: "ChannelControllerPlugin",
    priority: ChannelControllerPriority,
    initialize: function(config, core2, extensions2, pluginChain) {
      isInitialized = true;
      arrForEach(channelQueue, function(channels) {
        if (channels && channels.queue[
          _DYN_LENGTH
          /* @min:%2elength */
        ] > 0) {
          initializePlugins(createProcessTelemetryContext(channels.chain, config, core2), extensions2);
        }
      });
    },
    isInitialized: function() {
      return isInitialized;
    },
    processTelemetry: function(item, itemCtx) {
      _processChannelQueue(channelQueue, itemCtx || _getTelCtx(), function(chainCtx) {
        chainCtx[
          _DYN_PROCESS_NEXT
          /* @min:%2eprocessNext */
        ](item);
      }, function() {
        itemCtx[
          _DYN_PROCESS_NEXT
          /* @min:%2eprocessNext */
        ](item);
      });
    },
    update: _doUpdate,
    pause: function() {
      _processChannelQueue(channelQueue, _getTelCtx(), function(chainCtx) {
        chainCtx.iterate(function(plugin) {
          plugin.pause && plugin.pause();
        });
      }, null);
    },
    resume: function() {
      _processChannelQueue(channelQueue, _getTelCtx(), function(chainCtx) {
        chainCtx.iterate(function(plugin) {
          plugin.resume && plugin.resume();
        });
      }, null);
    },
    teardown: _doTeardown,
    getChannel: _getChannel,
    flush: function(isAsync, callBack, sendReason, cbTimeout) {
      var waiting = 1;
      var doneIterating = false;
      var cbTimer = null;
      cbTimeout = cbTimeout || 5e3;
      function doCallback() {
        waiting--;
        if (doneIterating && waiting === 0) {
          if (cbTimer) {
            clearTimeout(cbTimer);
            cbTimer = null;
          }
          callBack && callBack(doneIterating);
          callBack = null;
        }
      }
      _processChannelQueue(channelQueue, _getTelCtx(), function(chainCtx) {
        chainCtx.iterate(function(plugin) {
          if (plugin[
            _DYN_FLUSH
            /* @min:%2eflush */
          ]) {
            waiting++;
            var handled_1 = false;
            if (!plugin[
              _DYN_FLUSH
              /* @min:%2eflush */
            ](isAsync, function() {
              handled_1 = true;
              doCallback();
            }, sendReason)) {
              if (!handled_1) {
                if (isAsync && cbTimer == null) {
                  cbTimer = setTimeout(function() {
                    cbTimer = null;
                    doCallback();
                  }, cbTimeout);
                } else {
                  doCallback();
                }
              }
            }
          }
        });
      }, function() {
        doneIterating = true;
        doCallback();
      });
      return true;
    },
    _setQueue: function(queue) {
      channelQueue = queue;
    }
  };
  return channelController;
}
function createChannelQueues(channels, extensions2, core) {
  var channelQueue = [];
  if (channels) {
    arrForEach(channels, function(queue) {
      return _addChannelQueue(channelQueue, queue, core);
    });
  }
  if (extensions2) {
    var extensionQueue_1 = [];
    arrForEach(extensions2, function(plugin) {
      if (plugin[
        STR_PRIORITY
        /* @min:%2epriority */
      ] > ChannelControllerPriority) {
        extensionQueue_1[
          _DYN_PUSH
          /* @min:%2epush */
        ](plugin);
      }
    });
    _addChannelQueue(channelQueue, extensionQueue_1, core);
  }
  return channelQueue;
}
var ChannelControllerPriority, ChannelValidationMessage;
var init_ChannelController = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/ChannelController.js"() {
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    init_ProcessTelemetryContext();
    init_TelemetryHelpers();
    ChannelControllerPriority = 500;
    ChannelValidationMessage = "Channel has invalid priority - ";
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/UnloadHandlerContainer.js
function createUnloadHandlerContainer() {
  var handlers = [];
  function _addHandler(handler) {
    if (handler) {
      handlers[
        _DYN_PUSH
        /* @min:%2epush */
      ](handler);
    }
  }
  function _runHandlers(unloadCtx, unloadState) {
    arrForEach(handlers, function(handler) {
      try {
        handler(unloadCtx, unloadState);
      } catch (e) {
        _throwInternal(unloadCtx[
          _DYN_DIAG_LOG
          /* @min:%2ediagLog */
        ](), 2, 73, "Unexpected error calling unload handler - " + dumpObj(e));
      }
    });
    handlers = [];
  }
  return {
    add: _addHandler,
    run: _runHandlers
  };
}
var init_UnloadHandlerContainer = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/UnloadHandlerContainer.js"() {
    init_DynamicConstants();
    init_DiagnosticLogger();
    init_EnvUtils();
    init_HelperFuncs();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseTelemetryPlugin.js
var strGetPlugin, BaseTelemetryPlugin;
var init_BaseTelemetryPlugin = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseTelemetryPlugin.js"() {
    "use strict";
    init_dynamicproto_js();
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    init_ProcessTelemetryContext();
    init_UnloadHandlerContainer();
    strGetPlugin = "getPlugin";
    BaseTelemetryPlugin = /** @class */
    function() {
      function BaseTelemetryPlugin2() {
        var _self = this;
        var _isinitialized;
        var _rootCtx;
        var _nextPlugin;
        var _unloadHandlerContainer;
        var _hooks;
        _initDefaults();
        dynamicProto(BaseTelemetryPlugin2, _self, function(_self2) {
          _self2[
            _DYN_INITIALIZE
            /* @min:%2einitialize */
          ] = function(config, core, extensions2, pluginChain) {
            _setDefaults(config, core, pluginChain);
            _isinitialized = true;
          };
          _self2[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ] = function(unloadCtx, unloadState) {
            var _a7;
            var core = _self2[
              STR_CORE
              /* @min:%2ecore */
            ];
            if (!core || unloadCtx && core !== unloadCtx[
              STR_CORE
              /* @min:%2ecore */
            ]()) {
              return;
            }
            var result;
            var unloadDone = false;
            var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
            var theUnloadState = unloadState || (_a7 = {
              reason: 0
              /* TelemetryUnloadReason.ManualTeardown */
            }, _a7[
              _DYN_IS_ASYNC
              /* @min:isAsync */
            ] = false, _a7);
            function _unloadCallback() {
              if (!unloadDone) {
                unloadDone = true;
                _unloadHandlerContainer.run(theUnloadCtx, unloadState);
                var oldHooks = _hooks;
                _hooks = [];
                arrForEach(oldHooks, function(fn) {
                  fn.rm();
                });
                if (result === true) {
                  theUnloadCtx[
                    _DYN_PROCESS_NEXT
                    /* @min:%2eprocessNext */
                  ](theUnloadState);
                }
                _initDefaults();
              }
            }
            if (!_self2[
              _DYN__DO_TEARDOWN
              /* @min:%2e_doTeardown */
            ] || _self2[
              _DYN__DO_TEARDOWN
              /* @min:%2e_doTeardown */
            ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
              _unloadCallback();
            } else {
              result = true;
            }
            return result;
          };
          _self2[
            _DYN_UPDATE
            /* @min:%2eupdate */
          ] = function(updateCtx, updateState) {
            var core = _self2[
              STR_CORE
              /* @min:%2ecore */
            ];
            if (!core || updateCtx && core !== updateCtx[
              STR_CORE
              /* @min:%2ecore */
            ]()) {
              return;
            }
            var result;
            var updateDone = false;
            var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
            var theUpdateState = updateState || {
              reason: 0
              /* TelemetryUpdateReason.Unknown */
            };
            function _updateCallback() {
              if (!updateDone) {
                updateDone = true;
                _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[
                  _DYN_GET_NEXT
                  /* @min:%2egetNext */
                ]());
              }
            }
            if (!_self2._doUpdate || _self2._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
              _updateCallback();
            } else {
              result = true;
            }
            return result;
          };
          _self2._addHook = function(hooks) {
            if (hooks) {
              if (isArray(hooks)) {
                _hooks = _hooks.concat(hooks);
              } else {
                _hooks[
                  _DYN_PUSH
                  /* @min:%2epush */
                ](hooks);
              }
            }
          };
          proxyFunctionAs(_self2, "_addUnloadCb", function() {
            return _unloadHandlerContainer;
          }, "add");
        });
        _self[
          _DYN_DIAG_LOG
          /* @min:%2ediagLog */
        ] = function(itemCtx) {
          return _getTelCtx(itemCtx)[
            _DYN_DIAG_LOG
            /* @min:%2ediagLog */
          ]();
        };
        _self[
          _DYN_IS_INITIALIZED
          /* @min:%2eisInitialized */
        ] = function() {
          return _isinitialized;
        };
        _self.setInitialized = function(isInitialized) {
          _isinitialized = isInitialized;
        };
        _self[
          _DYN_SET_NEXT_PLUGIN
          /* @min:%2esetNextPlugin */
        ] = function(next) {
          _nextPlugin = next;
        };
        _self[
          _DYN_PROCESS_NEXT
          /* @min:%2eprocessNext */
        ] = function(env2, itemCtx) {
          if (itemCtx) {
            itemCtx[
              _DYN_PROCESS_NEXT
              /* @min:%2eprocessNext */
            ](env2);
          } else if (_nextPlugin && isFunction(_nextPlugin[
            STR_PROCESS_TELEMETRY
            /* @min:%2eprocessTelemetry */
          ])) {
            _nextPlugin[
              STR_PROCESS_TELEMETRY
              /* @min:%2eprocessTelemetry */
            ](env2, null);
          }
        };
        _self._getTelCtx = _getTelCtx;
        function _getTelCtx(currentCtx) {
          if (currentCtx === void 0) {
            currentCtx = null;
          }
          var itemCtx = currentCtx;
          if (!itemCtx) {
            var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[
              STR_CORE
              /* @min:%2ecore */
            ]);
            if (_nextPlugin && _nextPlugin[strGetPlugin]) {
              itemCtx = rootCtx[
                _DYN_CREATE_NEW
                /* @min:%2ecreateNew */
              ](null, _nextPlugin[strGetPlugin]);
            } else {
              itemCtx = rootCtx[
                _DYN_CREATE_NEW
                /* @min:%2ecreateNew */
              ](null, _nextPlugin);
            }
          }
          return itemCtx;
        }
        function _setDefaults(config, core, pluginChain) {
          if (config) {
            setValue(config, STR_EXTENSION_CONFIG, [], null, isNullOrUndefined);
          }
          if (!pluginChain && core) {
            pluginChain = core[
              _DYN_GET_PROCESS_TEL_CONT0
              /* @min:%2egetProcessTelContext */
            ]()[
              _DYN_GET_NEXT
              /* @min:%2egetNext */
            ]();
          }
          var nextPlugin = _nextPlugin;
          if (_nextPlugin && _nextPlugin[strGetPlugin]) {
            nextPlugin = _nextPlugin[strGetPlugin]();
          }
          _self[
            STR_CORE
            /* @min:%2ecore */
          ] = core;
          _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
        }
        function _initDefaults() {
          _isinitialized = false;
          _self[
            STR_CORE
            /* @min:%2ecore */
          ] = null;
          _rootCtx = null;
          _nextPlugin = null;
          _hooks = [];
          _unloadHandlerContainer = createUnloadHandlerContainer();
        }
      }
      BaseTelemetryPlugin2.__ieDyn = 1;
      return BaseTelemetryPlugin2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryInitializerPlugin.js
var TelemetryInitializerPlugin;
var init_TelemetryInitializerPlugin = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/TelemetryInitializerPlugin.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_DynamicConstants();
    init_BaseTelemetryPlugin();
    init_DiagnosticLogger();
    init_EnvUtils();
    init_HelperFuncs();
    init_InternalConstants();
    TelemetryInitializerPlugin = /** @class */
    function(_super) {
      __extendsFn(TelemetryInitializerPlugin2, _super);
      function TelemetryInitializerPlugin2() {
        var _this = _super.call(this) || this;
        _this.identifier = "TelemetryInitializerPlugin";
        _this.priority = 199;
        var _id;
        var _initializers;
        _initDefaults();
        dynamicProto(TelemetryInitializerPlugin2, _this, function(_self, _base) {
          _self.addTelemetryInitializer = function(telemetryInitializer) {
            var theInitializer = {
              id: _id++,
              fn: telemetryInitializer
            };
            _initializers[
              _DYN_PUSH
              /* @min:%2epush */
            ](theInitializer);
            var handler = {
              remove: function() {
                arrForEach(_initializers, function(initializer, idx) {
                  if (initializer.id === theInitializer.id) {
                    _initializers[
                      _DYN_SPLICE
                      /* @min:%2esplice */
                    ](idx, 1);
                    return -1;
                  }
                });
              }
            };
            return handler;
          };
          _self[
            STR_PROCESS_TELEMETRY
            /* @min:%2eprocessTelemetry */
          ] = function(item, itemCtx) {
            var doNotSendItem = false;
            var telemetryInitializersCount = _initializers[
              _DYN_LENGTH
              /* @min:%2elength */
            ];
            for (var i = 0; i < telemetryInitializersCount; ++i) {
              var telemetryInitializer = _initializers[i];
              if (telemetryInitializer) {
                try {
                  if (telemetryInitializer.fn[
                    _DYN_APPLY
                    /* @min:%2eapply */
                  ](null, [item]) === false) {
                    doNotSendItem = true;
                    break;
                  }
                } catch (e) {
                  _throwInternal(itemCtx[
                    _DYN_DIAG_LOG
                    /* @min:%2ediagLog */
                  ](), 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + getExceptionName(e), { exception: dumpObj(e) }, true);
                }
              }
            }
            if (!doNotSendItem) {
              _self[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](item, itemCtx);
            }
          };
          _self[
            _DYN__DO_TEARDOWN
            /* @min:%2e_doTeardown */
          ] = function() {
            _initDefaults();
          };
        });
        function _initDefaults() {
          _id = 0;
          _initializers = [];
        }
        return _this;
      }
      TelemetryInitializerPlugin2.__ieDyn = 1;
      return TelemetryInitializerPlugin2;
    }(BaseTelemetryPlugin);
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseCore.js
function _createPerfManager(core, notificationMgr) {
  return new PerfManager(notificationMgr);
}
function _validateExtensions(logger, channelPriority, allExtensions) {
  var _a7;
  var coreExtensions = [];
  var extPriorities = {};
  arrForEach(allExtensions, function(ext) {
    if (isNullOrUndefined(ext) || isNullOrUndefined(ext[
      _DYN_INITIALIZE
      /* @min:%2einitialize */
    ])) {
      throwError(strValidationError);
    }
    var extPriority = ext[
      STR_PRIORITY
      /* @min:%2epriority */
    ];
    var identifier = ext[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ];
    if (ext && extPriority) {
      if (!isNullOrUndefined(extPriorities[extPriority])) {
        _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
      } else {
        extPriorities[extPriority] = identifier;
      }
    }
    if (!extPriority || extPriority < channelPriority) {
      coreExtensions[
        _DYN_PUSH
        /* @min:%2epush */
      ](ext);
    }
  });
  return _a7 = {
    all: allExtensions
  }, _a7[
    STR_CORE
    /* @min:core */
  ] = coreExtensions, _a7;
}
function _isPluginPresent(thePlugin, plugins) {
  var exists = false;
  arrForEach(plugins, function(plugin) {
    if (plugin === thePlugin) {
      exists = true;
      return -1;
    }
  });
  return exists;
}
function _createDummyNotificationManager() {
  var _a7;
  return objCreateFn((_a7 = {}, _a7[
    _DYN_ADD_NOTIFICATION_LIS1
    /* @min:addNotificationListener */
  ] = function(listener) {
  }, _a7[
    _DYN_REMOVE_NOTIFICATION_2
    /* @min:removeNotificationListener */
  ] = function(listener) {
  }, _a7[
    STR_EVENTS_SENT
    /* @min:eventsSent */
  ] = function(events) {
  }, _a7[
    STR_EVENTS_DISCARDED
    /* @min:eventsDiscarded */
  ] = function(events, reason) {
  }, _a7[
    STR_EVENTS_SEND_REQUEST
    /* @min:eventsSendRequest */
  ] = function(sendReason, isAsync) {
  }, _a7));
}
var strValidationError, strNotificationManager, strSdkUnloadingError, strSdkNotInitialized, defaultInitConfig, BaseCore;
var init_BaseCore = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/BaseCore.js"() {
    "use strict";
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_applicationinsights_shims();
    init_DynamicConstants();
    init_ChannelController();
    init_CookieMgr();
    init_DataCacheHelper();
    init_DbgExtensionUtils();
    init_DiagnosticLogger();
    init_HelperFuncs();
    init_InternalConstants();
    init_PerfManager();
    init_ProcessTelemetryContext();
    init_TelemetryHelpers();
    init_TelemetryInitializerPlugin();
    init_UnloadHandlerContainer();
    strValidationError = "Plugins must provide initialize method";
    strNotificationManager = "_notificationManager";
    strSdkUnloadingError = "SDK is still unloading...";
    strSdkNotInitialized = "SDK is not initialized";
    defaultInitConfig = {
      // Have the Diagnostic Logger default to log critical errors to the console
      loggingLevelConsole: 1
      /* eLoggingSeverity.CRITICAL */
    };
    BaseCore = /** @class */
    function() {
      function BaseCore3() {
        var _config;
        var _isInitialized;
        var _eventQueue;
        var _notificationManager;
        var _perfManager;
        var _cfgPerfManager;
        var _cookieManager;
        var _pluginChain;
        var _configExtensions;
        var _coreExtensions;
        var _channelControl;
        var _channelConfig;
        var _channelQueue;
        var _isUnloading;
        var _telemetryInitializerPlugin;
        var _internalLogsEventName;
        var _evtNamespace;
        var _unloadHandlers;
        var _debugListener2;
        var _traceCtx;
        var _internalLogPoller = 0;
        var _forceStopInternalLogPoller = false;
        dynamicProto(BaseCore3, this, function(_self) {
          _initDefaults();
          _self[
            _DYN_IS_INITIALIZED
            /* @min:%2eisInitialized */
          ] = function() {
            return _isInitialized;
          };
          _self[
            _DYN_INITIALIZE
            /* @min:%2einitialize */
          ] = function(config, extensions2, logger, notificationManager) {
            if (_isUnloading) {
              throwError(strSdkUnloadingError);
            }
            if (_self[
              _DYN_IS_INITIALIZED
              /* @min:%2eisInitialized */
            ]()) {
              throwError("Core should not be initialized more than once");
            }
            _config = config || {};
            _self[
              _DYN_CONFIG
              /* @min:%2econfig */
            ] = _config;
            if (isNullOrUndefined(config[
              _DYN_INSTRUMENTATION_KEY
              /* @min:%2einstrumentationKey */
            ])) {
              throwError("Please provide instrumentation key");
            }
            _notificationManager = notificationManager;
            _self[strNotificationManager] = notificationManager;
            _initDebugListener();
            _initPerfManager();
            _initExtConfig();
            if (logger) {
              _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ] = logger;
            }
            var cfgExtensions = getSetValue(_config, STR_EXTENSIONS, []);
            _configExtensions = [];
            _configExtensions[
              _DYN_PUSH
              /* @min:%2epush */
            ].apply(_configExtensions, __spreadArrayFn(__spreadArrayFn([], extensions2, false), cfgExtensions, false));
            _channelConfig = getSetValue(_config, STR_CHANNELS, []);
            _initPluginChain(null);
            if (!_channelQueue || _channelQueue[
              _DYN_LENGTH
              /* @min:%2elength */
            ] === 0) {
              throwError("No " + STR_CHANNELS + " available");
            }
            _isInitialized = true;
            _self.releaseQueue();
          };
          _self.getTransmissionControls = function() {
            var controls = [];
            if (_channelQueue) {
              arrForEach(_channelQueue, function(channels) {
                controls[
                  _DYN_PUSH
                  /* @min:%2epush */
                ](channels.queue);
              });
            }
            return objFreeze(controls);
          };
          _self.track = function(telemetryItem) {
            telemetryItem.iKey = telemetryItem.iKey || _config[
              _DYN_INSTRUMENTATION_KEY
              /* @min:%2einstrumentationKey */
            ];
            telemetryItem[
              _DYN_TIME
              /* @min:%2etime */
            ] = telemetryItem[
              _DYN_TIME
              /* @min:%2etime */
            ] || toISOString(/* @__PURE__ */ new Date());
            telemetryItem.ver = telemetryItem.ver || "4.0";
            if (!_isUnloading && _self[
              _DYN_IS_INITIALIZED
              /* @min:%2eisInitialized */
            ]()) {
              _createTelCtx()[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](telemetryItem);
            } else {
              _eventQueue[
                _DYN_PUSH
                /* @min:%2epush */
              ](telemetryItem);
            }
          };
          _self[
            _DYN_GET_PROCESS_TEL_CONT0
            /* @min:%2egetProcessTelContext */
          ] = _createTelCtx;
          _self[
            _DYN_GET_NOTIFY_MGR
            /* @min:%2egetNotifyMgr */
          ] = function() {
            if (!_notificationManager) {
              _notificationManager = _createDummyNotificationManager();
              _self[strNotificationManager] = _notificationManager;
            }
            return _notificationManager;
          };
          _self[
            _DYN_ADD_NOTIFICATION_LIS1
            /* @min:%2eaddNotificationListener */
          ] = function(listener) {
            if (_notificationManager) {
              _notificationManager[
                _DYN_ADD_NOTIFICATION_LIS1
                /* @min:%2eaddNotificationListener */
              ](listener);
            }
          };
          _self[
            _DYN_REMOVE_NOTIFICATION_2
            /* @min:%2eremoveNotificationListener */
          ] = function(listener) {
            if (_notificationManager) {
              _notificationManager[
                _DYN_REMOVE_NOTIFICATION_2
                /* @min:%2eremoveNotificationListener */
              ](listener);
            }
          };
          _self.getCookieMgr = function() {
            if (!_cookieManager) {
              _cookieManager = createCookieMgr(_config, _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ]);
            }
            return _cookieManager;
          };
          _self.setCookieMgr = function(cookieMgr) {
            _cookieManager = cookieMgr;
          };
          _self[
            STR_GET_PERF_MGR
            /* @min:%2egetPerfMgr */
          ] = function() {
            if (!_perfManager && !_cfgPerfManager) {
              if (getCfgValue(_config.enablePerfMgr)) {
                var createPerfMgr = getCfgValue(_config[
                  STR_CREATE_PERF_MGR
                  /* @min:%2ecreatePerfMgr */
                ]);
                if (isFunction(createPerfMgr)) {
                  _cfgPerfManager = createPerfMgr(_self, _self[
                    _DYN_GET_NOTIFY_MGR
                    /* @min:%2egetNotifyMgr */
                  ]());
                }
              }
            }
            return _perfManager || _cfgPerfManager || getGblPerfMgr();
          };
          _self.setPerfMgr = function(perfMgr) {
            _perfManager = perfMgr;
          };
          _self.eventCnt = function() {
            return _eventQueue[
              _DYN_LENGTH
              /* @min:%2elength */
            ];
          };
          _self.releaseQueue = function() {
            if (_isInitialized && _eventQueue[
              _DYN_LENGTH
              /* @min:%2elength */
            ] > 0) {
              var eventQueue = _eventQueue;
              _eventQueue = [];
              arrForEach(eventQueue, function(event) {
                _createTelCtx()[
                  _DYN_PROCESS_NEXT
                  /* @min:%2eprocessNext */
                ](event);
              });
            }
          };
          _self.pollInternalLogs = function(eventName) {
            _internalLogsEventName = eventName || null;
            _forceStopInternalLogPoller = false;
            if (_internalLogPoller) {
              clearInterval(_internalLogPoller);
              _internalLogPoller = null;
            }
            return _startInternalLogTimer(true);
          };
          function _startInternalLogTimer(alwaysStart) {
            if (!_internalLogPoller && !_forceStopInternalLogPoller) {
              var shouldStart = alwaysStart || _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ] && _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ].queue[
                _DYN_LENGTH
                /* @min:%2elength */
              ] > 0;
              if (shouldStart) {
                var interval = getCfgValue(_config.diagnosticLogInterval);
                if (!interval || !(interval > 0)) {
                  interval = 1e4;
                }
                _internalLogPoller = setInterval(function() {
                  clearInterval(_internalLogPoller);
                  _internalLogPoller = 0;
                  _flushInternalLogs();
                }, interval);
              }
            }
            return _internalLogPoller;
          }
          _self[
            _DYN_STOP_POLLING_INTERNA3
            /* @min:%2estopPollingInternalLogs */
          ] = function() {
            _forceStopInternalLogPoller = true;
            if (_internalLogPoller) {
              clearInterval(_internalLogPoller);
              _internalLogPoller = 0;
              _flushInternalLogs();
            }
          };
          proxyFunctions(_self, function() {
            return _telemetryInitializerPlugin;
          }, ["addTelemetryInitializer"]);
          _self.unload = function(isAsync, unloadComplete, cbTimeout) {
            var _a7;
            if (isAsync === void 0) {
              isAsync = true;
            }
            if (!_isInitialized) {
              throwError(strSdkNotInitialized);
            }
            if (_isUnloading) {
              throwError(strSdkUnloadingError);
            }
            var unloadState = (_a7 = {
              reason: 50
              /* TelemetryUnloadReason.SdkUnload */
            }, _a7[
              _DYN_IS_ASYNC
              /* @min:isAsync */
            ] = isAsync, _a7.flushComplete = false, _a7);
            var processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
            processUnloadCtx[
              _DYN_ON_COMPLETE
              /* @min:%2eonComplete */
            ](function() {
              _initDefaults();
              unloadComplete && unloadComplete(unloadState);
            }, _self);
            function _doUnload(flushComplete) {
              unloadState.flushComplete = flushComplete;
              _isUnloading = true;
              _unloadHandlers.run(processUnloadCtx, unloadState);
              _self[
                _DYN_STOP_POLLING_INTERNA3
                /* @min:%2estopPollingInternalLogs */
              ]();
              processUnloadCtx[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](unloadState);
            }
            _flushInternalLogs();
            if (!_flushChannels(isAsync, _doUnload, 6, cbTimeout)) {
              _doUnload(false);
            }
          };
          _self[
            _DYN_GET_PLUGIN
            /* @min:%2egetPlugin */
          ] = _getPlugin;
          _self.addPlugin = function(plugin, replaceExisting, isAsync, addCb) {
            if (!plugin) {
              addCb && addCb(false);
              _logOrThrowError(strValidationError);
              return;
            }
            var existingPlugin = _getPlugin(plugin[
              _DYN_IDENTIFIER
              /* @min:%2eidentifier */
            ]);
            if (existingPlugin && !replaceExisting) {
              addCb && addCb(false);
              _logOrThrowError("Plugin [" + plugin[
                _DYN_IDENTIFIER
                /* @min:%2eidentifier */
              ] + "] is already loaded!");
              return;
            }
            var updateState = {
              reason: 16
              /* TelemetryUpdateReason.PluginAdded */
            };
            function _addPlugin(removed) {
              _configExtensions[
                _DYN_PUSH
                /* @min:%2epush */
              ](plugin);
              updateState.added = [plugin];
              _initPluginChain(updateState);
              addCb && addCb(true);
            }
            if (existingPlugin) {
              var removedPlugins_1 = [existingPlugin.plugin];
              var unloadState = {
                reason: 2,
                isAsync: !!isAsync
              };
              _removePlugins(removedPlugins_1, unloadState, function(removed) {
                if (!removed) {
                  addCb && addCb(false);
                } else {
                  updateState.removed = removedPlugins_1;
                  updateState.reason |= 32;
                  _addPlugin(true);
                }
              });
            } else {
              _addPlugin(false);
            }
          };
          _self.evtNamespace = function() {
            return _evtNamespace;
          };
          _self[
            _DYN_FLUSH
            /* @min:%2eflush */
          ] = _flushChannels;
          _self.getTraceCtx = function(createNew) {
            if (!_traceCtx) {
              _traceCtx = createDistributedTraceContext();
            }
            return _traceCtx;
          };
          _self.setTraceCtx = function(traceCtx) {
            _traceCtx = traceCtx || null;
          };
          proxyFunctionAs(_self, "addUnloadCb", function() {
            return _unloadHandlers;
          }, "add");
          function _initDefaults() {
            _isInitialized = false;
            _config = objExtend(true, {}, defaultInitConfig);
            _self[
              _DYN_CONFIG
              /* @min:%2econfig */
            ] = _config;
            _self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ] = new DiagnosticLogger(_config);
            _self[
              _DYN__EXTENSIONS
              /* @min:%2e_extensions */
            ] = [];
            _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
            _eventQueue = [];
            _notificationManager = null;
            _perfManager = null;
            _cfgPerfManager = null;
            _cookieManager = null;
            _pluginChain = null;
            _coreExtensions = null;
            _configExtensions = [];
            _channelControl = null;
            _channelConfig = null;
            _channelQueue = null;
            _isUnloading = false;
            _internalLogsEventName = null;
            _evtNamespace = createUniqueNamespace("AIBaseCore", true);
            _unloadHandlers = createUnloadHandlerContainer();
            _traceCtx = null;
          }
          function _createTelCtx() {
            var theCtx = createProcessTelemetryContext(_getPluginChain(), _config, _self);
            theCtx[
              _DYN_ON_COMPLETE
              /* @min:%2eonComplete */
            ](_startInternalLogTimer);
            return theCtx;
          }
          function _initPluginChain(updateState) {
            var theExtensions = _validateExtensions(_self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ], ChannelControllerPriority, _configExtensions);
            _coreExtensions = theExtensions[
              STR_CORE
              /* @min:%2ecore */
            ];
            _pluginChain = null;
            var allExtensions = theExtensions.all;
            _channelQueue = objFreeze(createChannelQueues(_channelConfig, allExtensions, _self));
            if (_channelControl) {
              var idx = arrIndexOf(allExtensions, _channelControl);
              if (idx !== -1) {
                allExtensions[
                  _DYN_SPLICE
                  /* @min:%2esplice */
                ](idx, 1);
              }
              idx = arrIndexOf(_coreExtensions, _channelControl);
              if (idx !== -1) {
                _coreExtensions[
                  _DYN_SPLICE
                  /* @min:%2esplice */
                ](idx, 1);
              }
              _channelControl._setQueue(_channelQueue);
            } else {
              _channelControl = createChannelControllerPlugin(_channelQueue, _self);
            }
            allExtensions[
              _DYN_PUSH
              /* @min:%2epush */
            ](_channelControl);
            _coreExtensions[
              _DYN_PUSH
              /* @min:%2epush */
            ](_channelControl);
            _self[
              _DYN__EXTENSIONS
              /* @min:%2e_extensions */
            ] = sortPlugins(allExtensions);
            _channelControl[
              _DYN_INITIALIZE
              /* @min:%2einitialize */
            ](_config, _self, allExtensions);
            var initCtx = _createTelCtx();
            initializePlugins(initCtx, allExtensions);
            _self[
              _DYN__EXTENSIONS
              /* @min:%2e_extensions */
            ] = objFreeze(sortPlugins(_coreExtensions || [])).slice();
            if (updateState) {
              _doUpdate(updateState);
            }
          }
          function _getPlugin(pluginIdentifier) {
            var _a7;
            var theExt = null;
            var thePlugin = null;
            arrForEach(_self[
              _DYN__EXTENSIONS
              /* @min:%2e_extensions */
            ], function(ext) {
              if (ext[
                _DYN_IDENTIFIER
                /* @min:%2eidentifier */
              ] === pluginIdentifier && ext !== _channelControl && ext !== _telemetryInitializerPlugin) {
                thePlugin = ext;
                return -1;
              }
            });
            if (!thePlugin && _channelControl) {
              thePlugin = _channelControl.getChannel(pluginIdentifier);
            }
            if (thePlugin) {
              theExt = (_a7 = {
                plugin: thePlugin
              }, _a7[
                _DYN_SET_ENABLED
                /* @min:setEnabled */
              ] = function(enabled) {
                _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
              }, _a7.isEnabled = function() {
                var pluginState = _getPluginState(thePlugin);
                return !pluginState[
                  _DYN_TEARDOWN
                  /* @min:%2eteardown */
                ] && !pluginState[STR_DISABLED];
              }, _a7.remove = function(isAsync, removeCb) {
                var _a8;
                if (isAsync === void 0) {
                  isAsync = true;
                }
                var pluginsToRemove = [thePlugin];
                var unloadState = (_a8 = {
                  reason: 1
                  /* TelemetryUnloadReason.PluginUnload */
                }, _a8[
                  _DYN_IS_ASYNC
                  /* @min:isAsync */
                ] = isAsync, _a8);
                _removePlugins(pluginsToRemove, unloadState, function(removed) {
                  if (removed) {
                    _initPluginChain({
                      reason: 32,
                      removed: pluginsToRemove
                    });
                  }
                  removeCb && removeCb(removed);
                });
              }, _a7);
            }
            return theExt;
          }
          function _getPluginChain() {
            if (!_pluginChain) {
              var extensions2 = (_coreExtensions || []).slice();
              if (arrIndexOf(extensions2, _telemetryInitializerPlugin) === -1) {
                extensions2[
                  _DYN_PUSH
                  /* @min:%2epush */
                ](_telemetryInitializerPlugin);
              }
              _pluginChain = createTelemetryProxyChain(sortPlugins(extensions2), _config, _self);
            }
            return _pluginChain;
          }
          function _removePlugins(thePlugins, unloadState, removeComplete) {
            if (thePlugins && thePlugins[
              _DYN_LENGTH
              /* @min:%2elength */
            ] > 0) {
              var unloadChain = createTelemetryProxyChain(thePlugins, _config, _self);
              var unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);
              unloadCtx[
                _DYN_ON_COMPLETE
                /* @min:%2eonComplete */
              ](function() {
                var removed = false;
                var newConfigExtensions = [];
                arrForEach(_configExtensions, function(plugin, idx) {
                  if (!_isPluginPresent(plugin, thePlugins)) {
                    newConfigExtensions[
                      _DYN_PUSH
                      /* @min:%2epush */
                    ](plugin);
                  } else {
                    removed = true;
                  }
                });
                _configExtensions = newConfigExtensions;
                var newChannelConfig = [];
                if (_channelConfig) {
                  arrForEach(_channelConfig, function(queue, idx) {
                    var newQueue = [];
                    arrForEach(queue, function(channel) {
                      if (!_isPluginPresent(channel, thePlugins)) {
                        newQueue[
                          _DYN_PUSH
                          /* @min:%2epush */
                        ](channel);
                      } else {
                        removed = true;
                      }
                    });
                    newChannelConfig[
                      _DYN_PUSH
                      /* @min:%2epush */
                    ](newQueue);
                  });
                  _channelConfig = newChannelConfig;
                }
                removeComplete && removeComplete(removed);
                _startInternalLogTimer();
              });
              unloadCtx[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](unloadState);
            } else {
              removeComplete(false);
            }
          }
          function _flushInternalLogs() {
            if (_self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ] && _self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ].queue) {
              var queue = _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ].queue.slice(0);
              _self[
                _DYN_LOGGER
                /* @min:%2elogger */
              ].queue[
                _DYN_LENGTH
                /* @min:%2elength */
              ] = 0;
              arrForEach(queue, function(logMessage2) {
                var _a7;
                var item = (_a7 = {}, _a7[
                  _DYN_NAME
                  /* @min:name */
                ] = _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage2[
                  _DYN_MESSAGE_ID
                  /* @min:%2emessageId */
                ], _a7.iKey = getCfgValue(_config[
                  _DYN_INSTRUMENTATION_KEY
                  /* @min:%2einstrumentationKey */
                ]), _a7.time = toISOString(/* @__PURE__ */ new Date()), _a7.baseType = _InternalLogMessage.dataType, _a7.baseData = { message: logMessage2[
                  _DYN_MESSAGE
                  /* @min:%2emessage */
                ] }, _a7);
                _self.track(item);
              });
            }
          }
          function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
            if (_channelControl) {
              return _channelControl[
                _DYN_FLUSH
                /* @min:%2eflush */
              ](isAsync, callBack, sendReason || 6, cbTimeout);
            }
            callBack && callBack(false);
            return true;
          }
          function _initDebugListener() {
            var disableDbgExt = getCfgValue(_config.disableDbgExt);
            if (disableDbgExt === true && _debugListener2) {
              _notificationManager[
                _DYN_REMOVE_NOTIFICATION_2
                /* @min:%2eremoveNotificationListener */
              ](_debugListener2);
              _debugListener2 = null;
            }
            if (_notificationManager && !_debugListener2 && disableDbgExt !== true) {
              _debugListener2 = getDebugListener(_config);
              _notificationManager[
                _DYN_ADD_NOTIFICATION_LIS1
                /* @min:%2eaddNotificationListener */
              ](_debugListener2);
            }
          }
          function _initPerfManager() {
            var enablePerfMgr = getCfgValue(_config.enablePerfMgr);
            if (!enablePerfMgr && _cfgPerfManager) {
              _cfgPerfManager = null;
            }
            if (enablePerfMgr) {
              getSetValue(_config, STR_CREATE_PERF_MGR, _createPerfManager);
            }
          }
          function _initExtConfig() {
            var extConfig = getSetValue(_config, STR_EXTENSION_CONFIG, {});
            extConfig.NotificationManager = _notificationManager;
          }
          function _doUpdate(updateState) {
            var updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);
            updateCtx[
              _DYN_ON_COMPLETE
              /* @min:%2eonComplete */
            ](_startInternalLogTimer);
            if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
              updateCtx[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](updateState);
            }
          }
          function _logOrThrowError(message) {
            var logger = _self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ];
            if (logger) {
              _throwInternal(logger, 2, 73, message);
              _startInternalLogTimer();
            } else {
              throwError(message);
            }
          }
        });
      }
      BaseCore3.__ieDyn = 1;
      return BaseCore3;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/NotificationManager.js
function _runListeners(listeners, name2, isAsync, callback) {
  arrForEach(listeners, function(listener) {
    if (listener && listener[name2]) {
      if (isAsync) {
        setTimeout(function() {
          return callback(listener);
        }, 0);
      } else {
        try {
          callback(listener);
        } catch (e) {
        }
      }
    }
  });
}
var NotificationManager;
var init_NotificationManager = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/NotificationManager.js"() {
    init_dynamicproto_js();
    init_DynamicConstants();
    init_HelperFuncs();
    init_InternalConstants();
    NotificationManager = /** @class */
    function() {
      function NotificationManager2(config) {
        this.listeners = [];
        var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
        dynamicProto(NotificationManager2, this, function(_self) {
          _self[
            _DYN_ADD_NOTIFICATION_LIS1
            /* @min:%2eaddNotificationListener */
          ] = function(listener) {
            _self.listeners[
              _DYN_PUSH
              /* @min:%2epush */
            ](listener);
          };
          _self[
            _DYN_REMOVE_NOTIFICATION_2
            /* @min:%2eremoveNotificationListener */
          ] = function(listener) {
            var index = arrIndexOf(_self[
              _DYN_LISTENERS
              /* @min:%2elisteners */
            ], listener);
            while (index > -1) {
              _self.listeners[
                _DYN_SPLICE
                /* @min:%2esplice */
              ](index, 1);
              index = arrIndexOf(_self[
                _DYN_LISTENERS
                /* @min:%2elisteners */
              ], listener);
            }
          };
          _self[
            STR_EVENTS_SENT
            /* @min:%2eeventsSent */
          ] = function(events) {
            _runListeners(_self[
              _DYN_LISTENERS
              /* @min:%2elisteners */
            ], STR_EVENTS_SENT, true, function(listener) {
              listener[
                STR_EVENTS_SENT
                /* @min:%2eeventsSent */
              ](events);
            });
          };
          _self[
            STR_EVENTS_DISCARDED
            /* @min:%2eeventsDiscarded */
          ] = function(events, reason) {
            _runListeners(_self[
              _DYN_LISTENERS
              /* @min:%2elisteners */
            ], STR_EVENTS_DISCARDED, true, function(listener) {
              listener[
                STR_EVENTS_DISCARDED
                /* @min:%2eeventsDiscarded */
              ](events, reason);
            });
          };
          _self[
            STR_EVENTS_SEND_REQUEST
            /* @min:%2eeventsSendRequest */
          ] = function(sendReason, isAsync) {
            _runListeners(_self[
              _DYN_LISTENERS
              /* @min:%2elisteners */
            ], STR_EVENTS_SEND_REQUEST, isAsync, function(listener) {
              listener[
                STR_EVENTS_SEND_REQUEST
                /* @min:%2eeventsSendRequest */
              ](sendReason, isAsync);
            });
          };
          _self[
            STR_PERF_EVENT
            /* @min:%2eperfEvent */
          ] = function(perfEvent) {
            if (perfEvent) {
              if (perfEvtsSendAll || !perfEvent[
                _DYN_IS_CHILD_EVT
                /* @min:%2eisChildEvt */
              ]()) {
                _runListeners(_self[
                  _DYN_LISTENERS
                  /* @min:%2elisteners */
                ], STR_PERF_EVENT, false, function(listener) {
                  if (perfEvent[
                    _DYN_IS_ASYNC
                    /* @min:%2eisAsync */
                  ]) {
                    setTimeout(function() {
                      return listener[
                        STR_PERF_EVENT
                        /* @min:%2eperfEvent */
                      ](perfEvent);
                    }, 0);
                  } else {
                    listener[
                      STR_PERF_EVENT
                      /* @min:%2eperfEvent */
                    ](perfEvent);
                  }
                });
              }
            }
          };
        });
      }
      NotificationManager2.__ieDyn = 1;
      return NotificationManager2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/AppInsightsCore.js
var AppInsightsCore;
var init_AppInsightsCore = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK/AppInsightsCore.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_DynamicConstants();
    init_BaseCore();
    init_DiagnosticLogger();
    init_HelperFuncs();
    init_InternalConstants();
    init_NotificationManager();
    init_PerfManager();
    AppInsightsCore = /** @class */
    function(_super) {
      __extendsFn(AppInsightsCore3, _super);
      function AppInsightsCore3() {
        var _this = _super.call(this) || this;
        dynamicProto(AppInsightsCore3, _this, function(_self, _base) {
          _self[
            _DYN_INITIALIZE
            /* @min:%2einitialize */
          ] = function(config, extensions2, logger, notificationManager) {
            _base[
              _DYN_INITIALIZE
              /* @min:%2einitialize */
            ](config, extensions2, logger || new DiagnosticLogger(config), notificationManager || new NotificationManager(config));
          };
          _self.track = function(telemetryItem) {
            doPerf(_self[
              STR_GET_PERF_MGR
              /* @min:%2egetPerfMgr */
            ](), function() {
              return "AppInsightsCore:track";
            }, function() {
              if (telemetryItem === null) {
                _notifyInvalidEvent(telemetryItem);
                throwError("Invalid telemetry item");
              }
              _validateTelemetryItem(telemetryItem);
              _base.track(telemetryItem);
            }, function() {
              return { item: telemetryItem };
            }, !telemetryItem.sync);
          };
          function _validateTelemetryItem(telemetryItem) {
            if (isNullOrUndefined(telemetryItem[
              _DYN_NAME
              /* @min:%2ename */
            ])) {
              _notifyInvalidEvent(telemetryItem);
              throwError("telemetry name required");
            }
          }
          function _notifyInvalidEvent(telemetryItem) {
            var manager = _self[
              _DYN_GET_NOTIFY_MGR
              /* @min:%2egetNotifyMgr */
            ]();
            if (manager) {
              manager[
                STR_EVENTS_DISCARDED
                /* @min:%2eeventsDiscarded */
              ](
                [telemetryItem],
                2
                /* eEventsDiscardedReason.InvalidEvent */
              );
            }
          }
        });
        return _this;
      }
      AppInsightsCore3.__ieDyn = 1;
      return AppInsightsCore3;
    }(BaseCore);
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/LoggingEnums.js
var _a2, FAILED, FAILED_MONITOR_AJAX, TRACK, START, STOP, EVENT, AUTH_CONTEXT, EXCEPTION, LOCAL, SESSION, STORAGE, BROWSER, CANNOT, BUFFER, INSTRUMENTATION_KEY, LoggingSeverity, _InternalMessageId;
var init_LoggingEnums = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/JavaScriptSDK.Enums/LoggingEnums.js"() {
    init_EnumHelperFuncs();
    FAILED = "Failed";
    FAILED_MONITOR_AJAX = FAILED + "MonitorAjax";
    TRACK = "Track";
    START = "Start";
    STOP = "Stop";
    EVENT = "Event";
    AUTH_CONTEXT = "AuthContext";
    EXCEPTION = "Exception";
    LOCAL = "Local";
    SESSION = "Session";
    STORAGE = "Storage";
    BROWSER = "Browser";
    CANNOT = "Cannot";
    BUFFER = "Buffer";
    INSTRUMENTATION_KEY = "InstrumentationKey";
    LoggingSeverity = createEnumStyle({
      CRITICAL: 1,
      WARNING: 2
      /* eLoggingSeverity.WARNING */
    });
    _InternalMessageId = createEnumStyle((_a2 = {}, // Non user actionable
    _a2[BROWSER + "DoesNotSupport" + LOCAL + STORAGE] = 0, _a2[BROWSER + CANNOT + "Read" + LOCAL + STORAGE] = 1, _a2[BROWSER + CANNOT + "Read" + SESSION + STORAGE] = 2, _a2[BROWSER + CANNOT + "Write" + LOCAL + STORAGE] = 3, _a2[BROWSER + CANNOT + "Write" + SESSION + STORAGE] = 4, _a2[BROWSER + FAILED + "RemovalFrom" + LOCAL + STORAGE] = 5, _a2[BROWSER + FAILED + "RemovalFrom" + SESSION + STORAGE] = 6, _a2[CANNOT + "SendEmptyTelemetry"] = 7, _a2.ClientPerformanceMathError = 8, _a2["ErrorParsingAI" + SESSION + "Cookie"] = 9, _a2.ErrorPVCalc = 10, _a2[EXCEPTION + "WhileLoggingError"] = 11, _a2[FAILED + "AddingTelemetryTo" + BUFFER] = 12, _a2[FAILED_MONITOR_AJAX + "Abort"] = 13, _a2[FAILED_MONITOR_AJAX + "Dur"] = 14, _a2[FAILED_MONITOR_AJAX + "Open"] = 15, _a2[FAILED_MONITOR_AJAX + "RSC"] = 16, _a2[FAILED_MONITOR_AJAX + "Send"] = 17, _a2[FAILED_MONITOR_AJAX + "GetCorrelationHeader"] = 18, _a2[FAILED + "ToAddHandlerForOnBeforeUnload"] = 19, _a2[FAILED + "ToSendQueuedTelemetry"] = 20, _a2[FAILED + "ToReportDataLoss"] = 21, _a2["Flush" + FAILED] = 22, _a2.MessageLimitPerPVExceeded = 23, _a2.MissingRequiredFieldSpecification = 24, _a2.NavigationTimingNotSupported = 25, _a2.OnError = 26, _a2[SESSION + "RenewalDateIsZero"] = 27, _a2.SenderNotInitialized = 28, _a2[START + TRACK + EVENT + FAILED] = 29, _a2[STOP + TRACK + EVENT + FAILED] = 30, _a2[START + TRACK + FAILED] = 31, _a2[STOP + TRACK + FAILED] = 32, _a2.TelemetrySampledAndNotSent = 33, _a2[TRACK + EVENT + FAILED] = 34, _a2[TRACK + EXCEPTION + FAILED] = 35, _a2[TRACK + "Metric" + FAILED] = 36, _a2[TRACK + "PV" + FAILED] = 37, _a2[TRACK + "PV" + FAILED + "Calc"] = 38, _a2[TRACK + "Trace" + FAILED] = 39, _a2["Transmission" + FAILED] = 40, _a2[FAILED + "ToSet" + STORAGE + BUFFER] = 41, _a2[FAILED + "ToRestore" + STORAGE + BUFFER] = 42, _a2.InvalidBackendResponse = 43, _a2[FAILED + "ToFixDepricatedValues"] = 44, _a2.InvalidDurationValue = 45, _a2.TelemetryEnvelopeInvalid = 46, _a2.CreateEnvelopeError = 47, // User actionable
    _a2[CANNOT + "SerializeObject"] = 48, _a2[CANNOT + "SerializeObjectNonSerializable"] = 49, _a2.CircularReferenceDetected = 50, _a2["Clear" + AUTH_CONTEXT + FAILED] = 51, _a2[EXCEPTION + "Truncated"] = 52, _a2.IllegalCharsInName = 53, _a2.ItemNotInArray = 54, _a2.MaxAjaxPerPVExceeded = 55, _a2.MessageTruncated = 56, _a2.NameTooLong = 57, _a2.SampleRateOutOfRange = 58, _a2["Set" + AUTH_CONTEXT + FAILED] = 59, _a2["Set" + AUTH_CONTEXT + FAILED + "AccountName"] = 60, _a2.StringValueTooLong = 61, _a2.StartCalledMoreThanOnce = 62, _a2.StopCalledWithoutStart = 63, _a2["TelemetryInitializer" + FAILED] = 64, _a2.TrackArgumentsNotSpecified = 65, _a2.UrlTooLong = 66, _a2[SESSION + STORAGE + BUFFER + "Full"] = 67, _a2[CANNOT + "AccessCookie"] = 68, _a2.IdTooLong = 69, _a2.InvalidEvent = 70, _a2[FAILED_MONITOR_AJAX + "SetRequestHeader"] = 71, _a2["Send" + BROWSER + "InfoOnUserInit"] = 72, _a2["Plugin" + EXCEPTION] = 73, _a2["Notification" + EXCEPTION] = 74, _a2.SnippetScriptLoadFailure = 99, _a2["Invalid" + INSTRUMENTATION_KEY] = 100, _a2[CANNOT + "ParseAiBlobValue"] = 101, _a2.InvalidContentBlob = 102, _a2[TRACK + "PageAction" + EVENT + FAILED] = 103, _a2[FAILED + "AddingCustomDefinedRequestContext"] = 104, _a2["InMemory" + STORAGE + BUFFER + "Full"] = 105, _a2[INSTRUMENTATION_KEY + "Deprecation"] = 106, _a2));
  }
});

// node_modules/@microsoft/applicationinsights-core-js/dist-esm/applicationinsights-core-js.js
var init_applicationinsights_core_js = __esm({
  "node_modules/@microsoft/applicationinsights-core-js/dist-esm/applicationinsights-core-js.js"() {
    init_IChannelControls();
    init_EventsDiscardedReason();
    init_AppInsightsCore();
    init_BaseCore();
    init_BaseTelemetryPlugin();
    init_RandomHelper();
    init_CoreUtils();
    init_HelperFuncs();
    init_EnumHelperFuncs();
    init_EventHelpers();
    init_EnvUtils();
    init_applicationinsights_shims();
    init_NotificationManager();
    init_PerfManager();
    init_DiagnosticLogger();
    init_ProcessTelemetryContext();
    init_LoggingEnums();
    init_CookieMgr();
    init_DataCacheHelper();
    init_UnloadHandlerContainer();
    init_W3cTraceParent();
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/Enums.js
var ValueKind, EventLatency, EventPropertyType, EventPersistence, TraceLevel, _ExtendedInternalMessageId;
var init_Enums = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/Enums.js"() {
    init_applicationinsights_shims();
    init_applicationinsights_core_js();
    ValueKind = createEnumStyle({
      NotSet: 0,
      Pii_DistinguishedName: 1,
      Pii_GenericData: 2,
      Pii_IPV4Address: 3,
      Pii_IPv6Address: 4,
      Pii_MailSubject: 5,
      Pii_PhoneNumber: 6,
      Pii_QueryString: 7,
      Pii_SipAddress: 8,
      Pii_SmtpAddress: 9,
      Pii_Identity: 10,
      Pii_Uri: 11,
      Pii_Fqdn: 12,
      Pii_IPV4AddressLegacy: 13,
      CustomerContent_GenericContent: 32
      /* eValueKind.CustomerContent_GenericContent */
    });
    EventLatency = createEnumStyle({
      /**
       * Normal latency.
       */
      Normal: 1,
      /**
       * Cost deferred latency. At the moment this latency is treated as Normal latency.
       */
      CostDeferred: 2,
      /**
       * Real time latency.
       */
      RealTime: 3,
      /**
       * Bypass normal batching/timing and send as soon as possible, this will still send asynchronously.
       * Added in v3.1.1
       */
      Immediate: 4
      /* EventLatencyValue.Immediate */
    });
    EventPropertyType = createEnumStyle({
      Unspecified: 0,
      String: 1,
      Int32: 2,
      UInt32: 3,
      Int64: 4,
      UInt64: 5,
      Double: 6,
      Bool: 7,
      Guid: 8,
      DateTime: 9
      /* eEventPropertyType.DateTime */
    });
    EventPersistence = createEnumStyle({
      /**
       * Normal persistence.
       */
      Normal: 1,
      /**
       * Critical persistence.
       */
      Critical: 2
      /* EventPersistenceValue.Critical */
    });
    TraceLevel = createEnumStyle({
      NONE: 0,
      ERROR: 1,
      WARNING: 2,
      INFORMATION: 3
      /* eTraceLevel.INFORMATION */
    });
    _ExtendedInternalMessageId = objFreeze(__assignFn(__assignFn({}, _InternalMessageId), createEnumStyle({
      AuthHandShakeError: 501,
      AuthRedirectFail: 502,
      BrowserCannotReadLocalStorage: 503,
      BrowserCannotWriteLocalStorage: 504,
      BrowserDoesNotSupportLocalStorage: 505,
      CannotParseBiBlobValue: 506,
      CannotParseDataAttribute: 507,
      CVPluginNotAvailable: 508,
      DroppedEvent: 509,
      ErrorParsingAISessionCookie: 510,
      ErrorProvidedChannels: 511,
      FailedToGetCookies: 512,
      FailedToInitializeCorrelationVector: 513,
      FailedToInitializeSDK: 514,
      InvalidContentBlob: 515,
      InvalidCorrelationValue: 516,
      SessionRenewalDateIsZero: 517,
      SendPostOnCompleteFailure: 518,
      PostResponseHandler: 519,
      SDKNotInitialized: 520
      /* _eExtendedInternalMessageId.SDKNotInitialized */
    })));
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/InternalConstants.js
var STR_EMPTY2, STR_DEFAULT_ENDPOINT_URL, STR_PLUGIN_VERSION_STRING, STR_PLUGIN_VERSION_STRING_ARR, STR_VERSION, STR_PROPERTIES;
var init_InternalConstants2 = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/InternalConstants.js"() {
    STR_EMPTY2 = "";
    STR_DEFAULT_ENDPOINT_URL = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
    STR_PLUGIN_VERSION_STRING = "pluginVersionString";
    STR_PLUGIN_VERSION_STRING_ARR = STR_PLUGIN_VERSION_STRING + "Arr";
    STR_VERSION = "version";
    STR_PROPERTIES = "properties";
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/Utils.js
function isValueAssigned(value) {
  return !(value === STR_EMPTY2 || isNullOrUndefined(value));
}
function getTenantId(apiKey) {
  if (apiKey) {
    var indexTenantId = apiKey.indexOf("-");
    if (indexTenantId > -1) {
      return apiKey.substring(0, indexTenantId);
    }
  }
  return STR_EMPTY2;
}
function isUint8ArrayAvailable() {
  if (uInt8ArraySupported === null) {
    uInt8ArraySupported = !isUndefined(Uint8Array) && !isSafariOrFirefox() && !isReactNative();
  }
  return uInt8ArraySupported;
}
function isLatency(value) {
  if (value && isNumber(value) && value >= 1 && value <= 4) {
    return true;
  }
  return false;
}
function sanitizeProperty(name2, property, stringifyObjects) {
  if (!property && !isValueAssigned(property) || typeof name2 !== "string") {
    return null;
  }
  var propType = typeof property;
  if (propType === "string" || propType === "number" || propType === "boolean" || isArray(property)) {
    property = { value: property };
  } else if (propType === "object" && !ObjHasOwnProperty.call(property, "value")) {
    property = { value: stringifyObjects ? JSON.stringify(property) : property };
  } else if (isNullOrUndefined(property.value) || property.value === STR_EMPTY2 || !isString(property.value) && !isNumber(property.value) && !isBoolean(property.value) && !isArray(property.value)) {
    return null;
  }
  if (isArray(property.value) && !isArrayValid(property.value)) {
    return null;
  }
  if (!isNullOrUndefined(property.kind)) {
    if (isArray(property.value) || !isValueKind(property.kind)) {
      return null;
    }
    property.value = property.value.toString();
  }
  return property;
}
function getCommonSchemaMetaData(value, kind, type) {
  var encodedTypeValue = -1;
  if (!isUndefined(value)) {
    if (kind > 0) {
      if (kind === 32) {
        encodedTypeValue = 1 << 13;
      } else if (kind <= 13) {
        encodedTypeValue = kind << 5;
      }
    }
    if (isDataType(type)) {
      if (encodedTypeValue === -1) {
        encodedTypeValue = 0;
      }
      encodedTypeValue |= type;
    } else {
      var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
      if (encodedTypeValue !== -1 && propType !== -1) {
        encodedTypeValue |= propType;
      } else if (propType === 6) {
        encodedTypeValue = propType;
      }
    }
  }
  return encodedTypeValue;
}
function disableCookies2() {
  safeGetCookieMgr(null).setEnabled(false);
}
function setCookie2(name2, value, days) {
  if (areCookiesSupported(null)) {
    safeGetCookieMgr(null).set(name2, value, days * 86400, null, "/");
  }
}
function deleteCookie2(name2) {
  if (areCookiesSupported(null)) {
    safeGetCookieMgr(null).del(name2);
  }
}
function getCookie2(name2) {
  if (areCookiesSupported(null)) {
    return getCookieValue(safeGetCookieMgr(null), name2);
  }
  return STR_EMPTY2;
}
function getCookieValue(cookieMgr, name2, decode) {
  if (decode === void 0) {
    decode = true;
  }
  var cookieValue;
  if (cookieMgr) {
    cookieValue = cookieMgr.get(name2);
    if (decode && cookieValue && decodeURIComponent) {
      cookieValue = decodeURIComponent(cookieValue);
    }
  }
  return cookieValue || STR_EMPTY2;
}
function createGuid(style) {
  if (style === void 0) {
    style = "D";
  }
  var theGuid = newGuid();
  if (style === "B") {
    theGuid = "{" + theGuid + "}";
  } else if (style === "P") {
    theGuid = "(" + theGuid + ")";
  } else if (style === "N") {
    theGuid = theGuid.replace(/-/g, STR_EMPTY2);
  }
  return theGuid;
}
function extend(obj, obj2, obj3, obj4, obj5) {
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;
  var objProto = Object[strShimPrototype];
  var theArgs = arguments;
  if (objProto.toString.call(theArgs[0]) === "[object Boolean]") {
    deep = theArgs[0];
    i++;
  }
  for (; i < length; i++) {
    var obj = theArgs[i];
    objForEachKey(obj, function(prop, value) {
      if (deep && value && isObject(value)) {
        if (isArray(value)) {
          extended[prop] = extended[prop] || [];
          arrForEach(value, function(arrayValue, arrayIndex) {
            if (arrayValue && isObject(arrayValue)) {
              extended[prop][arrayIndex] = extend(true, extended[prop][arrayIndex], arrayValue);
            } else {
              extended[prop][arrayIndex] = arrayValue;
            }
          });
        } else {
          extended[prop] = extend(true, extended[prop], value);
        }
      } else {
        extended[prop] = value;
      }
    });
  }
  return extended;
}
function isValueKind(value) {
  if (value === 0 || (value > 0 && value <= 13 || value === 32)) {
    return true;
  }
  return false;
}
function isDataType(value) {
  if (value >= 0 && value <= 9) {
    return true;
  }
  return false;
}
function isSafariOrFirefox() {
  var nav = getNavigator();
  if (!isUndefined(nav) && nav.userAgent) {
    var ua = nav.userAgent.toLowerCase();
    if ((ua.indexOf("safari") >= 0 || ua.indexOf("firefox") >= 0) && ua.indexOf("chrome") < 0) {
      return true;
    }
  }
  return false;
}
function isArrayValid(value) {
  return value.length > 0;
}
function setProcessTelemetryTimings(event, identifier) {
  var evt = event;
  evt.timings = evt.timings || {};
  evt.timings.processTelemetryStart = evt.timings.processTelemetryStart || {};
  evt.timings.processTelemetryStart[identifier] = getTime();
}
function getFieldValueType(value) {
  var theType = 0;
  if (value !== null && value !== void 0) {
    var objType = typeof value;
    if (objType === "string") {
      theType = 1;
    } else if (objType === "number") {
      theType = 2;
    } else if (objType === "boolean") {
      theType = 3;
    } else if (objType === strShimObject) {
      theType = 4;
      if (isArray(value)) {
        theType = 4096;
        if (value.length > 0) {
          theType |= getFieldValueType(value[0]);
        }
      } else if (ObjHasOwnProperty.call(value, "value")) {
        theType = 8192 | getFieldValueType(value.value);
      }
    }
  }
  return theType;
}
function isChromium() {
  return !!getGlobalInst("chrome");
}
function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
  if (disabled === void 0) {
    disabled = false;
  }
  if (isSync === void 0) {
    isSync = false;
  }
  function _wrapSetXhrProp(xhr2, prop, value) {
    try {
      xhr2[prop] = value;
    } catch (e) {
    }
  }
  var xhr = new XMLHttpRequest();
  if (disabled) {
    _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
  }
  if (withCredentials) {
    _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
  }
  xhr.open(method, urlString, !isSync);
  if (withCredentials) {
    _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
  }
  if (!isSync && timeout) {
    _wrapSetXhrProp(xhr, strTimeout, timeout);
  }
  return xhr;
}
var _a3, Version, FullVersionString, strDisabledPropertyName, strWithCredentials, strTimeout, _fieldTypeEventPropMap, uInt8ArraySupported, isDocumentObjectAvailable, isWindowObjectAvailable, getTime, Utils, CoreUtils2;
var init_Utils = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/Utils.js"() {
    init_applicationinsights_core_js();
    init_applicationinsights_shims();
    init_InternalConstants2();
    Version = "3.2.13";
    FullVersionString = "1DS-Web-JS-" + Version;
    strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    strWithCredentials = "withCredentials";
    strTimeout = "timeout";
    _fieldTypeEventPropMap = (_a3 = {}, _a3[
      0
      /* FieldValueSanitizerType.NotSet */
    ] = 0, _a3[
      2
      /* FieldValueSanitizerType.Number */
    ] = 6, _a3[
      1
      /* FieldValueSanitizerType.String */
    ] = 1, _a3[
      3
      /* FieldValueSanitizerType.Boolean */
    ] = 7, _a3[
      4096 | 2
      /* FieldValueSanitizerType.Number */
    ] = 6, _a3[
      4096 | 1
      /* FieldValueSanitizerType.String */
    ] = 1, _a3[
      4096 | 3
      /* FieldValueSanitizerType.Boolean */
    ] = 7, _a3);
    uInt8ArraySupported = null;
    isDocumentObjectAvailable = Boolean(getDocument());
    isWindowObjectAvailable = Boolean(getWindow());
    getTime = perfNow;
    Utils = {
      Version,
      FullVersionString,
      strUndefined: strShimUndefined,
      strObject: strShimObject,
      Undefined: strShimUndefined,
      arrForEach,
      arrIndexOf,
      arrMap,
      arrReduce,
      objKeys,
      toISOString,
      isReactNative,
      isString,
      isNumber,
      isBoolean,
      isFunction,
      isArray,
      isObject,
      strTrim,
      isDocumentObjectAvailable,
      isWindowObjectAvailable,
      isValueAssigned,
      getTenantId,
      isBeaconsSupported,
      isUint8ArrayAvailable,
      isLatency,
      sanitizeProperty,
      getISOString: toISOString,
      useXDomainRequest,
      getCommonSchemaMetaData,
      cookieAvailable: areCookiesSupported,
      disallowsSameSiteNone: uaDisallowsSameSiteNone,
      setCookie: setCookie2,
      deleteCookie: deleteCookie2,
      getCookie: getCookie2,
      createGuid,
      extend,
      getTime,
      isValueKind,
      isArrayValid,
      objDefineAccessors,
      addPageUnloadEventListener,
      setProcessTelemetryTimings,
      addEventHandler,
      getFieldValueType,
      strEndsWith,
      objForEachKey
    };
    CoreUtils2 = {
      _canUseCookies: void 0,
      isTypeof,
      isUndefined,
      isNullOrUndefined,
      hasOwnProperty,
      isFunction,
      isObject,
      isDate,
      isArray,
      isError,
      isString,
      isNumber,
      isBoolean,
      toISOString,
      arrForEach,
      arrIndexOf,
      arrMap,
      arrReduce,
      strTrim,
      objCreate: objCreateFn,
      objKeys,
      objDefineAccessors,
      addEventHandler,
      dateNow,
      isIE,
      disableCookies: disableCookies2,
      newGuid,
      perfNow,
      newId,
      randomValue,
      random32,
      mwcRandomSeed,
      mwcRandom32,
      generateW3CId
    };
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/AppInsightsCore.js
var AppInsightsCore2, AppInsightsCore_default;
var init_AppInsightsCore2 = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/AppInsightsCore.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_applicationinsights_core_js();
    init_InternalConstants2();
    init_Utils();
    AppInsightsCore2 = /** @class */
    function(_super) {
      __extendsFn(AppInsightsCore3, _super);
      function AppInsightsCore3() {
        var _this = _super.call(this) || this;
        _this.pluginVersionStringArr = [];
        dynamicProto(AppInsightsCore3, _this, function(_self, _base) {
          if (!_self.logger || !_self.logger.queue) {
            _self.logger = new DiagnosticLogger({
              loggingLevelConsole: 1
              /* eLoggingSeverity.CRITICAL */
            });
          }
          _self.initialize = function(config, extensions2, logger, notificationManager) {
            doPerf(_self, function() {
              return "AppInsightsCore.initialize";
            }, function() {
              var _pluginVersionStringArr = _self.pluginVersionStringArr;
              if (config) {
                if (!config.endpointUrl) {
                  config.endpointUrl = STR_DEFAULT_ENDPOINT_URL;
                }
                var propertyStorageOverride = config.propertyStorageOverride;
                if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
                  throwError("Invalid property storage override passed.");
                }
                if (config.channels) {
                  arrForEach(config.channels, function(channels) {
                    if (channels) {
                      arrForEach(channels, function(channel) {
                        if (channel.identifier && channel.version) {
                          var ver = channel.identifier + "=" + channel.version;
                          _pluginVersionStringArr.push(ver);
                        }
                      });
                    }
                  });
                }
              }
              _self.getWParam = function() {
                return typeof document !== "undefined" || !!config.enableWParam ? 0 : -1;
              };
              if (extensions2) {
                arrForEach(extensions2, function(ext) {
                  if (ext && ext.identifier && ext.version) {
                    var ver = ext.identifier + "=" + ext.version;
                    _pluginVersionStringArr.push(ver);
                  }
                });
              }
              _self.pluginVersionString = _pluginVersionStringArr.join(";");
              _self.pluginVersionStringArr = _pluginVersionStringArr;
              try {
                _base.initialize(config, extensions2, logger, notificationManager);
                _self.pollInternalLogs("InternalLog");
              } catch (e) {
                var logger_1 = _self.logger;
                var message = dumpObj(e);
                if (message.indexOf("channels") !== -1) {
                  message += "\n - Channels must be provided through config.channels only!";
                }
                _throwInternal(logger_1, 1, 514, "SDK Initialization Failed - no telemetry will be sent: " + message);
              }
            }, function() {
              return { config, extensions: extensions2, logger, notificationManager };
            });
          };
          _self.track = function(item) {
            doPerf(_self, function() {
              return "AppInsightsCore.track";
            }, function() {
              var telemetryItem = item;
              if (telemetryItem) {
                telemetryItem.timings = telemetryItem.timings || {};
                telemetryItem.timings.trackStart = getTime();
                if (!isLatency(telemetryItem.latency)) {
                  telemetryItem.latency = 1;
                }
                var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                itemExt.sdk = itemExt.sdk || {};
                itemExt.sdk.ver = FullVersionString;
                var baseData = telemetryItem.baseData = telemetryItem.baseData || {};
                baseData[STR_PROPERTIES] = baseData[STR_PROPERTIES] || {};
                var itemProperties = baseData[STR_PROPERTIES];
                itemProperties[STR_VERSION] = itemProperties[STR_VERSION] || _self.pluginVersionString || STR_EMPTY2;
              }
              _base.track(telemetryItem);
            }, function() {
              return { item };
            }, !item.sync);
          };
        });
        return _this;
      }
      AppInsightsCore3.__ieDyn = 1;
      return AppInsightsCore3;
    }(AppInsightsCore);
    AppInsightsCore_default = AppInsightsCore2;
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/BaseCore.js
var BaseCore2, BaseCore_default;
var init_BaseCore2 = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/BaseCore.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_applicationinsights_core_js();
    init_InternalConstants2();
    init_Utils();
    BaseCore2 = /** @class */
    function(_super) {
      __extendsFn(BaseCore3, _super);
      function BaseCore3() {
        var _this = _super.call(this) || this;
        dynamicProto(BaseCore3, _this, function(_self, _base) {
          _self.initialize = function(config, extensions2, logger, notificationManager) {
            if (config && !config.endpointUrl) {
              config.endpointUrl = STR_DEFAULT_ENDPOINT_URL;
            }
            _self.getWParam = function() {
              return isDocumentObjectAvailable || !!config.enableWParam ? 0 : -1;
            };
            try {
              _base.initialize(config, extensions2, logger, notificationManager);
            } catch (e) {
              _throwInternal(_self.logger, 1, 514, "Initialization Failed: " + dumpObj(e) + "\n - Note: Channels must be provided through config.channels only");
            }
          };
          _self.track = function(item) {
            var telemetryItem = item;
            if (telemetryItem) {
              var ext = telemetryItem.ext = telemetryItem.ext || {};
              ext.sdk = ext.sdk || {};
              ext.sdk.ver = FullVersionString;
            }
            _base.track(telemetryItem);
          };
        });
        return _this;
      }
      BaseCore3.__ieDyn = 1;
      return BaseCore3;
    }(BaseCore);
    BaseCore_default = BaseCore2;
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/ESPromise.js
function _createPromiseAllOnResolvedFunction(values, index, resolvedCallback) {
  return function(value) {
    values[index] = value;
    resolvedCallback();
  };
}
var _isFunction, ESPromise, ESPromise_default;
var init_ESPromise = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/ESPromise.js"() {
    init_dynamicproto_js();
    init_applicationinsights_core_js();
    _isFunction = isFunction;
    ESPromise = /** @class */
    function() {
      function ESPromise2(resolverFunc) {
        var _state = 0;
        var _settledValue = null;
        var _queue = [];
        dynamicProto(ESPromise2, this, function(_this) {
          _this.then = function(onResolved, onRejected) {
            return new ESPromise2(function(resolve, reject) {
              _enqueue(onResolved, onRejected, resolve, reject);
            });
          };
          _this["catch"] = function(onRejected) {
            return _this.then(null, onRejected);
          };
        });
        function _enqueue(onResolved, onRejected, resolve, reject) {
          _queue.push(function() {
            var value;
            try {
              if (_state === 1) {
                value = _isFunction(onResolved) ? onResolved(_settledValue) : _settledValue;
              } else {
                value = _isFunction(onRejected) ? onRejected(_settledValue) : _settledValue;
              }
              if (value instanceof ESPromise2) {
                value.then(resolve, reject);
              } else if (_state === 2 && !_isFunction(onRejected)) {
                reject(value);
              } else {
                resolve(value);
              }
            } catch (error) {
              reject(error);
              return;
            }
          });
          if (_state !== 0) {
            _processQueue();
          }
        }
        function _processQueue() {
          if (_queue.length > 0) {
            var pending_1 = _queue.slice();
            _queue = [];
            setTimeout(function() {
              for (var i = 0, len = pending_1.length; i < len; ++i) {
                try {
                  pending_1[i]();
                } catch (e) {
                }
              }
            }, 0);
          }
        }
        function _resolve(value) {
          if (_state === 0) {
            _settledValue = value;
            _state = 1;
            _processQueue();
          }
        }
        function _reject(reason) {
          if (_state === 0) {
            _settledValue = reason;
            _state = 2;
            _processQueue();
          }
        }
        (function _initialize() {
          if (!_isFunction(resolverFunc)) {
            throw new TypeError("ESPromise: resolvedFunc argument is not a Function");
          }
          try {
            resolverFunc(_resolve, _reject);
          } catch (error) {
            _reject(error);
          }
        })();
      }
      ESPromise2.resolve = function(value) {
        if (value instanceof ESPromise2) {
          return value;
        } else if (value && _isFunction(value.then)) {
          return new ESPromise2(function(resolve, reject) {
            try {
              value.then(resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        }
        return new ESPromise2(function(resolve) {
          resolve(value);
        });
      };
      ESPromise2.reject = function(reason) {
        return new ESPromise2(function(resolve, reject) {
          reject(reason);
        });
      };
      ESPromise2.all = function(iterable) {
        if (!iterable || !iterable.length) {
          return;
        }
        return new ESPromise2(function(resolve, reject) {
          try {
            var values_1 = [];
            var pending_2 = 0;
            for (var lp = 0; lp < iterable.length; lp++) {
              var item = iterable[lp];
              if (item && _isFunction(item.then)) {
                pending_2++;
                item.then(_createPromiseAllOnResolvedFunction(values_1, lp, function() {
                  if (--pending_2 === 0) {
                    resolve(values_1);
                  }
                }), reject);
              } else {
                values_1[lp] = item;
              }
            }
            if (pending_2 === 0) {
              setTimeout(function() {
                resolve(values_1);
              }, 0);
            }
          } catch (error) {
            reject(error);
          }
        });
      };
      ESPromise2.race = function(iterable) {
        return new ESPromise2(function(resolve, reject) {
          if (!iterable || !iterable.length) {
            return;
          }
          try {
            var _loop_1 = function(lp2) {
              var item = iterable[lp2];
              if (item && _isFunction(item.then)) {
                item.then(resolve, reject);
              } else {
                setTimeout(function() {
                  resolve(item);
                }, 0);
              }
            };
            for (var lp = 0; lp < iterable.length; lp++) {
              _loop_1(lp);
            }
          } catch (error) {
            reject(error);
          }
        });
      };
      return ESPromise2;
    }();
    ESPromise_default = ESPromise;
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/ESPromiseScheduler.js
function _getTime() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var LazyRejectPeriod, _schedulerId, _running, _waiting, _timedOut, ESPromiseScheduler, ESPromiseScheduler_default;
var init_ESPromiseScheduler = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/ESPromiseScheduler.js"() {
    init_dynamicproto_js();
    init_ESPromise();
    init_applicationinsights_core_js();
    LazyRejectPeriod = 6e5;
    _schedulerId = 0;
    _running = [];
    _waiting = [];
    _timedOut = [];
    ESPromiseScheduler = /** @class */
    function() {
      function ESPromiseScheduler2(name2, diagLog) {
        var _promiseId = 0;
        var _scheduledName = (name2 || "<unnamed>") + "." + _schedulerId;
        _schedulerId++;
        dynamicProto(ESPromiseScheduler2, this, function(_this) {
          var _lastEvent = null;
          var _eventCount = 0;
          _this.scheduleEvent = function(startEventAction, eventName, timeout) {
            var uniqueId = _scheduledName + "." + _eventCount;
            _eventCount++;
            if (eventName) {
              uniqueId += "-(" + eventName + ")";
            }
            var uniqueEventId = uniqueId + "{" + _promiseId + "}";
            _promiseId++;
            var newScheduledEvent = {
              evt: null,
              tm: _getTime(),
              id: uniqueEventId,
              isRunning: false,
              isAborted: false
            };
            if (!_lastEvent) {
              newScheduledEvent.evt = _startWaitingEvent(newScheduledEvent);
            } else {
              newScheduledEvent.evt = _waitForPreviousEvent(newScheduledEvent, _lastEvent);
            }
            _lastEvent = newScheduledEvent;
            _lastEvent.evt._schId = uniqueEventId;
            return newScheduledEvent.evt;
            function _abortAndRemoveOldEvents(eventQueue) {
              var now = _getTime();
              var expired = now - LazyRejectPeriod;
              var len = eventQueue.length;
              var lp = 0;
              while (lp < len) {
                var evt = eventQueue[lp];
                if (evt && evt.tm < expired) {
                  var message = null;
                  if (evt.abort) {
                    message = "Aborting [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                    evt.abort(message);
                  } else {
                    message = "Removing [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                  }
                  _warnLog(message);
                  eventQueue.splice(lp, 1);
                  len--;
                } else {
                  lp++;
                }
              }
            }
            function _cleanup(eventId, completed) {
              var toQueue = false;
              var removed = _removeQueuedEvent(_running, eventId);
              if (!removed) {
                removed = _removeQueuedEvent(_timedOut, eventId);
                toQueue = true;
              }
              if (removed) {
                if (removed.to) {
                  clearTimeout(removed.to);
                  removed.to = null;
                }
                var tm = _getTime() - removed.tm;
                if (completed) {
                  if (!toQueue) {
                    _debugLog("Promise [" + eventId + "] Complete -- " + tm + " ms");
                  } else {
                    _warnLog("Timed out event [" + eventId + "] finally complete -- " + tm + " ms");
                  }
                } else {
                  _timedOut.push(removed);
                  _warnLog("Event [" + eventId + "] Timed out and removed -- " + tm + " ms");
                }
              } else {
                _debugLog("Failed to remove [" + eventId + "] from running queue");
              }
              if (_lastEvent && _lastEvent.id === eventId) {
                _lastEvent = null;
              }
              _abortAndRemoveOldEvents(_running);
              _abortAndRemoveOldEvents(_waiting);
              _abortAndRemoveOldEvents(_timedOut);
            }
            function _removeScheduledEvent(eventId, callback) {
              return function(value) {
                _cleanup(eventId, true);
                callback && callback(value);
                return value;
              };
            }
            function _waitForFinalResult(eventId, startResult, schEventResolve, schEventReject) {
              startResult.then(function(value) {
                if (value instanceof ESPromise_default) {
                  _debugLog("Event [" + eventId + "] returned a promise -- waiting");
                  _waitForFinalResult(eventId, value, schEventResolve, schEventReject);
                  return value;
                } else {
                  return _removeScheduledEvent(eventId, schEventResolve)(value);
                }
              }, _removeScheduledEvent(eventId, schEventReject));
            }
            function _createScheduledEvent(eventDetails, startEvent) {
              var eventId = eventDetails.id;
              return new ESPromise_default(function(schEventResolve, schEventReject) {
                _debugLog("Event [" + eventId + "] Starting -- waited for " + (eventDetails.wTm || "--") + " ms");
                eventDetails.isRunning = true;
                eventDetails.abort = function(message) {
                  eventDetails.abort = null;
                  eventDetails.isAborted = true;
                  _cleanup(eventId, false);
                  schEventReject(new Error(message));
                };
                var startResult = startEvent(eventId);
                if (startResult instanceof ESPromise_default) {
                  if (timeout) {
                    eventDetails.to = setTimeout(function() {
                      _cleanup(eventId, false);
                      schEventReject(new Error("Timed out after [" + timeout + "] ms"));
                    }, timeout);
                  }
                  _waitForFinalResult(eventId, startResult, function(theResult) {
                    _debugLog("Event [" + eventId + "] Resolving after " + (_getTime() - eventDetails.tm) + " ms");
                    schEventResolve(theResult);
                  }, schEventReject);
                } else {
                  _debugLog("Promise [" + eventId + "] Auto completed as the start action did not return a promise");
                  schEventResolve();
                }
              });
            }
            function _startWaitingEvent(eventDetails) {
              var now = _getTime();
              eventDetails.wTm = now - eventDetails.tm;
              eventDetails.tm = now;
              if (eventDetails.isAborted) {
                return ESPromise_default.reject(new Error("[" + uniqueId + "] was aborted"));
              }
              _running.push(eventDetails);
              return _createScheduledEvent(eventDetails, startEventAction);
            }
            function _waitForPreviousEvent(eventDetails, waitForEvent) {
              var waitEvent = new ESPromise_default(function(waitResolve, waitReject) {
                var runTime = _getTime() - waitForEvent.tm;
                var prevId = waitForEvent.id;
                _debugLog("[" + uniqueId + "] is waiting for [" + prevId + ":" + runTime + " ms] to complete before starting -- [" + _waiting.length + "] waiting and [" + _running.length + "] running");
                eventDetails.abort = function(message) {
                  eventDetails.abort = null;
                  _removeQueuedEvent(_waiting, uniqueId);
                  eventDetails.isAborted = true;
                  waitReject(new Error(message));
                };
                waitForEvent.evt.then(function(value) {
                  _removeQueuedEvent(_waiting, uniqueId);
                  _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                }, function(reason) {
                  _removeQueuedEvent(_waiting, uniqueId);
                  _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                });
              });
              _waiting.push(eventDetails);
              return waitEvent;
            }
          };
          function _removeQueuedEvent(queue, eventId) {
            for (var lp = 0; lp < queue.length; lp++) {
              if (queue[lp].id === eventId) {
                return queue.splice(lp, 1)[0];
              }
            }
            return null;
          }
        });
        function _debugLog(message) {
          var global2 = getGlobal();
          if (global2 && global2["QUnit"]) {
            console && console.log("ESPromiseScheduler[" + _scheduledName + "] " + message);
          }
        }
        function _warnLog(message) {
          _warnToConsole(diagLog, "ESPromiseScheduler[" + _scheduledName + "] " + message);
        }
      }
      ESPromiseScheduler2.incomplete = function() {
        return _running;
      };
      ESPromiseScheduler2.waitingToStart = function() {
        return _waiting;
      };
      return ESPromiseScheduler2;
    }();
    ESPromiseScheduler_default = ESPromiseScheduler;
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/ValueSanitizer.js
var ValueSanitizer;
var init_ValueSanitizer = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/ValueSanitizer.js"() {
    init_applicationinsights_core_js();
    init_InternalConstants2();
    init_Utils();
    ValueSanitizer = /** @class */
    function() {
      function ValueSanitizer2(fieldSanitizerProvider) {
        var _self = this;
        var _sanitizerMap = {};
        var _sanitizers = [];
        var _fieldSanitizers = [];
        if (fieldSanitizerProvider) {
          _fieldSanitizers.push(fieldSanitizerProvider);
        }
        function _getFieldSanitizer(path2, name2) {
          var result;
          var fieldLookup = _sanitizerMap[path2];
          if (fieldLookup) {
            result = fieldLookup[name2];
          }
          if (!result && result !== null) {
            if (isString(path2) && isString(name2)) {
              if (_fieldSanitizers.length > 0) {
                for (var lp = 0; lp < _fieldSanitizers.length; lp++) {
                  if (_fieldSanitizers[lp].handleField(path2, name2)) {
                    result = {
                      canHandle: true,
                      fieldHandler: _fieldSanitizers[lp]
                    };
                    break;
                  }
                }
              } else if (_sanitizers.length === 0) {
                result = {
                  canHandle: true
                };
              }
            }
            if (!result && result !== null) {
              result = null;
              for (var lp = 0; lp < _sanitizers.length; lp++) {
                if (_sanitizers[lp].handleField(path2, name2)) {
                  result = {
                    canHandle: true,
                    handler: _sanitizers[lp],
                    fieldHandler: null
                  };
                  break;
                }
              }
            }
            if (!fieldLookup) {
              fieldLookup = _sanitizerMap[path2] = {};
            }
            fieldLookup[name2] = result;
          }
          return result;
        }
        _self.addSanitizer = function(newSanitizer) {
          if (newSanitizer) {
            _sanitizers.push(newSanitizer);
            _sanitizerMap = {};
          }
        };
        _self.addFieldSanitizer = function(fieldSanitizer) {
          if (fieldSanitizer) {
            _fieldSanitizers.push(fieldSanitizer);
            _sanitizerMap = {};
          }
        };
        _self.handleField = function(path2, name2) {
          var mapValue = _getFieldSanitizer(path2, name2);
          return mapValue ? mapValue.canHandle : false;
        };
        _self.value = function(path2, name2, value, stringifyObjects) {
          var mapValue = _getFieldSanitizer(path2, name2);
          if (mapValue && mapValue.canHandle) {
            if (!mapValue || !mapValue.canHandle) {
              return null;
            }
            if (mapValue.handler) {
              return mapValue.handler.value(path2, name2, value, stringifyObjects);
            }
            if (!isString(name2) || isNullOrUndefined(value) || value === STR_EMPTY2) {
              return null;
            }
            var property = null;
            var fieldType = getFieldValueType(value);
            if ((fieldType & 8192) === 8192) {
              var subType = fieldType & ~8192;
              property = value;
              if (!isValueAssigned(property.value) || subType !== 1 && subType !== 2 && subType !== 3 && (subType & 4096) !== 4096) {
                return null;
              }
            } else if (fieldType === 1 || fieldType === 2 || fieldType === 3 || (fieldType & 4096) === 4096) {
              property = _convertToProperty(path2, name2, value);
            } else if (fieldType === 4) {
              property = _convertToProperty(path2, name2, !!stringifyObjects ? JSON.stringify(value) : value);
            }
            if (property) {
              return _handleProperty(mapValue, path2, name2, fieldType, property, stringifyObjects);
            }
          }
          return null;
        };
        _self.property = function(path2, name2, property, stringifyObjects) {
          var mapValue = _getFieldSanitizer(path2, name2);
          if (!mapValue || !mapValue.canHandle) {
            return null;
          }
          if (!isString(name2) || isNullOrUndefined(property) || !isValueAssigned(property.value)) {
            return null;
          }
          var fieldType = getFieldValueType(property.value);
          if (fieldType === 0) {
            return null;
          }
          return _handleProperty(mapValue, path2, name2, fieldType, property, stringifyObjects);
        };
        function _handleProperty(mapValue, path2, name2, fieldType, property, stringifyObjects) {
          if (mapValue.handler) {
            return mapValue.handler.property(path2, name2, property, stringifyObjects);
          }
          if (!isNullOrUndefined(property.kind)) {
            if ((fieldType & 4096) === 4096 || !isValueKind(property.kind)) {
              return null;
            }
            property.value = property.value.toString();
          }
          return _callFieldSanitizer(mapValue.fieldHandler, path2, name2, fieldType, property);
        }
        function _convertToProperty(path2, name2, value) {
          if (isValueAssigned(value)) {
            return { value };
          }
          return null;
        }
        function _callFieldSanitizer(fieldProvider, path2, name2, theType, property) {
          if (property && fieldProvider) {
            var sanitizer = fieldProvider.getSanitizer(path2, name2, theType, property.kind, property.propertyType);
            if (sanitizer) {
              if (theType === 4) {
                var newValue_1 = {};
                var propValue = property.value;
                objForEachKey(propValue, function(propKey, theValue) {
                  var newPath = path2 + "." + name2;
                  if (isValueAssigned(theValue)) {
                    var newProp = _convertToProperty(newPath, propKey, theValue);
                    newProp = _callFieldSanitizer(fieldProvider, newPath, propKey, getFieldValueType(theValue), newProp);
                    if (newProp) {
                      newValue_1[propKey] = newProp.value;
                    }
                  }
                });
                property.value = newValue_1;
              } else {
                var details = {
                  path: path2,
                  name: name2,
                  type: theType,
                  prop: property,
                  sanitizer: _self
                };
                property = sanitizer.call(_self, details);
              }
            }
          }
          return property;
        }
      }
      ValueSanitizer2.getFieldType = getFieldValueType;
      return ValueSanitizer2;
    }();
  }
});

// node_modules/@microsoft/1ds-core-js/dist-esm/src/Index.js
var Index_exports = {};
__export(Index_exports, {
  AppInsightsCore: () => AppInsightsCore_default,
  BaseCore: () => BaseCore_default,
  BaseTelemetryPlugin: () => BaseTelemetryPlugin,
  CoreUtils: () => CoreUtils2,
  DiagnosticLogger: () => DiagnosticLogger,
  ESPromise: () => ESPromise_default,
  ESPromiseScheduler: () => ESPromiseScheduler_default,
  EventHelper: () => EventHelper,
  EventLatency: () => EventLatency,
  EventPersistence: () => EventPersistence,
  EventPropertyType: () => EventPropertyType,
  EventsDiscardedReason: () => EventsDiscardedReason,
  FullVersionString: () => FullVersionString,
  InternalAppInsightsCore: () => AppInsightsCore,
  InternalBaseCore: () => BaseCore,
  LoggingSeverity: () => LoggingSeverity,
  MinChannelPriorty: () => MinChannelPriorty,
  NotificationManager: () => NotificationManager,
  PerfEvent: () => PerfEvent,
  PerfManager: () => PerfManager,
  ProcessTelemetryContext: () => ProcessTelemetryContext,
  TraceLevel: () => TraceLevel,
  Undefined: () => strShimUndefined,
  Utils: () => Utils,
  ValueKind: () => ValueKind,
  ValueSanitizer: () => ValueSanitizer,
  Version: () => Version,
  _ExtendedInternalMessageId: () => _ExtendedInternalMessageId,
  _InternalLogMessage: () => _InternalLogMessage,
  _InternalMessageId: () => _InternalMessageId,
  __getRegisteredEvents: () => __getRegisteredEvents,
  _logInternalMessage: () => _logInternalMessage,
  _throwInternal: () => _throwInternal,
  _warnToConsole: () => _warnToConsole,
  addEventHandler: () => addEventHandler,
  addEventListeners: () => addEventListeners,
  addPageHideEventListener: () => addPageHideEventListener,
  addPageShowEventListener: () => addPageShowEventListener,
  addPageUnloadEventListener: () => addPageUnloadEventListener,
  areCookiesSupported: () => areCookiesSupported,
  arrForEach: () => arrForEach,
  arrIndexOf: () => arrIndexOf,
  arrMap: () => arrMap,
  arrReduce: () => arrReduce,
  attachEvent: () => attachEvent,
  cookieAvailable: () => areCookiesSupported,
  createCookieMgr: () => createCookieMgr,
  createEnumStyle: () => createEnumStyle,
  createGuid: () => createGuid,
  createProcessTelemetryContext: () => createProcessTelemetryContext,
  createTraceParent: () => createTraceParent,
  createUniqueNamespace: () => createUniqueNamespace,
  createUnloadHandlerContainer: () => createUnloadHandlerContainer,
  dateNow: () => dateNow,
  deleteCookie: () => deleteCookie2,
  detachEvent: () => detachEvent,
  disableCookies: () => disableCookies2,
  disallowsSameSiteNone: () => uaDisallowsSameSiteNone,
  doPerf: () => doPerf,
  dumpObj: () => dumpObj,
  eventOff: () => eventOff,
  eventOn: () => eventOn,
  extend: () => extend,
  findW3cTraceParent: () => findW3cTraceParent,
  formatTraceParent: () => formatTraceParent,
  generateW3CId: () => generateW3CId,
  getCommonSchemaMetaData: () => getCommonSchemaMetaData,
  getConsole: () => getConsole,
  getCookie: () => getCookie2,
  getCookieValue: () => getCookieValue,
  getCrypto: () => getCrypto,
  getDocument: () => getDocument,
  getExceptionName: () => getExceptionName,
  getFieldValueType: () => getFieldValueType,
  getGlobal: () => getGlobal,
  getGlobalInst: () => getGlobalInst,
  getHistory: () => getHistory,
  getIEVersion: () => getIEVersion,
  getISOString: () => toISOString,
  getJSON: () => getJSON,
  getLocation: () => getLocation,
  getMsCrypto: () => getMsCrypto,
  getNavigator: () => getNavigator,
  getPerformance: () => getPerformance,
  getSetValue: () => getSetValue,
  getTenantId: () => getTenantId,
  getTime: () => getTime,
  getWindow: () => getWindow,
  hasDocument: () => hasDocument,
  hasHistory: () => hasHistory,
  hasJSON: () => hasJSON,
  hasNavigator: () => hasNavigator,
  hasOwnProperty: () => hasOwnProperty,
  hasWindow: () => hasWindow,
  isArray: () => isArray,
  isArrayValid: () => isArrayValid,
  isBeaconsSupported: () => isBeaconsSupported,
  isBoolean: () => isBoolean,
  isChromium: () => isChromium,
  isDate: () => isDate,
  isDocumentObjectAvailable: () => isDocumentObjectAvailable,
  isError: () => isError,
  isFetchSupported: () => isFetchSupported,
  isFunction: () => isFunction,
  isIE: () => isIE,
  isLatency: () => isLatency,
  isNotTruthy: () => isNotTruthy,
  isNullOrUndefined: () => isNullOrUndefined,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isReactNative: () => isReactNative,
  isSampledFlag: () => isSampledFlag,
  isString: () => isString,
  isTruthy: () => isTruthy,
  isTypeof: () => isTypeof,
  isUint8ArrayAvailable: () => isUint8ArrayAvailable,
  isUndefined: () => isUndefined,
  isValidSpanId: () => isValidSpanId,
  isValidTraceId: () => isValidTraceId,
  isValidTraceParent: () => isValidTraceParent,
  isValueAssigned: () => isValueAssigned,
  isValueKind: () => isValueKind,
  isWindowObjectAvailable: () => isWindowObjectAvailable,
  isXhrSupported: () => isXhrSupported,
  mergeEvtNamespace: () => mergeEvtNamespace,
  newGuid: () => newGuid,
  newId: () => newId,
  normalizeJsName: () => normalizeJsName,
  objCreate: () => objCreateFn,
  objDefineAccessors: () => objDefineAccessors,
  objForEachKey: () => objForEachKey,
  objFreeze: () => objFreeze,
  objKeys: () => objKeys,
  objSeal: () => objSeal,
  openXhr: () => openXhr,
  optimizeObject: () => optimizeObject,
  parseTraceParent: () => parseTraceParent,
  perfNow: () => perfNow,
  proxyAssign: () => proxyAssign,
  proxyFunctionAs: () => proxyFunctionAs,
  proxyFunctions: () => proxyFunctions,
  random32: () => random32,
  randomValue: () => randomValue,
  removeEventHandler: () => removeEventHandler,
  removeEventListeners: () => removeEventListeners,
  removePageHideEventListener: () => removePageHideEventListener,
  removePageShowEventListener: () => removePageShowEventListener,
  removePageUnloadEventListener: () => removePageUnloadEventListener,
  safeGetCookieMgr: () => safeGetCookieMgr,
  safeGetLogger: () => safeGetLogger,
  sanitizeProperty: () => sanitizeProperty,
  setCookie: () => setCookie2,
  setEnableEnvMocks: () => setEnableEnvMocks,
  setProcessTelemetryTimings: () => setProcessTelemetryTimings,
  setValue: () => setValue,
  strContains: () => strContains,
  strEndsWith: () => strEndsWith,
  strFunction: () => strShimFunction,
  strObject: () => strShimObject,
  strPrototype: () => strShimPrototype,
  strStartsWith: () => strStartsWith,
  strTrim: () => strTrim,
  strUndefined: () => strShimUndefined,
  throwError: () => throwError,
  toISOString: () => toISOString,
  useXDomainRequest: () => useXDomainRequest
});
var init_Index = __esm({
  "node_modules/@microsoft/1ds-core-js/dist-esm/src/Index.js"() {
    init_Enums();
    init_AppInsightsCore2();
    init_BaseCore2();
    init_ESPromise();
    init_ESPromiseScheduler();
    init_ValueSanitizer();
    init_applicationinsights_core_js();
    init_Utils();
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/DataModels.js
var RT_PROFILE, NRT_PROFILE, BE_PROFILE;
var init_DataModels = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/DataModels.js"() {
    RT_PROFILE = "REAL_TIME";
    NRT_PROFILE = "NEAR_REAL_TIME";
    BE_PROFILE = "BEST_EFFORT";
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/InternalConstants.js
var STR_EMPTY3, STR_POST_METHOD, STR_DISABLED_PROPERTY_NAME, STR_DROPPED, STR_SENDING, STR_REQUEUE, STR_RESPONSE_FAIL, STR_OTHER, DEFAULT_CACHE_CONTROL, DEFAULT_CONTENT_TYPE, STR_CACHE_CONTROL, STR_CONTENT_TYPE_HEADER, STR_KILL_TOKENS_HEADER, STR_KILL_DURATION_HEADER, STR_KILL_DURATION_SECONDS_HEADER, STR_TIME_DELTA_HEADER, STR_CLIENT_VERSION, STR_CLIENT_ID, STR_TIME_DELTA_TO_APPLY, STR_UPLOAD_TIME, STR_API_KEY, STR_MSA_DEVICE_TICKET, STR_AUTH_XTOKEN, STR_NO_RESPONSE_BODY, STR_MSFPC, STR_TRACE, STR_USER;
var init_InternalConstants3 = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/InternalConstants.js"() {
    STR_EMPTY3 = "";
    STR_POST_METHOD = "POST";
    STR_DISABLED_PROPERTY_NAME = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    STR_DROPPED = "drop";
    STR_SENDING = "send";
    STR_REQUEUE = "requeue";
    STR_RESPONSE_FAIL = "rspFail";
    STR_OTHER = "oth";
    DEFAULT_CACHE_CONTROL = "no-cache, no-store";
    DEFAULT_CONTENT_TYPE = "application/x-json-stream";
    STR_CACHE_CONTROL = "cache-control";
    STR_CONTENT_TYPE_HEADER = "content-type";
    STR_KILL_TOKENS_HEADER = "kill-tokens";
    STR_KILL_DURATION_HEADER = "kill-duration";
    STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
    STR_TIME_DELTA_HEADER = "time-delta-millis";
    STR_CLIENT_VERSION = "client-version";
    STR_CLIENT_ID = "client-id";
    STR_TIME_DELTA_TO_APPLY = "time-delta-to-apply-millis";
    STR_UPLOAD_TIME = "upload-time";
    STR_API_KEY = "apikey";
    STR_MSA_DEVICE_TICKET = "AuthMsaDeviceTicket";
    STR_AUTH_XTOKEN = "AuthXToken";
    STR_NO_RESPONSE_BODY = "NoResponseBody";
    STR_MSFPC = "msfpc";
    STR_TRACE = "trace";
    STR_USER = "user";
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/EventBatch.js
function _getEventMsfpc(theEvent) {
  var intWeb = (theEvent.ext || {})["intweb"];
  if (intWeb && isValueAssigned(intWeb[STR_MSFPC])) {
    return intWeb[STR_MSFPC];
  }
  return null;
}
function _getMsfpc(theEvents) {
  var msfpc = null;
  for (var lp = 0; msfpc === null && lp < theEvents.length; lp++) {
    msfpc = _getEventMsfpc(theEvents[lp]);
  }
  return msfpc;
}
var EventBatch;
var init_EventBatch = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/EventBatch.js"() {
    init_Index();
    init_InternalConstants3();
    EventBatch = /** @class */
    function() {
      function EventBatch2(iKey, addEvents) {
        var events = addEvents ? [].concat(addEvents) : [];
        var _self = this;
        var _msfpc = _getMsfpc(events);
        _self.iKey = function() {
          return iKey;
        };
        _self.Msfpc = function() {
          return _msfpc || STR_EMPTY3;
        };
        _self.count = function() {
          return events.length;
        };
        _self.events = function() {
          return events;
        };
        _self.addEvent = function(theEvent) {
          if (theEvent) {
            events.push(theEvent);
            if (!_msfpc) {
              _msfpc = _getEventMsfpc(theEvent);
            }
            return true;
          }
          return false;
        };
        _self.split = function(fromEvent, numEvents) {
          var theEvents;
          if (fromEvent < events.length) {
            var cnt = events.length - fromEvent;
            if (!isNullOrUndefined(numEvents)) {
              cnt = numEvents < cnt ? numEvents : cnt;
            }
            theEvents = events.splice(fromEvent, cnt);
            _msfpc = _getMsfpc(events);
          }
          return new EventBatch2(iKey, theEvents);
        };
      }
      EventBatch2.create = function(iKey, theEvents) {
        return new EventBatch2(iKey, theEvents);
      };
      return EventBatch2;
    }();
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/ClockSkewManager.js
var ClockSkewManager, ClockSkewManager_default;
var init_ClockSkewManager = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/ClockSkewManager.js"() {
    init_dynamicproto_js();
    ClockSkewManager = /** @class */
    function() {
      function ClockSkewManager2() {
        var _allowRequestSending = true;
        var _shouldAddClockSkewHeaders = true;
        var _isFirstRequest = true;
        var _clockSkewHeaderValue = "use-collector-delta";
        var _clockSkewSet = false;
        dynamicProto(ClockSkewManager2, this, function(_self) {
          _self.allowRequestSending = function() {
            return _allowRequestSending;
          };
          _self.firstRequestSent = function() {
            if (_isFirstRequest) {
              _isFirstRequest = false;
              if (!_clockSkewSet) {
                _allowRequestSending = false;
              }
            }
          };
          _self.shouldAddClockSkewHeaders = function() {
            return _shouldAddClockSkewHeaders;
          };
          _self.getClockSkewHeaderValue = function() {
            return _clockSkewHeaderValue;
          };
          _self.setClockSkew = function(timeDeltaInMillis) {
            if (!_clockSkewSet) {
              if (timeDeltaInMillis) {
                _clockSkewHeaderValue = timeDeltaInMillis;
                _shouldAddClockSkewHeaders = true;
                _clockSkewSet = true;
              } else {
                _shouldAddClockSkewHeaders = false;
              }
              _allowRequestSending = true;
            }
          };
        });
      }
      ClockSkewManager2.__ieDyn = 1;
      return ClockSkewManager2;
    }();
    ClockSkewManager_default = ClockSkewManager;
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/KillSwitch.js
var SecToMsMultiplier, KillSwitch, KillSwitch_default;
var init_KillSwitch = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/KillSwitch.js"() {
    init_dynamicproto_js();
    init_Index();
    SecToMsMultiplier = 1e3;
    KillSwitch = /** @class */
    function() {
      function KillSwitch2() {
        var _killedTokenDictionary = {};
        function _normalizeTenants(values) {
          var result = [];
          if (values) {
            arrForEach(values, function(value) {
              result.push(strTrim(value));
            });
          }
          return result;
        }
        dynamicProto(KillSwitch2, this, function(_self) {
          _self.setKillSwitchTenants = function(killTokens, killDuration) {
            if (killTokens && killDuration) {
              try {
                var killedTokens = _normalizeTenants(killTokens.split(","));
                if (killDuration === "this-request-only") {
                  return killedTokens;
                }
                var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                for (var i = 0; i < killedTokens.length; ++i) {
                  _killedTokenDictionary[killedTokens[i]] = dateNow() + durationMs;
                }
              } catch (ex) {
                return [];
              }
            }
            return [];
          };
          _self.isTenantKilled = function(tenantToken) {
            var killDictionary = _killedTokenDictionary;
            var name2 = strTrim(tenantToken);
            if (killDictionary[name2] !== void 0 && killDictionary[name2] > dateNow()) {
              return true;
            }
            delete killDictionary[name2];
            return false;
          };
        });
      }
      KillSwitch2.__ieDyn = 1;
      return KillSwitch2;
    }();
    KillSwitch_default = KillSwitch;
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/RetryPolicy.js
function retryPolicyShouldRetryForStatus(httpStatusCode) {
  return !(httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode != 408 && httpStatusCode != 429 || httpStatusCode == 501 || httpStatusCode == 505);
}
function retryPolicyGetMillisToBackoffForRetry(retriesSoFar) {
  var waitDuration = 0;
  var minBackoff = BaseBackoff * RandomizationLowerThreshold;
  var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
  var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
  waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
  return Math.min(waitDuration, MaxBackoff);
}
var RandomizationLowerThreshold, RandomizationUpperThreshold, BaseBackoff, MaxBackoff;
var init_RetryPolicy = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/RetryPolicy.js"() {
    RandomizationLowerThreshold = 0.8;
    RandomizationUpperThreshold = 1.2;
    BaseBackoff = 3e3;
    MaxBackoff = 6e5;
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/Serializer.js
function _addJSONPropertyMetaData(json, propKeys, name2, propertyValue) {
  if (propertyValue && json) {
    var encodedTypeValue = getCommonSchemaMetaData(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
    if (encodedTypeValue > -1) {
      var metaData = json[metadata];
      if (!metaData) {
        metaData = json[metadata] = { f: {} };
      }
      var metaTarget = metaData[f];
      if (!metaTarget) {
        metaTarget = metaData[f] = {};
      }
      if (propKeys) {
        for (var lp = 0; lp < propKeys.length; lp++) {
          var key = propKeys[lp];
          if (!metaTarget[key]) {
            metaTarget[key] = { f: {} };
          }
          var newTarget = metaTarget[key][f];
          if (!newTarget) {
            newTarget = metaTarget[key][f] = {};
          }
          metaTarget = newTarget;
        }
      }
      metaTarget = metaTarget[name2] = {};
      if (isArray(propertyValue.value)) {
        metaTarget["a"] = {
          t: encodedTypeValue
        };
      } else {
        metaTarget["t"] = encodedTypeValue;
      }
    }
  }
}
var _MAX_STRING_JOINS, RequestSizeLimitBytes, BeaconRequestSizeLimitBytes, MaxRecordSize, MaxBeaconRecordSize, metadata, f, rCheckDot, Serializer;
var init_Serializer = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/Serializer.js"() {
    init_dynamicproto_js();
    init_Index();
    init_EventBatch();
    init_InternalConstants3();
    _MAX_STRING_JOINS = 20;
    RequestSizeLimitBytes = 3984588;
    BeaconRequestSizeLimitBytes = 65e3;
    MaxRecordSize = 2e6;
    MaxBeaconRecordSize = Math.min(MaxRecordSize, BeaconRequestSizeLimitBytes);
    metadata = "metadata";
    f = "f";
    rCheckDot = /\./;
    Serializer = /** @class */
    function() {
      function Serializer3(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey) {
        var strData = "data";
        var strBaseData2 = "baseData";
        var strExt = "ext";
        var _checkForCompoundkey = !!enableCompoundKey;
        var _processSubMetaData = true;
        var _theSanitizer = valueSanitizer;
        var _isReservedCache = {};
        dynamicProto(Serializer3, this, function(_self) {
          _self.createPayload = function(retryCnt, isTeardown, isSync, isReducedPayload, sendReason, sendType) {
            return {
              apiKeys: [],
              payloadBlob: STR_EMPTY3,
              overflow: null,
              sizeExceed: [],
              failedEvts: [],
              batches: [],
              numEvents: 0,
              retryCnt,
              isTeardown,
              isSync,
              isBeacon: isReducedPayload,
              sendType,
              sendReason
            };
          };
          _self.appendPayload = function(payload, theBatch, maxEventsPerBatch) {
            var canAddEvents = payload && theBatch && !payload.overflow;
            if (canAddEvents) {
              doPerf(perfManager, function() {
                return "Serializer:appendPayload";
              }, function() {
                var theEvents = theBatch.events();
                var payloadBlob = payload.payloadBlob;
                var payloadEvents = payload.numEvents;
                var eventsAdded = false;
                var sizeExceeded = [];
                var failedEvts = [];
                var isBeaconPayload = payload.isBeacon;
                var requestMaxSize = isBeaconPayload ? BeaconRequestSizeLimitBytes : RequestSizeLimitBytes;
                var recordMaxSize = isBeaconPayload ? MaxBeaconRecordSize : MaxRecordSize;
                var lp = 0;
                var joinCount = 0;
                while (lp < theEvents.length) {
                  var theEvent = theEvents[lp];
                  if (theEvent) {
                    if (payloadEvents >= maxEventsPerBatch) {
                      payload.overflow = theBatch.split(lp);
                      break;
                    }
                    var eventBlob = _self.getEventBlob(theEvent);
                    if (eventBlob && eventBlob.length <= recordMaxSize) {
                      var blobLength = eventBlob.length;
                      var currentSize = payloadBlob.length;
                      if (currentSize + blobLength > requestMaxSize) {
                        payload.overflow = theBatch.split(lp);
                        break;
                      }
                      if (payloadBlob) {
                        payloadBlob += "\n";
                      }
                      payloadBlob += eventBlob;
                      joinCount++;
                      if (joinCount > _MAX_STRING_JOINS) {
                        payloadBlob.substr(0, 1);
                        joinCount = 0;
                      }
                      eventsAdded = true;
                      payloadEvents++;
                    } else {
                      if (eventBlob) {
                        sizeExceeded.push(theEvent);
                      } else {
                        failedEvts.push(theEvent);
                      }
                      theEvents.splice(lp, 1);
                      lp--;
                    }
                  }
                  lp++;
                }
                if (sizeExceeded && sizeExceeded.length > 0) {
                  payload.sizeExceed.push(EventBatch.create(theBatch.iKey(), sizeExceeded));
                }
                if (failedEvts && failedEvts.length > 0) {
                  payload.failedEvts.push(EventBatch.create(theBatch.iKey(), failedEvts));
                }
                if (eventsAdded) {
                  payload.batches.push(theBatch);
                  payload.payloadBlob = payloadBlob;
                  payload.numEvents = payloadEvents;
                  var apiKey = theBatch.iKey();
                  if (arrIndexOf(payload.apiKeys, apiKey) === -1) {
                    payload.apiKeys.push(apiKey);
                  }
                }
              }, function() {
                return { payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch };
              });
            }
            return canAddEvents;
          };
          _self.getEventBlob = function(eventData) {
            try {
              return doPerf(perfManager, function() {
                return "Serializer.getEventBlob";
              }, function() {
                var serializedEvent = {};
                serializedEvent.name = eventData.name;
                serializedEvent.time = eventData.time;
                serializedEvent.ver = eventData.ver;
                serializedEvent.iKey = "o:" + getTenantId(eventData.iKey);
                var serializedExt = {};
                var eventExt = eventData[strExt];
                if (eventExt) {
                  serializedEvent[strExt] = serializedExt;
                  objForEachKey(eventExt, function(key, value) {
                    var data = serializedExt[key] = {};
                    _processPathKeys(value, data, "ext." + key, true, null, null, true);
                  });
                }
                var serializedData = serializedEvent[strData] = {};
                serializedData.baseType = eventData.baseType;
                var serializedBaseData = serializedData[strBaseData2] = {};
                _processPathKeys(eventData.baseData, serializedBaseData, strBaseData2, false, [strBaseData2], function(pathKeys, name2, value) {
                  _addJSONPropertyMetaData(serializedExt, pathKeys, name2, value);
                }, _processSubMetaData);
                _processPathKeys(eventData.data, serializedData, strData, false, [], function(pathKeys, name2, value) {
                  _addJSONPropertyMetaData(serializedExt, pathKeys, name2, value);
                }, _processSubMetaData);
                return JSON.stringify(serializedEvent);
              }, function() {
                return { item: eventData };
              });
            } catch (e) {
              return null;
            }
          };
          function _isReservedField(path2, name2) {
            var result = _isReservedCache[path2];
            if (result === void 0) {
              if (path2.length >= 7) {
                result = strStartsWith(path2, "ext.metadata") || strStartsWith(path2, "ext.web");
              }
              _isReservedCache[path2] = result;
            }
            return result;
          }
          function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback, processSubKeys) {
            objForEachKey(srcObj, function(key, srcValue) {
              var prop = null;
              if (srcValue || isValueAssigned(srcValue)) {
                var path2 = thePath;
                var name_1 = key;
                var theMetaPathKeys = metadataPathKeys;
                var destObj = target;
                if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                  var subKeys = key.split(".");
                  var keyLen = subKeys.length;
                  if (keyLen > 1) {
                    if (theMetaPathKeys) {
                      theMetaPathKeys = theMetaPathKeys.slice();
                    }
                    for (var lp = 0; lp < keyLen - 1; lp++) {
                      var subKey = subKeys[lp];
                      destObj = destObj[subKey] = destObj[subKey] || {};
                      path2 += "." + subKey;
                      if (theMetaPathKeys) {
                        theMetaPathKeys.push(subKey);
                      }
                    }
                    name_1 = subKeys[keyLen - 1];
                  }
                }
                var isReserved = checkReserved && _isReservedField(path2, name_1);
                if (!isReserved && _theSanitizer && _theSanitizer.handleField(path2, name_1)) {
                  prop = _theSanitizer.value(path2, name_1, srcValue, stringifyObjects);
                } else {
                  prop = sanitizeProperty(name_1, srcValue, stringifyObjects);
                }
                if (prop) {
                  var newValue = prop.value;
                  destObj[name_1] = newValue;
                  if (metadataCallback) {
                    metadataCallback(theMetaPathKeys, name_1, prop);
                  }
                  if (processSubKeys && typeof newValue === "object" && !isArray(newValue)) {
                    var newPath = theMetaPathKeys;
                    if (newPath) {
                      newPath = newPath.slice();
                      newPath.push(name_1);
                    }
                    _processPathKeys(srcValue, newValue, path2 + "." + name_1, checkReserved, newPath, metadataCallback, processSubKeys);
                  }
                }
              }
            });
          }
        });
      }
      Serializer3.__ieDyn = 1;
      return Serializer3;
    }();
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/HttpManager.js
function _addCollectorHeaderQsMapping(qsName, headerName, allowQs) {
  _collectorQsHeaders[qsName] = headerName;
  if (allowQs !== false) {
    _collectorHeaderToQs[headerName] = qsName;
  }
}
function _getResponseText(xhr) {
  try {
    return xhr.responseText;
  } catch (e) {
  }
  return STR_EMPTY3;
}
function _hasHeader(headers, header) {
  var hasHeader = false;
  if (headers && header) {
    var keys = objKeys(headers);
    if (keys && keys.length > 0) {
      var lowerHeader = header.toLowerCase();
      for (var lp = 0; lp < keys.length; lp++) {
        var value = keys[lp];
        if (value && hasOwnProperty(header, value) && value.toLowerCase() === lowerHeader) {
          hasHeader = true;
          break;
        }
      }
    }
  }
  return hasHeader;
}
function _addRequestDetails(details, name2, value, useHeaders) {
  if (name2 && value && value.length > 0) {
    if (useHeaders && _collectorQsHeaders[name2]) {
      details.hdrs[_collectorQsHeaders[name2]] = value;
      details.useHdrs = true;
    } else {
      details.url += "&" + name2 + "=" + value;
    }
  }
}
function _prependTransports(theTransports, newTransports) {
  if (newTransports) {
    if (isNumber(newTransports)) {
      theTransports = [newTransports].concat(theTransports);
    } else if (isArray(newTransports)) {
      theTransports = newTransports.concat(theTransports);
    }
  }
  return theTransports;
}
var _a4, strSendAttempt, _noResponseQs, _eventActionMap, _collectorQsHeaders, _collectorHeaderToQs, HttpManager;
var init_HttpManager = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/HttpManager.js"() {
    init_dynamicproto_js();
    init_ClockSkewManager();
    init_KillSwitch();
    init_Index();
    init_InternalConstants3();
    init_RetryPolicy();
    init_Serializer();
    strSendAttempt = "sendAttempt";
    _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
    _eventActionMap = (_a4 = {}, _a4[
      1
      /* EventBatchNotificationReason.Paused */
    ] = STR_REQUEUE, _a4[
      100
      /* EventBatchNotificationReason.RequeueEvents */
    ] = STR_REQUEUE, _a4[
      200
      /* EventBatchNotificationReason.Complete */
    ] = "sent", _a4[
      8004
      /* EventBatchNotificationReason.KillSwitch */
    ] = STR_DROPPED, _a4[
      8003
      /* EventBatchNotificationReason.SizeLimitExceeded */
    ] = STR_DROPPED, _a4);
    _collectorQsHeaders = {};
    _collectorHeaderToQs = {};
    _addCollectorHeaderQsMapping(STR_MSA_DEVICE_TICKET, STR_MSA_DEVICE_TICKET, false);
    _addCollectorHeaderQsMapping(STR_CLIENT_VERSION, STR_CLIENT_VERSION);
    _addCollectorHeaderQsMapping(STR_CLIENT_ID, "Client-Id");
    _addCollectorHeaderQsMapping(STR_API_KEY, STR_API_KEY);
    _addCollectorHeaderQsMapping(STR_TIME_DELTA_TO_APPLY, STR_TIME_DELTA_TO_APPLY);
    _addCollectorHeaderQsMapping(STR_UPLOAD_TIME, STR_UPLOAD_TIME);
    _addCollectorHeaderQsMapping(STR_AUTH_XTOKEN, STR_AUTH_XTOKEN);
    HttpManager = /** @class */
    function() {
      function HttpManager2(maxEventsPerBatch, maxConnections, maxRequestRetriesBeforeBackoff, actions, timeoutOverride) {
        this._responseHandlers = [];
        var _urlString = "?cors=true&" + STR_CONTENT_TYPE_HEADER.toLowerCase() + "=" + DEFAULT_CONTENT_TYPE;
        var _killSwitch = new KillSwitch_default();
        var _paused = false;
        var _clockSkewManager = new ClockSkewManager_default();
        var _useBeacons = false;
        var _outstandingRequests = 0;
        var _postManager;
        var _logger;
        var _sendInterfaces;
        var _core;
        var _customHttpInterface = true;
        var _queryStringParameters = [];
        var _headers = {};
        var _batchQueue = [];
        var _serializer = null;
        var _enableEventTimings = false;
        var _cookieMgr;
        var _isUnloading = false;
        var _useHeaders = false;
        var _xhrTimeout;
        var _disableXhrSync;
        var _disableFetchKeepAlive;
        var _canHaveReducedPayload;
        var _addNoResponse;
        dynamicProto(HttpManager2, this, function(_self) {
          var _sendCredentials = true;
          _self.initialize = function(endpointUrl, core, postChannel, httpInterface, channelConfig) {
            var _a7;
            if (!channelConfig) {
              channelConfig = {};
            }
            _urlString = endpointUrl + _urlString;
            _useHeaders = !isUndefined(channelConfig.avoidOptions) ? !channelConfig.avoidOptions : true;
            _core = core;
            _cookieMgr = core.getCookieMgr();
            _enableEventTimings = !_core.config.disableEventTimings;
            var enableCompoundKey = !!_core.config.enableCompoundKey;
            _postManager = postChannel;
            _logger = _postManager.diagLog();
            var valueSanitizer = channelConfig.valueSanitizer;
            var stringifyObjects = channelConfig.stringifyObjects;
            if (!isUndefined(channelConfig.enableCompoundKey)) {
              enableCompoundKey = !!channelConfig.enableCompoundKey;
            }
            _xhrTimeout = channelConfig.xhrTimeout;
            _disableXhrSync = !!channelConfig.disableXhrSync;
            _disableFetchKeepAlive = !!channelConfig.disableFetchKeepAlive;
            _addNoResponse = channelConfig.addNoResponse !== false;
            _useBeacons = !isReactNative();
            _serializer = new Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey);
            if (!isNullOrUndefined(channelConfig.useSendBeacon)) {
              _useBeacons = !!channelConfig.useSendBeacon;
            }
            var syncHttpInterface = httpInterface;
            var beaconHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
            var fetchSyncHttpInterface = channelConfig.alwaysUseXhrOverride ? httpInterface : null;
            var beaconUnloadTransports = [
              3,
              2
              /* TransportType.Fetch */
            ];
            if (!httpInterface) {
              _customHttpInterface = false;
              var location_1 = getLocation();
              if (location_1 && location_1.protocol && location_1.protocol.toLowerCase() === "file:") {
                _sendCredentials = false;
              }
              var theTransports = [];
              if (isReactNative()) {
                theTransports = [
                  2,
                  1
                  /* TransportType.Xhr */
                ];
                beaconUnloadTransports = [
                  2,
                  1,
                  3
                  /* TransportType.Beacon */
                ];
              } else {
                theTransports = [
                  1,
                  2,
                  3
                  /* TransportType.Beacon */
                ];
              }
              theTransports = _prependTransports(theTransports, channelConfig.transports);
              httpInterface = _getSenderInterface(theTransports, false);
              if (!httpInterface) {
                _warnToConsole(_logger, "No available transport to send events");
              }
              syncHttpInterface = _getSenderInterface(theTransports, true);
            }
            if (!beaconHttpInterface) {
              beaconUnloadTransports = _prependTransports(beaconUnloadTransports, channelConfig.unloadTransports);
              beaconHttpInterface = _getSenderInterface(beaconUnloadTransports, true);
            }
            _canHaveReducedPayload = !_customHttpInterface && (_useBeacons && isBeaconsSupported() || !_disableFetchKeepAlive && isFetchSupported(true));
            _sendInterfaces = (_a7 = {}, _a7[
              0
              /* EventSendType.Batched */
            ] = httpInterface, _a7[
              1
              /* EventSendType.Synchronous */
            ] = syncHttpInterface || _getSenderInterface([
              1,
              2,
              3
              /* TransportType.Beacon */
            ], true), _a7[
              2
              /* EventSendType.SendBeacon */
            ] = beaconHttpInterface || syncHttpInterface || _getSenderInterface([
              1
              /* TransportType.Xhr */
            ], true), _a7[
              3
              /* EventSendType.SyncFetch */
            ] = fetchSyncHttpInterface || _getSenderInterface([
              2,
              3
              /* TransportType.Beacon */
            ], true) || syncHttpInterface || _getSenderInterface([
              1
              /* TransportType.Xhr */
            ], true), _a7);
          };
          function _getSenderInterface(transports, syncSupport) {
            var transportType = 0;
            var sendPostFunc = null;
            var lp = 0;
            while (sendPostFunc == null && lp < transports.length) {
              transportType = transports[lp];
              if (transportType === 1) {
                if (useXDomainRequest()) {
                  sendPostFunc = _xdrSendPost;
                } else if (isXhrSupported()) {
                  sendPostFunc = _xhrSendPost;
                }
              } else if (transportType === 2 && isFetchSupported(syncSupport) && (!syncSupport || syncSupport && !_disableFetchKeepAlive)) {
                sendPostFunc = _fetchSendPost;
              } else if (_useBeacons && transportType === 3 && isBeaconsSupported()) {
                sendPostFunc = _beaconSendPost;
              }
              lp++;
            }
            if (sendPostFunc) {
              return {
                _transport: transportType,
                _isSync: syncSupport,
                sendPOST: sendPostFunc
              };
            }
            return null;
          }
          _self["_getDbgPlgTargets"] = function() {
            return [_sendInterfaces[
              0
              /* EventSendType.Batched */
            ], _killSwitch, _serializer, _sendInterfaces];
          };
          function _xdrSendPost(payload, oncomplete, sync) {
            var xdr = new XDomainRequest();
            xdr.open(STR_POST_METHOD, payload.urlString);
            if (payload.timeout) {
              xdr.timeout = payload.timeout;
            }
            xdr.onload = function() {
              var response = _getResponseText(xdr);
              _doOnComplete(oncomplete, 200, {}, response);
              _handleCollectorResponse(response);
            };
            xdr.onerror = function() {
              _doOnComplete(oncomplete, 400, {});
            };
            xdr.ontimeout = function() {
              _doOnComplete(oncomplete, 500, {});
            };
            xdr.onprogress = function() {
            };
            if (sync) {
              xdr.send(payload.data);
            } else {
              timeoutOverride.set(function() {
                xdr.send(payload.data);
              }, 0);
            }
          }
          function _fetchSendPost(payload, oncomplete, sync) {
            var _a7;
            var theUrl = payload.urlString;
            var ignoreResponse = false;
            var responseHandled = false;
            var requestInit = (_a7 = {
              body: payload.data,
              method: STR_POST_METHOD
            }, _a7[STR_DISABLED_PROPERTY_NAME] = true, _a7);
            if (sync) {
              requestInit.keepalive = true;
              if (payload._sendReason === 2) {
                ignoreResponse = true;
                if (_addNoResponse) {
                  theUrl += _noResponseQs;
                }
              }
            }
            if (_sendCredentials) {
              requestInit.credentials = "include";
            }
            if (payload.headers && objKeys(payload.headers).length > 0) {
              requestInit.headers = payload.headers;
            }
            fetch(theUrl, requestInit).then(function(response) {
              var headerMap = {};
              var responseText = STR_EMPTY3;
              var headers = response.headers;
              if (headers) {
                headers["forEach"](function(value, name2) {
                  headerMap[name2] = value;
                });
              }
              if (response.body) {
                response.text().then(function(text) {
                  responseText = text;
                });
              }
              if (!responseHandled) {
                responseHandled = true;
                _doOnComplete(oncomplete, response.status, headerMap, responseText);
                _handleCollectorResponse(responseText);
              }
            })["catch"](function(error) {
              if (!responseHandled) {
                responseHandled = true;
                _doOnComplete(oncomplete, 0, {});
              }
            });
            if (ignoreResponse && !responseHandled) {
              responseHandled = true;
              _doOnComplete(oncomplete, 200, {});
            }
            if (!responseHandled && payload.timeout > 0) {
              timeoutOverride.set(function() {
                if (!responseHandled) {
                  responseHandled = true;
                  _doOnComplete(oncomplete, 500, {});
                }
              }, payload.timeout);
            }
          }
          function _xhrSendPost(payload, oncomplete, sync) {
            var theUrl = payload.urlString;
            function _appendHeader(theHeaders, xhr, name2) {
              if (!theHeaders[name2] && xhr && xhr.getResponseHeader) {
                var value = xhr.getResponseHeader(name2);
                if (value) {
                  theHeaders[name2] = strTrim(value);
                }
              }
              return theHeaders;
            }
            function _getAllResponseHeaders(xhr) {
              var theHeaders = {};
              if (!xhr.getAllResponseHeaders) {
                theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER);
                theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
              } else {
                theHeaders = _convertAllHeadersToMap(xhr.getAllResponseHeaders());
              }
              return theHeaders;
            }
            function xhrComplete(xhr, responseTxt) {
              _doOnComplete(oncomplete, xhr.status, _getAllResponseHeaders(xhr), responseTxt);
            }
            if (sync && payload.disableXhrSync) {
              sync = false;
            }
            var xhrRequest = openXhr(STR_POST_METHOD, theUrl, _sendCredentials, true, sync, payload.timeout);
            objForEachKey(payload.headers, function(name2, value) {
              xhrRequest.setRequestHeader(name2, value);
            });
            xhrRequest.onload = function() {
              var response = _getResponseText(xhrRequest);
              xhrComplete(xhrRequest, response);
              _handleCollectorResponse(response);
            };
            xhrRequest.onerror = function() {
              xhrComplete(xhrRequest);
            };
            xhrRequest.ontimeout = function() {
              xhrComplete(xhrRequest);
            };
            xhrRequest.send(payload.data);
          }
          function _doOnComplete(oncomplete, status, headers, response) {
            try {
              oncomplete(status, headers, response);
            } catch (e) {
              _throwInternal(_logger, 2, 518, dumpObj(e));
            }
          }
          function _beaconSendPost(payload, oncomplete, sync) {
            var internalPayloadData = payload;
            var status = 200;
            var thePayload = internalPayloadData._thePayload;
            var theUrl = payload.urlString + (_addNoResponse ? _noResponseQs : STR_EMPTY3);
            try {
              var nav_1 = getNavigator();
              if (!nav_1.sendBeacon(theUrl, payload.data)) {
                if (thePayload) {
                  var droppedBatches_1 = [];
                  arrForEach(thePayload.batches, function(theBatch) {
                    if (droppedBatches_1 && theBatch && theBatch.count() > 0) {
                      var theEvents = theBatch.events();
                      for (var lp = 0; lp < theEvents.length; lp++) {
                        if (!nav_1.sendBeacon(theUrl, _serializer.getEventBlob(theEvents[lp]))) {
                          droppedBatches_1.push(theBatch.split(lp));
                          break;
                        }
                      }
                    } else {
                      droppedBatches_1.push(theBatch.split(0));
                    }
                  });
                  _sendBatchesNotification(droppedBatches_1, 8003, thePayload.sendType, true);
                } else {
                  status = 0;
                }
              }
            } catch (ex) {
              _warnToConsole(_logger, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(ex));
              status = 0;
            } finally {
              _doOnComplete(oncomplete, status, {}, STR_EMPTY3);
            }
          }
          function _isBeaconPayload(sendType) {
            return sendType === 2 || sendType === 3;
          }
          function _adjustSendType(sendType) {
            if (_isUnloading && _isBeaconPayload(sendType)) {
              sendType = 2;
            }
            return sendType;
          }
          _self.addQueryStringParameter = function(name2, value) {
            for (var i = 0; i < _queryStringParameters.length; i++) {
              if (_queryStringParameters[i].name === name2) {
                _queryStringParameters[i].value = value;
                return;
              }
            }
            _queryStringParameters.push({ name: name2, value });
          };
          _self.addHeader = function(name2, value) {
            _headers[name2] = value;
          };
          _self.canSendRequest = function() {
            return _hasIdleConnection() && _clockSkewManager.allowRequestSending();
          };
          _self.sendQueuedRequests = function(sendType, sendReason) {
            if (isUndefined(sendType)) {
              sendType = 0;
            }
            if (_isUnloading) {
              sendType = _adjustSendType(sendType);
              sendReason = 2;
            }
            if (_canSendPayload(_batchQueue, sendType, 0)) {
              _sendBatches(
                _clearQueue(),
                0,
                false,
                sendType,
                sendReason || 0
                /* SendRequestReason.Undefined */
              );
            }
          };
          _self.isCompletelyIdle = function() {
            return !_paused && _outstandingRequests === 0 && _batchQueue.length === 0;
          };
          _self.setUnloading = function(value) {
            _isUnloading = value;
          };
          _self.addBatch = function(theBatch) {
            if (theBatch && theBatch.count() > 0) {
              if (_killSwitch.isTenantKilled(theBatch.iKey())) {
                return false;
              }
              _batchQueue.push(theBatch);
            }
            return true;
          };
          _self.teardown = function() {
            if (_batchQueue.length > 0) {
              _sendBatches(
                _clearQueue(),
                0,
                true,
                2,
                2
                /* SendRequestReason.Unload */
              );
            }
          };
          _self.pause = function() {
            _paused = true;
          };
          _self.resume = function() {
            _paused = false;
            _self.sendQueuedRequests(
              0,
              4
              /* SendRequestReason.Resumed */
            );
          };
          _self.sendSynchronousBatch = function(batch, sendType, sendReason) {
            if (batch && batch.count() > 0) {
              if (isNullOrUndefined(sendType)) {
                sendType = 1;
              }
              if (_isUnloading) {
                sendType = _adjustSendType(sendType);
                sendReason = 2;
              }
              _sendBatches(
                [batch],
                0,
                false,
                sendType,
                sendReason || 0
                /* SendRequestReason.Undefined */
              );
            }
          };
          function _hasIdleConnection() {
            return !_paused && _outstandingRequests < maxConnections;
          }
          function _clearQueue() {
            var theQueue = _batchQueue;
            _batchQueue = [];
            return theQueue;
          }
          function _canSendPayload(theBatches, sendType, retryCnt) {
            var result = false;
            if (theBatches && theBatches.length > 0 && !_paused && _sendInterfaces[sendType] && _serializer) {
              result = sendType !== 0 || _hasIdleConnection() && (retryCnt > 0 || _clockSkewManager.allowRequestSending());
            }
            return result;
          }
          function _createDebugBatches(theBatches) {
            var values = {};
            if (theBatches) {
              arrForEach(theBatches, function(theBatch, idx) {
                values[idx] = {
                  iKey: theBatch.iKey(),
                  evts: theBatch.events()
                };
              });
            }
            return values;
          }
          function _sendBatches(theBatches, retryCount, isTeardown, sendType, sendReason) {
            if (!theBatches || theBatches.length === 0) {
              return;
            }
            if (_paused) {
              _sendBatchesNotification(theBatches, 1, sendType);
              return;
            }
            sendType = _adjustSendType(sendType);
            try {
              var orgBatches_1 = theBatches;
              var isSynchronous_1 = sendType !== 0;
              doPerf(_core, function() {
                return "HttpManager:_sendBatches";
              }, function(perfEvt) {
                if (perfEvt) {
                  theBatches = theBatches.slice(0);
                }
                var droppedBatches = [];
                var thePayload = null;
                var serializationStart = getTime();
                var sendInterface = _sendInterfaces[sendType] || (isSynchronous_1 ? _sendInterfaces[
                  1
                  /* EventSendType.Synchronous */
                ] : _sendInterfaces[
                  0
                  /* EventSendType.Batched */
                ]);
                var sendTransport = sendInterface && sendInterface._transport;
                var isReducedPayload = _canHaveReducedPayload && (_isUnloading || _isBeaconPayload(sendType) || (sendTransport === 3 || sendInterface._isSync && sendTransport === 2));
                while (_canSendPayload(theBatches, sendType, retryCount)) {
                  var theBatch = theBatches.shift();
                  if (theBatch && theBatch.count() > 0) {
                    if (!_killSwitch.isTenantKilled(theBatch.iKey())) {
                      thePayload = thePayload || _serializer.createPayload(retryCount, isTeardown, isSynchronous_1, isReducedPayload, sendReason, sendType);
                      if (!_serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch)) {
                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                        serializationStart = getTime();
                        theBatches = [theBatch].concat(theBatches);
                        thePayload = null;
                      } else if (thePayload.overflow !== null) {
                        theBatches = [thePayload.overflow].concat(theBatches);
                        thePayload.overflow = null;
                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                        serializationStart = getTime();
                        thePayload = null;
                      }
                    } else {
                      droppedBatches.push(theBatch);
                    }
                  }
                }
                if (thePayload) {
                  _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                }
                if (theBatches.length > 0) {
                  _batchQueue = theBatches.concat(_batchQueue);
                }
                _sendBatchesNotification(droppedBatches, 8004, sendType);
              }, function() {
                return { batches: _createDebugBatches(orgBatches_1), retryCount, isTeardown, isSynchronous: isSynchronous_1, sendReason, useSendBeacon: _isBeaconPayload(sendType), sendType };
              }, !isSynchronous_1);
            } catch (ex) {
              _throwInternal(_logger, 2, 48, "Unexpected Exception sending batch: " + dumpObj(ex));
            }
          }
          function _buildRequestDetails(thePayload, useHeaders) {
            var requestDetails = {
              url: _urlString,
              hdrs: {},
              useHdrs: false
              // Assume no headers
            };
            if (!useHeaders) {
              objForEachKey(_headers, function(name2, value) {
                if (_collectorHeaderToQs[name2]) {
                  _addRequestDetails(requestDetails, _collectorHeaderToQs[name2], value, false);
                } else {
                  requestDetails.hdrs[name2] = value;
                  requestDetails.useHdrs = true;
                }
              });
            } else {
              requestDetails.hdrs = extend(requestDetails.hdrs, _headers);
              requestDetails.useHdrs = objKeys(requestDetails.hdrs).length > 0;
            }
            _addRequestDetails(requestDetails, STR_CLIENT_ID, "NO_AUTH", useHeaders);
            _addRequestDetails(requestDetails, STR_CLIENT_VERSION, FullVersionString, useHeaders);
            var apiQsKeys = STR_EMPTY3;
            arrForEach(thePayload.apiKeys, function(apiKey) {
              if (apiQsKeys.length > 0) {
                apiQsKeys += ",";
              }
              apiQsKeys += apiKey;
            });
            _addRequestDetails(requestDetails, STR_API_KEY, apiQsKeys, useHeaders);
            _addRequestDetails(requestDetails, STR_UPLOAD_TIME, dateNow().toString(), useHeaders);
            var msfpc = _getMsfpc2(thePayload);
            if (isValueAssigned(msfpc)) {
              requestDetails.url += "&ext.intweb.msfpc=" + msfpc;
            }
            if (_clockSkewManager.shouldAddClockSkewHeaders()) {
              _addRequestDetails(requestDetails, STR_TIME_DELTA_TO_APPLY, _clockSkewManager.getClockSkewHeaderValue(), useHeaders);
            }
            if (_core.getWParam) {
              var wParam = _core.getWParam();
              if (wParam >= 0) {
                requestDetails.url += "&w=" + wParam;
              }
            }
            for (var i = 0; i < _queryStringParameters.length; i++) {
              requestDetails.url += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
            }
            return requestDetails;
          }
          function _setTimingValue(timings, name2, value) {
            timings[name2] = timings[name2] || {};
            timings[name2][_postManager.identifier] = value;
          }
          function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
            if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob.length > 0) {
              var useSendHook_1 = !!_self.sendHook;
              var sendInterface_1 = _sendInterfaces[thePayload.sendType];
              if (!_isBeaconPayload(thePayload.sendType) && thePayload.isBeacon && thePayload.sendReason === 2) {
                sendInterface_1 = _sendInterfaces[
                  2
                  /* EventSendType.SendBeacon */
                ] || _sendInterfaces[
                  3
                  /* EventSendType.SyncFetch */
                ] || sendInterface_1;
              }
              var useHeaders_1 = _useHeaders;
              if (thePayload.isBeacon || sendInterface_1._transport === 3) {
                useHeaders_1 = false;
              }
              var requestDetails_1 = _buildRequestDetails(thePayload, useHeaders_1);
              useHeaders_1 = useHeaders_1 || requestDetails_1.useHdrs;
              var sendEventStart_1 = getTime();
              doPerf(_core, function() {
                return "HttpManager:_doPayloadSend";
              }, function() {
                for (var batchLp = 0; batchLp < thePayload.batches.length; batchLp++) {
                  var theBatch = thePayload.batches[batchLp];
                  var theEvents = theBatch.events();
                  for (var evtLp = 0; evtLp < theEvents.length; evtLp++) {
                    var telemetryItem = theEvents[evtLp];
                    if (_enableEventTimings) {
                      var timings = telemetryItem.timings = telemetryItem.timings || {};
                      _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                      _setTimingValue(timings, "serializationStart", serializationStart);
                      _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                    }
                    telemetryItem[strSendAttempt] > 0 ? telemetryItem[strSendAttempt]++ : telemetryItem[strSendAttempt] = 1;
                  }
                }
                _sendBatchesNotification(thePayload.batches, 1e3 + (sendReason || 0), thePayload.sendType, true);
                var orgPayloadData = {
                  data: thePayload.payloadBlob,
                  urlString: requestDetails_1.url,
                  headers: requestDetails_1.hdrs,
                  _thePayload: thePayload,
                  _sendReason: sendReason,
                  timeout: _xhrTimeout,
                  disableXhrSync: _disableXhrSync,
                  disableFetchKeepAlive: _disableFetchKeepAlive
                };
                if (useHeaders_1) {
                  if (!_hasHeader(orgPayloadData.headers, STR_CACHE_CONTROL)) {
                    orgPayloadData.headers[STR_CACHE_CONTROL] = DEFAULT_CACHE_CONTROL;
                  }
                  if (!_hasHeader(orgPayloadData.headers, STR_CONTENT_TYPE_HEADER)) {
                    orgPayloadData.headers[STR_CONTENT_TYPE_HEADER] = DEFAULT_CONTENT_TYPE;
                  }
                }
                var sender = null;
                if (sendInterface_1) {
                  sender = function(payload) {
                    _clockSkewManager.firstRequestSent();
                    var onComplete = function(status, headers) {
                      _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                    };
                    var isSync = thePayload.isTeardown || thePayload.isSync;
                    try {
                      sendInterface_1.sendPOST(payload, onComplete, isSync);
                      if (_self.sendListener) {
                        _self.sendListener(orgPayloadData, payload, isSync, thePayload.isBeacon);
                      }
                    } catch (ex) {
                      _warnToConsole(_logger, "Unexpected exception sending payload. Ex:" + dumpObj(ex));
                      _doOnComplete(onComplete, 0, {});
                    }
                  };
                }
                doPerf(_core, function() {
                  return "HttpManager:_doPayloadSend.sender";
                }, function() {
                  if (sender) {
                    if (thePayload.sendType === 0) {
                      _outstandingRequests++;
                    }
                    if (useSendHook_1 && !thePayload.isBeacon && sendInterface_1._transport !== 3) {
                      var hookData_1 = {
                        data: orgPayloadData.data,
                        urlString: orgPayloadData.urlString,
                        headers: extend({}, orgPayloadData.headers),
                        timeout: orgPayloadData.timeout,
                        disableXhrSync: orgPayloadData.disableXhrSync,
                        disableFetchKeepAlive: orgPayloadData.disableFetchKeepAlive
                      };
                      var senderCalled_1 = false;
                      doPerf(_core, function() {
                        return "HttpManager:_doPayloadSend.sendHook";
                      }, function() {
                        try {
                          _self.sendHook(hookData_1, function(payload) {
                            senderCalled_1 = true;
                            if (!_customHttpInterface && !payload._thePayload) {
                              payload._thePayload = payload._thePayload || orgPayloadData._thePayload;
                              payload._sendReason = payload._sendReason || orgPayloadData._sendReason;
                            }
                            sender(payload);
                          }, thePayload.isSync || thePayload.isTeardown);
                        } catch (ex) {
                          if (!senderCalled_1) {
                            sender(orgPayloadData);
                          }
                        }
                      });
                    } else {
                      sender(orgPayloadData);
                    }
                  }
                });
              }, function() {
                return { thePayload, serializationStart, serializationCompleted, sendReason };
              }, thePayload.isSync);
            }
            if (thePayload.sizeExceed && thePayload.sizeExceed.length > 0) {
              _sendBatchesNotification(thePayload.sizeExceed, 8003, thePayload.sendType);
            }
            if (thePayload.failedEvts && thePayload.failedEvts.length > 0) {
              _sendBatchesNotification(thePayload.failedEvts, 8002, thePayload.sendType);
            }
          }
          function _addEventCompletedTimings(theEvents, sendEventCompleted) {
            if (_enableEventTimings) {
              arrForEach(theEvents, function(theEvent) {
                var timings = theEvent.timings = theEvent.timings || {};
                _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
              });
            }
          }
          function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
            var reason = 9e3;
            var droppedBatches = null;
            var isRetrying = false;
            var backOffTrans = false;
            try {
              var shouldRetry = true;
              if (typeof status !== strShimUndefined) {
                if (headers) {
                  _clockSkewManager.setClockSkew(headers[STR_TIME_DELTA_HEADER]);
                  var killDuration = headers[STR_KILL_DURATION_HEADER] || headers["kill-duration-seconds"];
                  arrForEach(_killSwitch.setKillSwitchTenants(headers[STR_KILL_TOKENS_HEADER], killDuration), function(killToken) {
                    arrForEach(thePayload.batches, function(theBatch) {
                      if (theBatch.iKey() === killToken) {
                        droppedBatches = droppedBatches || [];
                        var removedEvents = theBatch.split(0);
                        thePayload.numEvents -= removedEvents.count();
                        droppedBatches.push(removedEvents);
                      }
                    });
                  });
                }
                if (status == 200 || status == 204) {
                  reason = 200;
                  return;
                }
                if (!retryPolicyShouldRetryForStatus(status) || thePayload.numEvents <= 0) {
                  shouldRetry = false;
                }
                reason = 9e3 + status % 1e3;
              }
              if (shouldRetry) {
                reason = 100;
                var retryCount_1 = thePayload.retryCnt;
                if (thePayload.sendType === 0) {
                  if (retryCount_1 < maxRequestRetriesBeforeBackoff) {
                    isRetrying = true;
                    _doAction(function() {
                      if (thePayload.sendType === 0) {
                        _outstandingRequests--;
                      }
                      _sendBatches(
                        thePayload.batches,
                        retryCount_1 + 1,
                        thePayload.isTeardown,
                        _isUnloading ? 2 : thePayload.sendType,
                        5
                        /* SendRequestReason.Retry */
                      );
                    }, _isUnloading, retryPolicyGetMillisToBackoffForRetry(retryCount_1));
                  } else {
                    backOffTrans = true;
                    if (_isUnloading) {
                      reason = 8001;
                    }
                  }
                }
              }
            } finally {
              if (!isRetrying) {
                _clockSkewManager.setClockSkew();
                _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
              }
              _sendBatchesNotification(droppedBatches, 8004, thePayload.sendType);
            }
          }
          function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
            try {
              if (backOffTrans) {
                _postManager._backOffTransmission();
              }
              if (batchReason === 200) {
                if (!backOffTrans && !thePayload.isSync) {
                  _postManager._clearBackOff();
                }
                _addCompleteTimings(thePayload.batches);
              }
              _sendBatchesNotification(thePayload.batches, batchReason, thePayload.sendType, true);
            } finally {
              if (thePayload.sendType === 0) {
                _outstandingRequests--;
                if (sendReason !== 5) {
                  _self.sendQueuedRequests(thePayload.sendType, sendReason);
                }
              }
            }
          }
          function _addCompleteTimings(theBatches) {
            if (_enableEventTimings) {
              var sendEventCompleted_1 = getTime();
              arrForEach(theBatches, function(theBatch) {
                if (theBatch && theBatch.count() > 0) {
                  _addEventCompletedTimings(theBatch.events(), sendEventCompleted_1);
                }
              });
            }
          }
          function _doAction(cb, isSync, interval) {
            if (isSync) {
              cb();
            } else {
              timeoutOverride.set(cb, interval);
            }
          }
          function _convertAllHeadersToMap(headersString) {
            var headers = {};
            if (isString(headersString)) {
              var headersArray = strTrim(headersString).split(/[\r\n]+/);
              arrForEach(headersArray, function(headerEntry) {
                if (headerEntry) {
                  var idx = headerEntry.indexOf(": ");
                  if (idx !== -1) {
                    var header = strTrim(headerEntry.substring(0, idx)).toLowerCase();
                    var value = strTrim(headerEntry.substring(idx + 1));
                    headers[header] = value;
                  } else {
                    headers[strTrim(headerEntry)] = 1;
                  }
                }
              });
            }
            return headers;
          }
          function _getMsfpc2(thePayload) {
            for (var lp = 0; lp < thePayload.batches.length; lp++) {
              var msfpc = thePayload.batches[lp].Msfpc();
              if (msfpc) {
                return encodeURIComponent(msfpc);
              }
            }
            return STR_EMPTY3;
          }
          function _handleCollectorResponse(responseText) {
            var responseHandlers = _self._responseHandlers;
            try {
              for (var i = 0; i < responseHandlers.length; i++) {
                try {
                  responseHandlers[i](responseText);
                } catch (e) {
                  _throwInternal(_logger, 1, 519, "Response handler failed: " + e);
                }
              }
              if (responseText) {
                var response = JSON.parse(responseText);
                if (isValueAssigned(response.webResult) && isValueAssigned(response.webResult[STR_MSFPC])) {
                  _cookieMgr.set("MSFPC", response.webResult[STR_MSFPC], 365 * 86400);
                }
              }
            } catch (ex) {
            }
          }
          function _sendBatchesNotification(theBatches, batchReason, sendType, sendSync) {
            if (theBatches && theBatches.length > 0 && actions) {
              var theAction_1 = actions[_getNotificationAction(batchReason)];
              if (theAction_1) {
                var isSyncRequest_1 = sendType !== 0;
                doPerf(_core, function() {
                  return "HttpManager:_sendBatchesNotification";
                }, function() {
                  _doAction(function() {
                    try {
                      theAction_1.call(actions, theBatches, batchReason, isSyncRequest_1, sendType);
                    } catch (e) {
                      _throwInternal(_logger, 1, 74, "send request notification failed: " + e);
                    }
                  }, sendSync || isSyncRequest_1, 0);
                }, function() {
                  return { batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest_1, sendSync, sendType };
                }, !isSyncRequest_1);
              }
            }
          }
          function _getNotificationAction(reason) {
            var action = _eventActionMap[reason];
            if (!isValueAssigned(action)) {
              action = STR_OTHER;
              if (reason >= 9e3 && reason <= 9999) {
                action = STR_RESPONSE_FAIL;
              } else if (reason >= 8e3 && reason <= 8999) {
                action = STR_DROPPED;
              } else if (reason >= 1e3 && reason <= 1999) {
                action = STR_SENDING;
              }
            }
            return action;
          }
        });
      }
      HttpManager2.__ieDyn = 1;
      return HttpManager2;
    }();
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/TimeoutOverrideWrapper.js
function defaultSetTimeout(callback, ms) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  return setTimeout(callback, ms, args);
}
function defaultClearTimeout(timeoutId) {
  clearTimeout(timeoutId);
}
function createTimeoutWrapper(argSetTimeout, argClearTimeout) {
  return {
    set: argSetTimeout || defaultSetTimeout,
    clear: argClearTimeout || defaultClearTimeout
  };
}
var init_TimeoutOverrideWrapper = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/TimeoutOverrideWrapper.js"() {
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/PostChannel.js
var FlushCheckTimer, MaxNumberEventPerBatch, EventsDroppedAtOneTime, MaxSendAttempts, MaxSyncUnloadSendAttempts, MaxBackoffCount, MaxConnections, MaxRequestRetriesBeforeBackoff, strEventsDiscarded, strOverrideInstrumentationKey, strMaxEventRetryAttempts, strMaxUnloadEventRetryAttempts, strAddUnloadCb, PostChannel, PostChannel_default;
var init_PostChannel = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/PostChannel.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_Index();
    init_DataModels();
    init_EventBatch();
    init_HttpManager();
    init_InternalConstants3();
    init_RetryPolicy();
    init_TimeoutOverrideWrapper();
    FlushCheckTimer = 0.25;
    MaxNumberEventPerBatch = 500;
    EventsDroppedAtOneTime = 20;
    MaxSendAttempts = 6;
    MaxSyncUnloadSendAttempts = 2;
    MaxBackoffCount = 4;
    MaxConnections = 2;
    MaxRequestRetriesBeforeBackoff = 1;
    strEventsDiscarded = "eventsDiscarded";
    strOverrideInstrumentationKey = "overrideInstrumentationKey";
    strMaxEventRetryAttempts = "maxEventRetryAttempts";
    strMaxUnloadEventRetryAttempts = "maxUnloadEventRetryAttempts";
    strAddUnloadCb = "addUnloadCb";
    PostChannel = /** @class */
    function(_super) {
      __extendsFn(PostChannel2, _super);
      function PostChannel2() {
        var _this = _super.call(this) || this;
        _this.identifier = "PostChannel";
        _this.priority = 1011;
        _this.version = "3.2.13";
        var _config;
        var _isTeardownCalled = false;
        var _flushCallbackQueue = [];
        var _flushCallbackTimerId = null;
        var _paused = false;
        var _immediateQueueSize = 0;
        var _immediateQueueSizeLimit = 500;
        var _queueSize = 0;
        var _queueSizeLimit = 1e4;
        var _profiles = {};
        var _currentProfile = RT_PROFILE;
        var _scheduledTimerId = null;
        var _immediateTimerId = null;
        var _currentBackoffCount = 0;
        var _timerCount = 0;
        var _xhrOverride;
        var _httpManager;
        var _batchQueues = {};
        var _autoFlushEventsLimit;
        var _autoFlushBatchLimit;
        var _delayedBatchSendLatency = -1;
        var _delayedBatchReason;
        var _optimizeObject = true;
        var _isPageUnloadTriggered = false;
        var _maxEventSendAttempts = MaxSendAttempts;
        var _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
        var _evtNamespace;
        var _timeoutWrapper;
        dynamicProto(PostChannel2, _this, function(_self, _base) {
          _initDefaults();
          _self["_getDbgPlgTargets"] = function() {
            return [_httpManager];
          };
          _self.initialize = function(coreConfig, core, extensions2) {
            doPerf(core, function() {
              return "PostChannel:initialize";
            }, function() {
              var extendedCore = core;
              _base.initialize(coreConfig, core, extensions2);
              try {
                var hasAddUnloadCb = !!core[strAddUnloadCb];
                _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
                var ctx = _self._getTelCtx();
                coreConfig.extensionConfig[_self.identifier] = coreConfig.extensionConfig[_self.identifier] || {};
                _config = ctx.getExtCfg(_self.identifier);
                _timeoutWrapper = createTimeoutWrapper(_config.setTimeoutOverride, _config.clearTimeoutOverride);
                _optimizeObject = !_config.disableOptimizeObj && isChromium();
                _hookWParam(extendedCore);
                if (_config.eventsLimitInMem > 0) {
                  _queueSizeLimit = _config.eventsLimitInMem;
                }
                if (_config.immediateEventLimit > 0) {
                  _immediateQueueSizeLimit = _config.immediateEventLimit;
                }
                if (_config.autoFlushEventsLimit > 0) {
                  _autoFlushEventsLimit = _config.autoFlushEventsLimit;
                }
                if (isNumber(_config[strMaxEventRetryAttempts])) {
                  _maxEventSendAttempts = _config[strMaxEventRetryAttempts];
                }
                if (isNumber(_config[strMaxUnloadEventRetryAttempts])) {
                  _maxUnloadEventSendAttempts = _config[strMaxUnloadEventRetryAttempts];
                }
                _setAutoLimits();
                if (_config.httpXHROverride && _config.httpXHROverride.sendPOST) {
                  _xhrOverride = _config.httpXHROverride;
                }
                if (isValueAssigned(coreConfig.anonCookieName)) {
                  _httpManager.addQueryStringParameter("anoncknm", coreConfig.anonCookieName);
                }
                _httpManager.sendHook = _config.payloadPreprocessor;
                _httpManager.sendListener = _config.payloadListener;
                var endpointUrl = _config.overrideEndpointUrl ? _config.overrideEndpointUrl : coreConfig.endpointUrl;
                _self._notificationManager = core.getNotifyMgr();
                _httpManager.initialize(endpointUrl, _self.core, _self, _xhrOverride, _config);
                var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents || [];
                addPageUnloadEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                addPageHideEventListener(_handleUnloadEvents, excludePageUnloadEvents, _evtNamespace);
                addPageShowEventListener(_handleShowEvents, coreConfig.disablePageShowEvents, _evtNamespace);
              } catch (e) {
                _self.setInitialized(false);
                throw e;
              }
            }, function() {
              return { coreConfig, core, extensions: extensions2 };
            });
          };
          _self.processTelemetry = function(ev, itemCtx) {
            setProcessTelemetryTimings(ev, _self.identifier);
            itemCtx = _self._getTelCtx(itemCtx);
            var channelConfig = itemCtx.getExtCfg(_self.identifier);
            var disableTelemetry = !!_config.disableTelemetry;
            if (channelConfig) {
              disableTelemetry = disableTelemetry || !!channelConfig.disableTelemetry;
            }
            var event = ev;
            if (!disableTelemetry && !_isTeardownCalled) {
              if (_config[strOverrideInstrumentationKey]) {
                event.iKey = _config[strOverrideInstrumentationKey];
              }
              if (channelConfig && channelConfig[strOverrideInstrumentationKey]) {
                event.iKey = channelConfig[strOverrideInstrumentationKey];
              }
              _addEventToQueues(event, true);
              if (_isPageUnloadTriggered) {
                _releaseAllQueues(
                  2,
                  2
                  /* SendRequestReason.Unload */
                );
              } else {
                _scheduleTimer();
              }
            }
            _self.processNext(event, itemCtx);
          };
          _self._doTeardown = function(unloadCtx, unloadState) {
            _releaseAllQueues(
              2,
              2
              /* SendRequestReason.Unload */
            );
            _isTeardownCalled = true;
            _httpManager.teardown();
            removePageUnloadEventListener(null, _evtNamespace);
            removePageHideEventListener(null, _evtNamespace);
            removePageShowEventListener(null, _evtNamespace);
            _initDefaults();
          };
          function _hookWParam(extendedCore) {
            var existingGetWParamMethod = extendedCore.getWParam;
            extendedCore.getWParam = function() {
              var wparam = 0;
              if (_config.ignoreMc1Ms0CookieProcessing) {
                wparam = wparam | 2;
              }
              return wparam | existingGetWParamMethod();
            };
          }
          function _handleUnloadEvents(evt) {
            var theEvt = evt || getWindow().event;
            if (theEvt.type !== "beforeunload") {
              _isPageUnloadTriggered = true;
              _httpManager.setUnloading(_isPageUnloadTriggered);
            }
            _releaseAllQueues(
              2,
              2
              /* SendRequestReason.Unload */
            );
          }
          function _handleShowEvents(evt) {
            _isPageUnloadTriggered = false;
            _httpManager.setUnloading(_isPageUnloadTriggered);
          }
          function _addEventToQueues(event, append) {
            if (!event.sendAttempt) {
              event.sendAttempt = 0;
            }
            if (!event.latency) {
              event.latency = 1;
            }
            if (event.ext && event.ext[STR_TRACE]) {
              delete event.ext[STR_TRACE];
            }
            if (event.ext && event.ext[STR_USER] && event.ext[STR_USER]["id"]) {
              delete event.ext[STR_USER]["id"];
            }
            if (_optimizeObject) {
              setProcessTelemetryTimings;
              event.ext = optimizeObject(event.ext);
              if (event.baseData) {
                event.baseData = optimizeObject(event.baseData);
              }
              if (event.data) {
                event.data = optimizeObject(event.data);
              }
            }
            if (event.sync) {
              if (_currentBackoffCount || _paused) {
                event.latency = 3;
                event.sync = false;
              } else {
                if (_httpManager) {
                  if (_optimizeObject) {
                    event = optimizeObject(event);
                  }
                  _httpManager.sendSynchronousBatch(
                    EventBatch.create(event.iKey, [event]),
                    event.sync === true ? 1 : event.sync,
                    3
                    /* SendRequestReason.SyncEvent */
                  );
                  return;
                }
              }
            }
            var evtLatency = event.latency;
            var queueSize = _queueSize;
            var queueLimit = _queueSizeLimit;
            if (evtLatency === 4) {
              queueSize = _immediateQueueSize;
              queueLimit = _immediateQueueSizeLimit;
            }
            var eventDropped = false;
            if (queueSize < queueLimit) {
              eventDropped = !_addEventToProperQueue(event, append);
            } else {
              var dropLatency = 1;
              var dropNumber = EventsDroppedAtOneTime;
              if (evtLatency === 4) {
                dropLatency = 4;
                dropNumber = 1;
              }
              eventDropped = true;
              if (_dropEventWithLatencyOrLess(event.iKey, event.latency, dropLatency, dropNumber)) {
                eventDropped = !_addEventToProperQueue(event, append);
              }
            }
            if (eventDropped) {
              _notifyEvents(strEventsDiscarded, [event], EventsDiscardedReason.QueueFull);
            }
          }
          _self.setEventQueueLimits = function(eventLimit, autoFlushLimit) {
            _queueSizeLimit = eventLimit > 0 ? eventLimit : 1e4;
            _autoFlushEventsLimit = autoFlushLimit > 0 ? autoFlushLimit : 0;
            _setAutoLimits();
            var doFlush = _queueSize > eventLimit;
            if (!doFlush && _autoFlushBatchLimit > 0) {
              for (var latency = 1; !doFlush && latency <= 3; latency++) {
                var batchQueue = _batchQueues[latency];
                if (batchQueue && batchQueue.batches) {
                  arrForEach(batchQueue.batches, function(theBatch) {
                    if (theBatch && theBatch.count() >= _autoFlushBatchLimit) {
                      doFlush = true;
                    }
                  });
                }
              }
            }
            _performAutoFlush(true, doFlush);
          };
          _self.pause = function() {
            _clearScheduledTimer();
            _paused = true;
            _httpManager.pause();
          };
          _self.resume = function() {
            _paused = false;
            _httpManager.resume();
            _scheduleTimer();
          };
          _self.addResponseHandler = function(responseHandler) {
            _httpManager._responseHandlers.push(responseHandler);
          };
          _self._loadTransmitProfiles = function(profiles) {
            _resetTransmitProfiles();
            objForEachKey(profiles, function(profileName, profileValue) {
              var profLen = profileValue.length;
              if (profLen >= 2) {
                var directValue = profLen > 2 ? profileValue[2] : 0;
                profileValue.splice(0, profLen - 2);
                if (profileValue[1] < 0) {
                  profileValue[0] = -1;
                }
                if (profileValue[1] > 0 && profileValue[0] > 0) {
                  var timerMultiplier = profileValue[0] / profileValue[1];
                  profileValue[0] = Math.ceil(timerMultiplier) * profileValue[1];
                }
                if (directValue >= 0 && profileValue[1] >= 0 && directValue > profileValue[1]) {
                  directValue = profileValue[1];
                }
                profileValue.push(directValue);
                _profiles[profileName] = profileValue;
              }
            });
          };
          _self.flush = function(async, callback, sendReason) {
            if (async === void 0) {
              async = true;
            }
            if (!_paused) {
              sendReason = sendReason || 1;
              if (async) {
                if (_flushCallbackTimerId == null) {
                  _clearScheduledTimer();
                  _queueBatches(1, 0, sendReason);
                  _flushCallbackTimerId = _createTimer(function() {
                    _flushCallbackTimerId = null;
                    _flushImpl(callback, sendReason);
                  }, 0);
                } else {
                  _flushCallbackQueue.push(callback);
                }
              } else {
                var cleared = _clearScheduledTimer();
                _sendEventsForLatencyAndAbove(1, 1, sendReason);
                if (callback !== null && callback !== void 0) {
                  callback();
                }
                if (cleared) {
                  _scheduleTimer();
                }
              }
            }
          };
          _self.setMsaAuthTicket = function(ticket) {
            _httpManager.addHeader(STR_MSA_DEVICE_TICKET, ticket);
          };
          _self.hasEvents = _hasEvents;
          _self._setTransmitProfile = function(profileName) {
            if (_currentProfile !== profileName && _profiles[profileName] !== void 0) {
              _clearScheduledTimer();
              _currentProfile = profileName;
              _scheduleTimer();
            }
          };
          function _sendEventsForLatencyAndAbove(latency, sendType, sendReason) {
            var queued = _queueBatches(latency, sendType, sendReason);
            _httpManager.sendQueuedRequests(sendType, sendReason);
            return queued;
          }
          function _hasEvents() {
            return _queueSize > 0;
          }
          function _scheduleTimer() {
            if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, 0, _delayedBatchReason)) {
              _httpManager.sendQueuedRequests(0, _delayedBatchReason);
            }
            if (_immediateQueueSize > 0 && !_immediateTimerId && !_paused) {
              var immediateTimeOut = _profiles[_currentProfile][2];
              if (immediateTimeOut >= 0) {
                _immediateTimerId = _createTimer(function() {
                  _immediateTimerId = null;
                  _sendEventsForLatencyAndAbove(
                    4,
                    0,
                    1
                    /* SendRequestReason.NormalSchedule */
                  );
                  _scheduleTimer();
                }, immediateTimeOut);
              }
            }
            var timeOut = _profiles[_currentProfile][1];
            if (!_scheduledTimerId && !_flushCallbackTimerId && timeOut >= 0 && !_paused) {
              if (_hasEvents()) {
                _scheduledTimerId = _createTimer(function() {
                  _scheduledTimerId = null;
                  _sendEventsForLatencyAndAbove(
                    _timerCount === 0 ? 3 : 1,
                    0,
                    1
                    /* SendRequestReason.NormalSchedule */
                  );
                  _timerCount++;
                  _timerCount %= 2;
                  _scheduleTimer();
                }, timeOut);
              } else {
                _timerCount = 0;
              }
            }
          }
          _self._backOffTransmission = function() {
            if (_currentBackoffCount < MaxBackoffCount) {
              _currentBackoffCount++;
              _clearScheduledTimer();
              _scheduleTimer();
            }
          };
          _self._clearBackOff = function() {
            if (_currentBackoffCount) {
              _currentBackoffCount = 0;
              _clearScheduledTimer();
              _scheduleTimer();
            }
          };
          function _initDefaults() {
            _config = null;
            _isTeardownCalled = false;
            _flushCallbackQueue = [];
            _flushCallbackTimerId = null;
            _paused = false;
            _immediateQueueSize = 0;
            _immediateQueueSizeLimit = 500;
            _queueSize = 0;
            _queueSizeLimit = 1e4;
            _profiles = {};
            _currentProfile = RT_PROFILE;
            _scheduledTimerId = null;
            _immediateTimerId = null;
            _currentBackoffCount = 0;
            _timerCount = 0;
            _xhrOverride = null;
            _batchQueues = {};
            _autoFlushEventsLimit = void 0;
            _autoFlushBatchLimit = 0;
            _delayedBatchSendLatency = -1;
            _delayedBatchReason = null;
            _optimizeObject = true;
            _isPageUnloadTriggered = false;
            _maxEventSendAttempts = MaxSendAttempts;
            _maxUnloadEventSendAttempts = MaxSyncUnloadSendAttempts;
            _evtNamespace = null;
            _timeoutWrapper = createTimeoutWrapper();
            _httpManager = new HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRequestRetriesBeforeBackoff, {
              requeue: _requeueEvents,
              send: _sendingEvent,
              sent: _eventsSentEvent,
              drop: _eventsDropped,
              rspFail: _eventsResponseFail,
              oth: _otherEvent
            }, _timeoutWrapper);
            _initializeProfiles();
            _clearQueues();
            _setAutoLimits();
          }
          function _createTimer(theTimerFunc, timeOut) {
            if (timeOut === 0 && _currentBackoffCount) {
              timeOut = 1;
            }
            var timerMultiplier = 1e3;
            if (_currentBackoffCount) {
              timerMultiplier = retryPolicyGetMillisToBackoffForRetry(_currentBackoffCount - 1);
            }
            return _timeoutWrapper.set(theTimerFunc, timeOut * timerMultiplier);
          }
          function _clearScheduledTimer() {
            if (_scheduledTimerId !== null) {
              _timeoutWrapper.clear(_scheduledTimerId);
              _scheduledTimerId = null;
              _timerCount = 0;
              return true;
            }
            return false;
          }
          function _releaseAllQueues(sendType, sendReason) {
            _clearScheduledTimer();
            if (_flushCallbackTimerId) {
              _timeoutWrapper.clear(_flushCallbackTimerId);
              _flushCallbackTimerId = null;
            }
            if (!_paused) {
              _sendEventsForLatencyAndAbove(1, sendType, sendReason);
            }
          }
          function _clearQueues() {
            _batchQueues[
              4
              /* EventLatencyValue.Immediate */
            ] = {
              batches: [],
              iKeyMap: {}
            };
            _batchQueues[
              3
              /* EventLatencyValue.RealTime */
            ] = {
              batches: [],
              iKeyMap: {}
            };
            _batchQueues[
              2
              /* EventLatencyValue.CostDeferred */
            ] = {
              batches: [],
              iKeyMap: {}
            };
            _batchQueues[
              1
              /* EventLatencyValue.Normal */
            ] = {
              batches: [],
              iKeyMap: {}
            };
          }
          function _getEventBatch(iKey, latency, create) {
            var batchQueue = _batchQueues[latency];
            if (!batchQueue) {
              latency = 1;
              batchQueue = _batchQueues[latency];
            }
            var eventBatch = batchQueue.iKeyMap[iKey];
            if (!eventBatch && create) {
              eventBatch = EventBatch.create(iKey);
              batchQueue.batches.push(eventBatch);
              batchQueue.iKeyMap[iKey] = eventBatch;
            }
            return eventBatch;
          }
          function _performAutoFlush(isAsync, doFlush) {
            if (_httpManager.canSendRequest() && !_currentBackoffCount) {
              if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                doFlush = true;
              }
              if (doFlush && _flushCallbackTimerId == null) {
                _self.flush(
                  isAsync,
                  null,
                  20
                  /* SendRequestReason.MaxQueuedEvents */
                );
              }
            }
          }
          function _addEventToProperQueue(event, append) {
            if (_optimizeObject) {
              event = optimizeObject(event);
            }
            var latency = event.latency;
            var eventBatch = _getEventBatch(event.iKey, latency, true);
            if (eventBatch.addEvent(event)) {
              if (latency !== 4) {
                _queueSize++;
                if (append && event.sendAttempt === 0) {
                  _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch.count() >= _autoFlushBatchLimit);
                }
              } else {
                _immediateQueueSize++;
              }
              return true;
            }
            return false;
          }
          function _dropEventWithLatencyOrLess(iKey, latency, currentLatency, dropNumber) {
            while (currentLatency <= latency) {
              var eventBatch = _getEventBatch(iKey, latency, true);
              if (eventBatch && eventBatch.count() > 0) {
                var droppedEvents = eventBatch.split(0, dropNumber);
                var droppedCount = droppedEvents.count();
                if (droppedCount > 0) {
                  if (currentLatency === 4) {
                    _immediateQueueSize -= droppedCount;
                  } else {
                    _queueSize -= droppedCount;
                  }
                  _notifyBatchEvents(strEventsDiscarded, [droppedEvents], EventsDiscardedReason.QueueFull);
                  return true;
                }
              }
              currentLatency++;
            }
            _resetQueueCounts();
            return false;
          }
          function _resetQueueCounts() {
            var immediateQueue = 0;
            var normalQueue = 0;
            var _loop_1 = function(latency2) {
              var batchQueue = _batchQueues[latency2];
              if (batchQueue && batchQueue.batches) {
                arrForEach(batchQueue.batches, function(theBatch) {
                  if (latency2 === 4) {
                    immediateQueue += theBatch.count();
                  } else {
                    normalQueue += theBatch.count();
                  }
                });
              }
            };
            for (var latency = 1; latency <= 4; latency++) {
              _loop_1(latency);
            }
            _queueSize = normalQueue;
            _immediateQueueSize = immediateQueue;
          }
          function _queueBatches(latency, sendType, sendReason) {
            var eventsQueued = false;
            var isAsync = sendType === 0;
            if (!isAsync || _httpManager.canSendRequest()) {
              doPerf(_self.core, function() {
                return "PostChannel._queueBatches";
              }, function() {
                var droppedEvents = [];
                var latencyToProcess = 4;
                while (latencyToProcess >= latency) {
                  var batchQueue = _batchQueues[latencyToProcess];
                  if (batchQueue && batchQueue.batches && batchQueue.batches.length > 0) {
                    arrForEach(batchQueue.batches, function(theBatch) {
                      if (!_httpManager.addBatch(theBatch)) {
                        droppedEvents = droppedEvents.concat(theBatch.events());
                      } else {
                        eventsQueued = eventsQueued || theBatch && theBatch.count() > 0;
                      }
                      if (latencyToProcess === 4) {
                        _immediateQueueSize -= theBatch.count();
                      } else {
                        _queueSize -= theBatch.count();
                      }
                    });
                    batchQueue.batches = [];
                    batchQueue.iKeyMap = {};
                  }
                  latencyToProcess--;
                }
                if (droppedEvents.length > 0) {
                  _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.KillSwitch);
                }
                if (eventsQueued && _delayedBatchSendLatency >= latency) {
                  _delayedBatchSendLatency = -1;
                  _delayedBatchReason = 0;
                }
              }, function() {
                return { latency, sendType, sendReason };
              }, !isAsync);
            } else {
              _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? Math.min(_delayedBatchSendLatency, latency) : latency;
              _delayedBatchReason = Math.max(_delayedBatchReason, sendReason);
            }
            return eventsQueued;
          }
          function _flushImpl(callback, sendReason) {
            _sendEventsForLatencyAndAbove(1, 0, sendReason);
            _resetQueueCounts();
            _waitForIdleManager(function() {
              if (callback) {
                callback();
              }
              if (_flushCallbackQueue.length > 0) {
                _flushCallbackTimerId = _createTimer(function() {
                  _flushCallbackTimerId = null;
                  _flushImpl(_flushCallbackQueue.shift(), sendReason);
                }, 0);
              } else {
                _flushCallbackTimerId = null;
                _scheduleTimer();
              }
            });
          }
          function _waitForIdleManager(callback) {
            if (_httpManager.isCompletelyIdle()) {
              callback();
            } else {
              _flushCallbackTimerId = _createTimer(function() {
                _flushCallbackTimerId = null;
                _waitForIdleManager(callback);
              }, FlushCheckTimer);
            }
          }
          function _resetTransmitProfiles() {
            _clearScheduledTimer();
            _initializeProfiles();
            _currentProfile = RT_PROFILE;
            _scheduleTimer();
          }
          function _initializeProfiles() {
            _profiles = {};
            _profiles[RT_PROFILE] = [2, 1, 0];
            _profiles[NRT_PROFILE] = [6, 3, 0];
            _profiles[BE_PROFILE] = [18, 9, 0];
          }
          function _requeueEvents(batches, reason) {
            var droppedEvents = [];
            var maxSendAttempts = _maxEventSendAttempts;
            if (_isPageUnloadTriggered) {
              maxSendAttempts = _maxUnloadEventSendAttempts;
            }
            arrForEach(batches, function(theBatch) {
              if (theBatch && theBatch.count() > 0) {
                arrForEach(theBatch.events(), function(theEvent) {
                  if (theEvent) {
                    if (theEvent.sync) {
                      theEvent.latency = 4;
                      theEvent.sync = false;
                    }
                    if (theEvent.sendAttempt < maxSendAttempts) {
                      setProcessTelemetryTimings(theEvent, _self.identifier);
                      _addEventToQueues(theEvent, false);
                    } else {
                      droppedEvents.push(theEvent);
                    }
                  }
                });
              }
            });
            if (droppedEvents.length > 0) {
              _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.NonRetryableStatus);
            }
            if (_isPageUnloadTriggered) {
              _releaseAllQueues(
                2,
                2
                /* SendRequestReason.Unload */
              );
            }
          }
          function _callNotification(evtName, theArgs) {
            var manager = _self._notificationManager || {};
            var notifyFunc = manager[evtName];
            if (notifyFunc) {
              try {
                notifyFunc.apply(manager, theArgs);
              } catch (e) {
                _throwInternal(_self.diagLog(), 1, 74, evtName + " notification failed: " + e);
              }
            }
          }
          function _notifyEvents(evtName, theEvents) {
            var extraArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              extraArgs[_i - 2] = arguments[_i];
            }
            if (theEvents && theEvents.length > 0) {
              _callNotification(evtName, [theEvents].concat(extraArgs));
            }
          }
          function _notifyBatchEvents(evtName, batches) {
            var extraArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              extraArgs[_i - 2] = arguments[_i];
            }
            if (batches && batches.length > 0) {
              arrForEach(batches, function(theBatch) {
                if (theBatch && theBatch.count() > 0) {
                  _callNotification(evtName, [theBatch.events()].concat(extraArgs));
                }
              });
            }
          }
          function _sendingEvent(batches, reason, isSyncRequest) {
            if (batches && batches.length > 0) {
              _callNotification("eventsSendRequest", [reason >= 1e3 && reason <= 1999 ? reason - 1e3 : 0, isSyncRequest !== true]);
            }
          }
          function _eventsSentEvent(batches, reason) {
            _notifyBatchEvents("eventsSent", batches, reason);
            _scheduleTimer();
          }
          function _eventsDropped(batches, reason) {
            _notifyBatchEvents(strEventsDiscarded, batches, reason >= 8e3 && reason <= 8999 ? reason - 8e3 : EventsDiscardedReason.Unknown);
          }
          function _eventsResponseFail(batches) {
            _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.NonRetryableStatus);
            _scheduleTimer();
          }
          function _otherEvent(batches, reason) {
            _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.Unknown);
            _scheduleTimer();
          }
          function _setAutoLimits() {
            if (!_config || !_config.disableAutoBatchFlushLimit) {
              _autoFlushBatchLimit = Math.max(MaxNumberEventPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
            } else {
              _autoFlushBatchLimit = 0;
            }
          }
          objDefineAccessors(_self, "_setTimeoutOverride", function() {
            return _timeoutWrapper.set;
          }, function(value) {
            _timeoutWrapper = createTimeoutWrapper(value, _timeoutWrapper.clear);
          });
          objDefineAccessors(_self, "_clearTimeoutOverride", function() {
            return _timeoutWrapper.clear;
          }, function(value) {
            _timeoutWrapper = createTimeoutWrapper(_timeoutWrapper.set, value);
          });
        });
        return _this;
      }
      PostChannel2.__ieDyn = 1;
      return PostChannel2;
    }(BaseTelemetryPlugin);
    PostChannel_default = PostChannel;
  }
});

// node_modules/@microsoft/1ds-post-js/dist-esm/src/Index.js
var Index_exports2 = {};
__export(Index_exports2, {
  BE_PROFILE: () => BE_PROFILE,
  NRT_PROFILE: () => NRT_PROFILE,
  PostChannel: () => PostChannel_default,
  RT_PROFILE: () => RT_PROFILE
});
var init_Index2 = __esm({
  "node_modules/@microsoft/1ds-post-js/dist-esm/src/Index.js"() {
    init_PostChannel();
    init_DataModels();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Constants.js
var DisabledPropertyName, SampleRate, ProcessLegacy, HttpMethod, DEFAULT_BREEZE_ENDPOINT, DEFAULT_BREEZE_PATH, strNotSpecified;
var init_Constants2 = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Constants.js"() {
    DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    SampleRate = "sampleRate";
    ProcessLegacy = "ProcessLegacy";
    HttpMethod = "http.method";
    DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
    DEFAULT_BREEZE_PATH = "/v2/track";
    strNotSpecified = "not_specified";
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/__DynamicConstants.js
var _DYN_SPLIT2, _DYN_LENGTH2, _DYN_TO_LOWER_CASE2, _DYN_INGESTIONENDPOINT, _DYN_TO_STRING, _DYN_REMOVE_ITEM, _DYN_NAME2, _DYN_MESSAGE2, _DYN_COUNT, _DYN_STRINGIFY, _DYN_PATHNAME, _DYN_INDEX_OF2, _DYN_EXCEPTIONS, _DYN_PARSED_STACK, _DYN_PROPERTIES, _DYN_MEASUREMENTS, _DYN_SIZE_IN_BYTES, _DYN_TYPE_NAME, _DYN_SEVERITY_LEVEL, _DYN_PROBLEM_GROUP, _DYN_IS_MANUAL, _DYN__CREATE_FROM_INTERFA1, _DYN_ASSEMBLY, _DYN_FILE_NAME, _DYN_HAS_FULL_STACK, _DYN_LEVEL, _DYN_METHOD, _DYN_LINE, _DYN_DURATION, _DYN_RECEIVED_RESPONSE, _DYN_SUBSTRING2, _DYN_SANITIZE_KEY_AND_ADD2, _DYN_SANITIZE_EXCEPTION, _DYN_SANITIZE_PROPERTIES, _DYN_SANITIZE_MEASUREMENT3;
var init_DynamicConstants2 = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/__DynamicConstants.js"() {
    _DYN_SPLIT2 = "split";
    _DYN_LENGTH2 = "length";
    _DYN_TO_LOWER_CASE2 = "toLowerCase";
    _DYN_INGESTIONENDPOINT = "ingestionendpoint";
    _DYN_TO_STRING = "toString";
    _DYN_REMOVE_ITEM = "removeItem";
    _DYN_NAME2 = "name";
    _DYN_MESSAGE2 = "message";
    _DYN_COUNT = "count";
    _DYN_STRINGIFY = "stringify";
    _DYN_PATHNAME = "pathname";
    _DYN_INDEX_OF2 = "indexOf";
    _DYN_EXCEPTIONS = "exceptions";
    _DYN_PARSED_STACK = "parsedStack";
    _DYN_PROPERTIES = "properties";
    _DYN_MEASUREMENTS = "measurements";
    _DYN_SIZE_IN_BYTES = "sizeInBytes";
    _DYN_TYPE_NAME = "typeName";
    _DYN_SEVERITY_LEVEL = "severityLevel";
    _DYN_PROBLEM_GROUP = "problemGroup";
    _DYN_IS_MANUAL = "isManual";
    _DYN__CREATE_FROM_INTERFA1 = "CreateFromInterface";
    _DYN_ASSEMBLY = "assembly";
    _DYN_FILE_NAME = "fileName";
    _DYN_HAS_FULL_STACK = "hasFullStack";
    _DYN_LEVEL = "level";
    _DYN_METHOD = "method";
    _DYN_LINE = "line";
    _DYN_DURATION = "duration";
    _DYN_RECEIVED_RESPONSE = "receivedResponse";
    _DYN_SUBSTRING2 = "substring";
    _DYN_SANITIZE_KEY_AND_ADD2 = "sanitizeKeyAndAddUniqueness";
    _DYN_SANITIZE_EXCEPTION = "sanitizeException";
    _DYN_SANITIZE_PROPERTIES = "sanitizeProperties";
    _DYN_SANITIZE_MEASUREMENT3 = "sanitizeMeasurements";
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/HelperFuncs.js
function msToTimeSpan(totalms) {
  if (isNaN(totalms) || totalms < 0) {
    totalms = 0;
  }
  totalms = Math.round(totalms);
  var ms = strEmpty + totalms % 1e3;
  var sec = strEmpty + Math.floor(totalms / 1e3) % 60;
  var min = strEmpty + Math.floor(totalms / (1e3 * 60)) % 60;
  var hour = strEmpty + Math.floor(totalms / (1e3 * 60 * 60)) % 24;
  var days = Math.floor(totalms / (1e3 * 60 * 60 * 24));
  ms = ms[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] === 1 ? "00" + ms : ms[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] === 2 ? "0" + ms : ms;
  sec = sec[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + sec : sec;
  min = min[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + min : min;
  hour = hour[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + hour : hour;
  return (days > 0 ? days + "." : strEmpty) + hour + ":" + min + ":" + sec + "." + ms;
}
var strEmpty;
var init_HelperFuncs2 = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/HelperFuncs.js"() {
    init_DynamicConstants2();
    strEmpty = "";
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/RequestResponseHeaders.js
var RequestHeaders;
var init_RequestResponseHeaders = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/RequestResponseHeaders.js"() {
    init_applicationinsights_core_js();
    RequestHeaders = createValueMap({
      requestContextHeader: [0, "Request-Context"],
      requestContextTargetKey: [1, "appId"],
      requestContextAppIdFormat: [2, "appId=cid-v1:"],
      requestIdHeader: [3, "Request-Id"],
      traceParentHeader: [4, "traceparent"],
      traceStateHeader: [5, "tracestate"],
      sdkContextHeader: [6, "Sdk-Context"],
      sdkContextHeaderAppIdRequest: [7, "appId"],
      requestContextHeaderLowerCase: [8, "request-context"]
    });
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Enums.js
var StorageType, DistributedTracingModes;
var init_Enums2 = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Enums.js"() {
    init_applicationinsights_core_js();
    StorageType = createEnumStyle({
      LocalStorage: 0,
      SessionStorage: 1
      /* eStorageType.SessionStorage */
    });
    DistributedTracingModes = createEnumStyle({
      AI: 0,
      AI_AND_W3C: 1,
      W3C: 2
      /* eDistributedTracingModes.W3C */
    });
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/StorageHelperFuncs.js
function _getVerifiedStorageObject(storageType) {
  try {
    if (isNullOrUndefined(getGlobal())) {
      return null;
    }
    var uid = (/* @__PURE__ */ new Date())[
      _DYN_TO_STRING
      /* @min:%2etoString */
    ]();
    var storage = getGlobalInst(storageType === StorageType.LocalStorage ? "localStorage" : "sessionStorage");
    var name_1 = _storagePrefix + uid;
    storage.setItem(name_1, uid);
    var fail = storage.getItem(name_1) !== uid;
    storage[
      _DYN_REMOVE_ITEM
      /* @min:%2eremoveItem */
    ](name_1);
    if (!fail) {
      return storage;
    }
  } catch (exception) {
  }
  return null;
}
function _getSessionStorageObject() {
  if (utlCanUseSessionStorage()) {
    return _getVerifiedStorageObject(StorageType.SessionStorage);
  }
  return null;
}
function utlSetStoragePrefix(storagePrefix) {
  _storagePrefix = storagePrefix || "";
}
function utlCanUseSessionStorage(reset) {
  if (reset || _canUseSessionStorage === void 0) {
    _canUseSessionStorage = !!_getVerifiedStorageObject(StorageType.SessionStorage);
  }
  return _canUseSessionStorage;
}
function utlGetSessionStorage(logger, name2) {
  var storage = _getSessionStorageObject();
  if (storage !== null) {
    try {
      return storage.getItem(name2);
    } catch (e) {
      _canUseSessionStorage = false;
      _throwInternal(logger, 2, 2, "Browser failed read of session storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return null;
}
function utlSetSessionStorage(logger, name2, data) {
  var storage = _getSessionStorageObject();
  if (storage !== null) {
    try {
      storage.setItem(name2, data);
      return true;
    } catch (e) {
      _canUseSessionStorage = false;
      _throwInternal(logger, 2, 4, "Browser failed write to session storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return false;
}
var _canUseSessionStorage, _storagePrefix;
var init_StorageHelperFuncs = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/StorageHelperFuncs.js"() {
    init_applicationinsights_core_js();
    init_Enums2();
    init_DynamicConstants2();
    _canUseSessionStorage = void 0;
    _storagePrefix = "";
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataSanitizer.js
function dataSanitizeKeyAndAddUniqueness(logger, key, map) {
  var origLength = key[
    _DYN_LENGTH2
    /* @min:%2elength */
  ];
  var field = dataSanitizeKey(logger, key);
  if (field[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] !== origLength) {
    var i = 0;
    var uniqueField = field;
    while (map[uniqueField] !== void 0) {
      i++;
      uniqueField = field[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](0, 150 - 3) + dsPadNumber(i);
    }
    field = uniqueField;
  }
  return field;
}
function dataSanitizeKey(logger, name2) {
  var nameTrunc;
  if (name2) {
    name2 = strTrim(name2[
      _DYN_TO_STRING
      /* @min:%2etoString */
    ]());
    if (name2[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 150) {
      nameTrunc = name2[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](
        0,
        150
        /* DataSanitizerValues.MAX_NAME_LENGTH */
      );
      _throwInternal(logger, 2, 57, "name is too long.  It has been truncated to 150 characters.", { name: name2 }, true);
    }
  }
  return nameTrunc || name2;
}
function dataSanitizeString(logger, value, maxLength) {
  if (maxLength === void 0) {
    maxLength = 1024;
  }
  var valueTrunc;
  if (value) {
    maxLength = maxLength ? maxLength : 1024;
    value = strTrim(value);
    if (value.toString()[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > maxLength) {
      valueTrunc = value[
        _DYN_TO_STRING
        /* @min:%2etoString */
      ]()[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](0, maxLength);
      _throwInternal(logger, 2, 61, "string value is too long. It has been truncated to " + maxLength + " characters.", { value }, true);
    }
  }
  return valueTrunc || value;
}
function dataSanitizeUrl(logger, url) {
  return dataSanitizeInput(
    logger,
    url,
    2048,
    66
    /* _eInternalMessageId.UrlTooLong */
  );
}
function dataSanitizeMessage(logger, message) {
  var messageTrunc;
  if (message) {
    if (message[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 32768) {
      messageTrunc = message[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](
        0,
        32768
        /* DataSanitizerValues.MAX_MESSAGE_LENGTH */
      );
      _throwInternal(logger, 2, 56, "message is too long, it has been truncated to 32768 characters.", { message }, true);
    }
  }
  return messageTrunc || message;
}
function dataSanitizeException(logger, exception) {
  var exceptionTrunc;
  if (exception) {
    var value = "" + exception;
    if (value[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 32768) {
      exceptionTrunc = value[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](
        0,
        32768
        /* DataSanitizerValues.MAX_EXCEPTION_LENGTH */
      );
      _throwInternal(logger, 2, 52, "exception is too long, it has been truncated to 32768 characters.", { exception }, true);
    }
  }
  return exceptionTrunc || exception;
}
function dataSanitizeProperties(logger, properties) {
  if (properties) {
    var tempProps_1 = {};
    objForEachKey(properties, function(prop, value) {
      if (isObject(value) && hasJSON()) {
        try {
          value = getJSON()[
            _DYN_STRINGIFY
            /* @min:%2estringify */
          ](value);
        } catch (e) {
          _throwInternal(logger, 2, 49, "custom property is not valid", { exception: e }, true);
        }
      }
      value = dataSanitizeString(
        logger,
        value,
        8192
        /* DataSanitizerValues.MAX_PROPERTY_LENGTH */
      );
      prop = dataSanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
      tempProps_1[prop] = value;
    });
    properties = tempProps_1;
  }
  return properties;
}
function dataSanitizeMeasurements(logger, measurements) {
  if (measurements) {
    var tempMeasurements_1 = {};
    objForEachKey(measurements, function(measure, value) {
      measure = dataSanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
      tempMeasurements_1[measure] = value;
    });
    measurements = tempMeasurements_1;
  }
  return measurements;
}
function dataSanitizeId(logger, id) {
  return id ? dataSanitizeInput(
    logger,
    id,
    128,
    69
    /* _eInternalMessageId.IdTooLong */
  )[
    _DYN_TO_STRING
    /* @min:%2etoString */
  ]() : id;
}
function dataSanitizeInput(logger, input, maxLength, _msgId) {
  var inputTrunc;
  if (input) {
    input = strTrim(input);
    if (input[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > maxLength) {
      inputTrunc = input[
        _DYN_SUBSTRING2
        /* @min:%2esubstring */
      ](0, maxLength);
      _throwInternal(logger, 2, _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", { data: input }, true);
    }
  }
  return inputTrunc || input;
}
function dsPadNumber(num) {
  var s = "00" + num;
  return s.substr(s[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] - 3);
}
var _a5, DataSanitizer;
var init_DataSanitizer = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataSanitizer.js"() {
    init_applicationinsights_core_js();
    init_DynamicConstants2();
    DataSanitizer = (_a5 = {
      MAX_NAME_LENGTH: 150,
      MAX_ID_LENGTH: 128,
      MAX_PROPERTY_LENGTH: 8192,
      MAX_STRING_LENGTH: 1024,
      MAX_URL_LENGTH: 2048,
      MAX_MESSAGE_LENGTH: 32768,
      MAX_EXCEPTION_LENGTH: 32768
      /* DataSanitizerValues.MAX_EXCEPTION_LENGTH */
    }, _a5[
      _DYN_SANITIZE_KEY_AND_ADD2
      /* @min:sanitizeKeyAndAddUniqueness */
    ] = dataSanitizeKeyAndAddUniqueness, _a5.sanitizeKey = dataSanitizeKey, _a5.sanitizeString = dataSanitizeString, _a5.sanitizeUrl = dataSanitizeUrl, _a5.sanitizeMessage = dataSanitizeMessage, _a5[
      _DYN_SANITIZE_EXCEPTION
      /* @min:sanitizeException */
    ] = dataSanitizeException, _a5[
      _DYN_SANITIZE_PROPERTIES
      /* @min:sanitizeProperties */
    ] = dataSanitizeProperties, _a5[
      _DYN_SANITIZE_MEASUREMENT3
      /* @min:sanitizeMeasurements */
    ] = dataSanitizeMeasurements, _a5.sanitizeId = dataSanitizeId, _a5.sanitizeInput = dataSanitizeInput, _a5.padNumber = dsPadNumber, _a5.trim = strTrim, _a5);
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/UrlHelperFuncs.js
function urlParseUrl(url) {
  var anchorIdx = _htmlAnchorIdx;
  var anchorCache = _htmlAnchorElement;
  var tempAnchor = anchorCache[anchorIdx];
  if (!_document.createElement) {
    tempAnchor = { host: urlParseHost(url, true) };
  } else if (!anchorCache[anchorIdx]) {
    tempAnchor = anchorCache[anchorIdx] = _document.createElement("a");
  }
  tempAnchor.href = url;
  anchorIdx++;
  if (anchorIdx >= anchorCache[
    _DYN_LENGTH2
    /* @min:%2elength */
  ]) {
    anchorIdx = 0;
  }
  _htmlAnchorIdx = anchorIdx;
  return tempAnchor;
}
function urlParseHost(url, inclPort) {
  var fullHost = urlParseFullHost(url, inclPort) || "";
  if (fullHost) {
    var match = fullHost.match(/(www\d{0,5}\.)?([^\/:]{1,256})(:\d{1,20})?/i);
    if (match != null && match[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 3 && isString(match[2]) && match[2][
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 0) {
      return match[2] + (match[3] || "");
    }
  }
  return fullHost;
}
function urlParseFullHost(url, inclPort) {
  var result = null;
  if (url) {
    var match = url.match(/(\w{1,150}):\/\/([^\/:]{1,256})(:\d{1,20})?/i);
    if (match != null && match[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 2 && isString(match[2]) && match[2][
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 0) {
      result = match[2] || "";
      if (inclPort && match[
        _DYN_LENGTH2
        /* @min:%2elength */
      ] > 2) {
        var protocol = (match[1] || "")[
          _DYN_TO_LOWER_CASE2
          /* @min:%2etoLowerCase */
        ]();
        var port = match[3] || "";
        if (protocol === "http" && port === ":80") {
          port = "";
        } else if (protocol === "https" && port === ":443") {
          port = "";
        }
        result += port;
      }
    }
  }
  return result;
}
var _document, _htmlAnchorIdx, _htmlAnchorElement;
var init_UrlHelperFuncs = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/UrlHelperFuncs.js"() {
    init_applicationinsights_core_js();
    init_DynamicConstants2();
    _document = getDocument() || {};
    _htmlAnchorIdx = 0;
    _htmlAnchorElement = [null, null, null, null, null];
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Util.js
function isInternalApplicationInsightsEndpoint(endpointUrl) {
  return arrIndexOf(_internalEndpoints, endpointUrl[
    _DYN_TO_LOWER_CASE2
    /* @min:%2etoLowerCase */
  ]()) !== -1;
}
function AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName) {
  var target, name2 = commandName, data = commandName;
  if (absoluteUrl && absoluteUrl[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    var parsedUrl = urlParseUrl(absoluteUrl);
    target = parsedUrl.host;
    if (!name2) {
      if (parsedUrl[
        _DYN_PATHNAME
        /* @min:%2epathname */
      ] != null) {
        var pathName = parsedUrl.pathname[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] === 0 ? "/" : parsedUrl[
          _DYN_PATHNAME
          /* @min:%2epathname */
        ];
        if (pathName.charAt(0) !== "/") {
          pathName = "/" + pathName;
        }
        data = parsedUrl[
          _DYN_PATHNAME
          /* @min:%2epathname */
        ];
        name2 = dataSanitizeString(logger, method ? method + " " + pathName : pathName);
      } else {
        name2 = dataSanitizeString(logger, absoluteUrl);
      }
    }
  } else {
    target = commandName;
    name2 = commandName;
  }
  return {
    target,
    name: name2,
    data
  };
}
var _internalEndpoints;
var init_Util = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Util.js"() {
    init_applicationinsights_core_js();
    init_Constants2();
    init_DataSanitizer();
    init_UrlHelperFuncs();
    init_DynamicConstants2();
    _internalEndpoints = [
      DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH,
      "https://breeze.aimon.applicationinsights.io" + DEFAULT_BREEZE_PATH,
      "https://dc-int.services.visualstudio.com" + DEFAULT_BREEZE_PATH
    ];
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/ConnectionStringParser.js
function parseConnectionString(connectionString) {
  if (!connectionString) {
    return {};
  }
  var kvPairs = connectionString[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ](_FIELDS_SEPARATOR);
  var result = arrReduce(kvPairs, function(fields, kv) {
    var kvParts = kv[
      _DYN_SPLIT2
      /* @min:%2esplit */
    ](_FIELD_KEY_VALUE_SEPARATOR);
    if (kvParts[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] === 2) {
      var key = kvParts[0][
        _DYN_TO_LOWER_CASE2
        /* @min:%2etoLowerCase */
      ]();
      var value = kvParts[1];
      fields[key] = value;
    }
    return fields;
  }, {});
  if (objKeys(result)[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    if (result.endpointsuffix) {
      var locationPrefix = result.location ? result.location + "." : "";
      result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ] = result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ] || "https://" + locationPrefix + "dc." + result.endpointsuffix;
    }
    result[
      _DYN_INGESTIONENDPOINT
      /* @min:%2eingestionendpoint */
    ] = result[
      _DYN_INGESTIONENDPOINT
      /* @min:%2eingestionendpoint */
    ] || DEFAULT_BREEZE_ENDPOINT;
  }
  return result;
}
var _FIELDS_SEPARATOR, _FIELD_KEY_VALUE_SEPARATOR;
var init_ConnectionStringParser = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/ConnectionStringParser.js"() {
    init_applicationinsights_core_js();
    init_Constants2();
    init_DynamicConstants2();
    _FIELDS_SEPARATOR = ";";
    _FIELD_KEY_VALUE_SEPARATOR = "=";
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Envelope.js
var Envelope;
var init_Envelope = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Envelope.js"() {
    init_applicationinsights_core_js();
    init_Constants2();
    init_DynamicConstants2();
    init_DataSanitizer();
    Envelope = /** @class */
    function() {
      function Envelope2(logger, data, name2) {
        var _this = this;
        var _self = this;
        _self.ver = 1;
        _self.sampleRate = 100;
        _self.tags = {};
        _self[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, name2) || strNotSpecified;
        _self.data = data;
        _self.time = toISOString(/* @__PURE__ */ new Date());
        _self.aiDataContract = {
          time: 1,
          iKey: 1,
          name: 1,
          sampleRate: function() {
            return _this.sampleRate === 100 ? 4 : 1;
          },
          tags: 1,
          data: 1
          /* FieldType.Required */
        };
      }
      return Envelope2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Event.js
var Event;
var init_Event = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Event.js"() {
    init_Constants2();
    init_DynamicConstants2();
    init_DataSanitizer();
    Event = /** @class */
    function() {
      function Event2(logger, name2, properties, measurements) {
        this.aiDataContract = {
          ver: 1,
          name: 1,
          properties: 0,
          measurements: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        _self[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, name2) || strNotSpecified;
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
      }
      Event2.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
      Event2.dataType = "EventData";
      return Event2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Exception.js
function _stringify(value, convertToString) {
  var result = value;
  if (result && !isString(result)) {
    if (JSON && JSON[
      _DYN_STRINGIFY
      /* @min:%2estringify */
    ]) {
      result = JSON[
        _DYN_STRINGIFY
        /* @min:%2estringify */
      ](value);
      if (convertToString && (!result || result === "{}")) {
        if (isFunction(value[
          _DYN_TO_STRING
          /* @min:%2etoString */
        ])) {
          result = value[
            _DYN_TO_STRING
            /* @min:%2etoString */
          ]();
        } else {
          result = "" + value;
        }
      }
    } else {
      result = "" + value + " - (Missing JSON.stringify)";
    }
  }
  return result || "";
}
function _formatMessage(theEvent, errorType) {
  var evtMessage = theEvent;
  if (theEvent) {
    if (evtMessage && !isString(evtMessage)) {
      evtMessage = theEvent[strMessage] || theEvent[strDescription] || evtMessage;
    }
    if (evtMessage && !isString(evtMessage)) {
      evtMessage = _stringify(evtMessage, true);
    }
    if (theEvent["filename"]) {
      evtMessage = evtMessage + " @" + (theEvent["filename"] || "") + ":" + (theEvent["lineno"] || "?") + ":" + (theEvent["colno"] || "?");
    }
  }
  if (errorType && errorType !== "String" && errorType !== "Object" && errorType !== "Error" && (evtMessage || "")[
    _DYN_INDEX_OF2
    /* @min:%2eindexOf */
  ](errorType) === -1) {
    evtMessage = errorType + ": " + evtMessage;
  }
  return evtMessage || "";
}
function _isExceptionDetailsInternal(value) {
  try {
    if (isObject(value)) {
      return "hasFullStack" in value && "typeName" in value;
    }
  } catch (e) {
  }
  return false;
}
function _isExceptionInternal(value) {
  try {
    if (isObject(value)) {
      return "ver" in value && "exceptions" in value && "properties" in value;
    }
  } catch (e) {
  }
  return false;
}
function _isStackDetails(details) {
  return details && details.src && isString(details.src) && details.obj && isArray(details.obj);
}
function _convertStackObj(errorStack) {
  var src = errorStack || "";
  if (!isString(src)) {
    if (isString(src[strStack])) {
      src = src[strStack];
    } else {
      src = "" + src;
    }
  }
  var items = src[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ]("\n");
  return {
    src,
    obj: items
  };
}
function _getOperaStack(errorMessage) {
  var stack = [];
  var lines = errorMessage[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ]("\n");
  for (var lp = 0; lp < lines[
    _DYN_LENGTH2
    /* @min:%2elength */
  ]; lp++) {
    var entry = lines[lp];
    if (lines[lp + 1]) {
      entry += "@" + lines[lp + 1];
      lp++;
    }
    stack.push(entry);
  }
  return {
    src: errorMessage,
    obj: stack
  };
}
function _getStackFromErrorObj(errorObj) {
  var details = null;
  if (errorObj) {
    try {
      if (errorObj[strStack]) {
        details = _convertStackObj(errorObj[strStack]);
      } else if (errorObj[strError] && errorObj[strError][strStack]) {
        details = _convertStackObj(errorObj[strError][strStack]);
      } else if (errorObj["exception"] && errorObj.exception[strStack]) {
        details = _convertStackObj(errorObj.exception[strStack]);
      } else if (_isStackDetails(errorObj)) {
        details = errorObj;
      } else if (_isStackDetails(errorObj[strStackDetails])) {
        details = errorObj[strStackDetails];
      } else if (window && window["opera"] && errorObj[strMessage]) {
        details = _getOperaStack(errorObj[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ]);
      } else if (errorObj["reason"] && errorObj.reason[strStack]) {
        details = _convertStackObj(errorObj.reason[strStack]);
      } else if (isString(errorObj)) {
        details = _convertStackObj(errorObj);
      } else {
        var evtMessage = errorObj[strMessage] || errorObj[strDescription] || "";
        if (isString(errorObj[strErrorSrc])) {
          if (evtMessage) {
            evtMessage += "\n";
          }
          evtMessage += " from " + errorObj[strErrorSrc];
        }
        if (evtMessage) {
          details = _convertStackObj(evtMessage);
        }
      }
    } catch (e) {
      details = _convertStackObj(e);
    }
  }
  return details || {
    src: "",
    obj: null
  };
}
function _formatStackTrace(stackDetails) {
  var stack = "";
  if (stackDetails) {
    if (stackDetails.obj) {
      arrForEach(stackDetails.obj, function(entry) {
        stack += entry + "\n";
      });
    } else {
      stack = stackDetails.src || "";
    }
  }
  return stack;
}
function _parseStack(stack) {
  var parsedStack;
  var frames = stack.obj;
  if (frames && frames[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    parsedStack = [];
    var level_1 = 0;
    var totalSizeInBytes_1 = 0;
    arrForEach(frames, function(frame) {
      var theFrame = frame[
        _DYN_TO_STRING
        /* @min:%2etoString */
      ]();
      if (_StackFrame.regex.test(theFrame)) {
        var parsedFrame = new _StackFrame(theFrame, level_1++);
        totalSizeInBytes_1 += parsedFrame[
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        parsedStack.push(parsedFrame);
      }
    });
    var exceptionParsedStackThreshold = 32 * 1024;
    if (totalSizeInBytes_1 > exceptionParsedStackThreshold) {
      var left = 0;
      var right = parsedStack[
        _DYN_LENGTH2
        /* @min:%2elength */
      ] - 1;
      var size = 0;
      var acceptedLeft = left;
      var acceptedRight = right;
      while (left < right) {
        var lSize = parsedStack[left][
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        var rSize = parsedStack[right][
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        size += lSize + rSize;
        if (size > exceptionParsedStackThreshold) {
          var howMany = acceptedRight - acceptedLeft + 1;
          parsedStack.splice(acceptedLeft, howMany);
          break;
        }
        acceptedLeft = left;
        acceptedRight = right;
        left++;
        right--;
      }
    }
  }
  return parsedStack;
}
function _getErrorType(errorType) {
  var typeName = "";
  if (errorType) {
    typeName = errorType.typeName || errorType[
      _DYN_NAME2
      /* @min:%2ename */
    ] || "";
    if (!typeName) {
      try {
        var funcNameRegex = /function (.{1,200})\(/;
        var results = funcNameRegex.exec(errorType.constructor[
          _DYN_TO_STRING
          /* @min:%2etoString */
        ]());
        typeName = results && results[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] > 1 ? results[1] : "";
      } catch (e) {
      }
    }
  }
  return typeName;
}
function _formatErrorCode(errorObj) {
  if (errorObj) {
    try {
      if (!isString(errorObj)) {
        var errorType = _getErrorType(errorObj);
        var result = _stringify(errorObj, false);
        if (!result || result === "{}") {
          if (errorObj[strError]) {
            errorObj = errorObj[strError];
            errorType = _getErrorType(errorObj);
          }
          result = _stringify(errorObj, true);
        }
        if (result[
          _DYN_INDEX_OF2
          /* @min:%2eindexOf */
        ](errorType) !== 0 && errorType !== "String") {
          return errorType + ":" + result;
        }
        return result;
      }
    } catch (e) {
    }
  }
  return "" + (errorObj || "");
}
var NoMethod, strError, strStack, strStackDetails, strErrorSrc, strMessage, strDescription, Exception, _ExceptionDetails, _StackFrame;
var init_Exception = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Exception.js"() {
    init_applicationinsights_shims();
    init_applicationinsights_core_js();
    init_Constants2();
    init_DynamicConstants2();
    init_DataSanitizer();
    NoMethod = "<no_method>";
    strError = "error";
    strStack = "stack";
    strStackDetails = "stackDetails";
    strErrorSrc = "errorSrc";
    strMessage = "message";
    strDescription = "description";
    Exception = /** @class */
    function() {
      function Exception2(logger, exception, properties, measurements, severityLevel, id) {
        this.aiDataContract = {
          ver: 1,
          exceptions: 1,
          severityLevel: 0,
          properties: 0,
          measurements: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        if (!_isExceptionInternal(exception)) {
          if (!properties) {
            properties = {};
          }
          _self[
            _DYN_EXCEPTIONS
            /* @min:%2eexceptions */
          ] = [new _ExceptionDetails(logger, exception, properties)];
          _self[
            _DYN_PROPERTIES
            /* @min:%2eproperties */
          ] = dataSanitizeProperties(logger, properties);
          _self[
            _DYN_MEASUREMENTS
            /* @min:%2emeasurements */
          ] = dataSanitizeMeasurements(logger, measurements);
          if (severityLevel) {
            _self[
              _DYN_SEVERITY_LEVEL
              /* @min:%2eseverityLevel */
            ] = severityLevel;
          }
          if (id) {
            _self.id = id;
          }
        } else {
          _self[
            _DYN_EXCEPTIONS
            /* @min:%2eexceptions */
          ] = exception[
            _DYN_EXCEPTIONS
            /* @min:%2eexceptions */
          ] || [];
          _self[
            _DYN_PROPERTIES
            /* @min:%2eproperties */
          ] = exception[
            _DYN_PROPERTIES
            /* @min:%2eproperties */
          ];
          _self[
            _DYN_MEASUREMENTS
            /* @min:%2emeasurements */
          ] = exception[
            _DYN_MEASUREMENTS
            /* @min:%2emeasurements */
          ];
          if (exception[
            _DYN_SEVERITY_LEVEL
            /* @min:%2eseverityLevel */
          ]) {
            _self[
              _DYN_SEVERITY_LEVEL
              /* @min:%2eseverityLevel */
            ] = exception[
              _DYN_SEVERITY_LEVEL
              /* @min:%2eseverityLevel */
            ];
          }
          if (exception.id) {
            _self.id = exception.id;
          }
          if (exception[
            _DYN_PROBLEM_GROUP
            /* @min:%2eproblemGroup */
          ]) {
            _self[
              _DYN_PROBLEM_GROUP
              /* @min:%2eproblemGroup */
            ] = exception[
              _DYN_PROBLEM_GROUP
              /* @min:%2eproblemGroup */
            ];
          }
          if (!isNullOrUndefined(exception[
            _DYN_IS_MANUAL
            /* @min:%2eisManual */
          ])) {
            _self[
              _DYN_IS_MANUAL
              /* @min:%2eisManual */
            ] = exception[
              _DYN_IS_MANUAL
              /* @min:%2eisManual */
            ];
          }
        }
      }
      Exception2.CreateAutoException = function(message, url, lineNumber, columnNumber, error, evt, stack, errorSrc) {
        var _a7;
        var errorType = _getErrorType(error || evt || message);
        return _a7 = {}, _a7[
          _DYN_MESSAGE2
          /* @min:message */
        ] = _formatMessage(message, errorType), _a7.url = url, _a7.lineNumber = lineNumber, _a7.columnNumber = columnNumber, _a7.error = _formatErrorCode(error || evt || message), _a7.evt = _formatErrorCode(evt || message), _a7[
          _DYN_TYPE_NAME
          /* @min:typeName */
        ] = errorType, _a7.stackDetails = _getStackFromErrorObj(stack || error || evt), _a7.errorSrc = errorSrc, _a7;
      };
      Exception2.CreateFromInterface = function(logger, exception, properties, measurements) {
        var exceptions = exception[
          _DYN_EXCEPTIONS
          /* @min:%2eexceptions */
        ] && arrMap(exception[
          _DYN_EXCEPTIONS
          /* @min:%2eexceptions */
        ], function(ex) {
          return _ExceptionDetails[
            _DYN__CREATE_FROM_INTERFA1
            /* @min:%2eCreateFromInterface */
          ](logger, ex);
        });
        var exceptionData = new Exception2(logger, __assignFn(__assignFn({}, exception), { exceptions }), properties, measurements);
        return exceptionData;
      };
      Exception2.prototype.toInterface = function() {
        var _a7;
        var _b = this, exceptions = _b.exceptions, properties = _b.properties, measurements = _b.measurements, severityLevel = _b.severityLevel, problemGroup = _b.problemGroup, id = _b.id, isManual = _b.isManual;
        var exceptionDetailsInterface = exceptions instanceof Array && arrMap(exceptions, function(exception) {
          return exception.toInterface();
        }) || void 0;
        return _a7 = {
          ver: "4.0"
        }, _a7[
          _DYN_EXCEPTIONS
          /* @min:exceptions */
        ] = exceptionDetailsInterface, _a7.severityLevel = severityLevel, _a7.properties = properties, _a7.measurements = measurements, _a7.problemGroup = problemGroup, _a7.id = id, _a7.isManual = isManual, _a7;
      };
      Exception2.CreateSimpleException = function(message, typeName, assembly, fileName, details, line) {
        var _a7;
        return {
          exceptions: [
            (_a7 = {}, _a7[
              _DYN_HAS_FULL_STACK
              /* @min:hasFullStack */
            ] = true, _a7.message = message, _a7.stack = details, _a7.typeName = typeName, _a7)
          ]
        };
      };
      Exception2.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
      Exception2.dataType = "ExceptionData";
      Exception2.formatError = _formatErrorCode;
      return Exception2;
    }();
    _ExceptionDetails = /** @class */
    function() {
      function _ExceptionDetails2(logger, exception, properties) {
        this.aiDataContract = {
          id: 0,
          outerId: 0,
          typeName: 1,
          message: 1,
          hasFullStack: 0,
          stack: 0,
          parsedStack: 2
          /* FieldType.Array */
        };
        var _self = this;
        if (!_isExceptionDetailsInternal(exception)) {
          var error = exception;
          var evt = error && error.evt;
          if (!isError(error)) {
            error = error[strError] || evt || error;
          }
          _self[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ] = dataSanitizeString(logger, _getErrorType(error)) || strNotSpecified;
          _self[
            _DYN_MESSAGE2
            /* @min:%2emessage */
          ] = dataSanitizeMessage(logger, _formatMessage(exception || error, _self[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ])) || strNotSpecified;
          var stack = exception[strStackDetails] || _getStackFromErrorObj(exception);
          _self[
            _DYN_PARSED_STACK
            /* @min:%2eparsedStack */
          ] = _parseStack(stack);
          if (isArray(_self[
            _DYN_PARSED_STACK
            /* @min:%2eparsedStack */
          ])) {
            arrMap(_self[
              _DYN_PARSED_STACK
              /* @min:%2eparsedStack */
            ], function(frame) {
              frame[
                _DYN_ASSEMBLY
                /* @min:%2eassembly */
              ] = dataSanitizeString(logger, frame[
                _DYN_ASSEMBLY
                /* @min:%2eassembly */
              ]);
              frame[
                _DYN_FILE_NAME
                /* @min:%2efileName */
              ] = dataSanitizeString(logger, frame[
                _DYN_FILE_NAME
                /* @min:%2efileName */
              ]);
            });
          }
          _self[strStack] = dataSanitizeException(logger, _formatStackTrace(stack));
          _self.hasFullStack = isArray(_self.parsedStack) && _self.parsedStack[
            _DYN_LENGTH2
            /* @min:%2elength */
          ] > 0;
          if (properties) {
            properties[
              _DYN_TYPE_NAME
              /* @min:%2etypeName */
            ] = properties[
              _DYN_TYPE_NAME
              /* @min:%2etypeName */
            ] || _self[
              _DYN_TYPE_NAME
              /* @min:%2etypeName */
            ];
          }
        } else {
          _self[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ] = exception[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ];
          _self[
            _DYN_MESSAGE2
            /* @min:%2emessage */
          ] = exception[
            _DYN_MESSAGE2
            /* @min:%2emessage */
          ];
          _self[strStack] = exception[strStack];
          _self[
            _DYN_PARSED_STACK
            /* @min:%2eparsedStack */
          ] = exception[
            _DYN_PARSED_STACK
            /* @min:%2eparsedStack */
          ] || [];
          _self[
            _DYN_HAS_FULL_STACK
            /* @min:%2ehasFullStack */
          ] = exception[
            _DYN_HAS_FULL_STACK
            /* @min:%2ehasFullStack */
          ];
        }
      }
      _ExceptionDetails2.prototype.toInterface = function() {
        var _a7;
        var _self = this;
        var parsedStack = _self[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ] instanceof Array && arrMap(_self[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ], function(frame) {
          return frame.toInterface();
        });
        var exceptionDetailsInterface = (_a7 = {
          id: _self.id,
          outerId: _self.outerId,
          typeName: _self[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ],
          message: _self[
            _DYN_MESSAGE2
            /* @min:%2emessage */
          ],
          hasFullStack: _self[
            _DYN_HAS_FULL_STACK
            /* @min:%2ehasFullStack */
          ],
          stack: _self[strStack]
        }, _a7[
          _DYN_PARSED_STACK
          /* @min:parsedStack */
        ] = parsedStack || void 0, _a7);
        return exceptionDetailsInterface;
      };
      _ExceptionDetails2.CreateFromInterface = function(logger, exception) {
        var parsedStack = exception[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ] instanceof Array && arrMap(exception[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ], function(frame) {
          return _StackFrame[
            _DYN__CREATE_FROM_INTERFA1
            /* @min:%2eCreateFromInterface */
          ](frame);
        }) || exception[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ];
        var exceptionDetails = new _ExceptionDetails2(logger, __assignFn(__assignFn({}, exception), { parsedStack }));
        return exceptionDetails;
      };
      return _ExceptionDetails2;
    }();
    _StackFrame = /** @class */
    function() {
      function _StackFrame2(sourceFrame, level) {
        this.aiDataContract = {
          level: 1,
          method: 1,
          assembly: 0,
          fileName: 0,
          line: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self[
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ] = 0;
        if (typeof sourceFrame === "string") {
          var frame = sourceFrame;
          _self[
            _DYN_LEVEL
            /* @min:%2elevel */
          ] = level;
          _self[
            _DYN_METHOD
            /* @min:%2emethod */
          ] = NoMethod;
          _self[
            _DYN_ASSEMBLY
            /* @min:%2eassembly */
          ] = strTrim(frame);
          _self[
            _DYN_FILE_NAME
            /* @min:%2efileName */
          ] = "";
          _self[
            _DYN_LINE
            /* @min:%2eline */
          ] = 0;
          var matches = frame.match(_StackFrame2.regex);
          if (matches && matches[
            _DYN_LENGTH2
            /* @min:%2elength */
          ] >= 5) {
            _self[
              _DYN_METHOD
              /* @min:%2emethod */
            ] = strTrim(matches[2]) || _self[
              _DYN_METHOD
              /* @min:%2emethod */
            ];
            _self[
              _DYN_FILE_NAME
              /* @min:%2efileName */
            ] = strTrim(matches[4]);
            _self[
              _DYN_LINE
              /* @min:%2eline */
            ] = parseInt(matches[5]) || 0;
          }
        } else {
          _self[
            _DYN_LEVEL
            /* @min:%2elevel */
          ] = sourceFrame[
            _DYN_LEVEL
            /* @min:%2elevel */
          ];
          _self[
            _DYN_METHOD
            /* @min:%2emethod */
          ] = sourceFrame[
            _DYN_METHOD
            /* @min:%2emethod */
          ];
          _self[
            _DYN_ASSEMBLY
            /* @min:%2eassembly */
          ] = sourceFrame[
            _DYN_ASSEMBLY
            /* @min:%2eassembly */
          ];
          _self[
            _DYN_FILE_NAME
            /* @min:%2efileName */
          ] = sourceFrame[
            _DYN_FILE_NAME
            /* @min:%2efileName */
          ];
          _self[
            _DYN_LINE
            /* @min:%2eline */
          ] = sourceFrame[
            _DYN_LINE
            /* @min:%2eline */
          ];
          _self[
            _DYN_SIZE_IN_BYTES
            /* @min:%2esizeInBytes */
          ] = 0;
        }
        _self.sizeInBytes += _self.method[
          _DYN_LENGTH2
          /* @min:%2elength */
        ];
        _self.sizeInBytes += _self.fileName[
          _DYN_LENGTH2
          /* @min:%2elength */
        ];
        _self.sizeInBytes += _self.assembly[
          _DYN_LENGTH2
          /* @min:%2elength */
        ];
        _self[
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ] += _StackFrame2.baseSize;
        _self.sizeInBytes += _self.level.toString()[
          _DYN_LENGTH2
          /* @min:%2elength */
        ];
        _self.sizeInBytes += _self.line.toString()[
          _DYN_LENGTH2
          /* @min:%2elength */
        ];
      }
      _StackFrame2.CreateFromInterface = function(frame) {
        return new _StackFrame2(
          frame,
          null
          /* level is available in frame interface */
        );
      };
      _StackFrame2.prototype.toInterface = function() {
        var _self = this;
        return {
          level: _self[
            _DYN_LEVEL
            /* @min:%2elevel */
          ],
          method: _self[
            _DYN_METHOD
            /* @min:%2emethod */
          ],
          assembly: _self[
            _DYN_ASSEMBLY
            /* @min:%2eassembly */
          ],
          fileName: _self[
            _DYN_FILE_NAME
            /* @min:%2efileName */
          ],
          line: _self[
            _DYN_LINE
            /* @min:%2eline */
          ]
        };
      };
      _StackFrame2.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/;
      _StackFrame2.baseSize = 58;
      return _StackFrame2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataPoint.js
var DataPoint;
var init_DataPoint = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/DataPoint.js"() {
    DataPoint = /** @class */
    function() {
      function DataPoint2() {
        this.aiDataContract = {
          name: 1,
          kind: 0,
          value: 1,
          count: 0,
          min: 0,
          max: 0,
          stdDev: 0
          /* FieldType.Default */
        };
        this.kind = 0;
      }
      return DataPoint2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Metric.js
var Metric;
var init_Metric = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Metric.js"() {
    init_Constants2();
    init_DynamicConstants2();
    init_DataPoint();
    init_DataSanitizer();
    Metric = /** @class */
    function() {
      function Metric2(logger, name2, value, count, min, max, stdDev, properties, measurements) {
        this.aiDataContract = {
          ver: 1,
          metrics: 1,
          properties: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        var dataPoint = new DataPoint();
        dataPoint[
          _DYN_COUNT
          /* @min:%2ecount */
        ] = count > 0 ? count : void 0;
        dataPoint.max = isNaN(max) || max === null ? void 0 : max;
        dataPoint.min = isNaN(min) || min === null ? void 0 : min;
        dataPoint[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, name2) || strNotSpecified;
        dataPoint.value = value;
        dataPoint.stdDev = isNaN(stdDev) || stdDev === null ? void 0 : stdDev;
        _self.metrics = [dataPoint];
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
      }
      Metric2.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
      Metric2.dataType = "MetricData";
      return Metric2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageView.js
var PageView;
var init_PageView = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageView.js"() {
    init_Constants2();
    init_HelperFuncs2();
    init_DynamicConstants2();
    init_DataSanitizer();
    PageView = /** @class */
    function() {
      function PageView2(logger, name2, url, durationMs, properties, measurements, id) {
        this.aiDataContract = {
          ver: 1,
          name: 0,
          url: 0,
          duration: 0,
          properties: 0,
          measurements: 0,
          id: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        _self.id = dataSanitizeId(logger, id);
        _self.url = dataSanitizeUrl(logger, url);
        _self[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, name2) || strNotSpecified;
        if (!isNaN(durationMs)) {
          _self[
            _DYN_DURATION
            /* @min:%2eduration */
          ] = msToTimeSpan(durationMs);
        }
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
      }
      PageView2.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
      PageView2.dataType = "PageviewData";
      return PageView2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/RemoteDependencyData.js
var RemoteDependencyData;
var init_RemoteDependencyData = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/RemoteDependencyData.js"() {
    init_HelperFuncs2();
    init_Util();
    init_DynamicConstants2();
    init_DataSanitizer();
    RemoteDependencyData = /** @class */
    function() {
      function RemoteDependencyData2(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
        if (requestAPI === void 0) {
          requestAPI = "Ajax";
        }
        this.aiDataContract = {
          id: 1,
          ver: 1,
          name: 0,
          resultCode: 0,
          duration: 0,
          success: 0,
          data: 0,
          target: 0,
          type: 0,
          properties: 0,
          measurements: 0,
          kind: 0,
          value: 0,
          count: 0,
          min: 0,
          max: 0,
          stdDev: 0,
          dependencyKind: 0,
          dependencySource: 0,
          commandName: 0,
          dependencyTypeName: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        _self.id = id;
        _self[
          _DYN_DURATION
          /* @min:%2eduration */
        ] = msToTimeSpan(value);
        _self.success = success;
        _self.resultCode = resultCode + "";
        _self.type = dataSanitizeString(logger, requestAPI);
        var dependencyFields = AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName);
        _self.data = dataSanitizeUrl(logger, commandName) || dependencyFields.data;
        _self.target = dataSanitizeString(logger, dependencyFields.target);
        if (correlationContext) {
          _self.target = "".concat(_self.target, " | ").concat(correlationContext);
        }
        _self[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, dependencyFields[
          _DYN_NAME2
          /* @min:%2ename */
        ]);
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
      }
      RemoteDependencyData2.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
      RemoteDependencyData2.dataType = "RemoteDependencyData";
      return RemoteDependencyData2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Trace.js
var Trace;
var init_Trace = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Trace.js"() {
    init_Constants2();
    init_DynamicConstants2();
    init_DataSanitizer();
    Trace = /** @class */
    function() {
      function Trace2(logger, message, severityLevel, properties, measurements) {
        this.aiDataContract = {
          ver: 1,
          message: 1,
          severityLevel: 0,
          properties: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        message = message || strNotSpecified;
        _self[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ] = dataSanitizeMessage(logger, message);
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
        if (severityLevel) {
          _self[
            _DYN_SEVERITY_LEVEL
            /* @min:%2eseverityLevel */
          ] = severityLevel;
        }
      }
      Trace2.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
      Trace2.dataType = "MessageData";
      return Trace2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageViewPerformance.js
var PageViewPerformance;
var init_PageViewPerformance = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/PageViewPerformance.js"() {
    init_Constants2();
    init_DynamicConstants2();
    init_DataSanitizer();
    PageViewPerformance = /** @class */
    function() {
      function PageViewPerformance2(logger, name2, url, unused, properties, measurements, cs4BaseData) {
        this.aiDataContract = {
          ver: 1,
          name: 0,
          url: 0,
          duration: 0,
          perfTotal: 0,
          networkConnect: 0,
          sentRequest: 0,
          receivedResponse: 0,
          domProcessing: 0,
          properties: 0,
          measurements: 0
          /* FieldType.Default */
        };
        var _self = this;
        _self.ver = 2;
        _self.url = dataSanitizeUrl(logger, url);
        _self[
          _DYN_NAME2
          /* @min:%2ename */
        ] = dataSanitizeString(logger, name2) || strNotSpecified;
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
        if (cs4BaseData) {
          _self.domProcessing = cs4BaseData.domProcessing;
          _self[
            _DYN_DURATION
            /* @min:%2eduration */
          ] = cs4BaseData[
            _DYN_DURATION
            /* @min:%2eduration */
          ];
          _self.networkConnect = cs4BaseData.networkConnect;
          _self.perfTotal = cs4BaseData.perfTotal;
          _self[
            _DYN_RECEIVED_RESPONSE
            /* @min:%2ereceivedResponse */
          ] = cs4BaseData[
            _DYN_RECEIVED_RESPONSE
            /* @min:%2ereceivedResponse */
          ];
          _self.sentRequest = cs4BaseData.sentRequest;
        }
      }
      PageViewPerformance2.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
      PageViewPerformance2.dataType = "PageviewPerformanceData";
      return PageViewPerformance2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Data.js
var Data;
var init_Data = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Telemetry/Common/Data.js"() {
    Data = /** @class */
    function() {
      function Data2(baseType, data) {
        this.aiDataContract = {
          baseType: 1,
          baseData: 1
          /* FieldType.Required */
        };
        this.baseType = baseType;
        this.baseData = data;
      }
      return Data2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/SeverityLevel.js
var SeverityLevel;
var init_SeverityLevel = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/SeverityLevel.js"() {
    init_applicationinsights_core_js();
    SeverityLevel = createEnumStyle({
      Verbose: 0,
      Information: 1,
      Warning: 2,
      Error: 3,
      Critical: 4
      /* eSeverityLevel.Critical */
    });
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/ContextTagKeys.js
function _aiNameFunc(baseName) {
  var aiName = "ai." + baseName + ".";
  return function(name2) {
    return aiName + name2;
  };
}
var _aiApplication, _aiDevice, _aiLocation, _aiOperation, _aiSession, _aiUser, _aiCloud, _aiInternal, ContextTagKeys;
var init_ContextTagKeys = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/Contracts/ContextTagKeys.js"() {
    init_applicationinsights_shims();
    init_applicationinsights_core_js();
    _aiApplication = _aiNameFunc("application");
    _aiDevice = _aiNameFunc("device");
    _aiLocation = _aiNameFunc("location");
    _aiOperation = _aiNameFunc("operation");
    _aiSession = _aiNameFunc("session");
    _aiUser = _aiNameFunc("user");
    _aiCloud = _aiNameFunc("cloud");
    _aiInternal = _aiNameFunc("internal");
    ContextTagKeys = /** @class */
    function(_super) {
      __extendsFn(ContextTagKeys2, _super);
      function ContextTagKeys2() {
        return _super.call(this) || this;
      }
      return ContextTagKeys2;
    }(createClassFromInterface({
      applicationVersion: _aiApplication("ver"),
      applicationBuild: _aiApplication("build"),
      applicationTypeId: _aiApplication("typeId"),
      applicationId: _aiApplication("applicationId"),
      applicationLayer: _aiApplication("layer"),
      deviceId: _aiDevice("id"),
      deviceIp: _aiDevice("ip"),
      deviceLanguage: _aiDevice("language"),
      deviceLocale: _aiDevice("locale"),
      deviceModel: _aiDevice("model"),
      deviceFriendlyName: _aiDevice("friendlyName"),
      deviceNetwork: _aiDevice("network"),
      deviceNetworkName: _aiDevice("networkName"),
      deviceOEMName: _aiDevice("oemName"),
      deviceOS: _aiDevice("os"),
      deviceOSVersion: _aiDevice("osVersion"),
      deviceRoleInstance: _aiDevice("roleInstance"),
      deviceRoleName: _aiDevice("roleName"),
      deviceScreenResolution: _aiDevice("screenResolution"),
      deviceType: _aiDevice("type"),
      deviceMachineName: _aiDevice("machineName"),
      deviceVMName: _aiDevice("vmName"),
      deviceBrowser: _aiDevice("browser"),
      deviceBrowserVersion: _aiDevice("browserVersion"),
      locationIp: _aiLocation("ip"),
      locationCountry: _aiLocation("country"),
      locationProvince: _aiLocation("province"),
      locationCity: _aiLocation("city"),
      operationId: _aiOperation("id"),
      operationName: _aiOperation("name"),
      operationParentId: _aiOperation("parentId"),
      operationRootId: _aiOperation("rootId"),
      operationSyntheticSource: _aiOperation("syntheticSource"),
      operationCorrelationVector: _aiOperation("correlationVector"),
      sessionId: _aiSession("id"),
      sessionIsFirst: _aiSession("isFirst"),
      sessionIsNew: _aiSession("isNew"),
      userAccountAcquisitionDate: _aiUser("accountAcquisitionDate"),
      userAccountId: _aiUser("accountId"),
      userAgent: _aiUser("userAgent"),
      userId: _aiUser("id"),
      userStoreRegion: _aiUser("storeRegion"),
      userAuthUserId: _aiUser("authUserId"),
      userAnonymousUserAcquisitionDate: _aiUser("anonUserAcquisitionDate"),
      userAuthenticatedUserAcquisitionDate: _aiUser("authUserAcquisitionDate"),
      cloudName: _aiCloud("name"),
      cloudRole: _aiCloud("role"),
      cloudRoleVer: _aiCloud("roleVer"),
      cloudRoleInstance: _aiCloud("roleInstance"),
      cloudEnvironment: _aiCloud("environment"),
      cloudLocation: _aiCloud("location"),
      cloudDeploymentUnit: _aiCloud("deploymentUnit"),
      internalNodeName: _aiInternal("nodeName"),
      internalSdkVersion: _aiInternal("sdkVersion"),
      internalAgentVersion: _aiInternal("agentVersion"),
      internalSnippet: _aiInternal("snippet"),
      internalSdkSrc: _aiInternal("sdkSrc")
    }));
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/PartAExtensions.js
var CtxTagKeys;
var init_PartAExtensions = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/Interfaces/PartAExtensions.js"() {
    init_ContextTagKeys();
    CtxTagKeys = new ContextTagKeys();
  }
});

// node_modules/@microsoft/applicationinsights-common/dist-esm/applicationinsights-common.js
var BreezeChannelIdentifier;
var init_applicationinsights_common = __esm({
  "node_modules/@microsoft/applicationinsights-common/dist-esm/applicationinsights-common.js"() {
    init_Util();
    init_ConnectionStringParser();
    init_RequestResponseHeaders();
    init_Constants2();
    init_Envelope();
    init_Event();
    init_Exception();
    init_Metric();
    init_PageView();
    init_RemoteDependencyData();
    init_Trace();
    init_PageViewPerformance();
    init_Data();
    init_SeverityLevel();
    init_ContextTagKeys();
    init_DataSanitizer();
    init_PartAExtensions();
    init_StorageHelperFuncs();
    BreezeChannelIdentifier = "AppInsightsChannelPlugin";
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/InternalConstants.js
var STR_DURATION;
var init_InternalConstants4 = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/InternalConstants.js"() {
    STR_DURATION = "duration";
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/__DynamicConstants.js
var _DYN_TAGS, _DYN_DEVICE_TYPE, _DYN_DATA, _DYN_NAME3, _DYN_TRACE_ID2, _DYN_LENGTH3, _DYN_STRINGIFY2, _DYN_MEASUREMENTS2, _DYN_DATA_TYPE, _DYN_ENVELOPE_TYPE, _DYN_TO_STRING2, _DYN_ON_LINE, _DYN_IS_ONLINE, _DYN_ENQUEUE, _DYN_COUNT2, _DYN_PUSH2, _DYN_EMIT_LINE_DELIMITED_0, _DYN_CLEAR, _DYN_BATCH_PAYLOADS, _DYN_MARK_AS_SENT, _DYN_CLEAR_SENT, _DYN_BUFFER_OVERRIDE, _DYN__BUFFER__KEY, _DYN__SENT__BUFFER__KEY, _DYN__MAX__BUFFER__SIZE, _DYN_NAME_PREFIX, _DYN_MAX_BATCH_SIZE_IN_BY1, _DYN_TRIGGER_SEND, _DYN_DIAG_LOG2, _DYN_ONUNLOAD_DISABLE_BEA2, _DYN_IS_BEACON_API_DISABL3, _DYN__SENDER, _DYN__SENDER_CONFIG, _DYN_ENABLE_SESSION_STORA4, _DYN__BUFFER, _DYN_SAMPLING_PERCENTAGE, _DYN_INSTRUMENTATION_KEY2, _DYN_ENDPOINT_URL, _DYN_CUSTOM_HEADERS, _DYN_DISABLE_XHR, _DYN_ONUNLOAD_DISABLE_FET5, _DYN_DISABLE_TELEMETRY, _DYN_BASE_TYPE, _DYN_SAMPLE_RATE, _DYN_CONVERT_UNDEFINED, _DYN__XHR_READY_STATE_CHA6, _DYN__ON_ERROR, _DYN__ON_PARTIAL_SUCCESS, _DYN__ON_SUCCESS, _DYN_ITEMS_ACCEPTED, _DYN_ITEMS_RECEIVED, _DYN_IS_RETRY_DISABLED, _DYN_SET_REQUEST_HEADER, _DYN_MAX_BATCH_INTERVAL, _DYN_EVENTS_SEND_REQUEST, _DYN_DISABLE_INSTRUMENTAT7, _DYN_GET_SAMPLING_SCORE, _DYN_GET_HASH_CODE_SCORE;
var init_DynamicConstants3 = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/__DynamicConstants.js"() {
    _DYN_TAGS = "tags";
    _DYN_DEVICE_TYPE = "deviceType";
    _DYN_DATA = "data";
    _DYN_NAME3 = "name";
    _DYN_TRACE_ID2 = "traceID";
    _DYN_LENGTH3 = "length";
    _DYN_STRINGIFY2 = "stringify";
    _DYN_MEASUREMENTS2 = "measurements";
    _DYN_DATA_TYPE = "dataType";
    _DYN_ENVELOPE_TYPE = "envelopeType";
    _DYN_TO_STRING2 = "toString";
    _DYN_ON_LINE = "onLine";
    _DYN_IS_ONLINE = "isOnline";
    _DYN_ENQUEUE = "enqueue";
    _DYN_COUNT2 = "count";
    _DYN_PUSH2 = "push";
    _DYN_EMIT_LINE_DELIMITED_0 = "emitLineDelimitedJson";
    _DYN_CLEAR = "clear";
    _DYN_BATCH_PAYLOADS = "batchPayloads";
    _DYN_MARK_AS_SENT = "markAsSent";
    _DYN_CLEAR_SENT = "clearSent";
    _DYN_BUFFER_OVERRIDE = "bufferOverride";
    _DYN__BUFFER__KEY = "BUFFER_KEY";
    _DYN__SENT__BUFFER__KEY = "SENT_BUFFER_KEY";
    _DYN__MAX__BUFFER__SIZE = "MAX_BUFFER_SIZE";
    _DYN_NAME_PREFIX = "namePrefix";
    _DYN_MAX_BATCH_SIZE_IN_BY1 = "maxBatchSizeInBytes";
    _DYN_TRIGGER_SEND = "triggerSend";
    _DYN_DIAG_LOG2 = "diagLog";
    _DYN_ONUNLOAD_DISABLE_BEA2 = "onunloadDisableBeacon";
    _DYN_IS_BEACON_API_DISABL3 = "isBeaconApiDisabled";
    _DYN__SENDER = "_sender";
    _DYN__SENDER_CONFIG = "_senderConfig";
    _DYN_ENABLE_SESSION_STORA4 = "enableSessionStorageBuffer";
    _DYN__BUFFER = "_buffer";
    _DYN_SAMPLING_PERCENTAGE = "samplingPercentage";
    _DYN_INSTRUMENTATION_KEY2 = "instrumentationKey";
    _DYN_ENDPOINT_URL = "endpointUrl";
    _DYN_CUSTOM_HEADERS = "customHeaders";
    _DYN_DISABLE_XHR = "disableXhr";
    _DYN_ONUNLOAD_DISABLE_FET5 = "onunloadDisableFetch";
    _DYN_DISABLE_TELEMETRY = "disableTelemetry";
    _DYN_BASE_TYPE = "baseType";
    _DYN_SAMPLE_RATE = "sampleRate";
    _DYN_CONVERT_UNDEFINED = "convertUndefined";
    _DYN__XHR_READY_STATE_CHA6 = "_xhrReadyStateChange";
    _DYN__ON_ERROR = "_onError";
    _DYN__ON_PARTIAL_SUCCESS = "_onPartialSuccess";
    _DYN__ON_SUCCESS = "_onSuccess";
    _DYN_ITEMS_ACCEPTED = "itemsAccepted";
    _DYN_ITEMS_RECEIVED = "itemsReceived";
    _DYN_IS_RETRY_DISABLED = "isRetryDisabled";
    _DYN_SET_REQUEST_HEADER = "setRequestHeader";
    _DYN_MAX_BATCH_INTERVAL = "maxBatchInterval";
    _DYN_EVENTS_SEND_REQUEST = "eventsSendRequest";
    _DYN_DISABLE_INSTRUMENTAT7 = "disableInstrumentationKeyValidation";
    _DYN_GET_SAMPLING_SCORE = "getSamplingScore";
    _DYN_GET_HASH_CODE_SCORE = "getHashCodeScore";
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/EnvelopeCreator.js
function _setValueIf(target, field, value) {
  return setValue(target, field, value, isTruthy);
}
function _extractPartAExtensions(logger, item, env2) {
  var envTags = env2[
    _DYN_TAGS
    /* @min:%2etags */
  ] = env2[
    _DYN_TAGS
    /* @min:%2etags */
  ] || {};
  var itmExt = item.ext = item.ext || {};
  var itmTags = item[
    _DYN_TAGS
    /* @min:%2etags */
  ] = item[
    _DYN_TAGS
    /* @min:%2etags */
  ] || [];
  var extUser = itmExt.user;
  if (extUser) {
    _setValueIf(envTags, CtxTagKeys.userAuthUserId, extUser.authId);
    _setValueIf(envTags, CtxTagKeys.userId, extUser.id || extUser.localId);
  }
  var extApp = itmExt.app;
  if (extApp) {
    _setValueIf(envTags, CtxTagKeys.sessionId, extApp.sesId);
  }
  var extDevice = itmExt.device;
  if (extDevice) {
    _setValueIf(envTags, CtxTagKeys.deviceId, extDevice.id || extDevice.localId);
    _setValueIf(envTags, CtxTagKeys[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ], extDevice.deviceClass);
    _setValueIf(envTags, CtxTagKeys.deviceIp, extDevice.ip);
    _setValueIf(envTags, CtxTagKeys.deviceModel, extDevice.model);
    _setValueIf(envTags, CtxTagKeys[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ], extDevice[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ]);
  }
  var web = item.ext.web;
  if (web) {
    _setValueIf(envTags, CtxTagKeys.deviceLanguage, web.browserLang);
    _setValueIf(envTags, CtxTagKeys.deviceBrowserVersion, web.browserVer);
    _setValueIf(envTags, CtxTagKeys.deviceBrowser, web.browser);
    var envData = env2[
      _DYN_DATA
      /* @min:%2edata */
    ] = env2[
      _DYN_DATA
      /* @min:%2edata */
    ] || {};
    var envBaseData = envData[strBaseData] = envData[strBaseData] || {};
    var envProps = envBaseData[strProperties] = envBaseData[strProperties] || {};
    _setValueIf(envProps, "domain", web.domain);
    _setValueIf(envProps, "isManual", web.isManual ? strTrue : null);
    _setValueIf(envProps, "screenRes", web.screenRes);
    _setValueIf(envProps, "userConsent", web.userConsent ? strTrue : null);
  }
  var extOs = itmExt.os;
  if (extOs) {
    _setValueIf(envTags, CtxTagKeys.deviceOS, extOs[
      _DYN_NAME3
      /* @min:%2ename */
    ]);
  }
  var extTrace = itmExt.trace;
  if (extTrace) {
    _setValueIf(envTags, CtxTagKeys.operationParentId, extTrace.parentID);
    _setValueIf(envTags, CtxTagKeys.operationName, dataSanitizeString(logger, extTrace[
      _DYN_NAME3
      /* @min:%2ename */
    ]));
    _setValueIf(envTags, CtxTagKeys.operationId, extTrace[
      _DYN_TRACE_ID2
      /* @min:%2etraceID */
    ]);
  }
  var tgs = {};
  for (var i = itmTags[
    _DYN_LENGTH3
    /* @min:%2elength */
  ] - 1; i >= 0; i--) {
    var tg = itmTags[i];
    objForEachKey(tg, function(key, value) {
      tgs[key] = value;
    });
    itmTags.splice(i, 1);
  }
  objForEachKey(itmTags, function(tg2, value) {
    tgs[tg2] = value;
  });
  var theTags = __assignFn(__assignFn({}, envTags), tgs);
  if (!theTags[CtxTagKeys.internalSdkVersion]) {
    theTags[CtxTagKeys.internalSdkVersion] = dataSanitizeString(logger, "javascript:".concat(EnvelopeCreator.Version), 64);
  }
  env2[
    _DYN_TAGS
    /* @min:%2etags */
  ] = optimizeObject(theTags);
}
function _extractPropsAndMeasurements(data, properties, measurements) {
  if (!isNullOrUndefined(data)) {
    objForEachKey(data, function(key, value) {
      if (isNumber(value)) {
        measurements[key] = value;
      } else if (isString(value)) {
        properties[key] = value;
      } else if (hasJSON()) {
        properties[key] = getJSON()[
          _DYN_STRINGIFY2
          /* @min:%2estringify */
        ](value);
      }
    });
  }
}
function _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue) {
  if (!isNullOrUndefined(properties)) {
    objForEachKey(properties, function(key, value) {
      properties[key] = value || customUndefinedValue;
    });
  }
}
function _createEnvelope(logger, envelopeType, telemetryItem, data) {
  var envelope = new Envelope(logger, data, envelopeType);
  _setValueIf(envelope, "sampleRate", telemetryItem[SampleRate]);
  if ((telemetryItem[strBaseData] || {}).startTime) {
    envelope.time = toISOString(telemetryItem[strBaseData].startTime);
  }
  envelope.iKey = telemetryItem.iKey;
  var iKeyNoDashes = telemetryItem.iKey.replace(/-/g, "");
  envelope[
    _DYN_NAME3
    /* @min:%2ename */
  ] = envelope[
    _DYN_NAME3
    /* @min:%2ename */
  ].replace("{0}", iKeyNoDashes);
  _extractPartAExtensions(logger, telemetryItem, envelope);
  telemetryItem[
    _DYN_TAGS
    /* @min:%2etags */
  ] = telemetryItem[
    _DYN_TAGS
    /* @min:%2etags */
  ] || [];
  return optimizeObject(envelope);
}
function EnvelopeCreatorInit(logger, telemetryItem) {
  if (isNullOrUndefined(telemetryItem[strBaseData])) {
    _throwInternal(logger, 1, 46, "telemetryItem.baseData cannot be null.");
  }
}
function DependencyEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customMeasurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  var customProperties = telemetryItem[strBaseData][strProperties] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var bd = telemetryItem[strBaseData];
  if (isNullOrUndefined(bd)) {
    _warnToConsole(logger, "Invalid input for dependency data");
    return null;
  }
  var method = bd[strProperties] && bd[strProperties][HttpMethod] ? bd[strProperties][HttpMethod] : "GET";
  var remoteDepData = new RemoteDependencyData(logger, bd.id, bd.target, bd[
    _DYN_NAME3
    /* @min:%2ename */
  ], bd[
    STR_DURATION
    /* @min:%2eduration */
  ], bd.success, bd.responseCode, method, bd.type, bd.correlationContext, customProperties, customMeasurements);
  var data = new Data(RemoteDependencyData[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], remoteDepData);
  return _createEnvelope(logger, RemoteDependencyData[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function EventEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customProperties = {};
  var customMeasurements = {};
  if (telemetryItem[strBaseType] !== Event[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ]) {
    customProperties["baseTypeSource"] = telemetryItem[strBaseType];
  }
  if (telemetryItem[strBaseType] === Event[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ]) {
    customProperties = telemetryItem[strBaseData][strProperties] || {};
    customMeasurements = telemetryItem[strBaseData][
      _DYN_MEASUREMENTS2
      /* @min:%2emeasurements */
    ] || {};
  } else {
    if (telemetryItem[strBaseData]) {
      _extractPropsAndMeasurements(telemetryItem[strBaseData], customProperties, customMeasurements);
    }
  }
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var eventName = telemetryItem[strBaseData][
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var eventData = new Event(logger, eventName, customProperties, customMeasurements);
  var data = new Data(Event[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], eventData);
  return _createEnvelope(logger, Event[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function ExceptionEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customMeasurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  var customProperties = telemetryItem[strBaseData][strProperties] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var bd = telemetryItem[strBaseData];
  var exData = Exception.CreateFromInterface(logger, bd, customProperties, customMeasurements);
  var data = new Data(Exception[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], exData);
  return _createEnvelope(logger, Exception[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function MetricEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var baseData = telemetryItem[strBaseData];
  var props = baseData[strProperties] || {};
  var measurements = baseData[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], props, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(props, customUndefinedValue);
  }
  var baseMetricData = new Metric(logger, baseData[
    _DYN_NAME3
    /* @min:%2ename */
  ], baseData.average, baseData.sampleCount, baseData.min, baseData.max, baseData.stdDev, props, measurements);
  var data = new Data(Metric[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], baseMetricData);
  return _createEnvelope(logger, Metric[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function PageViewEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var duration;
  var baseData = telemetryItem[strBaseData];
  if (!isNullOrUndefined(baseData) && !isNullOrUndefined(baseData[strProperties]) && !isNullOrUndefined(baseData[strProperties][STR_DURATION])) {
    duration = baseData[strProperties][STR_DURATION];
    delete baseData[strProperties][STR_DURATION];
  } else if (!isNullOrUndefined(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ]) && !isNullOrUndefined(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ][STR_DURATION])) {
    duration = telemetryItem[
      _DYN_DATA
      /* @min:%2edata */
    ][STR_DURATION];
    delete telemetryItem[
      _DYN_DATA
      /* @min:%2edata */
    ][STR_DURATION];
  }
  var bd = telemetryItem[strBaseData];
  var currentContextId;
  if (((telemetryItem.ext || {}).trace || {})[
    _DYN_TRACE_ID2
    /* @min:%2etraceID */
  ]) {
    currentContextId = telemetryItem.ext.trace[
      _DYN_TRACE_ID2
      /* @min:%2etraceID */
    ];
  }
  var id = bd.id || currentContextId;
  var name2 = bd[
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var url = bd.uri;
  var properties = bd[strProperties] || {};
  var measurements = bd[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  if (!isNullOrUndefined(bd.refUri)) {
    properties["refUri"] = bd.refUri;
  }
  if (!isNullOrUndefined(bd.pageType)) {
    properties["pageType"] = bd.pageType;
  }
  if (!isNullOrUndefined(bd.isLoggedIn)) {
    properties["isLoggedIn"] = bd.isLoggedIn[
      _DYN_TO_STRING2
      /* @min:%2etoString */
    ]();
  }
  if (!isNullOrUndefined(bd[strProperties])) {
    var pageTags = bd[strProperties];
    objForEachKey(pageTags, function(key, value) {
      properties[key] = value;
    });
  }
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], properties, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue);
  }
  var pageViewData = new PageView(logger, name2, url, duration, properties, measurements, id);
  var data = new Data(PageView[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], pageViewData);
  return _createEnvelope(logger, PageView[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function PageViewPerformanceEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var bd = telemetryItem[strBaseData];
  var name2 = bd[
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var url = bd.uri || bd.url;
  var properties = bd[strProperties] || {};
  var measurements = bd[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], properties, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue);
  }
  var baseData = new PageViewPerformance(logger, name2, url, void 0, properties, measurements, bd);
  var data = new Data(PageViewPerformance[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], baseData);
  return _createEnvelope(logger, PageViewPerformance[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function TraceEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var message = telemetryItem[strBaseData].message;
  var severityLevel = telemetryItem[strBaseData].severityLevel;
  var props = telemetryItem[strBaseData][strProperties] || {};
  var measurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA
    /* @min:%2edata */
  ], props, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(props, customUndefinedValue);
  }
  var baseData = new Trace(logger, message, severityLevel, props, measurements);
  var data = new Data(Trace[
    _DYN_DATA_TYPE
    /* @min:%2edataType */
  ], baseData);
  return _createEnvelope(logger, Trace[
    _DYN_ENVELOPE_TYPE
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
var strBaseType, strBaseData, strProperties, strTrue, EnvelopeCreator;
var init_EnvelopeCreator = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/EnvelopeCreator.js"() {
    init_applicationinsights_shims();
    init_applicationinsights_common();
    init_applicationinsights_core_js();
    init_InternalConstants4();
    init_DynamicConstants3();
    strBaseType = "baseType";
    strBaseData = "baseData";
    strProperties = "properties";
    strTrue = "true";
    EnvelopeCreator = {
      Version: "2.8.15"
    };
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Offline.js
function _disableEvents(target, evtNamespace) {
  eventOff(target, null, null, evtNamespace);
}
function createOfflineListener(parentEvtNamespace) {
  var _a7;
  var _document2 = getDocument();
  var _navigator = getNavigator();
  var _isListening = false;
  var _onlineStatus = true;
  var _evtNamespace = mergeEvtNamespace(createUniqueNamespace("OfflineListener"), parentEvtNamespace);
  try {
    if (_enableEvents(getWindow())) {
      _isListening = true;
    }
    if (_document2) {
      var target = _document2.body || _document2;
      if (target.ononline) {
        if (_enableEvents(target)) {
          _isListening = true;
        }
      }
    }
    if (_isListening) {
      if (_navigator && !isNullOrUndefined(_navigator[
        _DYN_ON_LINE
        /* @min:%2eonLine */
      ])) {
        _onlineStatus = _navigator[
          _DYN_ON_LINE
          /* @min:%2eonLine */
        ];
      }
    }
  } catch (e) {
    _isListening = false;
  }
  function _enableEvents(target2) {
    var enabled = false;
    if (target2) {
      enabled = eventOn(target2, "online", _setOnline, _evtNamespace);
      if (enabled) {
        eventOn(target2, "offline", _setOffline, _evtNamespace);
      }
    }
    return enabled;
  }
  function _setOnline() {
    _onlineStatus = true;
  }
  function _setOffline() {
    _onlineStatus = false;
  }
  function _isOnline() {
    var result = true;
    if (_isListening) {
      result = _onlineStatus;
    } else if (_navigator && !isNullOrUndefined(_navigator[
      _DYN_ON_LINE
      /* @min:%2eonLine */
    ])) {
      result = _navigator[
        _DYN_ON_LINE
        /* @min:%2eonLine */
      ];
    }
    return result;
  }
  function _unload() {
    var win = getWindow();
    if (win && _isListening) {
      _disableEvents(win, _evtNamespace);
      if (_document2) {
        var target2 = _document2.body || _document2;
        if (!isUndefined(target2.ononline)) {
          _disableEvents(target2, _evtNamespace);
        }
      }
      _isListening = false;
    }
  }
  return _a7 = {}, _a7[
    _DYN_IS_ONLINE
    /* @min:isOnline */
  ] = _isOnline, _a7.isListening = function() {
    return _isListening;
  }, _a7.unload = _unload, _a7;
}
var init_Offline = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Offline.js"() {
    init_applicationinsights_core_js();
    init_DynamicConstants3();
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/SendBuffer.js
var BaseSendBuffer, ArraySendBuffer, SessionStorageSendBuffer;
var init_SendBuffer = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/SendBuffer.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_applicationinsights_common();
    init_applicationinsights_core_js();
    init_DynamicConstants3();
    BaseSendBuffer = /** @class */
    function() {
      function BaseSendBuffer2(logger, config) {
        var _buffer = [];
        var _bufferFullMessageSent = false;
        this._get = function() {
          return _buffer;
        };
        this._set = function(buffer) {
          _buffer = buffer;
          return _buffer;
        };
        dynamicProto(BaseSendBuffer2, this, function(_self) {
          _self[
            _DYN_ENQUEUE
            /* @min:%2eenqueue */
          ] = function(payload) {
            if (_self[
              _DYN_COUNT2
              /* @min:%2ecount */
            ]() >= config.eventsLimitInMem()) {
              if (!_bufferFullMessageSent) {
                _throwInternal(logger, 2, 105, "Maximum in-memory buffer size reached: " + _self[
                  _DYN_COUNT2
                  /* @min:%2ecount */
                ](), true);
                _bufferFullMessageSent = true;
              }
              return;
            }
            _buffer[
              _DYN_PUSH2
              /* @min:%2epush */
            ](payload);
          };
          _self[
            _DYN_COUNT2
            /* @min:%2ecount */
          ] = function() {
            return _buffer[
              _DYN_LENGTH3
              /* @min:%2elength */
            ];
          };
          _self.size = function() {
            var size = _buffer[
              _DYN_LENGTH3
              /* @min:%2elength */
            ];
            for (var lp = 0; lp < _buffer[
              _DYN_LENGTH3
              /* @min:%2elength */
            ]; lp++) {
              size += _buffer[lp][
                _DYN_LENGTH3
                /* @min:%2elength */
              ];
            }
            if (!config[
              _DYN_EMIT_LINE_DELIMITED_0
              /* @min:%2eemitLineDelimitedJson */
            ]()) {
              size += 2;
            }
            return size;
          };
          _self[
            _DYN_CLEAR
            /* @min:%2eclear */
          ] = function() {
            _buffer = [];
            _bufferFullMessageSent = false;
          };
          _self.getItems = function() {
            return _buffer.slice(0);
          };
          _self[
            _DYN_BATCH_PAYLOADS
            /* @min:%2ebatchPayloads */
          ] = function(payload) {
            if (payload && payload[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              var batch = config[
                _DYN_EMIT_LINE_DELIMITED_0
                /* @min:%2eemitLineDelimitedJson */
              ]() ? payload.join("\n") : "[" + payload.join(",") + "]";
              return batch;
            }
            return null;
          };
        });
      }
      BaseSendBuffer2.__ieDyn = 1;
      return BaseSendBuffer2;
    }();
    ArraySendBuffer = /** @class */
    function(_super) {
      __extendsFn(ArraySendBuffer2, _super);
      function ArraySendBuffer2(logger, config) {
        var _this = _super.call(this, logger, config) || this;
        dynamicProto(ArraySendBuffer2, _this, function(_self, _base) {
          _self[
            _DYN_MARK_AS_SENT
            /* @min:%2emarkAsSent */
          ] = function(payload) {
            _base[
              _DYN_CLEAR
              /* @min:%2eclear */
            ]();
          };
          _self[
            _DYN_CLEAR_SENT
            /* @min:%2eclearSent */
          ] = function(payload) {
          };
        });
        return _this;
      }
      ArraySendBuffer2.__ieDyn = 1;
      return ArraySendBuffer2;
    }(BaseSendBuffer);
    SessionStorageSendBuffer = /** @class */
    function(_super) {
      __extendsFn(SessionStorageSendBuffer2, _super);
      function SessionStorageSendBuffer2(logger, config) {
        var _this = _super.call(this, logger, config) || this;
        var _bufferFullMessageSent = false;
        var _a7 = config[
          _DYN_BUFFER_OVERRIDE
          /* @min:%2ebufferOverride */
        ]() || { getItem: utlGetSessionStorage, setItem: utlSetSessionStorage }, getItem = _a7.getItem, setItem = _a7.setItem;
        dynamicProto(SessionStorageSendBuffer2, _this, function(_self, _base) {
          var bufferItems = _getBuffer(SessionStorageSendBuffer2[
            _DYN__BUFFER__KEY
            /* @min:%2eBUFFER_KEY */
          ]);
          var notDeliveredItems = _getBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ]);
          var buffer = _self._set(bufferItems.concat(notDeliveredItems));
          if (buffer[
            _DYN_LENGTH3
            /* @min:%2elength */
          ] > SessionStorageSendBuffer2[
            _DYN__MAX__BUFFER__SIZE
            /* @min:%2eMAX_BUFFER_SIZE */
          ]) {
            buffer[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] = SessionStorageSendBuffer2[
              _DYN__MAX__BUFFER__SIZE
              /* @min:%2eMAX_BUFFER_SIZE */
            ];
          }
          _setBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ], []);
          _setBuffer(SessionStorageSendBuffer2[
            _DYN__BUFFER__KEY
            /* @min:%2eBUFFER_KEY */
          ], buffer);
          _self[
            _DYN_ENQUEUE
            /* @min:%2eenqueue */
          ] = function(payload) {
            if (_self[
              _DYN_COUNT2
              /* @min:%2ecount */
            ]() >= SessionStorageSendBuffer2[
              _DYN__MAX__BUFFER__SIZE
              /* @min:%2eMAX_BUFFER_SIZE */
            ]) {
              if (!_bufferFullMessageSent) {
                _throwInternal(logger, 2, 67, "Maximum buffer size reached: " + _self[
                  _DYN_COUNT2
                  /* @min:%2ecount */
                ](), true);
                _bufferFullMessageSent = true;
              }
              return;
            }
            _base[
              _DYN_ENQUEUE
              /* @min:%2eenqueue */
            ](payload);
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__BUFFER__KEY
              /* @min:%2eBUFFER_KEY */
            ], _self._get());
          };
          _self[
            _DYN_CLEAR
            /* @min:%2eclear */
          ] = function() {
            _base[
              _DYN_CLEAR
              /* @min:%2eclear */
            ]();
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__BUFFER__KEY
              /* @min:%2eBUFFER_KEY */
            ], _self._get());
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__SENT__BUFFER__KEY
              /* @min:%2eSENT_BUFFER_KEY */
            ], []);
            _bufferFullMessageSent = false;
          };
          _self[
            _DYN_MARK_AS_SENT
            /* @min:%2emarkAsSent */
          ] = function(payload) {
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__BUFFER__KEY
              /* @min:%2eBUFFER_KEY */
            ], _self._set(_removePayloadsFromBuffer(payload, _self._get())));
            var sentElements = _getBuffer(SessionStorageSendBuffer2[
              _DYN__SENT__BUFFER__KEY
              /* @min:%2eSENT_BUFFER_KEY */
            ]);
            if (sentElements instanceof Array && payload instanceof Array) {
              sentElements = sentElements.concat(payload);
              if (sentElements[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] > SessionStorageSendBuffer2[
                _DYN__MAX__BUFFER__SIZE
                /* @min:%2eMAX_BUFFER_SIZE */
              ]) {
                _throwInternal(logger, 1, 67, "Sent buffer reached its maximum size: " + sentElements[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ], true);
                sentElements[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ] = SessionStorageSendBuffer2[
                  _DYN__MAX__BUFFER__SIZE
                  /* @min:%2eMAX_BUFFER_SIZE */
                ];
              }
              _setBuffer(SessionStorageSendBuffer2[
                _DYN__SENT__BUFFER__KEY
                /* @min:%2eSENT_BUFFER_KEY */
              ], sentElements);
            }
          };
          _self[
            _DYN_CLEAR_SENT
            /* @min:%2eclearSent */
          ] = function(payload) {
            var sentElements = _getBuffer(SessionStorageSendBuffer2[
              _DYN__SENT__BUFFER__KEY
              /* @min:%2eSENT_BUFFER_KEY */
            ]);
            sentElements = _removePayloadsFromBuffer(payload, sentElements);
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__SENT__BUFFER__KEY
              /* @min:%2eSENT_BUFFER_KEY */
            ], sentElements);
          };
          function _removePayloadsFromBuffer(payloads, buffer2) {
            var remaining = [];
            arrForEach(buffer2, function(value) {
              if (!isFunction(value) && arrIndexOf(payloads, value) === -1) {
                remaining[
                  _DYN_PUSH2
                  /* @min:%2epush */
                ](value);
              }
            });
            return remaining;
          }
          function _getBuffer(key) {
            var prefixedKey = key;
            try {
              prefixedKey = config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ] && config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ]() ? config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ]() + "_" + prefixedKey : prefixedKey;
              var bufferJson = getItem(logger, prefixedKey);
              if (bufferJson) {
                var buffer_1 = getJSON().parse(bufferJson);
                if (isString(buffer_1)) {
                  buffer_1 = getJSON().parse(buffer_1);
                }
                if (buffer_1 && isArray(buffer_1)) {
                  return buffer_1;
                }
              }
            } catch (e) {
              _throwInternal(logger, 1, 42, " storage key: " + prefixedKey + ", " + getExceptionName(e), { exception: dumpObj(e) });
            }
            return [];
          }
          function _setBuffer(key, buffer2) {
            var prefixedKey = key;
            try {
              prefixedKey = config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ] && config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ]() ? config[
                _DYN_NAME_PREFIX
                /* @min:%2enamePrefix */
              ]() + "_" + prefixedKey : prefixedKey;
              var bufferJson = JSON[
                _DYN_STRINGIFY2
                /* @min:%2estringify */
              ](buffer2);
              setItem(logger, prefixedKey, bufferJson);
            } catch (e) {
              setItem(logger, prefixedKey, JSON[
                _DYN_STRINGIFY2
                /* @min:%2estringify */
              ]([]));
              _throwInternal(logger, 2, 41, " storage key: " + prefixedKey + ", " + getExceptionName(e) + ". Buffer cleared", { exception: dumpObj(e) });
            }
          }
        });
        return _this;
      }
      SessionStorageSendBuffer2.BUFFER_KEY = "AI_buffer";
      SessionStorageSendBuffer2.SENT_BUFFER_KEY = "AI_sentBuffer";
      SessionStorageSendBuffer2.MAX_BUFFER_SIZE = 2e3;
      return SessionStorageSendBuffer2;
    }(BaseSendBuffer);
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Serializer.js
var Serializer2;
var init_Serializer2 = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Serializer.js"() {
    init_dynamicproto_js();
    init_applicationinsights_core_js();
    init_DynamicConstants3();
    Serializer2 = /** @class */
    function() {
      function Serializer3(logger) {
        dynamicProto(Serializer3, this, function(_self) {
          _self.serialize = function(input) {
            var output = _serializeObject(input, "root");
            try {
              return getJSON()[
                _DYN_STRINGIFY2
                /* @min:%2estringify */
              ](output);
            } catch (e) {
              _throwInternal(logger, 1, 48, e && isFunction(e[
                _DYN_TO_STRING2
                /* @min:%2etoString */
              ]) ? e[
                _DYN_TO_STRING2
                /* @min:%2etoString */
              ]() : "Error serializing object", null, true);
            }
          };
          function _serializeObject(source, name2) {
            var circularReferenceCheck = "__aiCircularRefCheck";
            var output = {};
            if (!source) {
              _throwInternal(logger, 1, 48, "cannot serialize object because it is null or undefined", { name: name2 }, true);
              return output;
            }
            if (source[circularReferenceCheck]) {
              _throwInternal(logger, 2, 50, "Circular reference detected while serializing object", { name: name2 }, true);
              return output;
            }
            if (!source.aiDataContract) {
              if (name2 === "measurements") {
                output = _serializeStringMap(source, "number", name2);
              } else if (name2 === "properties") {
                output = _serializeStringMap(source, "string", name2);
              } else if (name2 === "tags") {
                output = _serializeStringMap(source, "string", name2);
              } else if (isArray(source)) {
                output = _serializeArray(source, name2);
              } else {
                _throwInternal(logger, 2, 49, "Attempting to serialize an object which does not implement ISerializable", { name: name2 }, true);
                try {
                  getJSON()[
                    _DYN_STRINGIFY2
                    /* @min:%2estringify */
                  ](source);
                  output = source;
                } catch (e) {
                  _throwInternal(logger, 1, 48, e && isFunction(e[
                    _DYN_TO_STRING2
                    /* @min:%2etoString */
                  ]) ? e[
                    _DYN_TO_STRING2
                    /* @min:%2etoString */
                  ]() : "Error serializing object", null, true);
                }
              }
              return output;
            }
            source[circularReferenceCheck] = true;
            objForEachKey(source.aiDataContract, function(field, contract) {
              var isRequired = isFunction(contract) ? contract() & 1 : contract & 1;
              var isHidden = isFunction(contract) ? contract() & 4 : contract & 4;
              var isArray2 = contract & 2;
              var isPresent = source[field] !== void 0;
              var isObj = isObject(source[field]) && source[field] !== null;
              if (isRequired && !isPresent && !isArray2) {
                _throwInternal(logger, 1, 24, "Missing required field specification. The field is required but not present on source", { field, name: name2 });
              } else if (!isHidden) {
                var value = void 0;
                if (isObj) {
                  if (isArray2) {
                    value = _serializeArray(source[field], field);
                  } else {
                    value = _serializeObject(source[field], field);
                  }
                } else {
                  value = source[field];
                }
                if (value !== void 0) {
                  output[field] = value;
                }
              }
            });
            delete source[circularReferenceCheck];
            return output;
          }
          function _serializeArray(sources, name2) {
            var output;
            if (!!sources) {
              if (!isArray(sources)) {
                _throwInternal(logger, 1, 54, "This field was specified as an array in the contract but the item is not an array.\r\n", { name: name2 }, true);
              } else {
                output = [];
                for (var i = 0; i < sources[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ]; i++) {
                  var source = sources[i];
                  var item = _serializeObject(source, name2 + "[" + i + "]");
                  output[
                    _DYN_PUSH2
                    /* @min:%2epush */
                  ](item);
                }
              }
            }
            return output;
          }
          function _serializeStringMap(map, expectedType, name2) {
            var output;
            if (map) {
              output = {};
              objForEachKey(map, function(field, value) {
                if (expectedType === "string") {
                  if (value === void 0) {
                    output[field] = "undefined";
                  } else if (value === null) {
                    output[field] = "null";
                  } else if (!value[
                    _DYN_TO_STRING2
                    /* @min:%2etoString */
                  ]) {
                    output[field] = "invalid field: toString() is not defined.";
                  } else {
                    output[field] = value[
                      _DYN_TO_STRING2
                      /* @min:%2etoString */
                    ]();
                  }
                } else if (expectedType === "number") {
                  if (value === void 0) {
                    output[field] = "undefined";
                  } else if (value === null) {
                    output[field] = "null";
                  } else {
                    var num = parseFloat(value);
                    if (isNaN(num)) {
                      output[field] = "NaN";
                    } else {
                      output[field] = num;
                    }
                  }
                } else {
                  output[field] = "invalid field: " + name2 + " is of unknown type.";
                  _throwInternal(logger, 1, output[field], null, true);
                }
              });
            }
            return output;
          }
        });
      }
      Serializer3.__ieDyn = 1;
      return Serializer3;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/HashCodeScoreGenerator.js
var MIN_INPUT_LENGTH, HashCodeScoreGenerator;
var init_HashCodeScoreGenerator = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/HashCodeScoreGenerator.js"() {
    init_DynamicConstants3();
    MIN_INPUT_LENGTH = 8;
    HashCodeScoreGenerator = /** @class */
    function() {
      function HashCodeScoreGenerator2() {
      }
      HashCodeScoreGenerator2.prototype.getHashCodeScore = function(key) {
        var score = this.getHashCode(key) / HashCodeScoreGenerator2.INT_MAX_VALUE;
        return score * 100;
      };
      HashCodeScoreGenerator2.prototype.getHashCode = function(input) {
        if (input === "") {
          return 0;
        }
        while (input[
          _DYN_LENGTH3
          /* @min:%2elength */
        ] < MIN_INPUT_LENGTH) {
          input = input.concat(input);
        }
        var hash = 5381;
        for (var i = 0; i < input[
          _DYN_LENGTH3
          /* @min:%2elength */
        ]; ++i) {
          hash = (hash << 5) + hash + input.charCodeAt(i);
          hash = hash & hash;
        }
        return Math.abs(hash);
      };
      HashCodeScoreGenerator2.INT_MAX_VALUE = 2147483647;
      return HashCodeScoreGenerator2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/SamplingScoreGenerator.js
var SamplingScoreGenerator;
var init_SamplingScoreGenerator = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/SamplingScoreGenerators/SamplingScoreGenerator.js"() {
    init_applicationinsights_common();
    init_DynamicConstants3();
    init_HashCodeScoreGenerator();
    SamplingScoreGenerator = /** @class */
    function() {
      function SamplingScoreGenerator2() {
        var _self = this;
        var hashCodeGenerator = new HashCodeScoreGenerator();
        var keys = new ContextTagKeys();
        _self[
          _DYN_GET_SAMPLING_SCORE
          /* @min:%2egetSamplingScore */
        ] = function(item) {
          var score = 0;
          if (item[
            _DYN_TAGS
            /* @min:%2etags */
          ] && item[
            _DYN_TAGS
            /* @min:%2etags */
          ][keys.userId]) {
            score = hashCodeGenerator.getHashCodeScore(item[
              _DYN_TAGS
              /* @min:%2etags */
            ][keys.userId]);
          } else if (item.ext && item.ext.user && item.ext.user.id) {
            score = hashCodeGenerator[
              _DYN_GET_HASH_CODE_SCORE
              /* @min:%2egetHashCodeScore */
            ](item.ext.user.id);
          } else if (item[
            _DYN_TAGS
            /* @min:%2etags */
          ] && item[
            _DYN_TAGS
            /* @min:%2etags */
          ][keys.operationId]) {
            score = hashCodeGenerator.getHashCodeScore(item[
              _DYN_TAGS
              /* @min:%2etags */
            ][keys.operationId]);
          } else if (item.ext && item.ext.telemetryTrace && item.ext.telemetryTrace[
            _DYN_TRACE_ID2
            /* @min:%2etraceID */
          ]) {
            score = hashCodeGenerator.getHashCodeScore(item.ext.telemetryTrace[
              _DYN_TRACE_ID2
              /* @min:%2etraceID */
            ]);
          } else {
            score = Math.random() * 100;
          }
          return score;
        };
      }
      return SamplingScoreGenerator2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/Sample.js
var Sample;
var init_Sample = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/TelemetryProcessors/Sample.js"() {
    init_applicationinsights_common();
    init_applicationinsights_core_js();
    init_DynamicConstants3();
    init_SamplingScoreGenerator();
    Sample = /** @class */
    function() {
      function Sample2(sampleRate, logger) {
        this.INT_MAX_VALUE = 2147483647;
        var _logger = logger || safeGetLogger(null);
        if (sampleRate > 100 || sampleRate < 0) {
          _logger.throwInternal(2, 58, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", { samplingRate: sampleRate }, true);
          sampleRate = 100;
        }
        this[
          _DYN_SAMPLE_RATE
          /* @min:%2esampleRate */
        ] = sampleRate;
        this.samplingScoreGenerator = new SamplingScoreGenerator();
      }
      Sample2.prototype.isSampledIn = function(envelope) {
        var samplingPercentage = this[
          _DYN_SAMPLE_RATE
          /* @min:%2esampleRate */
        ];
        var isSampledIn = false;
        if (samplingPercentage === null || samplingPercentage === void 0 || samplingPercentage >= 100) {
          return true;
        } else if (envelope.baseType === Metric[
          _DYN_DATA_TYPE
          /* @min:%2edataType */
        ]) {
          return true;
        }
        isSampledIn = this.samplingScoreGenerator[
          _DYN_GET_SAMPLING_SCORE
          /* @min:%2egetSamplingScore */
        ](envelope) < samplingPercentage;
        return isSampledIn;
      };
      return Sample2;
    }();
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Sender.js
function _getResponseText2(xhr) {
  try {
    return xhr.responseText;
  } catch (e) {
  }
  return null;
}
function _getDefaultAppInsightsChannelConfig() {
  var _a7;
  var defaultValue;
  var defaultCustomHeaders;
  return _a7 = {
    endpointUrl: function() {
      return DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH;
    }
  }, _a7[
    _DYN_EMIT_LINE_DELIMITED_0
    /* @min:emitLineDelimitedJson */
  ] = function() {
    return false;
  }, _a7[
    _DYN_MAX_BATCH_INTERVAL
    /* @min:maxBatchInterval */
  ] = function() {
    return 15e3;
  }, _a7[
    _DYN_MAX_BATCH_SIZE_IN_BY1
    /* @min:maxBatchSizeInBytes */
  ] = function() {
    return 102400;
  }, _a7[
    _DYN_DISABLE_TELEMETRY
    /* @min:disableTelemetry */
  ] = function() {
    return false;
  }, _a7[
    _DYN_ENABLE_SESSION_STORA4
    /* @min:enableSessionStorageBuffer */
  ] = function() {
    return true;
  }, _a7[
    _DYN_BUFFER_OVERRIDE
    /* @min:bufferOverride */
  ] = function() {
    return false;
  }, _a7[
    _DYN_IS_RETRY_DISABLED
    /* @min:isRetryDisabled */
  ] = function() {
    return false;
  }, _a7[
    _DYN_IS_BEACON_API_DISABL3
    /* @min:isBeaconApiDisabled */
  ] = function() {
    return true;
  }, _a7[
    _DYN_DISABLE_XHR
    /* @min:disableXhr */
  ] = function() {
    return false;
  }, _a7[
    _DYN_ONUNLOAD_DISABLE_FET5
    /* @min:onunloadDisableFetch */
  ] = function() {
    return false;
  }, _a7[
    _DYN_ONUNLOAD_DISABLE_BEA2
    /* @min:onunloadDisableBeacon */
  ] = function() {
    return false;
  }, _a7[
    _DYN_INSTRUMENTATION_KEY2
    /* @min:instrumentationKey */
  ] = function() {
    return defaultValue;
  }, _a7[
    _DYN_NAME_PREFIX
    /* @min:namePrefix */
  ] = function() {
    return defaultValue;
  }, _a7[
    _DYN_SAMPLING_PERCENTAGE
    /* @min:samplingPercentage */
  ] = function() {
    return 100;
  }, _a7[
    _DYN_CUSTOM_HEADERS
    /* @min:customHeaders */
  ] = function() {
    return defaultCustomHeaders;
  }, _a7[
    _DYN_CONVERT_UNDEFINED
    /* @min:convertUndefined */
  ] = function() {
    return defaultValue;
  }, _a7.eventsLimitInMem = function() {
    return 1e4;
  }, _a7;
}
var _a6, FetchSyncRequestSizeLimitBytes, EnvelopeTypeCreator, Sender;
var init_Sender = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/Sender.js"() {
    init_applicationinsights_shims();
    init_dynamicproto_js();
    init_applicationinsights_common();
    init_applicationinsights_core_js();
    init_EnvelopeCreator();
    init_Offline();
    init_SendBuffer();
    init_Serializer2();
    init_Sample();
    init_DynamicConstants3();
    FetchSyncRequestSizeLimitBytes = 65e3;
    EnvelopeTypeCreator = (_a6 = {}, _a6[Event.dataType] = EventEnvelopeCreator, _a6[Trace.dataType] = TraceEnvelopeCreator, _a6[PageView.dataType] = PageViewEnvelopeCreator, _a6[PageViewPerformance.dataType] = PageViewPerformanceEnvelopeCreator, _a6[Exception.dataType] = ExceptionEnvelopeCreator, _a6[Metric.dataType] = MetricEnvelopeCreator, _a6[RemoteDependencyData.dataType] = DependencyEnvelopeCreator, _a6);
    Sender = /** @class */
    function(_super) {
      __extendsFn(Sender2, _super);
      function Sender2() {
        var _this = _super.call(this) || this;
        _this.priority = 1001;
        _this.identifier = BreezeChannelIdentifier;
        _this._senderConfig = _getDefaultAppInsightsChannelConfig();
        var _consecutiveErrors;
        var _retryAt;
        var _lastSend;
        var _paused;
        var _timeoutHandle;
        var _serializer;
        var _stamp_specific_redirects;
        var _headers;
        var _syncFetchPayload = 0;
        var _fallbackSender;
        var _syncUnloadSender;
        var _offlineListener;
        var _evtNamespace;
        dynamicProto(Sender2, _this, function(_self, _base) {
          _initDefaults();
          _self.pause = function() {
            _clearScheduledTimer();
            _paused = true;
          };
          _self.resume = function() {
            if (_paused) {
              _paused = false;
              _retryAt = null;
              if (_self._buffer.size() > _self._senderConfig[
                _DYN_MAX_BATCH_SIZE_IN_BY1
                /* @min:%2emaxBatchSizeInBytes */
              ]()) {
                _self[
                  _DYN_TRIGGER_SEND
                  /* @min:%2etriggerSend */
                ](
                  true,
                  null,
                  10
                  /* SendRequestReason.MaxBatchSize */
                );
              }
              _setupTimer();
            }
          };
          _self.flush = function(isAsync, callBack, sendReason) {
            if (isAsync === void 0) {
              isAsync = true;
            }
            if (!_paused) {
              _clearScheduledTimer();
              try {
                _self[
                  _DYN_TRIGGER_SEND
                  /* @min:%2etriggerSend */
                ](
                  isAsync,
                  null,
                  sendReason || 1
                  /* SendRequestReason.ManualFlush */
                );
              } catch (e) {
                _throwInternal(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), 1, 22, "flush failed, telemetry will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
              }
            }
          };
          _self.onunloadFlush = function() {
            if (!_paused) {
              if ((_self._senderConfig[
                _DYN_ONUNLOAD_DISABLE_BEA2
                /* @min:%2eonunloadDisableBeacon */
              ]() === false || _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_IS_BEACON_API_DISABL3
                /* @min:%2eisBeaconApiDisabled */
              ]() === false) && isBeaconsSupported()) {
                try {
                  _self[
                    _DYN_TRIGGER_SEND
                    /* @min:%2etriggerSend */
                  ](
                    true,
                    _doUnloadSend,
                    2
                    /* SendRequestReason.Unload */
                  );
                } catch (e) {
                  _throwInternal(_self[
                    _DYN_DIAG_LOG2
                    /* @min:%2ediagLog */
                  ](), 1, 20, "failed to flush with beacon sender on page unload, telemetry will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
                }
              } else {
                _self.flush();
              }
            }
          };
          _self.addHeader = function(name2, value) {
            _headers[name2] = value;
          };
          _self.initialize = function(config, core, extensions2, pluginChain) {
            if (_self.isInitialized()) {
              _throwInternal(_self[
                _DYN_DIAG_LOG2
                /* @min:%2ediagLog */
              ](), 1, 28, "Sender is already initialized");
            }
            _base.initialize(config, core, extensions2, pluginChain);
            var ctx = _self._getTelCtx();
            var identifier = _self.identifier;
            _serializer = new Serializer2(core.logger);
            _consecutiveErrors = 0;
            _retryAt = null;
            _lastSend = 0;
            _self[
              _DYN__SENDER
              /* @min:%2e_sender */
            ] = null;
            _stamp_specific_redirects = 0;
            var diagLog = _self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ]();
            _evtNamespace = mergeEvtNamespace(createUniqueNamespace("Sender"), core.evtNamespace && core.evtNamespace());
            _offlineListener = createOfflineListener(_evtNamespace);
            var defaultConfig = _getDefaultAppInsightsChannelConfig();
            objForEachKey(defaultConfig, function(field, value) {
              _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][field] = function() {
                var theValue = ctx.getConfig(identifier, field, value());
                if (!theValue && field === "endpointUrl") {
                  theValue = value();
                }
                return theValue;
              };
            });
            if (config.storagePrefix) {
              utlSetStoragePrefix(config.storagePrefix);
            }
            var useSessionStorage = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENABLE_SESSION_STORA4
              /* @min:%2eenableSessionStorageBuffer */
            ]() && !!(_self._senderConfig[
              _DYN_BUFFER_OVERRIDE
              /* @min:%2ebufferOverride */
            ]() || utlCanUseSessionStorage());
            _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ] = useSessionStorage ? new SessionStorageSendBuffer(diagLog, _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ]) : new ArraySendBuffer(diagLog, _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ]);
            _self._sample = new Sample(_self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_SAMPLING_PERCENTAGE
              /* @min:%2esamplingPercentage */
            ](), diagLog);
            if (!_validateInstrumentationKey(config)) {
              _throwInternal(diagLog, 1, 100, "Invalid Instrumentation key " + config[
                _DYN_INSTRUMENTATION_KEY2
                /* @min:%2einstrumentationKey */
              ]);
            }
            if (!isInternalApplicationInsightsEndpoint(_self._senderConfig.endpointUrl()) && _self._senderConfig.customHeaders() && _self._senderConfig.customHeaders()[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              arrForEach(_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_CUSTOM_HEADERS
                /* @min:%2ecustomHeaders */
              ](), function(customHeader) {
                _this.addHeader(customHeader.header, customHeader.value);
              });
            }
            var senderConfig = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ];
            var sendPostFunc = null;
            if (!senderConfig[
              _DYN_DISABLE_XHR
              /* @min:%2edisableXhr */
            ]() && useXDomainRequest()) {
              sendPostFunc = _xdrSender;
            } else if (!senderConfig[
              _DYN_DISABLE_XHR
              /* @min:%2edisableXhr */
            ]() && isXhrSupported()) {
              sendPostFunc = _xhrSender;
            }
            if (!sendPostFunc && isFetchSupported()) {
              sendPostFunc = _fetchSender;
            }
            _fallbackSender = sendPostFunc || _xhrSender;
            if (!senderConfig[
              _DYN_IS_BEACON_API_DISABL3
              /* @min:%2eisBeaconApiDisabled */
            ]() && isBeaconsSupported()) {
              sendPostFunc = _beaconSender;
            }
            _self[
              _DYN__SENDER
              /* @min:%2e_sender */
            ] = sendPostFunc || _xhrSender;
            if (!senderConfig[
              _DYN_ONUNLOAD_DISABLE_FET5
              /* @min:%2eonunloadDisableFetch */
            ]() && isFetchSupported(true)) {
              _syncUnloadSender = _fetchKeepAliveSender;
            } else if (isBeaconsSupported()) {
              _syncUnloadSender = _beaconSender;
            } else if (!senderConfig[
              _DYN_DISABLE_XHR
              /* @min:%2edisableXhr */
            ]() && useXDomainRequest()) {
              _syncUnloadSender = _xdrSender;
            } else if (!senderConfig[
              _DYN_DISABLE_XHR
              /* @min:%2edisableXhr */
            ]() && isXhrSupported()) {
              _syncUnloadSender = _xhrSender;
            } else {
              _syncUnloadSender = _fallbackSender;
            }
          };
          _self.processTelemetry = function(telemetryItem, itemCtx) {
            itemCtx = _self._getTelCtx(itemCtx);
            var diagLogger = itemCtx[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ]();
            try {
              if (_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_DISABLE_TELEMETRY
                /* @min:%2edisableTelemetry */
              ]()) {
                return;
              }
              if (!telemetryItem) {
                _throwInternal(diagLogger, 1, 7, "Cannot send empty telemetry");
                return;
              }
              if (telemetryItem.baseData && !telemetryItem[
                _DYN_BASE_TYPE
                /* @min:%2ebaseType */
              ]) {
                _throwInternal(diagLogger, 1, 70, "Cannot send telemetry without baseData and baseType");
                return;
              }
              if (!telemetryItem[
                _DYN_BASE_TYPE
                /* @min:%2ebaseType */
              ]) {
                telemetryItem[
                  _DYN_BASE_TYPE
                  /* @min:%2ebaseType */
                ] = "EventData";
              }
              if (!_self[
                _DYN__SENDER
                /* @min:%2e_sender */
              ]) {
                _throwInternal(diagLogger, 1, 28, "Sender was not initialized");
                return;
              }
              if (!_isSampledIn(telemetryItem)) {
                _throwInternal(diagLogger, 2, 33, "Telemetry item was sampled out and not sent", { SampleRate: _self._sample[
                  _DYN_SAMPLE_RATE
                  /* @min:%2esampleRate */
                ] });
                return;
              } else {
                telemetryItem[SampleRate] = _self._sample[
                  _DYN_SAMPLE_RATE
                  /* @min:%2esampleRate */
                ];
              }
              var convertUndefined = _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_CONVERT_UNDEFINED
                /* @min:%2econvertUndefined */
              ]() || void 0;
              var defaultEnvelopeIkey = telemetryItem.iKey || _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_INSTRUMENTATION_KEY2
                /* @min:%2einstrumentationKey */
              ]();
              var aiEnvelope_1 = Sender2.constructEnvelope(telemetryItem, defaultEnvelopeIkey, diagLogger, convertUndefined);
              if (!aiEnvelope_1) {
                _throwInternal(diagLogger, 1, 47, "Unable to create an AppInsights envelope");
                return;
              }
              var doNotSendItem_1 = false;
              if (telemetryItem[
                _DYN_TAGS
                /* @min:%2etags */
              ] && telemetryItem[
                _DYN_TAGS
                /* @min:%2etags */
              ][ProcessLegacy]) {
                arrForEach(telemetryItem[
                  _DYN_TAGS
                  /* @min:%2etags */
                ][ProcessLegacy], function(callBack) {
                  try {
                    if (callBack && callBack(aiEnvelope_1) === false) {
                      doNotSendItem_1 = true;
                      _warnToConsole(diagLogger, "Telemetry processor check returns false");
                    }
                  } catch (e) {
                    _throwInternal(diagLogger, 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + getExceptionName(e), { exception: dumpObj(e) }, true);
                  }
                });
                delete telemetryItem[
                  _DYN_TAGS
                  /* @min:%2etags */
                ][ProcessLegacy];
              }
              if (doNotSendItem_1) {
                return;
              }
              var payload = _serializer.serialize(aiEnvelope_1);
              var buffer = _self[
                _DYN__BUFFER
                /* @min:%2e_buffer */
              ];
              var bufferSize = buffer.size();
              if (bufferSize + payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] > _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_MAX_BATCH_SIZE_IN_BY1
                /* @min:%2emaxBatchSizeInBytes */
              ]()) {
                if (!_offlineListener || _offlineListener[
                  _DYN_IS_ONLINE
                  /* @min:%2eisOnline */
                ]()) {
                  _self[
                    _DYN_TRIGGER_SEND
                    /* @min:%2etriggerSend */
                  ](
                    true,
                    null,
                    10
                    /* SendRequestReason.MaxBatchSize */
                  );
                }
              }
              buffer[
                _DYN_ENQUEUE
                /* @min:%2eenqueue */
              ](payload);
              _setupTimer();
            } catch (e) {
              _throwInternal(diagLogger, 2, 12, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + getExceptionName(e), { exception: dumpObj(e) });
            }
            _self.processNext(telemetryItem, itemCtx);
          };
          _self[
            _DYN__XHR_READY_STATE_CHA6
            /* @min:%2e_xhrReadyStateChange */
          ] = function(xhr, payload, countOfItemsInPayload) {
            if (xhr.readyState === 4) {
              _checkResponsStatus(xhr.status, payload, xhr.responseURL, countOfItemsInPayload, _formatErrorMessageXhr(xhr), _getResponseText2(xhr) || xhr.response);
            }
          };
          _self[
            _DYN_TRIGGER_SEND
            /* @min:%2etriggerSend */
          ] = function(async, forcedSender, sendReason) {
            if (async === void 0) {
              async = true;
            }
            if (!_paused) {
              try {
                var buffer = _self[
                  _DYN__BUFFER
                  /* @min:%2e_buffer */
                ];
                if (!_self[
                  _DYN__SENDER_CONFIG
                  /* @min:%2e_senderConfig */
                ][
                  _DYN_DISABLE_TELEMETRY
                  /* @min:%2edisableTelemetry */
                ]()) {
                  if (buffer[
                    _DYN_COUNT2
                    /* @min:%2ecount */
                  ]() > 0) {
                    var payload = buffer.getItems();
                    _notifySendRequest(sendReason || 0, async);
                    if (forcedSender) {
                      forcedSender.call(_self, payload, async);
                    } else {
                      _self[
                        _DYN__SENDER
                        /* @min:%2e_sender */
                      ](payload, async);
                    }
                  }
                  _lastSend = +/* @__PURE__ */ new Date();
                } else {
                  buffer[
                    _DYN_CLEAR
                    /* @min:%2eclear */
                  ]();
                }
                _clearScheduledTimer();
              } catch (e) {
                var ieVer = getIEVersion();
                if (!ieVer || ieVer > 9) {
                  _throwInternal(_self[
                    _DYN_DIAG_LOG2
                    /* @min:%2ediagLog */
                  ](), 1, 40, "Telemetry transmission failed, some telemetry will be lost: " + getExceptionName(e), { exception: dumpObj(e) });
                }
              }
            }
          };
          _self._doTeardown = function(unloadCtx, unloadState) {
            _self.onunloadFlush();
            _offlineListener.unload();
            _initDefaults();
          };
          _self[
            _DYN__ON_ERROR
            /* @min:%2e_onError */
          ] = function(payload, message, event) {
            _throwInternal(_self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), 2, 26, "Failed to send telemetry.", { message });
            _self._buffer && _self._buffer[
              _DYN_CLEAR_SENT
              /* @min:%2eclearSent */
            ](payload);
          };
          _self[
            _DYN__ON_PARTIAL_SUCCESS
            /* @min:%2e_onPartialSuccess */
          ] = function(payload, results) {
            var failed = [];
            var retry = [];
            var errors = results.errors.reverse();
            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
              var error = errors_1[_i];
              var extracted = payload.splice(error.index, 1)[0];
              if (_isRetriable(error.statusCode)) {
                retry[
                  _DYN_PUSH2
                  /* @min:%2epush */
                ](extracted);
              } else {
                failed[
                  _DYN_PUSH2
                  /* @min:%2epush */
                ](extracted);
              }
            }
            if (payload[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              _self[
                _DYN__ON_SUCCESS
                /* @min:%2e_onSuccess */
              ](payload, results[
                _DYN_ITEMS_ACCEPTED
                /* @min:%2eitemsAccepted */
              ]);
            }
            if (failed[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              _self[
                _DYN__ON_ERROR
                /* @min:%2e_onError */
              ](failed, _formatErrorMessageXhr(null, ["partial success", results[
                _DYN_ITEMS_ACCEPTED
                /* @min:%2eitemsAccepted */
              ], "of", results.itemsReceived].join(" ")));
            }
            if (retry[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              _resendPayload(retry);
              _throwInternal(_self[
                _DYN_DIAG_LOG2
                /* @min:%2ediagLog */
              ](), 2, 40, "Partial success. Delivered: " + payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] + ", Failed: " + failed[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] + ". Will retry to send " + retry[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] + " our of " + results[
                _DYN_ITEMS_RECEIVED
                /* @min:%2eitemsReceived */
              ] + " items");
            }
          };
          _self[
            _DYN__ON_SUCCESS
            /* @min:%2e_onSuccess */
          ] = function(payload, countOfItemsInPayload) {
            _self._buffer && _self._buffer[
              _DYN_CLEAR_SENT
              /* @min:%2eclearSent */
            ](payload);
          };
          _self._xdrOnLoad = function(xdr, payload) {
            var responseText = _getResponseText2(xdr);
            if (xdr && (responseText + "" === "200" || responseText === "")) {
              _consecutiveErrors = 0;
              _self[
                _DYN__ON_SUCCESS
                /* @min:%2e_onSuccess */
              ](payload, 0);
            } else {
              var results = _parseResponse(responseText);
              if (results && results.itemsReceived && results.itemsReceived > results[
                _DYN_ITEMS_ACCEPTED
                /* @min:%2eitemsAccepted */
              ] && !_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_IS_RETRY_DISABLED
                /* @min:%2eisRetryDisabled */
              ]()) {
                _self[
                  _DYN__ON_PARTIAL_SUCCESS
                  /* @min:%2e_onPartialSuccess */
                ](payload, results);
              } else {
                _self[
                  _DYN__ON_ERROR
                  /* @min:%2e_onError */
                ](payload, _formatErrorMessageXdr(xdr));
              }
            }
          };
          function _isSampledIn(envelope) {
            return _self._sample.isSampledIn(envelope);
          }
          function _checkResponsStatus(status, payload, responseUrl, countOfItemsInPayload, errorMessage, res) {
            var response = null;
            if (!_self._appId) {
              response = _parseResponse(res);
              if (response && response.appId) {
                _self._appId = response.appId;
              }
            }
            if ((status < 200 || status >= 300) && status !== 0) {
              if (status === 301 || status === 307 || status === 308) {
                if (!_checkAndUpdateEndPointUrl(responseUrl)) {
                  _self[
                    _DYN__ON_ERROR
                    /* @min:%2e_onError */
                  ](payload, errorMessage);
                  return;
                }
              }
              if (!_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_IS_RETRY_DISABLED
                /* @min:%2eisRetryDisabled */
              ]() && _isRetriable(status)) {
                _resendPayload(payload);
                _throwInternal(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), 2, 40, ". Response code " + status + ". Will retry to send " + payload[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ] + " items.");
              } else {
                _self[
                  _DYN__ON_ERROR
                  /* @min:%2e_onError */
                ](payload, errorMessage);
              }
            } else if (_offlineListener && !_offlineListener[
              _DYN_IS_ONLINE
              /* @min:%2eisOnline */
            ]()) {
              if (!_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_IS_RETRY_DISABLED
                /* @min:%2eisRetryDisabled */
              ]()) {
                var offlineBackOffMultiplier = 10;
                _resendPayload(payload, offlineBackOffMultiplier);
                _throwInternal(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), 2, 40, ". Offline - Response Code: ".concat(status, ". Offline status: ").concat(!_offlineListener.isOnline(), ". Will retry to send ").concat(payload.length, " items."));
              }
            } else {
              _checkAndUpdateEndPointUrl(responseUrl);
              if (status === 206) {
                if (!response) {
                  response = _parseResponse(res);
                }
                if (response && !_self[
                  _DYN__SENDER_CONFIG
                  /* @min:%2e_senderConfig */
                ][
                  _DYN_IS_RETRY_DISABLED
                  /* @min:%2eisRetryDisabled */
                ]()) {
                  _self[
                    _DYN__ON_PARTIAL_SUCCESS
                    /* @min:%2e_onPartialSuccess */
                  ](payload, response);
                } else {
                  _self[
                    _DYN__ON_ERROR
                    /* @min:%2e_onError */
                  ](payload, errorMessage);
                }
              } else {
                _consecutiveErrors = 0;
                _self[
                  _DYN__ON_SUCCESS
                  /* @min:%2e_onSuccess */
                ](payload, countOfItemsInPayload);
              }
            }
          }
          function _checkAndUpdateEndPointUrl(responseUrl) {
            if (_stamp_specific_redirects >= 10) {
              return false;
            }
            if (!isNullOrUndefined(responseUrl) && responseUrl !== "") {
              if (responseUrl !== _self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_ENDPOINT_URL
                /* @min:%2eendpointUrl */
              ]()) {
                _self[
                  _DYN__SENDER_CONFIG
                  /* @min:%2e_senderConfig */
                ][
                  _DYN_ENDPOINT_URL
                  /* @min:%2eendpointUrl */
                ] = function() {
                  return responseUrl;
                };
                ++_stamp_specific_redirects;
                return true;
              }
            }
            return false;
          }
          function _doUnloadSend(payload, isAsync) {
            if (_syncUnloadSender) {
              _syncUnloadSender(payload, false);
            } else {
              _beaconSender(payload, isAsync);
            }
          }
          function _doBeaconSend(payload) {
            var nav = getNavigator();
            var buffer = _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ];
            var url = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ]();
            var batch = _self._buffer[
              _DYN_BATCH_PAYLOADS
              /* @min:%2ebatchPayloads */
            ](payload);
            var plainTextBatch = new Blob([batch], { type: "text/plain;charset=UTF-8" });
            var queued = nav.sendBeacon(url, plainTextBatch);
            if (queued) {
              buffer[
                _DYN_MARK_AS_SENT
                /* @min:%2emarkAsSent */
              ](payload);
              _self._onSuccess(payload, payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ]);
            }
            return queued;
          }
          function _beaconSender(payload, isAsync) {
            if (isArray(payload) && payload[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] > 0) {
              if (!_doBeaconSend(payload)) {
                var droppedPayload = [];
                for (var lp = 0; lp < payload[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ]; lp++) {
                  var thePayload = payload[lp];
                  if (!_doBeaconSend([thePayload])) {
                    droppedPayload[
                      _DYN_PUSH2
                      /* @min:%2epush */
                    ](thePayload);
                  }
                }
                if (droppedPayload[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ] > 0) {
                  _fallbackSender && _fallbackSender(droppedPayload, true);
                  _throwInternal(_self[
                    _DYN_DIAG_LOG2
                    /* @min:%2ediagLog */
                  ](), 2, 40, ". Failed to send telemetry with Beacon API, retried with normal sender.");
                }
              }
            }
          }
          function _xhrSender(payload, isAsync) {
            var xhr = new XMLHttpRequest();
            var endPointUrl = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ]();
            try {
              xhr[DisabledPropertyName] = true;
            } catch (e) {
            }
            xhr.open("POST", endPointUrl, isAsync);
            xhr[
              _DYN_SET_REQUEST_HEADER
              /* @min:%2esetRequestHeader */
            ]("Content-type", "application/json");
            if (isInternalApplicationInsightsEndpoint(endPointUrl)) {
              xhr[
                _DYN_SET_REQUEST_HEADER
                /* @min:%2esetRequestHeader */
              ](RequestHeaders[
                6
                /* eRequestHeaders.sdkContextHeader */
              ], RequestHeaders[
                7
                /* eRequestHeaders.sdkContextHeaderAppIdRequest */
              ]);
            }
            arrForEach(objKeys(_headers), function(headerName) {
              xhr[
                _DYN_SET_REQUEST_HEADER
                /* @min:%2esetRequestHeader */
              ](headerName, _headers[headerName]);
            });
            xhr.onreadystatechange = function() {
              return _self._xhrReadyStateChange(xhr, payload, payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ]);
            };
            xhr.onerror = function(event) {
              return _self[
                _DYN__ON_ERROR
                /* @min:%2e_onError */
              ](payload, _formatErrorMessageXhr(xhr), event);
            };
            var batch = _self._buffer[
              _DYN_BATCH_PAYLOADS
              /* @min:%2ebatchPayloads */
            ](payload);
            xhr.send(batch);
            _self._buffer[
              _DYN_MARK_AS_SENT
              /* @min:%2emarkAsSent */
            ](payload);
          }
          function _fetchKeepAliveSender(payload, isAsync) {
            if (isArray(payload)) {
              var payloadSize = payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ];
              for (var lp = 0; lp < payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ]; lp++) {
                payloadSize += payload[lp][
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ];
              }
              if (_syncFetchPayload + payloadSize <= FetchSyncRequestSizeLimitBytes) {
                _doFetchSender(payload, false);
              } else if (isBeaconsSupported()) {
                _beaconSender(payload, isAsync);
              } else {
                _fallbackSender && _fallbackSender(payload, true);
                _throwInternal(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), 2, 40, ". Failed to send telemetry with Beacon API, retried with xhrSender.");
              }
            }
          }
          function _fetchSender(payload, isAsync) {
            _doFetchSender(payload, true);
          }
          function _doFetchSender(payload, isAsync) {
            var _a7;
            var endPointUrl = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ]();
            var batch = _self._buffer[
              _DYN_BATCH_PAYLOADS
              /* @min:%2ebatchPayloads */
            ](payload);
            var plainTextBatch = new Blob([batch], { type: "application/json" });
            var requestHeaders = new Headers();
            var batchLength = batch[
              _DYN_LENGTH3
              /* @min:%2elength */
            ];
            var ignoreResponse = false;
            var responseHandled = false;
            if (isInternalApplicationInsightsEndpoint(endPointUrl)) {
              requestHeaders.append(RequestHeaders[
                6
                /* eRequestHeaders.sdkContextHeader */
              ], RequestHeaders[
                7
                /* eRequestHeaders.sdkContextHeaderAppIdRequest */
              ]);
            }
            arrForEach(objKeys(_headers), function(headerName) {
              requestHeaders.append(headerName, _headers[headerName]);
            });
            var init = (_a7 = {
              method: "POST",
              headers: requestHeaders,
              body: plainTextBatch
            }, _a7[DisabledPropertyName] = true, _a7);
            if (!isAsync) {
              init.keepalive = true;
              ignoreResponse = true;
              _syncFetchPayload += batchLength;
            }
            var request = new Request(endPointUrl, init);
            try {
              request[DisabledPropertyName] = true;
            } catch (e) {
            }
            _self._buffer[
              _DYN_MARK_AS_SENT
              /* @min:%2emarkAsSent */
            ](payload);
            try {
              fetch(request).then(function(response) {
                if (!isAsync) {
                  _syncFetchPayload -= batchLength;
                  batchLength = 0;
                }
                if (!responseHandled) {
                  responseHandled = true;
                  if (!response.ok) {
                    _self[
                      _DYN__ON_ERROR
                      /* @min:%2e_onError */
                    ](payload, response.statusText);
                  } else {
                    response.text().then(function(text) {
                      _checkResponsStatus(response.status, payload, response.url, payload[
                        _DYN_LENGTH3
                        /* @min:%2elength */
                      ], response.statusText, text);
                    });
                  }
                }
              })["catch"](function(error) {
                if (!isAsync) {
                  _syncFetchPayload -= batchLength;
                  batchLength = 0;
                }
                if (!responseHandled) {
                  responseHandled = true;
                  _self[
                    _DYN__ON_ERROR
                    /* @min:%2e_onError */
                  ](payload, error.message);
                }
              });
            } catch (e) {
              if (!responseHandled) {
                _self[
                  _DYN__ON_ERROR
                  /* @min:%2e_onError */
                ](payload, dumpObj(e));
              }
            }
            if (ignoreResponse && !responseHandled) {
              responseHandled = true;
              _self._onSuccess(payload, payload[
                _DYN_LENGTH3
                /* @min:%2elength */
              ]);
            }
          }
          function _parseResponse(response) {
            try {
              if (response && response !== "") {
                var result = getJSON().parse(response);
                if (result && result.itemsReceived && result.itemsReceived >= result[
                  _DYN_ITEMS_ACCEPTED
                  /* @min:%2eitemsAccepted */
                ] && result.itemsReceived - result.itemsAccepted === result.errors[
                  _DYN_LENGTH3
                  /* @min:%2elength */
                ]) {
                  return result;
                }
              }
            } catch (e) {
              _throwInternal(_self[
                _DYN_DIAG_LOG2
                /* @min:%2ediagLog */
              ](), 1, 43, "Cannot parse the response. " + getExceptionName(e), {
                response
              });
            }
            return null;
          }
          function _resendPayload(payload, linearFactor) {
            if (linearFactor === void 0) {
              linearFactor = 1;
            }
            if (!payload || payload[
              _DYN_LENGTH3
              /* @min:%2elength */
            ] === 0) {
              return;
            }
            var buffer = _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ];
            buffer[
              _DYN_CLEAR_SENT
              /* @min:%2eclearSent */
            ](payload);
            _consecutiveErrors++;
            for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
              var item = payload_1[_i];
              buffer[
                _DYN_ENQUEUE
                /* @min:%2eenqueue */
              ](item);
            }
            _setRetryTime(linearFactor);
            _setupTimer();
          }
          function _setRetryTime(linearFactor) {
            var SlotDelayInSeconds = 10;
            var delayInSeconds;
            if (_consecutiveErrors <= 1) {
              delayInSeconds = SlotDelayInSeconds;
            } else {
              var backOffSlot = (Math.pow(2, _consecutiveErrors) - 1) / 2;
              var backOffDelay = Math.floor(Math.random() * backOffSlot * SlotDelayInSeconds) + 1;
              backOffDelay = linearFactor * backOffDelay;
              delayInSeconds = Math.max(Math.min(backOffDelay, 3600), SlotDelayInSeconds);
            }
            var retryAfterTimeSpan = dateNow() + delayInSeconds * 1e3;
            _retryAt = retryAfterTimeSpan;
          }
          function _setupTimer() {
            if (!_timeoutHandle && !_paused) {
              var retryInterval = _retryAt ? Math.max(0, _retryAt - dateNow()) : 0;
              var timerValue = Math.max(_self[
                _DYN__SENDER_CONFIG
                /* @min:%2e_senderConfig */
              ][
                _DYN_MAX_BATCH_INTERVAL
                /* @min:%2emaxBatchInterval */
              ](), retryInterval);
              _timeoutHandle = setTimeout(function() {
                _timeoutHandle = null;
                _self[
                  _DYN_TRIGGER_SEND
                  /* @min:%2etriggerSend */
                ](
                  true,
                  null,
                  1
                  /* SendRequestReason.NormalSchedule */
                );
              }, timerValue);
            }
          }
          function _clearScheduledTimer() {
            clearTimeout(_timeoutHandle);
            _timeoutHandle = null;
            _retryAt = null;
          }
          function _isRetriable(statusCode) {
            return statusCode === 401 || statusCode === 403 || statusCode === 408 || statusCode === 429 || statusCode === 500 || statusCode === 502 || statusCode === 503 || statusCode === 504;
          }
          function _formatErrorMessageXhr(xhr, message) {
            if (xhr) {
              return "XMLHttpRequest,Status:" + xhr.status + ",Response:" + _getResponseText2(xhr) || xhr.response || "";
            }
            return message;
          }
          function _xdrSender(payload, isAsync) {
            var buffer = _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ];
            var _window = getWindow();
            var xdr = new XDomainRequest();
            xdr.onload = function() {
              return _self._xdrOnLoad(xdr, payload);
            };
            xdr.onerror = function(event) {
              return _self[
                _DYN__ON_ERROR
                /* @min:%2e_onError */
              ](payload, _formatErrorMessageXdr(xdr), event);
            };
            var hostingProtocol = _window && _window.location && _window.location.protocol || "";
            if (_self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ]().lastIndexOf(hostingProtocol, 0) !== 0) {
              _throwInternal(_self[
                _DYN_DIAG_LOG2
                /* @min:%2ediagLog */
              ](), 2, 40, ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.");
              buffer[
                _DYN_CLEAR
                /* @min:%2eclear */
              ]();
              return;
            }
            var endpointUrl = _self[
              _DYN__SENDER_CONFIG
              /* @min:%2e_senderConfig */
            ][
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ]().replace(/^(https?:)/, "");
            xdr.open("POST", endpointUrl);
            var batch = buffer[
              _DYN_BATCH_PAYLOADS
              /* @min:%2ebatchPayloads */
            ](payload);
            xdr.send(batch);
            buffer[
              _DYN_MARK_AS_SENT
              /* @min:%2emarkAsSent */
            ](payload);
          }
          function _formatErrorMessageXdr(xdr, message) {
            if (xdr) {
              return "XDomainRequest,Response:" + _getResponseText2(xdr) || "";
            }
            return message;
          }
          function _getNotifyMgr() {
            var func = "getNotifyMgr";
            if (_self.core[func]) {
              return _self.core[func]();
            }
            return _self.core["_notificationManager"];
          }
          function _notifySendRequest(sendRequest, isAsync) {
            var manager = _getNotifyMgr();
            if (manager && manager[
              _DYN_EVENTS_SEND_REQUEST
              /* @min:%2eeventsSendRequest */
            ]) {
              try {
                manager[
                  _DYN_EVENTS_SEND_REQUEST
                  /* @min:%2eeventsSendRequest */
                ](sendRequest, isAsync);
              } catch (e) {
                _throwInternal(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), 1, 74, "send request notification failed: " + getExceptionName(e), { exception: dumpObj(e) });
              }
            }
          }
          function _validateInstrumentationKey(config) {
            var disableIKeyValidationFlag = isNullOrUndefined(config[
              _DYN_DISABLE_INSTRUMENTAT7
              /* @min:%2edisableInstrumentationKeyValidation */
            ]) ? false : config[
              _DYN_DISABLE_INSTRUMENTAT7
              /* @min:%2edisableInstrumentationKeyValidation */
            ];
            if (disableIKeyValidationFlag) {
              return true;
            }
            var UUID_Regex = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
            var regexp = new RegExp(UUID_Regex);
            return regexp.test(config[
              _DYN_INSTRUMENTATION_KEY2
              /* @min:%2einstrumentationKey */
            ]);
          }
          function _initDefaults() {
            _self[
              _DYN__SENDER
              /* @min:%2e_sender */
            ] = null;
            _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ] = null;
            _self._appId = null;
            _self._sample = null;
            _headers = {};
            _offlineListener = null;
            _consecutiveErrors = 0;
            _retryAt = null;
            _lastSend = null;
            _paused = false;
            _timeoutHandle = null;
            _serializer = null;
            _stamp_specific_redirects = 0;
            _syncFetchPayload = 0;
            _fallbackSender = null;
            _syncUnloadSender = null;
            _evtNamespace = null;
          }
        });
        return _this;
      }
      Sender2.constructEnvelope = function(orig, iKey, logger, convertUndefined) {
        var envelope;
        if (iKey !== orig.iKey && !isNullOrUndefined(iKey)) {
          envelope = __assignFn(__assignFn({}, orig), { iKey });
        } else {
          envelope = orig;
        }
        var creator = EnvelopeTypeCreator[envelope.baseType] || EventEnvelopeCreator;
        return creator(logger, envelope, convertUndefined);
      };
      return Sender2;
    }(BaseTelemetryPlugin);
  }
});

// node_modules/@microsoft/applicationinsights-channel-js/dist-esm/applicationinsights-channel-js.js
var init_applicationinsights_channel_js = __esm({
  "node_modules/@microsoft/applicationinsights-channel-js/dist-esm/applicationinsights-channel-js.js"() {
    init_Sender();
  }
});

// node_modules/@microsoft/applicationinsights-web-basic/dist-esm/__DynamicConstants.js
var _DYN_INSTRUMENTATION_KEY3, _DYN_CONNECTION_STRING, _DYN_DIAGNOSTIC_LOG_INTER0;
var init_DynamicConstants4 = __esm({
  "node_modules/@microsoft/applicationinsights-web-basic/dist-esm/__DynamicConstants.js"() {
    _DYN_INSTRUMENTATION_KEY3 = "instrumentationKey";
    _DYN_CONNECTION_STRING = "connectionString";
    _DYN_DIAGNOSTIC_LOG_INTER0 = "diagnosticLogInterval";
  }
});

// node_modules/@microsoft/applicationinsights-web-basic/dist-esm/index.js
var dist_esm_exports = {};
__export(dist_esm_exports, {
  AppInsightsCore: () => AppInsightsCore,
  ApplicationInsights: () => ApplicationInsights,
  CoreUtils: () => CoreUtils,
  Sender: () => Sender,
  SeverityLevel: () => SeverityLevel,
  _InternalMessageId: () => _InternalMessageId,
  arrForEach: () => arrForEach,
  isNullOrUndefined: () => isNullOrUndefined,
  proxyFunctions: () => proxyFunctions,
  throwError: () => throwError
});
var ApplicationInsights;
var init_dist_esm = __esm({
  "node_modules/@microsoft/applicationinsights-web-basic/dist-esm/index.js"() {
    init_dynamicproto_js();
    init_applicationinsights_channel_js();
    init_applicationinsights_common();
    init_applicationinsights_core_js();
    init_DynamicConstants4();
    init_applicationinsights_core_js();
    init_applicationinsights_common();
    init_applicationinsights_channel_js();
    ApplicationInsights = /** @class */
    function() {
      function ApplicationInsights2(config) {
        var core = new AppInsightsCore();
        if (isNullOrUndefined(config) || isNullOrUndefined(config[
          _DYN_INSTRUMENTATION_KEY3
          /* @min:%2einstrumentationKey */
        ]) && isNullOrUndefined(config[
          _DYN_CONNECTION_STRING
          /* @min:%2econnectionString */
        ])) {
          throwError("Invalid input configuration");
        }
        dynamicProto(ApplicationInsights2, this, function(_self) {
          if (config[
            _DYN_CONNECTION_STRING
            /* @min:%2econnectionString */
          ]) {
            var cs = parseConnectionString(config[
              _DYN_CONNECTION_STRING
              /* @min:%2econnectionString */
            ]);
            var ingest = cs.ingestionendpoint;
            config.endpointUrl = ingest ? ingest + DEFAULT_BREEZE_PATH : config.endpointUrl;
            config[
              _DYN_INSTRUMENTATION_KEY3
              /* @min:%2einstrumentationKey */
            ] = cs.instrumentationkey || config[
              _DYN_INSTRUMENTATION_KEY3
              /* @min:%2einstrumentationKey */
            ];
          }
          _self.config = config;
          _initialize();
          _self.initialize = _initialize;
          _self.getSKUDefaults = function() {
            _self.config[
              _DYN_DIAGNOSTIC_LOG_INTER0
              /* @min:%2ediagnosticLogInterval */
            ] = _self.config[
              _DYN_DIAGNOSTIC_LOG_INTER0
              /* @min:%2ediagnosticLogInterval */
            ] && _self.config[
              _DYN_DIAGNOSTIC_LOG_INTER0
              /* @min:%2ediagnosticLogInterval */
            ] > 0 ? _self.config[
              _DYN_DIAGNOSTIC_LOG_INTER0
              /* @min:%2ediagnosticLogInterval */
            ] : 1e4;
          };
          _self.getSKUDefaults();
          proxyFunctions(_self, core, [
            "track",
            "flush",
            "pollInternalLogs",
            "stopPollingInternalLogs",
            "unload",
            "getPlugin",
            "addPlugin",
            "evtNamespace",
            "addUnloadCb"
          ]);
          function _initialize() {
            core.initialize(_self.config, [new Sender()]);
            core.pollInternalLogs();
          }
        });
      }
      ApplicationInsights2.__ieDyn = 1;
      return ApplicationInsights2;
    }();
  }
});

// node_modules/node-fetch/browser.js
var require_browser = __commonJS({
  "node_modules/node-fetch/browser.js"(exports2, module2) {
    "use strict";
    var getGlobal2 = function() {
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof this !== "undefined") {
        return this;
      }
      throw new Error("unable to locate global object");
    };
    var globalObject = getGlobal2();
    module2.exports = exports2 = globalObject.fetch;
    if (globalObject.fetch) {
      exports2.default = globalObject.fetch.bind(globalObject);
    }
    exports2.Headers = globalObject.Headers;
    exports2.Request = globalObject.Request;
    exports2.Response = globalObject.Response;
  }
});

// node_modules/isomorphic-ws/browser.js
var require_browser2 = __commonJS({
  "node_modules/isomorphic-ws/browser.js"(exports2, module2) {
    var ws = null;
    if (typeof WebSocket !== "undefined") {
      ws = WebSocket;
    } else if (typeof MozWebSocket !== "undefined") {
      ws = MozWebSocket;
    } else if (typeof exports2 !== "undefined") {
      ws = exports2.WebSocket || exports2.MozWebSocket;
    } else if (typeof window !== "undefined") {
      ws = window.WebSocket || window.MozWebSocket;
    } else if (typeof self !== "undefined") {
      ws = self.WebSocket || self.MozWebSocket;
    }
    module2.exports = ws;
  }
});

// src/extension.web.ts
var extension_web_exports = {};
__export(extension_web_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(extension_web_exports);
var import_vscode13 = require("vscode");

// src/common/lifecycle.ts
function isIterable(thing) {
  return thing && typeof thing === "object" && typeof thing[Symbol.iterator] === "function";
}
function dispose(arg) {
  if (isIterable(arg)) {
    for (const d of arg) {
      if (d) {
        try {
          d.dispose();
        } catch (e) {
        }
      }
    }
  } else if (arg) {
    try {
      arg.dispose();
    } catch (e) {
    }
  }
}
var DisposableStore = class {
  constructor() {
    this.disposables = [];
  }
  add(disposable) {
    this.disposables.push(disposable);
    return disposable;
  }
  dispose() {
    dispose(this.disposables);
  }
};
var disposableStore = new DisposableStore();

// src/urlCapture.ts
var import_vscode9 = require("vscode");

// src/common/localize.ts
var import_vscode = require("vscode");
var Localized;
((Localized2) => {
  Localized2.OutputChannelName = import_vscode.l10n.t("JupyterHub");
  Localized2.ConnectingToJupyterServer = import_vscode.l10n.t("Connecting to JupyterHub Server");
  Localized2.startingJupyterServer = import_vscode.l10n.t("Starting Server");
  Localized2.KernelActionSourceTitle = import_vscode.l10n.t("Existing JupyterHub Server...");
  Localized2.labelOfCommandToEnterUrl = import_vscode.l10n.t("Enter the URL of the running JupyterHub Server...");
  Localized2.placeholderOfInputBoxToEnterUrl = import_vscode.l10n.t("Enter the URL of the running JupyterHub Server");
  Localized2.titleOfInputBoxToEnterUrl = import_vscode.l10n.t("Enter the URL of the running JupyterHub Server");
  Localized2.captureUserNameTitle = "Enter your username";
  Localized2.captureUserNamePrompt = "username";
  Localized2.capturePasswordTitle = "Enter your password or API token";
  Localized2.capturePasswordPrompt = "password or token";
  Localized2.usernamePasswordAuthFailure = import_vscode.l10n.t("Invalid username or password.");
  Localized2.jupyterSelfCertFail = (errorMessage) => import_vscode.l10n.t(
    "The security certificate used by server {0} was not issued by a trusted certificate authority.\r\nThis may indicate an attempt to steal your information.\r\nDo you want to enable the Allow Unauthorized Remote Connection setting for this workspace to allow you to connect?",
    errorMessage
  );
  Localized2.jupyterExpiredCertFail = (errorMessage) => import_vscode.l10n.t(
    "The security certificate used by server {0} has expired.\r\nThis may indicate an attempt to steal your information.\r\nDo you want to enable the Allow Unauthorized Remote Connection setting for this workspace to allow you to connect?",
    errorMessage
  );
  Localized2.jupyterSelfCertFailErrorMessageOnly = import_vscode.l10n.t(
    "The security certificate used by server was not issued by a trusted certificate authority.\r\nThis may indicate an attempt to steal your information."
  );
  Localized2.jupyterSelfCertExpiredErrorMessageOnly = import_vscode.l10n.t(
    "The security certificate used by server has expired.\r\nThis may indicate an attempt to steal your information."
  );
  Localized2.jupyterSelfCertEnable = import_vscode.l10n.t("Yes, connect anyway");
  Localized2.jupyterSelfCertClose = import_vscode.l10n.t("No, close the connection");
  Localized2.connectToToTheJupyterServer = (url) => import_vscode.l10n.t("Connect to the JupyterHub server {0}", url);
  Localized2.jupyterSelectURIInvalidURI = import_vscode.l10n.t("Invalid URL specified");
  Localized2.invalidJupyterHubUrl = import_vscode.l10n.t("Invalid JupyterHub URL specified");
  Localized2.jupyterRenameServer = import_vscode.l10n.t("Change server name");
  Localized2.remoteJupyterConnectionFailedWithoutServerWithError = (errorMessage) => import_vscode.l10n.t("Connection failure. Verify the server is running and reachable. ({0}).", errorMessage);
  Localized2.emptyUserNameErrorMessage = import_vscode.l10n.t("Username cannot be empty");
  Localized2.emptyPasswordErrorMessage = import_vscode.l10n.t("Password/API token cannot be empty");
  Localized2.authMethodApiTokenMoreInfoTooltip = import_vscode.l10n.t("More Info");
})(Localized || (Localized = {}));

// src/common/utils.ts
var noop = () => {
};
function uuid() {
  const id = [];
  const chars = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    id[i] = chars.substring(Math.floor(Math.random() * 16))[0];
  }
  id[8] = id[13] = id[18] = id[23] = "-";
  return id.join("");
}

// src/common/logging.ts
var import_vscode2 = require("vscode");
var outputChannel = disposableStore.add(import_vscode2.window.createOutputChannel(Localized.OutputChannelName, "log"));
var loggingLevel = import_vscode2.workspace.getConfiguration("jupyterhub").get("log", "error");
disposableStore.add(
  import_vscode2.workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration("jupyterhub.log")) {
      let setting = import_vscode2.workspace.getConfiguration("jupyterhub").log;
      setting = setting.toLowerCase();
      if (setting === "error" || setting === "debug" || setting === "off") {
        loggingLevel = setting;
      } else {
        console.error(`Invalid Error Level for JupyterHub ${setting}`);
      }
    }
  })
);
function traceWarn(..._args) {
  if (loggingLevel === "off") {
    return;
  }
  logMessage("warn", ..._args);
}
function traceError(..._args) {
  if (loggingLevel === "off") {
    return;
  }
  logMessage("error", ..._args);
}
function traceDebug(_message, ..._args) {
  if (loggingLevel !== "debug") {
    return;
  }
  logMessage("debug", ..._args);
}
function logMessage(level, ...data) {
  outputChannel.appendLine(`${getTimeForLogging()} [${level}] ${formatErrors(...data).join(" ")}`);
}
function getTimeForLogging() {
  const date = /* @__PURE__ */ new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const millis = String(date.getMilliseconds()).padStart(3, "0");
  return `${hours}:${minutes}:${seconds}.${millis}`;
}
function formatErrors(...args) {
  return args.map((arg) => {
    if (!(arg instanceof Error)) {
      return arg;
    }
    const info = [`${arg.name}: ${arg.message}`.trim()];
    if (arg.stack) {
      const stack = (arg.stack || "").split(/\r?\n/g).map((l) => l.trim());
      const firstStackLine = stack.find((l) => l.indexOf("at ") === 0);
      if (stack.length === 1) {
      } else if (stack.length === 1) {
        info.push(stack[0]);
      } else if (stack.length > 1 && (firstStackLine == null ? void 0 : firstStackLine.length)) {
        info.push(firstStackLine);
      } else {
        info.push(stack[0]);
      }
    }
    const propertiesToIgnore = ["stack", "message", "name"];
    Object.keys(arg).filter((key) => propertiesToIgnore.indexOf(key) === -1).forEach((key) => info.push(`${key} = ${String(arg[key]).trim()}`));
    return info.filter((l) => l.trim().length).map((l, i) => i === 0 ? l : `    > ${l}`).join("\n");
  });
}

// src/validator.ts
var import_services2 = __toESM(require_lib3());
var import_vscode6 = require("vscode");

// src/common/async.ts
var import_vscode3 = require("vscode");
async function sleep(timeout, token) {
  let disposables = [];
  const promise = new Promise((resolve) => {
    const timer = setTimeout(resolve, timeout);
    disposables.push(new import_vscode3.Disposable(() => clearTimeout(timer)));
  });
  await raceCancellation(token, promise).finally(() => {
    disposables.forEach((d) => d.dispose());
  });
}
function isPromiseLike(v) {
  return typeof (v == null ? void 0 : v.then) === "function";
}
function raceTimeout(timeout, defaultValue, ...promises) {
  const resolveValue = isPromiseLike(defaultValue) ? void 0 : defaultValue;
  if (isPromiseLike(defaultValue)) {
    promises.push(defaultValue);
  }
  let promiseResolve = void 0;
  const timer = setTimeout(() => promiseResolve == null ? void 0 : promiseResolve(resolveValue), timeout);
  return Promise.race([
    Promise.race(promises).finally(() => clearTimeout(timer)),
    new Promise((resolve) => promiseResolve = resolve)
  ]);
}
async function raceCancellation(token, defaultValue, ...promises) {
  let value;
  if (isPromiseLike(defaultValue)) {
    promises.push(defaultValue);
    value = void 0;
  } else {
    value = defaultValue;
  }
  if (!token) {
    return await Promise.race(promises);
  }
  if (token.isCancellationRequested) {
    return value;
  }
  return new Promise((resolve, reject) => {
    if (token.isCancellationRequested) {
      return resolve(value);
    }
    const disposable = token.onCancellationRequested(() => {
      disposable.dispose();
      resolve(value);
    });
    Promise.race(promises).then(resolve, reject).finally(() => disposable.dispose());
  });
}
async function raceCancellationError(token, ...promises) {
  if (!token) {
    return Promise.race(promises);
  }
  if (token.isCancellationRequested) {
    throw new import_vscode3.CancellationError();
  }
  return new Promise((resolve, reject) => {
    if (token.isCancellationRequested) {
      return reject(new import_vscode3.CancellationError());
    }
    const disposable = token.onCancellationRequested(() => {
      disposable.dispose();
      reject(new import_vscode3.CancellationError());
    });
    Promise.race(promises).then(resolve, reject).finally(() => disposable.dispose());
  });
}

// src/validator.ts
var import_vscode7 = require("vscode");

// src/jupyterHubApi.ts
var import_vscode5 = require("vscode");
var import_services = __toESM(require_lib3());

// src/utils.ts
var import_vscode4 = require("vscode");

// src/common/constants.ts
var AppInsightsKey = "0c6ae279ed8443289764825290e4f9e2-1a736e7c-1324-4338-be46-fc2a58ae4d14-7255";
var JUPYTER_EXTENSION_ID = "ms-toolsai.jupyter";

// src/utils.ts
function appendUrlPath(baseUrl, path2) {
  return new URL(path2, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`).toString();
}
var isWebExt = false;
function setIsWebExtension() {
  isWebExt = true;
}
function isWebExtension() {
  return isWebExt;
}
async function getJupyterApi() {
  const ext = import_vscode4.extensions.getExtension(JUPYTER_EXTENSION_ID);
  if (!ext) {
    throw new Error("Jupyter Extension not installed");
  }
  if (!ext.isActive) {
    await ext.activate();
  }
  return ext;
}

// node_modules/@vscode/extension-telemetry/dist/browser/browser/telemetryReporter.js
var vscode = __toESM(require("vscode"));

// node_modules/@vscode/extension-telemetry/dist/browser/common/1dsClientFactory.js
var getAICore = async (key, vscodeAPI, xhrOverride) => {
  const oneDs = await Promise.resolve().then(() => (init_Index(), Index_exports));
  const postPlugin = await Promise.resolve().then(() => (init_Index2(), Index_exports2));
  const appInsightsCore = new oneDs.AppInsightsCore();
  const collectorChannelPlugin = new postPlugin.PostChannel();
  const coreConfig = {
    instrumentationKey: key,
    endpointUrl: "https://mobile.events.data.microsoft.com/OneCollector/1.0",
    loggingLevelTelemetry: 0,
    loggingLevelConsole: 0,
    disableCookiesUsage: true,
    disableDbgExt: true,
    disableInstrumentationKeyValidation: true,
    channels: [[
      collectorChannelPlugin
    ]]
  };
  if (xhrOverride) {
    coreConfig.extensionConfig = {};
    const channelConfig = {
      alwaysUseXhrOverride: true,
      httpXHROverride: xhrOverride
    };
    coreConfig.extensionConfig[collectorChannelPlugin.identifier] = channelConfig;
  }
  const config = vscodeAPI.workspace.getConfiguration("telemetry");
  const internalTesting = config.get("internalTesting");
  appInsightsCore.initialize(coreConfig, []);
  appInsightsCore.addTelemetryInitializer((envelope) => {
    var _a7, _b;
    if (!internalTesting) {
      return;
    }
    envelope["ext"] = (_a7 = envelope["ext"]) != null ? _a7 : {};
    envelope["ext"]["utc"] = (_b = envelope["ext"]["utc"]) != null ? _b : {};
    envelope["ext"]["utc"]["flags"] = 8462029;
  });
  return appInsightsCore;
};
var oneDataSystemClientFactory = async (key, vscodeAPI, xhrOverride) => {
  const appInsightsCore = await getAICore(key, vscodeAPI, xhrOverride);
  const telemetryClient = {
    logEvent: (eventName, data) => {
      try {
        appInsightsCore == null ? void 0 : appInsightsCore.track({
          name: eventName,
          baseData: { name: eventName, properties: data == null ? void 0 : data.properties, measurements: data == null ? void 0 : data.measurements }
        });
      } catch (e) {
        throw new Error("Failed to log event to app insights!\n" + e.message);
      }
    },
    flush: async () => {
      try {
        appInsightsCore == null ? void 0 : appInsightsCore.unload();
      } catch (e) {
        throw new Error("Failed to flush app insights!\n" + e.message);
      }
    }
  };
  return telemetryClient;
};

// node_modules/@vscode/extension-telemetry/dist/browser/common/baseTelemetrySender.js
var InstantiationStatus;
(function(InstantiationStatus2) {
  InstantiationStatus2[InstantiationStatus2["NOT_INSTANTIATED"] = 0] = "NOT_INSTANTIATED";
  InstantiationStatus2[InstantiationStatus2["INSTANTIATING"] = 1] = "INSTANTIATING";
  InstantiationStatus2[InstantiationStatus2["INSTANTIATED"] = 2] = "INSTANTIATED";
})(InstantiationStatus || (InstantiationStatus = {}));
var BaseTelemetrySender = class {
  constructor(key, clientFactory) {
    this._instantiationStatus = InstantiationStatus.NOT_INSTANTIATED;
    this._eventQueue = [];
    this._exceptionQueue = [];
    this._clientFactory = clientFactory;
    this._key = key;
  }
  /**
   * Sends the event to the passed in telemetry client
   * The sender does no telemetry level checks as those are done by the reporter.
   * @param eventName The name of the event to log
   * @param data The data contanied in the event
   */
  sendEventData(eventName, data) {
    if (!this._telemetryClient) {
      if (this._instantiationStatus !== InstantiationStatus.INSTANTIATED) {
        this._eventQueue.push({ eventName, data });
      }
      return;
    }
    this._telemetryClient.logEvent(eventName, data);
  }
  /**
   * Sends an exception to the passed in telemetry client
   * The sender does no telemetry level checks as those are done by the reporter.
   * @param exception The exception to collect
   * @param data Data associated with the exception
   */
  sendErrorData(exception, data) {
    if (!this._telemetryClient) {
      if (this._instantiationStatus !== InstantiationStatus.INSTANTIATED) {
        this._exceptionQueue.push({ exception, data });
      }
      return;
    }
  }
  /**
   * Flushes the buffered telemetry data
   */
  async flush() {
    if (this._telemetryClient) {
      await this._telemetryClient.flush();
      this._telemetryClient = void 0;
    }
    return;
  }
  /**
   * Flushes the queued events that existed before the client was instantiated
   */
  _flushQueues() {
    this._eventQueue.forEach(({ eventName, data }) => this.sendEventData(eventName, data));
    this._eventQueue = [];
    this._exceptionQueue.forEach(({ exception, data }) => this.sendErrorData(exception, data));
    this._exceptionQueue = [];
  }
  /**
   * Instantiates the telemetry client to make the sender "active"
   */
  instantiateSender() {
    if (this._instantiationStatus !== InstantiationStatus.NOT_INSTANTIATED) {
      return;
    }
    this._instantiationStatus = InstantiationStatus.INSTANTIATING;
    this._clientFactory(this._key).then((client) => {
      this._telemetryClient = client;
      this._instantiationStatus = InstantiationStatus.INSTANTIATED;
      this._flushQueues();
    }).catch((err) => {
      console.error(err);
      this._instantiationStatus = InstantiationStatus.INSTANTIATED;
    });
  }
};

// node_modules/@vscode/extension-telemetry/dist/browser/common/baseTelemetryReporter.js
var BaseTelemetryReporter = class {
  constructor(telemetrySender, vscodeAPI, initializationOptions) {
    this.telemetrySender = telemetrySender;
    this.vscodeAPI = vscodeAPI;
    this.userOptIn = false;
    this.errorOptIn = false;
    this.disposables = [];
    this._onDidChangeTelemetryLevel = new this.vscodeAPI.EventEmitter();
    this.onDidChangeTelemetryLevel = this._onDidChangeTelemetryLevel.event;
    this.telemetryLogger = this.vscodeAPI.env.createTelemetryLogger(this.telemetrySender, initializationOptions);
    this.updateUserOptIn();
    this.telemetryLogger.onDidChangeEnableStates(() => {
      this.updateUserOptIn();
    });
  }
  /**
   * Updates the user's telemetry opt-in status
   */
  updateUserOptIn() {
    this.errorOptIn = this.telemetryLogger.isErrorsEnabled;
    this.userOptIn = this.telemetryLogger.isUsageEnabled;
    if (this.telemetryLogger.isErrorsEnabled || this.telemetryLogger.isUsageEnabled) {
      this.telemetrySender.instantiateSender();
    }
    this._onDidChangeTelemetryLevel.fire(this.telemetryLevel);
  }
  get telemetryLevel() {
    if (this.errorOptIn && this.userOptIn) {
      return "all";
    } else if (this.errorOptIn) {
      return "error";
    } else {
      return "off";
    }
  }
  /**
   * Internal function which logs telemetry events and takes extra options.
   * @param eventName The name of the event
   * @param properties The properties of the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to sanitize to the properties and measures
   * @param dangerous Whether or not to ignore telemetry level
   */
  internalSendTelemetryEvent(eventName, properties, measurements, dangerous) {
    if (dangerous) {
      this.telemetrySender.sendEventData(eventName, { properties, measurements });
    } else {
      this.telemetryLogger.logUsage(eventName, { properties, measurements });
    }
  }
  /**
   * Given an event name, some properties, and measurements sends a telemetry event.
   * Properties are sanitized on best-effort basis to remove sensitive data prior to sending.
   * @param eventName The name of the event
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   */
  sendTelemetryEvent(eventName, properties, measurements) {
    this.internalSendTelemetryEvent(eventName, properties, measurements, false);
  }
  /**
   * **DANGEROUS** Given an event name, some properties, and measurements sends a telemetry event without checking telemetry setting
   * Do not use unless in a controlled environment i.e. sending telmetry from a CI pipeline or testing during development
   * @param eventName The name of the event
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to sanitize to the properties and measures, defaults to true
   */
  sendDangerousTelemetryEvent(eventName, properties, measurements) {
    this.telemetrySender.instantiateSender();
    this.internalSendTelemetryEvent(eventName, properties, measurements, true);
  }
  /**
   * Internal function which logs telemetry error events and takes extra options.
   * @param eventName The name of the event
   * @param properties The properties of the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to sanitize to the properties and measures
   * @param dangerous Whether or not to ignore telemetry level
   */
  internalSendTelemetryErrorEvent(eventName, properties, measurements, dangerous) {
    if (dangerous) {
      this.telemetrySender.sendEventData(eventName, { properties, measurements });
    } else {
      this.telemetryLogger.logError(eventName, { properties, measurements });
    }
  }
  /**
   * Given an event name, some properties, and measurements sends an error event
   * @param eventName The name of the event
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   */
  sendTelemetryErrorEvent(eventName, properties, measurements) {
    this.internalSendTelemetryErrorEvent(eventName, properties, measurements, false);
  }
  /**
   * **DANGEROUS** Given an event name, some properties, and measurements sends a telemetry error event without checking telemetry setting
   * Do not use unless in a controlled environment i.e. sending telmetry from a CI pipeline or testing during development
   * @param eventName The name of the event
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to run the properties and measures through sanitiziation, defaults to true
   */
  sendDangerousTelemetryErrorEvent(eventName, properties, measurements) {
    this.telemetrySender.instantiateSender();
    this.internalSendTelemetryErrorEvent(eventName, properties, measurements, true);
  }
  /**
   * Internal function which logs telemetry exceptions and takes extra options
   * @param error: The error to send
   * @param properties The properties of the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to sanitize to the properties and measures
   * @param dangerous Whether or not to ignore telemetry level
   */
  internalSendTelemetryException(error, properties, measurements, dangerous) {
    if (dangerous) {
      this.telemetrySender.sendErrorData(error, { properties, measurements });
    } else {
      this.telemetryLogger.logError(error, { properties, measurements });
    }
  }
  /**
   * Given an error, properties, and measurements. Sends an exception event
   * @param error The error to send
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   */
  sendTelemetryException(error, properties, measurements) {
    this.internalSendTelemetryException(error, properties, measurements, false);
  }
  /**
   * **DANGEROUS** Given an error, properties, and measurements. Sends an exception event without checking the telemetry setting
   * Do not use unless in a controlled environment i.e. sending telmetry from a CI pipeline or testing during development
   * @param eventName The name of the event
   * @param properties The properties to send with the event
   * @param measurements The measurements (numeric values) to send with the event
   * @param sanitize Whether or not to sanitize to the properties and measures, defaults to true
   */
  sendDangerousTelemetryException(error, properties, measurements) {
    this.telemetrySender.instantiateSender();
    this.internalSendTelemetryException(error, properties, measurements, true);
  }
  /**
   * Disposes of the telemetry reporter
   */
  dispose() {
    this.telemetryLogger.dispose();
    return Promise.all(this.disposables.map((d) => d.dispose()));
  }
};

// node_modules/@vscode/extension-telemetry/dist/browser/common/util.js
var TelemetryUtil = class _TelemetryUtil {
  static applyReplacements(data, replacementOptions) {
    for (const key of Object.keys(data)) {
      for (const option of replacementOptions) {
        if (option.lookup.test(key)) {
          if (option.replacementString !== void 0) {
            data[key] = option.replacementString;
          } else {
            delete data[key];
          }
        }
      }
    }
  }
  /**
   * Given a key checks if it is a valid 1DS key
   * @param key The key to check if it's a valid 1DS key
   */
  static shouldUseOneDataSystemSDK(key) {
    return key.length === 74 && key[32] === "-" && key[41] === "-" && key[46] === "-" && key[51] === "-" && key[56] === "-" && key[69] === "-";
  }
  // This also includes the common properties which core mixes in
  // __GDPR__COMMON__ "common.os" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.nodeArch" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.platformversion" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.extname" : { "classification": "PublicNonPersonalData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.extversion" : { "classification": "PublicNonPersonalData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.vscodemachineid" : { "endPoint": "MacAddressHash", "classification": "EndUserPseudonymizedInformation", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.vscodesessionid" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.vscodeversion" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.uikind" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.remotename" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.isnewappinstall" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.product" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  // __GDPR__COMMON__ "common.telemetryclientversion" : { "classification": "SystemMetaData", "purpose": "FeatureInsight" }
  static getAdditionalCommonProperties(osShim) {
    return {
      "common.os": osShim.platform,
      "common.nodeArch": osShim.architecture,
      "common.platformversion": (osShim.release || "").replace(/^(\d+)(\.\d+)?(\.\d+)?(.*)/, "$1$2$3"),
      // Do not change this string as it gets found and replaced upon packaging
      "common.telemetryclientversion": "0.7.7"
    };
  }
  // Get singleton instance of TelemetryUtil
  static getInstance() {
    if (!_TelemetryUtil._instance) {
      _TelemetryUtil._instance = new _TelemetryUtil();
    }
    return _TelemetryUtil._instance;
  }
};

// node_modules/@vscode/extension-telemetry/dist/browser/browser/telemetryReporter.js
var webAppInsightsClientFactory = async (key, replacementOptions) => {
  let appInsightsClient;
  try {
    const web = await Promise.resolve().then(() => (init_dist_esm(), dist_esm_exports));
    appInsightsClient = new web.ApplicationInsights({
      instrumentationKey: key,
      disableAjaxTracking: true,
      disableExceptionTracking: true,
      disableFetchTracking: true,
      disableCorrelationHeaders: true,
      disableCookiesUsage: true,
      autoTrackPageVisitTime: false,
      emitLineDelimitedJson: false,
      disableInstrumentationKeyValidation: true
    });
  } catch (e) {
    return Promise.reject(e);
  }
  const telemetryClient = {
    logEvent: (eventName, data) => {
      const properties = { ...data == null ? void 0 : data.properties, ...data == null ? void 0 : data.measurements };
      if (replacementOptions == null ? void 0 : replacementOptions.length) {
        TelemetryUtil.applyReplacements(properties, replacementOptions);
      }
      appInsightsClient == null ? void 0 : appInsightsClient.track({ name: eventName, data: properties });
    },
    flush: async () => {
      appInsightsClient == null ? void 0 : appInsightsClient.flush();
    }
  };
  return telemetryClient;
};
function getBrowserRelease(navigator2) {
  if (navigator2.userAgentData) {
    const browser = navigator2.userAgentData.brands[navigator2.userAgentData.brands.length - 1];
    return `${navigator2.userAgentData.platform} - ${browser == null ? void 0 : browser.brand} v${browser == null ? void 0 : browser.version}}`;
  } else {
    return navigator2.appVersion;
  }
}
var TelemetryReporter = class extends BaseTelemetryReporter {
  constructor(key, replacementOptions) {
    let clientFactory = (key2) => webAppInsightsClientFactory(key2, replacementOptions);
    if (TelemetryUtil.shouldUseOneDataSystemSDK(key)) {
      clientFactory = (key2) => oneDataSystemClientFactory(key2, vscode);
    }
    const osShim = {
      release: getBrowserRelease(navigator),
      platform: "web",
      architecture: "web"
    };
    const sender = new BaseTelemetrySender(key, clientFactory);
    if (key && key.indexOf("AIF") === 0) {
      throw new Error("AIF keys are no longer supported. Please switch to 1DS keys for 1st party extensions");
    }
    super(sender, vscode, { additionalCommonProperties: TelemetryUtil.getAdditionalCommonProperties(osShim) });
  }
};

// src/common/crypto.ts
var computedHashes = {};
var stopStoringHashes = false;
var cryptoProvider;
if (typeof window === "object") {
  cryptoProvider = window.crypto;
} else if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
  cryptoProvider = self.crypto;
} else {
  cryptoProvider = require("node:crypto").webcrypto;
}
async function computeHash(data, algorithm) {
  const isCandidateForCaching = data.includes("/") || data.includes("\\") || data.endsWith(".interactive");
  if (isCandidateForCaching && computedHashes[data]) {
    return computedHashes[data];
  }
  const hash = await computeHashInternal(data, algorithm);
  if (isCandidateForCaching && !stopStoringHashes) {
    if (Object.keys(computedHashes).length > 1e4) {
      stopStoringHashes = true;
    }
    computedHashes[data] = hash;
  }
  return hash;
}
async function computeHashInternal(data, algorithm) {
  const inputBuffer = new TextEncoder().encode(data);
  const hashBuffer = await cryptoProvider.subtle.digest({ name: algorithm }, inputBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// src/common/telemetry.ts
var telemetryReporter;
function publicLog2(eventName, data) {
  telemetryReporter = telemetryReporter ? telemetryReporter : disposableStore.add(new TelemetryReporter(AppInsightsKey));
  telemetryReporter.sendTelemetryEvent(eventName, data);
}
var urlsAndVersion = /* @__PURE__ */ new Map();
function getHostName(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return "";
  }
}
function stripPIIFromVersion(version2) {
  const parts = version2.split(".");
  if (parts.length < 2) {
    return 0;
  }
  return parseFloat(`${parseInt(parts[0], 10)}.${parseInt(parts[1], 10)}`);
}
async function getTelemetrySafeHashedString(data) {
  return computeHash(data, "SHA-256");
}
function sendJupyterHubUrlAdded(baseUrl, version2, serverId) {
  urlsAndVersion.set(baseUrl, version2);
  Promise.all([getTelemetrySafeHashedString(getHostName(baseUrl)), getTelemetrySafeHashedString(baseUrl)]).then(([hostNameHash, baseUrlHash]) => {
    publicLog2("addJupyterHubUrl", {
      serverId,
      hostNameHash,
      baseUrlHash,
      version: stripPIIFromVersion(version2)
    });
  }).catch(noop);
}
function sendJupyterHubUrlNotAdded(reason, lastStep) {
  publicLog2("addJupyterHubUrl", {
    failed: true,
    reason,
    lastStep
  });
}
function trackUsageOfOldApiGeneration(baseUrl) {
  Promise.all([getTelemetrySafeHashedString(getHostName(baseUrl)), getTelemetrySafeHashedString(baseUrl)]).then(([hostNameHash, baseUrlHash]) => {
    publicLog2(
      "generateTokenWithOldApi",
      {
        hostNameHash,
        baseUrlHash
      }
    );
  }).catch(noop);
}
function trackInstallOfExtension() {
  publicLog2("activated", {});
}
function solveCertificateProblem(problem, solution) {
  publicLog2(
    "addJupyterHubUrlWithCertProblem",
    {
      solution,
      problem
    }
  );
}

// src/jupyterHubApi.ts
async function getVersion(url, fetch2, token) {
  const apiUrl = appendUrlPath(url, "hub/api");
  let response;
  let messageTemplate = `Invalid Jupyter Hub Url ${apiUrl} (failed to get version)`;
  try {
    const response2 = await fetch2.send(
      apiUrl,
      {
        method: "get",
        redirect: "manual",
        headers: { Connection: "keep-alive" }
      },
      token
    );
    if (response2.status === 200) {
      messageTemplate = `Invalid Jupyter Hub Url ${apiUrl} (failed to parse response)`;
      const { version: version2 } = await response2.json();
      return version2;
    }
    throw new Error("Non 200 response");
  } catch (ex) {
    throw new Error(await getResponseErrorMessageToThrowOrLog(messageTemplate, response));
  }
}
async function deleteApiToken(baseUrl, username, tokenId, token, fetch2, cancellationToken) {
  const url = appendUrlPath(baseUrl, `hub/api/users/${username}/tokens/${tokenId}`);
  const options = { method: "DELETE", headers: { Authorization: `token ${token}` } };
  await fetch2.send(url, options, cancellationToken);
}
async function verifyApiToken(baseUrl, username, token, fetch2, cancellationToken) {
  try {
    await getUserInfo(baseUrl, username, token, fetch2, cancellationToken);
    return true;
  } catch (ex) {
    traceDebug(`Token is no longer valid`, ex);
    return false;
  }
}
async function generateNewApiToken(baseUrl, username, password, fetch2, cancellationToken) {
  let response;
  try {
    const url = appendUrlPath(baseUrl, `hub/api/users/${username}/tokens`);
    const body = {
      auth: { username, password },
      note: `Requested by JupyterHub extension in VSCode`
    };
    response = await fetch2.send(url, { method: "POST", body: JSON.stringify(body) }, cancellationToken);
    const json = await response.json();
    traceDebug(`Generated new token for user using the new way`);
    return { token: json.token, tokenId: json.id };
  } catch (ex) {
    traceError(await getResponseErrorMessageToThrowOrLog(`Failed to generate token, trying old way`, response), ex);
    return generateNewApiTokenOldWay(baseUrl, username, password, fetch2, cancellationToken);
  }
}
async function generateNewApiTokenOldWay(baseUrl, username, password, fetch2, cancellationToken) {
  try {
    const url = appendUrlPath(baseUrl, `hub/api/authorizations/token`);
    const body = { username, password };
    const response = await fetch2.send(url, { method: "POST", body: JSON.stringify(body) }, cancellationToken);
    const json = await response.json();
    if (json.token) {
      traceDebug(`Generated new token for user using the old way`);
      trackUsageOfOldApiGeneration(baseUrl);
      return { token: json.token, tokenId: "" };
    }
    throw new Error("Unable to generate Token using the old api route");
  } catch (ex) {
    traceError(`Failed to generate token, trying old way`, ex);
    throw ex;
  }
}
async function getUserInfo(baseUrl, username, token, fetch2, cancellationToken, includeStoppedServers) {
  traceDebug(`Getting user info for user ${baseUrl}, token length = ${token.length} && ${token.trim().length}`);
  const path2 = includeStoppedServers ? `hub/api/users/${username}?include_stopped_servers` : `hub/api/users/${username}`;
  const url = appendUrlPath(baseUrl, path2);
  const headers = { Authorization: `token ${token}` };
  const response = await fetch2.send(url, { method: "GET", headers }, cancellationToken);
  if (response.status === 200) {
    return response.json();
  }
  throw new Error(await getResponseErrorMessageToThrowOrLog(`Failed to get user info`, response));
}
async function getUserJupyterUrl(baseUrl, username, serverName, token, fetch2, cancelToken) {
  var _a7;
  const includeStoppedServers = !!serverName;
  const info = await getUserInfo(baseUrl, username, token, fetch2, cancelToken, includeStoppedServers);
  if (serverName) {
    const server = (info.servers || {})[serverName];
    if (server == null ? void 0 : server.url) {
      return appendUrlPath(baseUrl, server.url);
    }
    const servers = Object.keys(info.servers || {});
    traceError(
      `Failed to get the user Jupyter Url for ${serverName} existing servers include ${JSON.stringify(info)}`
    );
    throw new Error(
      `Named Jupyter Server '${serverName}' not found, existing servers include ${servers.join(", ")}`
    );
  } else {
    const defaultServer = ((_a7 = (info.servers || {})[""]) == null ? void 0 : _a7.url) || info.server;
    if (defaultServer) {
      return appendUrlPath(baseUrl, defaultServer);
    }
    traceError(
      `Failed to get the user Jupyter Url as there is no default server for the user ${JSON.stringify(info)}`
    );
    return appendUrlPath(baseUrl, `user/${username}/`);
  }
}
async function listServers(baseUrl, username, token, fetch2, cancelToken) {
  try {
    const info = await getUserInfo(baseUrl, username, token, fetch2, cancelToken, true).catch((ex) => {
      traceWarn(`Failed to get user info with stopped servers, defaulting without`, ex);
      return getUserInfo(baseUrl, username, token, fetch2, cancelToken);
    });
    return Object.values(info.servers || {});
  } catch (ex) {
    traceError(`Failed to get a list of servers for the user ${username}`, ex);
    return [];
  }
}
async function startServer(baseUrl, username, serverName, token, fetch2, cancellationToken) {
  const url = serverName ? appendUrlPath(baseUrl, `hub/api/users/${username}/servers/${encodeURIComponent(serverName)}`) : appendUrlPath(baseUrl, `hub/api/users/${username}/server`);
  const headers = { Authorization: `token ${token}` };
  const response = await fetch2.send(url, { method: "POST", headers }, cancellationToken);
  if (response.status === 201 || response.status === 202) {
    return;
  }
  throw new Error(await getResponseErrorMessageToThrowOrLog(`Failed to fetch user info`, response));
}
async function getResponseErrorMessageToThrowOrLog(message, response) {
  if (!response) {
    return message;
  }
  let responseText = "";
  try {
    responseText = await response.text();
  } catch (ex) {
    traceError(`Error fetching text from response to log error ${message}`, ex);
  }
  return `${message}, ${response.statusText} (${response.status}) with message  ${responseText}`;
}
async function createServerConnectSettings(baseUrl, serverName, authInfo, fetch2, cancelToken) {
  baseUrl = await getUserJupyterUrl(baseUrl, authInfo.username, serverName, authInfo.token, fetch2, cancelToken);
  let serverSettings = {
    baseUrl,
    appUrl: "",
    // A web socket is required to allow token authentication
    wsUrl: baseUrl.replace("http", "ws")
  };
  let requestInit = fetch2.requestCreator.getRequestInit();
  serverSettings = { ...serverSettings, token: authInfo.token, appendToken: true };
  const allowUnauthorized = import_vscode5.workspace.getConfiguration("jupyter").get("allowUnauthorizedRemoteConnection", false);
  if (baseUrl.startsWith("https") && allowUnauthorized && fetch2.requestCreator.createHttpRequestAgent) {
    const requestAgent = fetch2.requestCreator.createHttpRequestAgent();
    requestInit = { ...requestInit, agent: requestAgent };
  }
  serverSettings = {
    ...serverSettings,
    init: requestInit,
    fetch: fetch2.requestCreator.getFetchMethod(),
    Request: fetch2.requestCreator.getRequestCtor(void 0),
    Headers: fetch2.requestCreator.getHeadersCtor()
  };
  return import_services.ServerConnection.makeSettings(serverSettings);
}
var cacheOfBaseUrls = /* @__PURE__ */ new Map();
async function getJupyterHubBaseUrl(url, fetch2, token) {
  const cachedBaseUrl = cacheOfBaseUrls.get(url);
  if (cachedBaseUrl) {
    return cachedBaseUrl;
  }
  if (await getVersion(url, fetch2, token).catch(noop)) {
    cacheOfBaseUrls.set(url, url);
    return url;
  }
  if (url.toLowerCase().includes("/user/")) {
    try {
      const strippedUrl = url.substring(0, url.toLowerCase().indexOf("/user/"));
      if (await getVersion(strippedUrl, fetch2, token).catch(noop)) {
        cacheOfBaseUrls.set(url, strippedUrl);
        return strippedUrl;
      }
    } catch (e) {
    }
  }
  if (await getVersion(new URL(url).origin, fetch2, token).catch(noop)) {
    cacheOfBaseUrls.set(url, new URL(url).origin);
    return new URL(url).origin;
  }
  throw new Error("Unable to determine base url of Jupyter Hub Server");
}
function extractUserNameFromUrl(url) {
  if (url.toLowerCase().includes("/user/")) {
    const parts = url.split("/");
    const userIndex = parts.findIndex((p) => p.toLowerCase() === "user");
    if (userIndex > 0 && parts.length >= userIndex + 1) {
      return parts[userIndex + 1].trim();
    }
  }
}
function extractTokenFromUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const token = parsedUrl.searchParams.get("token");
    return token || "";
  } catch (e) {
    return "";
  }
}

// src/common/stopwatch.ts
var StopWatch = class {
  constructor() {
    this.started = Date.now();
  }
  get elapsed() {
    return Date.now() - this.started;
  }
  reset() {
    this.started = Date.now();
  }
};

// src/validator.ts
var TIMEOUT_FOR_SESSION_MANAGER_READY = 1e4;
var JupyterHubConnectionValidator = class {
  constructor(fetch2) {
    this.fetch = fetch2;
  }
  async validateJupyterUri(baseUrl, authInfo, authenticator, mainCancel) {
    const disposable = new DisposableStore();
    const masterCancel = disposable.add(new import_vscode6.CancellationTokenSource());
    const token = masterCancel.token;
    disposable.add(mainCancel.onCancellationRequested(() => masterCancel.cancel()));
    try {
      const info = await getUserInfo(baseUrl, authInfo.username, authInfo.token, this.fetch, token);
      if (info.name) {
        return;
      } else {
        traceError(`Failed to get user info, got ${JSON.stringify(info)}`);
        throw new Error("Failed to get user info");
      }
    } catch (err) {
      if (isSelfCertsError(err)) {
        const handled = await handleSelfCertsError(err.message);
        if (handled) {
          return await this.validateJupyterUri(baseUrl, authInfo, authenticator, token);
        }
      } else if (isSelfCertsExpiredError(err)) {
        const handled = await handleExpiredCertsError(err.message);
        if (handled) {
          return await this.validateJupyterUri(baseUrl, authInfo, authenticator, token);
        }
      }
      throw err;
    } finally {
      disposable.dispose();
    }
  }
  async ensureServerIsRunning(baseUrl, serverName, authInfo, authenticator, mainCancel) {
    await import_vscode6.window.withProgress(
      {
        location: import_vscode6.ProgressLocation.Notification,
        title: Localized.ConnectingToJupyterServer,
        cancellable: true
      },
      async (progress, progressCancel) => {
        const disposable = new DisposableStore();
        const masterCancel = disposable.add(new import_vscode6.CancellationTokenSource());
        const token = masterCancel.token;
        disposable.add(mainCancel.onCancellationRequested(() => masterCancel.cancel()));
        disposable.add(progressCancel.onCancellationRequested(() => masterCancel.cancel()));
        try {
          const didStartServer = await this.startIfServerNotStarted(
            baseUrl,
            serverName,
            authInfo,
            progress,
            token
          ).catch((ex) => traceError(`Failed to start server`, ex));
          const started = new StopWatch();
          const jupyterAuth = await authenticator.getJupyterAuthInfo({ baseUrl, authInfo }, token);
          if (!jupyterAuth) {
            throw new Error("Failed to get Jupyter Auth Info");
          }
          let retries = 0;
          while (true) {
            const settings = await createServerConnectSettings(
              baseUrl,
              serverName,
              { username: authInfo.username, token: jupyterAuth.token },
              this.fetch,
              token
            );
            const gotKernelSpecs = await getKernelSpecs(settings, token);
            if (gotKernelSpecs) {
              return;
            }
            if (didStartServer == "didStartServer") {
              await sleep(1e3, token);
              if (retries > 0 && started.elapsed > TIMEOUT_FOR_SESSION_MANAGER_READY) {
                throw new Error("Failed to enumeration kernel Specs");
              } else {
                retries += 1;
                traceDebug(`Waiting for Jupyter Server to start ${baseUrl}`);
                continue;
              }
            } else {
              throw new Error("Failed to enumeration kernel Specs");
            }
          }
        } catch (err) {
          if (isSelfCertsError(err)) {
            const handled = await handleSelfCertsError(err.message);
            if (handled) {
              return await this.validateJupyterUri(baseUrl, authInfo, authenticator, token);
            }
          } else if (isSelfCertsExpiredError(err)) {
            const handled = await handleExpiredCertsError(err.message);
            if (handled) {
              return await this.validateJupyterUri(baseUrl, authInfo, authenticator, token);
            }
          }
          throw err;
        } finally {
          disposable.dispose();
        }
      }
    );
  }
  /**
   * If the Jupyter (lab/notebook) server has not already been started, then start it.
   * This is required, else we cannot connect to it (after all without a Jupyter Server running, there's nothing to connect to)
   */
  async startIfServerNotStarted(baseUrl, serverName, authInfo, progress, token) {
    var _a7, _b, _c, _d;
    const includeStoppedServers = !!serverName;
    try {
      const status = await getUserInfo(
        baseUrl,
        authInfo.username,
        authInfo.token,
        this.fetch,
        token,
        includeStoppedServers
      );
      if (!serverName && ((_a7 = (status.servers || {})[""]) == null ? void 0 : _a7.ready)) {
        return;
      }
      if (serverName && ((_b = (status.servers || {})[serverName]) == null ? void 0 : _b.ready)) {
        return;
      }
    } catch (ex) {
      traceError(`Failed to get user info`, ex);
      return;
    }
    progress.report({ message: Localized.startingJupyterServer });
    await startServer(baseUrl, authInfo.username, serverName, authInfo.token, this.fetch, token).catch(
      (ex) => ex instanceof import_vscode6.CancellationError ? void 0 : traceError(`Failed to start the Jupyter Server`, ex)
    );
    try {
      const started = Date.now();
      while (true) {
        const status = await getUserInfo(
          baseUrl,
          authInfo.username,
          authInfo.token,
          this.fetch,
          token,
          includeStoppedServers
        );
        if (!serverName && ((_c = (status.servers || {})[""]) == null ? void 0 : _c.ready)) {
          return "didStartServer";
        }
        if (serverName && ((_d = (status.servers || {})[serverName]) == null ? void 0 : _d.ready)) {
          return "didStartServer";
        }
        if (Date.now() - started > TIMEOUT_FOR_SESSION_MANAGER_READY) {
          if (!serverName && status.server) {
            const server = (status.servers || {})[""];
            traceDebug(
              `Default server status used from status.server 5 ${status.server}, as server status is ${JSON.stringify(server)}`
            );
            return "didStartServer";
          }
          traceError(`Timeout waiting for Jupyter Server to start, current status = ${status.pending}`);
          return;
        }
        await sleep(1e3, token);
      }
    } catch (ex) {
      traceError(`Failed to get user info for user`, ex);
      return;
    }
  }
};
async function getKernelSpecs(serverSettings, token) {
  var _a7;
  const specsManager = new import_services2.KernelSpecManager({ serverSettings });
  const kernelManager = new import_services2.KernelManager({ serverSettings });
  const sessionManager = new import_services2.SessionManager({
    serverSettings,
    kernelManager
  });
  const disposables = [];
  try {
    const hasKernelSpecs = () => specsManager.specs && Object.keys(specsManager.specs.kernelspecs).length > 0;
    if (hasKernelSpecs()) {
      return specsManager.specs;
    }
    await raceCancellationError(token, raceTimeout(TIMEOUT_FOR_SESSION_MANAGER_READY, sessionManager.ready));
    if (hasKernelSpecs()) {
      return specsManager.specs;
    }
    await raceCancellationError(token, raceTimeout(TIMEOUT_FOR_SESSION_MANAGER_READY, specsManager.refreshSpecs()));
    if (hasKernelSpecs()) {
      return specsManager.specs;
    }
    const promise = new Promise((resolve) => {
      specsManager.specsChanged.connect(resolve);
      disposables.push(
        new import_vscode6.Disposable(() => {
          try {
            specsManager.specsChanged.disconnect(resolve);
          } catch (e) {
          }
        })
      );
    });
    await raceCancellationError(
      token,
      raceTimeout(
        TIMEOUT_FOR_SESSION_MANAGER_READY,
        promise,
        specsManager.ready,
        specsManager.refreshSpecs(),
        sessionManager.ready
      )
    );
    if (hasKernelSpecs()) {
      return specsManager.specs;
    }
    traceError(
      `SessionManager cannot enumerate kernelSpecs. Specs ${JSON.stringify((_a7 = specsManager.specs) == null ? void 0 : _a7.kernelspecs)}.`
    );
    return;
  } catch (e) {
    if (!(e instanceof import_vscode6.CancellationError)) {
      traceError(`SessionManager:getKernelSpecs failure: `, e);
    }
    return;
  } finally {
    dispose(disposables);
    try {
      await raceTimeout(1e4, sessionManager.ready);
    } catch (e) {
      traceError(`Exception on session manager shutdown: `, e);
    } finally {
      try {
        sessionManager.dispose();
      } catch (e) {
      }
      try {
        kernelManager.dispose();
      } catch (e) {
      }
      try {
        specsManager.dispose();
      } catch (e) {
      }
    }
  }
}
function isUnableToGetIssuerCertError(err) {
  return err.message.indexOf("reason: unable to get issuer certificate") >= 0 || err.message.includes("UNABLE_TO_GET_ISSUER_CERT") || err.name.includes("UNABLE_TO_GET_ISSUER_CERT") || err.toString().includes("UNABLE_TO_GET_ISSUER_CERT");
}
function isSelfCertsError(err) {
  return err.message.indexOf("reason: self signed certificate") >= 0 || isUnableToGetIssuerCertError(err);
}
async function handleSelfCertsError(message) {
  const enableOption = Localized.jupyterSelfCertEnable;
  const closeOption = Localized.jupyterSelfCertClose;
  const value = await import_vscode6.window.showErrorMessage(
    Localized.jupyterSelfCertFail(message),
    { modal: true },
    enableOption,
    closeOption
  );
  if (value === enableOption) {
    solveCertificateProblem("self-signed", "allow");
    await import_vscode7.workspace.getConfiguration("jupyter").update("allowUnauthorizedRemoteConnection", true, import_vscode6.ConfigurationTarget.Workspace);
    return true;
  } else {
    solveCertificateProblem("self-signed", "cancel");
  }
  return false;
}
function isSelfCertsExpiredError(err) {
  return err.message.indexOf("reason: certificate has expired") >= 0;
}
async function handleExpiredCertsError(message) {
  const enableOption = Localized.jupyterSelfCertEnable;
  const closeOption = Localized.jupyterSelfCertClose;
  const value = await import_vscode6.window.showErrorMessage(
    Localized.jupyterExpiredCertFail(message),
    { modal: true },
    enableOption,
    closeOption
  );
  if (value === enableOption) {
    solveCertificateProblem("expired", "allow");
    await import_vscode7.workspace.getConfiguration("jupyter").update("allowUnauthorizedRemoteConnection", true, import_vscode6.ConfigurationTarget.Workspace);
    return true;
  } else {
    solveCertificateProblem("expired", "cancel");
  }
  return false;
}

// src/common/inputCapture.ts
var import_vscode8 = require("vscode");
var WorkflowInputCapture = class {
  constructor() {
    this.disposables = [];
  }
  dispose() {
    dispose(this.disposables);
  }
  async getValue(options, token) {
    return new Promise((resolve, reject) => {
      const input = import_vscode8.window.createInputBox();
      this.disposables.push(new import_vscode8.Disposable(() => input.hide()));
      this.disposables.push(input);
      input.ignoreFocusOut = true;
      input.title = options.title;
      input.ignoreFocusOut = true;
      input.value = options.value || "";
      input.placeholder = options.placeholder || "";
      input.password = options.password === true;
      input.validationMessage = options.validationMessage || "";
      input.buttons = [import_vscode8.QuickInputButtons.Back, ...options.buttons || []];
      input.show();
      input.onDidChangeValue(() => input.validationMessage = "", this, this.disposables);
      input.onDidTriggerButton((e) => {
        var _a7;
        return (_a7 = options.onDidTriggerButton) == null ? void 0 : _a7.call(options, e);
      }, this, this.disposables);
      input.onDidHide(() => reject(new import_vscode8.CancellationError()), this, this.disposables);
      input.onDidTriggerButton(
        (e) => {
          if (e === import_vscode8.QuickInputButtons.Back) {
            resolve(void 0);
          }
        },
        this,
        this.disposables
      );
      input.onDidAccept(
        async () => {
          if (options.validateInput) {
            input.validationMessage = await options.validateInput(input.value);
            if (input.validationMessage) {
              return;
            }
          }
          input.busy = true;
          resolve(input.value || options.value || "");
        },
        this,
        this.disposables
      );
      token.onCancellationRequested(() => reject(new import_vscode8.CancellationError()), this, this.disposables);
    });
  }
  async pickValue(options, token) {
    return new Promise((resolve, reject) => {
      const input = import_vscode8.window.createQuickPick();
      this.disposables.push(new import_vscode8.Disposable(() => input.hide()));
      this.disposables.push(input);
      input.ignoreFocusOut = true;
      input.title = options.title;
      input.ignoreFocusOut = true;
      input.placeholder = options.placeholder || "";
      input.buttons = [import_vscode8.QuickInputButtons.Back];
      input.items = options.quickPickItems;
      input.canSelectMany = false;
      input.show();
      input.onDidHide(() => reject(new import_vscode8.CancellationError()), this, this.disposables);
      input.onDidTriggerButton(
        (e) => {
          if (e === import_vscode8.QuickInputButtons.Back) {
            resolve(void 0);
          }
        },
        this,
        this.disposables
      );
      input.onDidAccept(
        async () => {
          input.busy = true;
          if (input.selectedItems.length === 1) {
            resolve(input.selectedItems[0]);
          } else {
            resolve(void 0);
          }
        },
        this,
        this.disposables
      );
      token.onCancellationRequested(() => reject(new import_vscode8.CancellationError()), this, this.disposables);
    });
  }
};

// src/authenticator.ts
var Authenticator = class {
  constructor(fetch2) {
    this.fetch = fetch2;
  }
  async getJupyterAuthInfo(options, token) {
    if (!options.authInfo.token) {
      const isApiTokenValid = await verifyApiToken(
        options.baseUrl,
        options.authInfo.username,
        options.authInfo.password,
        this.fetch,
        token
      );
      if (isApiTokenValid) {
        return { tokenId: "", token: options.authInfo.password };
      }
    }
    if (options.authInfo.token) {
      const isApiTokenValid = await verifyApiToken(
        options.baseUrl,
        options.authInfo.username,
        options.authInfo.token,
        this.fetch,
        token
      );
      if (isApiTokenValid) {
        return { tokenId: "", token: options.authInfo.token };
      }
    }
    return generateNewApiToken(
      options.baseUrl,
      options.authInfo.username,
      options.authInfo.password,
      this.fetch,
      token
    );
  }
};

// src/urlCapture.ts
var JupyterHubUrlCapture = class {
  constructor(fetch2, storage) {
    this.fetch = fetch2;
    this.storage = storage;
    this.displayNamesOfHandles = /* @__PURE__ */ new Map();
    this.disposable = new DisposableStore();
    this.newAuthenticator = new Authenticator(fetch2);
    this.jupyterConnection = new JupyterHubConnectionValidator(fetch2);
  }
  dispose() {
    this.disposable.dispose();
  }
  async captureRemoteJupyterUrl(token, initialUrl = "", displayName = "", validationErrorMessage = "", serverId = uuid(), reasonForCapture = "captureNewUrl") {
    try {
      return await this.captureRemoteJupyterUrlImpl(
        initialUrl,
        displayName,
        validationErrorMessage,
        serverId,
        reasonForCapture,
        token
      );
    } catch (ex) {
      if (!(ex instanceof import_vscode9.CancellationError)) {
        traceError("Failed to capture remote jupyter server", ex);
      }
      throw ex;
    }
  }
  async captureRemoteJupyterUrlImpl(url = "", displayName = "", validationErrorMessage = "", id = uuid(), reasonForCapture = "captureNewUrl", token) {
    const state = {
      auth: { username: "", password: "", token: "", tokenId: "" },
      baseUrl: "",
      serverName: void 0,
      hubVersion: "",
      urlWasPrePopulated: false,
      url,
      displayName,
      displayNamesOfHandles: this.displayNamesOfHandles,
      errorMessage: validationErrorMessage,
      serverId: id
    };
    const steps = [
      new GetUrlStep(this.fetch),
      new GetUserName(),
      new GetPassword(this.newAuthenticator),
      new VerifyConnection(this.jupyterConnection, this.newAuthenticator),
      new ServerSelector(this.fetch),
      new GetDisplayName(this.storage)
    ];
    const disposables = new DisposableStore();
    let nextStep = "Get Url";
    if (url) {
      if (isValidUrl(url)) {
        try {
          state.baseUrl = await getJupyterHubBaseUrl(url, this.fetch, token);
          const version2 = await getVersion(state.baseUrl, this.fetch, token);
          state.hubVersion = version2;
          state.urlWasPrePopulated = true;
          nextStep = reasonForCapture === "captureNewUrl" ? "Get Username" : "Get Url";
        } catch (e) {
          validationErrorMessage = Localized.invalidJupyterHubUrl;
        }
      } else {
        validationErrorMessage = Localized.jupyterSelectURIInvalidURI;
        nextStep = "Get Url";
      }
    }
    try {
      const stepsExecuted = [];
      while (true) {
        const step = steps.filter((s) => !s.disabled).find((s) => s.step === nextStep);
        if (!step) {
          traceError(`Step '${nextStep}' Not found`);
          throw new import_vscode9.CancellationError();
        }
        nextStep = await step.run(state, token);
        if (nextStep === "Before") {
          sendJupyterHubUrlNotAdded("back", step.step);
          return;
        }
        if (nextStep === "After") {
          sendJupyterHubUrlAdded(state.baseUrl, state.hubVersion, id);
          await this.storage.addServerOrUpdate(
            {
              id,
              baseUrl: state.baseUrl,
              displayName: state.displayName,
              serverName: state.serverName
            },
            {
              username: state.auth.username,
              password: state.auth.password,
              token: state.auth.token,
              tokenId: state.auth.tokenId
            }
          );
          return {
            id,
            label: state.displayName
          };
        }
        if (nextStep) {
          if (stepsExecuted.includes(nextStep)) {
            stepsExecuted.splice(stepsExecuted.indexOf(nextStep));
            continue;
          }
          if (step.canNavigateBackToThis) {
            stepsExecuted.push(step.step);
          }
          continue;
        }
        if (stepsExecuted.length) {
          nextStep = stepsExecuted.pop();
          continue;
        }
        sendJupyterHubUrlNotAdded("cancel", step.step);
        return;
      }
    } catch (ex) {
      if (ex instanceof import_vscode9.CancellationError) {
        sendJupyterHubUrlNotAdded("cancel", "");
      } else {
        traceError("Failed to capture remote jupyter server", ex);
        sendJupyterHubUrlNotAdded("error", "");
      }
      throw ex;
    } finally {
      dispose(disposables);
    }
  }
};
var GetUrlStep = class extends DisposableStore {
  constructor(fetch2) {
    super();
    this.fetch = fetch2;
    this.step = "Get Url";
    this.canNavigateBackToThis = true;
  }
  async run(state, token) {
    if (!state.url) {
      try {
        const text = isWebExtension() ? "" : await import_vscode9.env.clipboard.readText();
        const parsedUri = new URL(text.trim());
        state.url = text && parsedUri && parsedUri.protocol.toLowerCase().startsWith("http") ? text : "";
      } catch (e) {
      }
    }
    const validationMessage = state.errorMessage;
    state.errorMessage = "";
    const url = await this.add(new WorkflowInputCapture()).getValue(
      {
        title: Localized.titleOfInputBoxToEnterUrl,
        placeholder: Localized.placeholderOfInputBoxToEnterUrl,
        value: state.url,
        validationMessage,
        validateInput: async (value) => {
          value = value.trim();
          if (!isValidUrl(value)) {
            return Localized.jupyterSelectURIInvalidURI;
          }
          try {
            await getJupyterHubBaseUrl(value, this.fetch, token);
          } catch (ex) {
            traceError(`Failed to determine base url for ${value}`, ex);
            return Localized.invalidJupyterHubUrl;
          }
        }
      },
      token
    );
    if (!url) {
      return;
    }
    state.url = url;
    state.baseUrl = await getJupyterHubBaseUrl(url, this.fetch, token);
    state.hubVersion = await getVersion(state.baseUrl, this.fetch, token);
    state.auth.username = state.auth.username || extractUserNameFromUrl(url) || "";
    state.auth.token = state.auth.token || extractTokenFromUrl(url) || "";
    return "Get Username";
  }
};
var GetUserName = class extends DisposableStore {
  constructor() {
    super(...arguments);
    this.step = "Get Username";
    this.canNavigateBackToThis = true;
  }
  async run(state, token) {
    const errorMessage = state.errorMessage;
    state.errorMessage = "";
    const username = await this.add(new WorkflowInputCapture()).getValue(
      {
        title: Localized.captureUserNameTitle,
        value: state.auth.username || extractUserNameFromUrl(state.url),
        placeholder: Localized.captureUserNamePrompt,
        validationMessage: errorMessage,
        validateInput: async (value) => value ? void 0 : Localized.emptyUserNameErrorMessage
      },
      token
    );
    if (!username) {
      return;
    }
    state.auth.username = username;
    return "Get Password";
  }
};
var GetPassword = class extends DisposableStore {
  constructor(authenticator) {
    super();
    this.authenticator = authenticator;
    this.step = "Get Password";
    this.canNavigateBackToThis = true;
  }
  async run(state, token) {
    const input = this.add(new WorkflowInputCapture());
    const moreInfo = {
      iconPath: new import_vscode9.ThemeIcon("info"),
      tooltip: Localized.authMethodApiTokenMoreInfoTooltip
    };
    const password = await input.getValue(
      {
        title: Localized.capturePasswordTitle,
        placeholder: Localized.capturePasswordPrompt,
        value: state.auth.password || state.auth.token || extractTokenFromUrl(state.url) || "",
        password: true,
        buttons: [moreInfo],
        onDidTriggerButton: (e) => {
          if (e === moreInfo) {
            import_vscode9.env.openExternal(import_vscode9.Uri.parse("https://aka.ms/vscodeJupyterHubApiToken")).then(noop, noop);
          }
        },
        validateInput: async (value) => {
          if (!value) {
            return Localized.emptyPasswordErrorMessage;
          }
          try {
            state.auth.password = value;
            const result = await this.authenticator.getJupyterAuthInfo(
              {
                baseUrl: state.baseUrl,
                authInfo: state.auth
              },
              token
            );
            state.auth.token = result.token || "";
            state.auth.tokenId = result.tokenId || "";
            traceDebug(
              `Got an Auth token = ${state.auth.token.length} && ${state.auth.token.trim().length}, tokenId = ${state.auth.tokenId.length} && ${state.auth.tokenId.trim().length} for ${state.baseUrl}`
            );
          } catch (err) {
            traceError("Failed to get Auth Info", err);
            if (err instanceof import_vscode9.CancellationError) {
              throw err;
            } else if (isSelfCertsError(err)) {
            } else if (isSelfCertsExpiredError(err)) {
            } else {
              traceError(`Failed to validate username and password for ${state.baseUrl}`, err);
              return Localized.usernamePasswordAuthFailure;
            }
          }
        }
      },
      token
    );
    if (!password) {
      return;
    }
    state.auth.password = password;
    return "Verify Connection";
  }
};
var VerifyConnection = class extends DisposableStore {
  constructor(jupyterConnection, authenticator) {
    super();
    this.jupyterConnection = jupyterConnection;
    this.authenticator = authenticator;
    this.step = "Verify Connection";
    this.canNavigateBackToThis = false;
  }
  async run(state, token) {
    try {
      await this.jupyterConnection.validateJupyterUri(state.baseUrl, state.auth, this.authenticator, token);
    } catch (err) {
      traceError("Uri verification error", err);
      if (err instanceof import_vscode9.CancellationError) {
        throw err;
      } else if (isSelfCertsError(err)) {
        state.errorMessage = Localized.jupyterSelfCertFailErrorMessageOnly;
        return "Get Url";
      } else if (isSelfCertsExpiredError(err)) {
        state.errorMessage = Localized.jupyterSelfCertExpiredErrorMessageOnly;
        return "Get Url";
      } else {
        state.errorMessage = Localized.usernamePasswordAuthFailure;
        return "Get Username";
      }
    }
    return "Server Selector";
  }
};
function getServerStatus(server) {
  switch (server.pending) {
    case "spawn":
      return import_vscode9.l10n.t("Starting");
    case "stop":
      return import_vscode9.l10n.t("Shutting down");
    default:
      return server.ready ? import_vscode9.l10n.t("Running") : import_vscode9.l10n.t("Stopped");
  }
}
var ServerSelector = class extends DisposableStore {
  constructor(fetch2) {
    super();
    this.fetch = fetch2;
    this.step = "Server Selector";
    this.canNavigateBackToThis = false;
  }
  async run(state, token) {
    try {
      const servers = await listServers(state.baseUrl, state.auth.username, state.auth.token, this.fetch, token);
      if (servers.length === 0 || servers.length === 1 && !servers[0].name) {
        traceDebug("No servers found for the user");
        this.disabled = true;
        return "Get Display Name";
      }
      const quickPickItems = servers.map((server) => ({
        label: server.name || "Default Server",
        description: `(${getServerStatus(server)})`,
        server
      }));
      const selection = await new WorkflowInputCapture().pickValue(
        {
          title: import_vscode9.l10n.t("Select a Server"),
          quickPickItems
        },
        token
      );
      if (!selection) {
        return;
      }
      state.serverName = selection.server.name;
    } catch (err) {
      if (err instanceof import_vscode9.CancellationError) {
        throw err;
      }
      this.disabled = true;
      traceWarn("Failed to list all of the servers for the user, assuming there aren't any", err);
    }
    return "Get Display Name";
  }
};
var GetDisplayName = class extends DisposableStore {
  constructor(storage) {
    super();
    this.storage = storage;
    this.step = "Get Display Name";
    this.canNavigateBackToThis = false;
  }
  async run(state, token) {
    const suggestedDisplayName = getSuggestedDisplayName(
      state.url,
      state.serverName,
      this.storage.all.map((s) => s.displayName)
    );
    const displayName = await this.add(new WorkflowInputCapture()).getValue(
      {
        title: Localized.jupyterRenameServer,
        value: state.displayName || suggestedDisplayName
      },
      token
    );
    if (!displayName) {
      return;
    }
    state.displayName = displayName;
    return "After";
  }
};
function getSuggestedDisplayName(baseUrl, serverName, usedNames) {
  const usedNamesSet = new Set(usedNames.map((s) => s.toLowerCase()));
  usedNamesSet.add("localhost");
  usedNamesSet.add("");
  const isIPAddress = typeof parseInt(new URL(baseUrl).hostname.charAt(0), 10) === "number";
  let hostName = isIPAddress ? "JupyterHub" : new URL(baseUrl).hostname;
  hostName = serverName ? `${hostName} (${serverName})` : hostName;
  if (!isIPAddress && !usedNamesSet.has(hostName.toLowerCase())) {
    return hostName;
  }
  for (let i = 0; i < 10; i++) {
    const name2 = i === 0 ? hostName : `${hostName} ${i}`;
    if (!usedNamesSet.has(name2.toLowerCase())) {
      return name2;
    }
  }
  return "JupyterHub";
}
function isValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch (err) {
    traceDebug(`Failed to parse URI`, err);
    return false;
  }
}

// src/common/requestCreator.web.ts
var JupyterRequestCreator = class {
  getRequestCtor(getAuthHeaders) {
    class AuthorizingRequest extends Request {
      constructor(input, init) {
        super(input, init);
        const origHeaders = this.headers;
        if (getAuthHeaders) {
          const authorizationHeader = getAuthHeaders();
          const keys = Object.keys(authorizationHeader);
          keys.forEach((k) => origHeaders.append(k, authorizationHeader[k].toString()));
          origHeaders.set("Content-Type", "application/json");
          const origAppend = origHeaders.append.bind(origHeaders);
          origHeaders.append = (k, v) => {
            if (k.toLowerCase() !== "authorization") {
              origAppend(k, v);
            }
          };
        }
      }
    }
    return getAuthHeaders && Object.keys(getAuthHeaders() || {}).length ? AuthorizingRequest : Request;
  }
  getFetchMethod() {
    return fetch;
  }
  getHeadersCtor() {
    return Headers;
  }
  getRequestInit() {
    return { cache: "no-store" };
  }
};

// src/storage.ts
var import_vscode10 = require("vscode");
var serverListStorageKey = "JupyterHubServers";
var AuthKeyPrefix = "JupyterHubServerAuthInfo_";
function getAuthInfoKey(serverId) {
  return `${AuthKeyPrefix}${serverId}`;
}
var JupyterHubServerStorage = class {
  constructor(secrets, globalMemento) {
    this.secrets = secrets;
    this.globalMemento = globalMemento;
    this.disposable = new DisposableStore();
    this._onDidRemove = new import_vscode10.EventEmitter();
    this.onDidRemove = this._onDidRemove.event;
  }
  dispose() {
    this.disposable.dispose();
  }
  get all() {
    return this.globalMemento.get(serverListStorageKey, []);
  }
  async getCredentials(serverId) {
    try {
      const js = await this.secrets.get(getAuthInfoKey(serverId));
      if (!js) {
        return;
      }
      return JSON.parse(js || "");
    } catch (ex) {
      traceError(`Failed to extract stored username/password ${serverId}`);
      return;
    }
  }
  async addServerOrUpdate(server, auth) {
    await Promise.all([
      this.globalMemento.update(serverListStorageKey, this.all.filter((s) => s.id !== server.id).concat(server)),
      this.secrets.store(getAuthInfoKey(server.id), JSON.stringify(auth))
    ]);
  }
  async removeServer(serverId) {
    const item = this.all.find((s) => s.id === serverId);
    await Promise.all([
      this.globalMemento.update(
        serverListStorageKey,
        this.all.filter((s) => s.id !== serverId)
      ),
      this.secrets.delete(getAuthInfoKey(serverId))
    ]);
    if (item) {
      this._onDidRemove.fire(item);
    }
  }
};

// src/common/request.ts
var import_vscode11 = require("vscode");
var SimpleFetch = class {
  constructor(requestCreator) {
    this.requestCreator = requestCreator;
  }
  async send(url, options, token) {
    const allowUnauthorized = import_vscode11.workspace.getConfiguration("jupyter").get("allowUnauthorizedRemoteConnection", false);
    try {
      return await raceCancellationError(
        token,
        this.requestCreator.getFetchMethod()(url, this.addAllowUnauthorized(url, allowUnauthorized, options))
      );
    } catch (e) {
      traceError(`Error sending request to ${url}`, e);
      if (e.message.indexOf("reason: self signed certificate") >= 0) {
        const value = await import_vscode11.window.showErrorMessage(
          Localized.jupyterSelfCertFail(e.message),
          { modal: true },
          Localized.jupyterSelfCertEnable,
          Localized.jupyterSelfCertClose
        );
        if (value === Localized.jupyterSelfCertEnable) {
          solveCertificateProblem("self-signed", "allow");
          await import_vscode11.workspace.getConfiguration("jupyter").updateSetting(
            "allowUnauthorizedRemoteConnection",
            true,
            void 0,
            import_vscode11.ConfigurationTarget.Workspace
          );
          return this.requestCreator.getFetchMethod()(url, this.addAllowUnauthorized(url, true, options));
        } else if (value === Localized.jupyterSelfCertClose) {
          solveCertificateProblem("self-signed", "cancel");
        }
      }
      throw e;
    }
  }
  /**
   * For HTTPS connections respect our allowUnauthorized setting by adding in an agent to enable that on the request
   */
  addAllowUnauthorized(url, allowUnauthorized, options) {
    if (url.startsWith("https") && allowUnauthorized && this.requestCreator.createHttpRequestAgent) {
      const requestAgent = this.requestCreator.createHttpRequestAgent();
      return { ...options, agent: requestAgent };
    }
    return options;
  }
};

// src/jupyterIntegration.ts
var nodeFetch = __toESM(require_browser());
var import_isomorphic_ws = __toESM(require_browser2());
var import_vscode12 = require("vscode");
var JupyterServerIntegration = class {
  constructor(fetch2, jupyterApi, storage, urlCapture, nodeFetchImpl = nodeFetch) {
    this.fetch = fetch2;
    this.jupyterApi = jupyterApi;
    this.storage = storage;
    this.urlCapture = urlCapture;
    this.nodeFetchImpl = nodeFetchImpl;
    this.id = "UserJupyterServerPickerProviderId";
    this.documentation = import_vscode12.Uri.parse("https://aka.ms/vscodeJuptyerExtKernelPickerExistingServer");
    this.disposables = [];
    this._onDidChangeServers = new import_vscode12.EventEmitter();
    this.onDidChangeServers = this._onDidChangeServers.event;
    this.cachedOfAuthInfo = /* @__PURE__ */ new Map();
    this.jupyterConnectionValidator = new JupyterHubConnectionValidator(fetch2);
    this.newAuthenticator = new Authenticator(fetch2);
    const collection = this.jupyterApi.createJupyterServerCollection(
      this.id,
      Localized.KernelActionSourceTitle,
      this
    );
    this.disposables.push(collection);
    this.disposables.push(this._onDidChangeServers);
    collection.commandProvider = this;
    collection.documentation = import_vscode12.Uri.parse("https://aka.ms/vscodeJupyterHub");
  }
  dispose() {
    dispose(this.disposables);
  }
  async handleCommand(command, token) {
    try {
      const url = "url" in command ? command.url : void 0;
      let displayName = void 0;
      let serverId = void 0;
      let whyCaptureUrl = "captureNewUrl";
      if (url && this.previouslyEnteredUrlTypedIntoQuickPick === url && this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick) {
        whyCaptureUrl = "cameHereFromBackButton";
        serverId = this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick.id;
        displayName = this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick.label;
      }
      const server = await this.urlCapture.captureRemoteJupyterUrl(
        token,
        url,
        displayName,
        void 0,
        serverId,
        whyCaptureUrl
      );
      if (!server) {
        this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick = void 0;
        this.previouslyEnteredUrlTypedIntoQuickPick = void 0;
        return;
      }
      this._onDidChangeServers.fire();
      this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick = server;
      return server;
    } catch (ex) {
      if (!(ex instanceof import_vscode12.CancellationError)) {
        traceError(`Failed to select a Jupyter Server`, ex);
      }
      this.previouslyEnteredUrlTypedIntoQuickPick = void 0;
      this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick = void 0;
      throw ex;
    }
  }
  /**
   * @param value Value entered by the user in the quick pick
   */
  async provideCommands(value, _token) {
    this.previouslyEnteredJupyterServerBasedOnUrlTypedIntoQuickPick = void 0;
    this.previouslyEnteredUrlTypedIntoQuickPick = void 0;
    let url = "";
    try {
      value = (value || "").trim();
      if (["http:", "https:"].includes(new URL(value.trim()).protocol.toLowerCase())) {
        url = value;
      }
    } catch (e) {
    }
    if (url) {
      this.previouslyEnteredUrlTypedIntoQuickPick = url;
      const label = Localized.connectToToTheJupyterServer(url);
      return [{ label, url }];
    }
    return [{ label: Localized.labelOfCommandToEnterUrl, canBeAutoSelected: true }];
  }
  async removeJupyterServer(server) {
    const tokenSource = new import_vscode12.CancellationTokenSource();
    try {
      const serverInfo = this.storage.all.find((s) => s.id === server.id);
      const authInfo = await this.storage.getCredentials(server.id).catch(noop);
      if (serverInfo && (authInfo == null ? void 0 : authInfo.token) && authInfo.tokenId) {
        await deleteApiToken(
          serverInfo.baseUrl,
          authInfo.username,
          authInfo.tokenId,
          authInfo.token,
          this.fetch,
          tokenSource.token
        ).catch((ex) => traceDebug(`Failed to delete token ${server.id}`, ex));
      }
      await this.storage.removeServer(server.id);
    } catch (ex) {
      traceDebug(`Failed to remove server ${server.id}`, ex);
    } finally {
      this._onDidChangeServers.fire();
    }
  }
  async provideJupyterServers(_token) {
    return this.storage.all.map((s) => {
      return {
        id: s.id,
        label: s.displayName
      };
    });
  }
  async resolveJupyterServer(server, token) {
    if (!this.cachedOfAuthInfo.get(server.id)) {
      const promise = this.resolveJupyterServerImpl(server, token);
      promise.catch((ex) => {
        if (this.cachedOfAuthInfo.get(server.id) === promise) {
          traceError(`Failed to get auth information for server ${server.id}`, ex);
          this.cachedOfAuthInfo.delete(server.id);
        }
      });
      this.cachedOfAuthInfo.set(server.id, promise);
    }
    return this.cachedOfAuthInfo.get(server.id);
  }
  async resolveJupyterServerImpl(server, cancelToken) {
    const serverInfo = this.storage.all.find((s) => s.id === server.id);
    if (!serverInfo) {
      throw new Error("Server not found");
    }
    const authInfo = await this.storage.getCredentials(server.id);
    if (!authInfo) {
      throw new Error(`Server ${server.id} not found`);
    }
    const result = await this.newAuthenticator.getJupyterAuthInfo(
      { baseUrl: serverInfo.baseUrl, authInfo },
      cancelToken
    );
    if (result.tokenId && (authInfo == null ? void 0 : authInfo.token) !== result.token) {
      try {
        await this.storage.addServerOrUpdate(
          {
            baseUrl: serverInfo.baseUrl,
            displayName: serverInfo.displayName,
            id: serverInfo.id,
            serverName: serverInfo.serverName
          },
          {
            password: authInfo.password || "",
            username: authInfo.username || "",
            token: result.token,
            tokenId: result.tokenId
          }
        );
      } catch (ex) {
        traceError(`Failed to update server with the latest token information ${server.id}`, ex);
      }
    }
    await this.jupyterConnectionValidator.validateJupyterUri(
      serverInfo.baseUrl,
      { username: authInfo.username, password: authInfo.password, token: result.token },
      this.newAuthenticator,
      cancelToken
    ).catch(noop);
    await this.jupyterConnectionValidator.ensureServerIsRunning(
      serverInfo.baseUrl,
      serverInfo.serverName,
      { username: authInfo.username, password: authInfo.password, token: result.token },
      this.newAuthenticator,
      cancelToken
    ).catch(noop);
    const rawBaseUrl = await getUserJupyterUrl(
      serverInfo.baseUrl,
      authInfo.username || "",
      serverInfo.serverName,
      authInfo.token,
      this.fetch,
      cancelToken
    );
    const baseUrl = import_vscode12.Uri.parse(rawBaseUrl);
    const brokenUrl = new this.nodeFetchImpl.Request(baseUrl.toString(true)).url;
    const correctUrl = new this.nodeFetchImpl.Request(rawBaseUrl).url;
    const brokenWsUrl = brokenUrl.replace("http", "ws");
    const brokenWsUrl2 = baseUrl.toString(true).replace("http", "ws");
    const correctWsUrl = correctUrl.replace("http", "ws");
    const ourFetch = async (input, init) => {
      const newUrl = input.url.replace(brokenUrl, correctUrl);
      init = init || {
        method: input.method,
        body: input.body,
        headers: input.headers,
        redirect: input.redirect,
        cache: input.cache,
        credentials: input.credentials,
        integrity: input.integrity,
        keepalive: input.keepalive,
        mode: input.mode,
        referrer: input.referrer,
        referrerPolicy: input.referrerPolicy,
        signal: input.signal
      };
      const newInput = new this.nodeFetchImpl.Request(newUrl, init);
      return this.nodeFetchImpl.default(newInput, init);
    };
    const headers = {
      Authorization: `token ${result.token}`
    };
    const addOurHeaders = (options) => {
      options = options || {};
      return {
        ...options,
        headers: {
          ...options.headers || {},
          ...headers
        }
      };
    };
    class OurWebSocket extends import_isomorphic_ws.default {
      constructor(url, protocols, options) {
        super(
          url.replace(brokenWsUrl, correctWsUrl).replace(brokenWsUrl2, correctWsUrl),
          protocols,
          addOurHeaders(options)
        );
      }
    }
    const connectionInformation = {
      baseUrl,
      token: result.token,
      headers
    };
    connectionInformation.fetch = ourFetch;
    connectionInformation.WebSocket = OurWebSocket;
    return {
      ...server,
      connectionInformation
    };
  }
};

// src/extension.web.ts
async function activate(context) {
  trackInstallOfExtension();
  setIsWebExtension();
  context.subscriptions.push(disposableStore);
  getJupyterApi().then((api) => {
    const requestCreator = new JupyterRequestCreator();
    const fetch2 = new SimpleFetch(requestCreator);
    const storage = disposableStore.add(new JupyterHubServerStorage(context.secrets, context.globalState));
    const uriCapture = disposableStore.add(new JupyterHubUrlCapture(fetch2, storage));
    disposableStore.add(new JupyterServerIntegration(fetch2, api.exports, storage, uriCapture));
  }).catch((ex) => traceError("Failed to activate jupyter extension", ex));
  if (context.extensionMode === import_vscode13.ExtensionMode.Test) {
    return { RequestCreator: JupyterRequestCreator };
  }
}
/*! Bundled license information:

@microsoft/dynamicproto-js/lib/dist/esm/dynamicproto-js.js:
  (*!
   * Microsoft Dynamic Proto Utility, 1.1.9
   * Copyright (c) Microsoft and contributors. All rights reserved.
   *)
*/
