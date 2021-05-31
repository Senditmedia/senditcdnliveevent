var _0x1a01 = [
  "ErrorTypes",
  "details",
  "MEDIA_ERROR",
  "classList",
  "Mouse\x20idle\x20for\x203\x20sec",
  "online",
  "NETWORK_ERROR",
  "get",
  "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "675755SetsvK",
  "body",
  "send",
  "createElement",
  "HEAD",
  "1051378AcEuGe",
  "1QZHUVT",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  ".m3u8",
  "fatal",
  "value",
  "canPlayType",
  "MEDIA_ATTACHED",
  "attachMedia",
  "OTHER_ERROR",
  "593148KKwxWq",
  "addEventListener",
  "https://externalliveevent.sendit.media/vod/",
  "1UOdfkm",
  "310891KkKcZs",
  "input",
  "Events",
  "939573TmRJCH",
  "mousemove",
  "hidden-controls",
  "vod",
  "recoverMediaError",
  "DONE",
  "display",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "open",
  "src",
  "quality",
  "play",
  "status",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "none",
  "MANIFEST_PARSED",
  "reloadOnError()",
  "isSupported",
  "setAttribute",
  "type",
  "load",
  "remove",
  "abort",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "ErrorDetails",
  "detachMedia",
  "style",
  "366632ELSAJe",
  "bufferStalledError",
  "url",
  "key",
  "search",
  "https://error.sendit.media/hls/error.m3u8",
  "https://cfvliveevent.sendit.media/",
  "DefaultConfig",
  "getElementById",
  "destroy",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "ERROR",
  "onerror",
  "undefined",
  "loop",
  "loadSource",
  "841292CeSWPf",
  "add",
  "log",
];
var _0x2ee4ef = _0x5d2b;
(function (_0x2f53d6, _0x14c861) {
  var _0x12f387 = _0x5d2b;
  while (!![]) {
    try {
      var _0x343e67 =
        parseInt(_0x12f387(0x1c2)) +
        -parseInt(_0x12f387(0x1c1)) * parseInt(_0x12f387(0x1be)) +
        -parseInt(_0x12f387(0x1b5)) * parseInt(_0x12f387(0x1a3)) +
        -parseInt(_0x12f387(0x1af)) +
        parseInt(_0x12f387(0x1c5)) +
        parseInt(_0x12f387(0x1b4)) +
        parseInt(_0x12f387(0x193));
      if (_0x343e67 === _0x14c861) break;
      else _0x2f53d6["push"](_0x2f53d6["shift"]());
    } catch (_0x4b4acb) {
      _0x2f53d6["push"](_0x2f53d6["shift"]());
    }
  }
})(_0x1a01, 0x884c7);
var videoError = document[_0x2ee4ef(0x19b)]("errorVideo"),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window["location"][_0x2ee4ef(0x197)],
  urlParams = new URLSearchParams(queryString),
  key = urlParams["get"](_0x2ee4ef(0x196)),
  vod = urlParams[_0x2ee4ef(0x1ad)](_0x2ee4ef(0x1c8));
if (vod == "" || vod == null)
  var videoSrc = _0x2ee4ef(0x199) + key + _0x2ee4ef(0x1b7),
    videoErrorSrc = _0x2ee4ef(0x198);
else
  var videoSrc = _0x2ee4ef(0x1c0) + key + "/playlist.m3u8",
    videoErrorSrc = _0x2ee4ef(0x198);
var liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document[_0x2ee4ef(0x1b2)](_0x2ee4ef(0x1c3));
(element2Monitor["type"] = "hidden"),
  (element2Monitor[_0x2ee4ef(0x1b9)] = _0x2ee4ef(0x1ab)),
  document[_0x2ee4ef(0x1b0)]["appendChild"](element2Monitor);
var element2MonitorStartValue = _0x2ee4ef(0x1ab),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x2ee4ef(0x1d6)]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0xf36ff9) {
      var _0x2e9caa = _0x2ee4ef;
      let _0xfad8ea = new Hls[_0x2e9caa(0x19a)]["loader"](_0xf36ff9);
      (this[_0x2e9caa(0x1db)] = () => _0xfad8ea[_0x2e9caa(0x1db)]()),
        (this[_0x2e9caa(0x19c)] = () => _0xfad8ea[_0x2e9caa(0x19c)]()),
        (this[_0x2e9caa(0x1d9)] = (_0x311f32, _0x174b84, _0x21c7b5) => {
          var _0x4f5855 = _0x2e9caa;
          let { type: _0x3d953f, url: _0x2767cd } = _0x311f32;
          _0xfad8ea[_0x4f5855(0x1d9)](_0x311f32, _0x174b84, _0x21c7b5);
        });
    },
  });
  hls[_0x2ee4ef(0x1a2)](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls[_0x2ee4ef(0x1c4)][_0x2ee4ef(0x1bb)], function () {
      var _0x5d3e63 = _0x2ee4ef;
      hls["on"](
        Hls[_0x5d3e63(0x1c4)][_0x5d3e63(0x1d4)],
        function (_0x3c7b35, _0xec23c0) {
          var _0x500ebe = _0x5d3e63;
          video[_0x500ebe(0x1d0)]();
        }
      );
    }),
    hls["on"](
      Hls[_0x2ee4ef(0x1c4)][_0x2ee4ef(0x19e)],
      function (_0x1d7d3e, _0xdc288d) {
        var _0x52afec = _0x2ee4ef,
          _0x419f5c = _0xdc288d[_0x52afec(0x1d8)],
          _0x422c2 = _0xdc288d["details"],
          _0x5638a7 = _0xdc288d[_0x52afec(0x1b8)];
        switch (_0xdc288d[_0x52afec(0x1a7)]) {
          case Hls[_0x52afec(0x190)]["FRAG_LOAD_ERROR"]:
            console["debug"](_0x52afec(0x1dc));
            break;
          default:
            break;
        }
        if (_0x422c2 == _0x52afec(0x194)) {
          if (errorLoop > 0x0) {
          } else errorLoop++;
        }
        if (_0xdc288d[_0x52afec(0x1b8)])
          switch (_0x419f5c) {
            case Hls[_0x52afec(0x1a6)][_0x52afec(0x1ac)]:
              console[_0x52afec(0x1a5)](_0x52afec(0x1ae));
              hls[_0x52afec(0x195)] == videoSrc &&
                (hls[_0x52afec(0x191)](),
                hls[_0x52afec(0x1a2)](videoErrorSrc),
                hls[_0x52afec(0x1bc)](video),
                video["play"](),
                (video["loop"] = !![]),
                (element2Monitor[_0x52afec(0x1b9)] = "offline"));
              errorLoop = 0x0;
              break;
            case Hls["ErrorTypes"][_0x52afec(0x1a8)]:
              console[_0x52afec(0x1a5)](_0x52afec(0x1d2)),
                hls[_0x52afec(0x1c9)]();
              break;
            case Hls["ErrorTypes"][_0x52afec(0x1bd)]:
              console[_0x52afec(0x1a5)](_0x52afec(0x19d)),
                hls[_0x52afec(0x1c9)]();
              break;
            default:
              hls[_0x52afec(0x19c)]();
              break;
          }
      }
    );
  function track_change() {
    var _0x39c50b = _0x2ee4ef;
    element2Monitor[_0x39c50b(0x1b9)] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x39c50b(0x1b9)]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video[_0x2ee4ef(0x1ba)]("application/vnd.apple.mpegurl")) {
    (hlsOrHtmlPlayer = ![]),
      (video[_0x2ee4ef(0x1ce)] = videoSrc),
      video[_0x2ee4ef(0x1d7)](_0x2ee4ef(0x19f), _0x2ee4ef(0x1d5));
    function reloadOnError() {
      var _0x32045d = _0x2ee4ef;
      errorCount == 0x0 &&
        ((video[_0x32045d(0x1ce)] = videoErrorSrc),
        (video["muted"] = !![]),
        (video["loop"] = !![]),
        video["load"](),
        video[_0x32045d(0x1d0)](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  var _0x39a268 = _0x2ee4ef;
  if (hls[_0x39a268(0x195)] == videoErrorSrc) {
    var _0x33dd5a = new XMLHttpRequest();
    _0x33dd5a["open"]("HEAD", videoSrc),
      (_0x33dd5a["onreadystatechange"] = function () {
        var _0x22e810 = _0x39a268;
        if (this["readyState"] == this[_0x22e810(0x1ca)]) {
          if (
            this[_0x22e810(0x1d1)] == 0x194 &&
            hls[_0x22e810(0x195)] == videoErrorSrc
          )
            console[_0x22e810(0x1a5)](
              "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
              videoSrc
            );
          else
            this[_0x22e810(0x1d1)] == 0xc8 &&
              hls["url"] == videoErrorSrc &&
              (console[_0x22e810(0x1a5)](_0x22e810(0x1b6)),
              (element2Monitor["value"] = "online"),
              (somethingChanged = ![]),
              (video[_0x22e810(0x1a1)] = ![]),
              hls[_0x22e810(0x191)](),
              hls[_0x22e810(0x1a2)](videoSrc),
              hls[_0x22e810(0x1bc)](video),
              video[_0x22e810(0x1d0)]());
        }
      }),
      _0x33dd5a[_0x39a268(0x1b1)](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x5cde30 = _0x2ee4ef,
    _0x254ea6 = new XMLHttpRequest();
  _0x254ea6[_0x5cde30(0x1cd)](_0x5cde30(0x1b3), videoSrc),
    (_0x254ea6["onreadystatechange"] = function () {
      var _0x34d543 = _0x5cde30;
      if (this["readyState"] == this[_0x34d543(0x1ca)]) {
        if (
          this[_0x34d543(0x1d1)] == 0x194 &&
          video[_0x34d543(0x1ce)] == videoSrc
        )
          console[_0x34d543(0x1a5)](_0x34d543(0x1cc), videoSrc),
            (video[_0x34d543(0x1a1)] = !![]),
            (video[_0x34d543(0x1ce)] = videoErrorSrc),
            video[_0x34d543(0x1d9)](),
            video[_0x34d543(0x1d0)]();
        else
          this[_0x34d543(0x1d1)] == 0xc8 &&
            video[_0x34d543(0x1ce)] == videoErrorSrc &&
            (console[_0x34d543(0x1a5)](_0x34d543(0x1b6)),
            (video[_0x34d543(0x1a1)] = ![]),
            (video[_0x34d543(0x1ce)] = videoSrc),
            video[_0x34d543(0x1d9)](),
            video[_0x34d543(0x1d0)]());
      }
    }),
    _0x254ea6[_0x5cde30(0x1b1)](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
typeof hls === _0x2ee4ef(0x1a0) &&
  (document[_0x2ee4ef(0x19b)](_0x2ee4ef(0x1cf))[_0x2ee4ef(0x192)][
    _0x2ee4ef(0x1cb)
  ] = _0x2ee4ef(0x1d3));
let timeout = null;
function _0x5d2b(_0x3a7cd7, _0x3b974b) {
  _0x3a7cd7 = _0x3a7cd7 - 0x190;
  var _0x1a01f4 = _0x1a01[_0x3a7cd7];
  return _0x1a01f4;
}
const videoControlsDiv = document[_0x2ee4ef(0x19b)]("video-controls");
document[_0x2ee4ef(0x1bf)](_0x2ee4ef(0x1c6), (_0x25470a) => {
  var _0x1b79ae = _0x2ee4ef;
  (shouldHide = ![]),
    clearTimeout(timeout),
    videoControlsDiv[_0x1b79ae(0x1a9)]["contains"]("hidden-controls") &&
      videoControlsDiv[_0x1b79ae(0x1a9)][_0x1b79ae(0x1da)](_0x1b79ae(0x1c7)),
    (timeout = setTimeout(function () {
      var _0xc5050c = _0x1b79ae;
      console["log"](_0xc5050c(0x1aa)),
        (shouldHide = !![]),
        videoControlsDiv["classList"][_0xc5050c(0x1a4)](_0xc5050c(0x1c7));
    }, 0x7d0));
});
