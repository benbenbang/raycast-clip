/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Bit.ly API Key - API token from https://app.bitly.com/settings/api/ */
  bitlyApiKey?: string;
  /** Cutt.ly API Key - API key from https://cutt.ly/edit */
  cuttlyApiKey?: string;
};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
  /** Preferences accessible in the `shorten-url` command */
  export type ShortenUrl = ExtensionPreferences & {};
  /** Preferences accessible in the `shorten-history` command */
  export type ShortenHistory = ExtensionPreferences & {};
}

declare namespace Arguments {
  /** Arguments passed to the `shorten-url` command */
  export type ShortenUrl = {};
  /** Arguments passed to the `shorten-history` command */
  export type ShortenHistory = {};
}
