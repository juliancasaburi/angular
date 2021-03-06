/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Monkey patch `MessagePort.prototype.onmessage` and `MessagePort.prototype.onmessageerror`
 * property.
 */
Zone.__load_patch('MessagePort', (global: any, Zone: ZoneType, api: _ZonePrivate) => {
  const MessagePort = global['MessagePort'];
  if (typeof MessagePort !== 'undefined' && MessagePort.prototype) {
    api.patchOnProperties(MessagePort.prototype, ['message', 'messageerror']);
  }
});
