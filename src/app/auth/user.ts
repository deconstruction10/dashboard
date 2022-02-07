export interface User {
  user_id: string;
  app_metadata: {
    user_metadata: {};
    username: string;
    family_name: string;
    given_name: string;
    picture: string,
    email: string;
    name: string;
    nickname: string;
    phone_number: string;
    phone_verified: boolean,
    email_verified: boolean;
    blocked: boolean;
    identities: [
      connection: string,
      isSocial: boolean,
      provider: string,
      user_id: string,
      profileData: string
    ];
    last_login: Date,
  }
}
