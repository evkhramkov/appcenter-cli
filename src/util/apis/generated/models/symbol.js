/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Symbol.
 */
class Symbol {
  /**
   * Create a Symbol.
   * @member {string} symbolId The unique id for this symbol (uuid)
   * @member {string} type The type of the symbol for the current symbol
   * upload. Possible values include: 'Apple', 'JavaScript', 'Breakpad',
   * 'AndroidProguard', 'UWP'
   * @member {string} appId The application that this symbol belongs to
   * @member {string} platform The platform that this symbol is associated with
   * @member {string} url The path name of the symbol file in blob storage
   * @member {string} origin The origin of the symbol file. Possible values
   * include: 'System', 'User'
   * @member {array} alternateSymbolIds The other symbols in the same file
   * @member {string} status Whether the symbol is ignored. Possible values
   * include: 'available', 'ignored'
   * @member {string} [version] The version number. Optional for Apple.
   * Required for Android.
   * @member {string} [build] The build number. Optional for Apple. Required
   * for Android.
   * @member {string} symbolUploadId The id of the symbol upload this symbol
   * belongs to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Symbol
   *
   * @returns {object} metadata of Symbol
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Symbol',
      type: {
        name: 'Composite',
        className: 'Symbol',
        modelProperties: {
          symbolId: {
            required: true,
            serializedName: 'symbol_id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: true,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          url: {
            required: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          alternateSymbolIds: {
            required: true,
            serializedName: 'alternate_symbol_ids',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'String'
            }
          },
          symbolUploadId: {
            required: true,
            serializedName: 'symbol_upload_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Symbol;
