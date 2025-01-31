/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * a single frame of a stack trace
 *
 */
class DiagnosticsStackFrame {
  /**
   * Create a DiagnosticsStackFrame.
   * @member {string} [address] address of the frame
   * @member {string} [className] name of the class
   * @member {string} [method] name of the method
   * @member {boolean} [classMethod] is a class method
   * @member {string} [file] name of the file
   * @member {number} [line] line number
   * @member {boolean} appCode this line isn't from any framework
   * @member {string} [frameworkName] Name of the framework
   * @member {string} codeRaw Raw frame string
   * @member {string} codeFormatted Formatted frame string
   * @member {string} [language] programming language of the frame. Possible
   * values include: 'JavaScript', 'CSharp', 'Objective-C', 'Objective-Cpp',
   * 'Cpp', 'C', 'Swift', 'Java', 'Unknown'
   * @member {boolean} [relevant] frame should be shown always
   * @member {string} [methodParams] parameters of the frames method
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticsStackFrame
   *
   * @returns {object} metadata of DiagnosticsStackFrame
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticsStackFrame',
      type: {
        name: 'Composite',
        className: 'DiagnosticsStackFrame',
        modelProperties: {
          address: {
            required: false,
            serializedName: 'address',
            type: {
              name: 'String'
            }
          },
          className: {
            required: false,
            serializedName: 'class_name',
            type: {
              name: 'String'
            }
          },
          method: {
            required: false,
            serializedName: 'method',
            type: {
              name: 'String'
            }
          },
          classMethod: {
            required: false,
            serializedName: 'class_method',
            type: {
              name: 'Boolean'
            }
          },
          file: {
            required: false,
            serializedName: 'file',
            type: {
              name: 'String'
            }
          },
          line: {
            required: false,
            serializedName: 'line',
            type: {
              name: 'Number'
            }
          },
          appCode: {
            required: true,
            serializedName: 'app_code',
            type: {
              name: 'Boolean'
            }
          },
          frameworkName: {
            required: false,
            serializedName: 'framework_name',
            type: {
              name: 'String'
            }
          },
          codeRaw: {
            required: true,
            serializedName: 'code_raw',
            type: {
              name: 'String'
            }
          },
          codeFormatted: {
            required: true,
            serializedName: 'code_formatted',
            type: {
              name: 'String'
            }
          },
          language: {
            required: false,
            serializedName: 'language',
            type: {
              name: 'String'
            }
          },
          relevant: {
            required: false,
            serializedName: 'relevant',
            type: {
              name: 'Boolean'
            }
          },
          methodParams: {
            required: false,
            serializedName: 'method_params',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticsStackFrame;
