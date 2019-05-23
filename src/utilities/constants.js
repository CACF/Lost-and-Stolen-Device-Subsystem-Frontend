/*
Copyright (c) 2018 Qualcomm Technologies, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted (subject to the limitations in the disclaimer below) provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Qualcomm Technologies, Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY THIS LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import settings from '../settings.json';
const {host: kcHost, port:kcPort, version: kcVersion, use: kcUse} = settings.keycloak;


export let KC_URL = '';
if(kcUse){
  KC_URL = `${kcHost}${kcPort ? ':'+ kcPort: ''}${kcVersion}`;
}
/**
 * constant being used throughout the application
 *
 * @type {number}
 */
export const RECOVERED_CASE = 1;

/**
 * constant being used throughout the application
 *
 * @type {number}
 */
export const BLOCKED_CASE = 2;

/**
 * constant being used throughout the application
 *
 * @type {number}
 */
export const PENDING_CASE = 3;

/**
 * Date format const used in calender fields
 *
 * @type {string}
 */
export const Date_Format = 'YYYY-MM-DD';

/**
 * Page Limit for pagination in Search module
 *
 * @type {number}
 */
export const PAGE_LIMIT = 10;

export const ITEMS_PER_PAGE= [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 50, label: '50' },
  { value: 100, label: '100' }
]

export const ENGLISH_REGEX = /^[a-zA-Z0-9$@$!%*?&#^-_.,' +]+$/;
export const SPANISH_REGEX = /^[0-9A-Za-zñáéíóúü$@$!%*?&#^-_. +]+$/i;
export const INDONESIAN_REGEX = /^[0-9A-Za-zé$@$!%*?&#^-_. +]+$/i;