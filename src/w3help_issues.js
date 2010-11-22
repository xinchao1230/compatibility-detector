/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
const DEFAULT_LOCALE = 'zh-cn'; // TODO: change to en when w3help ready.
const W3HELP_LOCALES = {
//  'en' : true,
  'zh-cn' : true
};

var w3helpLocale = chrome.i18n.getMessage('@@ui_locale');
if (w3helpLocale)
  w3helpLocale = w3helpLocale.toLowerCase().replace('_', '-');
if (!W3HELP_LOCALES.hasOwnProperty(w3helpLocale))
  w3helpLocale = DEFAULT_LOCALE;

// This array is auto generated by update_w3help_issues.sh
var issueIds = [
  'HH8001',
  'HR9001',
  'HD9001',
  'HG8001',
  'HG1002',
  'HG2003',
  'HT1001',
  'HT1002',
  'HT1003',
  'HE1001',
  'HE8002',
  'HE1003',
  'HO8001',
  'HO1002',
  'HO3003',
  'HO3004',
  'HO9005',
  'HO9006',
  'HO1007',
  'HA8001',
  'HA1003',
  'HM9001',
  'HF3001',
  'HF1002',
  'HF3003',
  'HF1004',
  'HF3005',
  'HF3006',
  'HF1007',
  'HF1008',
  'HF3013',
  'HS9001',
  'HY9001',
  'HY8002',
  'HY8003',
  'HY1005',
  'HY8006',
  'RN5001',
  'RN8002',
  'RS8001',
  'RS8002',
  'RS8003',
  'RS8004',
  'RS3005',
  'RS3007',
  'RS3008',
  'RS3009',
  'RS8010',
  'RA8001',
  'RA3002',
  'RA8003',
  'RB1001',
  'RB5002',
  'RB1003',
  'RB8004',
  'RB1005',
  'RM8001',
  'RM8002',
  'RM8003',
  'RM1004',
  'RM8005',
  'RM8006',
  'RM3007',
  'RM8008',
  'RM1009',
  'RM1010',
  'RM8011',
  'RM8012',
  'RM8013',
  'RM8014',
  'RM8015',
  'RM8016',
  'RM1017',
  'RM8018',
  'RD8001',
  'RD1002',
  'RD1003',
  'RD8004',
  'RD8005',
  'RD8006',
  'RD8007',
  'RD8008',
  'RD8009',
  'RD8010',
  'RD1011',
  'RD1012',
  'RD1013',
  'RD1014',
  'RD8015',
  'RD1016',
  'RD5017',
  'RD5018',
  'RD8019',
  'RD3020',
  'RD1021',
  'RD8026',
  'RV1001',
  'RV1002',
  'RG1001',
  'RG1002',
  'RG1003',
  'RC3001',
  'RC3002',
  'RF1001',
  'RT3001',
  'RT3002',
  'RT8003',
  'RT5004',
  'RT3005',
  'RT8006',
  'RT1007',
  'RT1008',
  'RT1010',
  'RT3011',
  'RE8001',
  'RE5003',
  'RE8004',
  'RE1005',
  'RE1006',
  'RE8010',
  'RE1012',
  'RE1013',
  'RE8014',
  'RE8017',
  'RE1020',
  'RU3001',
  'RU3002',
  'RY1001',
  'RY8002',
  'RY8003',
  'RY8004',
  'RY8005',
  'RX1001',
  'RX1002',
  'RX1003',
  'RX8004',
  'RX3005',
  'RX1006',
  'RX3007',
  'RX1008',
  'RX9009',
  'RX1010',
  'RX3011',
  'RX8012',
  'RX8015',
  'RX8017',
  'SJ9001',
  'SJ9002',
  'SJ5003',
  'SJ2004',
  'SJ9005',
  'SJ9006',
  'SJ2007',
  'SJ9008',
  'SJ9009',
  'SJ9010',
  'SD9001',
  'SD9002',
  'SD9003',
  'SD9004',
  'SD9005',
  'SD9006',
  'SD9007',
  'SD9008',
  'SD9009',
  'SD9010',
  'SD9011',
  'SD9012',
  'SD9013',
  'SD9014',
  'SD9015',
  'SD9016',
  'SD9017',
  'SD9018',
  'SD9019',
  'SD2020',
  'SD2021',
  'SD9022',
  'SD2023',
  'CP9001',
  'CM2001',
  'CH9002',
  'CH9003',
  'BW5002',
  'BW5004',
  'BW5005',
  'BW3006',
  'BW5007',
  'BW5008',
  'BW5009',
  'BT9002',
  'BT3003',
  'BT8004',
  'BT9005',
  'BT9006',
  'BT9007',
  'BT9008',
  'BT9009',
  'BT9010',
  'BT9011',
  'BT9012',
  'BT3013',
  'BT8014',
  'BT9015',
  'BT9016',
  'BT9017',
  'BT9019',
  'BT9021',
  'BT2022',
  'BT9024',
  'BT1025',
  'BT9027',
  'BT9028',
  'BT9029',
  'BT9030',
  'BT9031',
  'BT9032',
  'BT2033',
  'BT9034',
  'BT9035',
  'BT9036',
  'BT9037',
  'BG2001',
  'BG9002',
  'BG1003',
  'BX2001',
  'BX9002',
  'BX2003',
  'BX2004',
  'BX3006',
  'BX9007',
  'BX9008',
  'BX1009',
  'BX9010',
  'BX2012',
  'BX9013',
  'BX9014',
  'BX1016',
  'BX1018',
  'BX3019',
  'BX9021',
  'BX1022',
  'BX3023',
  'BX9024',
  'BX9025',
  'BX9028',
  'BX9029',
  'BX1030',
  'BX9031',
  'BX2032',
  'BX2033',
  'BX9034',
  'BX9035',
  'BX9036',
  'BX8037',
  'BX1039',
  'BX2040',
  'BX9041',
  'BX8042',
  //wangjun
  'HF3012',
  'SD9030',
  'RC3003',
   // lzq add
  'RE1016',
  //luyuan
  'HO9008',
];

var issues = { };
for (var i = 0, c = issueIds.length; i < c; i++) {
  var id = issueIds[i];
  issues[id] = {
    description: chrome.i18n.getMessage(id),
    suggestion: chrome.i18n.getMessage(id + '_suggestion'),
    severityLevel: parseInt(id[2]),
    url: 'http://www.w3help.org/' + w3helpLocale + '/causes/' + id
  };
  addSourceToInject('chrome_comp.w3helpIssues = ' + JSON.stringify(issues));
}

})();
