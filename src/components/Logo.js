/* eslint-disable */
import React from 'react';
import { m } from 'framer-motion';

// ----------------------------------------------------------------

const animationVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeIn',
    },
  },
};

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 841.89 595.28">
      <defs>
        <style>{'.cls-1{fill:#da5126;}.cls-2{fill:#89b740;}.cls-3{fill:#e28e25;}.cls-4{fill:#ec1c24;}'}</style>
      </defs>
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M361,289.2c-.32,4.76-.58,9.59-.78,14.28-.06,2.83-.13,5.59-.26,8.41h31l.78-22.76h2.65c-.38,6.48-.77,13-1,19.52-.13,3.11-.19,6.21-.32,9.32-.13,3.79-.32,7.58-.45,11.38-.07,2.76-.07,5.52-.07,8.28h-2.91c.32-4.76.58-9.45.77-14.15.13-3.17.2-6.34.33-9.45h-31c-.33,5.87-.59,11.73-.65,17.59-.07,2-.07,4-.07,5.94h-2.85c.46-8.28.91-16.56,1.23-24.84.26-7.86.39-15.73.52-23.52Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M402.5,303.27c3.69-10.21,12.11-14.9,22-14.9A28,28,0,0,1,436.38,291c7.64,4,10.81,12,10.81,20.77,0,2.07-.32,11-4.53,17.31-2.66,4-8.36,9.32-19.24,9.32-2.33,0-10.36-.35-16.13-5.8a18.7,18.7,0,0,1-3.17-3.93c-3.43-5.66-3.5-11.87-3.5-14.08A34.8,34.8,0,0,1,402.5,303.27Zm8.55,29.18c2.07,1.52,6.15,3.52,12.63,3.52a23.93,23.93,0,0,0,4.73-.41,17.15,17.15,0,0,0,9.78-4.76c5.05-5,5.83-11.18,6.15-13.66.07-.69.33-3.11.33-5.45,0-9.66-4.28-15-7.13-17.25a18.61,18.61,0,0,0-7.12-3.17,26.41,26.41,0,0,0-6.29-.76,20,20,0,0,0-16.9,8.76c-4,5.86-4,13-4,15.45C403.41,324.93,407.81,330.11,411.05,332.45Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M458.21,289.27c-.33,4.14-.65,8.34-.84,12.55-.2,4.9-.33,9.8-.52,14.7-.26,6.27-.52,12.62-.84,18.9,5.11.07,10.23.21,15.28,0,2.33-.07,4.67-.14,6.93-.28v2.42H453.35c.45-7.66.91-15.32,1.23-23,.33-8.42.52-16.84.65-25.32Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M487.88,289.27c-.33,4.14-.65,8.34-.84,12.55-.2,4.9-.33,9.8-.52,14.7-.26,6.27-.52,12.62-.84,18.9,5.11.07,10.23.21,15.28,0,2.33-.07,4.67-.14,6.93-.28v2.42H483c.45-7.66.91-15.32,1.23-23,.32-8.42.52-16.84.65-25.32Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M534.91,289.13c2.71,8.28,5.44,16.49,8.22,24.7,2.66,7.86,5.38,15.72,8.1,23.59h-3c-1.43-4.48-2.85-9-4.34-13.52-1-3.18-2.14-6.42-3.18-9.59H522c-1.81,3.72-3.63,7.45-5.31,11.11-1.88,4-3.63,8-5.38,11.93h-3.11c3.57-7.17,7.13-14.42,10.63-21.59,4.27-8.9,8.48-17.8,12.69-26.63ZM522.73,312h17.42L533,291.2Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M561.79,289.13c2.85,4.62,5.7,9.17,8.68,13.66,3.56,5.52,7.25,11,10.82,16.49,3.43,5.17,6.8,10.41,10.17,15.59.25-7,.58-13.87.9-20.84.26-5.72.52-11.52.65-17.24.06-2.56.13-5.11.13-7.66h2.91c-.45,6.42-.84,12.76-1.16,19.18-.46,9.66-.78,19.31-1.1,29l-3.89-.07L581,323.21c-3-4.62-6-9.25-9-13.8l-11.53-17.8c-.52,10.63-1.1,21.18-1.43,31.8-.19,4.63-.32,9.32-.45,13.94h-2.72c.58-9.11,1.1-18.28,1.42-27.52q.39-10.35.59-20.7Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M602.86,337.42c.58-8.9,1.17-17.87,1.55-26.84.33-7,.46-14.21.65-21.31,5,.07,10,.14,15,0,6.74-.07,12.38-.21,17.56,4.27,3.11,2.7,6.73,7.46,6.73,17.25,0,3.52-.45,13.18-7.51,20.14a21.69,21.69,0,0,1-7.71,4.9A35,35,0,0,1,617,337.42Zm2.78-2.07H618c5.83-.21,10.23-.48,15-4.21,3.5-2.76,8.74-8.9,8.74-20.35a23.45,23.45,0,0,0-2.59-11.45c-4.21-7.38-10.69-7.59-18.2-7.8H607.65Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M383.91,366.75l-.07,2.48c-1.68-.13-3.43-.27-5.25-.34H360.52l-.84,20.28h12.57q3.11.1,6.22,0l2.85-.21-.07,2.62a50.42,50.42,0,0,0-8.42-.2H359.68l-.78,21.45H373c1.55,0,3.11,0,4.66-.07s3.05-.2,4.54-.34v2.48h-26c.45-7.66.91-15.38,1.23-23.11.32-8.35.45-16.69.65-25Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M427.57,371.16c-1.3-.48-2.53-1-3.89-1.38a41.15,41.15,0,0,0-10.82-1.44c-5,0-9.65,1-13.79,4a21,21,0,0,0-4.15,3.93c-4.79,6.07-5.12,13.66-5.12,16.42s.2,10.62,6.22,15.93a18.17,18.17,0,0,0,5.31,3.25c4.28,1.72,9.59,1.65,10.82,1.65,3.82,0,6.41-.34,13.21-2.28l.78-20.62a76.4,76.4,0,0,0-11.92.27v-2.55h14.71c-.26,5.11-.52,10.21-.72,15.39-.13,3.24-.19,6.48-.25,9.79-5.58,1.24-10.89,2.42-16.78,2.42-7.84,0-16.2-2.35-20.66-9.8-2.4-3.86-3.44-9-3.44-13.73,0-3.45.59-12.55,7.45-19.52a19.83,19.83,0,0,1,6.61-4.55c2.46-1.11,6.22-2.28,12.56-2.28a51.63,51.63,0,0,1,13.61,1.86Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M445.9,382.06l4.66,8.7c1.43-2.42,2.85-4.9,4.34-7.32,2-3.17,4.15-6.34,6.09-9.59,1.43-2.34,2.79-4.75,4.15-7.1h3c-2.46,3.93-4.92,7.86-7.45,11.8-2.14,3.24-4.28,6.55-6.28,9.86-1,1.66-2,3.24-3,4.9l-.91,21.59-2.92-.07c.33-3.52.65-7.1.85-10.69s.39-7.38.52-11.11c-4.73-9-9.46-17.66-14.19-26.28l3,.07c1.3,2.55,2.53,5,3.89,7.59Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M488.52,366.75c2.59.07,4.67.21,6.74,1.86A10.86,10.86,0,0,1,499,377.3a14.43,14.43,0,0,1-4.47,10.49c-3,2.83-7.58,4-11.66,4a35.19,35.19,0,0,1-5.64-.69l-.71-2.28a22.35,22.35,0,0,0,5.7.69,23.46,23.46,0,0,0,3.82-.27,11.36,11.36,0,0,0,10.3-11.73c0-5-2.53-7-4.21-7.79A11.18,11.18,0,0,0,488,369l-12.57.07c-.52,10.83-1,21.66-1.3,32.49-.13,4.48-.19,9-.26,13.38h-3c.58-9.1,1.1-18.21,1.42-27.39.26-6.89.39-13.86.52-20.76Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M530.69,369.23a81.9,81.9,0,0,0-14.12-.41c-.51,9.31-1,18.69-1.29,28-.2,6.07-.26,12.07-.39,18.07h-3.11q.68-10.45,1.17-20.9c.32-8.42.58-16.83.84-25.18-2.72-.07-5.44-.14-8.16,0-2.08.07-4.08.21-6.09.41v-2.48h31.15Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M537.63,366.75c-.33,7-.65,13.93-.91,20.9-.32,9.18-.58,18.28-.78,27.46H533c.52-9,1-18,1.29-27,.2-7.11.26-14.22.39-21.32Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M567.29,366.68c2.72,8.28,5.44,16.49,8.23,24.7,2.66,7.86,5.38,15.73,8.1,23.59h-3c-1.43-4.48-2.85-9-4.34-13.52-1-3.17-2.14-6.42-3.18-9.59H554.34c-1.81,3.73-3.63,7.45-5.31,11.11-1.88,4-3.63,8-5.38,11.93h-3.11c3.56-7.17,7.13-14.42,10.63-21.59,4.27-8.9,8.48-17.8,12.69-26.63Zm-12.17,22.9h17.42l-7.19-20.83Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M594.18,366.68c2.85,4.62,5.7,9.17,8.68,13.66,3.56,5.52,7.25,11,10.82,16.49,3.43,5.17,6.8,10.41,10.16,15.59.26-7,.59-13.87.91-20.84.26-5.72.52-11.52.65-17.24.06-2.55.13-5.11.13-7.66h2.91c-.45,6.42-.84,12.76-1.16,19.18-.46,9.66-.78,19.31-1.1,29l-3.89-.07-8.94-14.07c-3-4.62-6-9.24-9-13.8l-11.53-17.8c-.52,10.63-1.1,21.18-1.43,31.81-.19,4.62-.32,9.31-.45,13.93h-2.72c.58-9.1,1.1-18.28,1.42-27.52q.39-10.35.59-20.7Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M690.5,370.4c-3.83-1.1-7.19-2.13-11.21-2.13a27.09,27.09,0,0,0-10.62,2.2c-4.15,2.14-11.21,8.49-11.21,21.18,0,2.76.2,11,6,16.7,4.21,4.07,9.07,5.24,14.71,5.24,3.5,0,5.57-.28,11.66-2.14l-.39,3a45.31,45.31,0,0,1-11,1.52c-8.48,0-12.89-2.56-15.87-5.11-3.3-2.69-7.71-8.14-7.71-19,0-6.69,1.82-13.25,6.09-18.14,3-3.45,8.1-7.52,18.2-7.52a62.79,62.79,0,0,1,11.28,1.24Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        d="M695.94,380.82c3.69-10.21,12.11-14.9,22-14.9a28,28,0,0,1,11.86,2.62c7.64,4,10.81,12,10.81,20.77,0,2.07-.32,11-4.53,17.31-2.66,4-8.36,9.32-19.24,9.32-2.33,0-10.36-.35-16.13-5.8a18.7,18.7,0,0,1-3.17-3.93c-3.44-5.66-3.5-11.87-3.5-14.07A34.55,34.55,0,0,1,695.94,380.82ZM704.49,410c2.07,1.52,6.15,3.52,12.63,3.52a23.93,23.93,0,0,0,4.73-.41,17.15,17.15,0,0,0,9.78-4.76c5-5,5.83-11.18,6.15-13.66.07-.69.33-3.11.33-5.45,0-9.66-4.28-15-7.13-17.25a18.61,18.61,0,0,0-7.12-3.17,26.41,26.41,0,0,0-6.29-.76,19.92,19.92,0,0,0-16.9,8.76c-3.95,5.86-4,13-3.95,15.45C696.85,402.48,701.25,407.66,704.49,410Z"
      />
      <m.path variants={animationVariants} initial="initial" animate="visible" d="M749.64,414.9h-3.56v-3.73h3.56Z" />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-1"
        d="M209.16,137.3c-31.6,0-57.22,27.28-57.22,60.94s25.62,60.93,57.22,60.93,57.22-27.28,57.22-60.93S240.76,137.3,209.16,137.3Zm35.67,54.54a7.71,7.71,0,0,1-2.16,8.13c-3.33,3.39-7.56,5.08-11.59,7.16a63.75,63.75,0,0,0-6.26,3.36c-4.58,3-6,7.55-4,12.89,1.86,5.11,3.75,10.22,5.87,15.22.92,2.17.68,3.18-1.48,4a45.86,45.86,0,0,1-36.93-1.37c-2-.92-2-1.92-1-3.61a8.81,8.81,0,0,1,3.18-2.84c7-4.76,13-10.5,15.39-19.42,3-11.18-1.49-25.5-10-31.94a21.71,21.71,0,0,0-1.91-1.26,1.9,1.9,0,0,0-2.94.58c-.85,1.38-.05,2.27,1,2.94a21.54,21.54,0,0,1,8.9,11.93c4.62,14.32.59,24.06-11.07,32.64-1.59,1.17-3.09.34-4.54-.21-7.73-2.94-12.36-9.1-15-17.06-2.38-7.13-3.06-14.58-3-22.11a13.21,13.21,0,0,1,3-7.92,57.89,57.89,0,0,1,28.54-20.78c7-2.31,13.2.33,17.8,6.33,2.37,3.1,5.08,3.42,8.24,2.46A18,18,0,0,0,235,163.68c1.88-2.81,4.32-6,7.74-4.67s3.4,5.53,3.12,8.87a36.81,36.81,0,0,0,.48,10.06,16.73,16.73,0,0,1-1.34,10.5A4.24,4.24,0,0,0,244.83,191.84Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-2"
        d="M332.61,137.3c-31.6,0-57.22,27.28-57.22,60.94s25.62,60.93,57.22,60.93,57.22-27.28,57.22-60.93S364.21,137.3,332.61,137.3Zm40.26,47.06a9.11,9.11,0,0,1-13.24,0,2.82,2.82,0,0,0-.95-.67,2.64,2.64,0,0,0-3.05.67l-34.78,37a3.11,3.11,0,0,0,0,4.25,10.48,10.48,0,0,1,0,14.11,9.24,9.24,0,0,1-13.35,0,10.34,10.34,0,0,1-2.73-7.5,3.21,3.21,0,0,0-.84-2.24,2.8,2.8,0,0,0-2-.9h-.1a9,9,0,0,1-7-2.91,10.38,10.38,0,0,1,0-14.1,9.3,9.3,0,0,1,13.24,0,2.88,2.88,0,0,0,.94.67,2.64,2.64,0,0,0,3-.67l34.79-37a3.11,3.11,0,0,0,0-4.25,10.38,10.38,0,0,1,0-14.1,9.21,9.21,0,0,1,13.34,0,10.28,10.28,0,0,1,2.73,7.5,3.21,3.21,0,0,0,.85,2.23,2.61,2.61,0,0,0,2.1.9,9,9,0,0,1,7,2.91A10.38,10.38,0,0,1,372.87,184.36Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-3"
        d="M148.58,326.37a.78.78,0,0,0-1.15,0l-4.17,4.43a.91.91,0,0,0,0,1.23l2.15,2.3c.26.29.52.56.77.81l1.25,1.33a.78.78,0,0,0,1.15,0l4.17-4.44a.91.91,0,0,0,0-1.23Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-3"
        d="M130.69,325.75a.78.78,0,0,0-1.15,0l-4.14,4.4a.93.93,0,0,0,0,1.23l4.14,4.4a.78.78,0,0,0,1.15,0l1.46-1.54a21.12,21.12,0,0,0,1.45-1.55l1.23-1.31a.91.91,0,0,0,0-1.23Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-3"
        d="M166.33,324.93a.78.78,0,0,0-1.15,0l-4.23,4.5a.93.93,0,0,0,0,1.23l4.23,4.5a.78.78,0,0,0,1.15,0l4.23-4.5a.91.91,0,0,0,0-1.23Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-3"
        d="M147.32,299c-31.37,0-36.46,12.74-36.46,13.29s13.06,9.27,37.08,9.27c22.77,0,36.08-8.71,36.08-9.27S180.78,299,147.32,299Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-3"
        d="M147.44,254.46c-31.6,0-57.22,27.28-57.22,60.94s25.62,60.93,57.22,60.93,57.22-27.28,57.22-60.93S179,254.46,147.44,254.46Zm28.95,83.15c-6.32,2.1-13,2.9-19.56,3.49-1.16.11-2.32.17-3.47.18-.86,0-1.75-.08-2.1,1a3.75,3.75,0,0,0,.86,4l1.88,2c3,3.24,3,3.24-.06,6.6-5.21,5.65-5.21,5.65-10.47.14-3.39-3.56-3.38-3.56,0-7.15.69-.74,1.38-1.48,2.06-2.23s1.15-3.19.14-4a1.79,1.79,0,0,0-1.34-.25c-.68,0-1.36,0-2,0a39.58,39.58,0,0,1-4.07-.3c-2.73-.34-5.48-.51-8.2-.93a60.87,60.87,0,0,1-14.07-3.66c-16.49-6.69-17-26.77-9.38-36.13a30.65,30.65,0,0,1,15.9-10.08,89.38,89.38,0,0,1,50.3.07c8.88,2.61,16.64,7.52,19.73,17.83a24.08,24.08,0,0,1,.59,6.81C193,326.51,187.51,333.91,176.39,337.61Z"
      />
      <m.path
        variants={animationVariants}
        initial="initial"
        animate="visible"
        className="cls-4"
        d="M270.89,254.46c-31.61,0-57.22,27.28-57.22,60.94s25.61,60.93,57.22,60.93,57.22-27.28,57.22-60.93S302.49,254.46,270.89,254.46Zm39.31,62c-1,2.29-3.13,4.07-4.92,5.89-10.92,11.13-21.94,22.16-32.81,33.35-2,2.06-3.33,1.58-5-.16q-6.77-7.07-13.61-14.05C247.48,335,241,328.6,234.66,322c-3.6-3.73-5.38-8.41-5.25-16.17.12-11.62,13.41-20.7,24.93-17.62,5.3,1.42,9.35,5.18,13.24,9.06,3.4,3.38,3.34,3.37,6.87-.12s7.12-7.43,12.19-9.05c7-2.23,16.54-.52,21.95,7C313,301.2,313.57,308.6,310.2,316.46Z"
      />
    </svg>
  );
}

export default Logo;
