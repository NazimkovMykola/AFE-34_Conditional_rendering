import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__textWrapper">
        <span className="user-profile__nickname">Nickname</span>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z"
              fill="#414141"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.58554 7.35229C4.74563 2.97701 9.63512 0.66637 14.3869 1.77529C19.1387 2.88422 22.5003 7.12043 22.5006 11.9999V12.9999C22.5006 14.9329 20.9336 16.4999 19.0006 16.4999C17.0676 16.4999 15.5006 14.9329 15.5006 12.9999V11.9999C15.5006 11.7238 15.7245 11.4999 16.0006 11.4999C16.2768 11.4999 16.5006 11.7238 16.5006 11.9999V12.9999C16.5006 14.3806 17.6199 15.4999 19.0006 15.4999C20.3813 15.4999 21.5006 14.3806 21.5006 12.9999V11.9999C21.5006 11.9999 21.5006 12 21.5006 11.9999C21.5003 7.58522 18.4588 3.75243 14.1596 2.74913C9.86041 1.74582 5.43658 3.8364 3.48222 7.79498C1.52785 11.7536 2.55805 16.5368 5.96872 19.3399C9.37939 22.143 14.2716 22.2271 17.7766 19.5429C17.9959 19.375 18.3097 19.4167 18.4776 19.6359C18.6455 19.8552 18.6039 20.169 18.3846 20.3369C14.5106 23.3036 9.10347 23.2106 5.33378 20.1125C1.5641 17.0143 0.425454 11.7276 2.58554 7.35229Z"
              fill="#414141"
            />
          </svg>
          <span className="user-profile__mail">test@test.com</span>
        </div>
        <a href="/" target="_blank">
          Website
        </a>
        <div className="user-profile__logoutWrapper">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 19C0.5 16.5147 2.51472 14.5 5 14.5H12C14.4853 14.5 16.5 16.5147 16.5 19V21C16.5 21.2761 16.2761 21.5 16 21.5C15.7239 21.5 15.5 21.2761 15.5 21V19C15.5 17.067 13.933 15.5 12 15.5H5C3.067 15.5 1.5 17.067 1.5 19V21C1.5 21.2761 1.27614 21.5 1 21.5C0.723858 21.5 0.5 21.2761 0.5 21V19Z"
              fill="#414141"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 7C4 4.51472 6.01472 2.5 8.5 2.5C10.9853 2.5 13 4.51472 13 7C13 9.48528 10.9853 11.5 8.5 11.5C6.01472 11.5 4 9.48528 4 7ZM8.5 3.5C6.567 3.5 5 5.067 5 7C5 8.933 6.567 10.5 8.5 10.5C10.433 10.5 12 8.933 12 7C12 5.067 10.433 3.5 8.5 3.5Z"
              fill="#414141"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 11C16.5 10.7239 16.7239 10.5 17 10.5H23C23.2761 10.5 23.5 10.7239 23.5 11C23.5 11.2761 23.2761 11.5 23 11.5H17C16.7239 11.5 16.5 11.2761 16.5 11Z"
              fill="#414141"
            />
          </svg>
          <span className="user-profile__logout">Вийти</span>
        </div>
      </div>
      <img
        className="user-profile__avatar"
        src="https://img.freepik.com/free-photo/businessman-with-sunglasses-and-mustache-in-a-circle-3d-rendering_1142-41006.jpg?w=740&t=st=1715692451~exp=1715693051~hmac=481520812328dddeb4b3aab5a89636e963992a0fec59cd54b8772c528985a36f"
        alt="avatar"
      />
    </div>
  );
};

export default UserProfile;
