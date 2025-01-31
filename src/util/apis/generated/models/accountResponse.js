/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AccountResponse.
 */
class AccountResponse {
  /**
   * Create a AccountResponse.
   * @member {uuid} id The internal unique id (UUID) of the account.
   * @member {string} displayName The display name of the account
   * @member {string} name The slug name of the account
   * @member {string} [email] The account's email. For org that value might be
   * empty.
   * @member {string} origin The creation origin of this account. Possible
   * values include: 'appcenter', 'hockeyapp'
   * @member {string} type The type of this account. Possible values include:
   * 'user', 'org'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AccountResponse
   *
   * @returns {object} metadata of AccountResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccountResponse',
      type: {
        name: 'Composite',
        className: 'AccountResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: false,
            serializedName: 'email',
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
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccountResponse;
