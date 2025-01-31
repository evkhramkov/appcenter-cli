/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Date and time property.
 *
 * @extends models['CustomPropertyDiagnostics']
 */
class DateTimePropertyDiagnostics extends models['CustomPropertyDiagnostics'] {
  /**
   * Create a DateTimePropertyDiagnostics.
   * @member {date} value Date time property value.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DateTimePropertyDiagnostics
   *
   * @returns {object} metadata of DateTimePropertyDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'date_time',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CustomPropertyDiagnostics',
        className: 'DateTimePropertyDiagnostics',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 128,
              Pattern: '^[a-zA-Z][a-zA-Z0-9\-_]*$'
            },
            type: {
              name: 'String'
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
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = DateTimePropertyDiagnostics;
