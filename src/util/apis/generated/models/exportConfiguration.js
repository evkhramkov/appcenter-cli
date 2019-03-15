/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Export configuration
 *
 */
class ExportConfiguration {
  /**
   * Create a ExportConfiguration.
   * @property {array} [exportEntities]
   * @property {string} [resourceName] The resource name on azure
   * @property {string} [resourceGroup] The resource group name on azure
   * @property {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExportConfiguration
   *
   * @returns {object} metadata of ExportConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExportConfiguration',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'ExportConfiguration',
        className: 'ExportConfiguration',
        modelProperties: {
          exportEntities: {
            required: false,
            serializedName: 'export_entities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExportEntityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'crashes', 'errors', 'attachments' ]
                  }
              }
            }
          },
          resourceName: {
            required: false,
            serializedName: 'resource_name',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            serializedName: 'resource_group',
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
          }
        }
      }
    };
  }
}

module.exports = ExportConfiguration;
