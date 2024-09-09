import { defineAuth } from '@aws-amplify/backend';
<<<<<<< HEAD

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
=======
import { postConfirmation } from './post-confirmation/resource';

>>>>>>> ea01abb (displaying user profile)
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
<<<<<<< HEAD
});
=======
  triggers: {
    postConfirmation
  }
});
>>>>>>> ea01abb (displaying user profile)
