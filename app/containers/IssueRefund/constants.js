/*
 *
 * IssueRefund constants
 *
 */

export const REQUEST_ORDER_INFO = 'app/IssueRefund/REQUEST_ORDER_INFO';
export const LOADED_ORDER_INFO = 'app/IssueRefund/LOADED_ORDER_INFO';
export const ERROR_ORDER_INFO = 'app/IssueRefund/ERROR_ORDER_INFO';


// API
// Base API URL
export const REFUND_API_URL = 'https://ap-southeast-2.integration.cloud.tibcoapps.com/'

// Getting order information
export const REFUND_REFUNDABLE_ORDER_ITEMS = 'wpnwdy3a6ld4nhqlzr4giwzh3qsjdf7z/RefundableOrderItems/RefundableOrderItems'

// Check refund
export const REFUND_ORDER_CHECK_REFUND = '67ssd3hiqg76rg3ysi5xdpufvacl6gyv/transaction/checkrefund/{id}'

// Refund
export const REFUND_ORDER_REFUND = '/Order/{id}/Refund'

// Topup API
export const REFUND_SETTLEMENT_DEPOSIT = '/Org/{id}/Settlement/Deposit'

// https://ap-southeast-2.integration.cloud.tibcoapps.com/6fu26has5erpqsw7v44r5o5jcse64wyn/Transaction
