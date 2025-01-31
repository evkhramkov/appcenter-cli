/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * missing symbol crash group object
 *
 */
class V2MissingSymbolCrashGroup {
  /**
   * Create a V2MissingSymbolCrashGroup.
   * @member {string} symbolGroupId id of the symbol group
   * @member {number} [crashCount] number of crashes that belong to this group
   * @member {string} appId application id
   * @member {string} appVer application version
   * @member {string} appBuild application build
   * @member {date} lastModified last update date for the group
   * @member {array} missingSymbols list of missing symbols
   * @member {string} status group status. Possible values include: 'active',
   * 'pending', 'closed'
   */
  constructor() {
  }

  /**
   * Defines the metadata of V2MissingSymbolCrashGroup
   *
   * @returns {object} metadata of V2MissingSymbolCrashGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'v2MissingSymbolCrashGroup',
      type: {
        name: 'Composite',
        className: 'V2MissingSymbolCrashGroup',
        modelProperties: {
          symbolGroupId: {
            required: true,
            serializedName: 'symbol_group_id',
            type: {
              name: 'String'
            }
          },
          crashCount: {
            required: false,
            serializedName: 'crash_count',
            type: {
              name: 'Number'
            }
          },
          appId: {
            required: true,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          appVer: {
            required: true,
            serializedName: 'app_ver',
            type: {
              name: 'String'
            }
          },
          appBuild: {
            required: true,
            serializedName: 'app_build',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: true,
            serializedName: 'last_modified',
            type: {
              name: 'DateTime'
            }
          },
          missingSymbols: {
            required: true,
            serializedName: 'missing_symbols',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'V2MissingSymbolElementType',
                  type: {
                    name: 'Composite',
                    className: 'V2MissingSymbol'
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
          }
        }
      }
    };
  }
}

module.exports = V2MissingSymbolCrashGroup;
