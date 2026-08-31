# Notes App

A simple browser-based notes application for creating and managing personal notes.

## Features

- Create notes
- Edit notes
- Delete notes
- Simple organization
- Responsive interface
- Persistent browser storage

## Persistence

The application can use browser local storage to keep notes available between sessions. Stored data should be treated as application data rather than a secure vault.

## Data Handling

Notes should be normalized before storage, and empty notes should be rejected. When stored data is unavailable or malformed, the application should recover gracefully instead of breaking the interface.

## How to Use

1. Create a new note.
2. Enter your content.
3. Save the note.
4. Edit or remove notes whenever needed.

## Data Safety

Local browser storage can keep notes available between sessions without requiring a backend service. Users should still avoid storing sensitive information in a demo application.

## Technologies

- HTML5
- CSS3
- JavaScript

## Purpose

This project was created to practice CRUD operations, local browser storage, validation, and DOM manipulation.

## License

This project is open source and available under the MIT License.
