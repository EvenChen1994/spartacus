/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export function mockTranslate(
  key: string | string[] | undefined,
  options: any = {}
): string | undefined {
  const keyString = Array.isArray(key) ? key[0] : key;
  const optionsString = Object.keys(options)
    .sort()
    .map((optionName) => `${optionName}:${options[optionName]}`)
    .join(' ');
  return optionsString ? `${keyString} ${optionsString}` : keyString;
}
