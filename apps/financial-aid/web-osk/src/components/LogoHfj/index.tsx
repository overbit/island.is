import React from 'react'
import cn from 'classnames'

interface LogoProps {
  className?: string
}

const LogoHfj = ({ className }: LogoProps) => {
  return (
    <a
      href="https://www.hafnarfjordur.is/"
      target="_blank"
      className={cn({ [`${className}`]: true })}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 267 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="267" height="112" rx="8" />
        <path
          d="M75.4336 80.9182V85.077C72.4836 88.2023 64.7485 87.9267 62.2307 84.5008C62.2307 84.5008 60.001 87.2879 55.3537 87.2879C50.9194 87.2879 48.2137 84.5008 48.2137 84.5008C48.2137 84.5008 45.5142 87.2879 41.0799 87.2879C36.4326 87.2879 34.2029 84.5008 34.2029 84.5008C31.685 87.9267 23.95 88.2023 21 85.077V80.9182C23.1545 82.9851 30.6892 84.5446 34.2029 79.8033C34.2029 79.8033 41.7813 87.8453 48.2137 79.8033C54.6522 87.8453 62.2307 79.8033 62.2307 79.8033C65.7444 84.5383 73.279 82.9851 75.4336 80.9182ZM75.4336 89.6303V93.7891C72.4836 96.9144 64.7485 96.6389 62.2307 93.2129C62.2307 93.2129 60.001 96 55.3537 96C50.9194 96 48.2137 93.2129 48.2137 93.2129C48.2137 93.2129 45.5142 96 41.0799 96C36.4326 96 34.2029 93.2129 34.2029 93.2129C31.685 96.6389 23.95 96.9144 21 93.7891V89.6303C23.1545 91.6972 30.6892 93.2567 34.2029 88.5155C34.2029 88.5155 41.7813 96.5574 48.2137 88.5155C54.6522 96.5574 62.2307 88.5155 62.2307 88.5155C65.7444 93.2567 73.279 91.6972 75.4336 89.6303Z"
          fill="#4363A9"
        />
        <path
          d="M35.6245 84.4946L34.5222 82.8348L40.1904 79.0706L43.1529 29.1967L45.1384 29.3094L42.1195 80.1792L35.6245 84.4946ZM60.8152 84.4946L61.9175 82.8348L56.2493 79.0706L53.2868 29.1967L51.3014 29.3094L54.3202 80.1792L60.8152 84.4946ZM47.224 58.2266H49.2157V61.6088H47.224V58.2266ZM47.224 45.7253H49.2157V49.1074H47.224V45.7253ZM47.224 33.2239H49.2157V36.606H47.224V33.2239Z"
          fill="#4363A9"
        />
        <path
          d="M40.6664 26.6099H55.7732V29.8104H40.6664V26.6099Z"
          fill="#4363A9"
        />
        <path
          d="M45.1448 27.1234H43.1531V21.0043H45.1448V27.1234ZM53.2807 27.1234H51.289V21.0043H53.2807V27.1234Z"
          fill="#4363A9"
        />
        <path
          d="M43.2406 23.4407L23.3611 18.0042L23.3549 18.0293V18.9312L37.3156 23.8854L23.3549 28.7456V29.6726L43.2406 24.3614V23.4407ZM53.1928 23.4407L73.0785 18.0042L73.0848 18.0293V18.9312L59.1241 23.8854L73.0848 28.7456V29.6726L53.1928 24.3614V23.4407ZM48.2449 16L40.6664 20.165V21.5304H55.7732V20.165L48.2449 16Z"
          fill="#4363A9"
        />
        <path
          d="M97.148 45V35.228H98.996V37.006H101.544C101.992 37.006 102.393 37.0807 102.748 37.23C103.112 37.3793 103.42 37.5893 103.672 37.86C103.924 38.1213 104.115 38.4387 104.246 38.812C104.377 39.176 104.442 39.582 104.442 40.03C104.442 40.478 104.377 40.8887 104.246 41.262C104.115 41.6353 103.924 41.9573 103.672 42.228C103.42 42.4893 103.112 42.6947 102.748 42.844C102.393 42.9933 101.992 43.068 101.544 43.068H98.996V45H97.148ZM98.996 41.444H101.376C101.731 41.444 102.011 41.3507 102.216 41.164C102.421 40.9773 102.524 40.7067 102.524 40.352V39.708C102.524 39.3533 102.421 39.0827 102.216 38.896C102.011 38.7093 101.731 38.616 101.376 38.616H98.996V41.444ZM106.005 37.692H107.797V45.882C107.797 46.498 107.643 46.9693 107.335 47.296C107.027 47.632 106.537 47.8 105.865 47.8H104.885V46.372H106.005V37.692ZM106.901 36.628C106.527 36.628 106.257 36.544 106.089 36.376C105.93 36.208 105.851 35.9933 105.851 35.732V35.452C105.851 35.1907 105.93 34.976 106.089 34.808C106.257 34.64 106.527 34.556 106.901 34.556C107.265 34.556 107.531 34.64 107.699 34.808C107.867 34.976 107.951 35.1907 107.951 35.452V35.732C107.951 35.9933 107.867 36.208 107.699 36.376C107.531 36.544 107.265 36.628 106.901 36.628ZM112.772 45.168C112.249 45.168 111.778 45.0793 111.358 44.902C110.947 44.7247 110.593 44.468 110.294 44.132C110.005 43.796 109.781 43.3947 109.622 42.928C109.463 42.452 109.384 41.92 109.384 41.332C109.384 40.744 109.463 40.2167 109.622 39.75C109.781 39.2833 110.005 38.8867 110.294 38.56C110.593 38.224 110.947 37.9673 111.358 37.79C111.778 37.6127 112.249 37.524 112.772 37.524C113.295 37.524 113.766 37.6127 114.186 37.79C114.606 37.9673 114.961 38.224 115.25 38.56C115.549 38.8867 115.777 39.2833 115.936 39.75C116.095 40.2167 116.174 40.744 116.174 41.332C116.174 41.92 116.095 42.452 115.936 42.928C115.777 43.3947 115.549 43.796 115.25 44.132C114.961 44.468 114.606 44.7247 114.186 44.902C113.766 45.0793 113.295 45.168 112.772 45.168ZM112.772 43.726C113.248 43.726 113.621 43.5813 113.892 43.292C114.163 43.0027 114.298 42.578 114.298 42.018V40.66C114.298 40.1093 114.163 39.6893 113.892 39.4C113.621 39.1107 113.248 38.966 112.772 38.966C112.305 38.966 111.937 39.1107 111.666 39.4C111.395 39.6893 111.26 40.1093 111.26 40.66V42.018C111.26 42.578 111.395 43.0027 111.666 43.292C111.937 43.5813 112.305 43.726 112.772 43.726ZM112.968 36.866L111.89 36.348L113.22 33.73L114.732 34.472L112.968 36.866ZM117.763 45V37.692H119.555V38.91H119.625C119.774 38.518 120.007 38.1913 120.325 37.93C120.651 37.6593 121.099 37.524 121.669 37.524C122.425 37.524 123.003 37.7713 123.405 38.266C123.806 38.7607 124.007 39.4653 124.007 40.38V45H122.215V40.562C122.215 40.0393 122.121 39.6473 121.935 39.386C121.748 39.1247 121.44 38.994 121.011 38.994C120.824 38.994 120.642 39.022 120.465 39.078C120.297 39.1247 120.143 39.1993 120.003 39.302C119.872 39.3953 119.765 39.5167 119.681 39.666C119.597 39.806 119.555 39.974 119.555 40.17V45H117.763ZM130.361 43.782H130.291C130.226 43.9687 130.137 44.146 130.025 44.314C129.922 44.4727 129.787 44.6173 129.619 44.748C129.46 44.8787 129.264 44.9813 129.031 45.056C128.807 45.1307 128.546 45.168 128.247 45.168C127.491 45.168 126.912 44.9207 126.511 44.426C126.11 43.9313 125.909 43.2267 125.909 42.312V37.692H127.701V42.13C127.701 42.634 127.799 43.0213 127.995 43.292C128.191 43.5533 128.504 43.684 128.933 43.684C129.11 43.684 129.283 43.6607 129.451 43.614C129.628 43.5673 129.782 43.4973 129.913 43.404C130.044 43.3013 130.151 43.18 130.235 43.04C130.319 42.8907 130.361 42.718 130.361 42.522V37.692H132.153V45H130.361V43.782ZM136.618 45.168C135.918 45.168 135.33 45.0513 134.854 44.818C134.378 44.5753 133.958 44.244 133.594 43.824L134.686 42.76C134.956 43.068 135.25 43.3107 135.568 43.488C135.894 43.6653 136.268 43.754 136.688 43.754C137.117 43.754 137.425 43.6793 137.612 43.53C137.808 43.3807 137.906 43.1753 137.906 42.914C137.906 42.6993 137.836 42.5313 137.696 42.41C137.565 42.2793 137.336 42.1907 137.01 42.144L136.282 42.046C135.488 41.9433 134.882 41.7193 134.462 41.374C134.051 41.0193 133.846 40.506 133.846 39.834C133.846 39.4793 133.911 39.162 134.042 38.882C134.172 38.5927 134.359 38.35 134.602 38.154C134.844 37.9487 135.134 37.7947 135.47 37.692C135.815 37.58 136.198 37.524 136.618 37.524C136.972 37.524 137.285 37.552 137.556 37.608C137.836 37.6547 138.088 37.7293 138.312 37.832C138.536 37.9253 138.741 38.0467 138.928 38.196C139.114 38.336 139.296 38.4947 139.474 38.672L138.424 39.722C138.209 39.498 137.952 39.3113 137.654 39.162C137.355 39.0127 137.028 38.938 136.674 38.938C136.282 38.938 135.997 39.008 135.82 39.148C135.652 39.288 135.568 39.47 135.568 39.694C135.568 39.9367 135.638 40.1233 135.778 40.254C135.927 40.3753 136.174 40.464 136.52 40.52L137.262 40.618C138.839 40.842 139.628 41.5607 139.628 42.774C139.628 43.1287 139.553 43.4553 139.404 43.754C139.264 44.0433 139.063 44.2953 138.802 44.51C138.54 44.7153 138.223 44.8787 137.85 45C137.486 45.112 137.075 45.168 136.618 45.168ZM143.382 45C142.766 45 142.295 44.8413 141.968 44.524C141.651 44.1973 141.492 43.7353 141.492 43.138V39.12H140.414V37.692H140.974C141.245 37.692 141.427 37.6313 141.52 37.51C141.623 37.3793 141.674 37.188 141.674 36.936V35.69H143.284V37.692H144.782V39.12H143.284V43.572H144.67V45H143.382ZM150.705 43.782H150.635C150.569 43.9687 150.481 44.146 150.369 44.314C150.266 44.4727 150.131 44.6173 149.963 44.748C149.804 44.8787 149.608 44.9813 149.375 45.056C149.151 45.1307 148.889 45.168 148.591 45.168C147.835 45.168 147.256 44.9207 146.855 44.426C146.453 43.9313 146.253 43.2267 146.253 42.312V37.692H148.045V42.13C148.045 42.634 148.143 43.0213 148.339 43.292C148.535 43.5533 148.847 43.684 149.277 43.684C149.454 43.684 149.627 43.6607 149.795 43.614C149.972 43.5673 150.126 43.4973 150.257 43.404C150.387 43.3013 150.495 43.18 150.579 43.04C150.663 42.8907 150.705 42.718 150.705 42.522V37.692H152.497V45H150.705V43.782ZM159.943 45C159.551 45 159.239 44.888 159.005 44.664C158.781 44.4307 158.641 44.1227 158.585 43.74H158.501C158.38 44.216 158.133 44.5753 157.759 44.818C157.386 45.0513 156.924 45.168 156.373 45.168C155.627 45.168 155.053 44.972 154.651 44.58C154.25 44.188 154.049 43.6653 154.049 43.012C154.049 42.256 154.32 41.696 154.861 41.332C155.403 40.9587 156.173 40.772 157.171 40.772H158.417V40.24C158.417 39.8293 158.31 39.512 158.095 39.288C157.881 39.064 157.535 38.952 157.059 38.952C156.639 38.952 156.299 39.0453 156.037 39.232C155.785 39.4093 155.571 39.624 155.393 39.876L154.329 38.924C154.6 38.504 154.959 38.168 155.407 37.916C155.855 37.6547 156.448 37.524 157.185 37.524C158.175 37.524 158.926 37.748 159.439 38.196C159.953 38.644 160.209 39.288 160.209 40.128V43.572H160.937V45H159.943ZM156.975 43.866C157.377 43.866 157.717 43.7773 157.997 43.6C158.277 43.4227 158.417 43.1613 158.417 42.816V41.85H157.269C156.336 41.85 155.869 42.1487 155.869 42.746V42.984C155.869 43.2827 155.963 43.5067 156.149 43.656C156.345 43.796 156.621 43.866 156.975 43.866ZM167.806 35.214L166.77 35.886C167.414 36.558 167.932 37.3327 168.324 38.21C168.716 39.0873 168.912 40.0627 168.912 41.136C168.912 41.8267 168.828 42.4287 168.66 42.942C168.492 43.446 168.254 43.866 167.946 44.202C167.647 44.5287 167.288 44.7713 166.868 44.93C166.448 45.0887 165.981 45.168 165.468 45.168C164.917 45.168 164.422 45.084 163.984 44.916C163.554 44.7387 163.186 44.4913 162.878 44.174C162.579 43.8567 162.35 43.4693 162.192 43.012C162.033 42.5547 161.954 42.046 161.954 41.486C161.954 40.9633 162.019 40.4873 162.15 40.058C162.29 39.6287 162.486 39.26 162.738 38.952C162.99 38.644 163.293 38.406 163.648 38.238C164.012 38.07 164.413 37.986 164.852 37.986C165.356 37.986 165.776 38.112 166.112 38.364C166.457 38.6067 166.728 38.938 166.924 39.358L167.008 39.316C166.896 38.84 166.695 38.3873 166.406 37.958C166.126 37.5287 165.785 37.118 165.384 36.726L164.18 37.482L163.536 36.712L164.628 36.054C164.301 35.7833 163.956 35.5313 163.592 35.298C163.237 35.0647 162.878 34.8453 162.514 34.64H165.244C165.374 34.7147 165.5 34.8033 165.622 34.906C165.743 34.9993 165.869 35.0973 166 35.2L167.176 34.458L167.806 35.214ZM165.44 43.796C165.934 43.796 166.326 43.6373 166.616 43.32C166.905 43.0027 167.05 42.5593 167.05 41.99V41.178C167.05 40.6087 166.905 40.1653 166.616 39.848C166.326 39.5307 165.934 39.372 165.44 39.372C164.936 39.372 164.539 39.5307 164.25 39.848C163.96 40.1653 163.816 40.6087 163.816 41.178V41.99C163.816 42.5593 163.96 43.0027 164.25 43.32C164.539 43.6373 164.936 43.796 165.44 43.796ZM171.528 36.628C171.154 36.628 170.884 36.544 170.716 36.376C170.557 36.208 170.478 35.9933 170.478 35.732V35.452C170.478 35.1907 170.557 34.976 170.716 34.808C170.884 34.64 171.154 34.556 171.528 34.556C171.892 34.556 172.158 34.64 172.326 34.808C172.494 34.976 172.578 35.1907 172.578 35.452V35.732C172.578 35.9933 172.494 36.208 172.326 36.376C172.158 36.544 171.892 36.628 171.528 36.628ZM170.632 37.692H172.424V45H170.632V37.692ZM176.293 45C175.677 45 175.224 44.846 174.935 44.538C174.646 44.23 174.501 43.796 174.501 43.236V34.64H176.293V43.572H177.259V45H176.293ZM179.512 36.628C179.139 36.628 178.868 36.544 178.7 36.376C178.541 36.208 178.462 35.9933 178.462 35.732V35.452C178.462 35.1907 178.541 34.976 178.7 34.808C178.868 34.64 179.139 34.556 179.512 34.556C179.876 34.556 180.142 34.64 180.31 34.808C180.478 34.976 180.562 35.1907 180.562 35.452V35.732C180.562 35.9933 180.478 36.208 180.31 36.376C180.142 36.544 179.876 36.628 179.512 36.628ZM178.616 37.692H180.408V45H178.616V37.692Z"
          fill="#421C63"
        />
        <path
          d="M198 33.75C194.554 33.75 191.75 36.5538 191.75 40C191.75 43.4462 194.554 46.25 198 46.25C201.446 46.25 204.25 43.4462 204.25 40C204.25 36.5538 201.446 33.75 198 33.75ZM198 36.3125C198.449 36.3125 198.812 36.6763 198.812 37.125C198.812 37.5737 198.449 37.9375 198 37.9375C197.551 37.9375 197.188 37.5737 197.188 37.125C197.188 36.6763 197.551 36.3125 198 36.3125ZM199.5 43.375H196.75C196.474 43.375 196.25 43.1511 196.25 42.875C196.25 42.5989 196.474 42.375 196.75 42.375H197.625V39.625H197.125C196.849 39.625 196.625 39.4011 196.625 39.125C196.625 38.8489 196.849 38.625 197.125 38.625H198.125C198.401 38.625 198.625 38.8489 198.625 39.125V42.375H199.5C199.776 42.375 200 42.5989 200 42.875C200 43.1511 199.776 43.375 199.5 43.375Z"
          fill="#C3ABD9"
        />
        <path
          d="M108.12 67.92H101.136V75H97.968V58.248H101.136V65.112H108.12V58.248H111.288V75H108.12V67.92ZM124.242 75C123.57 75 123.034 74.808 122.634 74.424C122.25 74.024 122.01 73.496 121.914 72.84H121.77C121.562 73.656 121.138 74.272 120.498 74.688C119.858 75.088 119.066 75.288 118.122 75.288C116.842 75.288 115.858 74.952 115.17 74.28C114.482 73.608 114.138 72.712 114.138 71.592C114.138 70.296 114.602 69.336 115.53 68.712C116.458 68.072 117.778 67.752 119.49 67.752H121.626V66.84C121.626 66.136 121.442 65.592 121.074 65.208C120.706 64.824 120.114 64.632 119.298 64.632C118.578 64.632 117.994 64.792 117.546 65.112C117.114 65.416 116.746 65.784 116.442 66.216L114.618 64.584C115.082 63.864 115.698 63.288 116.466 62.856C117.234 62.408 118.25 62.184 119.514 62.184C121.21 62.184 122.498 62.568 123.378 63.336C124.258 64.104 124.698 65.208 124.698 66.648V72.552H125.946V75H124.242ZM119.154 73.056C119.842 73.056 120.426 72.904 120.906 72.6C121.386 72.296 121.626 71.848 121.626 71.256V69.6H119.658C118.058 69.6 117.258 70.112 117.258 71.136V71.544C117.258 72.056 117.418 72.44 117.738 72.696C118.074 72.936 118.546 73.056 119.154 73.056ZM129.056 64.896H127.208V62.472H129.056V60.672C129.056 59.568 129.344 58.72 129.92 58.128C130.512 57.536 131.376 57.24 132.512 57.24H134.696V59.688H132.128V62.472H134.696V64.896H132.128V75H129.056V64.896ZM136.823 75V62.472H139.895V64.56H140.015C140.271 63.888 140.671 63.328 141.215 62.88C141.775 62.416 142.543 62.184 143.519 62.184C144.815 62.184 145.807 62.608 146.495 63.456C147.183 64.304 147.527 65.512 147.527 67.08V75H144.455V67.392C144.455 66.496 144.295 65.824 143.975 65.376C143.655 64.928 143.127 64.704 142.391 64.704C142.071 64.704 141.759 64.752 141.455 64.848C141.167 64.928 140.903 65.056 140.663 65.232C140.439 65.392 140.255 65.6 140.111 65.856C139.967 66.096 139.895 66.384 139.895 66.72V75H136.823ZM160.148 75C159.476 75 158.94 74.808 158.54 74.424C158.156 74.024 157.916 73.496 157.82 72.84H157.676C157.468 73.656 157.044 74.272 156.404 74.688C155.764 75.088 154.972 75.288 154.028 75.288C152.748 75.288 151.764 74.952 151.076 74.28C150.388 73.608 150.044 72.712 150.044 71.592C150.044 70.296 150.508 69.336 151.436 68.712C152.364 68.072 153.684 67.752 155.396 67.752H157.532V66.84C157.532 66.136 157.348 65.592 156.98 65.208C156.612 64.824 156.02 64.632 155.204 64.632C154.484 64.632 153.9 64.792 153.452 65.112C153.02 65.416 152.652 65.784 152.348 66.216L150.524 64.584C150.988 63.864 151.604 63.288 152.372 62.856C153.14 62.408 154.156 62.184 155.42 62.184C157.116 62.184 158.404 62.568 159.284 63.336C160.164 64.104 160.604 65.208 160.604 66.648V72.552H161.852V75H160.148ZM155.06 73.056C155.748 73.056 156.332 72.904 156.812 72.6C157.292 72.296 157.532 71.848 157.532 71.256V69.6H155.564C153.964 69.6 153.164 70.112 153.164 71.136V71.544C153.164 72.056 153.324 72.44 153.644 72.696C153.98 72.936 154.452 73.056 155.06 73.056ZM164.339 75V62.472H167.411V65.064H167.531C167.611 64.728 167.731 64.408 167.891 64.104C168.067 63.784 168.291 63.504 168.562 63.264C168.835 63.024 169.155 62.832 169.523 62.688C169.907 62.544 170.347 62.472 170.843 62.472H171.515V65.376H170.555C169.515 65.376 168.731 65.528 168.203 65.832C167.675 66.136 167.411 66.632 167.411 67.32V75H164.339ZM174.572 64.896H172.724V62.472H174.572V60.672C174.572 59.568 174.86 58.72 175.436 58.128C176.028 57.536 176.892 57.24 178.028 57.24H180.212V59.688H177.644V62.472H180.212V64.896H177.644V75H174.572V64.896ZM182.339 62.472H185.411V76.512C185.411 77.568 185.147 78.376 184.619 78.936C184.091 79.512 183.251 79.8 182.099 79.8H180.418V77.352H182.339V62.472ZM183.875 60.648C183.235 60.648 182.771 60.504 182.483 60.216C182.211 59.928 182.075 59.56 182.075 59.112V58.632C182.075 58.184 182.211 57.816 182.483 57.528C182.771 57.24 183.235 57.096 183.875 57.096C184.499 57.096 184.955 57.24 185.243 57.528C185.531 57.816 185.675 58.184 185.675 58.632V59.112C185.675 59.56 185.531 59.928 185.243 60.216C184.955 60.504 184.499 60.648 183.875 60.648ZM193.939 75.288C193.043 75.288 192.235 75.136 191.515 74.832C190.811 74.528 190.203 74.088 189.691 73.512C189.195 72.936 188.811 72.248 188.539 71.448C188.267 70.632 188.131 69.72 188.131 68.712C188.131 67.704 188.267 66.8 188.539 66C188.811 65.2 189.195 64.52 189.691 63.96C190.203 63.384 190.811 62.944 191.515 62.64C192.235 62.336 193.043 62.184 193.939 62.184C194.835 62.184 195.643 62.336 196.363 62.64C197.083 62.944 197.691 63.384 198.187 63.96C198.699 64.52 199.091 65.2 199.363 66C199.635 66.8 199.771 67.704 199.771 68.712C199.771 69.72 199.635 70.632 199.363 71.448C199.091 72.248 198.699 72.936 198.187 73.512C197.691 74.088 197.083 74.528 196.363 74.832C195.643 75.136 194.835 75.288 193.939 75.288ZM193.939 72.816C194.755 72.816 195.395 72.568 195.859 72.072C196.323 71.576 196.555 70.848 196.555 69.888V67.56C196.555 66.616 196.323 65.896 195.859 65.4C195.395 64.904 194.755 64.656 193.939 64.656C193.139 64.656 192.507 64.904 192.043 65.4C191.579 65.896 191.347 66.616 191.347 67.56V69.888C191.347 70.848 191.579 71.576 192.043 72.072C192.507 72.568 193.139 72.816 193.939 72.816ZM191.443 60.48C190.819 60.48 190.379 60.352 190.123 60.096C189.867 59.824 189.739 59.488 189.739 59.088V58.584C189.739 58.184 189.867 57.856 190.123 57.6C190.379 57.328 190.819 57.192 191.443 57.192C192.067 57.192 192.507 57.328 192.763 57.6C193.019 57.856 193.147 58.184 193.147 58.584V59.088C193.147 59.488 193.019 59.824 192.763 60.096C192.507 60.352 192.067 60.48 191.443 60.48ZM196.483 60.48C195.859 60.48 195.419 60.352 195.163 60.096C194.907 59.824 194.779 59.488 194.779 59.088V58.584C194.779 58.184 194.907 57.856 195.163 57.6C195.419 57.328 195.859 57.192 196.483 57.192C197.107 57.192 197.547 57.328 197.803 57.6C198.059 57.856 198.187 58.184 198.187 58.584V59.088C198.187 59.488 198.059 59.824 197.803 60.096C197.547 60.352 197.107 60.48 196.483 60.48ZM202.495 75V62.472H205.567V65.064H205.687C205.767 64.728 205.887 64.408 206.047 64.104C206.223 63.784 206.447 63.504 206.719 63.264C206.991 63.024 207.311 62.832 207.679 62.688C208.063 62.544 208.503 62.472 208.999 62.472H209.671V65.376H208.711C207.671 65.376 206.887 65.528 206.359 65.832C205.831 66.136 205.567 66.632 205.567 67.32V75H202.495ZM221.087 58.224L219.311 59.376C220.415 60.528 221.303 61.856 221.975 63.36C222.647 64.864 222.983 66.536 222.983 68.376C222.983 69.56 222.839 70.592 222.551 71.472C222.263 72.336 221.855 73.056 221.327 73.632C220.815 74.192 220.199 74.608 219.479 74.88C218.759 75.152 217.959 75.288 217.079 75.288C216.135 75.288 215.287 75.144 214.535 74.856C213.799 74.552 213.167 74.128 212.639 73.584C212.127 73.04 211.735 72.376 211.463 71.592C211.191 70.808 211.055 69.936 211.055 68.976C211.055 68.08 211.167 67.264 211.391 66.528C211.631 65.792 211.967 65.16 212.399 64.632C212.831 64.104 213.351 63.696 213.959 63.408C214.583 63.12 215.271 62.976 216.023 62.976C216.887 62.976 217.607 63.192 218.183 63.624C218.775 64.04 219.239 64.608 219.575 65.328L219.719 65.256C219.527 64.44 219.183 63.664 218.687 62.928C218.207 62.192 217.623 61.488 216.935 60.816L214.871 62.112L213.767 60.792L215.639 59.664C215.079 59.2 214.487 58.768 213.863 58.368C213.255 57.968 212.639 57.592 212.015 57.24H216.695C216.919 57.368 217.135 57.52 217.343 57.696C217.551 57.856 217.767 58.024 217.991 58.2L220.007 56.928L221.087 58.224ZM217.031 72.936C217.879 72.936 218.551 72.664 219.047 72.12C219.543 71.576 219.791 70.816 219.791 69.84V68.448C219.791 67.472 219.543 66.712 219.047 66.168C218.551 65.624 217.879 65.352 217.031 65.352C216.167 65.352 215.487 65.624 214.991 66.168C214.495 66.712 214.247 67.472 214.247 68.448V69.84C214.247 70.816 214.495 71.576 214.991 72.12C215.487 72.664 216.167 72.936 217.031 72.936ZM233.42 72.912H233.3C233.188 73.232 233.036 73.536 232.844 73.824C232.668 74.096 232.436 74.344 232.148 74.568C231.876 74.792 231.54 74.968 231.14 75.096C230.756 75.224 230.308 75.288 229.796 75.288C228.5 75.288 227.508 74.864 226.82 74.016C226.132 73.168 225.788 71.96 225.788 70.392V62.472H228.86V70.08C228.86 70.944 229.028 71.608 229.364 72.072C229.7 72.52 230.236 72.744 230.972 72.744C231.276 72.744 231.572 72.704 231.86 72.624C232.164 72.544 232.428 72.424 232.652 72.264C232.876 72.088 233.06 71.88 233.204 71.64C233.348 71.384 233.42 71.088 233.42 70.752V62.472H236.492V75H233.42V72.912ZM240.042 75V62.472H243.114V65.064H243.234C243.314 64.728 243.434 64.408 243.594 64.104C243.77 63.784 243.994 63.504 244.266 63.264C244.538 63.024 244.858 62.832 245.226 62.688C245.61 62.544 246.05 62.472 246.546 62.472H247.218V65.376H246.258C245.218 65.376 244.434 65.528 243.906 65.832C243.378 66.136 243.114 66.632 243.114 67.32V75H240.042Z"
          fill="#421C63"
        />
      </svg>
    </a>
  )
}

export default LogoHfj
