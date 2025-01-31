/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a VersionsDiagnostics.
 */
class VersionsDiagnostics {
  /**
   * Create a VersionsDiagnostics.
   * @member {array} [versions] list of version count
   * @member {number} [total] the total count of versions
   */
  constructor() {
  }

  /**
   * Defines the metadata of VersionsDiagnostics
   *
   * @returns {object} metadata of VersionsDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Versions_Diagnostics',
      type: {
        name: 'Composite',
        className: 'VersionsDiagnostics',
        modelProperties: {
          versions: {
            required: false,
            serializedName: 'versions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VersionDiagnosticsElementType',
                  type: {
                    name: 'Composite',
                    className: 'VersionDiagnostics'
                  }
              }
            }
          },
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = VersionsDiagnostics;
