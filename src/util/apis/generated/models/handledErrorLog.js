/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Required explicit begin session log (a marker event for analytics service).
 *
 * @extends models['Log']
 */
class HandledErrorLog extends models['Log'] {
  /**
   * Create a HandledErrorLog.
   * @member {uuid} errorId Error ID.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HandledErrorLog
   *
   * @returns {object} metadata of HandledErrorLog
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'handled_error',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Log',
        className: 'HandledErrorLog',
        modelProperties: {
          timestamp: {
            required: true,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          installId: {
            required: true,
            serializedName: 'install_id',
            type: {
              name: 'String'
            }
          },
          device: {
            required: true,
            serializedName: 'device',
            type: {
              name: 'Composite',
              className: 'Device'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          errorId: {
            required: true,
            serializedName: 'error_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HandledErrorLog;
