/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ReleaseTesterDestinationRequest.
 */
class ReleaseTesterDestinationRequest {
  /**
   * Create a ReleaseTesterDestinationRequest.
   * @property {boolean} [mandatoryUpdate] Flag to mark the release for the
   * provided destinations as mandatory
   * @property {string} email Tester's email address
   * @property {boolean} [notifyTesters] Flag to enable or disable
   * notifications to testers. Default value: true .
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseTesterDestinationRequest
   *
   * @returns {object} metadata of ReleaseTesterDestinationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseTesterDestinationRequest',
      type: {
        name: 'Composite',
        className: 'ReleaseTesterDestinationRequest',
        modelProperties: {
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          notifyTesters: {
            required: false,
            serializedName: 'notify_testers',
            defaultValue: true,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseTesterDestinationRequest;
