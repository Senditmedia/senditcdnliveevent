const _0x1eeb = [
  "setDate",
  "false",
  "getDate",
  "5oyaUJy",
  "19rFDuAX",
  "error",
  "onmessage",
  "1sIkvKq",
  "onMessage",
  "data",
  "ERROR",
  "joinStream",
  "wasClean",
  "socket",
  "listeners",
  "close",
  "get",
  "url",
  "events",
  "1922684EHtHfO",
  "48027HeAcWh",
  "1aLKWvE",
  "location",
  "send",
  "1206137mfWUgc",
  "423159EOkOgg",
  "[socket\x20close]\x20connection\x20died",
  "65576UNcuDA",
  "slug",
  "184193TRhiMz",
  "parse",
  "onload",
  "wss://jrn1gpil42.execute-api.af-south-1.amazonaws.com/production",
  "onclose",
  "stream",
  "onopen",
  "onunload",
  "[socket\x20closing]",
  "251304jxlkpO",
  "log",
  "[socket\x20error]",
  "16INAFcN",
  "key",
  "action",
];
const _0x484375 = _0xc9e3;
(function (_0x43072a, _0x93ca3f) {
  const _0x89ca28 = _0xc9e3;
  while (!![]) {
    try {
      const _0x3aab88 =
        parseInt(_0x89ca28(0xb3)) * -parseInt(_0x89ca28(0xbb)) +
        parseInt(_0x89ca28(0xd1)) * parseInt(_0x89ca28(0xb6)) +
        parseInt(_0x89ca28(0xb9)) * -parseInt(_0x89ca28(0xce)) +
        parseInt(_0x89ca28(0xc4)) * -parseInt(_0x89ca28(0xcd)) +
        -parseInt(_0x89ca28(0xb7)) +
        -parseInt(_0x89ca28(0xb2)) * -parseInt(_0x89ca28(0xc7)) +
        parseInt(_0x89ca28(0xb1));
      if (_0x3aab88 === _0x93ca3f) break;
      else _0x43072a["push"](_0x43072a["shift"]());
    } catch (_0x39b669) {
      _0x43072a["push"](_0x43072a["shift"]());
    }
  }
})(_0x1eeb, 0xc03ed);
const queryString1 = window[_0x484375(0xb4)]["search"],
  urlParams1 = new URLSearchParams(queryString1),
  slugIn = urlParams1[_0x484375(0xae)](_0x484375(0xc8)),
  socketEnable = urlParams1[_0x484375(0xae)](_0x484375(0xab)) || "true";
let socket = null;
function _0xc9e3(_0x4ffde6, _0x296128) {
  _0x4ffde6 = _0x4ffde6 - 0xa9;
  let _0x1eebec = _0x1eeb[_0x4ffde6];
  return _0x1eebec;
}
class Socket {
  constructor(_0x587d38, _0x1eb1be) {
    const _0x39a3dc = _0x484375;
    (this[_0x39a3dc(0xaf)] = _0x39a3dc(0xbe)),
      (this["socket"] = null),
      (this["stream"] = { slug: _0x587d38, end_date: _0x1eb1be }),
      (this[_0x39a3dc(0xb0)] = {}),
      (this[_0x39a3dc(0xac)] = {});
  }
  static async ["init"](_0x58b92b) {
    const _0x55c754 = _0x484375;
    let _0x55cd5d = new Date();
    return (
      _0x55cd5d[_0x55c754(0xca)](_0x55cd5d[_0x55c754(0xcc)]() + 0x2),
      new Socket(_0x58b92b, _0x55cd5d)
    );
  }
  [_0x484375(0xd2)]() {
    const _0x17e294 = _0x484375;
    (this[_0x17e294(0xab)][_0x17e294(0xd0)] = (_0x544f63) => {
      const _0xecb0ba = _0x17e294,
        _0x1d3d15 = JSON[_0xecb0ba(0xbc)](_0x544f63[_0xecb0ba(0xd3)] || "{}");
      (this[_0xecb0ba(0xb0)][_0x1d3d15["action"]] = new CustomEvent(
        _0x1d3d15[_0xecb0ba(0xc9)],
        { detail: _0x1d3d15 }
      )),
        dispatchEvent(this[_0xecb0ba(0xb0)][_0x1d3d15[_0xecb0ba(0xc9)]]);
    }),
      (this[_0x17e294(0xab)]["onerror"] = (_0x380f6d) => {
        const _0x5ec764 = _0x17e294;
        dispatchEvent(new CustomEvent(_0x5ec764(0xd4), { detail: _0x380f6d }));
      }),
      (this[_0x17e294(0xab)][_0x17e294(0xbf)] = (_0x59ac92) => {
        const _0x4233c4 = _0x17e294;
        _0x59ac92[_0x4233c4(0xaa)]
          ? console["log"]("[socket\x20close]\x20closed\x20cleanly")
          : console[_0x4233c4(0xc5)](_0x4233c4(0xb8));
      });
  }
  [_0x484375(0xa9)]() {
    const _0x2f86c1 = _0x484375;
    (this["socket"] = new WebSocket(this[_0x2f86c1(0xaf)])),
      (this[_0x2f86c1(0xab)][_0x2f86c1(0xc1)] = () => {
        const _0x27e174 = _0x2f86c1;
        this[_0x27e174(0xd2)]();
        const _0x42b46c = {
          action: "CONNECT_SAVE",
          slug: this[_0x27e174(0xc0)][_0x27e174(0xba)],
          endDate: this["stream"]["end_date"],
          publisher: ![],
        };
        this["sendMessage"](_0x42b46c);
      });
  }
  ["on"](_0x30c078, _0x399697) {
    const _0x37627d = _0x484375;
    addEventListener(_0x30c078, _0x399697),
      this["listeners"][_0x30c078]
        ? this[_0x37627d(0xac)][_0x30c078]["push"](_0x399697)
        : (this[_0x37627d(0xac)][_0x30c078] = [_0x399697]);
  }
  ["sendMessage"](_0x130d9e) {
    const _0x5ed447 = _0x484375;
    this[_0x5ed447(0xab)][_0x5ed447(0xb5)](JSON["stringify"](_0x130d9e));
  }
  [_0x484375(0xad)]() {
    const _0x438b2b = _0x484375;
    console[_0x438b2b(0xc5)](_0x438b2b(0xc3)),
      this[_0x438b2b(0xab)][_0x438b2b(0xad)]();
    for (const _0x24ec41 in this[_0x438b2b(0xac)])
      for (const _0x913d8d of this[_0x438b2b(0xac)][_0x24ec41])
        removeEventListener(_0x24ec41, _0x913d8d);
  }
}
(window[_0x484375(0xbd)] = async () => {
  const _0x55ccaf = _0x484375;
  if (socketEnable === _0x55ccaf(0xcb)) return;
  else
    (socket = await Socket["init"](slugIn)),
      socket["on"](_0x55ccaf(0xd4), ({ detail: _0x43876c }) => {
        const _0xa232ff = _0x55ccaf;
        console[_0xa232ff(0xcf)](_0xa232ff(0xc6), _0x43876c);
      }),
      socket[_0x55ccaf(0xa9)]();
}),
  (window[_0x484375(0xc2)] = () => {
    const _0x1995b6 = _0x484375;
    socket[_0x1995b6(0xad)]();
  });
