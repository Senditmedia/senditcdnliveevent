var _0x35d9 = [
  "loader",
  "none",
  "destroy",
  "send",
  "MEDIA_ERROR",
  "readyState",
  "1lgcWcU",
  "OTHER_ERROR",
  "ErrorDetails",
  "275861gXlAtA",
  "3FJWqOX",
  "https://externalliveevent.sendit.media/vod/",
  "get",
  "MEDIA_ATTACHED",
  "HEAD",
  "/playlist.m3u8",
  "display",
  "style",
  "53527YVkTeK",
  "input",
  "url",
  "reloadOnError()",
  "isSupported",
  "online",
  "Send\x20it:\x20Live\x20endpoint\x20is\x20up,\x20switching\x20to\x20it",
  "ErrorTypes",
  "1KsuGrO",
  "abort",
  "onreadystatechange",
  "Send\x20it:\x20Media\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "820058VwZMVH",
  "src",
  "appendChild",
  "7DoZHgU",
  "play",
  "errorVideo",
  "location",
  "16433OBLVGa",
  "value",
  "recoverMediaError",
  "undefined",
  "onerror",
  "Send\x20it:\x20Other\x20error,\x20we\x20trying\x20to\x20fix\x20it",
  "loop",
  "log",
  "https://cfvliveevent.sendit.media/",
  "Send\x20it:\x20Live\x20endpoint\x20currently\x20down",
  "Send\x20it:\x20Fragment\x20ERROR\x20DECTECT",
  "hidden",
  "type",
  "MANIFEST_PARSED",
  "https://error.sendit.media/hls/error.m3u8",
  "1283343THqDcu",
  "4RcYehr",
  "open",
  "attachMedia",
  "ERROR",
  "bufferStalledError",
  "detachMedia",
  "debug",
  "key",
  "body",
  "search",
  "details",
  "1248159QeOKHr",
  "load",
  "status",
  "351954eVaVsf",
  "2KZJVfX",
  "getElementById",
  ".m3u8",
  "createElement",
  "Events",
  "fatal",
  "offline",
  "FRAG_LOAD_ERROR",
  "vod",
];
var _0x485e = function (_0x30c38f, _0x17bd2e) {
  _0x30c38f = _0x30c38f - 0xc9;
  var _0x35d94d = _0x35d9[_0x30c38f];
  return _0x35d94d;
};
var _0x4daf1d = _0x485e;
(function (_0x268b65, _0x4c8fb0) {
  var _0x20592d = _0x485e;
  while (!![]) {
    try {
      var _0x1de98 =
        parseInt(_0x20592d(0x102)) * -parseInt(_0x20592d(0xf4)) +
        -parseInt(_0x20592d(0xc9)) * parseInt(_0x20592d(0xe4)) +
        parseInt(_0x20592d(0xff)) * -parseInt(_0x20592d(0x112)) +
        parseInt(_0x20592d(0x115)) +
        -parseInt(_0x20592d(0x103)) * -parseInt(_0x20592d(0xdd)) +
        parseInt(_0x20592d(0xe0)) * parseInt(_0x20592d(0xd1)) +
        parseInt(_0x20592d(0xd9)) * parseInt(_0x20592d(0xf3));
      if (_0x1de98 === _0x4c8fb0) break;
      else _0x268b65["push"](_0x268b65["shift"]());
    } catch (_0x2c416b) {
      _0x268b65["push"](_0x268b65["shift"]());
    }
  }
})(_0x35d9, 0xd417f);
var videoError = document[_0x4daf1d(0x104)](_0x4daf1d(0xe2)),
  bufferStallErrors = 0x0,
  errorLoop = 0x0,
  somethingChanged = ![];
const queryString = window[_0x4daf1d(0xe3)][_0x4daf1d(0xfd)],
  urlParams = new URLSearchParams(queryString),
  key = urlParams[_0x4daf1d(0xcb)](_0x4daf1d(0xfb)),
  vod = urlParams[_0x4daf1d(0xcb)](_0x4daf1d(0x10b));
if (vod == "" || vod == null)
  var videoSrc = _0x4daf1d(0xec) + key + _0x4daf1d(0x105),
    videoErrorSrc = _0x4daf1d(0xf2);
else
  var videoSrc = _0x4daf1d(0xca) + key + _0x4daf1d(0xce),
    videoErrorSrc = "https://error.sendit.media/hls/error.m3u8";
var liveOnline = !![],
  errorCount = 0x0,
  stalledCount = 0x0,
  element2Monitor = document[_0x4daf1d(0x106)](_0x4daf1d(0xd2));
(element2Monitor[_0x4daf1d(0xf0)] = _0x4daf1d(0xef)),
  (element2Monitor["value"] = _0x4daf1d(0xd6)),
  document[_0x4daf1d(0xfc)][_0x4daf1d(0xdf)](element2Monitor);
var element2MonitorStartValue = _0x4daf1d(0xd6),
  testing = ![],
  hlsOrHtmlPlayer = null;
if (Hls[_0x4daf1d(0xd5)]()) {
  hlsOrHtmlPlayer = !![];
  var hls = new Hls({
    debug: ![],
    enableWorker: !![],
    startLevel: 0x3,
    autoLevelEnabled: !![],
    pLoader: function (_0x41d8f2) {
      var _0x48ff23 = _0x4daf1d;
      let _0x5a94c5 = new Hls["DefaultConfig"][_0x48ff23(0x10c)](_0x41d8f2);
      (this["abort"] = () => _0x5a94c5[_0x48ff23(0xda)]()),
        (this[_0x48ff23(0x10e)] = () => _0x5a94c5["destroy"]()),
        (this["load"] = (_0x3212d3, _0x581248, _0x3e0f55) => {
          let { type: _0x1f3e7d, url: _0x152647 } = _0x3212d3;
          _0x5a94c5["load"](_0x3212d3, _0x581248, _0x3e0f55);
        });
    },
  });
  hls["loadSource"](videoSrc),
    hls["attachMedia"](video),
    hls["on"](Hls["Events"][_0x4daf1d(0xcc)], function () {
      var _0x3b2414 = _0x4daf1d;
      hls["on"](
        Hls[_0x3b2414(0x107)][_0x3b2414(0xf1)],
        function (_0x5a4c09, _0x4ffc66) {
          var _0x1330d0 = _0x3b2414;
          video[_0x1330d0(0xe1)]();
        }
      );
    }),
    hls["on"](
      Hls[_0x4daf1d(0x107)][_0x4daf1d(0xf7)],
      function (_0x1d2dbe, _0x3d7fa6) {
        var _0x3ad435 = _0x4daf1d,
          _0x47e26b = _0x3d7fa6[_0x3ad435(0xf0)],
          _0x41e34e = _0x3d7fa6["details"],
          _0x4ce30e = _0x3d7fa6[_0x3ad435(0x108)];
        switch (_0x3d7fa6[_0x3ad435(0xfe)]) {
          case Hls[_0x3ad435(0x114)][_0x3ad435(0x10a)]:
            console[_0x3ad435(0xfa)](_0x3ad435(0xee));
            break;
          default:
            break;
        }
        if (_0x41e34e == _0x3ad435(0xf8)) {
          if (errorLoop > 0x0) {
          } else errorLoop++;
        }
        if (_0x3d7fa6[_0x3ad435(0x108)])
          switch (_0x47e26b) {
            case Hls[_0x3ad435(0xd8)]["NETWORK_ERROR"]:
              console[_0x3ad435(0xeb)](
                "Send\x20it:\x20Network\x20error,\x20we\x20trying\x20to\x20fix\x20it"
              );
              hls[_0x3ad435(0xd3)] == videoSrc &&
                (hls["detachMedia"](),
                hls["loadSource"](videoErrorSrc),
                hls[_0x3ad435(0xf6)](video),
                video[_0x3ad435(0xe1)](),
                (video[_0x3ad435(0xea)] = !![]),
                (element2Monitor["value"] = _0x3ad435(0x109)));
              errorLoop = 0x0;
              break;
            case Hls[_0x3ad435(0xd8)][_0x3ad435(0x110)]:
              console["log"](_0x3ad435(0xdc)), hls["recoverMediaError"]();
              break;
            case Hls[_0x3ad435(0xd8)][_0x3ad435(0x113)]:
              console[_0x3ad435(0xeb)](_0x3ad435(0xe9)), hls[_0x3ad435(0xe6)]();
              break;
            default:
              hls[_0x3ad435(0x10e)]();
              break;
          }
      }
    );
  function track_change() {
    var _0x1f93fb = _0x4daf1d;
    element2Monitor[_0x1f93fb(0xe5)] != element2MonitorStartValue &&
      ((element2MonitorStartValue = element2Monitor[_0x1f93fb(0xe5)]),
      (somethingChanged = !![]),
      onlineMonitor());
  }
  setInterval(function () {
    track_change();
  }, 0x64),
    onlineMonitor();
} else {
  if (video["canPlayType"]("application/vnd.apple.mpegurl")) {
    (hlsOrHtmlPlayer = ![]),
      (video[_0x4daf1d(0xde)] = videoSrc),
      video["setAttribute"](_0x4daf1d(0xe8), _0x4daf1d(0xd4));
    function reloadOnError() {
      var _0xa42903 = _0x4daf1d;
      errorCount == 0x0 &&
        ((video[_0xa42903(0xde)] = videoErrorSrc),
        (video["muted"] = !![]),
        (video["loop"] = !![]),
        video[_0xa42903(0x100)](),
        video["play"](),
        errorCount == 0x1);
    }
  }
}
function onlineMonitor() {
  var _0x4a9a4f = _0x4daf1d;
  if (hls[_0x4a9a4f(0xd3)] == videoErrorSrc) {
    var _0x1d77fc = new XMLHttpRequest();
    _0x1d77fc[_0x4a9a4f(0xf5)](_0x4a9a4f(0xcd), videoSrc),
      (_0x1d77fc[_0x4a9a4f(0xdb)] = function () {
        var _0xcd0504 = _0x4a9a4f;
        if (this["readyState"] == this["DONE"]) {
          if (
            this[_0xcd0504(0x101)] == 0x194 &&
            hls[_0xcd0504(0xd3)] == videoErrorSrc
          )
            console["log"](_0xcd0504(0xed), videoSrc);
          else
            this[_0xcd0504(0x101)] == 0xc8 &&
              hls["url"] == videoErrorSrc &&
              (console[_0xcd0504(0xeb)](_0xcd0504(0xd7)),
              (element2Monitor[_0xcd0504(0xe5)] = _0xcd0504(0xd6)),
              (somethingChanged = ![]),
              (video[_0xcd0504(0xea)] = ![]),
              hls[_0xcd0504(0xf9)](),
              hls["loadSource"](videoSrc),
              hls[_0xcd0504(0xf6)](video),
              video[_0xcd0504(0xe1)]());
        }
      }),
      _0x1d77fc[_0x4a9a4f(0x10f)](),
      setTimeout(onlineMonitor, 0x7d0);
  }
}
onlineMonitorHLSNative();
function onlineMonitorHLSNative() {
  var _0x342505 = _0x4daf1d,
    _0x49502c = new XMLHttpRequest();
  _0x49502c["open"]("HEAD", videoSrc),
    (_0x49502c[_0x342505(0xdb)] = function () {
      var _0x384ce1 = _0x342505;
      if (this[_0x384ce1(0x111)] == this["DONE"]) {
        if (
          this[_0x384ce1(0x101)] == 0x194 &&
          video[_0x384ce1(0xde)] == videoSrc
        )
          console[_0x384ce1(0xeb)](_0x384ce1(0xed), videoSrc),
            (video[_0x384ce1(0xea)] = !![]),
            (video[_0x384ce1(0xde)] = videoErrorSrc),
            video["load"](),
            video[_0x384ce1(0xe1)]();
        else
          this[_0x384ce1(0x101)] == 0xc8 &&
            video["src"] == videoErrorSrc &&
            (console[_0x384ce1(0xeb)](_0x384ce1(0xd7)),
            (video[_0x384ce1(0xea)] = ![]),
            (video[_0x384ce1(0xde)] = videoSrc),
            video[_0x384ce1(0x100)](),
            video[_0x384ce1(0xe1)]());
      }
    }),
    _0x49502c[_0x342505(0x10f)](),
    setTimeout(onlineMonitorHLSNative, 0x1f40);
}
typeof hls === _0x4daf1d(0xe7) &&
  (document[_0x4daf1d(0x104)]("quality")[_0x4daf1d(0xd0)][
    _0x4daf1d(0xcf)
  ] = _0x4daf1d(0x10d));
