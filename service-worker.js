/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts(
  "/precache-manifest.b4ae139a6ab7d467b86105c8039acd0a.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(mp4|webm)$/, workbox.strategies.cacheFirst({ cacheName: "video-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\.(png)$/, workbox.strategies.cacheFirst({ cacheName: "image-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\.(woff|woff2)$/, workbox.strategies.cacheFirst({ cacheName: "font-cache", plugins: [] }), 'GET');
