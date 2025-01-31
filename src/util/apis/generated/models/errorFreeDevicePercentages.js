/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a ErrorFreeDevicePercentages.
 */
class ErrorFreeDevicePercentages {
  /**
   * Create a ErrorFreeDevicePercentages.
   * @member {number} [averagePercentage] Average percentage
   * @member {array} [dailyPercentages] The error-free percentage per day.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorFreeDevicePercentages
   *
   * @returns {object} metadata of ErrorFreeDevicePercentages
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorFreeDevicePercentages',
      type: {
        name: 'Composite',
        className: 'ErrorFreeDevicePercentages',
        modelProperties: {
          averagePercentage: {
            required: false,
            serializedName: 'averagePercentage',
            type: {
              name: 'Number'
            }
          },
          dailyPercentages: {
            required: false,
            serializedName: 'dailyPercentages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDateTimePercentagesElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDateTimePercentages'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorFreeDevicePercentages;
