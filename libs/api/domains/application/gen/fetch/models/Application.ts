/* tslint:disable */
/* eslint-disable */
/**
 * Application backend
 * This is provided as a reference to implement other backends.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    id: string;
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    created: Date;
    /**
     * 
     * @type {Date}
     * @memberof Application
     */
    modified: Date;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    applicant: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    assignee: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    state: string;
    /**
     * 
     * @type {object}
     * @memberof Application
     */
    attachments?: object;
    /**
     * 
     * @type {string}
     * @memberof Application
     */
    typeId: ApplicationTypeIdEnum;
    /**
     * 
     * @type {object}
     * @memberof Application
     */
    answers: object;
    /**
     * 
     * @type {object}
     * @memberof Application
     */
    externalData: object;
}

export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'created': (new Date(json['created'])),
        'modified': (new Date(json['modified'])),
        'applicant': json['applicant'],
        'assignee': json['assignee'],
        'externalId': !exists(json, 'externalId') ? undefined : json['externalId'],
        'state': json['state'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'typeId': json['typeId'],
        'answers': json['answers'],
        'externalData': json['externalData'],
    };
}

export function ApplicationToJSON(value?: Application | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'created': (value.created.toISOString()),
        'modified': (value.modified.toISOString()),
        'applicant': value.applicant,
        'assignee': value.assignee,
        'externalId': value.externalId,
        'state': value.state,
        'attachments': value.attachments,
        'typeId': value.typeId,
        'answers': value.answers,
        'externalData': value.externalData,
    };
}

/**
* @export
* @enum {string}
*/
export enum ApplicationTypeIdEnum {
    ExampleForm = 'ExampleForm',
    ExampleForm2 = 'ExampleForm2',
    ExampleForm3 = 'ExampleForm3',
    FamilyAndPets = 'FamilyAndPets',
    ParentalLeave = 'ParentalLeave'
}


