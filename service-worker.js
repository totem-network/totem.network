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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.dce2c4e29653f7251268088ec16013af.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(mp4|webm)$/, new workbox.strategies.CacheFirst({ "cacheName":"video-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\.(png)$/, new workbox.strategies.CacheFirst({ "cacheName":"image-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/\.(woff|woff2)$/, new workbox.strategies.CacheFirst({ "cacheName":"font-cache", plugins: [] }), 'GET');
