# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
<!-- ------------------------------------------------------------------------------------------------ -->
## Cài đặt Tailwind CSS với ReactJS

Để cài đặt và cấu hình Tailwind CSS cho dự án ReactJS, bạn thực hiện các bước sau:

**1. Tạo dự án React:**

* Khởi tạo dự án React mới bằng Create React App:

```bash
npx create-react-app my-app
cd my-app
```

**2. Cài đặt Tailwind CSS:**

* Cài đặt Tailwind CSS, PostCSS và Autoprefixer:

```bash
npm install -D tailwindcss postcss autoprefixer
```

**3. Khởi tạo Tailwind CSS:**

* Chạy lệnh sau để khởi tạo Tailwind CSS:

```bash
npx tailwindcss init -p
```

**4. Cấu hình Tailwind CSS:**

* Mở file `tailwind.config.js` và chỉnh sửa nội dung như sau:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* Trong phần `content`, bạn có thể thêm các đường dẫn đến các file component React mà bạn muốn áp dụng Tailwind CSS.
* Trong phần `theme`, bạn có thể tùy chỉnh các lớp CSS mặc định của Tailwind CSS.
* Trong phần `plugins`, bạn có thể thêm các plugin Tailwind CSS khác.

**5. Thêm Tailwind CSS vào dự án:**

* Mở file `postcss.config.js` và thêm nội dung sau:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

**6. Chạy dự án:**

* Chạy lệnh sau để khởi động server phát triển:

```bash
npm start
```

**Giải thích:**

* `npx create-react-app my-app`: Khởi tạo dự án React mới với tên `my-app`.
* `npm install -D tailwindcss postcss autoprefixer`: Cài đặt Tailwind CSS, PostCSS và Autoprefixer.
* `npx tailwindcss init -p`: Khởi tạo Tailwind CSS và tạo file `tailwind.config.js`.
* `tailwind.config.js`: File cấu hình Tailwind CSS.
* `postcss.config.js`: File cấu hình PostCSS, bao gồm Tailwind CSS và Autoprefixer.
* `npm start`: Khởi động server phát triển để xem ứng dụng React của bạn.

**Lưu ý:**

* Đảm bảo bạn đã cài đặt Node.js và npm trước khi thực hiện các bước trên.
* Bạn có thể tham khảo thêm tài liệu chính thức của Tailwind CSS và ReactJS để biết thêm thông tin chi tiết về cách sử dụng và cấu hình:
    * [https://v2.tailwindcss.com/docs](https://v2.tailwindcss.com/docs)
    * [https://legacy.reactjs.org/docs/getting-started.html](https://legacy.reactjs.org/docs/getting-started.html)

**Ngoài ra, bạn có thể tham khảo một số hướng dẫn chi tiết sau:**

* Hướng dẫn thêm Tailwind CSS vào dự án React JS: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
* Cài đặt Tailwind CSS cho project React: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
* Hướng dẫn Tailwind CSS với React: [https://www.youtube.com/watch?v=L2KHCWJ3gjs](https://www.youtube.com/watch?v=L2KHCWJ3gjs)

Chúc bạn thành công!
