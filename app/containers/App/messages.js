/*
 * App Messages
 *
 * This contains all the text for the App component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.App';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is App container !',
  },
});
