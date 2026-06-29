/* Worker-side pmtiles protocol registration for MapLibre GL JS v5 */
importScripts('/pmtiles-lib.js');
const protocol = new pmtiles.Protocol();
self.addProtocol('pmtiles', protocol.tile.bind(protocol));
