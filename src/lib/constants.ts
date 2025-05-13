export const folders = {
  root: [
    {
      id: 1,
      name: "LoginTests",
      isFolder: true,
      files: [
        {
          id: 11,
          name: "test_login_valid_credentials.py",
          isFolder: false,
          files: [],
        },
        {
          id: 12,
          name: "test_login_invalid_password.py",
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      id: 2,
      name: "SignupTests",
      isFolder: true,
      files: [
        {
          id: 1,
          name: "LoginTests",
          isFolder: true,
          files: [
            {
              id: 11,
              name: "test_login_valid_credentials.py",
              isFolder: false,
              files: [],
            },
            {
              id: 12,
              name: "test_login_invalid_password.py",
              isFolder: false,
              files: [],
            },
          ],
        },
        {
          id: 21,
          name: "test_signup_valid_data.py",
          isFolder: false,
          files: [],
        },
        {
          id: 22,
          name: "test_signup_missing_email.py",
          isFolder: false,
          files: [],
        },
        {
          id: 23,
          name: "test_signup_existing_user.py",
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      id: 3,
      name: "ProfileTests",
      isFolder: true,
      files: [
        {
          id: 31,
          name: "test_update_profile_info.py",
          isFolder: false,
          files: [],
        },
        {
          id: 32,
          name: "test_change_password.py",
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      id: 4,
      name: "DashboardTests",
      isFolder: true,
      files: [
        {
          id: 41,
          name: "test_dashboard_load.py",
          isFolder: false,
          files: [],
        },
        {
          id: 42,
          name: "test_dashboard_widgets_display.py",
          isFolder: false,
          files: [],
        },
        {
          id: 43,
          name: "test_dashboard_refresh.py",
          isFolder: false,
          files: [],
        },
      ],
    },
    {
      id: 5,
      name: "PaymentTests",
      isFolder: true,
      files: [
        {
          id: 51,
          name: "test_payment_success.py",
          isFolder: false,
          files: [],
        },
        {
          id: 52,
          name: "test_payment_declined.py",
          isFolder: false,
          files: [],
        },
      ],
    },
  ],
};
