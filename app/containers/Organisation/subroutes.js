import IssueRefund from 'containers/IssueRefund/Loadable';

export default [
  {
    name: 'Organisation',
    path: '/organisation/refund/:id',
    exact: true,
    component: IssueRefund,
  }
]
