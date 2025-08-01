# QR Code Generator

A simple, responsive web application that generates QR codes from user-inputted URLs. This project utilizes HTML, CSS, and JavaScript along with a free external API to dynamically create QR codes.

---

## 🗂️ Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Configuration](#configuration)
* [Dependencies](#dependencies)
* [Examples](#examples)
* [Troubleshooting](#troubleshooting)
* [Contributors](#contributors)
* [License](#license)

---

## 📌 Introduction

This QR Code Generator allows users to input a URL and instantly generate a corresponding QR code using the [GoQR API](https://goqr.me/api/). It includes form validation and a smooth, responsive interface styled with CSS.

---

## ✨ Features

* Real-time QR code generation
* Input validation with error messaging
* Responsive and minimal UI
* Smooth animations and feedback
* Uses an external API (QR Code Generator by `goqr.me`)
* Fully client-side; no backend required

---

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/qrcode-generator.git
   cd qrcode-generator
   ```

2. **Open the project**:

   Simply open the `index.html` file in your browser.

---

## 🚀 Usage

1. Open `index.html` in a web browser.
2. Enter a valid URL into the input field.
3. Click **"Gerar QR Code"**.
4. A QR code will be generated and displayed below the input box.

---

## 🛠️ Configuration

No special configuration is required. However, if you'd like to customize the size or appearance of the QR code, you can modify the URL in the JavaScript file:

```js
qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
```

Change the `size=150x150` parameter to adjust QR image dimensions.

---

## 📦 Dependencies

* HTML5
* CSS3
* Vanilla JavaScript
* [GoQR API](https://goqr.me/api/)

---

## 🧪 Examples

Here’s how it looks in action:

![Example QR Code](https://api.qrserver.com/v1/create-qr-code/?size=150x150\&data=https://example.com)

---


## 👥 Contributors

* **You** – Project creator

Feel free to open issues or submit pull requests!

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Would you like a version of this README in Portuguese as well?
