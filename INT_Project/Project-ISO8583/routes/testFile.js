let isopack = require('iso_8583')

// let isopack = new iso_8583(isoJson)

// cbb = isopack.validateMessage('test')
// console.log('---------->>>>>>>>>>', cbb)
//     // isopack.getMti()
//     // isopack.getBmpsBinary()
//     // let bufferMessage = isopack.getBufferMessage();
//     isopack.buff

let testData = {
    "0": "0100",
    "2": "4761739001010119",
    "3": "000000",
    "4": "000000005000",
    "7": "0911131411",
    "12": "131411",
    "13": "0911",
    "14": "2212",
    "18": "4111",
    "22": "051",
    "23": "001",
    "25": "00",
    "26": "12",
    "32": "423935",
    "33": "111111111",
    "35": "4761739001010119D22122011758928889",
    "41": "12345678",
    "42": "MOTITILL_000001",
    "43": "My Termianl Business                    ",
    "49": "404",
    "52": "7434F67813BAE545",
    "56": "1510",
    "123": "91010151134C101",
    "127": "000000800000000001927E1E5F7C0000000000000000500000000000000014A00000000310105C000128FF0061F379D43D5AEEBC8002800000000000000001E0302031F000203001406010A03A09000008CE0D0C840421028004880040417091180000014760BAC24959"
}




let isoPack = new isoPack(testData)


isoPack.getXMLString()


// let isoPack = new isoPack()


let xmlTets = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<Iso8583PostXml>\n' +
    '<MsgType>0200</MsgType>\n' +
    '<Fields>\n' +
    '<Field_002>4839123456709012</Field_002>\n' +
    '<Field_003>000000</Field_003>\n' +
    '<Field_004>000000001500</Field_004>\n' +
    '<Field_007>0604074705</Field_007>\n' +
    '<Field_011>804058</Field_011>\n' +
    '<Field_012>074808</Field_012>\n' +
    '<Field_013>0604</Field_013>\n' +
    '<Field_014>0812</Field_014>\n' +
    '<Field_015>0905</Field_015>\n' +
    '<Field_022>901</Field_022>\n' +
    '<Field_025>02</Field_025>\n' +
    '<Field_026>05</Field_026>\n' +
    '<Field_028>000000500</Field_028>\n' +
    '<Field_030>000000500</Field_030>\n' +
    '<Field_032>483912</Field_032>\n' +
    '<Field_035>4839123456709012=08125876305082011</Field_035>\n' +
    '<Field_037>D000A0030000</Field_037>\n' +
    '<Field_040>507</Field_040>\n' +
    '<Field_041>FOFUGUT1</Field_041>\n' +
    '<Field_042>191121119111112</Field_042>\n' +
    '<Field_043>Postilion Cafeteria Rondebosch ZA</Field_043>\n' +
    '<Field_049>710</Field_049> <Field_056>1510</Field_056>\n' +
    '<Field_059>0000000072</Field_059>\n' +
    '<Field_123>211401213041013</Field_123>\n' +
    '<Field_127_002>0007713856</Field_127_002>\n' +
    '<Field_127_009>013040604040604016501100330000</Field_127_009>\n' +
    '<Field_127_012>My Terminal Business</Field_127_012>\n' +
    '<Field_127_020>20100604</Field_127_020>\n' +
    '</Fields>\n' +
    '</Iso8583PostXml>'


isoPack.getJsonFromXml(xmlTets)