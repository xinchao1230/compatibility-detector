/**
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

/**
 * @fileoverview: One detector implementation for checking the CSS float:center
 * value for all elements.
 * @bug: https://code.google.com/p/compatibility-detector/issues/detail?id=105
 *
 * WebKit Source CSSParser.cpp file:
 * CSSPropertyFloat: // left | right | none | inherit + center for buggy CSS
 * This is WebKit a compatibility strategy.
 * Therefore, the detected elements to set the style for the center,
 * can accurately detect the problem.
 */

addScriptToInject(function() {

chrome_comp.CompDetect.declareDetector(

'float_center_css',

chrome_comp.CompDetect.ScanDomBaseDetector,

null, // constructor

function checkNode(node, context) {
  if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone())
    return;
  if (chrome_comp.getDefinedStylePropertyByName(node, true, 'float') ===
      'center')
    this.addProblem('RM1025', [node]);
}
); // declareDetector

});
