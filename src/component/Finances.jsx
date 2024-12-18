import { useSidebar } from "../hooks/useSidebar";
import Button from "./Button";
import DashboardHeader from "./DashboardHeader";

const StepCard = ({ icon, title }) => (
  <div className='flex flex-col items-center justify-center bg-white  rounded-3xl border-[0.1px] border-black/30 p-6 w-64 h-48'>
    <div className='text-4xl mb-4'>{icon}</div>
    <p className='text-center text-gray-700 font-light'>{title}</p>
  </div>
);

const Finances = () => {
  const { isSidebarOpen } = useSidebar();

  const steps = [
    {
      icon: (
        <svg
          width='31'
          height='31'
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.5834 6.83325V24.3333M19.9584 11.9374C19.9584 9.92492 17.9998 8.29159 15.5834 8.29159C13.1669 8.29159 11.2084 9.92492 11.2084 11.9374C11.2084 13.9499 13.1669 15.5833 15.5834 15.5833C17.9998 15.5833 19.9584 17.2166 19.9584 19.2291C19.9584 21.2416 17.9998 22.8749 15.5834 22.8749C13.1669 22.8749 11.2084 21.2416 11.2084 19.2291'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M8.29167 2.95127C10.5075 1.66899 13.0232 0.995798 15.5833 1.00002C23.6377 1.00002 30.1667 7.52898 30.1667 15.5834C30.1667 23.6377 23.6377 30.1667 15.5833 30.1667C7.52896 30.1667 1 23.6377 1 15.5834C1 12.9277 1.71021 10.4354 2.95125 8.29169'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      ),
      title: "Select Asset",
    },
    {
      icon: (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.5 2.115L20.385 0L3 17.385V7.5H0V22.5H15V19.5H5.115L22.5 2.115Z'
            fill='black'
          />
        </svg>
      ),
      title: "Select Destination account",
    },
    {
      icon: (
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 2.91675C9.47913 2.91675 2.91663 9.47925 2.91663 17.5001C2.91663 25.5209 9.47913 32.0834 17.5 32.0834C25.5208 32.0834 32.0833 25.5209 32.0833 17.5001C32.0833 9.47925 25.5208 2.91675 17.5 2.91675ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM24.1937 11.0542L14.5833 20.6647L10.8062 16.9022L8.74996 18.9584L14.5833 24.7917L26.25 13.1251L24.1937 11.0542Z'
            fill='black'
          />
        </svg>
      ),
      title: "Approve Transaction",
    },
  ];

  const swaps = [
    {
      icon: (
        <svg
          width='31'
          height='31'
          viewBox='0 0 31 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.5834 6.83325V24.3333M19.9584 11.9374C19.9584 9.92492 17.9998 8.29159 15.5834 8.29159C13.1669 8.29159 11.2084 9.92492 11.2084 11.9374C11.2084 13.9499 13.1669 15.5833 15.5834 15.5833C17.9998 15.5833 19.9584 17.2166 19.9584 19.2291C19.9584 21.2416 17.9998 22.8749 15.5834 22.8749C13.1669 22.8749 11.2084 21.2416 11.2084 19.2291'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M8.29167 2.95127C10.5075 1.66899 13.0232 0.995798 15.5833 1.00002C23.6377 1.00002 30.1667 7.52898 30.1667 15.5834C30.1667 23.6377 23.6377 30.1667 15.5833 30.1667C7.52896 30.1667 1 23.6377 1 15.5834C1 12.9277 1.71021 10.4354 2.95125 8.29169'
            stroke='black'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      ),
      title: "Choose Asset to Swap",
    },
    {
      icon: (
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 2.91675C9.47913 2.91675 2.91663 9.47925 2.91663 17.5001C2.91663 25.5209 9.47913 32.0834 17.5 32.0834C25.5208 32.0834 32.0833 25.5209 32.0833 17.5001C32.0833 9.47925 25.5208 2.91675 17.5 2.91675ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5001C5.83329 11.0688 11.0687 5.83341 17.5 5.83341C23.9312 5.83341 29.1666 11.0688 29.1666 17.5001C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM24.1937 11.0542L14.5833 20.6647L10.8062 16.9022L8.74996 18.9584L14.5833 24.7917L26.25 13.1251L24.1937 11.0542Z'
            fill='black'
          />
        </svg>
      ),
      title: "Approve Transaction",
    },
  ];

  const saves = [
    {
      icon: (
        <svg
          width='36'
          height='39'
          viewBox='0 0 36 39'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 16.8C16.4087 16.8 14.8826 16.1679 13.7574 15.0427C12.6321 13.9175 12 12.3913 12 10.8C12 9.20875 12.6321 7.68263 13.7574 6.55741C14.8826 5.43219 16.4087 4.80005 18 4.80005C19.5913 4.80005 21.1174 5.43219 22.2426 6.55741C23.3679 7.68263 24 9.20875 24 10.8C24 12.3913 23.3679 13.9175 22.2426 15.0427C21.1174 16.1679 19.5913 16.8 18 16.8ZM18 7.20005C16.008 7.20005 14.4 8.80805 14.4 10.8C14.4 12.792 16.008 14.4 18 14.4C19.992 14.4 21.6 12.792 21.6 10.8C21.6 8.80805 19.992 7.20005 18 7.20005Z'
            fill='black'
          />
          <path
            d='M32.4 26.4001C31.728 26.4001 31.2 25.8721 31.2 25.2001C31.2 24.5281 31.728 24.0001 32.4 24.0001C33.072 24.0001 33.6 23.4721 33.6 22.8001C33.6 21.2088 32.9679 19.6826 31.8426 18.5574C30.7174 17.4322 29.1913 16.8001 27.6 16.8001H25.2C24.528 16.8001 24 16.2721 24 15.6C24 14.9281 24.528 14.4001 25.2 14.4001C27.192 14.4001 28.8 12.792 28.8 10.8C28.8 8.80805 27.192 7.20005 25.2 7.20005C24.528 7.20005 24 6.67205 24 6.00005C24 5.32805 24.528 4.80005 25.2 4.80005C26.7913 4.80005 28.3174 5.43219 29.4426 6.55741C30.5679 7.68263 31.2 9.20875 31.2 10.8C31.2 12.288 30.672 13.632 29.76 14.6881C33.336 15.6481 36 18.9121 36 22.8001C36 24.7921 34.392 26.4001 32.4 26.4001ZM3.6 26.4001C1.608 26.4001 0 24.7921 0 22.8001C0 18.9121 2.64 15.6481 6.24 14.6881C5.352 13.632 4.8 12.288 4.8 10.8C4.8 9.20875 5.43214 7.68263 6.55736 6.55741C7.68258 5.43219 9.2087 4.80005 10.8 4.80005C11.472 4.80005 12 5.32805 12 6.00005C12 6.67205 11.472 7.20005 10.8 7.20005C8.808 7.20005 7.2 8.80805 7.2 10.8C7.2 12.792 8.808 14.4001 10.8 14.4001C11.472 14.4001 12 14.9281 12 15.6C12 16.2721 11.472 16.8001 10.8 16.8001H8.4C6.8087 16.8001 5.28258 17.4322 4.15736 18.5574C3.03214 19.6826 2.4 21.2088 2.4 22.8001C2.4 23.4721 2.928 24.0001 3.6 24.0001C4.272 24.0001 4.8 24.5281 4.8 25.2001C4.8 25.8721 4.272 26.4001 3.6 26.4001ZM25.2 33.6001H10.8C8.808 33.6001 7.2 31.9921 7.2 30.0001V27.6001C7.2 22.9681 10.968 19.2001 15.6 19.2001H20.4C25.032 19.2001 28.8 22.9681 28.8 27.6001V30.0001C28.8 31.9921 27.192 33.6001 25.2 33.6001ZM15.6 21.6001C14.0087 21.6001 12.4826 22.2322 11.3574 23.3574C10.2321 24.4826 9.6 26.0088 9.6 27.6001V30.0001C9.6 30.6721 10.128 31.2001 10.8 31.2001H25.2C25.872 31.2001 26.4 30.6721 26.4 30.0001V27.6001C26.4 26.0088 25.7679 24.4826 24.6426 23.3574C23.5174 22.2322 21.9913 21.6001 20.4 21.6001H15.6Z'
            fill='black'
          />
        </svg>
      ),
      title: "Select Friends",
    },
    {
      icon: (
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 3C18.563 3 19.118 3.0305 19.665 3.0915C19.8608 3.11317 20.0504 3.17319 20.223 3.26814C20.3956 3.36309 20.5478 3.4911 20.671 3.64488C20.7941 3.79865 20.8857 3.97517 20.9406 4.16436C20.9956 4.35355 21.0127 4.5517 20.991 4.7475C20.9693 4.9433 20.9093 5.13292 20.8144 5.30552C20.7194 5.47813 20.5914 5.63034 20.4376 5.75347C20.2838 5.8766 20.1073 5.96824 19.9181 6.02315C19.729 6.07806 19.5308 6.09517 19.335 6.0735C16.8631 5.79697 14.3663 6.29541 12.19 7.49988C10.0137 8.70436 8.26553 10.5553 7.1872 12.7968C6.10887 15.0382 5.7537 17.5594 6.17084 20.0115C6.58797 22.4637 7.75679 24.7256 9.51561 26.4844C11.2744 28.2432 13.5363 29.412 15.9885 29.8292C18.4406 30.2463 20.9618 29.8911 23.2032 28.8128C25.4447 27.7345 27.2956 25.9863 28.5001 23.81C29.7046 21.6337 30.203 19.1369 29.9265 16.665C29.9048 16.4692 29.9219 16.271 29.9769 16.0819C30.0318 15.8927 30.1234 15.7162 30.2465 15.5624C30.4952 15.2518 30.8571 15.0528 31.2525 15.009C31.6479 14.9652 32.0446 15.0804 32.3551 15.329C32.5089 15.4522 32.6369 15.6044 32.7319 15.777C32.8268 15.9496 32.8868 16.1392 32.9085 16.335C32.9685 16.882 32.999 17.437 33 18C33 26.2845 26.2845 33 18 33C9.7155 33 3 26.2845 3 18C3 9.7155 9.7155 3 18 3ZM17.952 11.8155C18.0509 12.2006 17.9928 12.6092 17.7906 12.9515C17.5883 13.2938 17.2585 13.5418 16.8735 13.641C15.8158 13.9181 14.8951 14.5705 14.2831 15.4766C13.6711 16.3826 13.4096 17.4804 13.5476 18.565C13.6855 19.6497 14.2133 20.6471 15.0326 21.3712C15.8519 22.0952 16.9066 22.4965 18 22.5C18.998 22.5004 19.9677 22.1691 20.7568 21.5581C21.5459 20.9472 22.1095 20.0913 22.359 19.125C22.4653 18.7475 22.7152 18.4267 23.0552 18.2313C23.3952 18.0358 23.7982 17.9813 24.1779 18.0793C24.5576 18.1774 24.8838 18.4203 25.0866 18.7559C25.2894 19.0915 25.3528 19.4933 25.263 19.875C24.8028 21.6389 23.7163 23.1749 22.2062 24.1962C20.6962 25.2174 18.866 25.6539 17.0576 25.4243C15.2492 25.1946 13.5863 24.3144 12.3795 22.9481C11.1727 21.5818 10.5046 19.8229 10.5 18C10.4997 16.3371 11.0522 14.7212 12.0704 13.4065C13.0886 12.0918 14.5149 11.1527 16.125 10.737C16.3158 10.6878 16.5144 10.6767 16.7094 10.7043C16.9045 10.7319 17.0922 10.7976 17.2619 10.8978C17.4316 10.998 17.5798 11.1305 17.6982 11.288C17.8166 11.4455 17.9029 11.6247 17.952 11.8155ZM27.756 3.1905C28.0298 3.30402 28.2638 3.49611 28.4285 3.74251C28.5933 3.98892 28.6813 4.27861 28.6815 4.575V7.32H31.425C31.7216 7.32006 32.0116 7.40807 32.2582 7.5729C32.5048 7.73772 32.697 7.97197 32.8105 8.24602C32.924 8.52007 32.9537 8.82162 32.8959 9.11255C32.838 9.40348 32.6952 9.67072 32.4855 9.8805L27.18 15.18C26.8988 15.4613 26.5173 15.6194 26.1195 15.6195H22.5L19.758 18.363C19.4765 18.6445 19.0948 18.8026 18.6968 18.8026C18.2987 18.8026 17.917 18.6445 17.6355 18.363C17.354 18.0815 17.1959 17.6998 17.1959 17.3018C17.1959 16.9037 17.354 16.522 17.6355 16.2405L20.379 13.5V9.879C20.3791 9.48121 20.5372 9.09974 20.8185 8.8185L26.121 3.5145C26.3308 3.3046 26.5981 3.16164 26.8891 3.1037C27.1802 3.04576 27.4818 3.07544 27.756 3.189M25.6815 8.1945L23.379 10.5V12.621H25.5L27.804 10.3185H27.1815C26.7837 10.3185 26.4021 10.1605 26.1208 9.87916C25.8395 9.59786 25.6815 9.21632 25.6815 8.8185V8.1945Z'
            fill='black'
          />
        </svg>
      ),
      title: "Set Savings Target",
    },
    {
      icon: (
        <svg
          width='35'
          height='38'
          viewBox='0 0 35 38'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M30.3333 18.1016C31.0625 18.5998 31.7127 19.1649 32.2839 19.7969C32.855 20.4288 33.3472 21.1215 33.7604 21.875C34.1736 22.6285 34.4774 23.4245 34.6719 24.263C34.8663 25.1016 34.9757 25.9583 35 26.8333C35 28.2795 34.7266 29.6406 34.1797 30.9167C33.6328 32.1927 32.8793 33.3047 31.9193 34.2526C30.9592 35.2005 29.8472 35.9479 28.5833 36.4948C27.3194 37.0417 25.9583 37.3212 24.5 37.3333C23.3941 37.3333 22.3247 37.1693 21.2917 36.8411C20.2587 36.513 19.3108 36.0391 18.4479 35.4193C17.5851 34.7995 16.8194 34.0582 16.151 33.1953C15.4826 32.3325 14.9661 31.3785 14.6016 30.3333H0V2.33333H4.66667V0H7V2.33333H23.3333V0H25.6667V2.33333H30.3333V18.1016ZM2.33333 4.66667V9.33333H28V4.66667H25.6667V7H23.3333V4.66667H7V7H4.66667V4.66667H2.33333ZM14.0547 28C14.0182 27.6233 14 27.2344 14 26.8333C14 25.7882 14.1458 24.7734 14.4375 23.7891C14.7292 22.8047 15.1727 21.875 15.7682 21H14V18.6667H16.3333V20.2344C16.8316 19.6146 17.3845 19.0677 17.9922 18.5938C18.5998 18.1198 19.2561 17.7127 19.9609 17.3724C20.6658 17.0321 21.401 16.7769 22.1667 16.6068C22.9323 16.4366 23.7101 16.3455 24.5 16.3333C25.7153 16.3333 26.8819 16.5339 28 16.9349V11.6667H2.33333V28H14.0547ZM24.5 35C25.6302 35 26.6875 34.7873 27.6719 34.362C28.6562 33.9366 29.5191 33.3533 30.2604 32.612C31.0017 31.8707 31.5851 31.0078 32.0104 30.0234C32.4358 29.0391 32.6545 27.9757 32.6667 26.8333C32.6667 25.7031 32.454 24.6458 32.0286 23.6615C31.6033 22.6771 31.02 21.8142 30.2786 21.0729C29.5373 20.3316 28.6745 19.7483 27.6901 19.3229C26.7057 18.8976 25.6424 18.6788 24.5 18.6667C23.3698 18.6667 22.3125 18.8793 21.3281 19.3047C20.3438 19.73 19.4809 20.3134 18.7396 21.0547C17.9983 21.796 17.4149 22.6589 16.9896 23.6432C16.5642 24.6276 16.3455 25.691 16.3333 26.8333C16.3333 27.9635 16.546 29.0208 16.9714 30.0052C17.3967 30.9896 17.98 31.8524 18.7214 32.5938C19.4627 33.3351 20.3255 33.9184 21.3099 34.3438C22.2943 34.7691 23.3576 34.9878 24.5 35ZM25.6667 25.6667H29.1667V28H23.3333V21H25.6667V25.6667ZM4.66667 18.6667H7V21H4.66667V18.6667ZM9.33333 18.6667H11.6667V21H9.33333V18.6667ZM9.33333 14H11.6667V16.3333H9.33333V14ZM4.66667 23.3333H7V25.6667H4.66667V23.3333ZM9.33333 23.3333H11.6667V25.6667H9.33333V23.3333ZM16.3333 16.3333H14V14H16.3333V16.3333ZM21 16.3333H18.6667V14H21V16.3333ZM25.6667 16.3333H23.3333V14H25.6667V16.3333Z'
            fill='black'
          />
        </svg>
      ),
      title: "Select Duration",
    },
  ];

  return (
    <div
      className={`flex flex-col  ${isSidebarOpen ? "md:ml-[300px]" : "ml-0"}`}
    >
      <div className='sticky top-0'>
        <DashboardHeader />
      </div>

      <main className='m-5 mt-10'>
        {/* Title Card */}
        <div className='my-7'>
          <div className='text-xl flex items-center gap-3'>
            <svg
              width='23'
              height='23'
              viewBox='0 0 23 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M22.6416 0.14118C22.924 0.346534 23.0395 0.620338 22.9882 0.962593L19.7025 20.6765C19.6597 20.9246 19.5228 21.1172 19.2918 21.2541C19.172 21.3225 19.0394 21.3567 18.8939 21.3567C18.7998 21.3567 18.6971 21.3353 18.5859 21.2926L12.7718 18.9182L9.66586 22.7044C9.51185 22.9012 9.30222 22.9996 9.03697 22.9996C8.92573 22.9996 8.83161 22.9824 8.75461 22.9482C8.59204 22.8883 8.46155 22.7878 8.36315 22.6466C8.26475 22.5054 8.21556 22.3493 8.21556 22.1781V17.6989L19.3046 4.10706L5.58447 15.979L0.514809 13.8998C0.198223 13.7801 0.0270952 13.5448 0.00142606 13.1939C-0.0156867 12.8517 0.121215 12.5993 0.412133 12.4367L21.7689 0.115511C21.8972 0.0385037 22.0341 0 22.1796 0C22.3507 0 22.5047 0.0470601 22.6416 0.14118Z'
                fill='black'
              />
            </svg>

            <h3>Make Transfer</h3>
          </div>
          <p className='text-sm font-light'>
            Make transactions simply and fast using Suifi
          </p>
        </div>

        {/* Card */}
        <div className='flex flex-col items-start gap-8'>
          <div className='flex gap-4 flex-wrap justify-start'>
            {steps.map((step, index) => (
              <div
                key={index}
                className='flex justify-center items-center gap-4'
              >
                <StepCard icon={step.icon} title={step.title} />
                {index !== steps.length - 1 && (
                  <svg
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2.27285 14.2357L12.0621 8.58377C13.3126 7.86318 13.3126 6.68172 12.0621 5.96025L2.27197 0.308302C1.02143 -0.414042 0 0.177126 0 1.62006V12.924C0 14.3669 1.02317 14.9581 2.27197 14.2357H2.27285Z'
                      fill='black'
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <Button
            variant={"primary"}
            icon={
              <div>
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                    fill='black'
                  />
                </svg>
              </div>
            }
          >
            <div>Transfer now</div>
          </Button>
        </div>

        {/* Swap Card */}
        <div className='my-7'>
          <div className='text-xl flex items-center gap-3'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 14.0001C20.2549 14.0004 20.5 14.098 20.6854 14.273C20.8707 14.4479 20.9822 14.6871 20.9972 14.9415C21.0121 15.1959 20.9293 15.4465 20.7657 15.6419C20.6021 15.8374 20.3701 15.963 20.117 15.9931L20 16.0001H6.41399L8.70699 18.2931C8.88634 18.4731 8.99046 18.7145 8.99822 18.9685C9.00597 19.2224 8.91678 19.4698 8.74874 19.6604C8.58071 19.8509 8.34644 19.9704 8.09352 19.9945C7.84059 20.0186 7.58798 19.9455 7.38699 19.7901L7.29299 19.7071L3.46299 15.8771C2.79799 15.2131 3.22399 14.0941 4.12599 14.0061L4.24099 14.0001H20ZM15.293 4.29311C15.4652 4.12093 15.6943 4.0175 15.9373 4.00222C16.1803 3.98694 16.4206 4.06085 16.613 4.21011L16.707 4.29311L20.537 8.12311C21.202 8.78711 20.776 9.90611 19.874 9.99411L19.759 10.0001H3.99999C3.74511 9.99982 3.49996 9.90223 3.31462 9.72726C3.12929 9.55229 3.01776 9.31315 3.00282 9.05871C2.98788 8.80427 3.07067 8.55373 3.23426 8.35827C3.39785 8.16282 3.62989 8.03721 3.88299 8.00711L3.99999 8.00011H17.586L15.293 5.70711C15.1055 5.51958 15.0002 5.26527 15.0002 5.00011C15.0002 4.73494 15.1055 4.48063 15.293 4.29311Z'
                fill='black'
              />
            </svg>

            <h3>Swap Assets</h3>
          </div>
          <p className='text-sm font-light'>
            Swap your assets with ease and fast!
          </p>
        </div>

        {/* Card */}
        <div className='flex flex-col items-start gap-8'>
          <div className='flex gap-4 flex-wrap justify-start'>
            {swaps.map((swap, index) => (
              <div
                key={index}
                className='flex justify-center items-center gap-4'
              >
                <StepCard icon={swap.icon} title={swap.title} />
                {index !== swaps.length - 1 && (
                  <svg
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2.27285 14.2357L12.0621 8.58377C13.3126 7.86318 13.3126 6.68172 12.0621 5.96025L2.27197 0.308302C1.02143 -0.414042 0 0.177126 0 1.62006V12.924C0 14.3669 1.02317 14.9581 2.27197 14.2357H2.27285Z'
                      fill='black'
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <Button
            variant={"primary"}
            icon={
              <div>
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                    fill='black'
                  />
                </svg>
              </div>
            }
          >
            <div>Make a Swap</div>
          </Button>
        </div>

        {/* Save Card */}
        <div className='my-7'>
          <div className='text-xl flex items-center gap-3'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.5 7.3335H9.16667'
                stroke='black'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19.0969 8.25H16.7118C15.0755 8.25 13.75 9.48108 13.75 11C13.75 12.5189 15.0764 13.75 16.7108 13.75H19.0969C19.1739 13.75 19.2115 13.75 19.2436 13.7482C19.7386 13.7179 20.1327 13.3522 20.1648 12.8929C20.1667 12.8636 20.1667 12.8278 20.1667 12.7572V9.24275C20.1667 9.17217 20.1667 9.13642 20.1648 9.10708C20.1318 8.64783 19.7386 8.28208 19.2436 8.25183C19.2124 8.25 19.1739 8.25 19.0969 8.25Z'
                stroke='black'
                strokeWidth='1.5'
              />
              <path
                d='M19.218 8.25008C19.1465 6.53408 18.9173 5.48175 18.1757 4.74108C17.1023 3.66675 15.3735 3.66675 11.9167 3.66675H9.16671C5.70996 3.66675 3.98112 3.66675 2.90771 4.74108C1.83429 5.81541 1.83337 7.54333 1.83337 11.0001C1.83337 14.4568 1.83337 16.1857 2.90771 17.2591C3.98204 18.3325 5.70996 18.3334 9.16671 18.3334H11.9167C15.3735 18.3334 17.1023 18.3334 18.1757 17.2591C18.9173 16.5184 19.1474 15.4661 19.218 13.7501'
                stroke='black'
                strokeWidth='1.5'
              />
              <path
                d='M16.4918 11H16.5018'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <h3>Save with friends</h3>
          </div>
          <p className='text-sm font-light'>
            Save money and make contributions with your friends and family
          </p>
        </div>

        {/* Card */}
        <div className='flex flex-col items-start gap-8'>
          <div className='flex gap-4 flex-wrap justify-start'>
            {saves.map((save, index) => (
              <div
                key={index}
                className='flex justify-center items-center gap-4'
              >
                <StepCard icon={save.icon} title={save.title} />
                {index !== saves.length - 1 && (
                  <svg
                    width='13'
                    height='15'
                    viewBox='0 0 13 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M2.27285 14.2357L12.0621 8.58377C13.3126 7.86318 13.3126 6.68172 12.0621 5.96025L2.27197 0.308302C1.02143 -0.414042 0 0.177126 0 1.62006V12.924C0 14.3669 1.02317 14.9581 2.27197 14.2357H2.27285Z'
                      fill='black'
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <Button
            variant={"primary"}
            icon={
              <div>
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0 6H12.25L7 0.75L7.66 0L14.16 6.5L7.66 13L7 12.25L12.25 7H0V6Z'
                    fill='black'
                  />
                </svg>
              </div>
            }
          >
            <div>Start Saving</div>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Finances;
