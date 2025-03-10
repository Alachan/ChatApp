# ChaTime - Brew Connections, Steep Conversations

A real-time chat application built with Laravel, React, and WebSockets that offers secure, feature-rich communication in themed chatrooms.
[Try it out!](https://cha-time.vercel.app/)

## 🍵 Overview

ChaTime is a modern chat platform that combines the comfort of tea culture with real-time communication technology. Users can join public chatrooms or create private password-protected spaces for more intimate conversations. With features like message editing, deletion, typing indicators, and more, ChaTime delivers a comprehensive messaging experience.

## ✨ Key Features

- **Real-time messaging** using Laravel Reverb
- **User authentication** with Laravel Sanctum
- **Public and private chatrooms** with password protection
- **Message management**: edit, delete, and view historical messages
- **Interactive UI** with typing indicators and real-time member updates
- **Mobile responsive design** with adaptive sidebar layout
- **Profile customization** with avatar uploads and user bios
- **Visual feedback** with animated notifications and transitions
- **System messages** for user joining/leaving events

## 🛠️ Technology Stack

- **Backend**: Laravel, PHP, MySQL
- **Frontend**: React, TailwindCSS, Framer Motion
- **Real-time Communication**: Laravel Echo, Reverb
- **Authentication**: Laravel Sanctum with token-based auth
- **State Management**: React Hooks and Context API

## 📚 Architecture

ChaTime follows a modern client-server architecture:

- **Laravel Backend**: Handles authentication, database operations, and WebSocket events
- **React Frontend**: Provides a responsive, interactive UI with real-time updates
- **WebSockets**: Enables instant messaging and status updates
- **RESTful API**: Connects the frontend and backend with structured endpoints

## 🌟 User Experience

The application was designed with user experience at its core:

- **Intuitive Navigation**: Easy-to-use sidebar for chatroom management
- **Beautiful Animations**: Subtle visual feedback enhances the experience
- **Error Handling**: Comprehensive error states with user-friendly messages
- **Real-time Feedback**: Typing indicators and read receipts for engaging conversations

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/59af9816-d423-4b30-8e19-9bcaf5ae0dd0)
![image](https://github.com/user-attachments/assets/74f52e5e-ad44-4446-b344-faff0a72fbdd)
![image](https://github.com/user-attachments/assets/6f44d61b-bb40-470d-89cf-822f6c16313a)
![image](https://github.com/user-attachments/assets/25f4321d-ed27-4e70-a739-0b98e7ea04b8)
![image](https://github.com/user-attachments/assets/9ddc3895-a5fe-4b50-807b-3c411acfd17c)
![image](https://github.com/user-attachments/assets/108557ee-6249-42dc-86ca-b994f9116544)

## 🚀 Getting Started

### Prerequisites
- PHP 8.1+
- Composer
- Node.js and npm
- MySQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/alachan/chatime.git
cd chatime
```

2. Install PHP dependencies
```bash
composer install
```

3. Install JavaScript dependencies
```bash
npm install
```

4. Create environment file and generate application key
```bash
cp .env.example .env
php artisan key:generate
```

5. Configure your database in the .env file
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chatime
DB_USERNAME=root
DB_PASSWORD=
```

6. Run migrations
```bash
php artisan migrate
```

7. Start the development server
```bash
php artisan serve
npm run dev
```

8. Start the WebSocket server
```bash
php artisan reverb:start
```

## 🔒 Security Features

- CSRF protection for all forms
- Password hashing for user accounts and private rooms
- Token-based authentication with Laravel Sanctum
- Middleware protection for authenticated routes
- Validation for all user inputs

## 🔮 Future Enhancements

- Direct messaging between users
- File sharing capabilities
- Emoji reactions to messages
- Read receipts
- Voice and video chat integration
- Chatroom moderation tools

## 👨‍💻 Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
