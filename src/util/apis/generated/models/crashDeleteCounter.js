/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CrashDeleteCounter.
 */
class CrashDeleteCounter {
  /**
   * Create a CrashDeleteCounter.
   * @member {string} [appId]
   * @member {string} [crashGroupId]
   * @member {string} [crashId]
   * @member {number} [crashesDeleted]
   * @member {number} [attachmentsDeleted]
   * @member {number} [blobsSucceeded]
   * @member {number} [blobsFailed]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CrashDeleteCounter
   *
   * @returns {object} metadata of CrashDeleteCounter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CrashDeleteCounter',
      type: {
        name: 'Composite',
        className: 'CrashDeleteCounter',
        modelProperties: {
          appId: {
            required: false,
            serializedName: 'app_id',
            type: {
              name: 'String'
            }
          },
          crashGroupId: {
            required: false,
            serializedName: 'crash_group_id',
            type: {
              name: 'String'
            }
          },
          crashId: {
            required: false,
            serializedName: 'crash_id',
            type: {
              name: 'String'
            }
          },
          crashesDeleted: {
            required: false,
            serializedName: 'crashes_deleted',
            type: {
              name: 'Number'
            }
          },
          attachmentsDeleted: {
            required: false,
            serializedName: 'attachments_deleted',
            type: {
              name: 'Number'
            }
          },
          blobsSucceeded: {
            required: false,
            serializedName: 'blobs_succeeded',
            type: {
              name: 'Number'
            }
          },
          blobsFailed: {
            required: false,
            serializedName: 'blobs_failed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = CrashDeleteCounter;
