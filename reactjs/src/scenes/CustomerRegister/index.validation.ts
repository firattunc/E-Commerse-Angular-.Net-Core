import { L } from '../../lib/abpUtility';

const rules = {
  userName: [
    {
      required: true,
      message: L('ThisFieldIsRequired'),
    },
  ],
  emailAddress: [
    {
      required: true,
      message: L('ThisFieldIsRequired'),
    },
  ],
  password: [{ required: true, message: L('ThisFieldIsRequired') }],
  name: [
    {
      required: true,
      message: L('ThisFieldIsRequired'),
    },
  ],
  surname: [
    {
      required: true,
      message: L('ThisFieldIsRequired'),
    },
  ],
};

export default rules;
