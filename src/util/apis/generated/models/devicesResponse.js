/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DevicesResponse class.
 * @constructor
 * A response containing an array of device UDIDs.
 *
 * @member {string} provisioningProfileType The type of the provisioning
 * profile for the requested app version. Possible values include: 'adhoc',
 * 'enterprise', 'other'
 * 
 * @member {array} udids
 * 
 */
function DevicesResponse() {
}

/**
 * Defines the metadata of DevicesResponse
 *
 * @returns {object} metadata of DevicesResponse
 *
 */
DevicesResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DevicesResponse',
    type: {
      name: 'Composite',
      className: 'DevicesResponse',
      modelProperties: {
        provisioningProfileType: {
          required: true,
          serializedName: 'provisioning_profile_type',
          type: {
            name: 'String'
          }
        },
        udids: {
          required: true,
          serializedName: 'udids',
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
        }
      }
    }
  };
};

module.exports = DevicesResponse;