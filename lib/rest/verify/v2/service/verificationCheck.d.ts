/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type VerificationCheckChannel = 'sms'|'call'|'email';

/**
 * Initialize the VerificationCheckList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 */
declare function VerificationCheckList(version: V2, serviceSid: string): VerificationCheckListInstance;

interface VerificationCheckListInstance {
  /**
   * create a VerificationCheckInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationCheckListInstanceCreateOptions, callback?: (error: Error | null, item: VerificationCheckInstance) => any): Promise<VerificationCheckInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property amount - The amount of the associated PSD2 compliant transaction.
 * @property code - The verification string
 * @property payee - The payee of the associated PSD2 compliant transaction
 * @property to - The phone number or email to verify
 * @property verificationSid - A SID that uniquely identifies the Verification Check
 */
interface VerificationCheckListInstanceCreateOptions {
  amount?: string;
  code: string;
  payee?: string;
  to?: string;
  verificationSid?: string;
}

interface VerificationCheckPayload extends VerificationCheckResource, Page.TwilioResponsePayload {
}

interface VerificationCheckResource {
  account_sid: string;
  amount: string;
  channel: VerificationCheckChannel;
  date_created: Date;
  date_updated: Date;
  payee: string;
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  valid: boolean;
}

interface VerificationCheckSolution {
  serviceSid?: string;
}


declare class VerificationCheckInstance extends SerializableClass {
  /**
   * Initialize the VerificationCheckContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   */
  constructor(version: V2, payload: VerificationCheckPayload, serviceSid: string);

  accountSid: string;
  amount: string;
  channel: VerificationCheckChannel;
  dateCreated: Date;
  dateUpdated: Date;
  payee: string;
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  valid: boolean;
}


declare class VerificationCheckPage extends Page<V2, VerificationCheckPayload, VerificationCheckResource, VerificationCheckInstance> {
  /**
   * Initialize the VerificationCheckPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: VerificationCheckSolution);

  /**
   * Build an instance of VerificationCheckInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationCheckPayload): VerificationCheckInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { VerificationCheckChannel, VerificationCheckInstance, VerificationCheckList, VerificationCheckListInstance, VerificationCheckListInstanceCreateOptions, VerificationCheckPage, VerificationCheckPayload, VerificationCheckResource, VerificationCheckSolution }
